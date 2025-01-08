import { useState } from "react";

function IncDec() {
  const [number, setNumber] = useState(0);
  function decriment() {
    setNumber((qosh) => (qosh === 0 ? 0 : qosh - 1));
  }
  return (
    <div className="w-[100px] h-[40px] border rounded-lg flex items-center gap-5">
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="text-[20px] w-8 rounded-full text-white bg-blue-500 box-border"
      >
        +
      </button>
      <h2 className="text-[26px]">{number}</h2>
      <button
        onClick={decriment}
        className="text-[20px] w-8 rounded-full text-white bg-blue-500 box-border"
      >
        -
      </button>
    </div>
  );
}

export default IncDec;
