#pragma strict

function Start () {

}
function OnGUI ()
{
	GUI.Label(Rect(Screen.width/2.2, Screen.height/9, 400, 50), "DERROTA!");
	
	if(GUI.Button(Rect (Screen.width/2.2, Screen.height/5, 150, 50), "Tentar Novamente"))
	{
		Application.LoadLevel("Jogo");
	}

}
