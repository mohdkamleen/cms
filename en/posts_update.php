 
<?php 

session_start();
include "conn.php";  

$date = $_POST['comment_datetime']; 
$title = $_POST['title']; 
$id = $_POST['id']; 
$description = $_POST['description']; 


$media = $_FILES['media']['name'];
$tfile = $_FILES['media']['tmp_name'];
$folder = 'image/'.$media;
move_uploaded_file($tfile, $folder);
 



$qury = "UPDATE posts SET datetime='$date',title='$title',description='$description', image='$media' WHERE id='$id'";  

if(mysqli_query($conn, $qury)){ 
  // echo "success";  
  echo "<meta http-equiv='refresh' content='0; url=admin.php#posts'>";
}  

?>
 