php
<?php

require_once 'config.php';

session_start();

// Redirect if user is already logged in
if (isset($_SESSION['user_id'])) {
    header('Location: landing.php'); // Or your user dashboard page
    exit();
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');