import React from "react";

class Home extends React.Component<any, any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <section className={'w-screen flex justify-start py-1 items-start h-dvh flex-col'}>
                <div className={'flex w-screen items-center justify-center img-home h-2/5 flex-col'}>
                    <h1 className={'font-medium text-8xl'}>Pick<strong className={'text-yellow-600'}>Me</strong></h1>
                    <p className={' font-medium text-2xl pl-64 text-center'}>Food</p>
                </div>
                <div className={'flex justify-between items-center p-12 px-28'}>
                    <p className={'w-1/2 font-light text-3xl leading-10'}>PickMe food is the leading food delivery solution in Sri Lanka that
                        is seamlessly integrated into the busy lifestyle of everyday people.
                    </p>
                  {/*  <img className={'w-[10vw]'} src="src/assets/food-delivery.png" alt="Alt"/>*/}
                </div>

            </section>


        );
    }


}

export default Home;