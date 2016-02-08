    <!-- Bootstrap core JavaScript
      ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="/js/jquery.min.js"><\/script>')</script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/scroll.js"></script>
      <script src="https://cdn.firebase.com/js/client/1.0.21/firebase.js"></script>
      <script type="text/javascript" href="js/custom.js"></script>

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
          var text = $('#phoneInput').val();
          var email = $('#emailInput').val();
          var make = $('#makeInput').val();
          var year = $('#yearInput').val();
          
       ref.push({year: year, detail:detail, name: name, text: text, email: email, make: make, });
            $('#phoneInput').val('');
            $('#nameInput').val('');
            $('#emailInput').val('');
            $('#makeInput').val('');
            $('#yearInput').val('');

        }
console.log("i am here");

</script>


    </body>
  </html>