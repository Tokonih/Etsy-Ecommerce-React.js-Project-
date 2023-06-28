function Btn({bgcolor, padding, color, border, width, height, clickFunc,title,borderRadius,margin
   }){
    const Btnstyle={
        background:bgcolor,
        padding:padding,
        color:color,
        border: border,
        outline:"none",
        borderRadius:borderRadius ,
        width:width,
        height:height,
        cursor:"pointer",
        margin:margin,
    }
    return(
        <button style={Btnstyle} onClick={clickFunc}>{title}</button>
    )
}
export default Btn;