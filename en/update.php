<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS || Post update </title>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <style>
        .file_media{
            position: relative;   
            height: 200px;
        }
        .file_media img{
            position: absolute;
            width : 100px;
            top:40px;
            max-height:150px;
        }
        .file_media input{
            position: absolute;
            width : 100%;
            height: 100%;
            top:0;
            left: 0;
            opacity: 0;
            z-index: 33333333;
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
            <h3>Update Post Here</h3> <br>

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

        <form action="editpost.php" method="post" enctype="multipart/form-data">
            <div>
                <input class="form-control" type="hidden" name="id"  value="<?php echo $data["id"]; ?>">
            </div>
            <div>
                <input class="form-control" type="hidden" name="comment_datetime" id="comment_datetime">
            </div>
            <div class="mb-3 form-control">
                <label for="exampleFormControlInput1" class="form-label">Post Title </label>
                <input value="<?php echo $data["title"]; ?>" type="text" class="form-control" name="title" id="exampleFormControlInput1" placeholder="xyz"> <br>
            </div>
            <div class="mb-3 form-control">
                <label for="exampleFormControlTextarea1" class="form-label">Description </label>
                <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="6"><?php echo $data['description']; ?></textarea><br>
            </div> 
            <div class="mb-3 form-control file_media" >
                <label for="formFile" class="form-label">Media</label>
                <input class="form-control" name="media" type="file" id="formFile" value="<?php echo $data['image']; ?>" required><br>
                <img src="image/<?php echo $data['image']; ?>" class="form-control" alt="kamleen" >
            </div>
            <div class="mb-3 ">
                <input class="form-control btn btn-outline-secondary" type="submit" id="formFile" value="Update Post">
            </div>
        </form>

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