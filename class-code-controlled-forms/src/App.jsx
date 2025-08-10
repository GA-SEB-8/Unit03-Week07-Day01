import { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    console.log('Change handler has run!')
    // update formdata.x with the value of x
    setFormData({...formData, [event.target.name]: event.target.value})
    console.log(formData)
  }


  return (
    <>
      <h1>Controlled Forms</h1>
      <input name='city' onChange={handleChange}></input>
      <input name='firstName' onChange={handleChange}></input>
    </>
  )
}

export default App