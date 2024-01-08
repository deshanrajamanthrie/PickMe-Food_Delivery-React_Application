import React from "react";

class Header extends React.Component<any, any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined  {
        return (
            <header>
                <nav className={'bg-white w-full flex justify-between items-center p-4 shadow h-1/4'}>
                    <img src="src/assets/pickMe.PNG" alt="pickMe-Logo" className={'w-[100px]'}/>
                    <ol className={'flex gap-[5vw] pr-10 text-sm cursor-pointer'}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Meal Shop</li>
                        <li>Riders</li>
                        <li>Login</li>
                    </ol>
                </nav>
            </header>
        );
    }

}

export default Header;