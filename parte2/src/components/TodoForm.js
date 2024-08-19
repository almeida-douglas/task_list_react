import React, {useState} from 'react'


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value:'')
    const changeHolder = x =>{
        setInput(x.target.value)

    }
    const submitHolder = x =>{
        x.preventDefault();

      props.onSubmit({
         id: Math.floor(Math.random() * 500),
         text: input
     });
     setInput('');
    };
       
  return (
<form className="todo_form" onSubmit={submitHolder}>
  {props.edit ? (
    <>
      <input 
        type="text" 
        placeholder='Mude a tarefa' 
        value={input} 
        name='text' 
        className='input_todo' 
        onChange={changeHolder}
      />
      <button className='todo_button'>Enviar</button>
    </>
  ) : (
    <>
      <input 
        type="text" 
        placeholder='Adicione algo...' 
        value={input} 
        name='text' 
        className='input_todo' 
        onChange={changeHolder}
      />
      <button className='todo_button'>Adicionar tarefa</button>
    </>
  )}
</form>
  )
}

export default TodoForm
