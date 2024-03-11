import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

/*
* <React.StrictMode> is the reason why your component
* is rendering twice on useEffect with no arguments
* https://nnamdi.hashnode.dev/why-does-my-react-app-render-twice*
*/
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
