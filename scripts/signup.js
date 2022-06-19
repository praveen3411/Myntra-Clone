function userdetails(name,email,password,number){
    this.name=name;
    this.email=email;
    this.password=password;
    this.number=number;
}
let array=JSON.parse(localStorage.getItem("userdata"))
let callbackfun=()=>{
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let number=document.querySelector("#number").value;
    let users=new userdetails(name,email,password,number);
    localStorage.setItem("userdata",JSON.stringify(users));
    window.location.reload();
    window.location.href="login.html";
}
document.querySelector("form").addEventListener("submit",callbackfun);