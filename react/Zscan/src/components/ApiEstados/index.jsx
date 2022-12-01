import axios from 'axios';
import { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
export default function ApiEstados({ uf }) {
    const [response, setResponse] = useState([]);
    let uf_prop = ""
    try {
        uf_prop = uf['uf']
    } catch (err) {

    }
    const fetchQuotes = async () => {
        let url = `http://localhost:21262/estados/`
        if (uf_prop)
            url = `http://localhost:21262/estados/${uf_prop}`
        try {
            const res = await axios.get(url);
            setResponse(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        // Trigger the API Call
        fetchQuotes();
    }, []);
    const rows = []
    try {

        response.forEach(element => {
            if (uf_prop) {
                rows.push(<ListGroupItem key={element['UF_nome']}>Estado: {element['UF_nome']}</ListGroupItem>)
                rows.push(<ListGroupItem key={element['UF_sigla']}>Sigla: {element['UF_sigla']}</ListGroupItem>)
                rows.push(<ListGroupItem key={element['regiao_nome']}>Região: {element['regiao_nome']}</ListGroupItem>)
                rows.push(<ListGroupItem key={element['população_mockup']}>População: {element['população_mockup']}</ListGroupItem>)
            } else {
                rows.push(<ListGroupItem key={element['UF_sigla']}>{element['UF_nome']}</ListGroupItem>)
            }

        });
    } catch (err) {
        console.log(err);
    }
    return (
        <div>
            {
                <ListGroup>
                    {rows}
                </ListGroup>
            }
        </div>
    );
}