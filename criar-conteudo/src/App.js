import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

import Header from "./Components/Header/Header";
import CriarConteudo from "./Pages/CriarConteudo";
import Conteudo from "./Pages/Conteudo";
import Cliente from "./Pages/Cliente";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/clientes">
            <Cliente />
          </Route>
          <Route path="/cliente/:clienteId/conteudo/:conteudoId">
            <CriarConteudo />
          </Route>
          <Route path="/conteudos/:clienteId">
            <Conteudo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
