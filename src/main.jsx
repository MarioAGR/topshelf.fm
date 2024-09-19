import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Podcast from './generated/src/Podcast.js';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<Podcast />
  </StrictMode>,
)
