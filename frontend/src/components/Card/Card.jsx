import './Card.css';

function Card(props) {
    const item = props.item;

    return (
        <div className="card">
            <img src={props.item.imagemUrl} alt="" />
            <h1>{props.item.nome}</h1>
        </div>
    )
}

export default Card;