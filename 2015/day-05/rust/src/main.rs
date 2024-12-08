use fancy_regex::Regex;
use std::fs;

fn main() {
    let input = fs::read_to_string("input").expect("Couldn't read a file");
    println!(
        "Solution to day 1, part 1: {}",
        input
            .lines()
            .filter(|line| { solution_part1(line) })
            .count()
    );
    println!(
        "Solution to day 1, part 2: {}",
        input
            .lines()
            .filter(|line| { solution_part2(line) })
            .count()
    );
}

fn solution_part1(input: &str) -> bool {
    let has_bads = Regex::new(r"ab|cd|pq|xy").unwrap();
    let has_double = Regex::new(r"(.)\1").unwrap();
    let three_vowels = Regex::new(r"^(.*[aeuio].*){3,}$").unwrap();
    !(has_bads.is_match(input).unwrap())
        && has_double.is_match(input).unwrap()
        && three_vowels.is_match(input).unwrap()
}

fn solution_part2(input: &str) -> bool {
    let has_pair = Regex::new(r".*(\w\w).*\1").unwrap();
    let has_middle = Regex::new(r".*(\w).\1").unwrap();
    has_pair.is_match(input).unwrap() && has_middle.is_match(input).unwrap()
}

#[test]
fn test_solution_part1() {
    assert_eq!(solution_part1("ugknbfddgicrmopn"), true);
    assert_eq!(solution_part1("aaa"), true);
    assert_eq!(solution_part1("jchzalrnumimnmhp"), false);
    assert_eq!(solution_part1("haegwjzuvuyypxyu"), false);
    assert_eq!(solution_part1("dvszwmarrgswjxmb"), false);
}

#[test]
fn test_solution_part2() {
    assert_eq!(solution_part2("qjhvhtzxzqqjkmpb"), true);
    assert_eq!(solution_part2("xxyxx"), true);
    assert_eq!(solution_part2("uurcxstgmygtbstg"), false);
    assert_eq!(solution_part2("ieodomkazucvgmuy"), false);
}
