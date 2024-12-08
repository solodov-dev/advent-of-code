use std::{collections::HashSet, fs};

fn main() {
    let input = fs::read_to_string("input").expect("Couldn't read a file");
    println!("Solution to day 3, part 1: {}", solution_part1(&input));
    println!("Solution to day 3, part 2: {}", solution_part2(&input));
}

struct Santa {
    x: i32,
    y: i32,
}

impl Santa {
    fn new() -> Santa {
        Santa { x: 0, y: 0 }
    }

    fn go(&mut self, c: char) {
        match c {
            '>' => self.x += 1,
            '<' => self.x -= 1,
            '^' => self.y += 1,
            'v' => self.y -= 1,
            _ => panic!("Unknown character: {}", c.escape_debug()),
        }
    }

    fn position(&self) -> String {
        format!("x{}y{}", self.x, self.y)
    }
}

fn solution_part1(input: &str) -> usize {
    let mut santa = Santa::new();
    let mut coords = HashSet::new();
    coords.insert(santa.position());

    input.trim().chars().for_each(|c| {
        santa.go(c);
        coords.insert(santa.position());
    });

    coords.len()
}

fn solution_part2(input: &str) -> usize {
    let mut santas = [Santa::new(), Santa::new()];
    let mut coords = HashSet::new();
    coords.insert(santas[0].position());

    input.trim().chars().enumerate().for_each(|(i, c)| {
        let idx = i % 2;
        santas[idx].go(c);
        coords.insert(santas[idx].position());
    });

    coords.len()
}

#[test]
fn test_solution_part1() {
    assert_eq!(solution_part1(">"), 2);
    assert_eq!(solution_part1("^>v<"), 4);
    assert_eq!(solution_part1("^v^v^v^v^v"), 2);
}

#[test]
fn test_solution_part2() {
    assert_eq!(solution_part2("^v"), 3);
    assert_eq!(solution_part2("^>v<"), 3);
    assert_eq!(solution_part2("^v^v^v^v^v"), 11);
}
