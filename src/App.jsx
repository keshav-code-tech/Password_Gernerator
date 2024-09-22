import { useState, useCallback, useRef, useEffect } from "react";

function App() {
  let [length, setlength] = useState(8);
  let [num, setnum] = useState(false);
  let [char, setchar] = useState(false);
  let [password, setpassword] = useState();
  let Password_Copy = useRef(null);

  const Password_Generator = useCallback(() => {
    let arr = [
      "a",
      "A",
      "b",
      "B",
      "c",
      "C",
      "d",
      "D",
      "e",
      "E",
      "f",
      "F",
      "g",
      "G",
      "h",
      "H",
      "i",
      "I",
      "j",
      "J",
      "k",
      "K",
      "l",
      "L",
      "m",
      "M",
      "n",
      "N",
      "o",
      "O",
      "p",
      "P",
      "q",
      "Q",
      "r",
      "R",
      "s",
      "S",
      "t",
      "T",
      "u",
      "U",
      "v",
      "V",
      "w",
      "W",
      "x",
      "X",
      "y",
      "Y",
      "z",
      "Z",
    ];

    let pass = [];
    let index;
    let x;

    for (let i = 0; i < length; i++) {
      index = Math.floor(Math.random() * arr.length + 1);
      pass[i] = arr[index];
    }
    if (num) {
      let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      console.log("Heelo");

      index = Math.floor(Math.random() * numb.length + 1);
      x = Math.floor(Math.random() * arr.length + 1);
      pass[x] = numb[index];
    }
    if (char) {
      let char = ["!", "@", "#", "$", "%", "^", "&", "*"];
      index = Math.floor(Math.random() * char.length + 1);

      x = Math.floor(Math.random() * arr.length + 1);
      pass[x] = char[index];
    }
    // let passcode = pass.join("");
    setpassword(pass.join(""));
    
  }, [length, num, char, setpassword]);

  const passcode_copy = useCallback(() => {
    Password_Copy.current?.select();
    Password_Copy.current?.setSelectionRange(0, length+1);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="font-mono min-h-[120px] max-w-[590px] shadow-md bg-slate-700 my-10 mx-72 rounded-md p-4">
        <div className="flex">
          <input
            className="min-w-[375px] min-h-[36px] rounded-tl-md rounded-bl-md bg-slate-200 px-4 text-black"
            type="text"
            value={password}
            placeholder="Password"
            ref={Password_Copy}
            readOnly
          />
          <button
            onClick={passcode_copy}
            className="min-h-[36px] min-w-[97px] bg-green-700 text-lg text-white font-normal rounded-tr-md rounded-br-md"
          >
            copy
          </button>
        </div>
        <div className="my-4 flex align-middle justify-center">
          <input
            onChange={(e) => setlength(e.target.value)}
            className="max-w-11 cursor-pointer"
            value={length}
            type="range"
            min={8}
            max={16}
          />
          <p className="mx-3 text-xl font-medium text-orange-600">
            Length:{length}
          </p>
          <label
            className="mx-3 text-xl font-medium cursor-pointer text-orange-600"
            For="number"
          >
            Number
          </label>
          <input
            onChange={() => setnum((num = !num))}
            id="number"
            type="checkbox"
          />
          <label
            className="mx-3 text-xl font-medium cursor-pointer text-orange-600"
            For="character"
          >
            character
          </label>
          <input
            onChange={() => setchar((char = !char))}
            id="character"
            type="checkbox"
          />

          <button
            onClick={Password_Generator}
            className="mx-3 bg-blue-500 min-h-[36px] min-w-[70px] text-xl font-medium rounded-md"
          >
            Gen
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
