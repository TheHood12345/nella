import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { data, Link, useNavigate } from "react-router-dom";

function Login(){
    const log_data = "https://backend-test.nellalink.com/public/api/v1/nellalink/user/login"
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94"
    const [eye,set_eye] = useState(false);
    const [c_p,set_c_p]=useState(false);

    const [email,set_email] = useState("");
    const [password,set_password] = useState("");
    const [token,set_token] = useState("");

    const [old_password,set_old_password] = useState("");
    const [new_password,set_new_password] = useState("");
    const [confirm_new_password,set_confirm_new_password] = useState("");

    const [loading,set_loading] = useState(false);

    const navigate = useNavigate()

    async function login(){
        set_loading(true);
        console.log(email)
        console.log(password)
        await fetch(log_data,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email: email.toString(),
                password: password.toString()
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                navigate("/nella")
                console.log("login successful: ",data)
            }else{
                set_loading(false);
                console.log("Could not login: ",data);
            }
        }).catch((err)=>{
            set_loading(false);
            console.log(`Could not perform fetch: ${err}`)
            // navigate("/nella");
        });
    }
        async function forgot_password(){
        set_loading(true);
        await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/change-password",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email_address: email
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                //navigate("/nella")
                console.log("Token sent to email address",data)
            }else{
                set_loading(false);
                console.log("Could not send token to email addres, due to:  ",data.message);
            }
        }).catch((err)=>{
            set_loading(false);
            console.log(`Could not perform fetch: ${err}`)
            // navigate("/nella");
        });
    }

    async function change_password(){
        set_loading(true);
        await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/change-password/validate",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email_address: email,
                token_to_change_password: email,
                old_password: old_password,
                new_password: new_password,
                new_password_confirmation: confirm_new_password
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true || data.status=="true" || data.status_code==200 || data.message=="Login successful."){
                navigate("/nella")
                console.log("login successful",data)
            }else{
                set_loading(false);
                console.log("Could not login",data.message);
            }
        }).catch((err)=>{
            set_loading(false);
            console.log(`Could not perform fetch: ${err}`)
            // navigate("/nella");
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
                <div style={{marginTop:"10px"}}>Forgot Password? <Link style={{color:"orange"}} onClick={async()=>{await forgot_password()}}>Recover</Link></div>
                <div style={{width:"90%",backgroundColor:"orange",borderRadius:"10px",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",cursor:"pointer"}} onClick={()=>{if(loading==false){set_c_p(true)}}}>{"Change password"}</div>
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
            {c_p&&
            <div style={{width:"90%",height:"90%",position:"absolute",backgroundColor:"white",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"start",flexDirection:"column",overflow:"scroll"}}>
                <div style={{position:"absolute",right:"1%",top:"0%"}} onClick={()=>{set_c_p(false)}}><FaCircleXmark size={22}/></div>
                <div>CHANGE PASSWORD</div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Email Address</div>
                    <input type="email" value={email} onChange={(e)=>{
                        set_email(e.target.value)
                    }} placeholder="Enter Email" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Old Password</div>
                    <input type="email" value={old_password} onChange={(e)=>{
                        set_old_password(e.target.value)
                    }} placeholder="Enter old password" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>New Password</div>
                    <input type="text" value={new_password} onChange={(e)=>{
                        set_new_password(e.target.value)
                    }} placeholder="Enter new password" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Confirm New Password</div>
                    <input type="text" value={confirm_new_password} onChange={(e)=>{
                        set_confirm_new_password(e.target.value)
                    }} placeholder="Confirm new password" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Enter Token</div>
                    <input type="text" value={token} onChange={(e)=>{
                        set_token(e.target.value)
                    }} placeholder="Token..." style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                </div>
                <div style={{width:"90%",backgroundColor:"orange",borderRadius:"10px",color:"white",marginTop:"20px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",cursor:"pointer"}} onClick={()=>{if(loading==false){change_password()}}}>{loading==false?"Change password":"Loading.."}</div>
            </div>}
        </div>
    );
}

export default Login;