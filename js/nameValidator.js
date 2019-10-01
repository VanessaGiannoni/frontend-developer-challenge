function nameValidator(){

    console.clear();
 
    var name = document.getElementById("name").value;

 
    var pattern = /[^a-zà-ú]/gi;
 
    var name_validate = name.match(pattern);
 
    if( name_validate || !name ){
        document.getElementById("msgname").innerHTML="<font color='red'>Nome possui caracteres inválidos ou é vazio. </font>";

    }else{
        document.getElementById("msgname").innerHTML="<font color='green'>Nome válido!</font>";
    }
 
    
 }