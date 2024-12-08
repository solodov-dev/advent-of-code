#include <ctype.h>
#include <stdio.h>
#include <string.h>

int isstrnum(char *p);

int main(void) {
  char *line = NULL;
  size_t len = 0;
  int sum = 0;

  while (getline(&line, &len, stdin) != -1) {
    char *start = line;
    char *end = start + strlen(line);

    while (!(isdigit(*start) || isstrnum(start))) {
      start++;
    }

    while (!(isdigit(*end) || isstrnum(end))) {
      end--;
    }

    sum += (*start - '0') * 10 + (*end - '0');
  }

  printf("%d", sum);
}

int isstrnum(char *p) {
#define N 10

  char *ns[N] = {"zero", "one", "two",   "three", "four",
                 "five", "six", "seven", "eight", "nine"};

  for (int i = 0; i < N; i++) {
    if (strncmp(ns[i], p, strlen(ns[i])) == 0) {
      *p = i + '0';
      return 1;
    }
  }

  return 0;
}
