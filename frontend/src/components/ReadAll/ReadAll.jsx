import Card from '../Card/Card';
import './ReadAll.css';

const itens = [
    {
        _id: '1234',
        nome: 'Rick Sanchez',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
        _id: '1235',
        nome: 'Morty Smith',
        imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    }
];

function ReadAll() {
    return (
        <div className="ReadAll">
            {itens.map(function(item) {
                console.log(item);
                return <Card key={'card=' + item._id} item={item} />;
            })}
        </div>
    );
}

export default ReadAll;