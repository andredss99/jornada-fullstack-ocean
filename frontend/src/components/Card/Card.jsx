import './Card.css';
import Tag from '../Tag/Tag';

function Card(props) {
    const item = props.item;
    const tags = item.tags;

    return (
        <div className="card">
            <div className="tagContainer">
                {tags.map(function(tag) {
                    return <Tag key={'tag-' + tag + '-' + item._id} description={tag} />;
                })}
            </div>
            <img src={item.imagemUrl} alt="" />
            <h1>{item.nome}</h1>
        </div>
    )
}

export default Card;