import React, {useState, useEffect} from "react"
import Tittleapp from "./components/Titleapp";
import Description from "./components/Description";
import Session from "./components/Session";

function App() {
  return (
    <div>
      <Tittleapp/>
      <Session/>
      <Description />
    </div>
  )
}

export default App;