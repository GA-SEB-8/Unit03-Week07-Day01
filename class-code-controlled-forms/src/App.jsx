import { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    city: '',
    lastName: ''
  })

  const handleChange = (event) => {
    console.log('Change handler has run!')
    // update formdata.x with the value of x
    // setFormData({...formData, [event.target.name]: event.target.value})
    const currentFormData = {...formData}
    
    const inputName = event.target.name
    const inputValue = event.target.value

    currentFormData[inputName] = inputValue
    
    setFormData(currentFormData)
    // console.log(formData)
  }


  return (
    <>
      <h1>Controlled Forms</h1>
      
      <input value={formData.city} name='city' onChange={handleChange}></input>
      <input value={formData.firstName} name='firstName' onChange={handleChange}></input>
      <input value={formData.lastName} name='lastName' onChange={handleChange}></input>
    </>
  )
}

export default App