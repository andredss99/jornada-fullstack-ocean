import './Card.css';
import Tag from '../Tag/Tag';

function Card(props) {
    const item = props.item;

    return (
        <div className="card">
            <div className="tagContainer">
                {item.tags.map(function(tag) {
                    return <Tag description={tag} />;
                })}
            </div>
            <img src={item.imagemUrl} alt="" />
            <h1>{item.nome}</h1>
        </div>
    )
}

export default Card;