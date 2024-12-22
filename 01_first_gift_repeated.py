def prepare_gifts(gifts):
  unique_gifts = list(set(gifts))
  
  # sort
  swapped = True
  while swapped:
    swapped = False
    for i in range(len(unique_gifts) - 1):
      if unique_gifts[i] > unique_gifts[i+1]:
        unique_gifts[i],unique_gifts[i+1] = unique_gifts[i+1], unique_gifts[i]
        swapped = True
    
  return unique_gifts