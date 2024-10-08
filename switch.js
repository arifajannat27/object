const color = 'yellow';
if(color === 'green'){
    console.log('You are a green friend')
}
if(color === 'blue'){
    console.log('You are a blue friend')
}
if(color === 'red'){
    console.log('You are a red friend')
}
if(color === 'white'){
    console.log('You are a white friend')
}
if(color === 'yellow'){
    console.log('You are a himu friend')
}
else{
    console.log('You are a black friend')
}

// switch
switch(color){
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are a blue friend')
        break;
    case 'white':
        console.log('You are a white friend');
    case 'red':
        console.log('You are a red friend');
    case 'yellow':
        console.log('You are a himu friend');
    default:
        console.log('You are a black friend');

}