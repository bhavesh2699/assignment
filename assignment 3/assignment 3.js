// Ans 1
function convert(a){
    return a*60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

// Ans 2

function dividesEvenly(a,b){
    if((a/b)%2==0) return true;
    else return false;
}

console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));

//Ans 3

function charCount(a,str)
{
    var count=0;

    for(var i=0;i<str.length;i++)
    {
        if(str.charAt(i)==a)
            count++;

    }
    return count;
}

console.log(charCount("a","edabit"));
console.log(charCount ("c", "Chamber of secrets")); 
console.log(charCount ("b", "big fat bubble") );

//Ans 4

function addUp(num)
{
    var sum=0;
    for(var i=1;i<=num;i++)
    {
        sum+=i;
    }
    return sum;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

//Ans 4
function replaceVowels(string) {

    var newstr = "";
   for (var i = 0; i < string.length; i++) {
        if(isVowel(string[i]))
        {
            newstr+=changeVowels(string[i]);
        }
        else{
            newstr+=string[i];
        }
      }
      return newstr;
  }

  
function isVowel(char) {
    return 'aeiou'.includes(char);
  }
  
  function changeVowels(char) {

    switch(char){
        case 'a': return '1';
                
        case 'e': return '2';
               
        case 'i': return '3';
               
        case 'o': return '4';
                 
        case 'u': return '5';
                
    }
  }
  
  console.log(replaceVowels('karachi!'));
  console.log(replaceVowels('chembur!'));
  console.log(replaceVowels('khandbari!'));

// Ans 4 : Remove Duplicates from an Array

function removeDups (array){
    var newArray = [];
  
    for(i=0; i < array.length; i++)
    {
        if(newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeDups ([1, 0, 1, 0]));
console.log(removeDups (["The", "big", "cat"]));
console.log(removeDups (["John", "Taylor", "John"]));

//Ans: Get Real Type

function realType(x){
    return typeof x;
} 

console.log(realType (1));
console.log(realType ("a"));
console.log(realType (true));