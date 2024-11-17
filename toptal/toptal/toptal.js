



document.addEventListener("keypress", function(event) {
    let newCode = document.getElementById("h1Changing");
    h1Changing.textContent="";
  newCode.textContent=event.keyCode;
  newCode.style.backgroundColor="#ebeced";
  newCode.style.fontSize="200px";
  newCode.style.marginTop="-55%";

  let boxHtml=document.getElementById("boxx");
  boxHtml.style.backgroundColor="#ebeced";
  boxHtml.style.boxShadow="none";

  let jsKeyCode=document.getElementById("jsKeyCode");
  jsKeyCode.append(" ",event.keyCode);




//first Box  event key
  let eventKey=document.getElementById("eventKey");
  styleEventKey();

  let paragraph=document.getElementById("paragraph");
  paragraph.textContent="The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars."
styleParagraph();
 
let createNewBox=document.createElement("h1");
let box1=document.getElementById("boxi1");
createNewBox.textContent=event.key;
box1.append(createNewBox);
createNewBox.style.paddingTop="80px";
createNewBox.style.paddingBottom="80px";
createNewBox.style.backgroundColor="white";
createNewBox.style.fontSize="40px";
styleBox1();



//second box event code

let eventCode=document.getElementById("eventCode");
styleEventCode();

let paragraph2=document.getElementById("paragraph2");
paragraph2.textContent="The physical key on the keyboard. Doesn't care if you are holding a modifier like Shift.";
styleParagraph2();

let createNewBox2=document.createElement("h1");
let box2=document.getElementById("boxi2");
createNewBox2.textContent=event.code;
box2.append(createNewBox2);
createNewBox2.style.paddingTop="80px";
createNewBox2.style.paddingBottom="80px";
createNewBox2.style.backgroundColor="white";
createNewBox2.style.fontSize="40px";
styleBox2();

//third box event which

let eventWich=document.getElementById("eventWich");
styleEventWich();

let paragraph3=document.getElementById("paragraph3");
paragraph3.textContent="event.which and event.keyCode are deprecated in modern browsers. Use .key or .code instead.";
styleParagraph3();

let createNewBox3=document.createElement("h1");
let box3=document.getElementById("boxi3");
createNewBox3.textContent=event.which;
box3.append(createNewBox3);
createNewBox3.style.paddingTop="80px";
createNewBox3.style.paddingBottom="80px";
createNewBox3.style.backgroundColor="white";
createNewBox3.style.fontSize="40px";
styleBox3();


//fourth box location

let eventLocation=document.getElementById("eventLocation");
styleEventLocation();

let paragraph4=document.getElementById("paragraph4");
paragraph4.textContent="Some keys exist more than once on your keyboard. This provides the location of the key pressed. Try it with both shifts.";
styleParagraph4();

let createNewBox4=document.createElement("h1");
let box4=document.getElementById("boxi4");
createNewBox4.textContent="General Keys";
box4.append(createNewBox4);
createNewBox4.style.paddingTop="80px";
createNewBox4.style.paddingBottom="80px";
createNewBox4.style.backgroundColor="white";
createNewBox4.style.fontSize="40px";
styleBox4();


//fifth box description
let eventDescription=document.getElementById("eventDescription");
styleEventDescription();

let paragraph5=document.getElementById("paragraph5");
paragraph5.textContent="This is the description we have created. Think it can be improved? PR us on GitHub";
styleParagraph5();

let createNewBox5=document.createElement("h1");
let box5=document.getElementById("boxi5");
createNewBox5.textContent=event.key;
box5.append(createNewBox5);
createNewBox5.style.paddingTop="80px";
createNewBox5.style.paddingBottom="80px";
createNewBox5.style.backgroundColor="white";
createNewBox5.style.fontSize="40px";
styleBox5();





  });

function styleEventKey(){
    let eventKey=document.getElementById("eventKey");
  
  eventKey.textContent="event.key";
  eventKey.style.backgroundColor="#204ecf";
  eventKey.style.marginTop="-106.5px";
  eventKey.style.padding="10px"
  eventKey.style.color="white";
  eventKey.style.fontSize="25px";
}


