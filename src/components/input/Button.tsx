import {Fragment} from "react";


interface Props {
    children?: JSX.Element | JSX.Element[] | string,
    size?: string,
    color?: string,
    optional?: string
    callBack: () => void
}

const Button = (props: Props) => {
    return (
        <Fragment>
            <button className={props.color + ' rounded border text-white p-2 ' + props.size + props.optional}
                    onClick={props.callBack}>{props.children}
            </button>
        </Fragment>
    );


}
export default Button;