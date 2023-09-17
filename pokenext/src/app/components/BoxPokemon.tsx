import "@/app/globals.css";
import { useEffect, useState } from "react";
interface boxProps {
  pokemon: any;
}
const BoxPokemon = (props: boxProps) => {
  const _ = props.pokemon;
  const type = _.types[0].type.name;
  const type2 = _.types.length > 1 && _.types[1].type.name;

  console.log(_);

  return (
    <>
      <div
        className={`w-60 h-72 rounded hover:scale-125 m-1 transition-all flex justify-center
        items-center flex-wrap bg-cover`}
        style={{ backgroundImage: `url('/img/bg/${_.types.length > 1 ? 
            type == 'normal'? type2 : type : type 
        }.jpg')` }}
      >
        <div className="w-11/12 mx-auto flex pokemon items-center justify-between mt-1 ">
          <p className=" p-2 bg-slate-600 rounded-md">
            {_.id < 10 ? "00" + _.id : _.id < 100 ? "0" + _.id : _.id}
          </p>
          <p className="uppercase w-full text-start indent-5 bg-gray-800">{_.name}</p>
        </div>
        <div className="flex justify-center items-center w-11/12 mx-auto">
          <img className=" w-44 h-44 drop-shadow-2xl" src={_.sprites.front_default} alt="" />
        </div>
        <div className="flex w-11/12 justify-around items-center ">
          <img className="w-30 h-10" src={`/img/types/${type}.png`} alt="" />
          {type2 && (
            <img className="w-30 h-10" src={`/img/types/${type2}.png`} alt="" />
          )}
        </div>
      </div>
    </>
  );
};

export default BoxPokemon;
