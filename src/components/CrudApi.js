import React, { useState } from 'react'
import { CrudTable } from '../CrudTable';
import CrudForm from './CrudForm';

const CrudApi = () => {

    const [db, setDb] = useState([]);
  
    const [dataToEdit, setDataToEdit] = useState(null); //si viene null, es una nueva columna
  
    // const createData = (data) => {
    //   data.id = Data.now();
    //   //console.log(data)
    //   setdb([...db, data])
    // }
  
    // const updateData = (data) => {
    //   let newData = db.map(el => el.id === data.id ? data : el)
    //   setdb(newData)
    // }
  
    const deleteData = (id) => {
      let isDelete = window.confirm(
        `Confirmar eliminacion de la columna ${id}` 
        ); // a lo mejor no quieren se use
      if(isDelete){
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {     
        return;
      } 
      };
  //window.confirm es un cartel de JS del navegador como los tipicos de EBP
  // esto devuelte un valor booleano
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


export default CrudApi