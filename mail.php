<?php

$recepient = "webfils2017@gmail.com";
$sitename = "Vadfil";

$name = trim($_GET["name"]);
$tel = trim($_GET["tel"]);
$email = trim($_GET["e-mail"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $tel \nпочта: $email";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");



 if(isset($_POST['submit'])){ 
                                                          
                        if(mail($recepient, $pagetitle, $message)){
                            //header("Location: /good.html"); 
echo "<script>document.location.href='thanks.html';</script>"; 
                        }  else { 
                            echo "Ваше сообщение не отправлено!"; 
                        } 
                } 
?>