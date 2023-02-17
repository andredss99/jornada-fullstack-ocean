import Card from '../Card/Card';
import Tag from '../Tag/Tag';
import './ReadAll.css';

const itens = [
    {
        "_id": "63e4f9efa8b70e9e3f665f26",
        "nome": "Rick Sanchez",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "tags": [
            "Vivo",
            "Terra (C-137)",
            "Citadel of Ricks"
        ]
    },
    {
        "_id": "63e50974a8b70e9e3f6d9c5c",
        "nome": "Morty Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "tags": [
            "Vivo",
            "Desconhecida",
            "Citadel of Ricks"
        ]
    },
    {
        "_id": "63e50984a8b70e9e3f6da41f",
        "nome": "Beth Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "tags": [
            "Vivo",
            "Terra (C-131)",
            "Earth (Replacement Dimension)"
        ]
    },
    {
        "_id": "63ee1e3e20983f240a4c626e",
        "nome": "Senhor Calça Cagada",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/244.jpeg",
        "tags": [
            "Vivo",
            "Desconhecida",
            "Earth (Replacement Dimension)"
        ]
    }
];

function ReadAll() {
    return (
        <div className="ReadAll">
            {itens.map(function(item) {
                console.log(item);
                return (
                    <Card key={'card=' + item._id} item={item} />
                );
            })}
        </div>
    );
}

export default ReadAll;