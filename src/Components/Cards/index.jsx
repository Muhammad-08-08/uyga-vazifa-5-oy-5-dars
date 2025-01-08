import likes_svg from "../../assets/likes.svg";
import elektr_pech from "../../assets/elektr-pech.png";
import rating_icon from "../../assets/rating-icon.svg";
import bag_svg from "../../assets/bag-svg.svg";
import { useState } from "react";

function Card() {
  const cardlar = [
    {
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

  return (
    <div className="w-[1440px] mx-auto flex flex-wrap gap-[20px] shadow-2xl shadow-gray-700 my-10 py-10 rounded-lg">
      {cardlar.map((item) => {
        return (
          <Cards
            rasm={item.rasm}
            malumot={item.malumot}
            rating={item.rating}
            sharh={item.sharh}
            oyiga_tolov={item.oyiga_tolov}
            eski_narx={item.eski_narx}
            chegirma_narx={item.chegirma_narx}
            bag_svg={item.bag_svg}
          />
        );
      })}
    </div>
  );
}

function Cards(props) {
  const [color, setColor] = useState("");

  function like_bosish() {
    setColor((rang) => (rang === "" ? "red" : ""));
  }
  return (
    <div className="w-[232px] h-[472px] mx-auto">
      <div className="relative">
        <img
          onClick={like_bosish}
          className="absolute right-2 top-2 cursor-pointer"
          style={{ background: color }}
          src={likes_svg}
          alt=""
        />
        <img src={props.rasm} alt="" />
        <p className="px-3  text-[13px] text-white  bg-[#3B007D] absolute left-2 bottom-2 rounded-lg">
          Aksiya
        </p>
      </div>
      <div className="pl-4">
        <p className="text-[12.8px] mt-3">{props.malumot}</p>
        <div className="flex gap-2 items-center mt-1 mb-2">
          <img src={rating_icon} alt="" />
          <p className="text-[11.2px] text-[#8B8E99]">{props.rating}</p>
          <p className="text-[11.2px] text-[#8B8E99]">{props.sharh}</p>
        </div>
        <p className="px-2 bg-[#FFFF00] w-max text-[11px] text-[#1F1F26]">
          {props.oyiga_tolov}
        </p>
        <div className="flex items-center gap-2 mt-5">
          <div>
            <del className="text-[11.2px] text-[#8B8E99]">
              {props.eski_narx}
            </del>
            <h4 className="text-[14px] text-[#1F2026] font-medium">
              {props.chegirma_narx}
            </h4>
          </div>
          <img src={props.bag_svg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
