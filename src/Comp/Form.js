import React from 'react'

export default function Form() {
  return (
    <>
     
      
     <div className='cont3'>
     <div className='box3 left' ><img src='./img/booking.png'/><p></p> 
     <h3>Tour & Travel</h3>
     <div className='fifty'>
     <center><h5 className='big1'>50</h5></center>
     <h5 className='small1'>%<br></br>off</h5>
     <h5 className='lastone'>On Selected Tours</h5>
     </div>
     </div>
     <div className='box3 right' >
     <div className='smallbox'>
     <div className='smallestbox'><h4>Ticket Booking Form</h4></div>

   <div className='frm'>
   <form action="/action_page.php">
  <label htmlFor="fname">Full Name</label><br />
  <input type="text" id="fname" name="fname" /><br /><br />
  <label htmlFor="lname">Email</label><br />
  <input type="text" id="lname" name="lname" /><br /><br />

  <label htmlFor="lname">Phone Number</label><br />
  <input type="text" id="lname" name="lname" /><br /><br />

  <label htmlFor="lname">Booking Date & Time</label><br />
  <input type="Date" id="lname" name="lname" /><br /><br />

  <label htmlFor="lname">Choose tiket Type</label><br />
  <div className='choode1'>
<input className='radiobtn' type="radio" id="standard"  defaultValue="HTML" />
 <label  htmlFor="html">Standard</label>
   <input className='radiobtn' type="radio" id="vip"  defaultValue="CSS" />
   <label  htmlFor="css">VIP</label>
  
</div><br />

  

  <label htmlFor="lname">Number Of Tiker</label><br />
  <input className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number" aria-invalid="false" defaultValue type="number" name="number-162" />
  <br /><br />

  <label htmlFor="lname">Additional Message</label><br />
  <textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea messag" aria-invalid="false" name="your-message"></textarea>
  <br /><br />
  <input className='submit' type="submit" defaultValue="Submit" />
</form>

   
   </div>
 

     
     </div>
     </div>
     </div>
    
      </>
  )
}
