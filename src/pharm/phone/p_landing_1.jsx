import { FaArrowRight, FaCaretRight, FaCartPlus, FaCertificate, FaImage, FaLeaf, FaPlus, FaSearch } from "react-icons/fa";

function P_landing_1({day}){

    return (
        <div style={{width:"100%",height:"90%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>

            <div style={{width:"100%",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <FaSearch size={20} color="rgb(18,22,28)"/>
                    <input type="text" style={{paddingTop:"10px",paddingBottom:"10px",width:"90%",paddingLeft:"6px",paddingRight:"6px",border:"0px",backgroundColor:"transparent"}} placeholder="Search for medicines, brands or symptoms..."/>
                </div>
            </div>

            <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",color:"orange"}}>
                <div style={{width:"70%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundImage:"linear-gradient(to right,red,orange)",color:"transparent",backgroundClip:"text",verflow:"scroll",borderBottom:"0.1px solid orange",fontSize:"10px"}}>Fast, Reliable & Secure Delivery!</div>
            </div>

            <div style={{width:"70%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",color:"orange",backgroundImage:"linear-gradient(to right,red,orange)",borderRadius:"4px",marginTop:"4px",color:"white"}}>
                <div style={{width:"70%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}><FaCartPlus/>MAKE ORDER</div>
            </div>

            <div style={{width:"100%",marginTop:"1%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontFamily:"arial,sans-serif",color:"black",fontWeight:"bold"}}>Browse Categories</div>
                    <div style={{color:"orange",cursor:"pointer"}}>See all <FaArrowRight/></div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",overflowX:"auto",gap:"10px",scrollSnapType:"x mandatory"}}>
                    {
                        ["Prescriptions","OTC","Wellness","Vitamins","First Aid","Personal Care","Skin Care","Energy","Antibiotics"].map((item,index)=>{
                            return (
                                <div key={index} style={{height:"100%",flex:"0 0 10%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",scrollSnapAlign:"center",cursor:"pointer"}}>  
                                    <div style={{width:"100%",background:"rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                        <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <FaLeaf size={60}/>
                                        </div>
                                    </div>
                                    <div style={{width:"100%",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        <div style={{fontSize:"10px"}}>{item}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* <div style={{width:"100%",backgroundPosition:"center",backgroundSize:"cover",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"6px"}}>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",border:"1px solid orange",color:"orange",cursor:"pointer",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>Make Order <FaCartPlus/></div>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",border:"1px solid orange",color:"white",cursor:"pointer"}}><div>View Products</div> <FaCaretRight/></div>
            </div> */}

            <hr style={{width:"80%"}}/>
            
            
            <div style={{width:"100%",marginTop:"1%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontFamily:"arial,sans-serif",color:"black",fontWeight:"bold"}}>Drugs & Health Products</div>
                    <div style={{color:"orange",cursor:"pointer"}}>See all <FaArrowRight/></div>
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"row",gap:"10px",overflow:"scroll",scrollSnapType:"x mandatory"}}>
                    {
                        [1,2,3,4,5].map((item,index)=>{
                            return (
                                <div key={index} style={{height:"100%",flex:"0 0 50%",boxShadow:"0px 0px 10px rgb(240,240,240)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"10px",scrollSnapAlign:"center"}}>  
                                    <div style={{width:"90%",position:"relative",background:"rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"6px"}}>
                                        <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <FaLeaf size={60}/>
                                        </div>
                                        <div style={{position:"absolute",right:"0%",top:"0%",backgroundImage:"linear-gradient(to right,rgba(18,22,28,0.9),rgba(30,30,30,0.9))",color:"white",width:"50%",textAlign:"center",borderRadius:"10px"}}>In Stock</div>
                                    </div>
                                    <div style={{width:"100%",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        
                                        <div style={{width:"70%",fontFamily:"arial,sans-serif",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                            <div style={{color:"black",fontWeight:"bold"}}>Paracetamol 500mg</div>
                                            <div>Tablets (30s)</div>
                                            <div>MediLab</div>
                                            <div style={{color:"black",fontWeight:"bold",fontSize:"14px",width:"90%",textAlign:"center"}}>#200</div>
                                        </div>
                                        <div style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"orange",cursor:"pointer",borderRadius:"6px",position:"relative"}}>
                                            <div>ADD TO CART</div>
                                            <FaPlus size={12}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* <div style={{width:"100%",backgroundPosition:"center",backgroundSize:"cover",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"6px"}}>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",border:"1px solid orange",color:"orange",cursor:"pointer",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>Make Order <FaCartPlus/></div>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",border:"1px solid orange",color:"white",cursor:"pointer"}}><div>View Products</div> <FaCaretRight/></div>
            </div> */}

            <hr style={{width:"80%"}}/>

             <div style={{width:"100%",marginTop:"1%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontFamily:"arial,sans-serif",color:"black",fontWeight:"bold"}}>Drugs & Health Products</div>
                    <div style={{color:"orange",cursor:"pointer"}}>See all <FaArrowRight/></div>
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"row",gap:"10px",overflow:"scroll",scrollSnapType:"x mandatory"}}>
                    {
                        [1,2,3,4,5].map((item,index)=>{
                            return (
                                <div key={index} style={{height:"100%",flex:"0 0 50%",boxShadow:"0px 0px 10px rgb(240,240,240)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px",fontSize:"10px",scrollSnapAlign:"center"}}>  
                                    <div style={{width:"90%",position:"relative",background:"rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"6px"}}>
                                        <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <FaLeaf size={60}/>
                                        </div>
                                        <div style={{position:"absolute",right:"0%",top:"0%",backgroundImage:"linear-gradient(to right,rgba(18,22,28,0.9),rgba(30,30,30,0.9))",color:"white",width:"50%",textAlign:"center",borderRadius:"10px"}}>In Stock</div>
                                    </div>
                                    <div style={{width:"100%",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        
                                        <div style={{width:"70%",fontFamily:"arial,sans-serif",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                            <div style={{color:"black",fontWeight:"bold"}}>Paracetamol 500mg</div>
                                            <div>Tablets (30s)</div>
                                            <div>MediLab</div>
                                            <div style={{color:"black",fontWeight:"bold",fontSize:"14px",width:"90%",textAlign:"center"}}>#200</div>
                                        </div>
                                        <div style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"orange",cursor:"pointer",borderRadius:"6px",position:"relative"}}>
                                            <div>ADD TO CART</div>
                                            <FaPlus size={12}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
             

            

            {/* <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",marginTop:"10px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                <div>OPEN HOURS</div>
                <div>10 HOURS DAILY SERVICE</div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Monday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Tuesday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Wednesday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Thursday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Friday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Saturday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Sunday</div>
                    <div>8AM to 6PM</div>
                </div>
            </div> */}
            {/* <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",marginTop:"10px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                <div>CERTIFIED & TRUSTED</div>
                <div><FaCertificate/> NDLEA</div>
                <div><FaCertificate/> NAFDAC</div>
            </div> */}

        </div>
    );
}

export default P_landing_1;