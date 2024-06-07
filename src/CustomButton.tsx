interface ICustomButton {
    lable: string
    handleOnClick: () => void
    varient?: 'blue' | 'red'
}

export default function CustomButton({ lable, varient, handleOnClick }: ICustomButton): JSX.Element {
    return (
        <button onClick={handleOnClick} style={varient === 'blue'? {backgroundColor: 'blue'}: {backgroundColor: 'red'}}>{lable}</button>
    )
}