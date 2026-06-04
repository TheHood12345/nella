import P_landing from "./phone/p_landing";

function P_Home(){
    return (
        <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white"}}>
            {/* PHONE */}
            <div id="p_phone" style={{width:"100%",height:"100%",flexDirection:"column",alignItems:"center"}}>
                <P_landing/>
            </div>
            {/* LAPTOP */}
            <div id="p_laptop" style={{width:"100%",height:"100%",flexDirection:"column",alignItems:"center",backgroundColor:"red"}}></div>
        </div>
    );
}

export default P_Home;