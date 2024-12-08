use regex::Regex;
use std::fs;

fn main() {
    let input = fs::read_to_string("input").unwrap();
    println!("Solution to day 1, part 1: {}", solution_part1(&input));
    println!("Solution to day 1, part 2: {}", solution_part2(&input));
}

static PATTERN: &str =
    r"(?<action>\w+) (?<from_x>\d+),(?<from_y>\d+) through (?<to_x>\d+),(?<to_y>\d+)";

fn solution_part1(input: &str) -> usize {
    let mut grid = [[false; 1000]; 1000];

    input.lines().for_each(|line| {
        let re = Regex::new(PATTERN).unwrap();
        let caps = re.captures(line).unwrap();

        let [from_x, to_x, from_y, to_y] =
            ["from_x", "to_x", "from_y", "to_y"].map(|key| caps[key].parse::<usize>().unwrap());

        for i in from_x..=to_x {
            for j in from_y..=to_y {
                let item = &mut grid[i][j];

                match &caps["action"] {
                    "on" => *item = true,
                    "off" => *item = false,
                    "toggle" => *item = !*item,
                    _ => panic!("Unknown pattern!"),
                }
            }
        }
    });

    grid.iter().flatten().filter(|v| **v).count()
}

fn solution_part2(input: &str) -> usize {
    let mut grid = [[0; 1000]; 1000];

    input.lines().for_each(|line| {
        let re = Regex::new(PATTERN).unwrap();
        let caps = re.captures(line).unwrap();

        let [from_x, to_x, from_y, to_y] =
            ["from_x", "to_x", "from_y", "to_y"].map(|key| caps[key].parse::<usize>().unwrap());

        for i in from_x..=to_x {
            for j in from_y..=to_y {
                let item = &mut grid[i][j];

                match &caps["action"] {
                    "on" => *item += 1,
                    "off" if *item > 0 => *item -= 1,
                    "off" => *item = 0,
                    "toggle" => *item += 2,
                    _ => panic!("Unknown pattern"),
                }
            }
        }
    });

    grid.iter().flatten().sum()
}

#[test]
fn test_solution_part1() {
    assert_eq!(solution_part1("turn on 0,0 through 999,999"), 1000 * 1000);
    assert_eq!(solution_part1("toggle 0,0 through 999,0"), 1000);
    assert_eq!(solution_part1("turn on 0,0 through 0,0"), 1);
}

#[test]
fn test_solution_part2() {
    assert_eq!(solution_part2(""), 1);
    assert_eq!(
        solution_part2("toggle 0,0 through 999,999"),
        1000 * 1000 * 2
    );
}
