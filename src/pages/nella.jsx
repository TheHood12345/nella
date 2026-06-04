import { useState } from "react";
import { FaHome, FaBusinessTime, FaBookOpen, FaOutdent, FaBell, FaList, FaOpencart, FaListOl, FaArrowUp, FaArrowDown, FaCalendar } from "react-icons/fa";
import { FaBoltLightning, FaComputer, FaFileLines, FaI, FaMessage, FaPeopleGroup, FaPerson, FaRightToBracket } from "react-icons/fa6";
import Business from "./business";
import Home from "./home";
import Menu from "./menu";
import { useNavigate } from "react-router-dom";

function Nella(){

    const [q,set_q] = useState(1);
    const [logout,set_logout] = useState(false);

    const navigate = useNavigate();

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
    return (
        <div style={{width:"100%",fontSize:"10px",height:"100%",display:"flex",flexDirection:"column",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{width:"100%",height:"10%",boxShadow:"0px 3px 3px gray",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"60%",height:"10%",fontWeight:"bold",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontSize:"16px",fontWeight:"bold",color:"black"}}>{q==1?"Dashboard":q==2?"Businesses":q==3?"QR Menu & Pricing":"Dashboard"}</div>
                    <div style={{width:"30%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <FaPerson size={20}/>
                        <div style={{position:"relative",margin:"0px",padding:"0px"}}>
                           <FaBell size={20} style={{margin:"0px",padding:"0px"}}/>
                           <div style={{color:"white",backgroundColor:"red",width:"50%",height:"40%",borderRadius:"100px",textAlign:"center",position:"absolute",top:"-10%",right:"-10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>0</div>
                        </div>
                        
                        <FaRightToBracket size={20} style={{cursor:"pointer"}} onClick={()=>{
                            set_logout(true);
                        }}/>
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
                    <FaHome color={q==1? "blue": "gray"}/>
                    <div style={{color:q==1? "blue": "gray"}}>Home</div>
                </div>
                <div style={{width:"20%",height:"90%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_q(2);
                }}>
                    <FaBusinessTime color={q==2? "blue": "gray"}/>
                    <div style={{color:q==2? "blue": "gray"}}>Business</div>
                </div>
                <div style={{width:"20%",height:"90%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_q(3);
                }}>
                    <FaBookOpen color={q==3? "blue": "gray"}/>
                    <div style={{color:q==3? "blue": "gray"}}>QR Menu{/*"/Price List"*/}</div>
                </div>
                <div style={{width:"20%",height:"90%",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_logout(true);
                }}>
                    <FaOutdent color={q==4? "blue": "gray"}/>
                    <div style={{color:q==4? "blue": "gray"}}>Logout</div>
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
                            }}>Okay</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Nella;