<?php
 
 error_reporting(0);
 session_start();
 include "conn.php";
 
//  if($_SESSION['email'] == true){
     
//  }else{
//      header('location:home.php');
//  }
 
 //  echo $_SESSION['email']; 
 ?>
     





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
            <h2> All users and comments plateform here</h2> <br> 
            <a href="home.php" class="btn btn-outline-secondary ml-auto">home page</a> <br>
 

            </div>

            <h3>User Auth Details </h3>
            <table class="table table-bordered text-center" id="auth">
            <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th colspan="2">Action</th>
                </tr>

           
    <?php
            
            $qury = "select * from auth";
            $q = mysqli_query($conn, $qury);
            while($data = mysqli_fetch_array($q)){
            ?>
 

                <tr>
                    <td><?php echo $data['id']; ?> </td>
                    <td><?php echo $data['name']; ?> </td>
                    <td><?php echo $data['email']; ?> </td>
                    <td><?php echo $data['password']; ?> </td>
                    <td> <a class="btn btn-danger" href="auth_delete.php?id=<?php echo $data['id']; ?>"> Delete </a></td>
                    <td> <a class="btn btn-primary" href="auth_update.php?id=<?php echo $data['id']; ?>"> Update </a></td>
                </tr>

                
    <?php
            }
            ?>


            </table> <br> <br>


            <h3>Comment Details </h3>
            <table class="table table-bordered text-center" id="comment">
            <tr>
                    <th>id</th>
                    <th>comment</th>
                    <th>datatime</th>
                    <th>user</th>
                    <th colspan="2">Action</th>
                </tr>

           
    <?php
            
            $qury = "select * from comment";
            $q = mysqli_query($conn, $qury);
            while($data = mysqli_fetch_array($q)){
            ?>
 

                <tr>
                    <td><?php echo $data['id']; ?> </td>
                    <td><?php echo $data['comment']; ?> </td>
                    <td><?php echo $data['datetime']; ?> </td>
                    <td><?php echo $data['user']; ?> </td> 
                    <td> <a class="btn btn-danger" href="comment_delete.php?id=<?php echo $data['id']; ?>"> Delete </a></td>
                    <td> <a class="btn btn-primary" href="comment_update.php?id=<?php echo $data['id']; ?>"> Update </a></td>
                </tr>

                
    <?php
            }
            ?>


            </table> <br> <br>

            
            <h3>Posts Details </h3>
            <table class="table table-bordered text-center" id="posts">
            <tr>
                    <th>id</th>
                    <th>datatime</th>
                    <th>comment</th>
                    <th>title</th>
                    <th>description</th>
                    <th>image</th>
                    <th colspan="2">Action</th>
                </tr>

           
    <?php
            
            $qury = "select * from posts";
            $q = mysqli_query($conn, $qury);
            while($data = mysqli_fetch_array($q)){
            ?>
 

                <tr>
                    <td><?php echo $data['id']; ?> </td>
                    <td><?php echo $data['datetime']; ?> </td>
                    <td><?php echo $data['title']; ?> </td>
                    <td><?php echo $data['description']; ?> </td>
                    <td> <img src="image/<?php echo $data['image']; ?>" alt="" style="width:100px"> </td>
                    <td> <a class="btn btn-danger" href="posts_delete.php?id=<?php echo $data['id']; ?>"> Delete </a></td>
                    <td> <a class="btn btn-primary" href="update.php?id=<?php echo $data['id']; ?>"> Update </a></td>
                </tr>

                
    <?php
            }
            ?>


            </table> <br> <br>


        




    </div>
    <p class="p-2 mb-0 text-center text-light bg-secondary display-block">Copyright &copy; kamleen
        <script>document.write(new Date().getFullYear());</script>
    </p>




    <script src="js/time.js"></script>
</body>

</html>