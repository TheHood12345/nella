import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function Menu_edit(){
    const [im,set_im]=useState("");
    const [im1,set_im1]=useState("");
    const [p,set_p]=useState(false);
    const [f,set_f]=useState(false);
    const [b,set_b]=useState(false);
    
    return (
        <div style={{width:"100%",height:"100%",fontSize:"16px",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"5px",paddingBottom:"5px"}}>
                <img src="" alt="..." style={{width:"90%",aspectRatio:"4/1",alignSelf:"center"}}/>
                <div>{"name"}</div>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Name</div>
                <input type="text" placeholder="Enter menu name" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Description</div>
                <textarea type="text" placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}></textarea>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Category</div>
                <input type="text" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Primary Color</div>
                <input type="color" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%",border:"4px solid black",borderRadius:"10px"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Status</div>
                <select type="color" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}>
                    <option>Enable</option>
                    <option>Disable</option>
                </select>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
               Support Information
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Support Tab Title</div>
                <input type="text" placeholder="e.g. Need Help?" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Navigation Button Text</div>
                <input type="text" placeholder="e.g. Contact Us" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Support Tab Description</div>
                <textarea type="text" placeholder="Enter support info with HTML tags if needed" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}></textarea>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Checkout Payment Providers
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px"}}>
                Payment Providers
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"10px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_p(!p);
                }}/>
                <div>Paystack</div>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"10px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_f(!f);
                }}/>
                <div>Flutterwave</div>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"10px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_b(!b);
                }}/>
                <div>Bank Transfer</div>
            </div>

            {
                p&&
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Paystack</div>
                    <input type="text" placeholder="Title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                    <input type="text" placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                    <input type="text" placeholder="Fee" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>
            }
            {
                f&&
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Flutterwave</div>
                    <input type="text" placeholder="Title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                    <input type="text" placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                    <input type="text" placeholder="Fee" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>
            }
            {
                b&&
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Bank Transfer</div>
                    <input type="text" placeholder="Title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                    <input type="text" placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>
            }

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Contact Information
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Contact Email</div>
                <input type="text" placeholder="example@gmail.com" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Contact Address</div>
                <input type="text" placeholder="Add contact address here" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Phone Number</div>
                <input type="text" placeholder="080x xxx xxxx" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Wallet Currency</div>
                <select type="color" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}>
                    <option>Nigerian Naira (NGN)</option>
                    <option>US DOLLAR (USD)</option>
                    <option>EURO (EUR)</option>
                    <option>Ghanaian Cedi (GHS)</option>
                </select>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Currency Symbol</div>
                <input type="text" disabled placeholder="..." style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(240,240,240)",paddingTop:"10px",paddingBottom:"10px",marginTop:"20px"}} onDragLeave={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="0px dashed transparent";
                                    }} onDragOver={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="2px dashed orange";
                                    }} onDrop={(e)=>{
                                        e.preventDefault();
                                        if(e.dataTransfer.files[0].type.startsWith("image/")){
                                            set_im(e.dataTransfer.files[0]); 
                                        }
                                        e.target.style.border="0px dashed transparent";
                        }}>
                            {
                                im==""?
                                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                                <FaUpload size={100} color="gray"/>
                                                                <div>Drag & Drop Image File here</div>
                                </div>:
                                <img src={URL.createObjectURL(im)} alt="image" style={{width:"90%",aspectRatio:"3/1"}}/>
                            }
                            
                        </div>
                        <div style={{marginTop:"5px"}}>OR</div>
                        <label style={{width:"90%",fontSize:"12px",marginTop:"5px",paddingTop:"13px",paddingBottom:"13px",cursor:"pointer",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}><FaPlus/> Click to upload business logo
                                <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                    set_im(e.target.files[0]);
                                }}/>
                        </label>

            <div style={{width:"90%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center"}}>
                <FaUpload/> Save
            </div>

            <div style={{width:"90%",display:"flex",fontFamily:"arial",flexDirection:"column",marginTop:"20px",boxShadow:"0px 0px 3px black",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{color:"black"}}>No menu item data available</div>
                <div style={{color:"gray",width:"90%"}}>Please add new items to seee them listed here.</div>
            </div>

            <div style={{width:"90%",display:"flex",fontFamily:"arial",flexDirection:"column",marginTop:"20px",marginBottom:"20px",boxShadow:"0px 0px 3px black",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Title</div>
                    <input type="text" placeholder="Enter menu title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Description</div>
                    <input type="text" placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Unit Price Amount</div>
                    <input type="text" placeholder="Enter price" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Max Quantity Per Order</div>
                    <input type="text" placeholder="0" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Minimun Quantity Per Order</div>
                    <input type="text" placeholder="0" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Choose Category</div>
                    <select type="color" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}>
                        <option>Enable</option>
                        <option>Disable</option>
                    </select>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Tag</div>
                    <input type="text" placeholder="Enter tag" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Status</div>
                    <select type="color" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}>
                        <option>Enable</option>
                        <option>Disable</option>
                    </select>
                </div>

                {/* -----------------image------------ */}

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(240,240,240)",paddingTop:"10px",paddingBottom:"10px",marginTop:"20px"}} onDragLeave={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="0px dashed transparent";
                                    }} onDragOver={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="2px dashed orange";
                                    }} onDrop={(e)=>{
                                        e.preventDefault();
                                        if(e.dataTransfer.files[0].type.startsWith("image/")){
                                            set_im1(e.dataTransfer.files[0]); 
                                        }
                                        e.target.style.border="0px dashed transparent";
                        }}>
                            {
                                im1==""?
                                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                                <FaUpload size={100} color="gray"/>
                                                                <div>Drag & Drop Image File here</div>
                                </div>:
                                <img src={URL.createObjectURL(im1)} alt="image" style={{width:"90%",aspectRatio:"3/1"}}/>
                            }
                            
                        </div>
                        <div style={{marginTop:"5px"}}>OR</div>
                        <label style={{width:"90%",fontSize:"12px",marginTop:"5px",paddingTop:"17px",paddingBottom:"17px",cursor:"pointer",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}><FaPlus/> Click to upload business logo
                                <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                    set_im1(e.target.files[0]);
                                }}/>
                        </label>
            
            <div style={{width:"90%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px",textAlign:"center"}}>
                <div style={{width:"45%",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"gray",color:"white",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={()=>{

                }}>
                    Cancel
                </div>
            
                <div style={{width:"45%",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={()=>{

                }}>
                    <FaUpload/> Save
                </div>
            
            </div>

                {/* ------------------item end---------------- */}

                
            
            </div>
            <div style={{width:"90%",marginBottom:"20px",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={()=>{

                }}>
                    <FaPlus/> Add menu item
                </div>
            

        </div>
    )
}

export default Menu_edit;