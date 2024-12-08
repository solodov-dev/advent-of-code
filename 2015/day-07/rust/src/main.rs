use std::{collections::HashMap, fs};

fn main() {
    let input = fs::read_to_string("input").unwrap();
    println!("Solution to day 1, part 1: {}", solution_part1(&input, "a"));
    println!("Solution to day 1, part 2: {}", solution_part2(&input, "a"));
}

fn solution_part1(input: &str, pin: Pin) -> u16 {
    Circuit::new(input).get(pin)
}

fn solution_part2(input: &str, pin: Pin) -> u16 {
    Circuit::new(input)
        .update("b", Gate::Number(solution_part1(input, pin)))
        .get(pin)
}

type Pin<'a> = &'a str;

enum Gate<'a> {
    String(&'a str),
    Number(u16),
}

struct Circuit<'a>(HashMap<Pin<'a>, Gate<'a>>);

impl<'a> Circuit<'a> {
    fn new(input: &'a str) -> Self {
        let mut board = HashMap::new();

        for line in input.lines() {
            let (gate, pin) = line
                .split_once(" -> ")
                .expect(&format!("Error parsing the line {}", line));

            board.insert(
                pin,
                match gate.parse::<u16>() {
                    Ok(n) => Gate::Number(n),
                    Err(_) => Gate::String(gate),
                },
            );
        }

        Circuit(board)
    }

    fn update(self: &mut Circuit<'a>, pin: Pin<'a>, gate: Gate<'a>) -> &mut Circuit<'a> {
        self.0.insert(pin, gate);
        self
    }

    fn get(self: &mut Circuit<'a>, pin: Pin<'a>) -> u16 {
        pin.parse::<u16>().unwrap_or_else(|_| {
            let gate = self.0.get(pin).expect(&format!("No gate for pin {}", pin));

            match gate {
                Gate::Number(n) => *n,
                Gate::String(gate) => {
                    let signal = self.signal(gate);
                    self.update(pin, Gate::Number(signal));
                    signal
                }
            }
        })
    }

    fn signal(self: &mut Circuit<'a>, gate: &'a str) -> u16 {
        let gate_tokens = gate.split_whitespace().collect::<Vec<_>>();

        match gate_tokens[..] {
            [a, "AND", b] => self.get(a) & self.get(b),
            [a, "OR", b] => self.get(a) | self.get(b),
            [a, "LSHIFT", b] => self.get(a) << self.get(b),
            [a, "RSHIFT", b] => self.get(a) >> self.get(b),
            ["NOT", a] => !self.get(a),
            [a] => self.get(a),
            _ => panic!("Unknown gate pattern {:?}", gate),
        }
    }
}

#[test]
fn test_solution_part1() {
    let circuit = "123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i";

    let tests = vec![
        ("e", 507),
        ("f", 492),
        ("g", 114),
        ("h", 65412),
        ("i", 65079),
        ("x", 123),
        ("y", 456),
    ];

    tests.iter().for_each(|(wire, value)| {
        assert_eq!(solution_part1(&circuit, wire), *value);
    })
}
