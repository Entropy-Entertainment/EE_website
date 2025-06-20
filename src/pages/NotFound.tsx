import generic from "#/generic.module.css";
import {useNavigate} from "react-router";

export const NotFound = () => {
    const navigate = useNavigate();
    return(
        <div className={`${generic.wrapper}`}>
            <h1 className={`${generic.wmin} ${generic}`}>Page not found</h1>
            <div>
                <button onClick={() => navigate("/")}>Take me home</button>
            </div>
        </div>
    )
}