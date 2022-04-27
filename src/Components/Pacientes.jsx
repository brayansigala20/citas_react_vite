
const Pacientes = ({paciente, setedPaciente, eliminarPaciente}) => {
   const { nombre,propietario,email,telefono,sintomas,id} = paciente

  const handledelete = ()=>{
  
    const verificar = confirm("estas seguro de querer eliminar ?")

    if (verificar == true) {
      eliminarPaciente(id)
    }
  
  }
  return (
<div className='mt-4 ml-2 md:w-/2 lg:w-4/5 shadow-xl rounded-lg p-5'>
<div>
  <p className="first-letter:uppercase font-black text-sm">nombre: {''}
  <label className="first-letter:uppercase text-sm font-normal">{paciente.nombre}</label></p>

  <p className="first-letter:uppercase font-black text-sm">propietario: {''}
  <label className="first-letter:uppercase text-sm font-normal">{paciente.propietario}</label></p>

  <p className="first-letter:uppercase font-black text-sm">Email: {''}
  <label className="first-letter:uppercase text-sm font-normal">{paciente.email}</label></p>

  <p className="first-letter:uppercase font-black text-sm">telefono-cel: {''}
  <label className="first-letter:uppercase text-sm font-normal">{paciente.telefono}</label></p>

  <p className="first-letter:uppercase font-black text-sm">sintomas: {''}
  <label className="first-letter:uppercase text-sm font-normal">{paciente.sintomas}</label></p>
</div>
<div className="flex justify-between ">  
    <button  
    onClick={()=>setedPaciente(paciente)}
    className="mt-4 uppercase bg-indigo-600 hover:bg-indigo-700 rounded-lg  text-white p-2 ">editar</button>
    <button 
    onClick={handledelete}
    className="mt-4 uppercase bg-red-600 hover:bg-red-700 rounded-lg text-white p-2 ">eliminar</button>
  </div>
</div>
  )
}

export default Pacientes