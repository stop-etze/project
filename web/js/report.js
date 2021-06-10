function report(e) {
	var files = document.getElementById("formFileMultiple").files;
	var buttonElement = document.getElementById('submitButton');
	e.preventDefault();

	buttonClone = JSON.parse(JSON.stringify(buttonElement));
	buttonElement.outerHTML = `<button class="btn btn-lg btn-primary smt-btn" type="button" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ... מדווח</button>`;

	db.collection("reports").add({
		attacker_name: document.getElementById("attackername").value,
		description: document.getElementById("description").value,
		reporter: "/users/" + firebase.auth().currentUser.uid,
		location: document.getElementById("where").value,
		time: firebase.firestore.Timestamp.now(),
		images_count: files.length
	}).then((snapshot) => {
		var uploads = [];
		var storageRef = firebase.storage().ref();

		for(var i = 0; i < files.length; i++) {
			var filePath = snapshot.id + "/" + i + '.' + files[i].name.split('.').slice(-1)[0];
			var ref = storageRef.child(filePath);
			uploads.push(ref.put(files[i]));
		}

		Promise.all(uploads).then(function() {
			db.doc('reports/REPORTS_COUNTER').update({
				count: firebase.firestore.FieldValue.increment(1)
			}).then(function() {
				location.href = "approve.html";
			});
		});
	}).catch((error) => {
		buttonElement.outerHTML = buttonClone.outerHTML;
		alert(error);
	});

	return false;
}
