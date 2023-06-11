

function enterText(){

let inputElement = document.getElementById('entry');
let s = inputElement.value;
s = s.replace(/\s/g, '');
let n = s.length
let flag = true
if(n==0){
    alert("Please Enter the text before Checkning!! Thank You")
}

    for(let i=0; i<s.length; i++)
    {
            if(s[i]!=s[n-i-1]){
                flag = false
            }
    }

    if(flag==false && n!==0){
       
        alert("The Text you entered is not palindrome")
        
    } 
    else if(flag==true && n!=0){
       
        alert("The text you entered is palindrome")
        
    }

document.getElementById('entry').value = "";



}
