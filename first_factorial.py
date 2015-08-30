def FirstFactorial(num): 
  result=1
  while num>0: # loop down from starting number multiplying each number by the result variable and decrementing the num variable on each iteration
    result=result*num
    num=num-1
  return result
print FirstFactorial(raw_input())           

#Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it 
#(ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 
#Use the Parameter Testing feature in the box below to test your code with different arguments.
