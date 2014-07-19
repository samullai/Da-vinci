#pragma strict

var AuxMataInimigo: CriaOrda;
var Vida: int;
var Pontuacao: int;
var destroysfx: AudioClip;
var Wave : int;
function Start () {
Vida = 10;
Pontuacao = 0;
Wave = 1;
}

function OnTriggerEnter (other : Collider)
{
	if(other.gameObject.tag == "Inimigo")
	{
	audio.PlayOneShot(destroysfx);
	Destroy(other.gameObject);
	AuxMataInimigo = GameObject.Find("respawn").GetComponent("CriaOrda");
	AuxMataInimigo.QntInimigosVivos--;
	Vida--;
 	}
}
function Update () {
	if (Vida==0)
	{
		Application.LoadLevel("Derrota");
	}
	if (Pontuacao == 100)
	{
		Application.LoadLevel("Vitoria");
	}
}
function OnGUI () {
GUI.color = Color.yellow;
GUI.Label(Rect(100, 10, 100, 50), "Vidas: " + Vida);
GUI.Label(Rect(200, 10, 250, 50), "Espaçonaves Destruidas: " + Pontuacao);
GUI.Label(Rect(400, 10, 250, 50), "Wave: " + Wave);
}