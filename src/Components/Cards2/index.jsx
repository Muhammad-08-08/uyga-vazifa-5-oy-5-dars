import { useState } from "react";
import rating_icon from "../../assets/rating-icon.svg";
import IncDec from "../inc-dec";
import likes_svg from "../../assets/likes.svg";

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
        <div className="flex justify-between items-center gap-2 mt-5">
          <div>
            <del className="text-[11.2px] text-[#8B8E99]">
              {props.eski_narx}
            </del>
            <h4 className="text-[14px] text-[#1F2026] font-medium">
              {props.chegirma_narx}
            </h4>
          </div>
          <IncDec />
          <img src={props.bag_svg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
