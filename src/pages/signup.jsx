import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";

function Signup(){
    const log_data = "https://backend-test.nellalink.com/public/api/v1/nellalink/user/register"
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94"
    const [eye,set_eye] = useState(false);
    const [c_eye,set_c_eye] = useState(false);

    const [name,set_name] = useState("");
    const [username,set_username] = useState("");
    const [email,set_email] = useState("");
    const [password,set_password] = useState("");
    const [confirm_password,set_confirm_password] = useState("");

    const [loading,set_loading] = useState(false);
    const navigate = useNavigate();

    const [register_error,set_register_error] = useState(false);
    const [register_top,set_register_top] = useState(-10);

  
    async function verify_email(){
        set_loading(true);
        
         await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/verify-email-address",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email_address: email
            })
         }).then((res)=>res.json()).then(async(data)=>{
            set_loading(false);
            if(data.status==true){
                console.log("Email verified successfully",data);
                await register()
            }else{
                console.log("Could not verify email",data.message)
            }
        }).catch((err)=>{
            console.log(`nope: ${err}`);
            set_loading(false);
        });
    }

      async function register(){
        set_loading(true);
        
         await fetch(log_data,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username:username,
                name:name,
                referred_by:"string",
                extra_data: ["string"],
                password_confirmation: confirm_password,
                meta_data: [
                    {
                        meta_key: "string",
                        meta_value:"string",
                        extra_data:["string"]
                    }
                ]
            })
         }).then((res)=>res.json()).then((data)=>{
            set_loading(false);
            if(data.status==true){
                console.log("Successfully registered: ",data);
                navigate("/login");
            }else{
                console.log("Could not register: ",data)
                set_register_error(true);
                set_register_top(0);
                setTimeout(()=>{
                    set_register_error(false);
                    set_register_top(-10);
                },2000);
                
            }
        }).catch((err)=>{
            console.log(`nope: ${err}`);
            set_loading(false);
            set_register_error(true);
            set_register_top(0);
            setTimeout(()=>{
                set_register_error(false);
                set_register_top(-10);
            },2000);
        });
    }

    return (
        <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"90%",height:"90%",overflow:"scroll",boxShadow:"0px 0px 6px rgb(200,200,200)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                <div style={{fontWeight:"bold",fontSize:"20px",color:"black",fontWeight:"bolder",marginTop:"20px"}}>REGISTER</div>
                <div>Already have an account? <Link to={"/login"} style={{color:"orange"}}>Login</Link></div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>User Name</div>
                    <input type="text" required value={username} onChange={(e)=>{
                        set_username(e.target.value)
                    }} placeholder="Enter User Name" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Name</div>
                    <input type="text" required value={name} onChange={(e)=>{
                        set_name(e.target.value)
                    }} placeholder="Enter Name" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Email Address</div>
                    <input type="email" required value={email} onChange={(e)=>{
                        set_email(e.target.value)
                    }} placeholder="email@example.com" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Password</div>
                    <div style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <input type={eye?"text":"password"} required value={password} onChange={(e)=>{
                            set_password(e.target.value)
                        }} placeholder="*****" style={{width:"90%",paddingTop:"10px",paddingBottom:"10px"}}/>
                        {eye==true?<FaEyeSlash size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>:<FaEye size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>}
                    </div>
                </div>
                <div style={{width:"90%",marginBottom:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Confirm Password</div>
                    <div style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <input type={c_eye?"text":"password"} required value={confirm_password} onChange={(e)=>{
                            set_confirm_password(e.target.value)
                        }} placeholder="*****" style={{width:"90%",paddingTop:"10px",paddingBottom:"10px"}}/>
                        {c_eye==true?<FaEyeSlash size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_c_eye(!c_eye);
                        }}/>:<FaEye size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_c_eye(!c_eye);
                        }}/>}
                    </div>
                </div>
                <div style={{width:"90%",backgroundColor:"orange",borderRadius:"10px",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",cursor:"pointer"}} onClick={async()=>{if(loading==false){await register()}}}>{loading==false?"Create Account":"loading.."}</div>
                
            </div>
            <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${register_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    FAILED TO CREATE ACCOUNT
            </div>
        </div>
    );
}

export default Signup;