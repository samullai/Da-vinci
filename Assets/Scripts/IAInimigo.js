#pragma strict

var Caminho: Transform;
var Distancia: Vector3;
var DistanciaM: float;
var Rotacao: Quaternion;
var AjudaRotacao: float;
var i: int;
var Vida: int;
var VidaIni: int;
var Velocidade: int;
var AuxMataInimigo: CriaOrda;
var AuxDestroiPonto : PontoMiniMapa;
var AuxDin : GUIMenuCompra;
var AuxPont : Base;

function Start () {
}

function Update () {

if (Vida<=0)
{ 
 AuxDin = GameObject.Find("Jogador").GetComponent("GUIMenuCompra");
   AuxDin.dinheiro +=5;
   AuxPont = GameObject.Find("Base").GetComponent("Base");
   AuxPont.Pontuacao++;
 AuxMataInimigo = GameObject.Find("respawn").GetComponent("CriaOrda");
 AuxMataInimigo.QntInimigosVivos--;
 AuxDestroiPonto = gameObject.GetComponent("PontoMiniMapa");
 Destroy(AuxDestroiPonto.PontoAux);
 Destroy(gameObject);
}

Distancia = transform.position - Caminho.position;

DistanciaM = Vector3.Distance(transform.position, Caminho.position);

 if (DistanciaM<6)
 {
   if (Caminho.childCount>0)
   Caminho = Caminho.GetChild(0);
   Caminho.name="CAM"+i;
 }
 else
 {
 Rotacao = Quaternion.LookRotation(Distancia);
 
 AjudaRotacao =transform.rotation.eulerAngles.y - Rotacao.eulerAngles.y-180;
 
 if (AjudaRotacao<0)
 AjudaRotacao +=360;
 if (AjudaRotacao>360)
 AjudaRotacao -=360;
 
 if (AjudaRotacao>180 && AjudaRotacao < 350)
 transform.rotation.eulerAngles.y += 145*Time.deltaTime ;
  if (AjudaRotacao<180 && AjudaRotacao>10)
  transform.rotation.eulerAngles.y -= 145*Time.deltaTime ;
  
  if (AjudaRotacao<10 || AjudaRotacao > 350)
  {
  transform.rotation.eulerAngles.y=Rotacao.eulerAngles.y-180;
  
  }
 transform.Translate(0,0,Velocidade*Time.deltaTime); 
 
  }
}