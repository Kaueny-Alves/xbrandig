import React from "react";
import {  DEL_CLIENTE } from "../api";

import styles from "./ButtonDelete.module.css"

const DeleteCliente = ({ clienteId }) => {

 
    
  async function deleteCliente() {
    const confirme = window.confirm("Tem certeza que deseja deletar este cliente?")
    if(confirme){
      try {
        const { url, options } = DEL_CLIENTE(clienteId);
        const response = await fetch(url, options);
        const json = await response.json();
        const clienteApagado = await json.response;
        console.log(clienteApagado);
        if(response.ok) window.location.reload();
      } catch (error) {
        console.log(error);
      }

    } 
   
  }

  return (
    <div>
      <button onClick={deleteCliente} className={styles.delete}>
        Deletar
      </button>
    </div>
  );
};

export default DeleteCliente;
