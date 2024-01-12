import {Link} from "react-router-dom";
import Input from "../components/input/input.tsx";

const SignUp = () => {
    return (
        <>
            <section className={'flex justify-center h-screen py-1 items-center w-screen flex-col'}>
                <section
                    className={'flex justify-center items-center flex-col border border-amber-300 w-auto h-auto p-10 rounded'}>
                    <h1 className={'text-center font-bold text-3xl text-neutral-800'}>Sign Up</h1>

                    <label className={"block mt-5"}>
                        <Input label={'Full Name :'} name={'fullName'} placeHolder={'A.K.Daniel'} type={'text'}></Input>
                    </label>

                    <label className={"block mt-5"}>
                        <Input label={'Nic No'} name={'name'} type={'text'} placeHolder={'20010840...'}></Input>
                    </label>

                    <label className={"block mt-5"}>
                        <Input label={'Email'} name={'email'} type={'email'}
                               placeHolder={'you@example.com'}></Input>
                    </label>

                    <label className={"block mt-5"}>
                        <Input label={'Password'} name={'password'} type={'password'}
                               placeHolder={'Write Your New Password'}></Input>
                    </label>
                    <button
                        className={'m-5 rounded border w-[150px] bg-orange-500 p-2 text-white bottom-2.5'}>Login
                        Here
                    </button>
                    <div className={'font-mono  text-center mt-5'}>
                        Already Have an Account <span
                        className={'underline cursor-pointer text-blue-700'}><Link
                        to={'/login'}>Sign In Now</Link></span>

                    </div>
                </section>
            </section>


        </>
    )


}
export default SignUp;