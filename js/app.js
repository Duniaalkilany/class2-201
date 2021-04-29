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
function question7 (){

let favfood = ['MANSAF' , 'BURGER' , 'FISH' ];

let c1 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer1 = prompt('guess one of my fav food ?' );
ansnwer1=ansnwer1.toUpperCase();
 if ( ansnwer1===favfood[0] || ansnwer1===favfood[1] || ansnwer1===favfood[2] )
    {alert ( ' correct  ' + ansnwer1 + ' is one of my favourite foods . my favourite foods are : ' + favfood);
    score++;
    break;
} else { alert('wrong , guess again !');
c1++;} 
}
   
    
if (c1==6){alert (' Your chances of guessing have expired , my favourite foods are : ' + favfood ) ;}

}

question7 ();

alert ('your score is ' +  score + ' out of 7');

alert ('Thank you' +  namee  +  ' for visiting my website, stay well' );

