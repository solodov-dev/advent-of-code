#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void) {
  char *line = NULL;
  size_t len = 0;
  int sum = 0;

  while (getline(&line, &len, stdin) != -1) {
    char *start = line;
    char *end = start + strlen(line);

    while (!isdigit(*start)) {
      start++;
    }

    while (!isdigit(*end)) {
      end--;
    }

    sum += (*start - '0') * 10 + (*end - '0');
  }

  printf("%d", sum);
}
