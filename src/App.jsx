import { useState } from "react";

import Perfil from "./components/Perfil";

import ReposList from "./components/ReposList";


function App() {
  const [formularioVisivel, setFormularioEstaVisivel] = useState();
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      <input className="inputApp" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioVisivel && (
            <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioVisivel)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
