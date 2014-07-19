#pragma strict

var Inimigos: GameObject;
var AuxInimigo: GameObject;

var AlteraInimigo: IAInimigo;

var OrdaAtual: int;

var QntInimigosOrda: int;
var QntInimigosGerados: int;
var TempoRes: float;

var QntInimigosVivos: int;

var NovaOrda : boolean;

var QualMuda: int;

var VidaInimigo: int;
var VelocidadeInimigo: int;

var CaminhoInimigo: Transform;
var AuxWave : Base;

function Start () {

QntInimigosOrda = 10;
TempoRes = 0;
OrdaAtual = 0;
QntInimigosVivos = QntInimigosOrda;
QntInimigosGerados = 0;
QualMuda = 0;

VidaInimigo = 50;
VelocidadeInimigo = 15;
NovaOrda= true; 

}

function Update () {

if (NovaOrda)
{
  TempoRes +=Time.deltaTime; 
  if(TempoRes>1.35)
  {
   TempoRes=0;
   if (QntInimigosOrda>QntInimigosGerados)
   {
    AuxInimigo = Instantiate(Inimigos,transform.position,transform.rotation);  
    AlteraInimigo = AuxInimigo.GetComponent("IAInimigo");
    AlteraInimigo.Caminho = CaminhoInimigo;
    AlteraInimigo.Vida = VidaInimigo;
    AlteraInimigo.VidaIni = VidaInimigo;    
    AlteraInimigo.Velocidade = VelocidadeInimigo;
    QntInimigosGerados++;
   }
   else
   {
    NovaOrda= false;
   }
  }
}
else
{
 if (QntInimigosVivos==0)
 {
  AuxWave = GameObject.Find("Base").GetComponent("Base");
   AuxWave.Wave++;
  NovaOrda = true;
  QualMuda++;
  
  if (QualMuda==1)
  {
    VidaInimigo=VidaInimigo+15;
  }
  if (QualMuda==2)
  {
    if (VelocidadeInimigo<50)
    {
     VelocidadeInimigo = VelocidadeInimigo + 2;
     VidaInimigo=VidaInimigo+7.5;
    }
  }
  if (QualMuda==3)
  {
   VidaInimigo=VidaInimigo+12.5;
   QntInimigosOrda+=2;
  }
  if (QualMuda==4)
  {
   VidaInimigo=VidaInimigo+35;
   VelocidadeInimigo = VelocidadeInimigo + 2;
  }
  if (QualMuda==5)
  {
   VidaInimigo=VidaInimigo+35;
  
  }
  if (QualMuda==6)
  {
   VidaInimigo=VidaInimigo+40;
   
  }
    if (QualMuda==7)
  {
   VidaInimigo=VidaInimigo+45;
  
  }
    if (QualMuda==8)
  {
   VidaInimigo=VidaInimigo+50;
   
  }
    if (QualMuda==9)
  {
   VidaInimigo=VidaInimigo+35;
   
  }
    if (QualMuda==10)
  {
   VidaInimigo=VidaInimigo+35;
   
  }
  
  QntInimigosGerados=0;
  QntInimigosVivos = QntInimigosOrda;
  OrdaAtual++;
 }
}
}