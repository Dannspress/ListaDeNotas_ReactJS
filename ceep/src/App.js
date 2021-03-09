import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas/listaDeNotas'
import FormularioCadastro from './components/formularioCadastro/formularioCadastro'
import "./assets/app.css";
import "./assets/index.css"


class App extends Component {
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  };
};

export default App;