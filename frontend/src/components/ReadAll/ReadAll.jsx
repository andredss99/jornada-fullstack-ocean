import Card from '../Card/Card';
import './ReadAll.css';

const itens = [
    {
        "_id": "63e4f9efa8b70e9e3f665f26",
        "nome": "Rick Sanchez",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        "_id": "63e50974a8b70e9e3f6d9c5c",
        "nome": "Morty Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        "_id": "63e50984a8b70e9e3f6da41f",
        "nome": "Beth Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        "_id": "63ee1e3e20983f240a4c626e",
        "nome": "Senhor Calça Cagada",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/244.jpeg"
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