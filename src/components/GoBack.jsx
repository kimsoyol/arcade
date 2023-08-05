import {Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import { IconContext } from "react-icons";


function GoBack() {

    return (
        <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
        <Link to='/'>
            <div className="top-0 left-0">
            <AiOutlineHome />
            </div>

        </Link>
        </IconContext.Provider>
    )
}

export default GoBack