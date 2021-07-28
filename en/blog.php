<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS || Blogs </title>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css">

    <style>
   
/* show comment  */

.comment_show{
  position: relative;
  height: 100%;
  width: 100%; 
}

.comment_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:5px 5% ;
  border-bottom: 1px solid gray;
  padding: 10px;
}

.comment_header .right{
  height: 40px;
  width: 40px;
  border: 2px solid gray;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative; 

}

.comment_header .right svg{
  position: absolute;
  width: 60%;
  height: 60%;
  fill: gray;
}

.comment_body{ 
  margin: 5px 10%; 
  display: flex; 
}

.comment_logo{
  height: 40px;
  width: 40px;
  border: 2px solid gray;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  margin-top: 10px;
}

.comment_logo svg{
  position: absolute;
  width: 60%;
  height: 60%;
  fill: var(--text-color);
}

.comment_box{ 
  transform: translateX(20px); 
  padding: 10px; 
}
 
.comment_box p{ 
  word-break: break-all;
} 

    </style>


</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand " href="#"><b>CMS</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="profile.php">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="profile.php">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-primary" href="logout.php">LogOut?</a>
                    </li>
                </ul>
                <form class="d-flex ml-auto">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-secondary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav> <br>

    <div class="container">
        <div class="jumbotron bg-light">  
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, totam porro dicta expedita ea esse unde
                alias dolorum! Expedita eaque iusto nisi dignissimos nam minus, earum nostrum nulla non consectetur quam
                neque fugiat doloremque libero soluta eligendi sapiente voluptatibus labore tempora eius ratione, magni
                odit minima! Doloribus tenetur illum ullam.</p>

            <a href="home.php" class="btn btn-outline-secondary ml-auto">Show all post</a>
        </div>





        
<?php
 error_reporting(0);
include "conn.php";

$id = $_GET['id'];  
 

$qury = "SELECT * FROM `posts` WHERE id=$id"; 
$q = mysqli_query($conn, $qury);
while($data = mysqli_fetch_array($q)){
?>    


 <div class="card mb-3" style="max-width: 740px;border:none;">
  <div class="row g-0">
    <div class="col-md-4">
      <img style="width:200px;" src="<?php echo $data["image"]; ?>" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
          <p><?php echo $data["datetime"]; ?></p>
        <h5 class="card-title"><?php echo $data["title"]; ?></h5>
        <p class="card-text"><?php echo $data["description"]; ?></p> 
        <p class="card-text"><small class="text-muted">Last updated  <script>document.write( (new Date().getMinutes()))</script> mins ago</small></p>
        
        <button class="btn btn-primary" onclick="window.location.href='deletepost.php?id=<?php echo $data['id']; ?>'">Delete Post</button>

      </div>
    </div>
  </div>
</div>


<?php
}
?>

<br>

<h2> Comment </h2>  

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis numquam repellendus voluptate. Sed maxime delectus corporis error facere, quisquam
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis numquam repellendus voluptate. Sed maxime delectus corporis error facere, quisquam
 sequi magni dolorum vitae eligendi voluptatem molestiae quidem recusandae eius qui minus expedita, non, modi quas. Fuga maxime enim harum.
<br> 

<br><br>
<form action="blogcomment.php">  
<div class="mb-3 form-control">





        
<?php     
 

$qury = "SELECT * FROM `posts` WHERE id=$id"; 
$q = mysqli_query($conn, $qury);
while($data = mysqli_fetch_array($q)){
?>    
    <input style="display:none;" type="text" name="id" value="<?php echo $data['id']; ?>">
<?php
}
?> 
    <label for="comment" class="form-label"><b>Type comment</b> </label>
    <input required type="text" class="form-control" name="comment" id="comment" placeholder="Type Your Comment"> <br>
    <input type="hidden" name="date" id="comment_datetime">
    <input type="submit" class="btn btn-outline-secondary ml-auto display-block" value="commit">
</div>
</form> 
</div>




<div class="comment_show">
<div class="comment_header">

<div class="left">
    <h3>
        <p id="num_of_cmt">comment's</p>
    </h3>
</div>


<div class="right">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;"
        xml:space="preserve">
        <g>
            <g>
                <path d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456
c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863
c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269
c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839
c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202
c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z" />
            </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
    </svg>

</div>
</div> <br>






<?php

$id = $_GET['id']; 
$qury = "select * from `$id`";
$q = mysqli_query($conn, $qury);
while($data = mysqli_fetch_array($q)){
?>  

<ol id="show_comment">
<li id="comment_body" class="comment_body">
    <div class="comment_logo">
        <i class="fa fa-2x fa-user" style="color:gray;"></i>
    </div>
    <div class="comment_box">
        <p>
            <i style="color: gray;"> <?php echo $data["user"]; ?> </i> &nbsp; <b><?php echo $data["datetime"]; ?></b>
        </p>
        <p id="show_name"><?php echo $data["comment"]; ?></p><br>
        <p><b><a href="#comment"> <i>reply</i> </a></b></p>
    </div>
</li>
</ol> 
<?php
}
?>







    </div>
    <p class="p-2 mb-0 text-center text-light bg-secondary display-block">Copyright &copy; kamleen
        <script>document.write(new Date().getFullYear());</script>
    </p>




    <script src="js/time.js"></script>
</body>

</html>