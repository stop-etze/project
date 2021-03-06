function hideOrShow() {
	if(document.getElementsByClassName("popup")[0].style.display == "block") {
		document.getElementById('progressBar').style.display = "";
		document.getElementById('reportButton').style.display = "";
		document.getElementsByClassName("popup")[0].style.display = "none";
	} else {
		document.getElementById('progressBar').style.display = "none";
		document.getElementById('reportButton').style.display = "none";
		document.getElementsByClassName("popup")[0].style.display = "block";
	}
}

function loadProgress() {
	firebase.auth().onAuthStateChanged(() => {
		db.doc(`users/${ firebase.auth().currentUser.uid }`).get().then((doc) => {
			document.getElementById('progressBar').src = `../html/progress-viewer.html?percent=${doc.data().progress ? doc.data().progress : 0}`;
		}).catch(() => { 
			document.getElementById('progressBar').src = `../html/progress-viewer.html?percent=0`;
		});
	});
}