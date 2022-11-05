import "./UnderConstruction.css";
import { BsHammer } from "react-icons/bs";
import {useEffect} from 'react'

function UnderConstruction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{ height: "100vh",width: '100vw'}}
      className="row justify-content-center align-items-center bg-dark"
    >
      <div className="glitch d-flex justify-content-center">
        <h1 className="glitch-font"> <BsHammer /> UNDER CONSTRUCTION</h1>
      </div>
    </div>
  );
}

export default UnderConstruction;
