<?php 
libxml_use_internal_errors(true);

function getIframeSrc() {
    $html = "../cabrita/index.html";
    $dom = new DOMDocument;
    $dom->loadHTMLFile($html);
    $iframe = $dom->getElementById("video-primary-iframe");
    return $iframe->getAttribute("src");
}

function changeVideo($request) {
    $path_to_file = '/var/www/cabrita/index.html';
    $src = getIframeSrc();
    $file_contents = file_get_contents($path_to_file);
    $file_contents = str_replace($src, $request,$file_contents);
    file_put_contents($path_to_file,$file_contents);
}

function writeFile($contenido) {
    file_put_contents('../cabrita/timer', $contenido);
}
function getVideoJson($request) {

    $curl = curl_init();
    $key = getKey($request);
    curl_setopt_array($curl, array(
    CURLOPT_URL => "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".$key."&key=#API-KEY",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    $json = json_decode($response, true);
    return $json;
}

function getVideoTitle($json) {
    return $json['items'][0]['snippet']['title'];
}

function getVideoId($json) {
    return $json['items'][0]['id'];
}

function getKey($request) {
    $pos = strpos($request, "watch?v");
    return substr($request, $pos+8);
}

function changeTitleTag($request) {
    $html = "../cabrita/index.html";
    $dom = new DOMDocument;
    $dom->loadHTMLFile($html);
    $title = $dom->getElementsByTagName("title");
    $title = "<title>".$title[0]->nodeValue."</title>";
    $new_title = "<title>".$request."</title>";
    $file_contents = file_get_contents($html);
    $file_contents = str_replace($title, $new_title,$file_contents);
    file_put_contents($html,$file_contents);
}

function changeVideoMargin($view) {
    switch ($view) {
        case 'LPL':
            $margin = "margin-left: 70%";
            break;
        case 'LCK':
            $margin = "margin-left: 70%";
            break;
        default:
            $margin = "margin-left: 69%";
            break;
    }
    $html = "../cabrita/index.html";
    $dom = new DOMDocument;
    $dom->loadHTMLFile($html);
    $iframe = $dom->getElementById("video-secondary-iframe");
    $style = $iframe->getAttribute("style");
    $file_contents = file_get_contents($html);
    $file_contents = str_replace($style, $margin,$file_contents);
    file_put_contents($html,$file_contents);
}

?>
