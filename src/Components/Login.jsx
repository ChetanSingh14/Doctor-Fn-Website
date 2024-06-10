import axios from 'axios';
import React,{useState} from 'react';


export default function Login() {
    const [userLogin, setUserLogin] = useState({email:"", password:""});

    const handleChange = (e) => {
        setUserLogin({...userLogin, [e.target.name]:e.target.value })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
        const res = await axios.post('http://localhost:8000/',userLogin,{
            header:{
                'Content-Type': 'application/json'
            }});
            console.log(res.data);
            if(res.data.status === "OK"){
              alert("Success") 
            }else{
                alert("Error");
            }
        }
        catch(err){
            console.log(err);
        }
    }


  return (
    <div className='border-2 w-1/2 m-12 text-black'>
        <form onSubmit={handleSubmit} className='m-6'>
        
        <input className='border-2 ' placeholder='email' type="text" name="email" value={userLogin.email} onChange={handleChange}/><br /><br/>  
         <input className='border-2 ' placeholder='pass' type="text" name="password" value={userLogin.password}  onChange={handleChange}/><br /><br/>
         
         <button className='border-2 ' type='submit'>Login</button>
        </form>
    </div>
  )
}
