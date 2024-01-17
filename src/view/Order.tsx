import {Fragment} from "react";
import TopImage from "../components/layout/TopImage.tsx";


const Order = () => {
    return (
        <Fragment>
            <section className={'flex justify-start h-[300vh] py-1 items-start w-screen flex-col'}>
               <TopImage height={'h-1/6'} backgroundImage={'img-order'}>Place Your Order</TopImage>

                {/*===============================*/}
                <section className={'flex'}>



                </section>
            </section>

        </Fragment>
    )

}
export default Order;