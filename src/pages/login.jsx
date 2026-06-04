import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";

function Login(){
    const log_data = "https://backend-sbs.nellalink.com/public/api/v1/nellalink/auth/user/login"
    const [eye,set_eye] = useState(false);

    const [email,set_email] = useState("");
    const [password,set_password] = useState("");

    const [loading,set_loading] = useState(false);

    const navigate = useNavigate()

    async function login(){
        set_loading(true);
        console.log(email)
        console.log(password)
        await fetch(log_data,{
            method:"post",
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((res)=>{
            set_loading(false);
            console.log("success",res.text());
            navigate("/nella");
        }).catch((err)=>{
            set_loading(false);
            console.log(`nope: ${err}`)
            navigate("/nella");
        });
    }

    return (
        <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"90%",height:"90%",overflow:"scroll",boxShadow:"0px 0px 6px rgb(200,200,200)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{fontWeight:"bold"}}>Welcome back</div>
                <div>Don't have an account? <Link to={"/signup"} style={{color:"orange"}}>Sign Up</Link></div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Email Address</div>
                    <input type="email" value={email} onChange={(e)=>{
                        set_email(e.target.value)
                    }} placeholder="Enter Email" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Password</div>
                    <div style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <input type={eye?"text":"password"} value={password} onChange={(e)=>{
                            set_password(e.target.value)
                        }} placeholder="Enter Password" style={{width:"90%",paddingTop:"10px",paddingBottom:"10px"}}/>
                        {eye==true?<FaEyeSlash size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>:<FaEye size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>}
                    </div>
                </div>
                <div style={{width:"90%",backgroundColor:"orange",borderRadius:"10px",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",cursor:"pointer"}} onClick={()=>{if(loading==false){login()}}}>{loading==false?"Login":"Loading.."}</div>
                <div style={{marginTop:"10px"}}>Forgot Password? <Link style={{color:"orange"}}>Recover</Link></div>
                <div style={{marginTop:"10px",marginBottom:"10px"}}>Or</div>
                <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-between"}}>
                    <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-evenly",borderRadius:"6px",backgroundColor:"rgb(230,230,230)"}}>
                        <FaGoogle/>
                        <div>Google</div>
                    </div>
                    <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-evenly",borderRadius:"6px",backgroundColor:"rgb(230,230,230)"}}>
                        <FaTwitter/>
                        <div>Twitter</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;