import { useState } from "react";
import Link from "../link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navber = () => {
    const [open, setOpen] = useState(false)
    
    const routes = [
        {"id":1,"path":"/home","name":"Home"},
        {"id":2,"path":"/about","name":"About"},
        { "id":3,"path":"/services","name":"Services"},
        {"id":4,"path":"/contact","name":"Contact"},
        {"id":5,"path":"/blog","name":"Blog"}
    ]

    return (
        <nav className="bg-yellow-200 p-4">
            <div onClick={() => setOpen(!open)} className="text-xl md:hidden">
                {
                    open === true ? <IoClose />: <IoMdMenu />
                }
            
            </div>
            <ul className={`${open ? 'top-20' : '-top-36'}  md:flex duration-1000 bg-yellow-200 p-2 rounded-md absolute md:static`}>
                {
                    routes.map(route => <Link key = {route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navber;