function styleEventCode(){
    let eventCode=document.getElementById("eventCode");
  
    eventCode.textContent="event.location";
    eventCode.style.backgroundColor="#204ecf";
    eventCode.style.marginTop="-106.5px";
    eventCode.style.padding="10px"
    eventCode.style.color="white";
    eventCode.style.fontSize="25px";
}

function styleEventWich(){
    let eventWich=document.getElementById("eventWich");
  
    eventWich.textContent="event.which";
    eventWich.style.backgroundColor="#204ecf";
    eventWich.style.marginTop="-106.5px";
    eventWich.style.padding="10px";
eventWich.style.color="white";
    eventWich.style.fontSize="25px";
}


function styleEventLocation(){
    let eventLocation=document.getElementById("eventLocation");
  
    eventLocation.textContent="event.which";
    eventLocation.style.backgroundColor="#204ecf";
    eventLocation.style.marginTop="-106.5px";
    eventLocation.style.padding="10px"
    eventLocation.style.color="white";
    eventLocation.style.fontSize="25px";
}

function styleEventDescription(){
    let eventDescription=document.getElementById("eventDescription");
  
    eventDescription.textContent="Description";
    eventDescription.style.backgroundColor="#204ecf";
    eventDescription.style.marginTop="-106.5px";
    eventDescription.style.padding="10px"
    eventDescription.style.color="white";
    eventDescription.style.fontSize="25px";
}


function styleBox1(){
    let box1=document.getElementById("box1");
    box1.style.width="13%";
    box1.style.paddingTop="100px";
    box1.style.textAlign="center";
    
    box1.style.position="relative";
    box1.style.margin="20px";
    box1.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";


}

function styleBox2(){
    let box2=document.getElementById("box2");
    box2.style.width="13%";
    box2.style.paddingTop="100px";
    box2.style.textAlign="center";
    
    box2.style.position="relative";
    box2.style.margin="20px";
    box2.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

}

function styleBox3(){
    let box3=document.getElementById("box3");
    box3.style.width="13%";
    box3.style.paddingTop="100px";
    box3.style.textAlign="center";
    
    box3.style.position="relative";
    box3.style.margin="20px";
    box3.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";


}

function styleBox4(){
    let box4=document.getElementById("box4");
    box4.style.width="13%";
    box4.style.paddingTop="100px";
    box4.style.textAlign="center";
    
    box4.style.position="relative";
    box4.style.margin="20px";
    box4.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

}

function styleBox5(){
    let box5=document.getElementById("box5");
    box5.style.width="13%";
    box5.style.paddingTop="100px";
    box5.style.textAlign="center";
    
    box5.style.position="relative";
    box5.style.margin="20px";
    box5.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";


}




function styleParagraph(){
    let paragraph=document.getElementById("paragraph");
    paragraph.style.backgroundColor="#ebeced";
    paragraph.style.paddingTop="40px";
    paragraph.style.paddingBottom="40px";
    paragraph.style.paddingRight="10px";
    paragraph.style.paddingLeft="10px";
   
}

function styleParagraph2(){
    let paragraph2=document.getElementById("paragraph2");
    paragraph2.style.backgroundColor="#ebeced";
    paragraph2.style.paddingTop="40px";
    paragraph2.style.paddingBottom="40px";
    paragraph2.style.paddingRight="10px";
    paragraph2.style.paddingLeft="10px";
   
}

function styleParagraph3(){
    let paragraph3=document.getElementById("paragraph3");
    paragraph3.style.backgroundColor="#ebeced";
    paragraph3.style.paddingTop="40px";
    paragraph3.style.paddingBottom="40px";
    paragraph3.style.paddingRight="10px";
    paragraph3.style.paddingLeft="10px";
   
}


function styleParagraph4(){
    let paragraph4=document.getElementById("paragraph4");
    paragraph4.style.backgroundColor="#ebeced";
    paragraph4.style.paddingTop="40px";
    paragraph4.style.paddingBottom="40px";
    paragraph4.style.paddingRight="10px";
    paragraph4.style.paddingLeft="10px";
   
}

function styleParagraph5(){
    let paragraph5=document.getElementById("paragraph5");
    paragraph5.style.backgroundColor="#ebeced";
    paragraph5.style.paddingTop="40px";
    paragraph5.style.paddingBottom="40px";
    paragraph5.style.paddingRight="10px";
    paragraph5.style.paddingLeft="10px";
   
}
