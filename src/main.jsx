import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UseMemoComponent } from './Components/UseMemoComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseMemoComponent/>
  </StrictMode>,
)
