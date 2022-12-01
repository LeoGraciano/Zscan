const express = require('express');
const routes = express.Router();

module.exports = routes

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

var db = {
    tb_state:
        // 20221129120630
        // https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado
        [
            {
                "UF_id": 11,
                "UF_sigla": "RO",
                "UF_nome": "Rondônia",
                "regiao-id": 1,
                "regiao-sigla": "N",
                "regiao-nome": "Norte"
            },
            {
                "UF_id": 12,
                "UF_sigla": "AC",
                "UF_nome": "Acre",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 13,
                "UF_sigla": "AM",
                "UF_nome": "Amazonas",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 14,
                "UF_sigla": "RR",
                "UF_nome": "Roraima",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 15,
                "UF_sigla": "PA",
                "UF_nome": "Pará",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 16,
                "UF_sigla": "AP",
                "UF_nome": "Amapá",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 17,
                "UF_sigla": "TO",
                "UF_nome": "Tocantins",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 21,
                "UF_sigla": "MA",
                "UF_nome": "Maranhão",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 22,
                "UF_sigla": "PI",
                "UF_nome": "Piauí",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 23,
                "UF_sigla": "CE",
                "UF_nome": "Ceará",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 24,
                "UF_sigla": "RN",
                "UF_nome": "Rio Grande do Norte",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 25,
                "UF_sigla": "PB",
                "UF_nome": "Paraíba",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 26,
                "UF_sigla": "PE",
                "UF_nome": "Pernambuco",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 27,
                "UF_sigla": "AL",
                "UF_nome": "Alagoas",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 28,
                "UF_sigla": "SE",
                "UF_nome": "Sergipe",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 29,
                "UF_sigla": "BA",
                "UF_nome": "Bahia",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 31,
                "UF_sigla": "MG",
                "UF_nome": "Minas Gerais",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 32,
                "UF_sigla": "ES",
                "UF_nome": "Espírito Santo",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 33,
                "UF_sigla": "RJ",
                "UF_nome": "Rio de Janeiro",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 35,
                "UF_sigla": "SP",
                "UF_nome": "São Paulo",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 41,
                "UF_sigla": "PR",
                "UF_nome": "Paraná",
                "regiao_id": 4,
                "regiao_sigla": "S",
                "regiao_nome": "Sul"
            },
            {
                "UF_id": 42,
                "UF_sigla": "SC",
                "UF_nome": "Santa Catarina",
                "regiao_id": 4,
                "regiao_sigla": "S",
                "regiao_nome": "Sul"
            },
            {
                "UF_id": 43,
                "UF_sigla": "RS",
                "UF_nome": "Rio Grande do Sul",
                "regiao_id": 4,
                "regiao_sigla": "S",
                "regiao_nome": "Sul"
            },
            {
                "UF_id": 50,
                "UF_sigla": "MS",
                "UF_nome": "Mato Grosso do Sul",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            },
            {
                "UF_id": 51,
                "UF_sigla": "MT",
                "UF_nome": "Mato Grosso",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            },
            {
                "UF_id": 52,
                "UF_sigla": "GO",
                "UF_nome": "Goiás",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            },
            {
                "UF_id": 53,
                "UF_sigla": "DF",
                "UF_nome": "Distrito Federal",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            }
        ],
    tb_city:
        // 20221129120630
        // https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado

        [
            {
                "UF_id": 11,
                "UF_sigla": "RO",
                "UF_nome": "Rondônia",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 12,
                "UF_sigla": "AC",
                "UF_nome": "Acre",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 13,
                "UF_sigla": "AM",
                "UF_nome": "Amazonas",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 14,
                "UF_sigla": "RR",
                "UF_nome": "Roraima",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 15,
                "UF_sigla": "PA",
                "UF_nome": "Pará",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 16,
                "UF_sigla": "AP",
                "UF_nome": "Amapá",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 17,
                "UF_sigla": "TO",
                "UF_nome": "Tocantins",
                "regiao_id": 1,
                "regiao_sigla": "N",
                "regiao_nome": "Norte"
            },
            {
                "UF_id": 21,
                "UF_sigla": "MA",
                "UF_nome": "Maranhão",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 22,
                "UF_sigla": "PI",
                "UF_nome": "Piauí",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 23,
                "UF_sigla": "CE",
                "UF_nome": "Ceará",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 24,
                "UF_sigla": "RN",
                "UF_nome": "Rio Grande do Norte",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 25,
                "UF_sigla": "PB",
                "UF_nome": "Paraíba",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 26,
                "UF_sigla": "PE",
                "UF_nome": "Pernambuco",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 27,
                "UF_sigla": "AL",
                "UF_nome": "Alagoas",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 28,
                "UF_sigla": "SE",
                "UF_nome": "Sergipe",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 29,
                "UF_sigla": "BA",
                "UF_nome": "Bahia",
                "regiao_id": 2,
                "regiao_sigla": "NE",
                "regiao_nome": "Nordeste"
            },
            {
                "UF_id": 31,
                "UF_sigla": "MG",
                "UF_nome": "Minas Gerais",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 32,
                "UF_sigla": "ES",
                "UF_nome": "Espírito Santo",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 33,
                "UF_sigla": "RJ",
                "UF_nome": "Rio de Janeiro",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 35,
                "UF_sigla": "SP",
                "UF_nome": "São Paulo",
                "regiao_id": 3,
                "regiao_sigla": "SE",
                "regiao_nome": "Sudeste"
            },
            {
                "UF_id": 41,
                "UF_sigla": "PR",
                "UF_nome": "Paraná",
                "regiao_id": 4,
                "regiao_sigla": "S",
                "regiao_nome": "Sul"
            },
            {
                "UF_id": 42,
                "UF_sigla": "SC",
                "UF_nome": "Santa Catarina",
                "regiao_id": 4,
                "regiao_sigla": "S",
                "regiao_nome": "Sul"
            },
            {
                "UF_id": 43,
                "UF_sigla": "RS",
                "UF_nome": "Rio Grande do Sul",
                "regiao_id": 4,
                "regiao_sigla": "S",
                "regiao_nome": "Sul"
            },
            {
                "UF_id": 50,
                "UF_sigla": "MS",
                "UF_nome": "Mato Grosso do Sul",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            },
            {
                "UF_id": 51,
                "UF_sigla": "MT",
                "UF_nome": "Mato Grosso",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            },
            {
                "UF_id": 52,
                "UF_sigla": "GO",
                "UF_nome": "Goiás",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            },
            {
                "UF_id": 53,
                "UF_sigla": "DF",
                "UF_nome": "Distrito Federal",
                "regiao_id": 5,
                "regiao_sigla": "CO",
                "regiao_nome": "Centro_Oeste"
            }
        ]
}
//==================

routes.get('/estados/', (req, res) => {
    let data = [...db.tb_state]
    for (let index = 0; index < data.length; index++) {
        data[index]['população_mockup'] = parseInt(randomNumber(10000, 5000000))
    }
    data.forEach(element => {

    });
    return res.json(data)
})
routes.get('/estados/:uf', (req, res) => {
    const state = db.tb_state
    const uf = (req.params.uf).toLowerCase()
    let data = state.filter(item => {
        if ((item['UF_sigla']).toLowerCase() == uf)
            return item
    })
    for (let index = 0; index < data.length; index++) {
        data[index]['população_mockup'] = parseInt(randomNumber(10000, 5000000))
    }
    data.forEach(element => {

    });
    return res.json(data)
})
routes.get('/cidades', (req, res) => {
    let data = [...db.tb_city]
    for (let index = 0; index < data.length; index++) {
        data[index]['população_mockup'] = parseInt(randomNumber(10000, 5000000))
    }
    data.forEach(element => {

    });
    return res.json(data)
})

//========================

routes.get('/', (req, res) => {
    return res.json(db)
})
