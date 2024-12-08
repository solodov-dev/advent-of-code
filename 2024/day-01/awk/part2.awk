{ map[$2] = (map[$2] ? map[$2] : 0) + 1; left[NR] = $1 }

END {
  for (i = 1; i <= NR; i++)
    sum += (map[left[i]] ? map[left[i]] : 0) * left[i];
    
  print sum
}
