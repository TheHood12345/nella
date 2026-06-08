import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";

function Signup(){
    const log_data = "https://backend-test.nellalink.com/public/api/v1/nellalink/user/register"
    const [eye,set_eye] = useState(false);
    const [c_eye,set_c_eye] = useState(false);

    const [first_name,set_first_name] = useState("");
    const [last_name,set_last_name] = useState("");
    const [email,set_email] = useState("");
    const [password,set_password] = useState("");
    const [confirm_password,set_confirm_password] = useState("");

    const [loading,set_loading] = useState(false);
    const navigate = useNavigate();

    async function login(){
        set_loading(true);
        console.log(first_name)
        console.log(last_name)
        console.log(email)
        console.log(password)
        console.log(confirm_password)
        
         await fetch(log_data,{
            method:"post",
            headers:{
                "x-api-key": 123
            },
            body: JSON.stringify({
                first_name:first_name,
                last_name:last_name,
                email: email,
                password: password
            })
         }).then((res)=>res.json()).then((data)=>{
            set_loading(false);
            if(data.status==true){
                console.log("Successfully registered ",data);
                navigate("/login");
            }else{
                console.log("Could not register",data)
            }
        }).catch((err)=>{
            console.log(`nope: ${err}`);
            set_loading(false);
        });
    }

    async function verify_email(){
        set_loading(true);
        
         await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/verify-email-address",{
            method:"post",
            headers:{
                "x-api-key": 123
            },
            body: JSON.stringify({
                email: email
            })
         }).then((res)=>res.json()).then(async(data)=>{
            set_loading(false);
            if(data.status==true){
                console.log("Email verified successfully",data);
                await login()
            }else{
                console.log("Could not verify email",data.message)
            }
        }).catch((err)=>{
            console.log(`nope: ${err}`);
            set_loading(false);
        });
    }
    return (
        <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"90%",height:"90%",overflow:"scroll",boxShadow:"0px 0px 6px rgb(200,200,200)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                <div style={{fontWeight:"bold",fontSize:"20px",color:"black",fontWeight:"bolder",marginTop:"20px"}}>REGISTER</div>
                <div>Already have an account? <Link to={"/login"} style={{color:"orange"}}>Login</Link></div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>First Name</div>
                    <input type="text" required value={first_name} onChange={(e)=>{
                        set_first_name(e.target.value)
                    }} placeholder="Enter First Name" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Last Name</div>
                    <input type="text" required value={last_name} onChange={(e)=>{
                        set_last_name(e.target.value)
                    }} placeholder="Enter Last Name" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Email Address</div>
                    <input type="email" required value={email} onChange={(e)=>{
                        set_email(e.target.value)
                    }} placeholder="Enter Email" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Password</div>
                    <div style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <input type={eye?"text":"password"} required value={password} onChange={(e)=>{
                            set_password(e.target.value)
                        }} placeholder="Enter Password" style={{width:"90%",paddingTop:"10px",paddingBottom:"10px"}}/>
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
                        }} placeholder="Confirm Password" style={{width:"90%",paddingTop:"10px",paddingBottom:"10px"}}/>
                        {c_eye==true?<FaEyeSlash size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_c_eye(!c_eye);
                        }}/>:<FaEye size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_c_eye(!c_eye);
                        }}/>}
                    </div>
                </div>
                <div style={{width:"90%",backgroundColor:"orange",borderRadius:"10px",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",cursor:"pointer"}} onClick={()=>{if(loading==false){verify_email()}}}>{loading==false?"Create Account":"loading.."}</div>
                
            </div>
        </div>
    );
}

export default Signup;