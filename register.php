php
<?php include 'includes/header.php'; ?>

<?php
require_once 'config.php';

$message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    