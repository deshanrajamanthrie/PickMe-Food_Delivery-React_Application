import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <section className={'flex justify-center h-screen py-1 items-center w-screen flex-col'}>
                <section
                    className={'flex justify-center items-center flex-col border border-amber-300 w-auto h-auto p-10 rounded'}>
                    <h1 className={'text-center font-bold text-3xl text-neutral-800'}>Sign Up</h1>
                    <label className="mt-5 block">
                        <span
                            className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Full Name :</span>
                        <input type="text" name="R.M.D .Daniel"
                               className="w-80 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                               placeholder="R.M.D .Daniel"
                        />
                    </label>
                    <label className="mt-5 block">
                        <span
                            className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Nic No :</span>
                        <input type="text" name="nic"
                               className="w-80 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                               placeholder="200108403044"
                        />
                    </label>
                    <label className="mt-5 block">
                        <span
                            className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email:</span>
                        <input type="email" name="email"
                               className="w-80 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                               placeholder="you@example.com"
                        />
                    </label>
                    <label className=" mt-5 block">
                        <span
                            className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
                        <input type="password" name="Password"
                               className="w-80 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                               placeholder="you@example.com"
                        />
                    </label>
                    <button className={'m-5 rounded border w-[150px] bg-orange-500 p-2 text-white bottom-2.5'}>Login
                        Here
                    </button>
                    <div className={'font-mono  text-center mt-5'}>
                        Do not Have an Account <span
                        className={'underline cursor-pointer text-blue-700'}><Link
                        to={'/login'}>Sign In Now</Link></span>

                    </div>
                </section>
            </section>


        </>
    )


}
export default SignUp;