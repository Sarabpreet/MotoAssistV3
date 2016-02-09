
var ref = new Firebase('https://moto-assist-db.firebaseio.com/MotoAssist');
      
      ref.on('child_added', function(snapshot) {
          var message = snapshot.val();         
          displayData(message.model, message.email, message.detail, message.name, message.text, message.make, message.varient);
        });

  function displayData(email, detail, name, text, make, varient, model) {
        //for current date and time     
     var x = new Date()
     var x1=x.getMonth() + "/" + x.getDate() + "/" + x.getYear(); 
     x1 = x1 + " - " + x.getHours( )+ ":" + x.getMinutes() + ":" + x.getSeconds();
     
     var str = "<tr><td>" + detail + "</td><td>" + name + "</td><td>"  + text + "</td><td>" + x1 + "</td><td>" + email + "</td><td>" + make + "</td><td>" + model + " </td><td>" + varient + " </td></tr>" ;
     $(str).appendTo("#tRow");
 
  };





console.log("i am there...");