<?php
    require_once("meeting_scheduler.php");

    $query = "SELECT * FROM arkounting_staffs";

    $result = mysqli_query( $connection, $query );

    if( mysqli_num_rows($result) > 0) {

        //we have data
        //output data
        while( $row = mysqli_fetch_assoc($result) ) {
            
        }
    }else {
        echo "Oops! No results.";
    }

    mysqli_close($conn);

?>