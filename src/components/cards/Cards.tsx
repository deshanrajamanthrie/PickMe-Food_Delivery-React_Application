import {Fragment} from "react";

interface Props {
    image: string,
    callBack: () => void

}


const Cards = (props: Props) => {
    return (
        <Fragment>
            <div className={'w-72 p-2 border-solid border-2 flex flex-col bg-slate-800 rounded-md'}>
                <img className={'w-auto rounded'} src="src/assets/KFC.PNG" alt="kfc"/>
                <button
                    className={'mt-2 rounded-md w-20 p-2 text-white bg-neutral-950 shadow-zinc-800  border-2 border-amber-50'}
                    onClick={props.callBack}>GO
                </button>
            </div>
        </Fragment>
    )
}
export default Cards;