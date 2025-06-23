import generic from "#/generic.module.css";
import header from "#/components/header.module.css";
import logo from "$/img/EE_logo_128x128.webp";
import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div className={`${header.navbar} ${generic.w100}`}>
                <div className={header.logo}>
                    <img src={logo} alt={"Entropy Entertainment"}/>
                    <h2>
                        Entropy Entertainment
                    </h2>
                </div>

                {/* I hate this, but we need it in order for the buttons to align rightwards without using float: right; */}
                <div className={`${generic.w100}`} />

                <button onClick={() => navigate("/")}>
                    home
                </button>
                <button onClick={() => navigate("/projects")}>
                    projecten
                </button>
                <button onClick={() => navigate("/posts")}>
                    posts
                </button>
                <button onClick={() => navigate("/about")}>
                    over ons
                </button>
            </div>
        </header>
    );
}