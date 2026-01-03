package permuatations

import (
	"reflect"
	"testing"
)

func TestPermutations(t *testing.T) {
	values := []string{"A", "B", "C"}
	got := All(values)
	want := [][]string{{"A", "B", "C"}, {"A", "C", "B"}, {"B", "A", "C"}, {"B", "C", "A"}, {"C", "A", "B"}, {"C", "B", "A"}}

	if !reflect.DeepEqual(got, want) {
		t.Errorf("Expected permutations: %v", want)
	}
}
