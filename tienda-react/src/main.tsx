import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { CarritoProvider } from './aplicacion/CarritoContext.tsx'
import { FavoritosProvider } from './aplicacion/FavoritosContext.tsx'
import { SesionProvider } from './aplicacion/SesionContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SesionProvider>
        <CarritoProvider>
          <FavoritosProvider>
            <App />
          </FavoritosProvider>
        </CarritoProvider>
      </SesionProvider>
    </BrowserRouter>
  </StrictMode>,
)