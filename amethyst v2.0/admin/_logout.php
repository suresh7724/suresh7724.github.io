<?php
session_start();
session_destroy();
header('location:_admin_login.php');
?>