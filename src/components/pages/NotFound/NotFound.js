import { Link } from "react-router-dom";
import Button from "../../common/button/Button"
import './NotFound.scss';
const NotFound = ()=>{
    return(
        <div className="error_container">
            <div className="container">
                <h1>404</h1>
                <h2>Page not Found</h2>
                <h4>Click Bellow button for go to home</h4>
                <Link to="/">
                    <Button onClick={()=>{}}>
                        Back to home
                    </Button>
                </Link>
                
            </div>
        </div>
    )
}
export default NotFound;