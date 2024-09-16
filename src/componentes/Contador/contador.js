import React, { useState } from 'react';
import styles from "./contador.module.css"

function Contador() {
    //Armazena o valor atual do contador, inicializado como 0.
    const [count, setCount] = useState(0);

    return (
        <div className={styles.contador}>

            <p>Você clicou {count} vezes</p>

            <button className={styles.contador__botao} onClick={() => setCount(count + 1)}>
                {/*setCount = função que altera o caunt*/}
                Clique aqui
            </button>
        </div>
    )
}
export default Contador;

/*O componente Contador é um exemplo simples de como usar o hook useState para gerenciar 
o estado em um componente React. Ele mantém um contador que é incrementado a cada clique
no botão e exibe o valor atual do contador na tela.*/