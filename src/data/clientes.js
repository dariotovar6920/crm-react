export async function obtenerClientes(){

    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json();
    return resultado;
}

export async function obtenerCliente(id){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

    if(respuesta.status === 404){

        throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        });
    }

    const resultado = await respuesta.json();
    return resultado;
}


export async function agregarClientes(datos){

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id, datos){

    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json' 
            }
        })

        if(respuesta.status === 404){

            throw new Response('', {
                status: 404,
                statusText: 'Error, no se encontro el cliente'
            });
        }

        await respuesta.json();
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){

        try{ 
            const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
                method: 'DELETE'
            })

           await respuesta.json();

        } catch (error) {
            console.log(error)
        }
            
        }