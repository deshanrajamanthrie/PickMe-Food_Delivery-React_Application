import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Input from "../components/input/input.tsx";


const LoginForm = () => {

    return (
        <Fragment>
            <section className={'flex justify-center h-screen py-1 items-center w-screen flex-col'}>
                <section
                    className={'flex justify-center items-center flex-col border border-amber-300 w-auto h-auto p-10 rounded'}>
                    <h1 className={'text-center font-bold text-3xl text-neutral-800'}>Login</h1>
                    <label className="block">
                        <Input type={'email'} label={'Email'} name={'email'} placeHolder={'you@example.com'}></Input>
                    </label>
                    <label className="mt-5 block">
                        <Input type={'password'} label={'Password'} name={'Password'}
                               placeHolder={'Enter Your Password'}></Input>
                    </label>
                    <button className={'m-5 rounded border w-[150px] bg-orange-500 p-2 text-white bottom-2.5'}>Login
                        Here
                    </button>
                    <div className={'font-mono  text-center mt-5'}>
                        Do not Have an Account <span
                        className={'underline cursor-pointer text-blue-700'}><Link
                        to={'/signUp'}>Sign Up Now</Link></span>
                    </div>
                </section>
            </section>
        </Fragment>
    )


}

export default LoginForm;