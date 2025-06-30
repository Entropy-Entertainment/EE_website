import {StrictMode, useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, useNavigate} from "react-router";
import {Routing} from "@/Routing.tsx";

export function RedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectPath = new URLSearchParams(location.search).get('url')
        if (redirectPath && redirectPath !== '/') {
            navigate(redirectPath, {replace: true});
        }
    }, [navigate]);

    return null;
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <RedirectHandler />
            <Routing />
        </BrowserRouter>
    </StrictMode>,
)
