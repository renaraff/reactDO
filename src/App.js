import { useEffect, useState } from "react";

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
      <div>
        <input type="text" nome= "tarefa" placeholder="Digite sua tarefa" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false })} />
        <button onClick={addTarefa}>Add itens</button>
    
      </div>
      <div>
        <ul> 
          {listaTarefas.map( (item, index ) => (
           <li key={item.id}>{item.texto}<button  onClick={() => concluirTarefa(item.id, item.status) }>{item.status ? 'Concluida' : 'Não Concluida'}</button> <button onClick={() => excluirTarefa(item.id) }>Excluir</button></li>
          ))}
        </ul>
      </div>
    </>
   
  );
}


export default App;