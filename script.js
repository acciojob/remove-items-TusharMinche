//your JS code here. If required.

let btn = document.getElementsByTagName("input")[0];

let selectElements = document.getElementById("colorSelect");

btn.addEventListener("click", () => {
	for(let i = 0; i < selectElements.options.length; i++){
	if(selectElements.options[i].selected) selectElements.remove(i);
}
});

