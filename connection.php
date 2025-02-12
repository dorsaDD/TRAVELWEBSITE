<?php 

$servername="localhost";
$username="root";
$password = "";
$dbname="traveltime"

$db=mysql_connect($servername,$username,$password,$dbname);
if (!$db) {
    die ("connection failed:".mysql_connect_error());
}

?>

