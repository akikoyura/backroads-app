import PageLinks from "./PageLinks.tsx";
import NavIcons from "./NavIcons.tsx";

const Footer = () => {
    return (
        <footer className="section footer">
            <PageLinks masterClass={ 'footer-links' } childClass={ 'footer-link' }/>
            <NavIcons masterClass={ 'footer-icons' } childClass={ 'footer-icon' }/>
            <p className="copyright">copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>)
}
export default Footer;