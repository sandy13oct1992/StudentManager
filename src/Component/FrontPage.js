import { Button } from "bootstrap";

const FrontPage = (props) => {

    return(
        <div>
            <h1> Student Manager</h1>
             <h4>All Student</h4>
             <button onClick={props.onShow}>ADD NEW STUDENT</button>
        </div>
    )
}
export default FrontPage;