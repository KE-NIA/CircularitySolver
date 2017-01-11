 var wsUri = "ws://127.0.0.1:8090";
 export var activeSensor = "";
 export var idCount = 0;
 export var websocket;
 export var pointList = [];

export function echo(name)
{
    writeToScreen(name);
}

/*
  export function onMessage(evt)
  {
    var p = {
      x: 0.0,
      y: 0.0,
      z: 0.0
    };
    //parse evt.data to point
    pointList.push(p);

    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
  }
*/
  /**
  *
  *
  */
  export function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }


 export  function doSend()
  {
    input = document.getElementById("input");
    var message = input.value;
    outputMsg.appendChild("SENTttttttttttttt");
    writeToScreen('SENT: ');
  	writeToScreen(message);
    websocket.send(message);
  }


  export function doFaceCheck(){
    console.log("doFaceCheck aufgerufen")
    console.log(store.getState());

    console.log("1 mal gemessen")

  //  writeToScreen(p1);
  //  websocket.send(p1);
  //  toggle
  //  console.log("Seitegewechselt")
  //  p2 = measure();
  //  console.log("2mal gemessen")
  //diff = fitting.calcTwoFaceCheck(p1,p2)
  //  console.log(" gerechnet")
    //return diff
  //  console.log("diff zurückgegeben")
  //  writeToScreen(message);
  //  websocket.send(message);


  }
/*



  }*/
/*

*/

  
/*

*/
   export function writeToScreen(message)
  {
    //document.body.appendChild(document.createElement('output_area')).innerHTML = message;
    const output = document.getElementById("output_area");
    //  output.value += message + "\n";

    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  //window.addEventListener("load", init, false);
