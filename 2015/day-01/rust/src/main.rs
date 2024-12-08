use std::fs;

fn main() {
    let input = fs::read_to_string("input").expect("Couldn't read a file");
    println!("Solution to day 1, part 1: {}", solution_part1(&input));
    println!("Solution to day 1, part 2: {}", solution_part2(&input));
}

fn solution_part1(input: &str) -> i32 {
    input.chars().fold(0, |acc, c| match c {
        '(' => acc + 1,
        ')' => acc - 1,
        _ => panic!(),
    })
}

fn solution_part2(input: &str) -> usize {
    let mut acc = 0;

    for (i, c) in input.chars().enumerate() {
        match c {
            '(' => acc += 1,
            ')' => {
                acc -= 1;
                if acc < 0 {
                    return i + 1;
                }
            }
            _ => panic!(),
        }
    }

    0
}

#[test]
fn test_solution_part1() {
    assert_eq!(solution_part1("(())"), 0);
    assert_eq!(solution_part1("()()"), 0);
    assert_eq!(solution_part1("((("), 3);
}

#[test]
fn test_solution_part2() {
    assert_eq!(solution_part2(")"), 1);
    assert_eq!(solution_part2("()())"), 5);
}
