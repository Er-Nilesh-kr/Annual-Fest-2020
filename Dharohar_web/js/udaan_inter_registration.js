

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
  var minm =10000;
  var maxm=99999;
  var rand= Math.floor(Math.random()*(maxm-minm+1)+minm);  
   var acc=$("#acc").val();    

  

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
   /*if(address != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#address").css("border","1px solid #ccc");
      $("#address-error").hide();
    }*/
   if(gender != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#gender").css("border","1px solid #ccc");
      $("#gender-error").hide();
    }
   if(acc != ""){
        $("#submit").removeClass("btn-vibrate");
      $("#acc").css("border","1px solid #ccc");
      $("#acc-error").hide();
    }

    
    if(name == ""){
      $("#submit").addClass("btn-vibrate");
      $("#name").css("border","1px solid #ff8080");
      $("#name-error").text("Name is required").css("color","#ff8080").show();
         
    }
    else if(college == ""){
        $("#submit").addClass("btn-vibrate");
      $("#college").css("border","1px solid #ff8080");
      $("#college-error").text("University name is required").css("color","#ff8080").show();
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
    else if(acc == ""){
        $("#submit").addClass("btn-vibrate");
      $("#acc").css("border","1px solid #ff8080");
      $("#acc-error").text("Please choose Yes / No").css("color","#ff8080").show();
    }
    /*else if(address == ""){
        $("#submit").addClass("btn-vibrate");
      $("#address").css("border","1px solid #ff8080");
      $("#address-error").text("Address is required").css("color","#ff8080").show();
    }*/
    else if(gender == ""){
        $("#submit").addClass("btn-vibrate");
      $("#gender").css("border","1px solid #ff8080");
      $("#gender-error").text("Please choose gender").css("color","#ff8080").show();
    }
   
   
    else{
     console.log("coming here")
     $(".spinner-border").show();
     $("#submit").attr("disabled", true);
     signInUser(name,college,course,branch,year,mobile,email,event,gender,rand,acc);
    }
  
   });
console.log("not error")

function signInUser(name,college,course,branch,year,mobile,email,event,gender,rand,acc)
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
        serviceMethod(name,college,course,branch,year,mobile,email,event,gender,rand,acc)

        // ...
      } else {
      // window.alert("You are not allowed to perform this action.");
      } 
    });
}


//var type = findGetParameter("type")
//service_spinner.value = type

// function to create user 
function serviceMethod(name,college,course,branch,year,mobile,email,event,gender,rand,acc) {
    var URef = firebase.database().ref().child("Udaan_inter_registration_details").push();
    URef.set({
      REGISTER_Id:rand,
      Name: name,
      University_Name:college,
      Course_Name :course,
      Branch_Name: branch,
      Year: year,
      Mobile_Number: mobile,
      Email: email,
      Event:event,
     /* Address:address,*/
      Gender:gender,
      Accomodation:acc

    }).then(function () {
        
 swal("Great!", "Successfully submitted", "success");
        
          sendMail('rohan10.rohan10@gmail.com','New Registration','<h4>Hii Admin,</h4><h4>We have got a new entry from '+name+'. The details are as following:-<br></h4><table><tr><td>Registration Id</td><td>:</td><td>'+rand+'</td> </tr><tr><td>Name</td><td>:</td><td>'+name+'</td> </tr><tr><td>University Name</td><td>:</td><td>'+college+'</td> </tr><tr><td>Course Name</td><td>:</td><td>'+course+'</td> </tr><tr><td>Branch Name</td><td>:</td><td>'+branch+'</td></tr> <tr><td>Year</td><td>:</td><td>'+year+'</td></tr><tr><td>Mobile Number</td><td>:</td><td>'+mobile+'</td></tr><tr><td>Email</td><td>:</td><td>'+email+'</td></tr><tr><td>Event</td><td>:</td><td>'+event+'</td></tr><tr><td>Gender</td><td>:</td><td>'+gender+'</td></tr><tr><td>Accomodation</td><td>:</td><td>'+acc+'</td></tr></table>');
        
        
         sendMail(email,'REGISTERed Successfully','<h4>Hii '+name+',</h4><h4>Thanks for registering in '+event+'. The details are as following:-<br></h4><table><tr><td>Registration Id</td><td>:</td><td>'+rand+'</td> </tr><tr><td>Name</td><td>:</td><td>'+name+'</td> </tr><tr><td>University Name</td><td>:</td><td>'+college+'</td> </tr><tr><td>Course Name</td><td>:</td><td>'+course+'</td> </tr><tr><td>Branch Name</td><td>:</td><td>'+branch+'</td></tr> <tr><td>Year</td><td>:</td><td>'+year+'</td></tr><tr><td>Mobile Number</td><td>:</td><td>'+mobile+'</td></tr><tr><td>Email</td><td>:</td><td>'+email+'</td></tr><tr><td>Event</td><td>:</td><td>'+event+'</td></tr><tr><td>Gender</td><td>:</td><td>'+gender+'</td></tr><tr><td>Accomodation</td><td>:</td><td>'+acc+'</td></tr></table>');
        
      
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


function sendMail(to,subject,body) {
            var xhr = new XMLHttpRequest();

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                }
            });
            xhr.open("GET",  "https://us-central1-appclubevent.cloudfunctions.net/sendMail?to="+to+"&subject="+subject+"&body="+body,true);
            xhr.send();

        }








   

