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
     var occupation = getInputVal('occupation');
     var phone = getInputVal('phone');
     var email = getInputVal('email');
     var company = getInputVal('company');
     var typeSpace = getInputVal('typeSpace');
     var comments = getInputVal('comments');
     var spaceInterest = getInputVal('spaceInterest');
     var website = getInputVal('website');
     var checkDate = getInputVal('checkin-date');
     var team = getInputVal('team');
      
     //save message
     saveMessage(Fname,occupation,phone,email,company,typeSpace,comments,spaceInterest,website,checkDate,team);

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
 function saveMessage(Fname,occupation,phone,email,company,typeSpace,comments,spaceInterest,website,checkDate,team){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         Fname: Fname,
         occupation: occupation,
         phone: phone,
         email: email,
         company: company,
         typeSpace: typeSpace,
         comments: comments,
         spaceInterest: spaceInterest,
         website: website,
         checkDate: checkDate,
         team:team
});
 }

