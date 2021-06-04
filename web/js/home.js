function hideOrShow() {
    if(document.getElementsByClassName("popup")[0].style.display == "block") {
        document.getElementsByClassName("popup")[0].style.display = "none";
    } else {
        document.getElementsByClassName("popup")[0].style.display = "block";
    }
}
