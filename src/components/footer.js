import React from "react";
import "../styles/footer.scss"
import LogoFooter from "../assets/logoFooter.png"


export const Footer = () => {
    return(
<footer className="footer">
    <img src={LogoFooter} alt="Logo" className="footer-logo" />
  <div className="footer-content">
    <p className="footer-text">© 2024 Kasa - Tous droits réservés</p>
</div>
</footer>
    )
}