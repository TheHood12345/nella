import { FaArrowRight, FaCaretRight, FaCartPlus, FaLeaf, FaSearch } from "react-icons/fa";

function P_landing_1(){

    return (
        <div style={{width:"100%",height:"90%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center"}}>
            {/* <div style={{width:"100%",height:"20%",paddingTop:"10px",paddingBottom:"10px",backgroundImage:"url(/im_b.svg)",color:"white",backgroundSize:"cover",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{color:"orange",width:"100%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div>Announcements</div>
                </div>
                <div style={{color:"orange",width:"100%",height:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                    <div style={{width:"100%",height:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",overflowX:"scroll"}}>
                    {
                        [1,2,3,4,5,6,7,8,9].map((item,index)=>{
                            return(
                            <div key={index} style={{width:"100px",height:"100%",marginRight:"20%",backgroundColor:"transparent",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                <img src={"/im_sand.svg"} style={{width:"auto",height:"80%"}}/>
                                <div style={{width:"100%",height:"20%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                                    <div style={{textDecoration:"underline",color:"rgb(18,22,28)"}}>Open{item}</div>
                                </div>
                            </div>)
                        })
                    }
                    </div>
                    <div style={{color:"orange",width:"97%",height:"10%",textAlign:"end"}}>See all <FaArrowRight/></div>
                </div>
            </div> */}

            <div style={{width:"100%",backgroundImage:"url(/im_b.svg)",backgroundPosition:"center",backgroundSize:"cover",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"6px"}}>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",border:"1px solid orange",color:"orange",cursor:"pointer"}}>Make Order <FaCartPlus/></div>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",border:"1px solid orange",color:"white",cursor:"pointer"}}><div>View Products</div> <FaCaretRight/></div>
            </div>
            <div style={{width:"100%",height:"10%",backgroundImage:"url(/im_b.svg)",backgroundPosition:"center",backgroundSize:"cover",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"6px"}}>
                <div style={{width:"70%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",border:"1px solid orange",color:"orange",cursor:"pointer"}}>
                    <input type="text" placeholder="Search Available Drugs" style={{color:"orange",border:"0px",cursor:"pointer",width:"100%",height:"100%"}}/>
                </div>
                <div style={{width:"30%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",border:"1px solid orange",color:"white",cursor:"pointer"}}><div>Search</div> <FaSearch/></div>
            </div>
            {/* <div style={{width:"100%",color:"rgb(18,22,28)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div style={{color:"orange",cursor:"pointer",width:"80%",height:"100%"}}>
                        <input type="text" placeholder="Search Available Drugs" style={{color:"orange",cursor:"pointer",width:"100%",height:"100%"}}/>
                    </div>
                    <div style={{color:"orange",height:"100%",cursor:"pointer",width:"20%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white"}}>
                        <div>Search  </div>
                        <FaSearch size={20}/>
                    </div>
            </div> */}
            <div style={{width:"100%",marginTop:"20px",color:"rgb(18,22,28)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",color:"rgb(18,22,28)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>New arrivals</div>
                    <div style={{color:"orange",cursor:"pointer"}}>See all <FaArrowRight/></div>
                </div>
                <div style={{width:"100%",color:"rgb(18,22,28)",display:"grid",flexDirection:"row",gridTemplateColumns:"repeat(2, 1fr)",gap:"3px"}}>
                    {
                        [1,2,3,4,5].map((item,index)=>{
                            return (
                                <div key={index} style={{width:"100%",color:"rgb(18,22,28)",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>  
                                    <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",color:"rgb(18,22,28)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>{item}</div>
                                    <div style={{width:"100%",paddingTop:"3px",paddingBottom:"3px",color:"rgb(18,22,28)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        
                                        <div style={{width:"70%",color:"rgb(18,22,28)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            {/* <div>Name:</div> */}
                                            <div>Paracetamol</div>
                                        </div>
                                        <div style={{width:"70%",color:"rgb(18,22,28)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            {/* <div>Price:</div> */}
                                            <div>#200</div>
                                        </div>
                                        <div style={{width:"100%",paddingTop:"3px",paddingBottom:"3px",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange"}}>
                                            <div>Purchase<FaCartPlus/></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default P_landing_1;