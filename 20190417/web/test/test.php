<?php

$handle = fopen("http://www.qttc.net/api.php?action=open_getBlogList&only_recommend=1&limit=5","rb");
$content = "";
while (!feof($handle)) {
    $content .= fread($handle, 10000);
}
fclose($handle);
$content = json_decode($content);
// var_dump($content);

$json_string = json_encode($content);
file_put_contents('test.json', $json_string);