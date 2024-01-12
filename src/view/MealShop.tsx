import {Fragment} from "react";

const MealShop = () => {
    return (
        <Fragment>
            <section className={'flex justify-start h-[150vh] py-1 items-start w-screen flex-col'}>
                <div className={'flex w-screen items-center justify-center img-home h-1/5 flex-col'}>
                    <h1 className={'font-medium text-8xl'}>Pick<strong className={'text-yellow-600'}>Me</strong></h1>
                    <p className={' font-medium text-2xl pl-64 text-center'}>Food</p>
                </div>
                <div className={'flex justify-between items-center p-12 px-28'}>
                    <p className={'w-1/2 font-light text-2xl leading-10'}>As we embark on uncovering technology
                        solutions for mobility constraints,
                        PickMe Market is another flagship venture of PickMe.
                    </p>
                </div>
                {/*===============================*/}

                <section
                    className={'gap-y-5 gap-x-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 relative m-auto'}>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                    <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                        <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                        <button
                            className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                        </button>
                    </div>
                </section>
            </section>
        </Fragment>
    )


}
export default MealShop;