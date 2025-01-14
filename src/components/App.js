import React, { useReducer } from 'react';
import {initialState} from '../reducers';
import reducer from '../reducers';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { addOne, applyNumber, changeOperation, clearDisplay, setMemory, applyMemory, clearMemory } from '../actions';

function App() {
  
  const handleChangeOperation = (e) => {
    dispatch(changeOperation(e.target.value))
  }

  const handleApplyNumber = e => {
    dispatch(applyNumber(e.target.value))
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }
  
  const handleSetMemory = () => {
    dispatch(setMemory())
  }

  const handleApplyMemory= () => {
    dispatch(applyMemory())
  }

  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleSetMemory} value={"M+"}/>
              <CalcButton onClick={handleApplyMemory} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={1}/>
              <CalcButton onClick={handleApplyNumber} value={2}/>
              <CalcButton onClick={handleApplyNumber} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={4}/>
              <CalcButton onClick={handleApplyNumber} value={5}/>
              <CalcButton onClick={handleApplyNumber} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={7}/>
              <CalcButton onClick={handleApplyNumber} value={8}/>
              <CalcButton onClick={handleApplyNumber} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleChangeOperation} value={"+"}/>
              <CalcButton onClick={handleChangeOperation} value={"*"}/>
              <CalcButton onClick={handleChangeOperation} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearDisplay} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
