 
<?php 

session_start();
include "conn.php";  

$date = $_POST['comment_datetime']; 
$title = $_POST['title']; 
$description = $_POST['description']; 


$media = $_FILES['media']['name'];
$tfile = $_FILES['media']['tmp_name'];
$folder = $media;
move_uploaded_file($tfile, $folder);
 



$qury = "insert into posts(datetime, title, description, image) values('$date', '$title', '$description', '$media')";


if(mysqli_query($conn, $qury)){ 
  // echo "success";  
  echo "<meta http-equiv='refresh' content='0; url=home.php'>"; 

}  

?>
 