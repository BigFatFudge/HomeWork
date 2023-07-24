import React, { useState } from 'react'
import { CrudTable } from '../CrudTable';
import CrudForm from './CrudForm';


const initialDb = [

    {
        "id": 1,
        "name": "Seiya",
        "constellation": "Pegaso"
      },
      {
        "id": 2,
        "name": "Shiryu",
        "constellation": "Dragón"
      },
      {
        "id": 3,
        "name": "Hyoga",
        "constellation": "Cisne"
      },
      {
        "id": 4,
        "name": "Shun",
        "constellation": "Andrómeda"
      },
      {
        "id": 5,
        "name": "Ikki",
        "constellation": "Fénix"
      },
      {
        "id": 6,
        "name": "Mú",
        "constellation": "Aries"
      },
      {
        "id": 7,
        "name": "Saga",
        "constellation": "Geminis"
      },
      {
        "name": "Shura",
        "constellation": "Capricornio",
        "id": 1617237562207
      }

]


const CrudApp = () => {

  const [db, setdb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null); //si viene null, es una nueva columna

  
  const deleteData = (id) => {
    
  };


  return (
    <div>
        <h2>Curd App ABM</h2>
          <CrudForm 
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}/>
          <CrudTable 
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            />
        <form></form>
        <table></table>
    </div>
  )
};

export default CrudApp
