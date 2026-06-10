import { useEffect, useState } from "react";
import { FaHome, FaBusinessTime, FaBookOpen, FaOutdent, FaBell, FaList, FaOpencart, FaListOl, FaArrowUp, FaArrowDown, FaCalendar, FaUserCircle } from "react-icons/fa";
import { FaBoltLightning, FaCertificate, FaCircleXmark, FaComputer, FaFileLines, FaGear, FaI, FaMessage, FaPeopleGroup, FaPerson, FaRightToBracket } from "react-icons/fa6";
import Business from "./business";
import Home from "./home";
import Menu from "./menu";
import { useNavigate } from "react-router-dom";

function Nella(){

    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const [q,set_q] = useState(1);
    const [logout,set_logout] = useState(false);
    const token = localStorage.getItem("token");
    const [drawer1,set_drawer1] = useState(false);
    const [show_verify_anim,set_show_verify_anim] = useState(true);

    const [show_v1,set_show_v1] = useState(false);
    const [show_c1,set_show_c1] = useState(false);

    const [c_token,set_c_token] = useState("");

    const navigate = useNavigate();

    const [loading_token,set_loading_token] = useState(false);
    const [v_top,set_v_top] = useState(-10);
    const [v_error,set_v_error] = useState(false);5


    const [loading_ve,set_loading_ve] = useState(false);
    const [ve_top,set_ve_top] = useState(-10);
    const [ve_s_top,set_ve_s_top] = useState(-10);

    const [loading_ps_token,set_loading_ps_token] = useState(false);

    const [change_tok,set_change_tok] = useState("");
    const [old_ps,set_old_ps] = useState("");
    const [new_ps,set_new_ps] = useState("");
    const [new_ps_confirm,set_new_ps_confirm] = useState("");
    const [change_loading,set_change_loading] = useState(false);
    const [change_err,set_change_err] = useState(false);

    const [verify_email_text_top,set_verify_email_text_top] = useState(-10);

    const [v_text,set_v_text] = useState("Kindly verify your email");

    const items = [
        {
            icon: <FaCalendar size={20} color={"gray"}/>,
            nil: "_",
            name: "Total Business (My Business)"
        },
        {
            icon: <FaPeopleGroup size={20} color={"purple"}/>,
            nil: "_",
            name: "Total Number of Users Onboarded"
        },
        {
            icon: <FaList size={20} color={"gray"}/>,
            nil: "_",
            name: "Total number of accepted orders"
        },
        {
            icon: <FaBell size={20} color={"orange"}/>,
            nil: "Nil",
            name: "Total Number of Notifications"
        },
        {
            icon: <FaFileLines size={20} color={"red"}/>,
            nil: "Nil",
            name: "Total Number of Declined Orders"
        },
        {
            icon: <FaComputer size={20} color={"gray"}/>,
            nil: "Nil",
            name: "Total Number of devices"
        }
    ]
    useEffect(()=>{
          if(!token){
            navigate("/login",{replace:true});
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("username");
            localStorage.removeItem("email");
        } 
    },[]);

    async function send_token_email_v(){
        set_loading_token(true);
        //set_token_error(false);
        await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/verify-email-address",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email")
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_loading_token(false);
                set_drawer1(0);
                set_show_v1(true);
                console.log("Token sent to email address",data);
            }else{
                set_loading_token(false);
                console.log("Could not send token to email addres, due to:  ",data.message);
                set_v_top(0);
                setTimeout(()=>{
                    set_v_top(-10);
                },2000);
            }
        }).catch((err)=>{
            set_loading_token(false);
            console.log(`Could not perform fetch: ${err}`)
            set_v_top(0);
                setTimeout(()=>{
                    set_v_top(-10);
            },2000);
        });
    }

    
    async function ve(){
        set_loading_ve(true);
        //set_token_error(false);
        await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/verify-email-address/validate",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email"),
                token_to_verify_email_address: c_token
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_loading_ve(false);
                set_show_v1(false);
                localStorage.setItem("email_verified_at", "verified");
                set_v_text("SUCCESSFULLY VERIFIED");
                //console.log("Token sent to email address",data);
                set_ve_s_top(0);
                setTimeout(()=>{
                    set_ve_s_top(-10);
                },2000);
            }else{
                set_loading_ve(false);
                //console.log("Could not send token to email addres, due to:  ",data.message);
                set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
                },2000);
            }
        }).catch((err)=>{
            set_loading_ve(false);
            //console.log(`Could not perform fetch: ${err}`)
            set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
            },2000);
        });
    }

        async function send_ps_token(){
        set_loading_ps_token(true);
        //set_token_error(false);
        await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/change-password",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email")
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_loading_ps_token(false);
                set_drawer1(0);
                set_show_c1(true);
                console.log("Token sent to email address",data);
            }else{
                set_loading_ps_token(false);
                console.log("Could not send token to email addres, due to:  ",data.message);
                set_v_top(0);
                set_change_err(true);
                setTimeout(()=>{
                    set_v_top(-10);
                    set_change_err(false);
                },2000);
            }
        }).catch((err)=>{
            set_loading_ps_token(false);
            console.log(`Could not perform fetch: ${err}`);
            set_change_err(true);
            set_v_top(0);
                setTimeout(()=>{
                    set_v_top(-10);
                    set_change_err(false);
            },2000);
        });
    }
        
    async function change_password(){
        set_change_loading(true);
        //set_token_error(false);
        await fetch("https://backend-test.nellalink.com/public/api/v1/nellalink/user/change-password/validate",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email"),
                token_to_change_password: change_tok,
                old_password: old_ps,
                new_password: new_ps,
                new_password_confirmation: new_ps_confirm
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_change_loading(false);
                set_show_v1(false);
                set_show_c1(false);
                //console.log("Token sent to email address",data);
                set_ve_s_top(0);
                setTimeout(()=>{
                    set_ve_s_top(-10);
                },2000);
            }else{
                set_change_loading(false);
                //console.log("Could not send token to email addres, due to:  ",data.message);
                set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
                },2000);
            }
        }).catch((err)=>{
            set_change_loading(false);
            //console.log(`Could not perform fetch: ${err}`)
            set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
            },2000);
        });
    }

    return (
        <div style={{width:"100%",fontSize:"10px",height:"100%",display:"flex",flexDirection:"column",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{width:"100%",height:"10%",boxShadow:"0px 3px 3px gray",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"60%",height:"100%",fontWeight:"bold",display:"flex",flexDirection:"Column",alignItems:"start",justifyContent:"center",fontWeight:"bold",color:"black"}}>
                        <div>{q==1?"Dashboard":q==2?"Businesses":q==3?"QR Menu & Pricing":"Dashboard"}</div>
                        {
                            localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                           <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:v_text=="Kindly verify your email"?"orange":"aqua",color:"white",width:"60%",borderRadius:"2px"}} onClick={()=>{
                            set_drawer1(!drawer1);
                            set_show_verify_anim(false);
                        }}>{v_text}</div>:
                           <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><FaCertificate/> VERIFIED</div>
                        }
                    </div>
                    
                    <div style={{width:"30%",position:"relative",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        {/* <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}}> */}
                           <FaUserCircle size={20}  onClick={()=>{
                            set_drawer1(!drawer1);
                            set_show_verify_anim(false);
                        }}/>
                           
                        {/* </div> */}
                        
                        <div style={{position:"relative",margin:"0px",padding:"0px"}}>
                           <FaBell size={20} style={{margin:"0px",padding:"0px"}}/>
                           <div style={{color:"white",backgroundColor:"red",width:"50%",height:"40%",borderRadius:"100px",textAlign:"center",position:"absolute",top:"-10%",right:"-10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>0</div>
                        </div>
                        
                        <div style={{position:"relative"}}>
                        {/* <FaList size={20} style={{cursor:"pointer"}} onClick={()=>{
                            set_drawer1(!drawer1);
                            set_show_verify_anim(false);
                        }}/> */}
                        <FaGear size={20}  onClick={()=>{
                            set_drawer1(!drawer1);
                            set_show_verify_anim(false);
                        }}/>
                        {/* {show_verify_anim&& localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")== "" || localStorage.getItem("email_verified_at")=="null"?
                        <div className="verify" style={{position:"absolute",paddingLeft:"10px",paddingRight:"10px",backgroundColor:"transparent",color:"white",left:"-110%",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}} onClick={()=>{
                            set_drawer1(true);
                            set_show_verify_anim(false);
                        }}><FaArrowUp size={20} color="black"/>
                        <div style={{backgroundColor:"orange",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px",padding:"10px"}}>
                            <div>VERIFY</div> <div>EMAIL</div>
                        </div>
                        </div>:null
                        } */}
                        </div>
                    </div>
                </div>
                
            </div>
            {
            q == 1?<Home/>:q==2?<Business/>:q==3?<Menu/>:null
            }

            {/* Bottom nav bar */}
            <div style={{width:"100%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",boxShadow:"0px -1px 2px gray",fontSize:"10px"}}>
                <div style={{width:"20%",cursor:"pointer",height:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    
                    set_q(1);
                }}>
                    <FaHome color={q==1? "black": "gray"}/>
                    <div style={{color:q==1? "black": "gray"}}>Home</div>
                </div>
                <div style={{width:"20%",height:"90%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                        set_verify_email_text_top(0);
                        setTimeout(()=>{
                            set_verify_email_text_top(-10);
                        },2000);
                    }else{
                      set_q(2);  
                    }
                    
                }}>
                    <FaBusinessTime color={q==2? "black": "gray"}/>
                    <div style={{color:q==2? "black": "gray"}}>Business</div>
                </div>
                <div style={{width:"20%",height:"90%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                        set_verify_email_text_top(0);
                        setTimeout(()=>{
                            set_verify_email_text_top(-10);
                        },2000);
                    }else{
                        set_q(3);
                    }
                    
                }}>
                    <FaBookOpen color={q==3? "black": "gray"}/>
                    <div style={{color:q==3? "black": "gray"}}>QR Menu{/*"/Price List"*/}</div>
                </div>
                <div style={{width:"20%",height:"90%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_logout(true);
                }}>
                    <FaRightToBracket color={q==4? "black": "gray"}/>
                    <div style={{color:q==4? "black": "gray"}}>Logout</div>
                </div>
            </div>

            {
                logout&&
                <div style={{width:"100%",height:"100%",fontSize:"14px",position:"absolute",top:"0%",left:"0%",backgroundColor:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"white",opacity:"1",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{fontWeight:"bolder",color:"black"}}>Confirm Logout</div>
                        <div>Are you sure you want to log out?</div>
                        <div style={{width:"90%",marginTop:"10px",backgroundColor:"white",opacity:"1",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                            <div style={{width:"30%",paddingTop:"6px",paddingBottom:"6px",borderRadius:"4px",textAlign:"center",cursor:"pointer"}} onClick={()=>{
                                set_logout(false);
                            }}>Cancel</div>
                            <div style={{width:"30%",paddingTop:"6px",paddingBottom:"6px",borderRadius:"4px",backgroundColor:"red",color:"white",textAlign:"center",cursor:"pointer"}} onClick={()=>{
                                navigate("/login");
                                localStorage.removeItem("token");
                                localStorage.removeItem("name");
                                localStorage.removeItem("username");
                                localStorage.removeItem("email");
                            }}>Okay</div>
                        </div>
                    </div>
                </div>
            }

            <div style={{width:"100%",backgroundColor:"rgba(18,22,28,0.4)",height:drawer1==false?"0%":"90%",position:"absolute",top:"10%",right:"0",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"flex-start",overflow:"hidden"}}>
                
                <div style={{width:"100%",height:"40%",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"start",fontSize:"12px",justifyContent:"end"}}>
                    <div style={{width:"50%",height:"100%",backgroundColor:"rgba(0,0,0,0.9)"}} onClick={()=>{
                        set_drawer1(false);
                    }}></div>
                    <div style={{width:"50%",height:"100%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"start",fontSize:"12px",justifyContent:"space-evenly",backgroundColor:"rgba(0,0,0,0.9)"}}>
                    {/* <div style={{height:"10%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>HELLO, {localStorage.getItem("name").toUpperCase()}</div> */}
                    <div style={{height:"80%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",overflow:"scroll"}}>
                        {localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")== "" || localStorage.getItem("email_verified_at")=="null"?
                            <div style={{width:"90%",cursor:"pointer",paddingTop:"12px",paddingBottom:"12px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"1px 1px 3px gray inset,-1px -2px 2px gray inset",backgroundColor:"white"}} onClick={async()=>{
                            if(loading_token==false){
                            await send_token_email_v();
                            }
                        }}>
                            <div>{loading_token==false?"Verify email":"Sending Token..."}</div>
                        </div>:
                        null
                        }
                        <div style={{width:"90%",cursor:"pointer",paddingTop:"12px",paddingBottom:"12px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"1px 1px 3px gray inset,-1px -2px 2px gray inset",backgroundColor:"white"}} onClick={async()=>{
                            if(loading_ps_token==false){
                            await send_ps_token();
                            }
                        }}>
                            <div>{loading_ps_token==false?"Change Password":"Sending Token..."}</div>
                        </div>
                    </div>
                    {/* <div style={{height:"10%",width:"100%",backgroundColor:"rgba(255,0,0,1)",color:"white",textAlign:"center",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                        set_drawer1(false);
                        set_logout(true);
                    }}>SIGN OUT</div> */}
                    </div>
                </div>
                <div style={{width:"100%",height:"60%",backgroundColor:"rgba(0,0,0,0.9)"}} onClick={()=>{
                    set_drawer1(false);
                }}></div>
                <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${v_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    OPERATION FAILED
                </div>
            </div>

            {show_v1&&
            <div style={{width:"100%",height:"100%",position:"absolute",backgroundColor:"rgba(0,0,0,0.9)",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"80%",height:"60%",position:"absolute",backgroundColor:"transparent",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{position:"relative",width:"80%",height:"30%",backgroundColor:"rgba(255,255,255,1)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter Token</div>
                            <input type="text" value={c_token} onChange={(e)=>{
                                set_c_token(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            <div style={{position:"absolute",right:"2%",top:"2%",cursor:"pointer"}} onClick={()=>{
                                set_show_v1(false);
                            }}><FaCircleXmark size={23}/></div>
                        </div>
                        
                    </div>
                    <div style={{width:"80%",marginTop:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"orange",color:"white",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={async()=>{
                        if(loading_ve==false){
                            await ve();
                        }
                        
                    }}>{loading_ve==false?"VERIFY":"Loading..."}</div>
                </div>
                <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${ve_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    OPERATION FAILED
                </div>
            </div>
            }
            {show_c1&&
            <div style={{width:"100%",height:"100%",position:"absolute",backgroundColor:"rgba(0,0,0,0.9)",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",position:"relative",backgroundColor:"transparent",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,1)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter Token</div>
                            <input type="text" value={change_tok} onChange={(e)=>{
                                set_change_tok(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter Old Password</div>
                            <input type="text" value={old_ps} onChange={(e)=>{
                                set_old_ps(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter New Password</div>
                            <input type="text" value={new_ps} onChange={(e)=>{
                                set_new_ps(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Confirm New Password</div>
                            <input type="text" value={new_ps_confirm} onChange={(e)=>{
                                set_new_ps_confirm(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"80%",cursor:"pointer",marginTop:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"orange",color:"white",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={async()=>{
                        if(change_loading==false){
                            await change_password();
                        }
                        
                    }}>{change_loading==false?"Change Password":"Loading..."}</div>

                    <div style={{position:"absolute",right:"2%",top:"2%",cursor:"pointer"}} onClick={()=>{
                                set_show_c1(false);
                            }}><FaCircleXmark size={23}/></div>
                        
                    </div>
                    
                </div>
                <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${ve_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    OPERATION FAILED
                </div>
            </div>
            }
            <div style={{position:"absolute",backgroundColor:"rgba(0, 255, 255, 0.5)",color:"black",top:`${ve_s_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    Successful
            </div>
            <div style={{position:"absolute",backgroundColor:"orange",color:"white",fontSize:"14px",top:`${verify_email_text_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.5s linear",textAlign:"center"}}>
                    Kindly verify your email address to access this feature
            </div>
        </div>
    );
}

export default Nella;