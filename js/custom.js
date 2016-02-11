
var ref = new Firebase('https://moto-assist-db.firebaseio.com/MotoAssist');
      
      ref.on('child_added', function(snapshot) {
          var message = snapshot.val();         
          displayData( message.detail, message.name, message.phone,message.email, message.make, message.model, message.year);
        });

  function displayData(email, detail, name, phone, make, model, year) {
        //for current date and time     
     var x = new Date()
     var x1=x.getMonth() + "/" + x.getDate() + "/" + x.getYear(); 
     x1 = x1 + " - " + x.getHours( )+ ":" + x.getMinutes() + ":" + x.getSeconds();
     
     var str = "<tr><td>" + detail + "</td><td>" + name + "</td><td>"  + phone + "</td><td>" + x1 + "</td><td>" + email + "</td><td>" + make + "</td><td>" + model + " </td><td>" + year + "</td></tr>";
     $(str).appendTo("#tRow");
 
  };


