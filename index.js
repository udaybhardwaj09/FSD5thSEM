function sum(a,b){
    return a+b;
}
console.log(sum(5,10));

function login(msg,error){
    if(error){
        console.log(error);
    }
    else{
        console.log(msg);
    }
}