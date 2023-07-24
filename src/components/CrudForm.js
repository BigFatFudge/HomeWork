import React, { useEffect, useState } from 'react'

const initialForm = {
    name: '',
    constellation: '',
    id: null
}

//constellation queda a reemplazar una vez que se defina de donde tomo los datos

export const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
       if(dataToEdit) {
           setForm(dataToEdit);
       } else {
           setForm(initialForm);
       }
  }, [dataToEdit]);

  const handleChange = (e) => {
       setForm({
              ...form,
              [e.target,name]:e.target.value,
         });
  }
  // para agregar datos a la tabla con el input, revisar si llega a ser necesario o si hay que eliminarlo

  
  const handleSubmit = (e) => {
       e.preventDefault();
//incompleto
  }

  const handleReset = (e) => {
       setForm(initialForm);
       setDataToEdit(null);
  }

  return (
    <div>Agregar
     <form onSubmit={handleSubmit}>
        <input type="text" 
               name="name" 
               placeholder="Tabla" 
               onChange={handleChange} 
               value={form.constellation}
        />

        <input 
               type="text" 
               name="constela" 
               placeholder="constela"
               onChange={handleChange}
               value={form.name}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset}/>
     </form>
    </div>
    )
}

export default CrudForm;