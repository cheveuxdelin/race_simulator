import React from "react";
import Select from "./components/Select";
import F1img from "./assets/F1.svg";
import Table, { Person } from "./components/Table";
import Button from "./components/Button";

const dummyResults = [
  {
      name: "Checo Perez",
      podium: 1,
      constructor: "Red Bull",
      driver_confidence: 0.951691,
      constructor_reliability: 0.844697,
      image_url:
        "https://i.ibb.co/XYwkM0C/checo.png",
    },
    
    {
      name: "Lewis Hamilton",
      podium: 1,
      constructor: "Mercedez",
      driver_confidence: 0.951691,
      constructor_reliability: 0.844697,
      image_url:
        "https://i.ibb.co/bN8TtPJ/hamilton.png",
    },
    {
      name: "Charles Leclerc",
      podium: 1,
      constructor: "Ferrari",
      driver_confidence: 0.951691,
      constructor_reliability: 0.844697,
      image_url:
        "https://i.ibb.co/b1Gc29k/leclerc.png",
    },
    {
      name: "Max Verstappen",
      podium: 1,
      constructor: "Red Bull",
      driver_confidence: 0.951691,
      constructor_reliability: 0.844697,
      image_url:
        "https://i.ibb.co/wdLNLRr/verstappen.png",
    },
    {
      name: "Carlos Sainz",
      podium: 1,
      constructor: "Ferrari",
      driver_confidence: 0.951691,
      constructor_reliability: 0.844697,
      image_url:
        "https://i.ibb.co/ZV0mZC8/sainz.png",
    },
];

const dummyTrackList = ["a", "b", "c"];
const dummyWeatherList = ["d", "e", "f"];

function App() {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formJSON = JSON.stringify(Object.fromEntries(data));
    console.log(formJSON);
    setResults(dummyResults);
  }

  const [tracksList, setTracksList] = React.useState<string[]>([]);
  const [weathersList, setWeathersList] = React.useState<string[]>([]);

  React.useEffect(() => {
    setTracksList(dummyTrackList);
    setWeathersList(dummyWeatherList);
  }, []);

  const [results, setResults] = React.useState<Person[]>();

  return (
    <>
      <h1 className="text-4xl mt-12 ml-12 font-bold tracking-tight text-white sm:text-6xl">
              F1 Predictor
            </h1>
      <img src={F1img} className="F1-image" />

      <div className="w-[400px] h-[300px] flex flex-col bg-[#111111] rounded-xl p-5 box mb-4">
        <h2 className="text-2xl mb-3 text-center text-white mr-14">Predict Race</h2>
        <form onSubmit={submitHandler} className="h-full  mr-14">
          <Select options={tracksList} label="Track" />
          <Select options={weathersList} label="Location" />
          <Button text="Go" />
        </form>
      </div>

        {results && <Table results={results} />}

    </>
  );
}

export default App;
