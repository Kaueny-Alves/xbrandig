
export const API_URL = "https://projetoxb.herokuapp.com/"

export function ADD_CLIENTE(body){
    return{
        url: API_URL+ "clientes/add",
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body
        }
    }
}

export function GET_CLIENTE(){
    return{
        url: API_URL+ "clientes/",
        options: {
            method: "GET"
        }
    }
}

export function GET_CLIENTES_DETALHES(clienteId){
    return{
        url: API_URL+ `clientes/detalhes/${clienteId}`,
        options: {
            method: "GET"
        }
    }
}

export function ADD_CONTEUDO(body, clienteId){
    return{
        url: API_URL+ `conteudo/add/${clienteId}`,
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body
        }
    }
}


export function GET_CONTEUDOS(clienteId, conteudoId){
    return{
        url: API_URL+ `conteudo/detalhes/${clienteId}/${conteudoId}`,
        options: {
            method: "GET"
        }
    }
}

export function DEL_CONTEUDOS(clienteId, conteudoId){
    return{
        url: API_URL+ `conteudo/delete/${clienteId}/${conteudoId}`,
        options: {
            method: "DELETE"
        }
    }
}

export function DEL_CLIENTE(clienteId){
    return{
        url: API_URL+ `clientes/delete/${clienteId}`,
        options: {
            method: "DELETE"
        }
    }
}

