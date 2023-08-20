import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../redux/actions/gamesAction";
import { useLocation } from "react-router-dom";
import Game from "../../components/Game";

export default function Shop() {
  const location = useLocation();

  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular } = useSelector((state) => state.games);

  return (
    <div className="mx-16 mt-5">
      <div>
        <h1 className="text-6xl bold font-bold font-Poppins">All time top</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-center gap-6 mt-8">
        {popular &&
          popular.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              price={game.price}
              img={game.background_image}
              released={game.released}
              clip={game.clip}
              platforms={game.platforms}
              id={game.id}
            />
          ))}
      </div>
    </div>
  );
}
