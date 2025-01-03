import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PeruDetails from './pages/Peru'
import ColombiaDetails from './pages/Colombia'
import MexicoDetails from './pages/Mexico'
import BrasilDetails from './pages/Brasil'
import ItaliaDetails from './pages/Italia'
import JaponDetails from './pages/Japon'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product-details/peru" element={<PeruDetails />} />
    <Route path="/product-details/colombia" element={<ColombiaDetails />} />
    <Route path="/product-details/mexico" element={<MexicoDetails />} />
    <Route path="/product-details/brasil" element={<BrasilDetails />} />
    <Route path="/product-details/italia" element={<ItaliaDetails />} />
    <Route path="/product-details/japon" element={<JaponDetails />} />
  </Routes>
)

export default Rotas
