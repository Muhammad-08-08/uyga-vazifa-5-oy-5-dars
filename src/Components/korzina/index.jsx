function Korzina({ cardState, setCardState }) {
  const tozalash = () => {
    setCardState([]);
  };

  const ochirish = (index) => {
    const newCardState = cardState.filter((_, i) => i !== index);
    setCardState(newCardState);
  };

  return (
    <div className="w-[413px] p-3 border flex flex-col gap-5">
      {cardState.length === 0 ? (
        <p>Savatcha bo‘sh</p>
      ) : (
        cardState.map((item, index) => (
          <Korzina_kard
            key={index}
            img={item.rasm}
            name={item.name}
            narx={item.narx}
            delete1={<button onClick={() => ochirish(index)}>O'chirish</button>}
          />
        ))
      )}

      <div className="flex gap-5">
        <button
          className="w-[105px] h-[37px] bg-[#7000FF] text-white rounded-md"
          onClick={tozalash}
        >
          Tozalash
        </button>
        <button className="w-[105px] h-[37px] bg-[#3636361C] rounded-md">
          Umumiy: {cardState.length} ta
        </button>
      </div>
    </div>
  );
}

function Korzina_kard({ img, name, narx, delete1 }) {
  return (
    <div className="flex items-center gap-5">
      <img className="w-20" src={img} alt="Mahsulot rasmi" />
      <div>
        <p className="text-[18px]">{name}</p>
        <p className="text-[20px] font-bold">{narx}</p>
      </div>
      <div>{delete1}</div>
    </div>
  );
}

export default Korzina;
