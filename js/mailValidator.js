function mailValidator(field) {
    user = field.value.substring(0, field.value.indexOf("@"));
    domain = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((user.length >=1) &&
        (domain.length >=3) && 
        (user.search("@")==-1) && 
        (domain.search("@")==-1) &&
        (user.search(" ")==-1) && 
        (domain.search(" ")==-1) &&
        (domain.search(".")!=-1) &&      
        (domain.indexOf(".") >=1)&& 
        (domain.lastIndexOf(".") < domain.length - 1)) {

        document.getElementById("msgemail").innerHTML="<font color='green'>E-mail válido</font>";

    }else{
       
        document.getElementById("msgemail").innerHTML="<font color='red'>O campo e-mail deve conter um e-mail válido! </font>";

    }
}