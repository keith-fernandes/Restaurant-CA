function validatorPswd() {
var pass = document.getElementById("pswd").value;
var chara =  /(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})/g;

if(pass == ""){
    document.getElementById("message").innerHTML = "-> Enter a password, please!";
    return false;
}

else if(pass.length < 8){
    document.getElementById("message").innerHTML = "-> Password must be at least 8 characters";
    return false;
}

else if(!pswd.value.match(chara)){
    document.getElementById("message").innerHTML = "-> Password must have: •Capital letter, •Lower case, •Number and •Special Character";
    return false;
}
else  
{
    alert("Correct, go ahead!");
    return true;
}
}