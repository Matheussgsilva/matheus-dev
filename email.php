<?php

if(isset($_POST['email']) && !empty($_POST['email'])) {

$nome = addcslashes($_POST['name']);
$email = addcslashes($_POST['email']);
$phone = addcslashes($_POST['phone']);
$mensagem = addcslashes($_POST['message']);

$to = "matheussgsilva@hotmail.com";
$subject = "Contato - Portfólio";
$body = "Nome: ".$nome."\r\n"
        "Email: ".$email."\r\n"
        "Telefone: ".$phone."\r\n"
        "Mensagem: ".$message;
$header = "From:matheussgsilva@hotmail.com"."\r\n"."Reply-to:".$email."\r\n"."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)) {
    echo('Email enviado com sucesso!');
}else {
    echo('Erro no envio do email!');
}

}

?>