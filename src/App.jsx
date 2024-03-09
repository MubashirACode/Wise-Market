
import './App.css'

import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Footerwisemarketend } from './components/Footerwisemarketend'
import { Headernav } from './components/Headernav'
import { Mainfooter } from './components/Mainfooter'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Registration } from './pages/Registration'
import { Compare } from './pages/Compare'
import { Wishlist } from './pages/Wishlist'
import { Linkrotue } from './pages/Linkroute'

function App() {


  return (
    <>
      <Navbar />
      <Headernav />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='registerion' element={<Registration />} />
          <Route path='compare' element={<Compare />} />
          <Route path='wishlist' element={<Wishlist />} />






          <Route path="/wishlist" >

            <Route index element={<Wishlist />} />
            <Route path="linkroute" element={<Linkrotue />} />
            <Route path='home' element={<Home />} />
          </Route>

          <Route path='login'>

            <Route index element={<Login />} />

            <Route path='register' element={<Registration />} />


          </Route>

          <Route path="*" element={<h1 className="">Not Found</h1>} />









        </Route>
      </Routes>
      <Mainfooter />
      <Footerwisemarketend />

    </>
  )
}

export default App
