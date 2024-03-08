import { obtenerCliente } from "../data/clientes";

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId);
    
    if(Object.values(cliente).length === 0){
        
       throw new Response('', {
            status: 404,
            statusText: 'No hay resultados'
        })
    }

return cliente
}

function EditarCliente() {
  return (
    <div>
      <h1>desde here</h1>
    </div>
  )
}

export default EditarCliente
