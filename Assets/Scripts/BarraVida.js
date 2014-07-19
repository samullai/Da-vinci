#pragma strict

var jogador: GameObject;
var Cor: Vector4;
var VidaI: float;
var Vida:  float;

var Tinicial : float;

var AuxVida: IAInimigo;

function Start () {
VidaI = 300;
Vida = 300;
Cor.x = 0 ;
Cor.y = 1;
Cor.z = 0;
Tinicial=transform.localScale.x ;
AuxVida = transform.parent.GetComponent("IAInimigo");
 
}

function Update () {
VidaI = AuxVida.VidaIni;
Vida = AuxVida.Vida;
if (!jogador)
{
 jogador = GameObject.Find("Jogador");
}
else
{
  transform.LookAt(jogador.transform);
  transform.renderer.material.color = Cor;
}
Cor.x = 1 - (Vida/VidaI);
Cor.y = (Vida/VidaI);

//Vida -= 10*Time.deltaTime; 

transform.localScale.x = Tinicial*(Vida/VidaI);
}