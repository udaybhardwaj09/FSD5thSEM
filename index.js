// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,10));

// function login(msg,error){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     if(username == "ptomer40" && password == "12345"){
//         clbk("success");
//     }
//     else{
//         clbk("username or password is incorrect");
//     }
// }

// function loginWithPromise(username, password) {
//     return new Promise((resolve, reject) => {
//         if (username === "ptomer40" && password === "12345") {
//             resolve("Login successful");
//         } else {
//             reject("Username or password is incorrect");
//         }
//     });
// }

// loginWithPromise("ptomer40", "12345")
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// loginWithPromise("wrongUser", "wrongPassword")
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));


// async function handleLogin() {
//     const status = await myPromise;
//     if(status == "success"){
//         console.log("Hi inside success");
//         const orderStatus = await orderRecieved();
//         console.log(orderStatus);
//     }
// }


// function verifyOtp(otp) {
//     return new Promise((resolve, reject) => {
//         if (otp === "1234") {
//             resolve("OTP verified");
//         } else {
//             reject("Invalid OTP");
//         }
//     });
// }

// function completeOrder(otp) {
//     verifyOtp(otp)
//         .then((message) => console.log(message + " - Order completed"))
//         .catch((error) => console.log(error + " - Order not completed"));
// }

// completeOrder("1234");
// completeOrder("0000");


// const root = document.getElementById("container");
// console.log(root);

// async function getData(){
//     const serverData = await fetch();
//     const jsonData = await serverData.json();
//     console.log(jsonData[0].title);
// }
// button.addEventListeners("click",getData);


const container = document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'red'}}, 'Welcome to React');
const h1 = React.createElement('h1', {style:{color:'brown',backgroundColor:'white'}},"ABES Engineering College");
// const img = React.