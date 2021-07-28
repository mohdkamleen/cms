<?php
session_start();
header('location:admin.php#auth');
include "conn.php";
$id = $_GET['id'];
$del = "DELETE FROM auth WHERE id=$id"; 
mysqli_query($conn, $del); 
 
?> 