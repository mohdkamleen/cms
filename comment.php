 
<?php 

session_start();
include "conn.php";  

$date = $_POST['date']; 
$comment = $_POST['comment'];  



$qury = "insert into comment(comment, datetime, user) values('$comment','$date','Unknown')";

if(mysqli_query($conn, $qury)){ 
  echo "<meta http-equiv='refresh' content='0; url=home.php#show_comment'>";
} else {
    // echo "somthing went wrong";
}

?>
 