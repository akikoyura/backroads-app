import { socialLinks } from "../data/data.tsx";

const NavIcons = ({ masterClass, childClass }: {
    masterClass: string, childClass: string
}) => {
    return (<ul className={ masterClass }>
        { socialLinks.map((icon) => {
            return (<li key={ icon.id }>
                <a href={ icon.href } target="_blank" className={ childClass }>
                    <i className={ icon.icon }></i> </a>
            </li>)
        }) }
    </ul>)
}
export default NavIcons;