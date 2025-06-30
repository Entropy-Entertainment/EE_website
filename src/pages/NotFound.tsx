import generic from "#/generic.module.css";
import {useNavigate} from "react-router";
import {Helmet} from "react-helmet";

export default function NotFound(){
    const navigate = useNavigate();
    return(
        <>
            <Helmet>
                <title>404 not found - Entropy Entertainment</title>
                <meta name="description"
                      content="Oops, we couldn't find what you were looking for"/>
                <meta name="robots" content="index, follow"/>
            </Helmet>

            <div className={`${generic.wrapper}`}>
                <h1 className={`${generic.wmin} ${generic}`}>Page not found</h1>
                <div>
                    <button onClick={() => navigate("/")}>Take me home</button>
                </div>
            </div>
        </>
    )
}