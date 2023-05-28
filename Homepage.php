<?php

include 'config.php';
session_start();

if(isset($_POST['submit'])){

   $email = mysqli_real_escape_string($conn, $_POST['email']);
   $pass = mysqli_real_escape_string($conn, md5($_POST['password']));

   $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE email = '$email' AND password = '$pass'") or die('query failed');

   if(mysqli_num_rows($select) > 0){
      $row = mysqli_fetch_assoc($select);
      $_SESSION['user_id'] = $row['id'];
      header('location:index.php');
   }else{
      $message[] = 'incorrect email or password!';
   }

}

?>

<!DOCTYPE html>
<html lang ="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Home Page</title>
    </head>
    <body>
        <div class="main"><div class="icon">
        <h2 class="logo">Shobi's<span>Laptop</span></h2>
        </div>
                <div class="navbar">
                    <div class="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><div class="dropdown">
                            <button class="dropbtn">Shop by brands</button>
                                <div class="dropdown-content">
                                 <a href="/ACER/ACER.PHP">Acer</a>
                                 <a href="/ASUS/ASUS.PHP">Asus</a>
                                 <a href="/DELL/DELL.PHP">Dell</a>
                                </div></li>
                            
                            <li><div class="dropdown">
                                <button class="dropbtn">Peripherals</button>
                                <div class="dropdown-content">
                                  <a href="/KEYBOARD_MOUSE/KEYBOARD_MOUSE.PHP">Keyboard and mouse</a>
                                  <a href="/HDD_SSD/HDDSSD.PHP">External HDD and SSD</a>
                                  <a href="/MONITOR_HEADSET/MONITOR_HEADSET.PHP">Monitor and Headset</a>
                                  <a href="/SOFTWARE/SOFTWARE.PHP">Softwares</a>
                                </div></li>
                            <li><a href="contact.php">Contact Us</a></li>
                            <li><a href="AboutUs.php">About Us</a></li>
                        </ul>
                        </div>
                      
                </div>
                <div class="content">
                    <h1> Welcome to our <span>Website</span></h1>
                    <p class="par">
                        <br>
                        Dont' wait for an opportunity<span> Create it...</span><br>
                        Enjoy shopping...
                    </p>
                    <button class="cn"><a href="/CARREERS/CAREERS.PHP">JOIN US</a></button>
                    <form action="" method="post" enctype="multipart/form-data">
                    <div class="form">
                        <h2 id="blink">Login Here!</h2>
                        <?php
                            if(isset($message)){
                                foreach($message as $message){
                                    echo '<div class="message">'.$message.'</div>';
                                }
                            }
                            ?>
                        <input type="email" name="email" placeholder="Enter your Email" class="box" required>
                        <input type="password" name="password" placeholder="Enter your Password" class="box" required>
                        <button class="btnn" name="submit">Login</button>

                        <p class="link">Don't have an account?<br>
                        <a href="/REGISTRATION.PHP">Sign up here</a></p>
                        <br>
                    </div>
                </form>        
                    <video autoplay loop muted  controls >
                        <source src="/VIDEO/LAPTOPADS.mp4"  type="video/mp4" >
                        Your browser does not support the video.
                    </video>
                           
                </div>
                
        </div>

            <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>

            <script type="text/javascript">
            var blink = document.getElementById('blink');
            setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
                 }, 1500);
             </script>
   
    </body>
</html>