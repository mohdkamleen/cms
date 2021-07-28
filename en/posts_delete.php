<?php
session_start();
header('location:admin.php#posts');
include "conn.php";
$id = $_GET['id'];
$del = "DELETE FROM posts WHERE id=$id"; 
mysqli_query($conn, $del); 

$del = "drop table `$id`"; 
mysqli_query($conn, $del);
?> 