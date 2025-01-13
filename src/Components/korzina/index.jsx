function Korzina() {
  return (
    <div className="w-[413px] p-3 border flex flex-col gap-5">
      {cardState.map((item, index) => {
        return (
          <Korzina_kard
            key={index}
            img={item.rasm}
            name={item.name}
            narx={item.narx}
            delete02Icon={item.delete}
          />
        );
      })}

      <div className="flex gap-5">
        <button className="w-[105px] h-[37px] bg-[#7000FF] text-white rounded-md">
          Tozalash
        </button>
        <button className="w-[105px] h-[37px] bg-[#3636361C] rounded-md">
          Umumiy: 5 ta
        </button>
      </div>
    </div>
  );
}

function Korzina_kard({ img, name, narx, delete02Icon }) {
  return (
    <div className="flex items-center gap-5">
      <img className="w-20" src={img} alt="" />
      <div>
        <p className="text-[18px]">{name}</p>
        <p className="text-[20px] font-bold">{narx}</p>
      </div>
      <button>{delete02Icon}</button>
    </div>
  );
}

export default Korzina;
