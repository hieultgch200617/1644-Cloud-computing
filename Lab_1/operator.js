a = 1
b = a++
c = ++a

//a++ : postfix operator
//++a : prefix operator

console.log("a = " + a) //3
console.log("b = " + b) //1
console.log("c = " + c) //3

a = a + 1 //a++  ++a  a+=1

x = 17
y = 3
z = x%y //2 : remainder of a division