#pragma strict

var Alcance: int;
var PoderAtaque: int;
var TempoAtaque: float;
var Tempo: float;
var Inimigos : GameObject[];
var InimigoMarcado: GameObject;
var AuxInimigo : GameObject;
var AchouInimigo: boolean;
var Mira : Transform;
var Distancia: float;
var AuxVida : IAInimigo;
var attacksfx : AudioClip;
var Efeito : GameObject;
var Ponto : Transform;
function Start () {

Alcance = 35;

PoderAtaque = 10;

TempoAtaque = 2;

}

function Update () {

Tempo +=Time.deltaTime; 

AchouInimigo= false;

Inimigos = GameObject.FindGameObjectsWithTag("Inimigo");

for(InimigoMarcado in Inimigos)
{
 Distancia = Vector3.Distance(InimigoMarcado.transform.position, transform.position);
 if (Distancia<Alcance)
 {
  AuxInimigo = InimigoMarcado;
  AchouInimigo = true;
  break;
 }
}

if (AchouInimigo)
{
 Mira = transform.GetChild(0);
 Ponto = Mira.GetChild(0);
  
 var Rotacao : Quaternion;

 Rotacao = Quaternion.LookRotation(transform.position - AuxInimigo.transform.position);

 Mira.rotation.eulerAngles.y = Rotacao.eulerAngles.y;
 
 if (Tempo>TempoAtaque)
 {
   audio.PlayOneShot(attacksfx);
   Instantiate(Efeito, Ponto.position, Mira.rotation);
   AuxVida = AuxInimigo.GetComponent("IAInimigo");
   AuxVida.Vida -= PoderAtaque;
   var Canhao: Transform;
   Canhao = Mira.GetChild(0);
   Canhao.Rotate(0,0,360*Time.deltaTime);
   Tempo=0;
 }
} 
}