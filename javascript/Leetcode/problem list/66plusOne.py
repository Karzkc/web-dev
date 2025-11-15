class Solution(object):
    def plusOne(digits):
        total = 0
        stack = []
        for i in range(len(digits)):
            total += digits[i] * (10 ** (len(digits) - i - 1))
        for digit in str(total + 1):  
            stack.append(int(digit))
        return stack

