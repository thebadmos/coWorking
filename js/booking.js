var firebaseConfig = {
  apiKey: "AIzaSyDRCzA4EQ8dKbaEAN5_gjIY94_cK1OHXLY",
  authDomain: "truspacebook.firebaseapp.com",
  databaseURL: "https://truspacebook-default-rtdb.firebaseio.com",
  projectId: "truspacebook",
  storageBucket: "truspacebook.appspot.com",
  messagingSenderId: "298726512546",
  appId: "1:298726512546:web:79254852f2994981b0c4fb",
  measurementId: "G-X6V09E8VNC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 


//Reference messages collection
var messagesRef = firebase.database().ref('messages');
 

//listen for form submit
document.getElementById('bookingForm'),addEventListener('submit',submitForm);
//submit form
function submitForm(e){
    e.preventDefault();
  
    //Get values
     var name = getInputVal('name');
     var role = getInputVal('role');
     var phoneN = getInputVal('phoneN');
     var emailA = getInputVal('emailA');
     var comp = getInputVal('comp');
     var typeSpaces = getInputVal('typeSpaces');
     var comments = getInputVal('comments');
     var numPeople = getInputVal('numPeople');
     var website = getInputVal('website');
     var checkDate = getInputVal('checkin-date');
     var sector = getInputVal('sector');
   
    
      
     //save message
     saveMessage(name,role,phoneN,emailA,comp,typeSpaces,comments,numPeople,website,checkDate,sector);

     //show alert
      document.querySelector('.alert').style.display = 'block';
      
      //Hide alert after 6 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },6000);

       //clear form
      document.getElementById('bookingForm').reset();
    }

  

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

 //save message to firebase
 function saveMessage(name,role,phoneN,emailA,comp,typeSpace,comments,numPeople,website,checkDate,sector){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         role: role,
         phoneN: phoneN,
         emailA: emailA,
         comp: comp,
         typeSpaces: typeSpaces,
         comments: comments,
         numPeople: numPeople,
         website: website,
         checkDate: checkDate,
         sector: sector
});
 }

