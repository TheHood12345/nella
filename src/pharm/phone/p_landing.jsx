import { useState } from "react";
import { FaCartPlus, FaHistory, FaLeaf, FaList, FaMailBulk, FaMoon, FaPhone, FaProductHunt, FaStore, FaSun } from "react-icons/fa";
import Drawer from "./drawer";
import P_landing_1 from "./p_landing_1";
import { FaImagePortrait } from "react-icons/fa6";

function P_landing(){

    const [drawer,set_drawer]=useState(false);
    const [drawer_width,set_drawer_width]=useState(0);
    const [day,set_day] = useState(true);
    return (
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>
        <div style={{width:"100%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 4px rgb(200,200,200)"}}>
            <div style={{width:"90%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{width:"70%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                    <FaLeaf size={30} color="aquamarine"/>
                    <div>PHARMACY</div>
                </div>
                <div style={{width:"10%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                    {day==false?<FaSun size={20}  style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_day(!day);
                    }}/>:
                    <FaMoon size={20}  style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_day(!day);
                    }}/>}
                </div>
                <div style={{width:"10%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                    {drawer==false?<FaImagePortrait size={20} style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_width(100);
                    }}/>:
                    <FaImagePortrait size={20} style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_width(0);
                    }}/>}
                </div>
                <div style={{width:"10%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                    {drawer==false?<FaList size={20} style={{cursor:"pointer"}}  title="Menu" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_width(100);
                    }}/>:
                    <FaList size={20} style={{cursor:"pointer"}}  title="Menu" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_width(0);
                    }}/>}
                </div>
            </div>
            
        </div>
        <P_landing_1 day={day}/>

        {/* DRAWER */}
        {
            // drawer&&
            <Drawer drawer_width={drawer_width} drawer={drawer} set_drawer_width={set_drawer_width} set_drawer={set_drawer} day={day}/>
        }
    </div>
    );
}

export default P_landing;