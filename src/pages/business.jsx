import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { FaArrowDown, FaBook, FaCalendar, FaCaretLeft, FaIcicles, FaImage, FaPiedPiper, FaPlus, FaSearch, FaUpload } from "react-icons/fa";
import { FaCircleXmark, FaDownload, FaEarthAfrica, FaEllipsisVertical, FaLocationPin, FaMessage, FaPerson, FaPhotoFilm } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { data, Link, useSearchParams } from "react-router-dom";
import Business_view from "./business_view";
import Business_edit from "./business_edit";

function Business({prop_set_q}){
    const url="https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business";
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const get_all_url = `https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business?owned_by=${localStorage.getItem("uuid")}&page=1&parent_entity_type=&parent_entity_uuid=&per_page=10&sort_by=uuid&sort_order=asc`;
    const z = ["Filter Enabled, Disabled","Enabled","Disabled"];
    const [z_main,set_z_main]=useState("enabled");
    const [z_all,set_z_all]=useState("disabled");
    const [z_search,set_z_search]=useState("");
    const [x,set_x]=useState("Filter Enabled, Disabled");
    const [q,set_q]=useState(false);
    const [ad,set_ad]=useState(false);
    const [sc,set_sc]=useState("");

    const [loading,set_loading] = useState(false);
    const [create_text,set_create_text] = useState("Operation failed");
    const [create_top,set_create_top] = useState(-10);
    const [create_s_text,set_create_s_text] = useState("Success");
    const [create_s_top,set_create_s_top] = useState(-10);

    const [title_name,set_title_name]=useState("");
    const [description,set_description]=useState("");
    const [business_address,set_business_address] = useState("");
    const [contact_email,set_contact_email] = useState("");
    const [country,set_country] = useState("");

    const [get_now,set_get_now] = useState(false);
    const [loading_get_now,set_loading_get_now] = useState(false);
    const [all_data,set_all_data] = useState(null);
    const [i,set_i]=useState(null);

    const [query] = useSearchParams();

    const [view,set_view]=useState(false);
    const [business_name_v,set_business_name_v]=useState("");
    const [business_address_v,set_business_address_v]=useState("");
    const [business_email_v,set_business_email_v]=useState("");
    const [business_desc_v,set_business_desc_v]=useState("");
    const [business_country_v,set_business_country_v]=useState("");
    const [business_status_v,set_business_status_v]=useState("");

    const [edit,set_edit] = useState(false);
    const [business_uuid,set_business_uuid] = useState("");

    const [short_name,set_short_name]=useState("");
    const [business_owned_by,set_business_owned_by] = useState("");

    const [nw,set_nw]=useState(`${Date.now().toString()}`);

    const [mem,set_mem]=useState({title_name:""});
    const [mem_from,set_mem_from]=useState(null);
    const [mem_to,set_mem_to]=useState(null);
    const [mem_on,set_mem_on]=useState(false);

    const [dragIndex,set_dragIndex] = useState(null);

    const [ht,set_ht]=useState({first:40,second:60,add1:30,search1:"flex",filter1:"flex"});

    //entity_featured_url: "https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/6a622d6e-b707-4159-9742-1ad91d4cc620/info/logo/1781768213528-w.jpg"

    useEffect(()=>{
        if(query.get("q") == "create"){
            set_ad(true);
        }
    },[]);

    const handleDrop = (dropIndex)=>{
        const newItems = [...all_data];

        [newItems[dragIndex],newItems[dropIndex]]=[newItems[dropIndex],newItems[dragIndex],];
        set_all_data(newItems);
        set_dragIndex(null);
    }


    
    async function create_business(file,nw){
        set_loading(true);
        await fetch(url,{
            method:"post",
            body: JSON.stringify({
                request_id: Date.now().toString(),
                meta_key: title_name,
                meta_value: "",
               // slug: "string",
               // data_type: "string",
               // created_by:"string",
                title_name: title_name,
                description: description,
              //  entity_type: "nellalink_business",
                entity_featured_url: `https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/${localStorage.getItem("uuid")}/info/logo/${nw}-${file.name}`,
                //entity_featured_url:"https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/6a622d6e-b707-4159-9742-1ad91d4cc620/info/logo/1781952232029-a2.jpg",
                extra_data: {
                 //   key_name1:"value1",
                 //   key_name2: 2,
                    business_address:business_address,
                    contact_email:contact_email,
                    enable_on_portal_listing: true,
                    country_of_registration: country
                },
                status: "enabled",
                //parent_entity_type: "business",
               // parent_entity_uuid: localStorage.getItem("uuid"),
                owned_by: localStorage.getItem("uuid")

                
    // "request_id": "1781335841198",
    // "entity_featured_url": "",
    // "meta_key": "",
    // "meta_value": "",
    // "title_name": "",
    // "description": "",
    // "status": "enabled",
    // "owned_by": "6a622d6e-b707-4159-9742-1ad91d4cc620",
    // "created_by": "",
    // "extra_data": {
    //     "business_address": "",
    //     "contact_email": "",
    //     "enable_on_portal_listing": true,
    //     "country_of_registration": "Nigeria",
    //     "country_of_operation": "us,ng,gh",
    //     "enable_feature_menu": true
    // }

            }),
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
         }).then((res)=> res.json()).then((data)=>{
            if(data.status==true){
                set_loading(false);
                set_get_now(!get_now);
                set_ad(false);
                set_create_s_text("successfully created business");
                set_create_s_top(0);
                setTimeout(() => {
                    set_create_s_top(-10);
                }, 3000);
            }else{
                set_loading(false);
                console.log(data);
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

        async function file_upload(file){
        set_loading(true);
        set_nw(`${Date.now().toString()}`);
        await fetch(`https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/${localStorage.getItem("uuid")}/info/logo/${nw}-${file.name}`,{
            method:"put",
            headers:{
                "Content-Type": file.type,
                "Authorization": "AWS4-HMAC-SHA256 Credential=AKIASZPIVUO5LETSUJWI/20260620/eu-west-1/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date;x-amz-user-agent, Signature=4e418ba57483f375bd0add943985ffd6aa42836ff830cef361bab60ab1de9b70",
                "host": "nellalink.s3.eu-west-1.amazonaws.com",
                "x-amz-content-sha256":"UNSIGNED-PAYLOAD",
                "x-amz-date": "20260620T104352Z",
                "x-amz-user-agent": "aws-sdk-js/2.1692.0 callback",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "origin": "http://localhost:5173/"
            },
            body: file
        }).then(async(res)=>{
            set_loading(false);
            if(!res.ok){
                console.log("Upload failed:    ");
            }else{
                await create_business(file,nw);
                console.log("Upload Successful:    ");
            }
        }).catch((err)=>{
            set_loading(false);
            console.log("Could not make upload request:    ",err);
        })
    }
    

    async function create_business11(){
        set_loading(true);
        await fetch(url,{
            method:"post",
            body: JSON.stringify({
                request_id: Date.now().toString(),
                meta_key: title_name,
                meta_value: "",
                title_name: title_name,
                description: description,
              //  entity_type: "nellalink_business",
               // entity_featured_url: `https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/${localStorage.getItem("uuid")}/info/logo/${nw}-${file.name}`,
                entity_featured_url:"https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/6a622d6e-b707-4159-9742-1ad91d4cc620/info/logo/1781952232029-a2.jpg",
                extra_data: {

                    business_address:business_address,
                    contact_email:contact_email,
                    enable_on_portal_listing: true,
                    country_of_registration: country
                },
                status: "enabled",
                owned_by: localStorage.getItem("uuid")
            }),
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
         }).then((res)=> res.json()).then((data)=>{
            if(data.status==true){
                set_loading(false);
                set_get_now(!get_now);
                set_ad(false);
                set_create_s_text("successfully created business");
                set_create_s_top(0);
                setTimeout(() => {
                    set_create_s_top(-10);
                }, 3000);
            }else{
                set_loading(false);
                console.log(data);
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


    useEffect(()=>{
        async function get_business(){
        set_loading_get_now(true);
            await fetch(get_all_url,{
                method: "get",
                headers:{
                    "Content-Type": "application/json",
                    "x-api-key": api
                }
            }).then((res)=>res.json()).then((data)=>{
                set_loading_get_now(false);
                if(data.status==true){
                    set_all_data(data.data);
                }else{

                }
                console.log("success:   ",data);
            }).catch((err)=>{
                set_loading_get_now(false);
                console.log("SORRY",err);
            });
        }
        get_business();
    },[get_now]);


    return (
        <div style={{width:"100%",height:"80%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"}}>
             <div style={{width:"100%",height:`${ht.first}%`,transition:"all 0.3s linear",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
            <div style={{width:"90%",height:`${ht.add1}%`,transition:"all 0.3s linear",paddingLeft:"3%",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",backgroundColor:"orange",borderRadius:"10px"}} onClick={()=>{
                set_ad(true);
            }}><FaPlus size={30}/><div style={{fontSize:"20px",paddingLeft:"3%"}}>Add Business</div></div>
            <div style={{width:"90%",height:"20%",boxShadow:"0px 0px 3px gray",overflow:"scroll",display:`${ht.search1}`,flexDirection:"row",alignItems:"center",borderRadius:"10px"}}>
                <FaSearch size={20}style={{width:"10%",display:"flex",flexDirection:"row",alignItems:"center",alignItems:"center"}}/>
                <input type="text" value={z_search} placeholder="Search Email, name" style={{backgroundColor:"transparent",height:"100%",border:"0px",width:"90%"}} onChange={(e)=>{
                    set_z_search(e.target.value);
                    if(z_search!=""){
                        set_z_main("");
                        set_z_all("");
                    }else{
                        set_z_main("enabled");
                        set_z_all("disabled");
                    }
                }}/>
            </div>
            <div style={{width:"90%",height:"20%",color:"black",boxShadow:"0px 0px 3px gray",display:`${ht.filter1}`,flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px",position:"relative"}}>
                <div style={{width:"90%",fontWeight:"bold",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{
                    set_q(!q);
                }}>
                    <div>{x}</div>
                    <FaArrowDown/>
                </div>
                {/* {
                q==true?
                <div style={{width:"100%",backgroundColor:"white",paddingTop:"10px",paddingBottom:"10px",position:"absolute",border:"1px solid black",top:"120%",overflow:"scroll"}}>
                    {
                        z.map((item,index)=>{
                            return (
                                <div className="add" style={{width:"100%",paddingLeft:"3px",paddingRight:"3px",paddingTop:"1%",paddingBottom:"1%",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
                                    set_x(item);
                                    set_q(!q);
                                    set_z_search("");
                                    if(index == 0){
                                        set_z_main("enabled");
                                        set_z_all("disabled");
                                    }else if(index==1){
                                        set_z_main("enabled");
                                        set_z_all("enabled");
                                    }else if(index==2){
                                        set_z_main("disabled");
                                        set_z_all("disabled")
                                    }
                                }}>{item}</div>
                            )
                        })
                    }
                </div>:null
                } */}
            </div>

            </div>
            {/* ....... */}
             <div style={{width:"100%",height:`${ht.second}%`,transition:"all 0.3s linear",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}} onScroll={(e)=>{
                if(e.target.scrollTop >= 300){
                    set_ht({
                        first:20,
                        second: 80,
                        add1: 80,
                        search1: "none",
                        filter1: "none"
                    })
                }else{
                    set_ht({
                        first:40,
                        second: 60,
                        add1: 30,
                        search1: "flex",
                        filter1: "flex"
                    })
                }
             }}>
            {
                all_data==null?
                loading_get_now==true?
                <div style={{width:"90%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"-3px 3px 3px gray",borderRadius:"10px"}}>
                <FaDownload size={30}/>
                <div style={{color:"black"}}>Loading all data...</div>
                </div>:
                
            <div style={{width:"90%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"-3px 3px 3px gray",borderRadius:"10px"}}>
                <FaIcicles size={30}/>
                <div style={{color:"black"}}>No menu data available</div>
                <div>Please add new items to see them listed here.</div>
            </div>:
            <div style={{width:"90%",marginTop:"0px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}>
            <div style={{width:"100%",fontSize:"14px",overflow:"hidden",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange"}}>
                <div style={{width:"90%",fontWeight:"bolder",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"orange"}}>
                    <div style={{width:"10%",textAlign:"center"}}><input type="checkbox"/></div>
                    <div style={{width:"10%",textAlign:"end"}}>S/N</div>
                    <div style={{width:"80%",textAlign:"center"}}>Business Name</div>
                </div>
            </div>
            {all_data.map((item,index)=>{
                if((item.status==z_main&&z_main!="") || (item.status==z_all&&z_all!="") || (item.extra_data.contact_email==z_search && z_search!="") || (item.title_name==z_search && z_search!="")){
                return (
                    <div key={index} style={{width:"100%",position:"relative",cursor:"grab",transition:"all 0.1s linear",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",boxShadow:"-3px 3px 3px gray",backgroundColor:"#f9f9f9",borderRadius:"10px"}} draggable onDragOver={(e)=>{
                        e.preventDefault();
                    }} onDragStart={(e)=>{
                        set_dragIndex(index);
                        e.target.style.opacity="0";
                        // const dragImage=document.createElement("div");
                        // dragImage.style.backgroundColor="red";
                        // dragImage.style.color="black";
                        // dragImage.style.paddingTop="20px";
                        // dragImage.style.paddingBottom="20px";
                        // dragImage.style.width="90%";
                        // dragImage.textContent=item.title_name;

                        // document.body.appendChild(dragImage);

                        // e.dataTransfer.setDragImage(dragImage,20,20);
                        // setTimeout(()=>{
                        //     document.body.removeChild(dragImage);
                        // },0);
                    }} onDrop={(e)=>{
                        
                        handleDrop(index);
                    }}
                    onDragEnd={(e)=>{
                        e.target.style.opacity="1";
                    }}
                    >
                        <div style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <div style={{width:"10%"}}><input type="checkbox"/></div>
                            <div style={{width:"10%",textAlign:"center",fontSize:"14px"}}>{index+1}</div>
                            
                            <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                {/* <div style={{paddingRight:"10px",backgroundColor:"rgb(200,200,200)",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",textAlign:"center"}}> */}
                                    {/* <FaImage size={30} color={"gray"} style={{paddingRight:"10px"}}/> */}
                                    <img src={item.entity_featured_url} alt="..." style={{width:"30%",aspectRatio:"3/1"}}/>
                                {/* </div> */}
                                <div style={{width:"80%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                                    <div style={{fontSize:"14px",colo:"black",fontWeight:"bolder"}}>{mem_on?"":`${item.title_name}`}{mem.title_name}{mem_from==index?mem_from:""}{mem_to==index?mem_to:""}</div>
                                    <div style={{fontSize:"12px",fontFamily:"arial"}}>{item.extra_data.contact_email}</div>
                                    <div style={{fontSize:"12px",fontFamily:"arial"}}>{item.extra_data.business_address}</div>
                                    <div style={{paddingLeft:"10px",paddingRight:"10px",marginTop:"10px",backgroundColor:"rgb(200,200,200)",borderRadius:"5px"}}>{item.status}</div>
                                </div>
                                <FaEllipsisVertical size={24} style={{cursor:"pointer"}} onClick={()=>{
                                    if(i==index){
                                        set_i(null);
                                    }else{
                                    set_i(index);
                                    }
                                }}/>
                            </div>
                        </div>
                        {
                            i==index&&
                            <div style={{width:"60%",height:"100%",alignSelf:"self-start",position:"absolute",backgroundColor:"white",boxShadow:"px 0px 10px black",paddingLeft:"10px",paddingRight:"10px",top:"0%",leftt:"0%",display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"start"}}>
                                <div style={{width:"90%",height:"100%",backgroundColor:"white",paddingRight:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                                    <div className="view" style={{height:"30%"}} onClick={()=>{
                                        set_view(true);
                                        set_business_name_v(item.title_name);
                                        set_business_address_v(item.extra_data.business_address);
                                        set_business_email_v(item.extra_data.contact_email);
                                        set_business_desc_v(item.description);
                                        set_business_country_v(item.extra_data.country_of_registration);
                                        set_business_status_v(item.status);
                                        
                                        set_i(null);
                                    }}><BsViewList/> View</div>
                                    <div className="view" style={{height:"30%"}} onClick={()=>{
                                        set_edit(true);
                                        set_business_uuid(item.uuid);
                                        set_business_owned_by(item.owned_by);

                                        set_business_name_v(item.title_name);
                                        set_business_address_v(item.extra_data.business_address);
                                        set_business_email_v(item.extra_data.contact_email);
                                        set_business_desc_v(item.description);
                                        set_business_country_v(item.extra_data.country_of_registration);
                                        set_business_status_v(item.status);
                                        set_short_name(item.meta_key);

                                        set_i(null);
                                        
                                    }}><BiEdit/> Edit</div>
                                    <Link to={"/menu?q=create_menu"} state={item} className="view" style={{textDecoration:"none",height:"30%"}}><MdManageAccounts/> Manage</Link>
                                </div>
                            </div>
                        }
                    </div>
                        
                    
                )}

            })}
            </div>
            }
            {
                q==true?
                <div style={{width:"90%",backgroundColor:"white",paddingTop:"10px",paddingBottom:"10px",position:"absolute",border:"1px solid black",top:"0%",overflow:"scroll"}}>
                    {
                        z.map((item,index)=>{
                            return (
                                <div className="add" style={{width:"100%",paddingLeft:"3px",paddingRight:"3px",paddingTop:"1%",paddingBottom:"1%",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
                                    set_x(item);
                                    set_q(!q);
                                    set_z_search("");
                                    if(index == 0){
                                        set_z_main("enabled");
                                        set_z_all("disabled");
                                    }else if(index==1){
                                        set_z_main("enabled");
                                        set_z_all("enabled");
                                    }else if(index==2){
                                        set_z_main("disabled");
                                        set_z_all("disabled")
                                    }
                                }}>{item}</div>
                            )
                        })
                    }
                </div>:null
                }
            </div>

            {/* ..................................... */}

            {
                ad&&
                <div style={{width:"100%",height:"100%",fontSize:"14px",overflow:"scroll",backgroundColor:"white",position:"absolute",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{width:"90%",position:"relative",marginTop:"20px",marginBottom:"20px",boxShadow:"0px 0px 6px rgb(200,200,200)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <div style={{width:"90%",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}} onDragLeave={(e)=>{
                            e.preventDefault();
                            e.target.style.border="0px dashed transparent";
                        }} onDragOver={(e)=>{
                            e.preventDefault();
                            e.target.style.border="2px dashed orange";
                        }} onDrop={(e)=>{
                            e.preventDefault();
                            if(e.dataTransfer.files[0].type.startsWith("image/")){
                                set_sc(e.dataTransfer.files[0]); 
                            }
                            e.target.style.border="0px dashed transparent";
                        }}>
                        {
                            sc==""?
                            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                <FaUpload size={100} color="gray"/>
                                <div>Drag & Drop Image File here</div>
                            </div>:<img src={URL.createObjectURL(sc)} alt="qwe" style={{width:"100%",height:"100%"}}/>
                        }
                        </div>
                        <label style={{width:"90%",boxShadow:"0px 0px 3px rgb(200,200,200)",cursor:"pointer",backgroundColor:"rgb(200,200,200)",borderRadius:"3px",marginTop:"10px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <FaPlus size={20}/>
                            <div>Upload Image for Business Logo</div>
                            <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                set_sc(e.target.files[0]);
                            }}/>
                        </label>
                        <div style={{width:"90%",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center"}}>Max: 2MB. PNG, JPEG only.</div>
                        <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"100%",marginTop:"10px"}}>Business Name</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaBook size={17}/>
                                <input type="text" value={title_name} placeholder="Smart Business Suite" style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"transparent",border:"0px"}} onChange={(e)=>{
                                    set_title_name(e.target.value);
                                }}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Short Name</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaPerson size={17}/>
                                <input type="text" placeholder="SBS" style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"transparent",border:"0px"}}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Description</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <input type="text" value={description} placeholder="Add description here" style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"transparent",border:"0px"}} onChange={(e)=>{
                                    set_description(e.target.value);
                                }}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Business Address</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaLocationPin size={17}/>
                                <input type="text" value={business_address} placeholder="Abuja" style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"transparent",border:"0px"}} onChange={(e)=>{
                                    set_business_address(e.target.value);
                                }}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Contact Email</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaMessage size={17}/>
                                <input type="text" value={contact_email} placeholder="Business contact email" style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"transparent",border:"0px"}} onChange={(e)=>{
                                    set_contact_email(e.target.value);
                                }}/>
                            </div>

                            <div style={{width:"100%",marginTop:"10px"}}>Country</div>
                            <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",marginBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <FaEarthAfrica size={17}/>
                                <input type="text" value={country} placeholder="" style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"transparent",border:"0px"}} onChange={(e)=>{
                                    set_country(e.target.value);
                                }}/>
                            </div>

                            <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",cursor:"pointer",backgroundColor:"orange",marginTop:"10px",textAlign:"center",borderRadius:"4px",marginBottom:"10px",color:"white",fontSize:"14px"}} onClick={async()=>{
                                if(loading==false){
                                    await create_business11();
                                  //await file_upload(sc);
                                }
                                
                            }}>{loading?"Loading...":"Register"}</div>
                        </div>
                        <div style={{paddingTop:"20px",paddingBottom:"20px",position:"absolute",right:"1%",top:"0%",marginTop:"10px",marginBottom:"20px",textAlign:"center",borderRadius:"4px",marginBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <FaCircleXmark size={30} onClick={()=>{
                            set_ad(false);
                        }}/>
                        </div>
                    
                    </div>
                    <div style={{width:"90%",paddingBottom:"20px",marginTop:"10px",marginBottom:"20px",textAlign:"center",borderRadius:"4px",marginBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",color:"orangered"}}>
                        <FaCaretLeft size={30}/>
                        <div style={{fontSize:"14px"}} onClick={()=>{
                            set_ad(false);
                        }}>Back</div>
                        </div>
                    
                </div>
            }
            {
                view&&
                <Business_view set_view={set_view} business_name_v={business_name_v} business_address_v={business_address_v} business_email_v={business_email_v} business_desc_v={business_desc_v} business_country_v={business_country_v} business_status_v={business_status_v}/>
            }
            {   edit&&
                <Business_edit set_get_now={set_get_now} get_now={get_now} set_edit={set_edit} business_owned_by={business_owned_by} short_name1={short_name} business_uuid={business_uuid} business_name_v={business_name_v} business_address_v={business_address_v} business_email_v={business_email_v} business_desc_v={business_desc_v} business_country_v={business_country_v} business_status_v={business_status_v}/>
            }
            <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"red",color:"honeydew",top:`${create_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.3s linear",textAlign:"center",fontSize:"14px"}}>
                    {/*FAILED TO LOGIN*/} {create_text}
            </div>
            <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"rgba(0, 255, 255, 0.5)",color:"black",top:`${create_s_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"14px"}}>
                    {/* Successful */} {create_s_text}
            </div>
        </div>
    )
}

export default Business;