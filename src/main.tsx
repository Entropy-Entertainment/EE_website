import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {HashRouter} from "react-router";
import {Routing} from './Routing.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routing/>
        </HashRouter>
    </StrictMode>,
)
