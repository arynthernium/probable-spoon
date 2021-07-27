function run() {
	if (Math.random() < (document.getElementById('percent').value / 100)) {
		document.getElementById('thespoon').style.fill = "#ddd";
	} else {
		document.getElementById('thespoon').style.fill = "#111";
	}
};