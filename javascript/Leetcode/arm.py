inp = int(input("enter a 3 digit numebr:- "))
org= inp
sum = 0 
while inp > 0:
    sum += (inp%10)*(inp%10)*(inp%10)
    inp//=10
if org == sum:
    print("yes, armstrong number")
else:
    print("not an  armstrong numebr")
    