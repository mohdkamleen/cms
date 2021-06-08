 
<?php 

session_start();
include "conn.php";  

$email = $_POST['email'];
$password = $_POST['password']; 


$qury = "select * from auth where email='$email' && password='$password'";
$co = mysqli_query($conn, $qury);  
$all = mysqli_num_rows($co);


if($all == 1){   
  header("location:home.php");  
  $_SESSION["email"] = $email;
}else{ 
  echo "<script> alert('User Not Available!!!'); </script>"; 
  echo "<meta http-equiv='refresh' content='0; url=login.html'>";
}
 

?>
 