

$("#submit").click(function (e) { 
  console.log("Clicking");
 
  
  var name  = $("#name").val();
  var college = $("#college").val();
  var course = $("#course").val();                    
  var branch =$("#branch").val();                    
  var year = $("#year").val();                    
  var mobile = $("#mobile").val();                    
  var email = $("#email").val();                    
  var event = $("#event").val();   
  var gender = $("#gender").val();
  var x= $("#email").val();
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf("."); 
    
    

  

    if(name != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#name").css("border","1px solid #ccc ");
      $("#name-error").hide();
    }
   if(college != "" ){
        $("#submit").removeClass("btn-vibrate");
      $("#college").css("border","1px solid #ccc");
      $("#college-error").hide();
    }
    
     if(college =="/^[0-15]+$"){
        $("#submit").removeClass("btn-vibrate");
      $("#college").css("border","1px solid #ff8080");
     // $("#college-error").text("Please enter only numeric characters").css("color","#ff8080").show();
    }
    
   if(course != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#course").css("border","1px solid #ccc");
      $("#course-error").hide();
    }
    
    if(branch != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#branch").css("border","1px solid #ccc");
      $("#branch-error").hide();
    }
    
   if(year != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#year").css("border","1px solid #ccc");
      $("#year-error").hide();
    }
    
   if(mobile!= "" ||  mobile.length != 10  ){
        $("#submit").removeClass("btn-vibrate");
      $("#mobile").css("border","1px solid #ccc");
      $("#mobile-error").hide();
    }
    
    if(mobile.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
         $("#submit").removeClass("btn-vibrate");
        $("#mobile").css("border","1px solid #ccc");
      $("#mobile-error").hide();
    }
   if(email != "" || atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
        $("#submit").removeClass("btn-vibrate");
      $("#email").css("border","1px solid #ccc ");
      $("#email-error").hide();
    }
   if(event != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#event").css("border","1px solid #ccc");
      $("#event-error").hide();
   }

   if(gender != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#gender").css("border","1px solid #ccc");
      $("#gender-error").hide();
    }
   

    
    if(name == ""){
      $("#submit").addClass("btn-vibrate");
      $("#name").css("border","1px solid #ff8080");
      $("#name-error").text("Name is required").css("color","#ff8080").show();
         
    }
    else if(college == ""){
        $("#submit").addClass("btn-vibrate");
      $("#college").css("border","1px solid #ff8080");
      $("#college-error").text("Q-Id is required").css("color","#ff8080").show();
    }
    
    else if(college !="/^[0-15]+$"){
        $("#submit").addClass("btn-vibrate");
      $("#college").css("border","1px solid #ff8080");
      $("#college-error").text("Please enter only numeric characters").css("color","#ff8080").show();
    }
   
    else if(course == ""){
        $("#submit").addClass("btn-vibrate");
      $("#course").css("border","1px solid #ff8080");
      $("#course-error").text("Required").css("color","#ff8080").show();
    }
    
    else if(branch == ""){
        $("#submit").addClass("btn-vibrate");
      $("#branch").css("border","1px solid #ff8080");
      $("#branch-error").text("Required").css("color","#ff8080").show();
    }
    
    else if(year == ""){
        $("#submit").addClass("btn-vibrate");
      $("#year").css("border","1px solid #ff8080");
      $("#year-error").text("Required").css("color","#ff8080").show();
    }
   
    else if(mobile==""){
        $("#submit").addClass("btn-vibrate");
      $("#mobile").css("border","1px solid #ff8080");
      $("#mobile-error").text("Mobile no. is required").css("color","#ff8080").show();
    }
    
    else if(mobile.length<10||mobile.length>10 ){
        $("#submit").addClass("btn-vibrate");
      $("#mobile").css("border","1px solid #ff8080");
      $("#mobile-error").text("Enter valid mobile no.").css("color","#ff8080").show();      
    }
     else if(!mobile.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
         $("#submit").addClass("btn-vibrate");
      $("#mobile").css("border","1px solid #ff8080");
      $("#mobile-error").text("Enter valid mobile no.").css("color","#ff8080").show();      
    }
    
    else if(email == ""){
        $("#submit").addClass("btn-vibrate");
      $("#email").css("border","1px solid #ff8080");
      $("#email-error").text("Email id is required").css("color","#ff8080").show();
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
        $("#submit").addClass("btn-vibrate");
         $("#email").css("border","1px solid #ff8080");
      $("#email-error").text("Enter valid email id").css("color","#ff8080").show();
    }
    else if(event == ""){
        $("#submit").addClass("btn-vibrate");
     $("#event").css("border","1px solid #ff8080");
     $("#event-error").text("Please choose event type").css("color","#ff8080").show();
    }
   
    else if(gender == ""){
        $("#submit").addClass("btn-vibrate");
      $("#gender").css("border","1px solid #ff8080");
      $("#gender-error").text("Please choose gender").css("color","#ff8080").show();
    }
   
   
    else{
     console.log("coming here")
     $(".spinner-border").show();
     $("#submit").attr("disabled", true);
     signInUser(name,college,course,branch,year,mobile,email,event,gender);
    }
  
   });
console.log("not error")

function signInUser(name,college,course,branch,year,mobile,email,event,gender)
{
  firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log("errorCode",errorCode)
  var errorMessage = error.message;
  console.log("errorMessage",errorMessage);
  // ...
});
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in
        console.log("user is signed in")
          var isAnonymous = user.isAnonymous;
          var uid = user.uid
        serviceMethod(name,college,course,branch,year,mobile,email,event,gender)

        // ...
      } else {
      // window.alert("You are not allowed to perform this action.");
      } 
    });
}


//var type = findGetParameter("type")
//service_spinner.value = type

// function to create user 
function serviceMethod(name,college,course,branch,year,mobile,email,event,gender) {
    var URef = firebase.database().ref().child("Ojas_intra_registration_details").push();
    URef.set({
      Name: name,
      Q_Id:college,
      Course_Name :course,
      Branch_Name: branch,
      Year: year,
      Mobile_Number: mobile,
      Email: email,
      Event:event,
      Gender:gender,

    }).then(function () {
        
 swal("Great!", "Successfully submitted", "success");
        
      
 document.getElementById("name").value="";
 document.getElementById("college").value="";
 document.getElementById("course").value="";
 document.getElementById("branch").value="";
 document.getElementById("year").value="";
 document.getElementById("mobile").value="";
 document.getElementById("email").value="";
 document.getElementById("event").value="";
 document.getElementById("gender").value="";
 

    $("#submit").attr("disabled", false);
    $(".spinner-border").hide();
  }).catch(function (error) {
    var errorMessage = error.message;
    // alert(errorMessage);
    $("#submit").attr("disabled", false);
    $(".spinner-border").hide();
  });
    
    
}









   

