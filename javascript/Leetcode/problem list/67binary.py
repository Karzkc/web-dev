class Solution(object):
    def addBinary(self, a, b):
        return str(bin(int(a,2)+int(b,2)))[2:]
print(Solution.addBinary(Solution,"1010","11"))