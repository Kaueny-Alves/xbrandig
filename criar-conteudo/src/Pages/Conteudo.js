import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ADD_CONTEUDO, GET_CLIENTES_DETALHES } from "../api";
import Button from "../Components/Form/Button";
import Input from "../Components/Form/Input";
import useForm from "../Components/Hooks/useForm";
import styles from "./ButtonConteudos.module.css"


const Conteudo = () => {
  const { clienteId } = useParams();

  const history = useHistory();

  const titulo = useForm("");
  const detalhes = useForm("");
  const [lista, setLista] = useState([]);

  async function adicionarConteudo(e) {
    e.preventDefault();
    try {
      const { url, options } = ADD_CONTEUDO(
        `titulo=${titulo.value}&detalhes=${detalhes.value}`,
        clienteId
      );
      const response = await fetch(url, options);
      const json = await response.json();
      const arrayConteudos = await json.response;
      getDetalhesClientes(clienteId);
      console.log(arrayConteudos);
     
    } catch (error) {
      console.log(error);
    }
  }

  async function getDetalhesClientes(clienteId) {
    try {
      const { url, options } = GET_CLIENTES_DETALHES(clienteId);
      const response = await fetch(url, options);
      const json = await response.json();
      const clientesConteudos = await json.response;
      setLista(clientesConteudos.conteudo);
      console.log(clientesConteudos.conteudo);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetalhesClientes(clienteId);
  }, [clienteId]);

  const handleClick = (conteudoId) => {
    console.log("cliquei");
    history.push(`/cliente/${clienteId}/conteudo/${conteudoId}`);
  };

  return (
    <div className="animeLeft">
      <h2 className="title">Conteudos</h2>
      <form onSubmit={adicionarConteudo} >
        <Input {...titulo} label="Titulo" type="text" name="titulo" />
        <Input
          {...detalhes}
          label="Conteudo"
          type="text"
          name="detalhes"
        />
        <Button type="submit">Criar Conteudo</Button>
      </form>
      <hr />

      <div>
        {lista  &&
          lista.map((item) => (
            <div 
              onClick={() => {
                handleClick(item.id);
              }}
              key={item.id}
            >
               <section className={styles.boxCriarConteudo}>
              <h2>{item.titulo}</h2>
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Conteudo;
