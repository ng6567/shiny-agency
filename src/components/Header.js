import { Link } from "react-router-dom";

function Header (){
return[
    <nav>
        <Link to= "/">Accueil</Link>
        <Link to= "/Survey/1">Questionnaire</Link>
        <Link to= "/Freelances">Profils</Link>
    </nav>
]
}
export default Header