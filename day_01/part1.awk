func abs(v) {return v < 0 ? -v : v}

{ left[NR] = $1; right[NR] = $2 }

END {
  asort(left); 
  asort(right);

  for (i=1; i<=NR; i++)
    sum += abs(left[i] - right[i]);

  print sum
}
