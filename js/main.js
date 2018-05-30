function minhafuncao(){
document.getElementsByTagName("body")[0].style ="bakground-color:#f42738";
document.getElementsByTagName("body")[0].className ="container";
alert("alerta");
}


document.getElementById("bt2").addEventListener("click", minhafuncao2);

function minhafuncao2(){
	var body=document.getElementsByTagName("body")[0];
	for (var i=0; i<5; i++){
		var el = document.createElement("a");
		el.href="http://hotmail.com";
		el.innerHTML="link " + (i+1);
		el.target ="blank";
		el.setAttribute("data-xupinga", "xupinga2");
		body.appendChild(el);
	}
}

