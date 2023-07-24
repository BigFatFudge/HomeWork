import React from 'react'

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  return (
    <div>
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button>Editar</button>
                <button type="button"   onClick={()=> deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    </div>
  )
}

export default CrudTableRow;