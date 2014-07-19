#pragma strict

function Start () {

}
function OnGUI ()
{
	GUI.Label(Rect(Screen.width/2.1, Screen.height/9, 400, 50), "VITORIA!");
	
	if(GUI.Button(Rect (Screen.width/2.2, Screen.height/5, 150, 50), "Jogar Novamente"))
	{
		Application.LoadLevel("Jogo");
	}
	if(GUI.Button(Rect (Screen.width/2.2, Screen.height/3.5, 150, 50), "Sair"))
	{
		Application.Quit();
	}
}
