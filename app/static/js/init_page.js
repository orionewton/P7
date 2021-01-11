// Script called when page has been loaded

// Display GrandPyBot icon and start the dialogue

var dialogue = document.getElementById("dialogue");
var form = document.querySelector("form");
var query_text = form.query;
var text_ans = document.createElement("div");
text_ans.id = "text_ans";

var global_ans = document.createElement("div");
global_ans.id = "global_ans";

var figure_Gp = document.createElement("figure");
var Gp_icon = document.createElement("img");
Gp_icon.src = "../static/img/gpb.png";
Gp_icon.alt = "GrandPy:";
Gp_icon.title = "GrandPy";

var Gp_ans = document.createElement("p");
Gp_ans.textContent = "Alors, de quel endroit veux-tu parler ?";

text_ans.appendChild(Gp_ans);
figure_Gp.appendChild(Gp_icon);
global_ans.appendChild(figure_Gp);
global_ans.appendChild(text_ans);
dialogue.appendChild(global_ans);

// Add event on form
form.addEventListener("submit", function(e){
	e.preventDefault();
	
	if (form.elements.query.value.length > 2){
		button_papy_link();
	}
	else {
		not_enough_words();
	}
	
});