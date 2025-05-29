import { links } from "./links"

export default function DropDown() {
    return (
        <div id="listaa">
            <ul id="listalinks">
                {links.map((link) => (
                    <li key={link.id} className="links">
                        <a href={link.link}>{link.titulo}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}