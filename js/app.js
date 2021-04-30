'use strict';




let namee = prompt('Hello Hello , what\'s your name ?!');
alert ('hello ' + namee + ' Welcom to my site , Enjoy !' );


let score =0; 
function question1 (){

   
let college = prompt('Is my college major is electrical engineering?');



switch (college.toUpperCase()) {
    case 'YES':
    case 'Y' :
        alert ('Your answer is correct ');
       score++;
        console.log(score);
        break;
      
    case 'NO':
    case 'N':
        alert ('Your answer is false !');
        
        break; 
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)'); 
}
}


question1 ();

function question2 (){
let color = prompt('Is my favorite color red?');


switch (color.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
    
      score++;
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
       
        break;
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)'); 
     } 
    }
  
question2();



question3();
function question3 (){

let hoppy = prompt('Is my favorite hobby video games?');




switch (hoppy.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
       
       score++;
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
      
        break;
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');   
}
}


function question4 (){
let team = prompt('Is your favorite football team Real Madrid?');



switch (team.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
       
       score++;
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        
        break; 
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');   
}
}

question4 ();


function question5 (){
let country= prompt('Is my favorite country Dubai?');




switch (country.toUpperCase()) {
    case 'YES' :
        case'Y':
        alert ('Your answer is correct ');
  
       score++;
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        
        break;  
        default: 
        alert ('invalid , You have to answer YES or NO (Y/N) !');  
}
}

question5 ();



alert ( namee + ' Let\'s play the guessing game , answer this question with a number , you have 4 guessing chances , let\'s gooo !!!');
function question6 (){
let qq1 = 0 ;
for (let i=0 ; i<4 ; i++ ){
    let q1 = Number(prompt('guess what is the month of my birth ?'));
   if (q1 === 11 )
    { alert( 'Correct , you guessed !'); 
    score++;
break ;
 }
 else if  (q1 < 11)
{alert(' wrong , too low ! ');
qq1++;

}
else if ( q1 > 11) 
{alert (' wrong , too high ! ');
qq1++
 }
 
}


if (qq1==4){alert (' Your chances of guessing have expired , the correct answer is 11') ;}


}

question6 ();


alert ('Let\'s play another game , guess what is the answer to this question , you have 6 guessing chances  ! ');

 function question7(){
 
    let userFavFood = ['mansaf', 'burger', 'fish'];
    let c = 0 ;
    for (let i = 0; i < 6; i++) {
        
        let userAnsw = prompt('Can you guess my favorite food?');
        let guess = userAnsw.toLowerCase();

        for (let j = 0; j < userFavFood.length; j++){
            if (guess === userFavFood[j]) {
                alert('Congrats you got it right!!! ' + guess + ' is one of my favourite food ; my top 3 favourite food are : ' + userFavFood);
                score++;
                i = 6;
                break;
            }
        }
    if (i!==6){
    alert('Sorry wrong answer, try again !!');
c++; }

    if (c==6){
    alert('Your chances of guessing have expired , my favourite foods are : ' + userFavFood ); }
 
   
}

    }

question7();

alert ('your score is ' + score +' out of 7');

alert ('Thank you ' + namee + ' for visiting my website, stay well' );


