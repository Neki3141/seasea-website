/*!
 * @license
 * Copyright (C) 2026 Ethan Bastian, Kien Nguyen
 * All Rights Reserved. Licensed under GNU AGPLv3.
 * Full license text available in the source repository.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
