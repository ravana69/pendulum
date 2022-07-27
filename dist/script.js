const btn = document.getElementById("btn"),
	svg = document.getElementsByClassName("svg")[0];

btn.onclick = (e) => {
	if (!svg.classList.contains("paused")) {
		e.target.textContent = "START";
		svg.classList.add("paused");
	} else {
		e.target.textContent = "PAUSE";
		svg.classList.remove("paused");
	}
};