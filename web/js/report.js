function report() {
	db.collection("reports").add({
		attacker_name: document.getElementById("attackername").value,
		description: document.getElementById("description").value,
		reporter: "/users/" + firebase.auth().currentUser.uid,
		location: document.getElementById("where").value,
		time: firebase.firestore.Timestamp.now(),
		images: []
	}).then((snapshot) => {
		var images_paths = [];
		var storeageRef = firebase.storage().ref();
		var files = document.getElementById("formFileMultiple").files;

		for(var i = 0; i < files.length; i++) {
			var filePath = snapshot.id + "/" + i + '.' + files[i].name.split('.').slice(-1)[0];
			var ref = storeageRef.child(filePath);

			ref.put(files[i]).then(() => {
				images_paths.push(filePath);
			});
		}

		while(files.length != images.length);

		db.doc('reports/' + snapshot.id).set({
			images: images_paths
		}).then(function() {
			location.href = "approve.html";
		});
	}).catch((error) => {
		alert(error);
	});
}
