function processForm(){
    //document.forms["nombre del formulario"]["id del input"].value
    var name = document.forms["formulario"]["name"].value;
    var age = document.forms["formulario"]["age"].value;
    var hobby = document.forms["formulario"]["hobby"].value;
    var mensaje = name + age.toString() + hobby;
    alert(mensaje);
    
}