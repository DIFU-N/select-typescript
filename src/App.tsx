import { useState } from "react"
import Select from "./Select"

function App() {
  const options = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Third", value: 3 },
    { label: "Fourth", value: 4 },
    { label: "Five", value: 5 },
  ]
  // dont forget to run this one too.
  // just restart the project
  // npm install autoprefixer
  //npm install --save-dev @types/react @types/react-dom
  // npm install typescript @types/react @types/react-dom
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
  return (
    <div>
      <Select options={options} value={value} onChange={o => setValue(o)}/>
      {/* <input type="search" id=""
      className="h-9 border-black border-2 w-96"
      />
      <div className="border-solid border-[.25em] border-t-gray-700 translate-x-0 translate-y-1/4">
        aa
      </div>
      <button className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        <svg className="w-20 h-20 fill-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 8l4 4 4-4"></path>
        </svg>
      </button> */}


    </div>
  )
}

export default App
