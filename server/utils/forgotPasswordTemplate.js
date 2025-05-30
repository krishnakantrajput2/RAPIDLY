const forgotPasswordTemplate = ({ name ,otp })=>{
   return `
   <div>
   <p>Dear, ${name}</p>
   <p>You're requested a password reset. Please use following OTP code to reset your password.</p>
   <div style="background:yellow;font-size:20px; text-align:center; font-weight:bold;">
      ${otp}
   </div>
   <p> This otp is valid for 1 hour only. Enter this otp in the blinket website to proceed with resetting your password.</p>
   <br/>
   </br>
   <p>Thanks</p>
   <p>Blinket</p>
   </div>
   `
}
export default forgotPasswordTemplate