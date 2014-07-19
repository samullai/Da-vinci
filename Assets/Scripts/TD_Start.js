#pragma strict

function Start () {

}

function OnGUI ()
{
	//GUI.Label(Rect(Screen.width/2.2, Screen.height/9, 400, 50), "Instrucoes");
	//GUI.Label(Rect(Screen.width/2.2, Screen.height/7, 400, 50), ". Botao direito do mouse abre o painel de torres;");
	//GUI.Label(Rect(Screen.width/2.2, Screen.height/6, 200, 50), ". Scroll do Mouse: +/- zoom.");
	//GUI.Label(Rect(Screen.width/2.2, Screen.height/5.2, 400, 50), "Objetivo: Destruir 100 Espaçonaves");
	
	if(GUI.Button(Rect (Screen.width/2.5, Screen.height/1.22, 150, 50), "Iniciar Jogo"))
	{
		Application.LoadLevel("Jogo");
	}
	if(GUI.Button(Rect (Screen.width/2.5, Screen.height/1.1, 150, 50), "Sair"))
	{
		Application.Quit();
	}
}
