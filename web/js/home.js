function hideOrShow() {
	setViewState(document.getElementsByClassName("popup")[0].style.display == "block");
}

function setViewState(shouldHide) {
	if(shouldHide) {
		document.getElementById('progressBar').style.display = "";
		document.getElementById('reportButton').style.display = "block";
		document.getElementsByClassName("popup")[0].style.display = "none";
	} else {
		document.getElementById('progressBar').style.display = "none";
		document.getElementById('reportButton').style.display = "none";
		document.getElementsByClassName("popup")[0].style.display = "block";
	}
}
