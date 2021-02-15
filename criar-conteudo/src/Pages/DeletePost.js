import React from "react";
import { useHistory } from "react-router-dom";
import { DEL_CONTEUDOS } from "../api";

import styles from "./ButtonDelete.module.css"



const DeletePoste = ({ clienteId, conteudoId }) => {

  const history = useHistory()
    
  async function deleteConteudo() {
    const confirme = window.confirm("Tem certeza que deseja deletar este conteudo?")
    if(confirme){
  
    try {
      const { url, options } = DEL_CONTEUDOS(clienteId, conteudoId);
      const response = await fetch(url, options);
      const json = await response.json();
      const conteudoApagado = await json.response;
      console.log(conteudoApagado);
      history.push(`/clientes`);
    } catch (error) {
      console.log(error);
    }
  }}

  return (
    <div>
      <button onClick={deleteConteudo} className={styles.delete}>
        Deletar
      </button>
    </div>
  );
};

export default DeletePoste;
