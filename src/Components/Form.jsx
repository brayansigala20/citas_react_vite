import React from 'react'
import {useState,useEffect} from 'react'
import Error from './Error'

const Form = ({pacientes ,setpacintes, edPaciente, setedPaciente }) => {
  const [nombre, setnombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setemail] = useState('')
  const [telefono, settelefono] = useState('')
  const [sintomas, setsintomas] = useState('')

  const [ err, seterr] = useState(false)
useEffect(()=>{
   if (Object.keys(pacientes).length > 0) {
     setnombre(edPaciente.nombre)
     setPropietario(edPaciente.propietario)
     setemail(edPaciente.email)
     settelefono(edPaciente.telefono)
     setsintomas(edPaciente.sintomas)
   }
},[edPaciente])

  const paId =()=>{
    const idM = Math.random(36).toString().substr(2)  
    const idD = Date.now()

    return idM+idD
  }
  const handleSumbmit = (e) =>{
    e.preventDefault();

    if([nombre,propietario,email,telefono,sintomas].includes('')) seterr(true)
    else seterr(false)

    const objetpaciente ={
      nombre,
      propietario,
      email,
      telefono,
      sintomas,
    }

    if(edPaciente.id == undefined){ 
     objetpaciente.id =  paId()
     setpacintes([...pacientes,objetpaciente]);
    }
    else if(edPaciente.id){
      objetpaciente.id = edPaciente.id
      const actuelizacionObjpacientes = pacientes.map(pacienteState => pacienteState.id === edPaciente.id ? objetpaciente : pacienteState)
      setpacintes(actuelizacionObjpacientes)
      setedPaciente({})
    }
    

    setnombre("")
    setPropietario("")
    setemail("")
    settelefono("")
    setsintomas("")
  }

  return (

    <div className='md:w-1/2 lg:w-2/5 h-fit shadow-xl rounded-lg '>
      <h1 className="font-black text-center text-2xl">Datos de el paciente</h1>
      <h2 className='text-center'>ingresa pacientes y {""}<span className='text-center text-indigo-500'>Administralos</span></h2>


      {err && <Error mensaje={"campos incompletos"}/> }

    <form className='form'
          onSubmit={handleSumbmit}>

      <div className='name-mascota mt-2 mb-1 ml-5 '>
        <label className='block font-black text-sm '>Nombre de la Mascota</label>
        <input placeholder=' pet name' 
        type="text"
        value={nombre}
        onChange={(e)=>setnombre(e.target.value)}
        className='w-5/6 border-b-2 transition focus:outline-none hover:border-b-indigo-500 focus:border-b-indigo-700 mb-8 mt-1 active:placeholder:hidden' />
      </div>

      <div className='propetary-name mt-.2 mb-1 ml-5'>
        <label className='block font-black text-sm '>Nombre del propientario</label>
        <input placeholder=' name' 
        type="text" 
        value={propietario}
        onChange={(e)=>setPropietario(e.target.value)}
        className='w-5/6 border-b-2 transition focus:outline-none hover:border-b-indigo-500 focus:border-b-indigo-700 mb-8 mt-1  hover:placeholder-none' />
      </div>

      
      <div className='email mt-2 mb-1 ml-5'>
        <label className='block font-black text-sm '>E-Mail</label>
        <input placeholder=' e-mail' 
        type="email" 
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        className='w-5/6 border-b-2 transition focus:outline-none hover:border-b-indigo-500 focus:border-b-indigo-700 mb-8 mt-1  hover:placeholder-none' />

      </div>

      
      <div className='phone mt-2 mb-1 ml-5'>
        <label className='block font-black text-sm '>Telefono</label>
        <input placeholder=' phone: 000-000-0000' 
        type="tel" 
        value={telefono}
        onChange={(e)=>settelefono(e.target.value)}
        className='w-5/6 border-b-2 transition focus:outline-none hover:border-b-indigo-500 focus:border-b-indigo-700 mb-8 mt-1  hover:placeholder-none' />

      </div>

      <div className='sintomas mt-2 mb-1 ml-5'>
        <label className='block font-black text-sm'>sintomas</label>
        <textarea name="sintomas" cols="30" rows="0"
        value={sintomas}
        onChange={(e)=>setsintomas(e.target.value)} 
        className='w-5/6 border-b-2 transition focus:outline-none hover:border-b-indigo-500 focus:border-b-indigo-700 mb-8 mt-1'></textarea>
      </div>

    <div className='flex justify-center mt-2 mb-2 p-3'>
      <input type="submit"
       value={ edPaciente.id === undefined ? "GO"
                                   : "AGREGAR CAMBIOS"}
       className='mb-5 w-full rounded-lg  bg-indigo-500 active:bg-indigo-700 text-white' />

    </div>
    </form>
    </div>
    
  )
}

export default Form