import React from "react";
import About from "./view/about.tsx";
import Home from "./view/home.tsx";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/layout/header.tsx";

class App extends React.Component<any, any> {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div>

                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App
