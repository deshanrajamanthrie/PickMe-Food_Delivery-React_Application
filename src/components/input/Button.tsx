import {Fragment} from "react";


interface Props {
    children: string,
    color?: string,
    size?: string,
    optional?: string
    callBack: () => void
}

const Button = (props: Props) => {
    return (
        <Fragment>
            <button className={props.color + ' rounded border text-white m-3 ' + props.size + props.optional}
                    onClick={props.callBack}>{props.children}
            </button>
        </Fragment>
    );


}
export default Button;