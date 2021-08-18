<?php
    include '_database.php';
    $reponse=null;
    if($_SERVER['REQUEST_METHOD']=="POST")
    {
        $name=$_POST['name'];
        $email=$_POST['email'];
        $message=$_POST['message'];

        // echo $name;
        // echo '<br>';
        // echo $email;
        // echo '<br>';
        // echo $message;
        // echo '<br>';
        // INSERT INTO `response` (`response_id`, `user_name`, `email`, `feedback`, `time`) VALUES (NULL, 'admin', 'admin@mail.com', 'sample test message', current_timestamp());

        $query='INSERT INTO `response` (`response_id`, `user_name`, `email`, `feedback`, `time`) VALUES (NULL, "'.$name.'", "'.$email.'", "'.$message.'", current_timestamp());';

        $result=mysqli_query($DbConn,$query);
        if($result)
        {
            // echo 'reponse recorded';
            $response=true;
        }
        else
        {
            // 'some problem occured';
            $response=false;
        }
    }
    else
    {
       echo '<h1>sorry</h1>
       <p>There are some issues kindly re-submit the form</p>'; 
    }
    // echo '<pre>';
    // var_dump($response);
    // echo '<pre>';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>

    <link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css">

    <link rel="stylesheet" href="../css/style.css">



    <link rel="stylesheet" href="../style/style.css"/>

    <script src="https://kit.fontawesome.com/58f2eeec39.js" crossorigin="anonymous"></script>

    <title>User Feedback</title>
</head>

<body>

<section id="head" class="">
        <div class="phone container">
            <span><i class="fas fa-phone-alt"></i></span> +44 (0) 7716581489
        </div>
        <div class="email container">
            <span><i class="far fa-envelope"></i></span>
            <a href="mailto:sales@amethysteventslimited.co.uk">
                sales@amethysteventslimited.co.uk</a>
        </div>
        <div class="slogan container">
            <p>Bespoke Event Planning and Management</p>
        </div>
    </section>

    <section id="body">
        <section id="hero" class="container pt-4 d-flex">


            <div class="main-logo d-flex justify-content-center">
                <img style="cursor: pointer" src="../img/logo.png" alt="" width="100%" height="100px"/>

            </div>
            <div class="list container">
                <ul class="hero-menu">
                    <div class="row">
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="../img/home.jpg" alt="" /><a class="menu-item1" href="../index.html">
                                    Home</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="../img/services.jpg" alt="" /><a class="menu-item2" href="../services.html">Services</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="../img/projects.jpg" alt="" /><a class="menu-item3" href="../project.html">Projects</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="../img/testimonials.jpg" alt="" /><a class="menu-item4" href="../testimonials.html">Testimonials</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="../img/contacts.jpg" alt="" /><a class="menu-item5" href="../contact.html">Contact Us</a>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
            
            </div>
            
        </section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light container mt-3 mb-3">
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../project.html">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../services.html">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../testimonials.html">Testimonials</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
        </nav>

        <!-- navbar ends here -->
        <section id="title" class="pt-4 pb-4 mt-3 mb-4 container text-center">
           <h2>User Responses</h2>
        </section>
        <?php
        if($response)
        {
            echo '    <div class="alert alert-success container" role="alert">
           your response has been recorded. We will get back to you soon.
           Thank You! Go to<a href="../index.html" class="alert-link"> Home</a>
          </div>
          ';
        }
        if(!$response)
        {
            echo '<div class="alert alert-danger container" role="alert">
            Sorry There was something issue Kindly Resubmite your form  <a href="../contact.html" class="alert-link">here</a>. 
          </div>';
        }
        ?>
    
        <section id="footer">
            <br>
            <div class="content container">
                <div class="about container">
                    <div class="head">
                        <h5>About Us</h5>
                    </div>
                    <div class="desc">
                        <p>From small meetings to industry-wide conferences, Amethyst offers personalised service in all
                            aspects of event planning and management.</p>
                        <br>
                    </div>
                </div>
                <div class="testimonials container">
                    <div class="head">
                        <h5>Testimonials</h5>
                    </div>
                    <div class="desc">
                        <p><i class="far fa-arrow-alt-circle-right"></i> &nbsp; &nbsp; “I have worked with Amethyst
                            Events for 4 years / 6 events and could not be a…
                            <br>
                        </p>
                        <br>
                        <br>
                    </div>
                </div>
                <div class="social container">
                    <div class="head">
                        <h5>Connect Socially</h5>
                    </div>
                    <div class="desc">
                        <div class="link d-flex container justify-content-center">
                            <div class="icon"><i class="fa fa-facebook-official" aria-hidden="true"> </i> </div><a
                                href="https://www.facebook.com/AmethystEvents1" class="name"> Facebook</a>
                        </div>
                        <div class="link d-flex container justify-content-center">
                            <div class="icon"><i class="fa fa-twitter-square" aria-hidden="true"> </i></div><a href="https://twitter.com/amethystevents"
                                class="name">&nbsp; &nbsp; Twitter</a>
                        </div>
                        <div class="link d-flex container justify-content-center">
                            <div class="icon"><i class="fa fa-linkedin" aria-hidden="true"> </i> </div> <a href="https://www.linkedin.com/company/amethyst-events"
                                class="name"> &nbsp; &nbsp;LinkedIn</a>
                        </div>
                        <br>
                        <br>
                        <br>
                    </div>
                </div>
                <div class="contact container">
                    <div class="head">
                        <h5>Contact Us</h5>
                    </div>
                    <div class="desc">
                        <p>
                        <address>
                            Tel:  +44 (0) 7716581489
                            <br>
                            Email:<a href="mailto:sales@amethysteventslimited.co.uk">sales@amethysteventslimited.co.uk</a>
                        </address>
                        </p>
                    </div>
                    <br>

                    <br>
                    <br>
                </div>
            </div>
            <br class="br">
            <br class="br">
        </section>
        <section class="copyright d-flex justify-content-center">
            <div class="desc"><span>amethyst events manchester limited </span>
                <br> Registered in England and wales.
                <br> company number 13408978
            </div>
        </section>
        <section class="copyright d-flex justify-content-center">
            <div class="desc"><span>amethyst events manchester limited </span>
                <br> Registered in England and wales.
                <br> company number 13408978
            </div>
        </section>
        <div class="copy d-flex justify-content-center">
            <p>Amethyst Events © 2021 |
            </p>
        </div>
    </section>
</body>

</html>
