

	 	function insert_function() {
 
             

			var fconfig = {
				apiKey: "AIzaSyDc5timuQtu7Y4ZxFHafV-NTwT4sU29u8w",
				authDomain: "kdt-143.firebaseapp.com",
				databaseURL: "https://kdt-143-default-rtdb.firebaseio.com",
				projectId: "kdt-143",
				storageBucket: "kdt-143.appspot.com",
				messagingSenderId: "559265165592"
			};

			firebase.initializeApp(fconfig);
			var title = document.getElementById("title").value;
			var description = document.getElementById("description").value;
			var date = document.getElementById("date").value; 

			 

			firebase.database().ref('cms').push({
				"title": title,
				"description": description,
				"date": date
			}).then(() => {
                window.location.href='index.html';
            });

 


		}


 