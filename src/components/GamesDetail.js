import React from "react";
import { resizedImage } from "../utils";
import { Carousel } from "./carousel";
import { BsStar, BsStarFill } from "react-icons/bs";
import {
  SiApple,
  SiGoogleplay,
  SiNintendoswitch,
  SiPlaystation4,
  SiPlaystation,
  SiSteam,
  SiXbox,
} from "react-icons/si";
import { RiGamepadFill, RiXboxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GameDetail = ({ pathId }) => {
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  const history = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const starRating = () => {
    const star = [];
    const rating = Math.round(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<BsStarFill key={i} />);
      } else {
        star.push(<BsStar key={i} />);
      }
    }
    return star;
  };

  const platformLogo = (platform) => {
    switch (platform) {
      case "Apple" && "iOS" && "macOS":
        return <SiApple title={`${platform}`} />;
      case "Android" && "Google Play":
        return <SiGoogleplay />;
      case "Nintendo Switch":
        return <SiNintendoswitch />;
      case "PC":
        return <SiSteam />;
      case "PlayStation 4":
        return <SiPlaystation4 />;
      case "PlayStation 5":
        return <SiPlaystation />;
      case "Xbox One":
        return <RiXboxLine />;
      case "Xbox Series S/X":
        return <SiXbox />;
      default:
        return <RiGamepadFill />;
    }
  };

  console.log("hello");

  return (
    <>
      {!isLoading && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={exitDetailHandler}
        >
          <div className="w-full max-w-3xl p-4 overflow-y-auto bg-[#161515] rounded-lg shadow-lg">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                {game.platforms &&
                  game.platforms.map((data) => (
                    <ul key={data.platform.id}>
                      <li>
                        <h4>{data.platform.name}</h4>
                        {platformLogo(data.platform.name)}
                      </li>
                    </ul>
                  ))}
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={exitDetailHandler}
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <img
                src={resizedImage(game.background_image, 1920)}
                alt="game_image"
                className="w-full rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">{game.name}</h2>
              <p className="mt-1 text-gray-600">
                Rating: {Math.round(game.rating)}
              </p>
              <div className="flex mt-2">{starRating()}</div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Platforms</h3>
              <div className="flex items-center gap-2 mt-1">
                {/* Platform logos here */}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="mt-1 text-gray-600">{game.description_raw}</p>
            </div>
            <div className="mt-4">
              <Carousel slides={screenshots.imaage} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetail;
