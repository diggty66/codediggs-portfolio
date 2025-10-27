import React from 'react'
import ReactDOM from 'react-dom/client'

// ✅ this line must be near the top, before App import
import './index.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
