  
<?php
error_reporting(0); 
include "conn.php";

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password']; 


$qury = "select 'name', 'email', 'password' from auth where name='$name' && email='$email' && password='$password'"; 
$co = mysqli_query($conn, $qury);

if(mysqli_num_rows($co) == 1){
    echo "<script> alert('User Already Exist') </script>";
    echo "<meta http-equiv='refresh' content='0; url=signup.html'>";
}else{
  
    $main = "insert into auth(name, email, password) values('$name', '$email', '$password')";
    mysqli_query($conn, $main); 
    header("location:login.html");  
    $_SESSION["username"] = $name;
} 

?> 