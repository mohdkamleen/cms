 
<?php 

session_start();
include "conn.php";  

$date = $_POST['date']; 
$comment = $_POST['comment'];  



$qury = "insert into blogcomment(comment, datetime, user) values('$comment','$date','Unknown')";

if(mysqli_query($conn, $qury)){ 
  echo "<meta http-equiv='refresh' content='0; url=blog.php#show_comment'>";
} else {
    // echo "somthing went wrong";
}

?>
 