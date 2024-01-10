import {Link} from "react-router-dom";
import {Fragment} from "react";

function Header() {
    /* let listGroup =
         [<Link to={"/"}>Home </Link>, <Link to={"/about"}>About</Link>, "Meal Shop", "Riders", "Login"];
 */
    return (
        <Fragment>
            <header>
                <nav className={'bg-white w-full flex justify-between items-center p-4 shadow h-1/4'}>
                    <img src="src/assets/pickMe.PNG" alt="pickMe-Logo" className={'w-[100px]'}/>
                    <ul className={'flex gap-[5vw] pr-10 text-sm cursor-pointer'}>
                        <li><Link to={'/'}>Home </Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li>Meal Shop</li>
                        <li>Riders</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )


}

export default Header;