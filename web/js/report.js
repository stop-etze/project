function report() {
	db.collection("reports").add({
		attacker_name: document.getElementById("attackername").value,
		description: document.getElementById("description").value,
		reporter: "/users/" + firebase.auth().currentUser.uid,
		location: document.getElementById("where").value,
		time: firebase.firestore.Timestamp.now()
	}).then((snapshot) => {
		var images_paths = [];
		var storeageRef = firebase.storage().ref();
		var files = document.getElementById("formFileMultiple").files;

		for(var i = 0; i < files.length; i++) {
			var ref = storeageRef.child(snapshot.id + "/" + i + files[i].name.split('.').slice(-1)[0]);

			ref.put(file).then(() => {
				images_paths.append(snapshot.id + "/" + i + files[i].name.split('.').slice(-1)[0]);
			});
		}

		while(files.length != images.length);

		db.ref('reports/' + snapshot).set({
			images: images_paths
		}).then(function() {
			location.href = "approve.html";
		});
	}).catch((error) => {
		alert(error);
	});
}
