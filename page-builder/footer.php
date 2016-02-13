<div class="credits">
        © Incredible Technologies Pvt. Ltd. 2015
    </div>





    <!-- Bootstrap core JavaScript
      ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="/js/jquery.min.js"><\/script>')</script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/scroll.js"></script>
      <script src="https://cdn.firebase.com/js/client/1.0.21/firebase.js"></script>
      <script type="text/javascript" href="js/custom.js"></script>
<style>
  p.small-white{


    color:white;
    font-size: 10px;
    margin-left: 20px;
    margin-top: 5px;
  }


</style>
      <script type="text/javascript">




      smoothScroll.init();
      $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip();   
      });


      $(document).ready(function(){ 
          $("#myTab a").click(function(e){
            e.preventDefault();
            $(this).tab('show');
          });
      });

      </script>
      <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
      <!-- live reload script and less compiler.. -->
      <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
<script>
  

        var ref = new Firebase('https://moto-assist-db.firebaseio.com/MotoAssist');

        function sendData() {

          var detail = $('#detail').val();
          var name = $('#nameInput').val();
          var phone = $('#phoneInput').val();
          var email = $('#emailInput').val();
          var make = $('#makeInput').val();
          var model = $('#modelInput').val();
          var year = $('#yearInput').val();
          // var varient = $('#varientInput').val();
          
     if(name!="" && phone!="") {
        ref.push({detail: detail, name: name,   phone: phone, email: email, make: make,model: model, year: year });
        alert("Sucessfully Sent the data, our representatives will call you within 48 hours!");
        }

    else {

alert("Name and Number fields are required.");

    }
            $('#phoneInput').val('');
            $('#nameInput').val('');
            $('#emailInput').val('');
            $('#makeInput').val('');
            $('#modelInput').val('');
            $('#yearInput').val('');
            // $('#varientInput').val('');


        }

</script>


    </body>
  </html>