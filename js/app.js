'use strict';



let namee = prompt('Hello Hello , what\'s your name ?!');
alert ('hello ' + namee + ' Welcom to my site , Enjoy !' );




let college = prompt('Is my college major is electrical engineering?');
//console.log(college)


switch (college.toUpperCase()) {
    case 'YES':
    case 'Y' :
        alert ('Your answer is correct ');
       // console.log('correct');
        break;
    case 'NO':
    case 'N':
        alert ('Your answer is false !');
        //console.log('false'); 
        break; 
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)'); 
}

let color = prompt('Is my favorite color red?');
//console.log(color)

switch (color.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
      //  console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
       // console.log('false'); 
        break;
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');  } 

let hoppy = prompt('Is my favorite hobby video games?');
//console.log(hoppy)

switch (hoppy.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
       // console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
       // console.log('false'); 
        break;
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');   
}

let team = prompt('Is your favorite football team Real Madrid?');
//console.log(team)


switch (team.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
       // console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        //console.log('false'); 
        break; 
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');   
}

let country= prompt('Is my favorite country Dubai?');
//console.log(country)



switch (country.toUpperCase()) {
    case 'YES' :
        alert ('Your answer is correct ');
       // console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        //console.log('false'); 
        break;  
        default: 
        alert ('invalid , You have to answer YES or NO (Y/N) !');  
}

alert ( namee + 'Let\'s play the guessing game , answer the following sex questions with a number .let\'s gooo !!!');

let qq1 = 0 ;
for (let i=0 ; i<4 ; i++ ){
    let q1 = Number(prompt('guess what is the month of my birth ?'));
   if (q1 === 11 )
    { alert( 'Correct , you guessed !'); 
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



let qq2 = 0 ;
for (let i=0 ; i<4 ; i++ ){
    let q2 = Number(prompt(' guess how old I am ?'));
   if (q2 === 24 )
    { alert(' Correct , you guessed !'); 
break ;
 }
 else if  (q2 < 24)
{alert(' wrong , too low ! ');
qq2++;

}
else if ( q2 > 24) 
{alert ('wrong , too high ! ');
qq2++
 }
 
}
if (qq2==4){alert ('Your chances of guessing have expired , the correct answer is 24') ;}
 
let qq3 = 0 ;
for (let i=0 ; i<4 ; i++ ){
    let q3 = Number(prompt('guess what is my high school GPA ?'));
   if (q3 === 93 )
    { alert('Correct , you guessed !'); 
break ;
 }
 else if  (q3 < 93)
{alert(' wrong , too low ! ');
qq3++;

}
else if ( q3 > 93) 
{alert ('wrong , too high ! ');
qq3++
 }
 
}
if (qq3==4){alert ('Your chances of guessing have expired , the correct answer is 93') ;}


let qq4 = 0 ;
for (let i=0 ; i<4 ; i++ ){
    let q4 = Number(prompt('guess what is my favorite month of the year?'));
   if (q4 === 12 )
    { alert(' Correct , you guessed !'); 
break ; 
 }
 else if  (q4 < 12)
{alert(' wrong , too low ! ');
qq4++;

}
else if ( q4 > 12) 
{alert ('wrong , too high ! ');
qq4++
 }
 
}
if (qq4==4){alert ('Your chances of guessing have expired , the correct answer is 12') ;}


let qq5 = 0 ;
for (let i=0 ; i<4 ; i++ ){
    let q5 = Number(prompt('guess what my weight is?'));
   if (q5 === 53 )
    { alert(' Correct , you guessed !'); 
break ;
 }
 else if  (q5< 53)
{alert(' wrong , too low ! ');
qq4++;

}
else if ( q5 > 53) 
{alert (' wrong , too high ! ');
qq5++
 }
 
}
if (qq5==4){alert ('Your chances of guessing have expired , the correct answer is 53') ;}


let qq6 = 0 ;
for (let i=0 ; i<4 ; i++ ){
    let q6 = Number(prompt('guess what number I\'m thinking of?'));
   if (q6 === 100 )
    { alert('Correct , you guessed !'); 
break ;
 }
 else if  (q6< 100)
{alert('wrong , too low ! ');
qq6++;

}
else if ( q6 > 100) 
{alert ('wrong , too high ! ');
qq6++
 }
 
}
if (qq6==4){alert ('Your chances of guessing have expired, the correct answer is 100') ;}


alert ('Let\'s play another game , guess what is the answer to these seven questions, you have 6 guessing chances for each question , every time you will answer the correct answer, you will get one score, when you finish answering all the questions, I will show you your score!!');

let score =0; 

let favfood = ['MANSAF', 'BURGER', 'FISH' ];

let c1 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer1 = prompt('guess one of my fav food ?' );
ansnwer1=ansnwer1.toUpperCase();
    if ( ansnwer1===favfood[0] || ansnwer1===favfood[1] || ansnwer1===favfood[2]){
    alert ( ' correct  ' + ansnwer1 + ' is one of my favourite foods . my favourite foods are : ' + favfood);
    score++;
    break;
}else { alert('wrong , guess again !');
c1++;} 
}
   
    
if (c1==6){alert (' Your chances of guessing have expired , my favourite foods are : ' + favfood ) ;}




let favcolor = ['RED', 'BLACK', 'BLUE' ];

let c2 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer2 = prompt('guess one of my favourite color !' );
ansnwer2=ansnwer2.toUpperCase();
    if ( ansnwer2===favcolor[0] || ansnwer2===favcolor[1] || ansnwer2===favcolor[2]){
    alert ( 'correct  ' + ansnwer2 + ' is one of my fav colors . my favourite colors are :' + favcolor );
    score++;
    break;
}else { alert('wrong , guess again !');
c2++;}
}
   
    
if (c2==6){alert (' Your chances of guessing have expired , my favourite colors are :' + favcolor) ;}



let favfilm = ['TWILIGHT', 'ME BEFORE YOU', 'THE VOW' ];

let c3 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer3 = prompt(' guess one of my fav film ?' );
ansnwer3=ansnwer3.toUpperCase();
    if ( ansnwer3===favfilm[0] || ansnwer3===favfilm[1] || ansnwer3===favfilm[2]){
    alert ( ' correct  ' + ansnwer3 + ' is one of my favourite films . my favourite films are : ' + favfilm );
    score++;
    break;
}else { alert('wrong , guess again !');
c3++;}
}
   
    
if (c3==6){alert (' Your chances of guessing have expired, my favourite films are : ' + favfilm ) ;}





