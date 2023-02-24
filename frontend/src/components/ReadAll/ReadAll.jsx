import Card from '../Card/Card';
import './ReadAll.css';
import { useEffect, useState } from 'react';

function ReadAll() {
    const [itens, setItems] = useState([]);

    async function realizarRequisicao() {
        //const url = 'http://localhost:3000/item';
        const url = 'https://jornada-fullstack-ocean-fj06.onrender.com/item';
        const response = await fetch(url);
        const data = await response.json();

        setItems(data);
    }

    useEffect(function() {
        realizarRequisicao();
    }, []);

    return (
        <div className="ReadAll">
            {itens.map(function(item) {
                return (
                    <Card key={'card-' + item._id} item={item} />
                );
            })}
        </div>
    );
}

export default ReadAll;