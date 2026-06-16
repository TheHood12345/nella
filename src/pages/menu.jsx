import { useState } from "react";
import { FaArrowDown, FaDollarSign, FaEuroSign, FaIcicles, FaPlus, FaSearch } from "react-icons/fa";
import { FaCediSign, FaCircleXmark, FaNairaSign, FaX } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function Menu(){

    const url="https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu"
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";

    const z = ["Filter Enabled, Disabled","Enabled","Disabled"];
    const [x,set_x]=useState("Filter Enabled");
    const [q,set_q]=useState(false);
    const [show_menu,set_show_menu] = useState("");

    const [title,set_title] = useState("");
    const [description,set_description] = useState("");
    const [slug,set_slug] = useState("");
    const [currency,set_currency] = useState("Nigerian Naira (NGN)");
    const [category,set_category]=useState("");
    const [s_title,set_s_title]=useState("");
    const [n_tx,set_n_tx]=useState("");
    const [t_desc,set_t_desc]=useState("");
    const [con_email,set_con_email]=useState(localStorage.getItem("email"));
    const [con_address,set_con_address]=useState("");
    const [phone_num,set_phone_num]=useState("");

    const [loading,set_loading]=useState(false);

    const [create_text,set_create_text] = useState("Operation failed");
    const [create_top,set_create_top] = useState(-10);
    const [create_s_text,set_create_s_text] = useState("Success");
    const [create_s_top,set_create_s_top] = useState(-10);

    const {state} = useLocation();

        async function create_menu(){
        set_loading(true);
        await fetch(url,{
            method:"post",
            body: JSON.stringify({
                slug: slug,
                request_id: Date.now().toString(),
                entity_featured_url: "",
                meta_key: title,
                meta_value: "untitled-2026-06-13",
                title_name: title,
                description: description,
                status: "enabled",
                created_by: "",
                extra_data: {
                    menu_base_wallet_ticker: "",
                    menu_featured_categories: [
                        "delivery"
                        ],
                    menu_base_wallet_ticker_symbol: "",
                    menu_primary_color: "",
                    enable_dark_mode: true,
                    support_tab: {
                    title: s_title,
                    content: "",
                    nav_button_text: n_tx,
                    show_ring_feature_on_support_page: true
                    },
                    contact_info: {
                        email_address: con_email,
                        mobile_number: phone_num,
                        address: con_address,
                        show_contact_info_on_support_page: true
                    },
                    menu_checkout_payments_providers: {
                        paystack: {
                            title: "",
                            description: "",
                            fee: "",
                            fee_max_amount: 2000
                        },
                        flutterwave: {
                            title: "",
                            description: "",
                            fee: "",
                            fee_max_amount: 2000
                        },
                        bank_transfer: {
                            title: "",
                            description: ""
                        }
                    },
                    parent_entity_type: "nellalink_business",
                    parent_entity_uuid: "",
                    owned_by: localStorage.getItem("uuid"),
                    data_type: null,
                    status: "enabled"
                },
                parent_entity_type: "nellalink_business"
            }),
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
         }).then((res)=> res.json()).then((data)=>{
            if(data.status==true){
                set_loading(false);
                // set_ad(false);
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


    return (
        <div style={{width:"100%",height:"80%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"}}>
            <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",cursor:"pointer",paddingLeft:"3%",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",backgroundColor:"orange",borderRadius:"10px",marginTop:"20px"}} onClick={()=>{
                set_show_menu(true);
            }}><FaPlus size={30}/><div style={{fontSize:"20px",paddingLeft:"3%"}}>Add Menu</div></div>
            <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",marginTop:"20px",boxShadow:"0px 0px 3px gray",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center",borderRadius:"10px"}}>
                <FaSearch size={20} style={{width:"10%",display:"flex",flexDirection:"row",alignItems:"center",alignItems:"center"}}/>
                <input type="text" placeholder="Search Email, name" style={{backgroundColor:"transparent",paddingTop:"1%",paddingBottom:"1%",border:"0px",width:"90%"}}/>
            </div>
            <div style={{width:"90%",paddingTop:"10px",color:"black",paddingBottom:"10px",marginTop:"20px",boxShadow:"0px 0px 3px gray",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px",position:"relative"}}>
                <div style={{width:"90%",paddingTop:"1%",fontWeight:"bold",paddingBottom:"1%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{
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
                show_menu&&
                <div style={{width:"100%",height:"100%",top:"0%",left:"0%",backgroundColor:"rgba(240,240,240,0.9)",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",height:"90%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                            <div style={{fontSize:"15px"}}>Add Menu</div><div></div>
                            <FaCircleXmark size={20} style={{cursor:"pointer"}} onClick={()=>{
                                set_show_menu(false);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Title</div>
                            <input text="text" value={title} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Enter menu title" onChange={(e)=>{
                                set_title(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Description</div>
                            <input text="text" value={description} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Enter description" onChange={(e)=>{
                                set_description(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Menu Link</div>
                            <div style={{width:"90%"}}>https://business.nellalink.com/app/menu/</div>
                            <input text="text" value={slug} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="your-slug" onChange={(e)=>{
                                set_slug(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Wallet Ticker</div>
                            <select text="text" value={currency} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Select a currency" onChange={(e)=>{
                                set_slug(e.target.value);
                            }} onChange={(e)=>{
                                set_currency(e.target.value);
                            }}>
                                {/* <option>Select a currency</option> */}
                                <option>Nigerian Naira (NGN)</option>
                                <option>US Dollar (USD)</option>
                                <option>EURO (EUR)</option>
                                <option>Ghanaian Cedi (GHS)</option>
                            </select>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Ticker Symbol</div>
                            <div style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} onChange={(e)=>{
                                set_description(e.target.value);
                            }}>{currency=="Nigerian Naira (NGN)"?<FaNairaSign/>:currency=="US Dollar (USD)"?<FaDollarSign/>:currency=="EURO (EUR)"?<FaEuroSign/>:currency=="Ghanaian Cedi (GHS)"?<FaCediSign/>:null}</div>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>categories for Menu Items</div>
                            <input text="text" value={category} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Add category..." onChange={(e)=>{
                                set_category(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Primary color</div>
                            {/* <input text="text" value={category} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Add category..." onChange={(e)=>{
                                set_category(e.target.value);
                            }}/> */}
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"orange",color:"white"}}>
                            <div style={{width:"90%"}}>SUPPORT INFORMATION</div>
                            {/* <input text="text" value={description} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Enter description" onChange={(e)=>{
                                set_description(e.target.value);
                            }}/> */}
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Support Tab Title</div>
                            <input text="text" value={s_title} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="e.g. Need Help?" onChange={(e)=>{
                                set_s_title(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Navigation Button Text</div>
                            <input text="text" value={n_tx} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="e.g. Contact Us" onChange={(e)=>{
                                set_n_tx(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Support Tab Description</div>
                            <input text="text" value={t_desc} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Enter support info with HTML tags if needed" onChange={(e)=>{
                                set_t_desc(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"orange",color:"white"}}>
                            <div style={{width:"90%"}}>Contact Information</div>
                            {/* <input text="text" value={n_tx} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Enter support info with HTML tags if needed" onChange={(e)=>{
                                set_n_tx(e.target.value);
                            }}/> */}
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Contact Email</div>
                            <input text="text" value={con_email} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Add email here" onChange={(e)=>{
                                set_con_email(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Contact Address</div>
                            <input text="text" value={con_address} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Add address here" onChange={(e)=>{
                                set_con_address(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Phone Number</div>
                            <input text="text" value={phone_num} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="080x xxx xxxx" onChange={(e)=>{
                                set_phone_num(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"orange",color:"white"}}>
                            <div style={{width:"90%"}}>Checkout Payment Providers</div>
                            {/* <input text="text" value={n_tx} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Enter support info with HTML tags if needed" onChange={(e)=>{
                                set_n_tx(e.target.value);
                            }}/> */}
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Payment Providers</div>
                            {/* <input text="text" value={n_tx} style={{width:"85%",paddingTop:"10px",paddingBottom:"10px"}} placeholder="Enter support info with HTML tags if needed" onChange={(e)=>{
                                set_n_tx(e.target.value);
                            }}/> */}
                        </div>
                        <div style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <input type="checkbox"/>
                                <div>Paystack</div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <input type="checkbox"/>
                                <div>Flutterwave</div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <input type="checkbox"/>
                                <div>Bank Transfer</div>
                            </div>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                            <div style={{width:"40%",textAlign:"center",cursor:"pointer",backgroundColor:"rgb(200,200,200)",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px"}} onClick={()=>{
                                set_show_menu(false);
                            }}>Cancel</div>
                            <div style={{width:"40%",textAlign:"center",cursor:"pointer",backgroundColor:"orange",color:"white",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px"}} onClick={async()=>{
                                if(loading==false){
                                    await create_menu();
                                }
                                
                            }}>{loading==false?"Save":"Loading..."}</div>
                        </div>
                    </div>

                    <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"red",color:"honeydew",top:`${create_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.3s linear",textAlign:"center",fontSize:"14px"}}>
                        {/*FAILED TO LOGIN*/} {create_text}
                    </div>
                    <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"rgba(0, 255, 255, 0.5)",color:"black",top:`${create_s_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"14px"}}>
                        {/* Successful */} {create_s_text}
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default Menu;