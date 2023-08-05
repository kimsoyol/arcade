import {Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import { IconContext } from "react-icons";
import {useEffect} from "react";


function GoBack() {
    const handleBg = ()=> {
        document.body.style.background = 'rgb(21, 41, 69)'
    }

    return (
        <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
        <Link to='/' onClick={() => handleBg()}>
            <div className="top-0 left-0 absolute">
            <AiOutlineHome />
            </div>

        </Link>
        </IconContext.Provider>
    )
}

export default GoBack