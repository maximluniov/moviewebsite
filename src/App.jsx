import Searchbar from "./components/Searchbar";
import Movies from "./components/Movies";
import { useState } from "react";
import index from './assets/index'
import Footer from "./components/Footer";
function App() {


const [info,setInfo] = useState("")

 const handleInfo = (data) => {
  setInfo(data);
 }

  return (
    <div className="App mx-8">
      <div className="flex items-end font-bold text-2xl">
      <img src={index.logo} width={200} alt="logo" />
      <h1 className="mb-2">TO WATCH</h1>
      </div>
        <Searchbar onSubmit={handleInfo} />
        <Movies searchInfo={info} />
        <Footer/>
    </div>
  );
}

export default App;
