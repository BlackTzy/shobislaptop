<?php

include 'config.php';
session_start();
$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
   header('location:Homepage.php');
};

if(isset($_GET['logout'])){
   unset($user_id);
   session_destroy();
   header('location:Homepage.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index_style.css">

    <title>Index</title>
</head>
<body>
<div class="main"><div class="icon">
        <h2 class="logo">Shobi's<span class="laptop">Laptop</span></h2>
        </div>
                <div class="navbar">
                    <div class="menu">
                        <ul>
                            <li><a href="index.php">Home</a></li>
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
                            <li><a href="/contact.php">Contact Us</a></li>
                            <li><a href="/AboutUs.php">About Us</a></li>
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

                    <div class="form">
                    <h2 id="blink">Welcome!</h2>

                    <div class="profile">
                    <?php
                        $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE id = '$user_id'") or die('query failed');
                        if(mysqli_num_rows($select) > 0){
                            $fetch = mysqli_fetch_assoc($select);
                        }
                        if($fetch['image'] == ''){
                            echo '<img src="LOGIN/images/default-avatar.png">';
                        }else{
                            echo '<img src="LOGIN/uploaded_img/'.$fetch['image'].'">';
                        }
                    ?>
                    </div>
                    
                    <h3><?php echo $fetch['name']; ?></h3>
                     <button class="update"><a href="/LOGIN/edit.php">Update your info</a></button>
                      <button class="logout"><a href="logout.php">Logout</a></button>

                    </div>
                    <video autoplay loop muted  controls >
                        <source src="/VIDEO/LAPTOPADS.mp4"  type="video/mp4" >
                        Your browser does not support the video.
                    </video>

                    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>

                    <script type="text/javascript">
                    var blink = document.getElementById('blink');
                    setInterval(function() {
                    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
                        }, 1500);
                    </script>
</body>
</html>