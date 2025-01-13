import { useState } from "react";
import rating_icon from "../../assets/rating-icon.svg";
import IncDec from "../inc-dec";
import likes_svg from "../../assets/likes.svg";
import qizil_likes from "../../assets/heart-solid.svg";

function Cards({
  rasm,
  malumot,
  rating,
  sharh,
  oyiga_tolov,
  eski_narx,
  chegirma_narx,
  bag_svg,
  setCardState,
  cardState,
}) {
  const [color, setColor] = useState(likes_svg);

  function like_bosish() {
    setColor((rang) => (rang === likes_svg ? qizil_likes : likes_svg));
  }

  return (
    <div className="w-[232px] h-[472px] mx-auto">
      <div className="relative">
        <img
          onClick={like_bosish}
          className="absolute right-2 top-2 cursor-pointer w-6"
          src={color}
          alt=""
        />
        <img src={rasm} alt="" />
        <p className="px-3  text-[13px] text-white  bg-[#3B007D] absolute left-2 bottom-2 rounded-lg">
          Aksiya
        </p>
      </div>
      <div className="pl-4">
        <p className="text-[12.8px] mt-3">{malumot}</p>
        <div className="flex gap-2 items-center mt-1 mb-2">
          <img src={rating_icon} alt="" />
          <p className="text-[11.2px] text-[#8B8E99]">{rating}</p>
          <p className="text-[11.2px] text-[#8B8E99]">{sharh}</p>
        </div>
        <p className="px-2 bg-[#FFFF00] w-max text-[11px] text-[#1F1F26]">
          {oyiga_tolov}
        </p>
        <div className="flex justify-between items-center gap-2 mt-5">
          <div>
            <del className="text-[11.2px] text-[#8B8E99]">{eski_narx}</del>
            <h4 className="text-[12.5px] text-[#1F2026] font-medium">
              {chegirma_narx}
            </h4>
          </div>
          <IncDec />
          <img
            onClick={() => {
              const new_arr = cardState.concat([
                {
                  rasm: rasm,
                  narx: narx,
                  name: name,
                },
              ]);
              setCardState(new_arr);
            }}
            src={bag_svg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
