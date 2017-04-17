<?php
require 'PHPMailerAutoload.php';
$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data
// validate the variables ======================================================
	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';
	if (empty($_POST['superheroAlias']))
		$errors['superheroAlias'] = 'E-mail is required.';
	if (empty($_POST['content']))
		$errors['content'] = 'Message is required.';
// return a response ===========================================================
	// response if there are errors
	if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;

	} else {
		$mail = new PHPMailer(); // create a new object
		$mail->IsSMTP(); // enable SMTP
		$mail->SMTPAuth = true; // authentication enabled
		$mail->SMTPSecure = 'tlc'; // secure transfer enabled REQUIRED for GMail
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 587; // or 587
		$mail->IsHTML(true);
		$mail->Username = "noisemap35@gmail.com"; //Email that you setup
		$mail->Password = "0tol1853"; // Password
		$mail->Subject = "Y-Web Contact mail from " . $_POST['name'] . ", e-mail: " .$_POST['superheroAlias']. "";
		$mail->Body = $_POST['content'];
		$mail->AddAddress("noisemap35@gmail.com"); //Pass the e-mail that you setup
		 if(!$mail->Send())
		    {
		    		echo "Mailer Error: " . $mail->ErrorInfo;
		    }
		    else
		    {
		    	$data['success'] = true;
	    		$data['message'] = 'Thank you for sending e-mail.';
		    }

	}
	echo json_encode($data);