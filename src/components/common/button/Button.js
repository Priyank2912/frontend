import './Button.scss';
const Button = (Props)=>{
    return(
        <button className="formBtn" onClick={(e)=>{Props.onClick(e)}} disabled={Props.disabled?Props.disabled:false}>
            {Props.children}
        </button>
    )   
}
export default Button;