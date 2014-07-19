#pragma strict

var Terreno: Terrain;

var ProporcaoX: float;
var ProporcaoY: float;

var PercentTela: float;

var ProporcaoXMapa: float;
var ProporcaoYMapa: float;

var PosicaoX: float;
var PosicaoY: float;

var cursor: Transform;

function Start () {

}

function Update () {


transform.position.x = 0;
transform.position.y = 0;

ProporcaoX = Terreno.terrainData.size.x/Terreno.terrainData.size.z;
ProporcaoY = Terreno.terrainData.size.z/Terreno.terrainData.size.x;

if (ProporcaoX>1)
ProporcaoX = 1;

if (ProporcaoY>1)
ProporcaoY = 1;

transform.guiTexture.pixelInset.width = ProporcaoX*Screen.width*(PercentTela/100);
transform.guiTexture.pixelInset.height = ProporcaoY*Screen.width*(PercentTela/100);

transform.guiTexture.pixelInset.x = 0 + Screen.width/50;
transform.guiTexture.pixelInset.y = 0 + Screen.height/30;

}

function OnMouseOver()
{
  //print(Input.mousePosition);
  ProporcaoXMapa = Terreno.terrainData.size.x/transform.guiTexture.pixelInset.width;
  ProporcaoYMapa = Terreno.terrainData.size.z/transform.guiTexture.pixelInset.height;
  PosicaoX = Input.mousePosition.x - transform.guiTexture.pixelInset.x;
  PosicaoY = Input.mousePosition.y - transform.guiTexture.pixelInset.y;
    
  if (Input.GetMouseButton(0))
  {
   cursor.position.x = Terreno.transform.position.x + (ProporcaoXMapa*PosicaoX);
   cursor.position.z = Terreno.transform.position.z + (ProporcaoYMapa*PosicaoY);
  }

}