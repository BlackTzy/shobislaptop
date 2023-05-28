<?php
session_start();
$con = mysqli_connect("localhost","root","","shobi_db");

if(isset($_POST['submit']))
{
    $id = $_POST['id'];

    $name = $_POST["name"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $password = $_POST["password"];
    $confirmpassword = $_POST["confirmpassword"];
    $address = $_POST["address"];
    $gender = $_POST["gender"];

    $query = "UPDATE user_info SET name='$name', username='$username', email='$email', number='$number', password='$password', address='$address', gender='$gender' WHERE id='$id' ";
    $query_run = mysqli_query($con, $query);

    if($query_run)
    {
        $_SESSION['status'] = "Data Updated Successfully";
        header("Location: index.php");
    }
    else
    {
        $_SESSION['status'] = "Not Updated";
        header("Location: index.php");
    }
}

?>