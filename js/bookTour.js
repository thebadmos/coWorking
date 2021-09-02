var firebaseConfig = {
    apiKey: "AIzaSyCqI010hDAUSRj9Ma4S82nY0Ux_50YKkyI",
  authDomain: "truspacetour.firebaseapp.com",
  projectId: "truspacetour",
  storageBucket: "truspacetour.appspot.com",
  messagingSenderId: "442078956056",
  appId: "1:442078956056:web:560e84ebcb77ecb1be916d",
  measurementId: "G-SN3W1LQ78M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 //Reference messages collection
var messagesRef = firebase.database().ref('messages');
 

//listen for form submit
document.getElementById('tourForm'),addEventListener('submit',submitForm);
//submit form
function submitForm(e){
    e.preventDefault();
  
    //Get values
     var Fname = getInputVal('Fname');
     var Lname = getInputVal('Lname');
     var phone = getInputVal('phone');
     var email = getInputVal('email');
     var company = getInputVal('company');
     var spaceInterest = getInputVal('spaceInterest');
     var typeSpace = getInputVal('typeSpace');
     var date = getInputVal('date');
      
     //save message
     saveMessage(Fname,Lname,phone,email,company,spaceInterest,typeSpace,date);

     //show alert
      document.querySelector('.alert').style.display = 'block';
      
      //Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);

       //clear form
      document.getElementById('tourForm').reset();
    }
    // Function to get form values
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
     //save message to firebase
     function saveMessage(Fname,Lname,phone,email,company,spaceInterest,typeSpace,date){
         var newMessageRef = messagesRef.push();
         newMessageRef.set({
             Fname: Fname,
             Lname: Lname,
             phone: phone,
             email: email,
             company: company,
             spaceInterest: spaceInterest,
             typeSpace:typeSpace,
             date: date
    });
     }
    
        