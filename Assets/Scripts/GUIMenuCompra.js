#pragma strict

var RectMenu : Rect;
var RectBotoes : Rect;

var Torre1: GameObject;
var Torre2: GameObject;

var IndiceTexto: int;

var dinheiro: int;
var soundinsfx : AudioClip;
function Start () {
IndiceTexto=0;
dinheiro=80;
}

function Update () {

if (Input.GetMouseButtonDown(1))
{
 IndiceTexto+=1;
 audio.PlayOneShot(soundinsfx);
// RectMenu =  Rect(10,10,200,300);
 RectMenu.x = Input.mousePosition.x;
 RectMenu.y = -(Input.mousePosition.y-Screen.height);
 RectMenu.height = Screen.height/5;
 RectMenu.width = Screen.width/9;
 
 if ((RectMenu.x+RectMenu.width)>Screen.width)
 {
    RectMenu.x -= (RectMenu.x+RectMenu.width-Screen.width);
 }
 
 if ((RectMenu.y+RectMenu.height)>Screen.height)
 {
    RectMenu.y -= (RectMenu.y+RectMenu.height-Screen.height);
 }
 
}

}

function OnGUI () {
GUI.color = Color.yellow;
GUI.Label(Rect(10, 10, 100, 50), "Gold: " + dinheiro);
if (IndiceTexto==1)
GUI.Window(0,RectMenu,Torres,"Torres");
if (IndiceTexto >1)
IndiceTexto-=2;

}

function Torres () {

RectBotoes.x = 10;
RectBotoes.y = 20;
RectBotoes.width = RectMenu.width-20;
RectBotoes.height = RectMenu.height/2 - 12;
if (dinheiro >=20)
GUI.color = Color.yellow;
else
GUI.color = Color.red;
if (GUI.Button(RectBotoes,"Torre 1: 20 gold") && dinheiro >= 20)
{
  Instantiate(Torre1,transform.position,transform.rotation);
  IndiceTexto=0;
}
RectBotoes.y +=RectMenu.height/2 - 12;
if (dinheiro >=80)
GUI.color = Color.yellow;
else
GUI.color = Color.red;
if (GUI.Button(RectBotoes,"Torre 2: 80 gold") && dinheiro >= 80)
{
 Instantiate(Torre2,transform.position,transform.rotation);
 IndiceTexto=0;
}
}