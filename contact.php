<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: https://tachelhit.info");
header('content-type: application/json; charset=utf-8');

// get posted data into local variables
$EmailFrom = trim(stripslashes($_POST['email'])); 
$EmailTo = "tachelhit.info@gmail.com";//"amsiggel@yahoo.fr";
$Subject = "Contact form tachelhit.info";
$Name = trim(stripslashes($_POST['name'])); 
$Country = trim(stripslashes($_POST['country'])); 
$Message = trim(stripslashes($_POST['message'])); 
$Surname = trim(stripslashes($_POST['surname'])); 

// validation
// if (trim($EmailFrom)=="") {
// print("Email missing - you will be redirected in a moment");  
// print "<meta http-equiv=\"refresh\" content=\"3;URL=http://www.tachelhit.info/index.html\">";
//   die();
// }

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Country: ";
$Body .= $Country;
$Body .= "\n";
$Body .= "E-mail: ";
$Body .= $EmailFrom;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
if (!$Surname) {
  $success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>\r\nContent-Type: text/html; charset=UTF-8");
}

// redirect to success page 
if ($success || $Surname){
  print("Tqad ac - Tqad am - Thank you - you're message has been sent. Tezri tbrat nnek."); 
  http_response_code(200);
}
else{
  print("We apologize, there has been an error.");
  http_response_code(400);
}
?>
