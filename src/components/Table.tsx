export interface Person {
  name: string;
  podium: number;
  constructor: string;
  driver_confidence: number;
  constructor_reliability: number;
  image_url: string;
}

interface TableProps {
  results: Person[];
}

export default function Table({ results }: TableProps) {
  return (
    <div className="table-component  bg-slate-700 p-4 rounded-xl">
      <h2 className="text-white text-2xl text-center">Results</h2>
      <ul
        role="list"
        className="divide-y divide-gray-800 w-[600px] h-[500px] overflow-y-scroll"
      >
        {results.map((person) => (
          <li key={person.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <p className="self-center text-white">#{person.podium}</p>
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-800"
                src={person.image_url}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                  {person.constructor}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs leading-5 text-gray-400">
                Constructor reliability: {person.constructor_reliability}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-400">
                Driver confidence: {person.driver_confidence}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
