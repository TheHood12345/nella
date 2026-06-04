import { Outlet, Link } from "react-router-dom";

function Email(){
    return (
        <div style={{width:"100%",height:"100%",margin:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",position:"absolute",top:"0%",left:"0%"}}>
            <div style={{width:"95%",height:"10%",margin:"0%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{width:"30%",height:"90%",margin:"0%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"100%",paddingTop:"0.1%",textDecoration:"underline",paddingBottom:"0.1%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>SOME TEXT</div>
                    <div>SOME TEXT</div>
                </div> 
                </div>
                <div style={{width:"60%",height:"90%",margin:"0%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",paddingTop:"0.1%",textDecoration:"underline",paddingBottom:"0.1%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>SOME TEXT</div>
                    <div>SOME TEXT</div>
                    <div>SOME TEXT</div>
                </div> 
                </div>
            </div>
            <div style={{width:"95%",height:"90%",overflow:"auto",margin:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                {/* <div style={{width:"100%",paddingTop:"0.1%",textDecoration:"underline",paddingBottom:"0.1%",background:"blue",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>SOME TEXT</div>
                    <div>SOME TEXT</div>
                    <div>SOME TEXT</div>
                </div>   */}
                <div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"30%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div>some text</div>
                        </div>
                        <div style={{width:"30%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div>some text</div>
                        </div>
                        <div style={{width:"30%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div>some text</div>
                        </div>
                </div>
                {/* <div style={{width:"100%",paddingTop:"0.1%",textDecoration:"underline",paddingBottom:"0.1%",marginTop:"1%",background:"blue",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>SOME TEXT</div>
                    <div>SOME TEXT</div>
                    <div>SOME TEXT</div>
                </div>   */}
                <div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"20%",display:"flex",flexDirection:"column",alignItems:"start",paddingLeft:"1%",justifyContent:"space-between"}}>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>PIPE</div>
                            <div style={{textDecoration:"underline",fontSize:"10px"}}>FLOW RATE</div>
                        </div>
                        <div style={{width:"80%",height:"100%",background:"rgb(18, 22, 28)",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <Outlet style={{position:"relative",width:"100%",height:"20px",top:"0px",left:"0px"}}/>
                        </div>
                </div>
                <div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>

                    
                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        
                        <div style={{width:"30%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                        </div>
                        <div style={{width:"30%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                        </div>
                        <div style={{width:"30%",background:"rgb(42, 51, 65)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                            <div>asdsdsds</div>
                        </div>
                    </div>

                    <div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",marginTop:"1%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        
                        <div style={{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div><strong><u>Adress</u></strong></div>
                            <div>Lagos</div>
                            <div>Nigeria</div>
                            <div>Africa</div>
                        </div>
                        <div style={{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div><strong><u>Adress</u></strong></div>
                            <div>Lagos</div>
                            <div>Nigeria</div>
                            <div>Africa</div>
                        </div>
                        <div style={{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div><strong><u>Adress</u></strong></div>
                            <div>Lagos</div>
                            <div>Nigeria</div>
                            <div>Africa</div>
                        </div>
                        <div style={{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            <div><strong><u>Adress</u></strong></div>
                            <div>Lagos</div>
                            <div>Nigeria</div>
                            <div>Africa</div>
                        </div>
                        
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Email;