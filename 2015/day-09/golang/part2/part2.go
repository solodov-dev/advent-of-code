package main

import (
	"bufio"
	"fmt"
	"maps"
	"os"
	"regexp"
	"slices"
	"strconv"

	"adventofcode.com/2015/day/9/permuatations"
)

func main() {
	places := make(map[string]struct{})
	distances := make(map[string]int)

	scanner := bufio.NewScanner(os.Stdin)
	re := regexp.MustCompile(`(\w+) to (\w+) = (\d+)`)

	for scanner.Scan() {
		line := scanner.Text()
		matches := re.FindStringSubmatch(line)
		from, to := matches[1], matches[2]
		distance, err := strconv.Atoi(matches[3])

		if err != nil {
			fmt.Printf("Error converting distance %s to number", matches[3])
		}

		places[from] = struct{}{}
		places[to] = struct{}{}
		distances[fmt.Sprintf("%s -> %s", from, to)] = distance
		distances[fmt.Sprintf("%s -> %s", to, from)] = distance
	}

	if err := scanner.Err(); err != nil {
		fmt.Fprintln(os.Stderr, "reading stdin:", err)
	}

	possibleRoutes := permuatations.All(slices.Collect(maps.Keys(places)))

	var longest int

	for _, route := range possibleRoutes {
		total := 0
		for i := 0; i < len(route)-1; i++ {
			path := fmt.Sprintf("%s -> %s", route[i], route[i+1])
			distance, ok := distances[path]
			if ok {
				total += distance
			}
		}

		if total > longest {
			longest = total
		}
	}

	fmt.Println(longest)
}
