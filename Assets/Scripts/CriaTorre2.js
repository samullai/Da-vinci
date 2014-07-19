#pragma strict

var cameraP: Camera;
var PodeCriar: boolean;
var Preco : int;
var Torre2: GameObject;
var AuxDin : GUIMenuCompra;

function Start () {
cameraP=Camera.main;
PodeCriar=false;
}

function Update () {


var raio: Ray = cameraP.ScreenPointToRay(Input.mousePosition);

var Colisor: RaycastHit;
transform.renderer.material.color = Color.red;

if (Physics.Raycast(raio,Colisor,Mathf.Infinity))
 {
   transform.position.x = Colisor.point.x;
   transform.position.z = Colisor.point.z;
   transform.position.y=10+transform.lossyScale.y/2;  
   PodeCriar=true;
   var qntFilhos: int = transform.childCount;
   var i: int;
   for (i=0;i<qntFilhos;i++)
   {
    var filho : Transform = transform.GetChild(i);
    if (Physics.Raycast(filho.position,-Vector3.up,Colisor,Mathf.Infinity))
    {
    
     if (Colisor.point.y<9.9 || Colisor.point.y>10.1)
     { 
       PodeCriar=false;
       break;
     }
    
    }

   }
   if(PodeCriar)
    {
     transform.renderer.material.color = Color.blue;
     if(Input.GetMouseButtonDown(0))
     {
       Instantiate(Torre2,transform.position,transform.rotation);
       AuxDin = GameObject.Find("Jogador").GetComponent("GUIMenuCompra");
       AuxDin.dinheiro -=80;
       Destroy(gameObject);
     }
    }
 }
}