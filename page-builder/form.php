  

       
           <form >
                <div class="col-lg-4 form">
                  <h2>Request Service</h2>
                    <input id='detail' class="hiddenField" type="hidden" value="<?php echo "$title";?>" placeholder='Car Detailing'>
                    <input id='nameInput' type="text"  placeholder='Name *'>
                    <input id='phoneInput' type="text"  placeholder='Phone Number *'>
                    <input id='emailInput' type="text" placeholder='Email'>
                    <input id='makeInput' type="text" placeholder='Eg (Honda, Maruti, etc)'>
                    <input id='modelInput' type="text" placeholder='Eg (City, Scorpio, etc)'>
                    <input id='yearInput' type="text" placeholder='Year'>
                    
                     <p class="small-white">* Compulsory Fields</p>
                    <input id="btnInput" type="Submit" onclick="sendData()" value="Request">
                   
                  </div>
              </form>










