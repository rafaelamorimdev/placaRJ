import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import CreativeLoginPage from './components/CreativeLoginPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CreativeLoginPage/>
  </StrictMode>,
)
