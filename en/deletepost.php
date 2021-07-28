<?php
session_start();
header('location:home.php');
include "conn.php";
$id = $_GET['id'];
$del = "DELETE FROM posts WHERE id=$id"; 
mysqli_query($conn, $del); 

$del = "drop table `$id`"; 
mysqli_query($conn, $del);
?> 