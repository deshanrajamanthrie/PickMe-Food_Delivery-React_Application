interface Props {
    children: string,
    height: string,
    backgroundImage: string
}

const TopImage = ({children, height, backgroundImage}: Props) => {
    return (
        <>
            <div className={backgroundImage+' flex w-screen items-center justify-center flex-col '+ height}>
                <h1 className={'font-medium text-8xl'}>Pick<strong className={'text-yellow-600'}>Me</strong></h1>
                <p className={' font-medium text-2xl pl-64 text-center'}>{children}</p>
            </div>
        </>
    )


}
export default TopImage