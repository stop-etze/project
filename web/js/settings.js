function readSettings() {
    firebase.auth().onAuthStateChanged(() => {
        db.doc(`users/${firebase.auth().currentUser.uid}`).get().then((doc) => {
            doc = doc.data();

            document.getElementById("fullname").value = doc.fullname;
            document.getElementById("phone").value = doc.phone;
            document.getElementById("email").value = doc.email;       
        }).catch(function() { });
    });
}

function writeSettings(e) {
    e.preventDefault();

    db.doc(`users/${firebase.auth().currentUser.uid}`).set({
        fullname: document.getElementById("fullname").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    }).then(() => {
        alert("credentials updated seccessfuly");
    }).catch((err) => {
        alert(err);
    });
}