import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Empresas from './pages/Empresas'
import Proyectos from './pages/Proyectos'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Hormigones from './pages/empresas/Hormigones'
import Industrias from './pages/empresas/Industrias'
import Immobiliare from './pages/empresas/Immobiliare'
import Agregados from './pages/empresas/Agregados'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import TerminosUso from './pages/TerminosUso'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/empresas/hormigones" element={<Hormigones />} />
          <Route path="/empresas/industrias" element={<Industrias />} />
          <Route path="/empresas/immobiliare" element={<Immobiliare />} />
          <Route path="/empresas/agregados" element={<Agregados />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos" element={<TerminosUso />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
