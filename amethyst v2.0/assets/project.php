<?php
    include '../partials/_database.php';
    $result_exist=null;

    if($DbConn)
    {
        // echo 'connection successfull';
    }

    if(isset($_GET['id']))
    {

        $categoryId=$_GET['id'];
        $get_id=false;
    }
    else
    {
        $categoryId=1;
        $get_id=null;

    }

    $query='select * from projects';
    $result=mysqli_query($DbConn,$query);

    $total_rows=mysqli_num_rows($result);
    // echo $total_rows;
    if($total_rows>=$categoryId)
    {
        // echo 'result exist';

        $result_exist=true;
        // echo $categoryId;
    }
    else
    {
        // echo 'content has not been added';
    }
    // echo $categoryId;

        // if($result_exist)
        // {
        //     $query='SELECT * FROM `services` WHERE service_id='.$categoryId.'';

        //     $result=mysqli_query($DbConn,$query);

        //     if($result)
        //     {
        //         echo 'results fetched';

        //         while($row=mysqli_fetch_assoc($result))
        //         {
        //             $para1=$row['para1'];
        //             echo $para1;
        //         }
        //     }
        //     else
        //     {
        //         echo 'problem occured';
        //     }
        // }

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
    <link rel="stylesheet" href="css/project.css">
    <script src="https://kit.fontawesome.com/58f2eeec39.js" crossorigin="anonymous"></script>

    <title> Venue Finding Large Conventions</title>
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

        <?php
        
        // if(!$get_id)
        // {
        //     echo ' <section id="title" class="pt-4 pb-4 mt-3 mb-4 container text-center">
        //     <h2>Sorry No Results Found</h2>
        // </section>';
        // }
            if($result_exist)
            {
            $query='SELECT * FROM `projects` WHERE project_id='.$categoryId.'';
            $result=mysqli_query($DbConn,$query);

            if($result)
            {
                while($row=mysqli_fetch_assoc($result))
                {
                    $title=$row['title'];
                    $desc=$row['_desc'];
                    $event_desc=$row['event_desc'];
                    $objective_desc=$row['objective_desc'];
                    $solution_desc=$row['solution_desc'];
                    $result_desc=$row['result_desc'];
                    $id=$row['project_id'];
                    echo '
                    <section id="title" class="pt-4 pb-4 mt-3 mb-4 container text-center">
                        <h2>'.$title.'</h2>
                    </section>
                    <!-- page content -->
            
                        <div id="page" class="mt-5 p-5 container">
                            <div class="content container d-flex">
                                <div class="image">
                                    <img src="../img/'.$title.'.jpg" alt="">
                                </div>
                                <div class="description">
                                    <div class="desc">
                                        <p>
                                          '.$desc.'
                                        </p>
                                    </div>
            
                                    <div class="desc">
                                        <div class="title">Event :</div>
                                        <p>
                                         '.$event_desc.'
                                        </p>
                                    </div>
                                    <div class="desc">
                                        <div class="title">Objective :</div>
                                        <p>'.$objective_desc.'</p>
                                    </div>
                                    <div class="desc">
                                        <div class="title">Solution :</div>
                                        <p>
                                           '.$solution_desc.'
                                        </p>
                                    </div>
                                    <div class="desc">
                                        <div class="title">Result :</div>
                                        <p>'.$result_desc.'</p>
                                    </div>
                                </div>
                            </div>
            
            ';
                }
            }

            }
            else
            {
                echo '     <section id="title" class="pt-4 pb-4 mt-3 mb-4 container text-center">
                <h2>Sorry No Results Found</h2>
            </section>';
            }
        ?>

   
        <!-- page content -->

            <!-- <div id="page" class="mt-5 p-5 container">
                <div class="content container d-flex">
                    <div class="image">
                        <img src="../img/amethyst-event-700x460.jpg" alt="">
                    </div>
                    <div class="description">
                        <div class="desc">
                            <p>
                                A Client was having difficulty finding Economical facilities to host a 3 day convention for 1200 delegates
                            </p>
                        </div>

                        <div class="desc">
                            <div class="title">Event :</div>
                            <p>
                                A three-day Convention for 1200 Animation Enthusiasts.


                            </p>
                        </div>
                        <div class="desc">
                            <div class="title">Objective :</div>
                            <p>To find a Venue within the Client’s budget with Auditorium space for 1200, Large Exhibition areas, Breakout rooms, Accommodation, On-site shopping, dining and cinemas, Night-club, Evening event space for party and fashion show.</p>
                        </div>
                        <div class="desc">
                            <div class="title">Solution :</div>
                            <p>
                                Amethyst used its Experience with Venue sourcing and negotiation to find a Venue which met the Client’s exact specifications within its budget.
                            </p>
                        </div>
                        <div class="desc">
                            <div class="title">Result :</div>
                            <p>The convention was a resounding success and has been repeated on a regular basis.</p>
                        </div>
                    </div>
                </div> -->
<?php
            if($result_exist)
            {
                $query='select * from Projects';
                $result=mysqli_query($DbConn,$query);
                $number_of_rows=mysqli_num_rows($result);
                $page_no=$categoryId;
               

                    $next=$page_no+1;
              
              
                    
               
               

               if($page_no<$number_of_rows)
               {
                   echo '  <div class="next d-flex justify-content-center">
                   <button class="next"><a href="project.php?id='.$next.'">Next</a></button>
               </div>
          ';
               }
            }
              
            ?>
             </div>
         <!-- page content -->


           <!-- footer starts here -->

        <!-- footer -->

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
                                href="#" class="name"> Facebook</a>
                        </div>
                        <div class="link d-flex container justify-content-center">
                            <div class="icon"><i class="fa fa-twitter-square" aria-hidden="true"> </i></div><a href="#"
                                class="name">&nbsp; &nbsp; Twitter</a>
                        </div>
                        <div class="link d-flex container justify-content-center">
                            <div class="icon"><i class="fa fa-linkedin" aria-hidden="true"> </i> </div> <a href="#"
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
        <div class="copy d-flex justify-content-center">
            <p>Amethyst Events © 2021 
            </p>
        </div>
    </section>
    <style>
        #page .content .image
        {
            width: 50%;
        }
        #page .content .description
        {
            width: 50%;
        }
        @media screen and (max-width: 1018px) {
            #page .content .image
        {
            width: 100%;
        }
        #page .content .description
        {
            width: 100%;
        }
        }
   
    </style>
</body>

</html>