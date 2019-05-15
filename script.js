window.addEventListener("load",init,false);

entrer = document.getElementById("entrer");
menu = document.getElementById("menuboutton");
liste = document.getElementById("menutop");
opacite = document.getElementById("opacite");

function init()
{
	entrer = document.getElementById("entrer");
	entrer.addEventListener("click",action);
	menu = document.getElementById("menuboutton");
	liste = document.getElementById("menutop");
	opacite = document.getElementById("opacite");	
	opacite.addEventListener("click",retour);
	menu.addEventListener("click",fnmenu);



	function action()
	{
		console.log("entrer");
		entrer.parentNode.removeChild(entrer);
	}	

	function fnmenu()
	{

		console.log("menu");
		liste.style.opacity= 100;
		opacite.style.opacity= 0.7;
	}

	function retour()
	{
		console.log("back");
		opacite.parentNode.removeChild(opacite);
		liste.parentNode.removeChild(liste);

	}

}

