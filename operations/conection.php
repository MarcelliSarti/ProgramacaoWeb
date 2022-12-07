<?php
  $sname = "localhost";
  $uname = "root";
  $pwd = "abc123@XYZ";
  $port = "3307";
  try {
    $conn = new PDO("mysql:host=$sname;dbname=myDB;port=$port", $uname, $pwd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
  catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
  }
?>