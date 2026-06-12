import { useState } from "react";
import { FaArrowDown, FaBook, FaCalendar, FaCaretLeft, FaIcicles, FaPiedPiper, FaPlus, FaSearch } from "react-icons/fa";
import { FaEarthAfrica, FaLocationPin, FaMessage, FaPerson, FaPhotoFilm } from "react-icons/fa6";
import { data } from "react-router-dom";

function Business(){
    const url="https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business"
    const z = ["Filter Enabled, Disabled","Enabled","Disabled"];
    const [x,set_x]=useState("Filter Enabled");
    const [q,set_q]=useState(false);
    const [ad,set_ad]=useState(false);
    const [sc,set_sc]=useState("");

    const [loading,set_loading] = useState(false);
    const [create_text,set_create_text] = useState("Operation failed");
    const [create_top,set_create_top] = useState(-10);
    const [create_s_text,set_create_s_text] = useState("Sucess");
    const [create_s_top,set_create_s_top] = useState(-10);
    
    async function create_business(){
        set_loading(true);
        
         await fetch(url,{
            method:"post",
            body: JSON.stringify({
                request_id: "string",
                meta_key: "string",
                meta_value: "string",
                slug: "string",
                data_type: "string",
                title_name: "string",
                description: "string",
                entity_featured_url: "http://example.com",
                extra_data: {
                    key_name1:"value1",
                    key_name2: 2
                },
                status: "active, inactive, draft, activated, deactivated, pending",
                parent_entity_type: "custom_entity",
                parent_entity_uuid: "660e8400-e29b-41d4-a716-446655440000",
                owned_by: "550e8400-e29b-41d4-a716-446655440000"
            })
         }).then((res)=> res.json()).then((data)=>{
            if(data.status==true){
                set_loading(false);
                set_ad(false);
                set_create_s_text("successfully created business");
                set_create_s_top(0);
                setTimeout(() => {
                    set_create_s_top(-10);
                }, 3000);
            }else{
                set_loading(false);
                set_create_text(data.message);
                set_create_top(0);
                setTimeout(() => {
                    set_create_top(-10);
                }, 3000);
            }
         }).catch((err)=>{
            console.log(`nope: ${err}`);
            set_loading(false);
            set_create_text("Check your internet connection.");
            set_create_top(0);
            setTimeout(() => {
                set_create_top(-10);
            }, 3000);
        });
    }


    return (
        <div style={{width:"100%",height:"80%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"}}>
            <div style={{width:"90%",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"3%",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",backgroundColor:"orange",borderRadius:"10px",marginTop:"20px"}} onClick={()=>{
                set_ad(true);
            }}><FaPlus size={30}/><div style={{fontSize:"20px",paddingLeft:"3%"}}>Add Business</div></div>
            <div style={{width:"90%",paddingTop:"1%",paddingBottom:"1%",marginTop:"20px",boxShadow:"0px 0px 3px gray",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center",borderRadius:"10px"}}>
                <FaSearch size={20} style={{width:"10%",display:"flex",flexDirection:"row",alignItems:"center",alignItems:"center"}}/>
                <input type="text" placeholder="Search Email, name" style={{backgroundColor:"transparent",paddingTop:"1%",paddingBottom:"1%",border:"0px",width:"90%"}}/>
            </div>
            <div style={{width:"90%",paddingTop:"1%",color:"black",paddingBottom:"1%",marginTop:"20px",boxShadow:"0px 0px 3px gray",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px",position:"relative"}}>
                <div style={{width:"100%",paddingLeft:"6%",paddingRight:"6%",paddingTop:"1%",fontWeight:"bold",paddingBottom:"1%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{
                    set_q(!q);
                }}>
                    <div>{x}</div>
                    <FaArrowDown/>
                </div>
                {
                q==true?
                <div style={{width:"100%",backgroundColor:"white",paddingTop:"10px",paddingBottom:"10px",position:"absolute",border:"1px solid black",top:"120%",overflow:"scroll"}}>
                    {
                        z.map((item,index)=>{
                            return (
                                <div className="add" style={{width:"100%",paddingLeft:"3px",paddingRight:"3px",paddingTop:"1%",paddingBottom:"1%",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
                                    set_x(item);
                                    set_q(!q);
                                }}>{item}</div>
                            )
                        })
                    }
                </div>:null
                }
            </div>
            <div style={{width:"90%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"-3px 3px 3px gray",borderRadius:"10px"}}>
                <FaIcicles size={30}/>
                <div style={{color:"black"}}>No menu data available</div>
                <div>Please add new items to see them listed here.</div>
            </div>

            {
                ad&&
                <div style={{width:"100%",height:"100%",overflow:"scroll",backgroundColor:"white",position:"absolute",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",boxShadow:"0px 0px 6px rgb(200,200,200)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <div style={{width:"90%",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}}>
                        {
                            sc==""?<FaPhotoFilm size={100}/>:<img src={URL.createObjectURL(sc)} alt="qwe" style={{width:"100%",height:"100%"}}/>
                        }
                        </div>
                        <label style={{width:"90%",boxShadow:"0px 0px 3px rgb(200,200,200)",backgroundColor:"rgb(200,200,200)",borderRadius:"3px",marginTop:"10px",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <FaPlus size={20}/>
                            <div>Upload Image for Business Logo</div>
                            <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                set_sc(e.target.files[0]);
                            }}/>
                        </label>
                        <div style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center"}}>Max: 2MB. PNG, JPEG only.</div>
                        <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"100%",marginTop:"10px"}}>Business Name</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaBook size={17}/>
                                <input type="text" placeholder="Smart Business Suite" style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"transparent",border:"0px"}}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Short Name</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaPerson size={17}/>
                                <input type="text" placeholder="SBS" style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"transparent",border:"0px"}}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Business Address</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <input type="text" placeholder="Add description here" style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"transparent",border:"0px"}}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Business Address</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaLocationPin size={17}/>
                                <input type="text" placeholder="Abuja" style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"transparent",border:"0px"}}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Contact Email</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaMessage size={17}/>
                                <input type="text" placeholder="Business contact email" style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"transparent",border:"0px"}}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Country</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",paddingTop:"3px",paddingBottom:"3px",marginBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaEarthAfrica size={17}/>
                                <input type="text" placeholder="" style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"transparent",border:"0px"}}/>
                            </div>

                            <div style={{width:"100%",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"orange",marginTop:"10px",textAlign:"center",borderRadius:"4px",marginBottom:"10px",color:"white",fontSize:"14px"}} onClick={async()=>{
                                if(loading==false){
                                    await create_business();
                                }
                                
                            }}>{loading?"Loading":"Register"}</div>
                        </div>
                    </div>
                    <div style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",color:"orangered",marginTop:"10px",marginBottom:"20px",textAlign:"center",borderRadius:"4px",marginBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <FaCaretLeft size={30}/>
                        <div style={{fontSize:"14px"}} onClick={()=>{
                            set_ad(false);
                        }}>Back</div>
                    </div>
                    <div style={{position:"fixed",fontFamily:"arial",backgroundColor:"red",color:"honeydew",top:`${create_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.3s linear",textAlign:"center"}}>
                    {/*FAILED TO LOGIN*/} {create_text}
                    </div>
                    <div style={{position:"fixed",backgroundColor:"rgba(0, 255, 255, 0.5)",color:"black",top:`${create_s_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    {/* Successful */} {create_s_text}
                    </div>
                </div>
            }
        </div>
    )
}

export default Business;