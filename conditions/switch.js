const number = 5;
if ( (number >= 20) === true ) {
    console.log('20')
} else if (number >= 10)  {
    console.log('10')
} else if(number >= 5) {
    console.log(5)
} else  {
    console.log(0)
};

switch(true) {
    case number >= 20 : 
        console.log(20)
        break;
    case number >= 10 :
        console.log(10)
        break;
    case number >= 5 : 
        console.log(5)
        break;
    default :  
        console.log(0)
};