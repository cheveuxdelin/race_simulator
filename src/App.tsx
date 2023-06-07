import React from "react";
import Select from "./components/Select";
import F1img from "./assets/F1.svg";
import Table, { Person } from "./components/Table";
import Button from "./components/Button";

// Unsafe but serves demonstration purposes
const serverURL = "http://140.84.163.252:5000";

function App() {

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("circuit") && data.get("weather")) {
      const response = await fetch(`${serverURL}/predict`, {
        method: "POST",
        body: data
      });

      const responseJSON: Person[] = await response.json();
      setResults(responseJSON);
    }
  }

  const [results, setResults] = React.useState<Person[]>();

  return (
    <>
      <h1 className="text-4xl mt-12 ml-12 font-bold ting-tight text-white sm:text-6xl">
        F1 Predictor
      </h1>
      <img src={F1img} className="F1-image" />

      <div className="w-[400px] h-[300px] flex flex-col bg-[#111111] rounded-xl p-5 box mb-4">
        <h2 className="text-2xl mb-3 text-center text-white mr-14">Predict Race</h2>
        <form onSubmit={submitHandler} className="h-full  mr-14">
          <Select
            options={['Bahrain International Circuit', 'Autodromo Enzo e Dino Ferrari', 'Autódromo Internacional do Algarve', 'Circuit de Barcelona-Catalunya', 'Circuit de Monaco', 'Baku City Circuit', 'Circuit Paul Ricard', 'Red Bull Ring', 'Silverstone Circuit', 'Hungaroring', 'Circuit de Spa-Francorchamps', 'Circuit Park Zandvoort', 'Autodromo Nazionale di Monza', 'Sochi Autodrom', 'Marina Bay Street Circuit', 'Suzuka Circuit', 'Circuit of the Americas', 'Autódromo Hermanos Rodríguez', 'Autódromo Internacional Nelson Piquet', 'Jeddah Street Circuit', 'Yas Marina Circuit']}
            label="circuit"
            placeholer="Select circuit"
          />
          <Select
            options={['warm', 'cold', 'dry', 'wet', 'cloudy']}
            label="weather"
            placeholer="Select Weather"
          />
          <Button text="Go" />
        </form>
      </div>

      {results && <Table results={results} />}

    </>
  );
}

export default App;
