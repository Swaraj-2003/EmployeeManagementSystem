import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Authcontext from './Context/Authcontext.jsx'
import Taskcontest from './Context/Taskcontest.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Authcontext>
      <Taskcontest>
        <App />
      </Taskcontest>
    </Authcontext>
  </BrowserRouter>


)
