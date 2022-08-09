<?php
## server hosted in ECS FARGATE AND SSL in application loadbalancer
// $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$actual_link = ("https") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
header("Location: ${actual_link}/../../..");
