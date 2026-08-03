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

function loginHandler(username,password,clbk){
    if(username == "ptomer40" && password == "12345"){
        clbk("success", null);
    }
    else{
        clbk(null,"username or password is incorrect");
    }
}