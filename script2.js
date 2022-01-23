"use stcrict";

if(4) {
    console.log('ok!');
} else{
    console.log('eror');
}



const num =50;

if (num <49) {
    console.log('eroor');
} else if (num > 100) {
    console.log('A lot');
} else{
    console.log('ok!');
}



(num === 50) ? console.log('ok!') : console.log('eroor');


const num = '50';

switch (num) {
    case '49':
        console.log('wrong');
        break;
    case '100':
        console.log('wrong');
        break;
    case '50':
        console.log('ringht');
        break;
    default:
        console.log('try again');
        break;
}