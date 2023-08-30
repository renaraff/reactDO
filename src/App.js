import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState ([]);
  const [tarefa, setTarefa ] = useState ( {id: '' , texto: "" , status: ""});

  function addTarefa()
  {
    if( tarefa.texto !=="" ){
      setListaTarefas([...listaTarefas, tarefa ]);
    }
  }


  function excluirTarefa(id) {
    const novalista = listaTarefas.filter( tarefa => tarefa.id !== id);
    setListaTarefas(novalista);
  }


  function concluirTarefa(id, status) {
    const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id );
        listaTarefas[index].status = !status;
    setListaTarefas( [...listaTarefas] );
  }


  useEffect(() =>{
    setTarefa( { id: "", texto: "", status:"" });
}, [listaTarefas])


  return (
    <>
    <header>
      <h1>TO DO LIST</h1>
    </header>
    <div className="caixa">
      <div className="caixa1">
        <button className="adicionar" onClick={addTarefa}>+</button>
        <input maxLength={60} type="text" nome= "tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false })} />
      </div>
      <div className="caixa2">
        <ul> 
          {listaTarefas.map( (item, index ) => (
           <li className="lista" key={item.id}>
            <button className="botao" onClick={() => concluirTarefa(item.id, item.status) }>{item.status ? '☑' : '☐'}</button>
            <button className="botao" onClick={() => excluirTarefa(item.id) }>☒</button>
            {item.texto}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className="rodape">
      <p>OUTRAS LISTAS</p>
          <ul>
            <li className="li"><a href="#"> ✦ LISTA 1</a></li>
            <li className="li"><a href="#"> ✦ LISTA 2</a></li>
          </ul>

      </div>
    </>
   
  );
}


export default App;