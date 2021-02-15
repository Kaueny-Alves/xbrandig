import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ADD_CLIENTE, GET_CLIENTE, GET_CLIENTES_DETALHES } from "../api";
import Button from "../Components/Form/Button";
import Input from "../Components/Form/Input";
import useForm from "../Components/Hooks/useForm";
import DeleteCliente from "./DeleteCliente";
import styles from "./ButtonConteudos.module.css";

const Cliente = () => {
  const nome = useForm("input");

  const [lista, setLista] = useState();

  const history = useHistory();

  useEffect(() => {
    getClientes();
  }, []);

  async function getClientes() {
    try {
      const { url, options } = GET_CLIENTE();
      const response = await fetch(url, options);
      const json = await response.json();
      const clientes = await json.response;
      setLista(clientes);
      console.log(clientes);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDetalhesClientes(id) {
    try {
      const { url, options } = GET_CLIENTES_DETALHES(id);
      const response = await fetch(url, options);
      const json = await response.json();
      const clientes = await json.response;
      console.log(clientes);
    } catch (error) {
      console.log(error);
    }
  }

  async function adicionarCliente(e) {
    e.preventDefault();
    try {
      const { url, options } = ADD_CLIENTE(`nome=${nome.value}`);
      const response = await fetch(url, options);
      const json = await response.json();
      const arrayClientes = await json.response;
      getClientes();

      console.log(arrayClientes);
    } catch (error) {
      console.log(error);
    }
  }

  const sendConteudo = (id) => {
    getDetalhesClientes(id);
    history.push(`/conteudos/${id}`);
  };

  const listaDeClientes =
    lista &&
    lista.map(({ id, nome }) => (
      <div  key={id} name={id} value={nome}>
        <h3> {nome}</h3>
        <div className={styles.box} >
        <button className={styles.conteudos} onClick={() => sendConteudo(id)}>
          Conteudos
        </button>
        <DeleteCliente clienteId={id} />
        </div>
      </div>
    ));

  return (
    <div className="animeLeft">
      <h2 className="title"> Clientes</h2>
      <form onSubmit={adicionarCliente}>
        <Input
          {...nome}
          label="Nome do Cliente"
          type="text"
          name="nome"
          required
        />
        <Button type="submit">Criar</Button>
      </form>

      {listaDeClientes}
    </div>
  );
};

export default Cliente;
