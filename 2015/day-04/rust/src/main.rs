use md5;

fn main() {
    let input = "yzbqklnj";
    println!("Solution to day 1, part 1: {}", solution_part1(&input));
    println!("Solution to day 1, part 2: {}", solution_part2(&input));
}

fn solution_part1(input: &str) -> u32 {
    find_postfix(input, "00000")
}

fn solution_part2(input: &str) -> u32 {
    find_postfix(input, "000000")
}

fn find_postfix(prefix: &str, needle: &str) -> u32 {
    let mut hash = String::new();
    let mut num = 0;

    while !hash.starts_with(needle) {
        num += 1;
        hash = format!("{:x}", md5::compute(format!("{prefix}{num}")));
    }

    num
}

#[test]
fn test_solution_part1() {
    assert_eq!(solution_part1("abcdef"), 609043);
}
