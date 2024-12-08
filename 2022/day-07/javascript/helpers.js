class Node {
  constructor(type, name, children, parent, size) {
    this.type = type;
    this.name = name;
    this.children = children;
    this.parent = parent;
    this.size = size ? size : 0;
  }

  dirSize() {
    if (this.type === 'dir') {
      return this.children.filter(child => child.type === 'file').reduce((acc, cur) => acc + Number(cur.size), 0)
    }
  }
}

export class Filesystem {
  TOTAL_SPACE = 70000000;
  FOR_UPDATE = 30000000;

  constructor(input) {
    this.root = new Node('dir', '/', [], null);
    this.currentDir = this.root;
    for (const line of input) {
      this.read(line);
    }
  }

  read(line) {
    if (line[0] === '$') {
      this.readCmd(line);
    } else {
      this.readNode(line);
    }
  }

  readNode(line) {
    const [a, b] = line.split(' ');
    if (a === 'dir') {
      this.addDir(b);
    } else {
      this.addFile(+a, b);
    }
  }

  addFile(size, name) {
    if (!this.currentDir.children.find(child => child.type === 'file' && child.name === name)) {
      this.currentDir.children.push(new Node('file', name, null, this.currentDir, size));
      this.updateSizes(this.currentDir, size);
    }
  }

  updateSizes(dir, size) {
    dir.size += size;
    if (dir.parent) {
      this.updateSizes(dir.parent, size);
    }
  }

  addDir(dirname) {
    if (!this.currentDir.children.find(child => child.type === 'dir' && child.name === dirname)) {
      this.currentDir.children.push(new Node('dir', dirname, [], this.currentDir))
    }
  }

  readCmd(line) {
    const [_, cmd, arg] = line.split(' ');
    if (cmd === 'cd') {
      if (arg === '..') {
        this.currentDir = this.currentDir.parent;
      } else if(arg === '/') {
        this.currentDir = this.root;
      } else {
        this.currentDir = this.currentDir.children.find(node => node.name === arg)
      }
    }
  }

  getDirs(callback) {
    const sizes = [];

    function getSize(dir) {
      if (callback(dir)) {
        sizes.push(dir.size);
      }

      dir.children.filter(child => child.type === 'dir').forEach(child => getSize(child));
    }

    getSize(this.root);
    return sizes;
  }

  getFreeSpace() {
    return this.TOTAL_SPACE - this.root.size;
  }

  getSpaceForUpdate() {
    return this.FOR_UPDATE - this.getFreeSpace();
  }
}