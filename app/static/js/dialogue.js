// Function to display the answer from GrandPy Bot

function display(response, global_response) {
	
	var global_ans = document.createElement("div");
	global_ans.id = "global_ans";
	var figure_Gp = document.createElement("figure");
	var Gp_ans_gmap = document.createElement("p");
	var ans_gmap = document.createElement("p");
	var Gp_ans_wiki = document.createElement("p");
	var ans_wiki = document.createElement("p");
	var text_ans = document.createElement("div");
	text_ans.id = "text_ans";

	var Gp_icon = document.createElement("img");

	Gp_icon.src = "../static/img/gpb.png";
	Gp_icon.alt = "GrandPyBot:";
	Gp_icon.title = "GrandPyBot";
	global_ans.appendChild(figure_Gp);
	figure_Gp.appendChild(Gp_icon);
	global_ans.appendChild(text_ans);
	dialogue.appendChild(global_ans);

	// If Mediawiki and Gmap returned values
	if (response.wiki !== "ZERO_RESULT") {
	Gp_ans_gmap.textContent = response.Gp_ans_gmap+" "+response.gmap;
	Gp_ans_wiki.textContent = response.Gp_ans_wiki;

	source_url = document.createElement("a");
	source_url.href = "https://fr.wikipedia.org/?curid="+response.wiki_id
	source_url.textContent = " [Plus de détails]";
	ans_wiki.textContent = response.wiki+" ";
	ans_wiki.appendChild(source_url);

	text_ans.appendChild(Gp_ans_gmap);
	text_ans.appendChild(Gp_ans_wiki);
	text_ans.appendChild(ans_wiki);
	
	actualise_map(response.latitude, response.longitude, response.gmap);
	papy_loading("off")
	query_text.disabled = false;
	}
	// if gmap returns nothing
	else {
		if (response.gmap === "ZERO_RESULT"){
			var Gp_answer = document.createElement("p");
			Gp_answer.textContent = response.Gp_answer;
			text_ans.appendChild(Gp_answer);
			papy_loading("off")
			query_text.disabled = false;
			}

		// if only wikimedia returns nothing
		else {
			Gp_ans_gmap.textContent = response.Gp_ans_gmap+" "+response.gmap;;
			Gp_ans_wiki.textContent = response.Gp_ans_wiki;
			text_ans.appendChild(Gp_ans_gmap);
			text_ans.appendChild(Gp_ans_wiki);
			papy_loading("off")
			query_text.disabled = false;
			}
	}
}


// GrandPy thinking
function papy_loading(state) {
	var papy_loading_pict = document.getElementById("papy_face");
	
	if (state === "on") {
		var papy_gif = document.createElement("img");
		papy_gif.src = "../static/img/gpb_search.gif";
		papy_gif.alt = "gif_papy"
		papy_gif.title = "Je réflechi..."
		papy_gif.id = "gif_papy"
		papy_loading_pict.replaceChild(papy_gif, document.getElementById("papy_face_pict"))

	} else {
		var papy_face_pict = document.createElement("img")
		papy_face_pict.src = "../static/img/gpb.png";
		papy_face_pict.alt = "Papy_face";
		papy_face_pict.id = "papy_face_pict";
		papy_face_pict.addEventListener("click", user_request_analyse);
		papy_loading_pict.replaceChild(papy_face_pict, document.getElementById("gif_papy"))
	}
}


function user_request_analyse()
{
	if (form.elements.query.value.length > 2) {
			button_papy_link();
					}
	else 	{
			not_enough_words();
					}
}

// Main function called when the client ask a question
function button_papy_link() {
	papy_loading("on");
	query_text.disabled = true;
	var request = form.elements.query.value;
	form.elements.query.value="";
	var global_user_request = document.createElement("div");
	global_user_request.id = "global_user_request";
	var figure_user = document.createElement("figure");
	var user_icon = document.createElement("img");
	user_icon.src = "../static/img/user.png";
	user_icon.alt = "User:";
	user_icon.title = "User";
	figure_user.appendChild(user_icon);
	var user_request = document.createElement("p");
	user_request.textContent = request;
	user_request.id = "user_request-text";
	global_user_request.appendChild(figure_user);
	global_user_request.appendChild(user_request);
	dialogue.appendChild(global_user_request);
	var url = encodeURI("https://loan-grandpybot.herokuapp.com//results/?query="+request);
	ajaxGet(url, display);
	
}

// If the question length is < 2 characters
function not_enough_words()
{
	var text_ans = document.createElement("div");
	text_ans.id = "text_ans";

	var global_ans = document.createElement("div");
	global_ans.id = "global_ans";

	var figure_Gp = document.createElement("figure");
	var Gp_icon = document.createElement("img");
	Gp_icon.src = "../static/img/gpb.png";
	Gp_icon.alt = "GrandPy:";
	Gp_icon.title = "GrandPy";

	var Gp_answer = document.createElement("p");
	Gp_answer.textContent = "Il va falloir développer un peu plus...";

	text_ans.appendChild(Gp_answer);
	figure_Gp.appendChild(Gp_icon);
	global_ans.appendChild(figure_Gp);
	global_ans.appendChild(text_ans);
	dialogue.appendChild(global_ans);
}
