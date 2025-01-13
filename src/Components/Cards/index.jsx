import elektr_pech from "../../assets/elektr-pech.png";
import bag_svg from "../../assets/bag-svg.svg";
import { useState } from "react";
import Korzina from "../korzina";
import Cards from "../Cards2";

function Card() {
  const cardlar = [
    {
      id: 1,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
  ];

  const [cardState, setCardState] = useState([]);

  return (
    <div className="max-w-[1440px] mx-auto flex flex-wrap gap-[20px] shadow-2xl shadow-gray-700 my-10 py-10 rounded-lg">
      <Korzina cardState={cardState} setCardState={setCardState} />
      {cardlar.map((item) => (
        <Cards
          key={item.id}
          rasm={item.rasm}
          malumot={item.malumot}
          rating={item.rating}
          sharh={item.sharh}
          oyiga_tolov={item.oyiga_tolov}
          eski_narx={item.eski_narx}
          chegirma_narx={item.chegirma_narx}
          bag_svg={item.bag_svg}
          setCardState={setCardState}
          cardState={cardState}
        />
      ))}
    </div>
  );
}

export default Card;
