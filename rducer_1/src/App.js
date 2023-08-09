import { useStore,inputJob,addJob } from './store'
import { useRef } from 'react';


function App() {

  const [state, dispath] = useStore();// state là state nguồn đưuọc lấy từ usecontext và trong usecontext có sử dụng useReducer => state=init

  const inputRef=useRef();

  const submit=()=>{
    dispath(addJob(state.inputJob));
    dispath(inputJob(' '));
    inputRef.current.focus();
  }
  return (
    <div style={{ padding: "20px" }}>
      <input
        ref={inputRef}
        type='text'
        value={state.inputJob}
        placeholder='... nhập thông tin'
        onChange={(e)=>dispath(inputJob(e.target.value))} />
      <button onClick={submit}> Add</button>
      <ul>
        {state.listJobs&& state.listJobs.map((item,index)=>{
          return(
            <li key={index}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
