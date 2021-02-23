function processForm(){
    //document.forms["nombre del formulario"]["id del input"].value
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var hobby = document.getElementById("hobby").value;

    alert("Message is received");
    var message = "Hello, my name is " + name + ", I am " + age.toString() + " and my hobby is " + hobby + "."

    document.getElementById("result").innerHTML = message;
}