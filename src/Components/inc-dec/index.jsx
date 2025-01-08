import { useState } from "react";

function IncDec() {
  const [number, setNumber] = useState(0);
  function decriment() {
    setNumber((qosh) => (qosh === 0 ? 0 : qosh - 1));
  }
  return (
    <div className="w-[100px] h-[40px] bg-slate-500 flex items-center gap-5">
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="text-[25px]"
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
