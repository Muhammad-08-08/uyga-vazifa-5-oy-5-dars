import { useState } from "react";

function IncDec() {
  const [number, setNumber] = useState(0);
  function decriment() {
    setNumber((qosh) => (qosh === 0 ? 0 : qosh - 1));
  }
  return (
    <div className="w-[100px] h-[40px] flex items-center gap-5">
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="text-[25px] w-8 h-8 bg-blue-500 box-border"
      >
        +
      </button>
      <h2 className="text-[26px]">{number}</h2>
      <button onClick={decriment} className="text-[25px]">
        -
      </button>
    </div>
  );
}

export default IncDec;
