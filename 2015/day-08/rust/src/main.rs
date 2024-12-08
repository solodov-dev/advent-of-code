use regex::Regex;
use std::fs;

fn main() {
    let input = fs::read_to_string("input").unwrap();
    println!("Solution to day 1, part 1: {}", solution_part1(&input));
    println!("Solution to day 1, part 2: {}", solution_part2(&input));
}

fn solution_part1(input: &str) -> usize {
    input.lines().fold(0, |acc, line| {
        // Remove first and last quote
        let re = Regex::new(r#"^"|"$"#).unwrap();
        let result = re.replace_all(line, "");
        // Replace double backslash with single backslash
        let re = Regex::new(r"\\\\").unwrap();
        let result = re.replace_all(&result, "_");
        // Replace hexadecimal code with one character
        let re = Regex::new(r"\\x[a-f0-9]{2}").unwrap();
        let result = re.replace_all(&result, "_");
        // Replace escaped quote with normal quote
        let re = Regex::new(r#"\\""#).unwrap();
        let result = re.replace_all(&result, "_");

        acc + line.len() - result.len()
    })
}

fn solution_part2(input: &str) -> usize {
    input.lines().fold(0, |acc, line| {
        let re = Regex::new(r"\\").unwrap();
        let result = re.replace_all(line, r"\\");

        let re = Regex::new(r#"""#).unwrap();
        let result = re.replace_all(&result, r#"\""#);

        acc + result.len() + 2 - line.len()
    })
}

#[test]
fn test_solution_part1() {
    assert_eq!(solution_part1(r#""""#), 2);
    assert_eq!(solution_part1(r#""abc""#), 2);
    assert_eq!(solution_part1(r#""aaa\"aaa""#), 3);
    assert_eq!(solution_part1(r#""\x27""#), 5);
    assert_eq!(solution_part1(r#""\\""#), 3);
    assert_eq!(solution_part1(r#""qq\"""#), 3);
}

#[test]
fn test_solution_part2() {
    assert_eq!(solution_part2(r#""""#), 4);
    assert_eq!(solution_part2(r#""abc""#), 4);
    assert_eq!(solution_part2(r#""aaa\"aaa""#), 6);
    assert_eq!(solution_part2(r#""\x27""#), 5);
}
