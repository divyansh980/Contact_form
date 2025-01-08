<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db_connect.php';

// Check if form is submitted successfully
if($_SERVER["REQUEST_METHOD"] =="POST"){
        $name = $conn->real_escape_string($_POST['name']);
        $email = $conn->real_escape_string($_POST['email']);
        $phone = $conn->real_escape_string($_POST['phone']);
        $subject = $conn->real_escape_string($_POST['subject']);
        $message = $conn->real_escape_string($_POST['message']);

        if(empty($name) || empty($email) || empty($phone)){
                die("Error!: Please fill all the  required fields.");
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                die("Error!: Invalid email format.");
        }

        if(!preg_match("/^\d{10}$/", $phone)){
                die("Error!: Phone number must be exactly 10 digits.");

        }

        //insert values into the database
        $sql = "INSERT INTO form_submissions (name, email, phone, subject, message) 
                VALUES ('$name', '$email', '$phone', '$subject', '$message')";

        if($conn->query($sql) === true){
                echo "Form submitted successfully.--Bolo Jingalala😁";

        }else{
                echo "Error!: " . $sql . "<br>" . $conn->error;
        }

        //close the connection
        $conn->close();
}else{
        die("Error!: Invalid request method.");
}

?>