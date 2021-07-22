<?php
$target = "barbosa02058@gmail.com";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//cookies
setcookie("gnombre",$name, time() + 60*60*24*30);
setcookie("gemail",$email, time() + 60*60*24*30);

//Formato del mensaje 
$msg = "Nombre: ".$name."\n"."Correo: ".$email."\n"."Mensaje: ".$message;
$msg2 = "Su mensaje a sido enviado con exito. Espere pronta respuesta";
mail($target,"Mensaje de Contacto",$msg);
mail($email, "Mensaje Enviado correctamente",$msg2);
header("location: index.html");