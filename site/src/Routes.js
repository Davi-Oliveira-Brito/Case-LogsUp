import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Logon from './pages/user/logon'
import LoginUser from './pages/user/login'
import LoginAdmin from './pages/admin/login'

import Home from './pages/home'

import Produtos from './pages/user/produtos'


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/logon' element={<Logon />} />
                <Route path='/user/login' element={<LoginUser />} />
                <Route path='/user/produtos' element={<Produtos />} />
                <Route path='/Admin/login' element={<LoginAdmin />} />
            </Routes>
        </BrowserRouter>
    )
}