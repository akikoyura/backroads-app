import { pageLinks } from "../data/data.tsx";

const PageLinks = ({ masterClass, childClass }: { masterClass: string, childClass: string }) => {
    return (<ul className={ masterClass } id="nav-links">
        { pageLinks.map((link) => {
            return (<li key={ link.id }>
                <a href={ link.href } className={ childClass }>{ link.text }</a>
            </li>)
        }) }
    </ul>)
}
export default PageLinks;
