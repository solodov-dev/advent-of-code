#include <ctype.h>
#include <stdio.h>

struct Color {
  char tag;
  int max;
  int step;
};

struct Color colors[3] = {
    {'b', 14, 4},
    {'r', 12, 3},
    {'g', 13, 5},
};

int main(void) {
  char *line = NULL;
  size_t len = 0;
  int game_id;
  int num;
  int res = 0;
  char *ptr = NULL;

  while (getline(&line, &len, stdin) != -1) {
    game_id = num = 0;
    ptr = line + 5;

    while (*ptr != ':') {
      game_id = game_id * 10 + (*ptr - '0');
      ptr++;
    }

    while (*ptr != '\0') {
      for (int i = 0; i < 3; i++) {
        if (*ptr == colors[i].tag) {
          if (num > colors[i].max) {
            game_id = 0;
            goto end;
          }
          ptr += colors[i].step;
          num = 0;
        }
      }

      if (isdigit(*ptr))
        num = num * 10 + (*ptr - '0');

      ptr++;
    }

  end:
    res += game_id;
  }

  printf("%d", res);
}
