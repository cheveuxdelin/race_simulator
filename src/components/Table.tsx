import randomColor from "randomcolor";

export interface Person {
  name: string;
  podium: number;
  constructor: string;
  driver_confidence: number;
  constructor_reliability: number;
}

interface TableProps {
  results: Person[];
}

export default function Table({ results }: TableProps) {
  return (
    <div className="table-component p-4 rounded-xl overflow-y-scroll">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y  w-[600px]  ">
              <thead className="border-b border-white/50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white  sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Podium
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Confidence
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Constructior Reliability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/30 bg-[#111111]">
                {results.map((person) => (
                  <tr key={person.name}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0 rounded-full" style={{ backgroundColor: randomColor() }}>
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-white">{person.name}</div>
                          <div className="mt-1 text-gray-500">{person.constructor}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-500">
                      <div className="text-white text-center">{person.podium}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-white text-center">{person.driver_confidence}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-white text-center">{person.constructor_reliability}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
