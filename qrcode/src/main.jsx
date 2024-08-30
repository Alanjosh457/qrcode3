import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Qrcode} from "./Qrcode";
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Qrcode />
  </StrictMode>,
)
