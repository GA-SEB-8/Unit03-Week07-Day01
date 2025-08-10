const CounterButton = ({increment, buttonText}) => {
    return (
        <button
            onClick={() => {increment(10)}}
        >
            {buttonText}
        </button>
    )
}
export default CounterButton