import { Link, useLocation } from "react-router-dom";
import styles from "./menuNav.module.css";

const MenuNav = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  // Função para adicionar classe 'ativo' ao link atual
  function getLinkClass(path) {
    return `${styles.link} ${location.pathname === path ? styles.linkAtivo : ''}`;
  }

  return (
    <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <li>
        <Link to="/" className={getLinkClass('/')} onClick={() => setIsOpen(false)}>
          Principal
        </Link>
      </li>
      <li>
        <Link to="/sobre" className={getLinkClass('/sobre')} onClick={() => setIsOpen(false)}>
          Sobre
        </Link>
      </li>
      <li>
        <Link to="/cadastro" className={getLinkClass('/cadastro')} onClick={() => setIsOpen(false)}>
          Registro
        </Link>
      </li>
    </ul>
  );
};

export default MenuNav;
