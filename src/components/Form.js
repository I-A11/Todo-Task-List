import React from "react";
const Form = ({ textInput, setTextInput, todos, setTodos }) => {
  const textInputHandler = (e) => {
    // console.log(e.target.value);
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: textInput, completed: false, id: Math.random() * 1000 },
    ]);
    setTextInput("");
  };
  return (
    <>
      <form className='grocery-form'>
        <p className='alert'></p>
        <h2>Todo List </h2>
        <div className='form-control'>
          <input
            value={textInput}
            onChange={textInputHandler}
            type='text'
            id='grocery'
            placeholder='e.g. Water The Garden'
          />
          <button onClick={submitHandler} type='submit' className='submit-btn'>
            Submit
          </button>
          <div className='select'>
            <select name='todos' className='filter-todo'>
              <option value='all'>All</option>
              <option value='completed'>Completed</option>
              <option value='uncompleted'>Uncompleted</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
