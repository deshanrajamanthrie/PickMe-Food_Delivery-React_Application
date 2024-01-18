import {Fragment} from "react";
import TopImage from "../components/layout/TopImage.tsx";
import Button from "../components/input/Button.tsx";
import Input from "../components/input/input.tsx";


const Order = () => {
    return (
        <Fragment>
            <section className={'flex justify-start h-[220vh] py-1 items-start w-screen flex-col'}>
                <TopImage height={'h-2/6'} backgroundImage={'img-order'}>Place Your Order</TopImage>

                {/*===============================*/}
                <section className={'flex justify-start items-center m-10 h-5/6 flex-col'}>
                    <p className={'text-sm text-justify'}>Food delivery is a service that allows customers to order food
                        from a variety of restaurants or food establishments and have it delivered to their doorstep.
                        This convenience is typically facilitated through online platforms
                        or mobile apps, where customers
                        can browse menus, place orders, and make payments digitally. Food delivery services have gained
                        popularity for their time-saving and hassle-free nature, providing people with the option to
                        enjoy a wide range of cuisines
                        from the comfort of their homes or workplaces. Delivery can be facilitated by the restaurants
                        themselves or third-party delivery platforms, creating a seamless and efficient way for
                        consumers to access their favorite
                        meals without the need to dine out.</p>

                    <h1 className={'mt-10 text-4xl font-sans font-semibold text-zinc-700'}>Grab Your Meal Shop</h1>
                    <section
                        className={'mt-8 flex items-center justify-between p-5 flex-row border-solid order-border border-amber-400 w-[90vw]'}>
                        <select className="w-72 h-10 order-border border-amber-400"
                                aria-label="Default select example">
                            <option selected>Open This Select Menu</option>
                            <option value="Kalutara">Kalutara</option>
                            <option value="Gale">Galle</option>
                            <option value="Colombo">Colombo</option>
                            <option value="NuwaraEliya">Nuwara Eliya</option>
                            <option value="Kandy">Kandy</option>
                            <option value="Anuradapura">Anuradapura</option>
                            <option value="Trinco">Trincomalee</option>
                        </select>
                        <Button color={'bg-amber-500'} size={'search-btn-shop'}
                                callBack={() => alert("Btn is Clicked")}>Search</Button>
                        <Input type={'number'} name={'contact'} placeHolder={'Phone Number'}></Input>
                        <Input type={'email'} name={'Email'} placeHolder={'Your E mail'}></Input>
                        <Button color={'bg-green-600'} size={'w-[150px]'} optional={'m-5'}
                                callBack={() => alert("Enter Btn is Clicked")}>Enter</Button>
                    </section>
                    {/*Load Shops*/}
                    <section
                        className={'mt-12 h-5/6 w-[90vw] order-border border-amber-950 gap-y-4 gap-x-14 grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 relative m-auto'}>
                        <div className={'w-96 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                            <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                            <button
                                className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                            </button>
                        </div>
                        <div className={'w-96 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                            <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                            <button
                                className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                            </button>
                        </div>
                        <div className={'w-96 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                            <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                            <button
                                className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                            </button>
                        </div>
                        <div className={'w-96 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                            <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                            <button
                                className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                            </button>
                        </div>
                        <div className={'w-96 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                            <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                            <button
                                className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                            </button>
                        </div>
                        <div className={'w-96 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                            <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                            <button
                                className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}>Go
                            </button>
                        </div>
                    </section>
                </section>
            </section>

        </Fragment>
    )

}
export default Order;