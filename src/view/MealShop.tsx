import {Fragment} from "react";
import TopImage from "../components/layout/TopImage.tsx";

const MealShop = () => {
    return (
        <Fragment>
            <section className={'flex justify-start h-[200vh] py-1 items-start w-screen flex-col'}>
                <TopImage backgroundImage={'img-home-food'} height={'h-1/5'}>Market & Shops</TopImage>
                <div className={'flex justify-between items-center p-12 px-28'}>
                    <p className={'w-1/2 font-light text-2xl leading-10'}>As we embark on uncovering technology
                        solutions for mobility constraints,
                        PickMe Market is another flagship venture of PickMe.
                    </p>
                </div>
                {/*===============================*/}

                <section
                    className={'gap-y-4 gap-x-7 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 relative m-auto'}>
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