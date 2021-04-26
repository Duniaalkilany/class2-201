'use strict';



let name = prompt('Hello Hello , what\'s your name ?!');
alert ('hello ' + name + ' Welcom to my site , Enjoy !' );




let college = prompt('Is my college major is electrical engineering?');
console.log(college)


switch (college.toUpperCase()) {
    case 'YES':
    case 'Y' :
        alert ('Your answer is correct ');
        console.log('correct');
        break;
    case 'NO':
    case 'N':
        alert ('Your answer is false !');
        console.log('false'); 
        break; 
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)'); 
}

let color = prompt('Is my favorite color red?');
console.log(color)

switch (color.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
        console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        console.log('false'); 
        break;
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');  } 

let hoppy = prompt('Is my favorite hobby video games?');
console.log(hoppy)

switch (hoppy.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
        console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        console.log('false'); 
        break;
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');   
}

let team = prompt('Is your favorite football team Real Madrid?');
console.log(team)


switch (team.toUpperCase()) {
    case 'YES' :
        case 'Y' :
        alert ('Your answer is correct ');
        console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        console.log('false'); 
        break; 
        default: 
        alert ('invalid , You have to answer yes(y) or no(n)');   
}

let country= prompt('Is my favorite country Dubai?');
console.log(country)



switch (country.toUpperCase()) {
    case 'YES' :
        alert ('Your answer is correct ');
        console.log('correct');
        break;
    case 'NO' :
        case 'N':
        alert ('Your answer is false !');
        console.log('false'); 
        break;  
        default: 
        alert ('invalid , You have to answer YES or NO (Y/N) !');  
}
 
alert ( 'Thank you  ' +  name  +  ' for visiting my website, stay well' );