import "./style.css";
function Round(props) {
    return (
        <div className={props.active ? 'number-round-back number-round-back-active' : 'number-round-back'}>
            <div className={props.active ? 'number-round round-active' : 'number-round'}>
                <span className="number">{typeof props.number === "number" ? props.number : <span className={props.number}></span>}</span>
            </div>
        </div>

    );
}
export default Round;