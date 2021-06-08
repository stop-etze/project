function report() {
	var images_paths = [];

	for(var file in document.getElementById("formFileMultiple").files) {
		const ref = firebase.storage().ref().child('images');

		ref.put(file).then((snapshot) => {
			images_paths.append(ref.fullPath);
		});
	}

	db.collection("reports").add({
		attacker_name: document.getElementById("attackername").value,
		description: document.getElementById("description").value,
		reporter: "/users/" + firebase.auth().currentUser.uid,
		location: document.getElementById("where").value,
		time: db.Timestamp.now(),
		images: images_paths
	}).then(() => {
		location.href = "approve.html";
	}).catch((error) => {
		alert(error);
	});
}
