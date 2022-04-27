import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setedPaciente , eliminarPaciente}) => {
  
  return (
  <>
 
 {pacientes.length > 0 ? <div className="ml-6 md:w-1/2 lg:w-9/12 h-screen transitionir xg hover:overflow-y-scroll">
    <h1 className='font-black  text-center text-2xl block'>ListadoPacientes</h1>
    <h2 className='text-center'>listado pacientes y {""}<span className='text-center text-indigo-500'>registro</span></h2>
    {pacientes.map( (paciente)=>
    <Pacientes
    key={paciente.id}
    paciente={paciente}
    setedPaciente={setedPaciente}
    eliminarPaciente={eliminarPaciente}/>
   )}
   </div>
  
                        : <div className="ml-6 md:w-1/2 lg:w-9/12 h-screen transitionir xg ">
    <h1 className='font-black  text-center text-2xl block'>No hay pacientes</h1>
    <h2 className='text-center'>listado pacientes y {""}<span className='text-center text-indigo-500'>registro</span></h2></div>}
  </>

)
}

export default ListadoPacientes