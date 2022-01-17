<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de administracion</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="test.js"></script>

    <style>
        .forms {
            display: flex;
        }
        form {
            padding: 1%;
        }
    </style>
</head>
<body>
    <div class="forms">
        <form action="index.php" method="post">
            <fieldset>
                <legend>Elige un canal de retransmision</legend>
                <input type="radio" name="view" value="LCK" class="LCK"><label for="LCK">LCK</label>
                <input type="radio" name="view" value="LPL" class="LPL"><label for="LPL">LPL</label> 
                <input type="radio" name="view" value="LEC" class="LEC"><label for="LEC">LEC</label> <br>
                <input type="submit" name="enviarRadio" value="enviar">
            </fieldset>
        </form>

        <form action="index.php" method="post">
            <fieldset>
                <legend>O introduce el video que quieres reproducir</legend>
                <input type="text" name="manual_view" placeholder="Introducir url manualmente"> <br>
                <input type="submit" name="enviarText" value="enviar">
            </fieldset>            
        </form>
        <div class="timer">
            <form action="index.php" method="post">
                <fieldset>
                    <legend>Timer</legend>
                    <input type="text" name="minutos" class="minutos" placeholder="Minutos">
                    <input type="text" name="segundos" class="segundos" placeholder="Segundos"> <br>
                    <input type="submit" value="Iniciar" name="iniciarTimer">
                    <input type="submit" value="Parar" name="pararTimer">
                </fieldset>
            </form>
        </div>
    </div>
    <div class="streams">
        <p>Streams disponibles:</p>
        <div id="streams"></div>
    </div>
    <p>Log: </p>

<?php 
include("funciones.php");

$LCK = "https://www.youtube.com/embed/live_stream?channel=UCKVlixycWmapnGQ_wht4cHQ";
$LPL = "https://www.youtube.com/embed/live_stream?channel=UCaFMdq6QrAAEx5k2cLlZNPA";
$LEC = "https://www.youtube.com/embed/live_stream?channel=UCvqRdlKsE5Q8mf8YXbdIJLw";


if (isset($_POST['enviarRadio'])) {
    
    $error = false;
    
    if (isset($_POST['view'])) {
        $request = $_POST['view'];
    } else {
        $request = "";
    }
    if ($request == "") {
        $error = true;
        echo "<p>No has introducido una opcion</p>";
    }

    if (!$error) {
        $src = getIframeSrc();
        switch ($request) {
            case 'LCK':
                $view = $LCK;
                break;
            case 'LPL':
                $view = $LPL;
                break;
            case 'LEC':
                $view = $LEC;
                break;
            default:
                break;
        }
        echo "<p>Cambiando stream a : ".$request."</p>";
        changeVideo($view);
        changeVideoMargin($view);
    }
}

if (isset($_POST['enviarText'])) {
    
    $error = false;
    $request = $_POST['manual_view'];

    if ($request == "") {
        $error = true;
        echo "<p>No has introducido una opcion</p>";
    }

    if (!$error) {
        $src = getIframeSrc();
        $json = getVideoJson($request);
        echo "<p>Cambiando stream a : ".getVideoTitle($json)."</p>";
        $url = "https://www.youtube.com/embed/".getVideoId($json);

        changeVideo($url);
    }
}

if (isset($_POST['iniciarTimer'])) {
    
    if (isset($_POST['minutos'])) {
        $minutos = $_POST['minutos'];
        $minutos = (int) $minutos * 60 * 1000;
    }
    if (isset($_POST['segundos'])) {
        $segundos = $_POST['segundos'];
        $segundos = (int) $segundos * 1000;
    }

    $tiempo_actual = date('D M d Y H:i:s O');
    $tiempo_timer = $minutos + $segundos;

    echo "<p>Actual:$tiempo_actual</p>";
    echo "<p>Introducido:$tiempo_timer</p>";
    $cadena_texto = $tiempo_actual."\n".$tiempo_timer;
    writeFile($cadena_texto);
    
}


if (isset($_POST['pararTimer'])) {
    if (file_exists('../cabrita/timer')) {
        unlink('../cabrita/timer');
    }
    echo "<p>Timer parado</p>";
}

if (isset($_POST['cambiarTitulo'])) {
    
    $error = false;
    $request = $_POST['new_title'];

    if ($request == "") {
        $error = true;
        echo "<p>No has introducido una opcion</p>";
    }

    if (!$error) {
        changeTitleTag($request);
        echo "<p>Cambiando titulo a : ".$request."</p>"; 
    }
}

?>
</body>
</html>