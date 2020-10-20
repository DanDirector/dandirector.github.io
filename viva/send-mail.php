<?php
// the message
$msg = "First line of text\nSecond line of text";
$msg2 = $_POST["tel"];
$msg3 = $_POST["email"];
$msg4 = $msg2 . ' ' . $msg3;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);
$msg2 = wordwrap($msg2,70);

// send email
mail("vivarenovationorder@gmail.com","My subject",$msg4);
mail("Ioantomilin1983@gmail.com","My subject",$msg4);


header("Location: http://www.renovationviva.com/gratefull.html"); /* Redirect browser */
exit();
?>