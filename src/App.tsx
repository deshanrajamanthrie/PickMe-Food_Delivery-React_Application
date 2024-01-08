import React from "react";
import Header from "./components/layout/header.tsx";
import About from "./view/about.tsx";
import Home from "./view/home.tsx";
import './App.css'

class App extends React.Component<any, any> {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined  {
        return (
            <div>
                <Header/>
                <Home/>
                <About/>
            </div>
        );
    }
}

export default App
