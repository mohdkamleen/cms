

function show_function() {


    var fconfig = {
        apiKey: "AIzaSyDc5timuQtu7Y4ZxFHafV-NTwT4sU29u8w",
        authDomain: "kdt-143.firebaseapp.com",
        databaseURL: "https://kdt-143-default-rtdb.firebaseio.com",
        projectId: "kdt-143",
        storageBucket: "kdt-143.appspot.com",
        messagingSenderId: "559265165592"
    };

    firebase.initializeApp(fconfig);




    firebase.database().ref('cms').once('value', function (snapshot) { 
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            document.getElementById("show_post").innerHTML += `
                    <div class="card">
                    <div class="card-header">
                       ${childData.date}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${childData.title}</h5>
                        <p class="card-text">${childData.description}</p>
                        <a href="#" class="btn btn-success">Read More</a>
                    </div>
                </div> <br>`;
        });
    });



}


