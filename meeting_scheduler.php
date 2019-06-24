	<?php
     $server = "localhost";
     $username = "root";
     $password = "root";
     $database = "arkouting_meeting";

     //create connection
     $connection = mysqli_connect( $server, $username, $password, $database);

     // Check connection
    if (!$connection) {
      die("Connection failed: " . mysqli_connect_error());
    }

    
?>