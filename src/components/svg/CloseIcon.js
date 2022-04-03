const CloseIcon = (Props)=>{
    return(
        <svg style={{height:Props.height,width:Props.width,transform:"scale(.9)"}}  xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7068 10.0001L17.947 4.75997C18.6945 4.01247 18.6945 2.80056 17.947 2.05306C17.1994 1.30556 15.9876 1.30556 15.24 2.05306L9.99988 7.29321L4.75973 2.05306C4.01223 1.30556 2.80031 1.30556 2.05281 2.05306C1.30531 2.80056 1.30531 4.01247 2.05281 4.75997L7.29297 10.0001L2.05281 15.2403C1.30531 15.9878 1.30531 17.1997 2.05281 17.9472C2.42656 18.3209 2.91641 18.5078 3.40625 18.5078C3.89609 18.5078 4.38598 18.3209 4.75969 17.9472L9.99988 12.707L15.24 17.9472C15.6138 18.3209 16.1036 18.5078 16.5935 18.5078C17.0833 18.5078 17.5732 18.3209 17.9469 17.9472C18.6944 17.1997 18.6944 15.9878 17.9469 15.2403L12.7068 10.0001Z" fill={Props.color ? Props.color : "black"}/>
        </svg>
    )
}
export default CloseIcon;

