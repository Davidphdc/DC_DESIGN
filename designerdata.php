<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "dc@davidcvetkovic.com";
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Inquiry", $message . ' - ' . $fname . ' ' . $lname, "From:" . $email);
    
    header('Location: http://davidcvetkovic.com/inquirysubmitted.html');
  }