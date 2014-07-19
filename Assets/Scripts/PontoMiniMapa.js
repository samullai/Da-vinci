#pragma strict

var Ponto: GameObject;
var PontoAux: GameObject;

var MiniMapa: GameObject;
var Mapa    : GameObject;
var AuxMapa : Terrain;

var ProporcaoX: float;
var ProporcaoY: float;

var ProporcaoXMapa: float;
var ProporcaoYMapa: float;

var PosicaoX: float;
var PosicaoY: float;

function Start () {

PontoAux = Instantiate(Ponto,transform.position,transform.rotation);

}

function Update () {

if (!MiniMapa)
 {
  MiniMapa = GameObject.Find("Mini Mapa");
  Mapa     = GameObject.Find("Terrain");
  AuxMapa = Mapa.GetComponent("Terrain");
 }
else
 {
   
   PontoAux.transform.position.x = 0;
   PontoAux.transform.position.y = 0;
   PontoAux.transform.position.z = 1;
   
   ProporcaoX = MiniMapa.guiTexture.pixelInset.width/AuxMapa.terrainData.size.x;
   ProporcaoY = MiniMapa.guiTexture.pixelInset.height/AuxMapa.terrainData.size.z;
   
   PosicaoX = MiniMapa.guiTexture.pixelInset.x+((transform.position.x-AuxMapa.transform.position.x)*ProporcaoX);
   PosicaoY = MiniMapa.guiTexture.pixelInset.y+((transform.position.z-AuxMapa.transform.position.z)*ProporcaoY);
   //print(transform.position.x*ProporcaoX);
   //print(AuxMapa.terrainData.size.z);

   
   PontoAux.guiTexture.pixelInset.width  = MiniMapa.guiTexture.pixelInset.width/20;
   PontoAux.guiTexture.pixelInset.height = MiniMapa.guiTexture.pixelInset.width/20;
   
   PontoAux.guiTexture.pixelInset.x =PosicaoX - PontoAux.guiTexture.pixelInset.width/2;
   PontoAux.guiTexture.pixelInset.y =PosicaoY - PontoAux.guiTexture.pixelInset.height/2;
   
   
   if (PontoAux.guiTexture.pixelInset.x > MiniMapa.guiTexture.pixelInset.width+MiniMapa.guiTexture.pixelInset.x)
   PontoAux.guiTexture.pixelInset.x = MiniMapa.guiTexture.pixelInset.width+MiniMapa.guiTexture.pixelInset.x;
   
   if (PontoAux.guiTexture.pixelInset.y > MiniMapa.guiTexture.pixelInset.height+MiniMapa.guiTexture.pixelInset.y)
   PontoAux.guiTexture.pixelInset.y = MiniMapa.guiTexture.pixelInset.height+MiniMapa.guiTexture.pixelInset.y;
   
   
   if (PontoAux.guiTexture.pixelInset.x < MiniMapa.guiTexture.pixelInset.x)
   PontoAux.guiTexture.pixelInset.x = MiniMapa.guiTexture.pixelInset.x;
   
   if (PontoAux.guiTexture.pixelInset.y < MiniMapa.guiTexture.pixelInset.y)
   PontoAux.guiTexture.pixelInset.y = MiniMapa.guiTexture.pixelInset.y;
   
 }

}
