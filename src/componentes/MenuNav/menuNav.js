import { Link, useLocation } from "react-router-dom";
import styles from "./menuNav.module.css";

const MenuNav = ({ isOpen, setIsOpen }) => {

  // Acessando a localização atual da rota
  const location = useLocation();

  //Função para adicionar classe 'ativo' ao link atual
  function getLinkClass(path) {
    // Verifica se o caminho atual corresponde ao path passado
    return `${styles.link} ${location.pathname === path ? styles.linkAtivo : ''}`;
  }

  return (                         //Se isOpen for true, aplica a classe open do seu arquivo CSS
    <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <li>
        {/*Link para a página principal */}
        <Link to="/" className={getLinkClass('/')} onClick={() => setIsOpen(false)}>
          Principal
        </Link>
      </li>
      <li>
        {/*Link para a página de cadastro */}
        <Link to="/cadastro" className={getLinkClass('/cadastro')} onClick={() => setIsOpen(false)}>
          Registro
        </Link>
      </li>
      <li>
        {/*Link para a página "Sobre" */}
        <Link to="/sobre" className={getLinkClass('/sobre')} onClick={() => setIsOpen(false)}>
          Sobre
        </Link>
      </li>
      
    </ul>
  );
};
export default MenuNav;