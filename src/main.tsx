import React from 'react'
import ReactDOM from 'react-dom/client'

// ✅ this line must be near the top, before App import
import './index.css'

import App from './App'
import LanguageController from './LanguageController'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <LanguageController />
  </React.StrictMode>,
)
