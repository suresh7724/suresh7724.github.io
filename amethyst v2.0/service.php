<?php
    include 'partials/_database.php';
    $result_exist=null;

    if($DbConn)
    {
        // echo 'connection successfull';
    }

    if(isset($_GET['id']))
    {

        $categoryId=$_GET['id'];
    }
    else
    {
        $categoryId=1;

    }

    $query='select * from services';
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

        if($result_exist)
        {
            $query='SELECT * FROM `services` WHERE service_id='.$categoryId.'';

            $result=mysqli_query($DbConn,$query);

            if($result)
            {
                // echo 'results fetched';

                while($row=mysqli_fetch_assoc($result))
                {
                    // $para1=$row['para1'];
                    $web_title=$row['title'];
                    // echo $para1;
                }
            }
            else
            {
                // echo 'problem occured';
                echo $web_title="Services";
            }
            // echo $web_title;
        }

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

    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css">

    <link rel="stylesheet" href="css/style.css">



    <link rel="stylesheet" href="style/style.css" />
    <link rel="stylesheet" href="style/service.css">
    <script src="https://kit.fontawesome.com/58f2eeec39.js" crossorigin="anonymous"></script>
<?php
echo '
    <title>'.$web_title.'</title>';
    ?>
</head>

<body class="d">
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
                <img style="cursor: pointer" src="img/logo.png" alt="" width="100%" height="100px"/>

            </div>
            <div class="list container">
                <ul class="hero-menu">
                    <div class="row">
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="img/home.jpg" alt="" /><a class="menu-item1" href="index.html">
                                    Home</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="img/services.jpg" alt="" /><a class="menu-item2" href="services.html">Services</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="img/projects.jpg" alt="" /><a class="menu-item3" href="project.html">Projects</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="img/testimonials.jpg" alt="" /><a class="menu-item4" href="testimonials.html">Testimonials</a>
                            </li>
                        </div>
                        <div class="col">

                            <li class="menu-item d-flex flex-column">
                                <img src="img/contacts.jpg" alt="" /><a class="menu-item5" href="contact.html">Contact Us</a>
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
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="project.html">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="services.html">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="testimonials.html">Testimonials</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
        </nav>
        <!-- navbar ends here -->


        <!-- page content -->

            <div id="page-1" class="container">
                <div class="content">
                    <div id="post">
                        <div class="container">

                    <?php
                     if($result_exist)
                    {
                        $query='SELECT * FROM `services` WHERE service_id='.$categoryId.'';

                        $result=mysqli_query($DbConn,$query);

                        if($result)
                        {
                            while($row=mysqli_fetch_assoc($result))
                            {
                                $title=$row['title'];
                                $para_1=$row['para1'];
                                $para_2=$row['para2'];
                                $para_3=$row['para3'];
                                $id=$row['service_id'];

                                echo '<div class="head">
                                <h2>'.$title.'</h2>
                            </div>
                            <div class="image">
                                <img src="img/service-'.$id.'.jpg" alt="">
                            </div>
                            <div class="desc">
                                <p>
                                   '.$para_1.'
                                </p>
                                <br>
                                <p>
                                   '.$para_2.'
                                </p>
                                <br>
                                <p>
                                    '.$para_3.'
                                </p>
                            </div>
                            ';
                            }
                        }
                    }
                    else
                    {
                        echo '<div class="head">
                        <h2>Sorry No Results Found</h2>
                    </div>';
                    }
                    
                    ?>
                        <!-- <div class="head">
                            <h2>Venue Finding</h2>
                        </div>
                        <div class="image">
                            <img src="img/venue.jpg" alt="">
                        </div>
                        <div class="desc">
                            <p>
                                If you call Amethyst needing a 20-person space for a party in Basingstoke next Thursday, we can arrange it. If you call us needing a convention centre for 1200 delegates in Lisbon next year, we can arrange it
                            </p>
                            <br>
                            <p>
                                Using Amethyst to find a venue for your event not only lets you concentrate on other details; it can also save you money. From years of experience, we know how to work with venues and ensure that you are getting the most cost effective agreement possible.  
                            </p>
                            <br>
                            <p>
                                We pride ourselves on our personal service: we will always go the extra mile to find the right venue for your unique event.
                            </p>
                        </div>
                         -->
                        <div class="display d-flex">
                            <div class="tag d-flex icons">
                                <div class="icon">
                                    <i class="fas fa-bookmark"></i>
                                </div>
                                <div class="name"><p>Services</p></div>
                            </div>
                            <div class="date d-flex icons">
                                <div class="icon">
                                    <i class="fas fa-calendar-alt"></i>
                                </div>
                                <div class="name"><p>April 29</p></div>
                            </div>
                            <div class="user d-flex icons">
                                <div class="icon">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="name"><p>Admin</p></div>
                            </div>
                            <div class="comment d-flex icons">
                                 <div class="icon">
                                    <i class="fas fa-comments"></i>
                                </div>
                                <div class="name"><p>Comments are closed</p></div>
                            </div>
                        </div>

                      
                    </div>
                    </div>
                    <div id="right">
                        <div class="contact">
                            <div class="conent-1">
                                <h4>Let us help you further..</h4>
                            </div>
                            <form action="partials/_user_reponse.php" method="POST">
                                <div class="row mb-3">
                                    <div class="col">
                                        <input type="text" id="name" class="form-control" placeholder="Name" name="name" required>
                                    </div>
                                    <div class="col">
                                        <input type="email" id="email" class="form-control" placeholder="Email" name="email" required>
                                    </div>
                                </div>
                                <div class="form-group">
            
                                    <textarea class="form-control" id="message" rows="7" placeholder="Message" name="message" onfocusout="sendEmail()" required></textarea>
                                </div>
                                <div class="row button">
                                    <div class="col"><button type="reset" class="clear m-3">Clear</button></div>
                                    <div class="col"><button type="submit" class="submit m-3">Submit</button></div>
                                </div>
                            </form>
                        </div>
                        <div class="others">
                           
                            <ul class="menu container">

                            <?php
                                $query='SELECT * FROM `services`';
                                $result=mysqli_query($DbConn,$query);
                                if($result)
                                {
                                    while ($row=mysqli_fetch_assoc($result))
                                    {
                                        $id=$row['service_id'];
                                        $title=$row['title'];

                                        echo ' <li class="menu-item">
                                        <div class="icon"><i class="far fa-arrow-alt-circle-right"></i></div>
                                        <div class="link">
                                            <a href="service.php?id='.$id.'">'.$title.'</a>
                                        </div>
                                    </li>';
                                    }
                                }
                            ?>
                               
                            </ul-menu>
                        </div>
                    </div>
                </div>
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
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        function sendEmail() {
          console.log("in function");
  
          let name = document.getElementById("name").value;
          // console.log(name);
          let email = document.getElementById("email").value;
          // console.log(email);
          let message = document.getElementById("message").value;
          // console.log(message);
  
          Email.send({
            Host: "smtp.gmail.com",
            Username: "testmail7724@gmail.com",
            Password: "7724testmail",
            To: "testmail7724@gmail.com",
            From: "testmail7724@gmail.com",
            Subject: `${name} sent you massage`,
            Body: `  name: ${name}
          <br>
          email: ${email}
          <br>
          message: ${message}`,
          }).then(
          message => alert("mail sent successfully")
      );
        }
      </script>
</body>

</html>