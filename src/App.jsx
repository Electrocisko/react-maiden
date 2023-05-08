import { useState } from "react";
import Card from "./components/Card";
import { useEffect } from "react";

const App = () => {
  let id = 1;

  const [records, setRecords] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://fringe-mud-process.glitch.me/api/records")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data)
        setLoad(false)
      });
  }, []);

  if (load) {
    return <h1 className="text-center my-5" >Loading ....</h1>;
  } else {
    return (
      <>
        <h1 className="container text-center">Discos de Iron Maiden</h1>
        <br></br>

        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {records.map((record) => (
            <Card key={id++} record={record} />
          ))}
        </div>
      </>
    );
  }
};

export default App;
