async function apiTest() {

    let response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado&orberBy=nome", {
        method: "GET",
    });

    let data = await response.text();
    console.log(data);
}

apiTest()