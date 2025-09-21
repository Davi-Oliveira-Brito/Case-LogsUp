import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

import Logon from './pages/user/logon'
import LoginUser from './pages/user/login'
import Produtos from './pages/user/produtos'

import LoginAdmin from './pages/admin/login'
import AdminArea from './pages/admin/usuarios'



export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/logon' element={<Logon />} />
                <Route path='/user/login' element={<LoginUser />} />
                <Route path='/user/produtos' element={<Produtos />} />
                <Route path='/Admin/login' element={<LoginAdmin />} />
                <Route path='/Admin/area' element={<AdminArea />} />
            </Routes>
        </BrowserRouter>
    )
}