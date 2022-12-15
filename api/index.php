<?php

include_once __DIR__ . '/../db/index.php';

$arrayFiltrato = [];

if (!empty($_GET) && !empty($_GET['genre'])) {

    foreach ($database as $elem) {

        if ($elem['genre'] == $_GET['genre']) {

            $arrayFiltrato[] = $elem;
        }
    }

} else {

    $arrayFiltrato = $database;
}


header('Content-type: application/json');

echo json_encode($arrayFiltrato);


?>