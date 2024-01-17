import  {Fragment} from "react";
import {Link} from "react-router-dom";
import Input from "../components/input/input.tsx";
import Button from "../components/input/Button.tsx";


const LoginForm = () => {

    return (
        <Fragment>
            <section className={'flex justify-center h-screen py-1 items-center w-screen flex-col'}>
                <section
                    className={'flex justify-center items-center flex-col border border-amber-300 w-auto h-auto p-10 rounded shadow-lg'}>
                    <h1 className={'text-center font-bold text-3xl text-neutral-800'}>Login</h1>
                    <label className="block">
                        <Input type={'email'} label={'Email'} name={'email'}
                               placeHolder={'you@example.com'}></Input> {/*Text Field Component*/}
                    </label>
                    <label className="mt-5 block">
                        <Input type={'password'} label={'Password'} name={'Password'}
                               placeHolder={'Enter Your Password'}
                        ></Input> {/*Text Field Component*/}
                    </label>
                    <Button color={'bg-orange-500'} size={'w-[150px]'}    /*Use Button Component*/
                            callBack={() =>alert("Hello Login")} optional={'m-5 p-2 mt-5'}><Link to={'/order'}>Login</Link></Button>
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