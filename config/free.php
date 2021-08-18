<!DOCTYPE html>
<html>
<head>
	<title>Cccam.net free cccam 48 HOURS</title>
<style>
html,body{
margin:0;
padding: 0;

line-height: 1.7;
    color: #4d4d4d;
    font-weight: 400;
    font-size: 1rem;
    font-family: "Roboto Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.site-menu{
	width:100%;
	height:75px;
	margin:0;
	padding:1px 0;
	background-color:#343a40;
}
.site-menu ul{
	padding: 0 8%;
}
li{
	display: inline-block;
    padding: 10px 5px;
}
li a{
	padding: 10px 10px;
    letter-spacing: .05em;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none !important;
}
li a:hover{
    color:#fff;
}
.b-content{
	background-color:#fff;
	width: 100%;
	height: 400px;
}
.bod{
	width:70%;
	margin:0 auto;
	
}
.bod h1,h3{
	text-align: center;
}
table, td, th {  
  border: 1px solid #ddd;
  text-align: left;

}

table {
  border-collapse: collapse;
  width: 70%;
  margin:20px auto;
}

th, td {
  padding: 15px;
}
.cline{text-align: center;}
</style>
</head>
<body>
<div class="centent">
<nav class="site-menu">
	<ul>
		<li><a href="https://cccamtv.net/">Home</a></li>
		<li><a href="https://cccamtv.net/free.php">Free Cccam</a></li>
		<li><a href="https://cccamtv.net/#premium_cccam">Premium CCcam</a></li>
		<li><a href="https://cccamtv.net/#ip_tv">IP TV</a></li>
		<li><a href="https://cccamtv.net/contact">Contact</a></li>
	</ul>
</nav>
<div class="bod">
    <br><br><br><br><br><br><br>
	<h1>FREE CCCAM 48H </h1>
	<h3>Our System Automatically Generate a Free CCcam Server Test Line For You For 48 Hour</h3>
<table>
  <tr>
    <th>HOST</th>
    <th>PORT</th>
    <th>USER</th>
    <th>PASSWORD</th>
    <th>EXPIRE ON</th>
  </tr>
  <tr>
	<?php
function generateRandomString($length) {
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$user = generateRandomString(8);
$pass = "cccamtv";
$fdate=date("d-m-Y",strtotime($date. ' + 2 day'));
$ip = getHostByName(getHostName());

//$vps = "144.91.124.239/freecccam.php";

$vps = "http://144.91.124.239/add-user.php"; // script location on the vps



$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$vps); 
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,"user=".$user."&pass=".$pass."&ip=".$ip."");

// Receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

curl_close ($ch);


list($param1,$result) = explode("#", $server_output);

if($result=="Created"){

  echo '<td>144.91.124.239</td>';
  echo '<td>5200</td>';
  echo '<td>'.$user.'</td>';
  echo '<td>'.$pass.'</td>';
  echo '<td>'.$fdate.'</td>';

}else{

  echo '<td></td>';
  echo '<td></td>';
  echo '<td></td>';
  echo '<td></td>';
  echo '<td></td>';

}

?>
</tr>
</div>
</div>
</body>

</html>