let favsinger = ['AMR DIAB', 'FAIROUZ', 'ELISSA' ];

let c4 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer4 = prompt('guess one my favourite singers ?' );
ansnwer4=ansnwer4.toUpperCase();
    if ( ansnwer4===favsinger[0] || ansnwer4===favsinger[1] || ansnwer4===favsinger[2]){
    alert ( 'correct  ' + ansnwer4 + ' is one of my favourite singers . my favourite singers are : ' + favsinger );
    score++;
    break;
}else { alert('wrong , guess again !');
c4++;}
}
   
    
if (c4==6){alert ('Your chances of guessing have expired , my favourite singers are : ' + favsinger) ;}


let favfootballteam = ['REAL MADRID', 'BARCELONA', 'JUVENTUS' ];

let c5 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer5 = prompt('guess one of my fav fotball team ?' );
ansnwer5=ansnwer5.toUpperCase();
    if ( ansnwer5===favfootballteam[0] || ansnwer5===favfootballteam[1] || ansnwer5===favfootballteam[2]){
    alert ( ' correct  ' + ansnwer5 + ' is one of my favourite football teams , my favourite football teams are :' + favfootballteam );
    score++;
    break;
}else { alert('wrong , guess again !');
c5++;}
}
   
    
if (c5==6){alert ('Your chances of guessing have expired, my favourite football teams  are : ' + favfootballteam) ;}

let favfootballplayer = ['RONALDO', 'RAMOS', 'MARCELO' ];

let c6 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer6 = prompt('guess one of my favourite football players ?' );
ansnwer6=ansnwer6.toUpperCase();
    if ( ansnwer6===favfootballplayer[0] || ansnwer6===favfootballplayer[1] || ansnwer6===favfootballplayer[2]){
    alert ( 'correct  ' + ansnwer6 + ' is one of my favourite football players . my favourite football players are : ' + favfootballplayer );
    score++;
    break;
}else { alert('wrong , guess again !');
c6++;}
}
   
    
if (c6==6){alert ('Your chances of guessing have expired, my favourite football players are :  ' + favfootballplayer) ;}

let favfruit= ['APPLE', 'ORANGE', 'BANANA' ];

let c77 = 0 ;
for (let i=0 ; i<6 ; i++ )
{let ansnwer7 = prompt('guess one of my favourite fruits ?' );
ansnwer7=ansnwer7.toUpperCase();
    if ( ansnwer7===favfruit[0] || ansnwer7===favfruit[1] || ansnwer7===favfruit[2]){
    alert ( 'correct  ' + ansnwer7 + ' is one of my favourite fruites . my favourite fruites are : ' + favfruit );
    score++;
    break;
}else { alert('wrong, guess again !');
c77++;}
}   
if (c77==6){alert ('Your chances of guessing have expired . my favourite fruites are :' + favfruit) ;}

alert ('your score is' + score + 'out of 7');

alert ('Thank you  ' +  namee  +  ' for visiting my website, stay well' );