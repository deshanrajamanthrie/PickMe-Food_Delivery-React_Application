import {Fragment} from "react";

interface Props {
    type: string
    name: string
    placeHolder?: string
    label: string
}


const TextFields = ({type, name, placeHolder, label}: Props) => {


    return (
        <Fragment>
            <label className="block">
                <span
                    className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">{label}</span>
                <input type={type} name={name}
                       className="w-80 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                       placeholder={placeHolder}
                />
            </label>
        </Fragment>
    )


}
export default TextFields;