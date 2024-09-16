import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import styles from "./header.module.css";
import MenuNav from "../MenuNav/menuNav";

const Header = () => {
  // Estado para controlar a visibilidade do menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>

      {/* Seção esquerda com logo e nome da loja */}
      <div className={styles.leftSection}>
        <a href="/" className={styles.iconLink}>
          <img className={styles.logo} src="./imagens/logo.svg" alt="Logo" />
        </a>
        <div className={styles.storeName}>
          刀Market
        </div>
      </div>

      {/*Botão hambúrguer para abrir/fechar o menu em telas menores */}
      <button className={styles.hamburgerButton} onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="mdi:menu" fontSize={30} />
      </button>

      {/*Menu de navegação */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        {/* 5. Passando o estado e função para o componente MenuNav */}
        <MenuNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Header;