import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadDetail } from "../redux/actions/detailsAction";

const Game = ({ name, released, img, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  const stringPathId = id.toString();
  // console.log(id);
  return (
    <div
      onClick={loadDetailHandler}
      className="relative max-w-700px overflow-hidden bg-[rgb(32, 32, 32)] bg-[#000000] rounded-xl transition duration-300 ease-0s "
    >
      <Link
        className="bg-transparent"
        // onclick={console.log("hello")}
        to={`/game/${id}`}
      >
        <img
          alt={name}
          id={stringPathId}
          className="aspect-[1.7_/_1] aspect-h-1 object-cover h- w-full bg-[center_center] rounded-t-[18px]"
          src={img}
        />
      </Link>

      <div className="flex  flex-col gap-[10] mx-[20px] my-[15px]">
        <div className="font-Fira font-medium text-[#8d8c8c79]">
          add to cart
        </div>
        <div className="font-Fira font-medium flex text-[#8d8c8c79] gap-[7px]">
          platform
        </div>
        <Link onClick="" to="">
          <h1 id={stringPathId} className="text-lg font-bold text-[#cec2c2]">
            {name}
          </h1>
        </Link>
        <p className="text-grey-darker text-sm">
          {/* {released ? released.replace(/[-]/g, "/") : ""} */}
        </p>
      </div>
    </div>
  );
};

export default Game;
