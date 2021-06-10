async function updateReportNumber() {
	document.getElementById('cardCount').innerHTML = (await db.doc('reports/REPORTS_COUNTER').get()).data().count;
}
