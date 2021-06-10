function hideOrShow() {
	if(document.getElementsByClassName("popup")[0].style.display == "block") {
		document.getElementById('progressBar').style.display = "";
		document.getElementById('reportButton').style.display = "block";
		document.getElementsByClassName("popup")[0].style.display = "none";
	} else {
		document.getElementById('progressBar').style.display = "none";
		document.getElementById('reportButton').style.display = "none";
		document.getElementsByClassName("popup")[0].style.display = "block";
	}
}
