import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar"
import {motion} from "framer-motion";
const Navbar = () =>{
return(
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>My Portfolio</motion.span>
            <div className="social">
                <a href="instagram"><img src="/image/instagram.png" alt="" /></a>
                <a href="Linkdin"><img src="/image/linkedin.png" alt="" /></a>
                <a href="GitHub"><img src="/image/github.png" alt="" style={{ filter: 'invert(1)' }} /></a>
                <a href="LeetCode"><img src="/image/leetcode.png" alt="" /></a>
            </div>

        </div>
    </div>
)
};

export default Navbar;