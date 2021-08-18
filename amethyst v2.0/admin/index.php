
    <?php
    
   $login=null;
        include '../partials/_database.php';
        session_start();
               if(isset($_SESSION['admin_loggedin']) && ($_SESSION['admin_loggedin']==true))
               {
                //    echo 'login success';
                $login=true;
               }
               else
               {
                   echo 'login falied';
                   $login=false;
                   header('location:_admin_login.php?login=false');
               }

        
    ?>
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
    <link rel="icon" type="image/png" href="../img/favicon.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Admin | Dashboard</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
        name='viewport' />
    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
    <!-- CSS Files -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/light-bootstrap-dashboard.css?v=2.0.0 " rel="stylesheet" />
    <!-- CSS Just for demo purpose, don't include it in your project -->
    <link href="assets/css/demo.css" rel="stylesheet" />
</head>

<body>
    <div class="wrapper">
        <div class="sidebar" data-image="assets/img/sidebar-5.jpg">
            <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

        Tip 2: you can also add an image using data-image tag
    -->
            <div class="sidebar-wrapper">
                <div class="logo">
                    <a href="#" class="simple-text">
                        <!-- Creative Tim -->
                    </a>
                </div>
                <ul class="nav">
                <?php
                if($login)
                {
                    echo'     <li class="nav-item active">
                    <a class="nav-link" href="dashboard.html">
                        <i class="nc-icon nc-chart-pie-35"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
            
                <li>
                    <a class="nav-link" href="project.php">
                        <i class="nc-icon nc-notes"></i>
                        <p>Upload Project</p>
                    </a>
                </li>';
                }
                else
                {
                    echo '<li>
                    <a class="nav-link" href="#">
                        <i class="nc-icon nc-notes"></i>
                        <p>User Not Found</p>
                    </a>
                </li>';
                }
                ?>
               
                    
                </ul>
            </div>
        </div>
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg " color-on-scroll="500">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#pablo"> Dashboard </a>
                    <button href="" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar burger-lines"></span>
                        <span class="navbar-toggler-bar burger-lines"></span>
                        <span class="navbar-toggler-bar burger-lines"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul class="nav navbar-nav mr-auto ">
                            <li class="nav-item">
                                <a href="#" class="nav-link" data-toggle="dropdown">

                                    <span class="d-lg-none">Dashboard</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="_logout.php">
                                    <span class="no-icon">Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md-8 overflow-auto">
                            <div class="card ">
                                <div class="card-header ">
                                    <h4 class="card-title">Users Feedback Details</h4>
                                    <!-- <p class="card-category">24 Hours performance</p> -->
                                </div>
                                <div class="card-body d-flex justify-content-between">
                                    <div class="row">

                                    <?php $query='SELECT * FROM `response` ORDER BY `response`.`time` DESC';

                                    $result=mysqli_query($DbConn,$query);
                                    $num_rows=mysqli_num_rows($result);
                                    if($num_rows<=0)
                                    {
                                        echo '     <div class="card" style="width: 19rem;">

                                                <div class="card-body">
                                                    <h5 class="card-title">Users responses will appear here</h5>
                                                    <br>
                                                    <p class="card-text">
                                                     
                                                </div>
                                            </div>
                                        </div>';
                                    }
                                    else
                                    {
                                    while($row=mysqli_fetch_assoc($result))
                                    {
                                        $user=$row['user_name'];
                                        $email=$row['email'];
                                        $message=$row['feedback'];
                                        $time=$row['time'];
                                        echo '
                                   
                                        <div class="col">

                                            <div class="card" style="width: 19rem;">

                                                <div class="card-body">
                                                    <h5 class="card-title">Name : '.$user.'</h5>
                                                    <br>
                                                    <p class="card-text">
                                                        Email : '.$email.'
                                                        <br>
                                                        <br>
                                                        At '.$time.'
                                                        <hr>
                                                        Message : '.$message.' 
                                                  
                                                      
                                                    </p>
                                                    <a href="mailto:'.$email.'" class="btn btn-primary">Reply</a>
                                                </div>
                                            </div>
                                        </div>';
                                    }
                                    }
                                    ?>
                                    </div>
                                </div>
                                <div class="card-footer ">
                                    <div class="legend">
                                        <i class="fa fa-circle text-info"></i>
                                        <i class="fa fa-circle text-danger"></i>
                                        <i class="fa fa-circle text-warning"></i>
                                    </div>
                                    <hr>
                                    <div class="stats">
                                        <i class="fa fa-history"></i> Updated 1 Second ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <nav>
                        <ul class="footer-menu">
                            <li>

                                <p class="copyright text-center">
                                    ©
                                    <script>
                                        document.write(new Date().getFullYear())
                                    </script>

                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    </div>

</body>
<!--   Core JS Files   -->
<script src="assets/js/core/jquery.3.2.1.min.js" type="text/javascript"></script>
<script src="assets/js/core/popper.min.js" type="text/javascript"></script>
<script src="assets/js/core/bootstrap.min.js" type="text/javascript"></script>



<!-- Control Center for Light Bootstrap Dashboard: scripts for the example pages etc -->
<script src="assets/js/light-bootstrap-dashboard.js?v=2.0.0 " type="text/javascript"></script>
<!-- Light Bootstrap Dashboard DEMO methods, don't include it in your project! -->
<script src="assets/js/demo.js"></script>


</html>