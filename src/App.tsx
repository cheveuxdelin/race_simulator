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
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Checo Perez",
    podium: 1,
    constructor: "Red Bull",
    driver_confidence: 0.951691,
    constructor_reliability: 0.844697,
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
      <h1 className="text-white text-3xl p-5">Formula 1 Race Predictor</h1>
      <img src={F1img} className="F1-image" />

      <div className="w-[300px] h-[300px] flex flex-col bg-slate-700 rounded-xl p-5 box">
        <h2 className="text-2xl mb-3 text-center text-white">Predict</h2>
        <form onSubmit={submitHandler} className="h-full space-y-3">
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
