import {Fragment} from "react";

interface Props {
    type: string
    name?: string
    placeHolder ?: string
    label: string
}


const TextFields = (props: Props) => {


    return (
        <Fragment>
                <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">{props.label}</span>
                <input type={props.type} name={props.name}
                       className="w-80 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                       placeholder={props.placeHolder}
                />
        </Fragment>
    )


}
export default TextFields;