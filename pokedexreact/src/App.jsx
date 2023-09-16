import { useState } from 'react'
import AuthRoutes from './AuthRoutes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AuthRoutes/>
    </>
  )
}

export default App
