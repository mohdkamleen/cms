<?php
session_start();
header('location:admin.php#comment');
include "conn.php";
$id = $_GET['id'];
$del = "DELETE FROM comment WHERE id=$id"; 
mysqli_query($conn, $del); 
 
?> 