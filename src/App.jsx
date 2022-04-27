import { useState, useEffect } from "react"
import Form from "./Components/Form"
import Header from "./Components/Header"
import ListadoPacientes from "./Components/ListadoPacientes"



function App() {
  const [pacientes,setpacintes]= useState([])
  const [edPaciente, setedPaciente] = useState({})

  useEffect(()=>{
    const pacientesULS = ()=>{
      const upLS = JSON.parse(localStorage.getItem('pacientes') ?? []) ;
      setpacintes(upLS)
  }
  pacientesULS()
  },[])

  useEffect(()=>{
    const pacientesLS =()=>{
    const localS = localStorage.setItem('pacientes', JSON.stringify(pacientes))  
  }
  pacientesLS()
  },[pacientes])

   const eliminarPaciente = id =>{
    const deletepaciente = pacientes.filter(paciente => paciente.id !== id)
    setpacintes(deletepaciente)
   } 

  return(

<div className="container mt-16 ">
   <Header/>

   <div className="mt-10 p-5 md:flex">
     <Form 
      pacientes={pacientes}
      setpacintes={setpacintes}
      edPaciente={edPaciente}
      setedPaciente={setedPaciente}/>

     <ListadoPacientes
      pacientes={pacientes}
      setedPaciente={setedPaciente}
      eliminarPaciente={eliminarPaciente}/>
   </div>
</div>
  )
}

export default App
