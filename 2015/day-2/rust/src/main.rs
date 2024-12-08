use std::fs;

fn main() {
    let input = fs::read_to_string("input").expect("Couldn't read a file");
    println!(
        "Solution to day 2, part 1: {}",
        input.lines().fold(0, |acc, l| acc + solution_part1(l))
    );
    println!(
        "Solution to day 2, part 2: {}",
        input.lines().fold(0, |acc, l| acc + solution_part2(l))
    );
}

fn solution_part1(input: &str) -> i32 {
    let v: Vec<i32> = input
        .split("x")
        .map(|s| s.parse::<i32>().unwrap())
        .collect();

    let areas = [v[0] * v[1], v[1] * v[2], v[0] * v[2]];

    2 * areas.iter().sum::<i32>() + areas.iter().min().unwrap()
}

fn solution_part2(input: &str) -> i32 {
    let v: Vec<i32> = input
        .split("x")
        .map(|s| s.parse::<i32>().unwrap())
        .collect();

    let perimeters = [(v[0] + v[1]) * 2, (v[1] + v[2]) * 2, (v[0] + v[2]) * 2];

    perimeters.iter().min().unwrap() + v[0] * v[1] * v[2]
}

#[test]
fn test_solution_part1() {
    assert_eq!(solution_part1("2x3x4"), 58);
    assert_eq!(solution_part1("1x1x10"), 43);
}

#[test]
fn test_solution_part2() {
    assert_eq!(solution_part2("2x3x4"), 34);
    assert_eq!(solution_part2("1x1x10"), 14);
}
