import elektr_pech from "../../assets/elektr-pech.png";
import bag_svg from "../../assets/bag-svg.svg";
import Cards from "../Cards2";
import { useState } from "react";

const Delete02Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#000000"}
    fill={"none"}
    {...props}
  >
    <path
      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9.5 16.5L9.5 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.5 16.5L14.5 10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

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
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 2,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 3,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 4,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 5,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 6,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 7,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 8,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 9,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
    {
      id: 10,
      rasm: elektr_pech,
      malumot: "Elektr isitgich, konvektor ARSHiA, 2500 Vt, 3 isitish rejimi,…",
      rating: "5.0",
      sharh: "(75 sharh)",
      oyiga_tolov: "42 000 so'm/oyiga",
      bag_svg: bag_svg,
      eski_narx: "670 000 so'm",
      chegirma_narx: "350 000 so'm",
    },
  ];

  const [cardState, setCardState] = useState([
    {
      rasm: elektr_pech,
      name: "Elektr isitgich, konvektor ARSHiA",
      narx: "123 000 som",
      delete: <Delete02Icon />,
    },
  ]);

  return (
    <div className="w-[1440px] mx-auto flex flex-wrap gap-[20px] shadow-2xl shadow-gray-700 my-10 py-10 rounded-lg">
      {cardlar.map((item) => {
        return (
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
        );
      })}
    </div>
  );
}

export default Card;
