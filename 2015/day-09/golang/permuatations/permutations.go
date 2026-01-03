package permuatations

import "slices"

func All(values []string) (p [][]string) {
	if len(values) == 1 {
		return append(p, values)
	}

	for i, value := range values {
		current := value
		remainingElements := slices.Concat(values[0:i], values[i+1:])

		remainingPermutations := All(remainingElements)

		for _, value := range remainingPermutations {
			permutation := append([]string{current}, value...)
			p = append(p, permutation)
		}
	}

	return
}
