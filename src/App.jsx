import React, {useState} from 'react'
import FirstStep from "./components/FirstStep"
import SecondStep from "./components/SecondStep"
import ThirdStep from "./components/ThirdStep"
import FourthStep from "./components/FourthStep"
import "./App.css"


const App = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    ime:"",
    prezime: "",
    email:"",
    grad:"",
    zanimanje:"",
    godine:"",
  });

  return (
    <div className="App">
       
       {page === 1 && <FirstStep   page={page} setPage={setPage} data={data} setData={setData} />}
       {page === 2 && <SecondStep  page={page} setPage={setPage} data={data} setData={setData}/>}
       {page === 3 && <ThirdStep  page={page} setPage={setPage} data={data}/>}
       {page === 4 && <FourthStep/>}

    </div>
  );
};

export default App