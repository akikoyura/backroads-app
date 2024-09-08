import PageLinks from "./PageLinks.tsx";
import NavIcons from "./NavIcons.tsx";

const Navbar = () => {
    return (<nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src="src/assets/logo.svg" className="nav-logo" alt="backroads"/>
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <PageLinks masterClass={ 'nav-links' } childClass={ 'nav-link' }/>
            <NavIcons masterClass={ 'nav-icons' } childClass={ 'nav-icon' }/>
        </div>
    </nav>)
}

export default Navbar;