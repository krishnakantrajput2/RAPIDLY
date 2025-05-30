import  'react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import SummaryApi from '../common/SummaryApi'

const ResetPassword = () => {
  const Location =useLocation()
  const navigate =useNavigate()
const [data,setData]=useState({
  email:"",
  newPassword:"",
  confirmPassword:""
})
const [showPassword,setShowpassword]=useState(false)
const [showConfirmPassword,setShowConfirmPassword]=useState(false)
const valideValue=Object.values(data).every(el=>el)
  useEffect(()=>{
   if(!(Location?.state?.data?.success)){
      navigate("/")
   }

   if(Location?.state?.email){
    setData((preve)=>{
       return{
        ...preve,
        email:Location?.state?.email
       }
    })
   }
  },[])

  const handleChange = (e)=>{
    const{name,value}=e.target
      setData((preve)=>{
       return{
         ...preve,
         [name] : value
      }
     })
 }
  console.log("data reset password",data)

  const handleSubmit=async(e)=>{
    e.preventDefault()

    //optional
    if(data.newPassword!==data.confirmPassword){
      toast.error("New Password and confirm password must be same. ")
    }
     try {
      const response = await Axios({
        ...SummaryApi.resetPassword,//change
        data:data
       
      })
    
      if(response.data.error){
        toast.error(response.data.message)
      }
      if(response.data.success){
        toast.success(response.data.message)
        navigate("/login")
        setData({
          email:"",
          newPassword:"",
          confirmPassword:""
        })
        
      }
     } catch (error) {
      AxiosToastError(error)
     }
     
      }
  return (
     <section className=' w-full container mx-auto px-2'>
         <div className='bg-white my-4  w-full max-w-lg mx-auto rounded p-7'>
         <p className='font-semibold text-lg '>Enter Your  Password</p>
   
         <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
   
           <div className='grid gap-1'>
             <label htmlFor='newPassword'>New Password :</label>
                      <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
                      <input type={showPassword ? "text" : "password"}
                      id="password"
                      autoFocus
                      className='w-full outline-none'
                      name='newPassword'
                      value={data.newPassword}
                      onChange={handleChange}
                      placeholder='Enter your new password'
                      />
                      <div onClick={()=>setShowpassword(preve => !preve)} className='cursor-pointer'>
                        {
                          showPassword ? (
                           <FaRegEye/>
                          ):(
                            <FaRegEyeSlash/>
                          )
                        }
                      </div>
                    </div>
           </div>
            
           <div className='grid gap-1'>
             <label htmlFor='confirmPassword'>Confirm Password :</label>
                      <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
                      <input type={showConfirmPassword ? "text" : "password"}
                      id="password"
                      autoFocus
                      className='w-full outline-none'
                      name='confirmPassword'
                      value={data.confirmPassword}
                      onChange={handleChange}
                      placeholder='Enter your confirm password'
                      />
                      <div onClick={()=>setShowConfirmPassword(preve => !preve)} className='cursor-pointer'>
                        {
                          showConfirmPassword ? (
                           <FaRegEye/>
                          ):(
                            <FaRegEyeSlash/>
                          )
                        }
                      </div>
                    </div>
           </div>
   
           <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"} text-white py-2 rounded font-semibold my-3 tracking-wide`}>Change Password</button>
         </form>
         <p>Already have account ?
         <Link to={"/login"}
         className='font-semibold text-green-800 hover:text-green-700'>Login</Link>
            </p>
         </div>
     
       </section>
  )
}

export default ResetPassword