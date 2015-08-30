def FirstReverse(str): 
  i=len(str)-1
  output=""
  while i>=0: #loop through the string starting from the back of the index and adding it to the output variable up to and including when the index equals 0
    output=output+str[i]
    i=i-1
  return output
    
    
# keep this function call here  
# to see how to enter arguments in Python scroll down
print FirstReverse(raw_input())           


#Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

#Use the Parameter Testing feature in the box below to test your code with different arguments.
