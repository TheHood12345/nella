import { useState, useEffect,useRef } from "react";

function Level1(){

    const [load1,set_load1] = useState(10);
    const [load2,set_load2] = useState(0);
    const [load3,set_load3] = useState(0);
    const [load4,set_load4] = useState(0);
    const [load5,set_load5] = useState(0);

    const [l1,set_l1] = useState(0);
    const [l2,set_l2] = useState(0);
    const [l3,set_l3] = useState(0);
    const [l4,set_l4] = useState(0);
    const [l5,set_l5] = useState(0);

    const [r1,set_r1] = useState(true);
    const [d1,set_d1] = useState(false);

    const [r2,set_r2] = useState(false);
    const [d2,set_d2] = useState(false);

    const [r3,set_r3] = useState(false);
    const [d3,set_d3] = useState(false);

    const [r4,set_r4] = useState(false);
    const [d4,set_d4] = useState(false);

    const [go, set_go] = useState(true);

    const m1_ref=useRef(null);
    const m2_ref=useRef(null);
    const m3_ref=useRef(null);
    const m4_ref=useRef(null);
    const m5_ref=useRef(null);

    const [bg1,set_bg1] = useState("wheat");
    const [bg2,set_bg2] = useState("4px solid red");
    const [bg3,set_bg3] = useState("4px solid red");
    const [bg4,set_bg4] = useState("4px solid red");
    const [bg5,set_bg5] = useState("4px solid red");

    const [history,set_history]=useState([]);

    const [op_m, set_op_m] = useState(0);
    const [op_1, set_op_1] = useState(0);
    const [op_2, set_op_2] = useState(0);
    const [op_3, set_op_3] = useState(0);
    const [op_4, set_op_4] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            set_load1(100);
            setTimeout(()=>{
                set_load2(100);
                set_op_1(0.9);
                setTimeout(()=>{
                    set_load3(100);
                    set_op_2(0.9);
                    setTimeout(()=>{
                        set_load4(100);
                        set_op_3(0.9);
                        setTimeout(()=>{
                            set_load5(100);
                            set_op_4(0.9);
                            setTimeout(()=>{
                               set_op_m(0.9); 
                            },1000);
                            
                        },2500)
                    },2000)
                },1500)
            },1000)
        },100)
    },[]);
    
    return (
        <div id="game_box_main">
            {/* GAME BOX */}
            <div id="game_box">
                {/* MAZE */}

                {/* CORRECT PATH */}
                <div id="maze1" ref={m1_ref} className="b">
                    <div id="load1" style={{width:`${load1}%`}}></div>
                </div>
                <div id="load0_1"></div>
                <div id="load1_1"></div>
                <div id="maze2" ref={m2_ref} className="b" >{/*style={{borderTop: `${bg2}`}}*/}
                    <div id="load2" style={{height:`${load2}%`}}></div>
                </div>
                <div id="load2_2"></div>
                <div id="maze3" ref={m3_ref} className="b">{/*  style={{borderLeft: `${bg3}`}}*/}
                    <div id="load3" style={{width:`${load3}%`}}></div>
                </div>
                <div id="load3_3"></div>
                <div id="maze4" ref={m4_ref} className="b">{/* style={{borderBottom: `${bg4}`}} */}
                    <div id="load4" style={{height:`${load4}%`}}></div>
                </div>
                <div id="load4_4"></div>
                <div id="maze5" ref={m5_ref} className="b">{/* style={{borderLeft: `${bg5}`}} */}
                    <div id="load5" style={{width:`${load5}%`}}></div>
                </div>
                <div id="load5_5" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>6</div>

                {/* WRONG PATH */}
                <div id="w1" className="b">
                    <div id="l1" className="l1"></div>
                </div>
                <div id="w2" className="b">
                    <div id="l2" className="l1"></div>
                </div>
                <div id="w3" className="b">
                    <div id="l3" className="l1"></div>
                </div>
                <div id="w4" className="b">
                    <div id="l4" className="l1"></div>
                </div>
                <div id="w5" className="b">
                    <div id="l5" className="l1"></div>
                </div>

                <div id="load0_1" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>1</div>
                <div id="load1_1" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>2</div>
                <div id="load2_2" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>3</div>
                <div id="load3_3" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>4</div>
                <div id="load4_4" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>5</div>

                <div id="w1_1" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>0</div>
                <div id="w2_2" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>0</div>
                <div id="w3_3" style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>0</div>

                <div id="dialog" style={{opacity:`${op_m}`,transition:"all 1.3s linear"}}>
                    <div style={{color:"orange",textDecoration:"underline"}}>Flow Analysis</div>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div>Total Flow Rate</div>
                        <div>60 v/m<sup>2</sup></div>
                    </div>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div>Avg. pressure</div>
                        <div>200 kPa</div>
                    </div>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div>Velocity</div>
                        <div>2 m/s</div>
                    </div>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div>Total Flow Rate</div>
                        <div>60 v/m<sup>2</sup></div>
                    </div>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div>Pipe roughness</div>
                        <div>~0.0015 mm</div>
                    </div>
                </div>

                <div style={{position:"absolute",top:"37%",left:"4%",color:"black",transform:"Rotate(-90deg)",fontWeight:"bold",backgroundColor:"rgb(18,22,28)",backgroundColor:"transparent",opacity:"0.9",color:"orange",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 3px black",boxShadow:"0px 0px 0px transparent",color:"white",transition:"all 2s linear",opacity:`${op_1}`}}>PVC ~0.0010</div>
                <div style={{position:"absolute",top:"65%",left:"36%",color:"black",fontWeight:"bold",backgroundColor:"rgb(18,22,28)",backgroundColor:"transparent",opacity:"0.9",color:"orange",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 3px black",boxShadow:"0px 0px 0px transparent",color:"white",transition:"all 2s linear",opacity:`${op_2}`}}>PVC ~0.0015</div>
                <div style={{position:"absolute",top:"53%",left:"52%",color:"black",transform:"Rotate(-90deg)",fontWeight:"bold",backgroundColor:"rgb(18,22,28)",backgroundColor:"transparent",opacity:"0.9",color:"orange",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 3px black",boxShadow:"0px 0px 0px transparent",color:"white",transition:"all 2s linear",opacity:`${op_3}`}}>PVC ~0.0010</div>
                <div style={{position:"absolute",top:"30%",left:"76%",color:"black",fontWeight:"bold",backgroundColor:"rgb(18,22,28)",backgroundColor:"transparent",opacity:"0.9",color:"orange",paddingTop:"5px",paddingBottom:"5px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 3px black",boxShadow:"0px 0px 0px transparent",color:"white",transition:"all 2s linear",opacity:`${op_4}`}}>PVC ~0.0012</div>
            </div>

            {/* CONTROLS */}
            {/* <div id="controls">
                <div id="up" onClick={()=>{
                    if(d1===false && r2===false && d2===true && go===true){
                        set_bg4("0px");
                        setTimeout(()=>{
                            set_d2(false);
                            set_go(false);
                        
                            set_load4(100);
                            setTimeout(()=>{
                                set_go(true);
                                set_d3(true);
                            },500);   
                        },100);
                        
                    }
                }}>up</div>
                <div id="side_buttons">
                    <div id="left" onClick={()=>{
                    
                }}>left</div>
                    <div id="right" onClick={()=>{
                    if(d1===false && r1===true && go===true){
                        
                        set_r1(false);
                        set_go(false);
                        
                        set_load1(100);
                        setTimeout(()=>{
                            set_go(true);
                            set_d1(true);
                            set_r2(true);
                        },500)
                    }
                    else if(d1===false && r1===false && r2===true && go===true){
                        set_bg3("0px");
                        setTimeout(()=>{
                            set_r2(false);
                            set_go(false);
                            set_load3(100);
                            setTimeout(()=>{
                                set_go(true);
                                set_d2(true);
                                set_r3(true);
                            },500)   
                        },100);
                        
                    }
                    else if(d2===false && r2===false && r3===true && go===true){
                        set_bg5("0px");
                        setTimeout(()=>{
                            set_r3(false);
                            set_go(false);
                            set_load5(100);
                            setTimeout(()=>{
                                set_go(true);
                                set_d2(true);
                                set_r4(true);
                                // alert("SUCCESS!!");
                            },500);
                        },100);
                        
                    }
                }}>right</div>
                </div>
                <div id="down" onClick={()=>{
                    if(d1===true && go===true){
                        set_bg2("0px");
                        setTimeout(()=>{
                          set_d1(false);
                            set_go(false);
                        
                            set_load2(100);
                            setTimeout(()=>{
                                set_go(true);
                            },500)  
                            },100);
                        
                    }
                }}>down</div>
            </div> */}



            <div id="dialog" style={{transition:"all 1.3s linear",bottom:"2%",left:"4%",height:"10%",width:"90%"}}>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{color:"white",textDecoration:"underline"}}>Prop. Flow Rate</div>
                        <div style={{color:"orange",textDecoration:"underline"}}>60 v/m<sup>2</sup></div>
                    </div>
                    
                </div>



        </div>
    );
}

export default Level1;