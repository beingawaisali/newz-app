import React from 'react';
import './footer-bar.css';


const FooterBar = () => {
    return (
        <footer>

            <div className="footer-divs info">
                <h1>About</h1>
                <p>NewZee is a Website where you can catch latest News and latest Articles. Created and maintaned by an individual. Stay tuned for further updates and a better User Experience.</p>
            </div>

            <div className="footer-divs contact">
                <h1>Contact</h1>
                <a href="https://www.linkedin.com/in/awais-ali-malik-74a129186/">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/awais-malik716">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="#">
                    <i class="fab fa-facebook-square"></i>
                </a>
            </div>

            <div className="footer-divs reference">
                <p>API by <a href="https://newsapi.org/">newsapi.org</a>
                </p>
            </div>


        </footer>
    );
};

export default FooterBar;