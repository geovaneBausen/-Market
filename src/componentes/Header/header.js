import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import styles from "./header.module.css";
import MenuNav from "../MenuNav/menuNav";

const Header = () => {
  // Estado para o menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Seção esquerda: Logo e nome da loja */}
      <div className={styles.leftSection}>
        <a href="/" className={styles.iconLink}>
          <img className={styles.logo} src="./imagens/logo.svg" alt="Logo" />
        </a>
        <div className={styles.storeName}>
          刀Market
        </div>
      </div>

      {/* Botão do hambúrguer para telas menores */}
      <button className={styles.hamburgerButton} onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="mdi:menu" fontSize={30} />
      </button>

      {/* Menu de navegação
      A classe CSS aplicada ao elemento muda dependendo do estado da variável isOpen. O componente filho MenuNav recebe informações sobre o estado do menu e pode interagir com ele através das propriedades isOpen e setIsOpen.
      */}

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <MenuNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Header;
