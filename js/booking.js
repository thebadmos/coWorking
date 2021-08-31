var firebaseConfig = {
    apiKey: "AIzaSyAAIB69ByGu_gs1NRnO4mNokCIHsQZtljo",
    authDomain: "truspace-5d0b6.firebaseapp.com",
    databaseURL: "https://truspace-5d0b6-default-rtdb.firebaseio.com",
    projectId: "truspace-5d0b6",
    storageBucket: "truspace-5d0b6.appspot.com",
    messagingSenderId: "367886965073",
    appId: "1:367886965073:web:d43f2a2b24d33a7a1a5b70",
    measurementId: "G-5RTLY4S64R"
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
     var Fname = getInputVal('Fname');
     var role = getInputVal('role');
     var phone = getInputVal('phone');
     var email = getInputVal('email');
     var company = getInputVal('company');
     var typeSpace = getInputVal('typeSpace');
     var comments = getInputVal('comments');
     var numPeople = getInputVal('numPeople');
     var website = getInputVal('website');
     var checkDate = getInputVal('checkin-date');
     var sector = getInputVal('sector');
    
      
     //save message
     saveMessage(Fname,role,phone,email,company,typeSpace,comments,numPeople,website,checkDate,sector);

     //show alert
      document.querySelector('.alert').style.display = 'block';
      
      //Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);

       //clear form
      document.getElementById('bookingForm').reset();
    }

  

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

 //save message to firebase
 function saveMessage(Fname,role,phone,email,company,typeSpace,comments,numPeople,website,checkDate,sector){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         Fname: Fname,
         role: role,
         phone: phone,
         email: email,
         company: company,
         typeSpace: typeSpace,
         comments: comments,
         numPeople: numPeople,
         website: website,
         checkDate: checkDate,
         sector: sector
});
 }

