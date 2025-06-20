import generic from "#/generic.module.css";
import footer from "#/components/footer.module.css";
import {useNavigate} from "react-router";

export const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <div className={`${footer.footer} ${generic.w100}`}>
                <div className={`${footer.wrapper} ${generic.w100}`}>
                    <div className={`${footer.item}`}>
                        <h4>Sitemap</h4>
                        <a onClick={() => navigate("/")}>Home</a>
                        <a onClick={() => navigate("/projects")}>Projects</a>
                        <a onClick={() => navigate("/posts")}>Posts</a>
                        <a onClick={() => navigate("/about")}>About</a>
                    </div>
                    <div className={`${footer.item}`}>
                        <h4>Contact</h4>
                        <a href={'mailto:support@entropyentertainment.net?subject=Greetings%20from%20EE'}>support@entropyentertainment.net</a>
                    </div>
                </div>
                <div className={`${footer.wrapper} ${generic.w100}`}>
                    <div className={`${footer.item}`}>
                        <p className={`${generic.wmin} ${generic.nowrap}`}>
                            © 2025 Entropy Entertainment. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}