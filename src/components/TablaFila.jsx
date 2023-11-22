import { useContext } from 'react'
import './TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'
import Swal from 'sweetalert2'

const TablaFila = ({ producto, setProductoAEditar }) => {
  const { eliminarProductoContext } = useContext(ProductoContext)

  const handleDelete = (id) => {

    let isDelete = Swal.fire(`
      ¿Estás seguro de eliminar ${producto.nombre} 'id': ${id}
    `)

    if (isDelete) {
      eliminarProductoContext(id)
    } else {
      return //break
    }
  }

  const handleUpdate = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleUpdate(producto)}>Editar</button>
        <button onClick={() => handleDelete(producto.id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila