 
<?php 

session_start();
include "conn.php";  
$id = $_GET['id'];
$date = $_GET['date']; 
$comment = $_GET['comment'];  
$user = "Unknown"; 

 
$mktable = "CREATE TABLE if not exists `$id` (
  `comment` varchar(255) NOT NULL,
  `datetime` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL
)";

mysqli_query($conn, $mktable);
   

$qury = "insert into `$id`(comment, datetime, user) values('$comment','$date','$user')";

if(mysqli_query($conn, $qury)){ 
  echo "<meta http-equiv='refresh' content='0; url=blog.php?id=$id'>";
} else {
    // echo "somthing went wrong";
}

?>
 