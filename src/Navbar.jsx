import React from 'react'

import { useState } from 'react'
function Navbar() {
  const [value, uvalue] = useState(0)
  return (
    <nav>
      <button onClick={()=>uvalue(value+1)}>Change</button>
      <img src="https://plus.unsplash.com/premium_photo-1686090448331-206895954c61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D" alt="" />
    </nav>
      
  )
}

export default Navbar
