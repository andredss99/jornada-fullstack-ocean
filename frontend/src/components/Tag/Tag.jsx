import './Tag.css';

function Tag(props) {
    const description = props.description;

    return (
        <div className="tag">
            {description}
        </div>
    )
}

export default Tag;