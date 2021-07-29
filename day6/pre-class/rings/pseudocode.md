## Drawings

```
n = 1, d =5
🟧🟧🟧🟧🟧
🟧🟡🟡🟡🟧
🟧🟡🟧🟡🟧
🟧🟡🟡🟡🟧
🟧🟧🟧🟧🟧

n = 2, d =7
🟧🟧🟧🟧🟧🟧🟧
🟧🟡🟡🟡🟡🟡🟧
🟧🟡🟧🟧🟧🟡🟧
🟧🟡🟧🟡🟧🟡🟧
🟧🟡🟧🟧🟧🟡🟧
🟧🟡🟡🟡🟡🟡🟧
🟧🟧🟧🟧🟧🟧🟧

n = 3, d = 9
🟧🟧🟧🟧🟧🟧🟧🟧🟧
🟧🟡🟡🟡🟡🟡🟡🟡🟧
🟧🟡🟧🟧🟧🟧🟧🟡🟧
🟧🟡🟧🟡🟡🟡🟧🟡🟧
🟧🟡🟧🟡🟧🟡🟧🟡🟧
🟧🟡🟧🟡🟡🟡🟧🟡🟧
🟧🟡🟧🟧🟧🟧🟧🟡🟧
🟧🟡🟡🟡🟡🟡🟡🟡🟧
🟧🟧🟧🟧🟧🟧🟧🟧🟧

n = 4, d = 11
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
🟧🟡🟡🟡🟡🟡🟡🟡🟡🟡🟧
🟧🟡🟧🟧🟧🟧🟧🟧🟧🟡🟧
🟧🟡🟧🟡🟡🟡🟡🟡🟧🟡🟧
🟧🟡🟧🟡🟧🟧🟧🟡🟧🟡🟧
🟧🟡🟧🟡🟧🟡🟧🟡🟧🟡🟧
🟧🟡🟧🟡🟧🟧🟧🟡🟧🟡🟧
🟧🟡🟧🟡🟡🟡🟡🟡🟧🟡🟧
🟧🟡🟧🟧🟧🟧🟧🟧🟧🟡🟧
🟧🟡🟡🟡🟡🟡🟡🟡🟡🟡🟧
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
```

## Observations

- First and last row are always all the same shapes
- Median row is always alternating, e.g. 🟧🟡🟧🟡🟧 || 🟧🟡🟧🟡🟧🟡🟧
- Center shape decided by the shape's position in the sequence, whether it is odd or even
- Formula connecting dimension(d) and position in sequence (n), d = 2n + 3

## Flow

1. Build median row first, then build towards top and bottom
1. For the rows in between, build the center portion first (step by 2 for the counter), then alternate emojis towards the front and end of the row
1. Insert rows into an array, use unshift and push to add to front and end
1. Combine the rows together by iterating over the array
