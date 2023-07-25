import React from 'react'

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  
  let { name, constellation, id } = el;
  
  return (
    <div>
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button className="btn btn-primary">Modificar</button>
                <button className="btn btn-primary"  onClick={()=> deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    </div>
  )
}

export default CrudTableRow;

// en " <td>{el.constellation}</td>" deberia ser el.EMPID
// en "<td>{el.name}</td>" deberian ir las Columnaspor nombre.

