<?

# alterar a variavel abaixo colocando o seu email

$destinatario = "matheussgsilva@hotmail.com";

$nome = $_REQUEST['name'];
$email = $_REQUEST['email'];
$mensage = $_REQUEST['message'];
$phone = $_REQUEST['phone'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Mensagem: " . $mensagem . "\n\n";
$body = $body . "Telefone: " . $phone . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $body, "From: $email\r\n");

// redireciona para a página de obrigado
header("http://127.0.0.1:5500/index.html#form-area");


?>