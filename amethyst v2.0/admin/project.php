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

// echo 'working';
if($_SERVER['REQUEST_METHOD']=="POST")
{
    $desc=$_POST['desc'];
    $title=$_POST['title'];
   $event_title= $_POST['event_desc'];
    $objective_desc=$_POST['objective_desc'];
    $solution_desc=$_POST['solution_desc'];
    $result_desc=$_POST['result'];

    // echo $desc;
    // echo '<br>';
    // echo $event_title;
    // echo '<br>';
    // echo $objective_desc;
    // echo '<br>';
    // echo $solution_desc;
    // echo '<br>';
    // echo $result_desc;
    // echo '<br>';

    $query='INSERT INTO `projects` (`project_id`, `title`, `_desc`, `event_desc`, `objective_desc`, `solution_desc`, `result_desc`) VALUES (NULL, "'.$title.'", "'.$desc.'", "'.$event_title.'", "'.$objective_desc.'", "'.$solution_desc.'", "'.$result_desc.'");';

    $result=mysqli_query($DbConn,$query);
    if($result)
    {
        echo 'content uploaded';
    }
    

    // echo $desc;
    // echo '<br>';

}
    if(isset($_FILES['image']))
    {
            

        $query='SELECT * FROM `projects`';

        $result=mysqli_query($DbConn,$query);
        $num=mysqli_num_rows($result);
        // echo $num;
        
        $image_name=$_FILES['image']['name'];
        // echo '<br>';
        // echo $image_name=$_FILES['image']['tmp_name'];
        // print_r(pathinfo($image_name,PATHINFO_DIRNAME));
        $extension=pathinfo($image_name,PATHINFO_EXTENSION);
        // echo $extension;
        // $next_number=$num+1;
        $rename=$title;
        $new_name=$rename.'.'.$extension;
        // echo $new_name;

        $file_name=$_FILES['image']['tmp_name'];
        if(move_uploaded_file($file_name,'../img/'.$new_name))
        {
            // echo 'file uploaded';
        }
        else
        {
            echo '<br>';
            echo 'some problem occured';
        }

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
    <link href="assets/css/light-bootstrap-dashboard.css?v=2.0.0 " rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <!-- CSS Just for demo purpose, don't include it in your project -->
    <!-- <link href="assets/css/demo.css" rel="stylesheet" /> -->
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
                    <li class="">
                        <a class="nav-link" href="index.php">
                            <i class="nc-icon nc-chart-pie-35"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link " href="#">
                            <i class="nc-icon nc-notes"></i>
                            <p>Upload Project</p>
                        </a>
                    </li>

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
                <div class="container">
                    <h1>Upload Your New Project Details</h1>
                </div>
                <div class="container-fluid">
                    <div class="row">

                        <form action="" method="POST" enctype="multipart/form-data">

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="formFileSm" class="form-label">* Upload Your Project Image (only in
                                            jpg format)</label>
                                        <input class="form-control form-control-sm" name="image" id="image" type="file" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Project Title</label>
                                        <input type="text" class="form-control" id="" name="title" required>
                                      </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Project Description</label>
                                        <input type="text" class="form-control" id="" name="desc" required>
                                      </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Event Title</label>
                                        <input type="text" class="form-control" id="" name="event_desc" required>
                                      </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Objective</label>
                                        <input type="text" class="form-control" name="objective_desc" required>
                                      </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Soloution</label>
                                        <input type="text" class="form-control" name="solution_desc" required>
                                      </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Result</label>
                                        <input type="text" class="form-control" name="result" required>
                                      </div>
                                </div>
                                
                            </div>
                               
                            

                                        <button style="width: fit-content;" class="container btn btn-primary" type="submit">Submit</button>
                                 
                        </form>
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>



<!-- Control Center for Light Bootstrap Dashboard: scripts for the example pages etc -->
<script src="assets/js/light-bootstrap-dashboard.js?v=2.0.0 " type="text/javascript"></script>
<!-- Light Bootstrap Dashboard DEMO methods, don't include it in your project! -->
<script src="assets/js/demo.js"></script>


</html>