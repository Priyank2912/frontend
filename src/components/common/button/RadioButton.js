import './radioButton.scss';
// onClick
// text
// isSelected
const RadioButton = (Props)=>{
    return(
        <button className="radioButton" style={{background:Props.isSelected?"#369FFF":'white'}} onClick={()=>{Props.onClick()}}>
            <div className="radioArea">
                <div className="radioBorder" style={{border:Props.isSelected?"1px solid white":"1px solid #369FFF"}}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="white"/>
                    </svg>

                </div>
            </div>
            <div className="text" style={{color:Props.isSelected?'white':'#369FFF'}}>
                <span>{Props.text}</span>
            </div>
        </button>
    )
}
export default RadioButton;