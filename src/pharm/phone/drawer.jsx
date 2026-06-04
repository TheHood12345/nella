import { useState } from "react";
import { FaCartPlus, FaHistory, FaHome, FaLeaf, FaList, FaMailBulk, FaPhone, FaProductHunt, FaStore } from "react-icons/fa";

function Drawer({drawer_width,set_drawer_width,drawer,set_drawer}){

    return (
        <div style={{width:`${drawer_width}%`,height:"90%",overflow:"hidden",transition:"all 0.1s linear",position:"absolute",top:"10%",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"end",backgroundColor:"rgba(230,230,230,0.7)"}}>
                <div style={{width:"40%",height:"100%"}} onClick={()=>{
                    set_drawer(false);
                    set_drawer_width(0);
                    
                }}></div>
                <div style={{width:"60%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",backgroundColor:"white"}}>
                    <div style={{width:"90%",height:"10%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start",backgroundColor:"white"}}>
                        <div style={{color:"orange",cursor:"pointer",width:"90%",border:"1px solid orange",textAlign:"center"}}>Create account</div>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                    </div>
                    <div style={{width:"90%",fontSize:"12px",height:"80%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",backgroundColor:"white"}}>
                      <div style={{width:"100%",height:"100%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start"}}>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div>My Dashboard</div><FaHome/>
                            </div>
                        </div>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div>Make Order</div><FaCartPlus/>
                            </div>
                        </div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div>Available Products</div><FaStore/>
                            </div>
                        </div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div>Promotions</div><FaProductHunt/>
                            </div>
                        </div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div>History</div><FaHistory/>
                            </div>
                        </div>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div>Call us</div><FaPhone/>
                            </div>
                        </div>
                        <div style={{width:"100%",textAlign:"center",marginTop:"4%"}}>OR</div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div>Email us</div><FaMailBulk/>
                            </div>
                        </div>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                        <div style={{width:"100%",borderRadius:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{color:"orange"}}>Our addresses</div>
                            <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                                <ul style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                    <li>1 Shelter Afrique Estate, Uyo, Akwa Ibom State</li>
                                </ul>
                            </div>
                            <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                                <ul style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                    <li>Banana Island, Lagos State</li>
                                </ul>
                            </div>
                            <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                                <ul style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                    <li>Transcorp Hilton, Abuja FCT</li>
                                </ul>
                            </div>
                        </div>
                        
                     </div>

                    </div>
                    <div style={{width:"100%",height:"10%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white"}}>
                        <div>Sign in</div>
                    </div>
                </div>
                
            </div>
    );
}

export default Drawer;