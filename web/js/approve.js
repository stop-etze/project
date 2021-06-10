async function updateReportNumber() {
	document.getElementById('cardCount').innerText = (await db.doc('reports/REPORTS_COUNTER').get()).data().count;
	document.getElementById('cardContainer').style.display = "block";
}
