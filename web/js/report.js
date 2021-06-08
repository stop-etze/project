function report() {
	db.collection("reports").add({
		atttacker_name: document.getElementById("attackername").value,
		description: document.getElementById("description").value,
		location: document.getElementById("where").value,
		reporter: "/users/" + firebase.auth().currentUser.uid,
		images: [],
		time: firebase.firestore.Timestamp.now()
	}).then(() => {
		location.href = "approve.html";
	}).catch((error) => {
		console.error("Error adding document: ", error);
	});
}
