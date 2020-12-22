<?php 

if (file_exists('timer')) {

    $contenido = file_get_contents('timer');
    echo $contenido;
} else {
    echo false;
}

?>