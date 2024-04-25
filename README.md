Write a function called solve.

Solve should be given an integer n and find two integers a and b such that:

1. a >= 0 and b >= 0
2. a + b = n
3. DigitSum(a) + Digitsum(b) is maximum of all possibilities.

Solve will return the digitSum(a) + digitsum(b).

For example:
solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
