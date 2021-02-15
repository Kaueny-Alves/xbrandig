import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_CONTEUDOS } from "../api";
import DeletePoste from "./DeletePost";
import styles from "./ButtonConteudos.module.css"


const CriarConteudo = () => {
  const { clienteId, conteudoId } = useParams();

  const [conteudoCliente, setConteudoCliente] = useState("");

  async function getConteudos(clienteId, conteudoId) {
    try {
      const { url, options } = GET_CONTEUDOS(clienteId, conteudoId);
      const response = await fetch(url, options);
      const json = await response.json();
      const conteudo = await json.response.conteudo;
      setConteudoCliente(conteudo);
      console.log(conteudo);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getConteudos(clienteId, conteudoId);
  }, [clienteId, conteudoId]);

  return (
    <div>
      {conteudoCliente && (
        <div >
          <h2 className="title">{conteudoCliente.titulo}</h2>
          <p className={styles.analise}> {conteudoCliente.status}</p>
          <div className={styles.boxConteudo}>
            <p>{conteudoCliente.descricao}</p>
          </div>
          <DeletePoste clienteId={clienteId} conteudoId={conteudoId} />
        </div>
      )}
    </div>
  );
};

export default CriarConteudo;
