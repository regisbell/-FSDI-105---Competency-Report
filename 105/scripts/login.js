function login(){
    let email = $("#txtUserName").val();
    let password = $("#txtPassword").val();
    console.log(email,password);
    let userList = readUsers();
    let flag = false;
    for (let i=0; i<userList.length; i++){
        let user = userList[i];
        if(user.email === email && user.password === password){
            console.log("You are logged");
            window.location="users.html";
            flag = true;
        }
    }
    if(flag === false){
        console.log("Invalid credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);
    }
}

function init(){
    console.log("Home Page");
    $("#btnLogin").click(login);
}
window.onload=init;