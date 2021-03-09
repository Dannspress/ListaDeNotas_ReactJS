import React, { Component } from 'react';
import ListaDeNotas from './components/listaDeNotas'
import FormularioCadastro from './components/formularioCadastro'

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  };
};

export default App;
