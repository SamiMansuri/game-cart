import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../redux/actions/gamesAction";
import { useParams } from "react-router-dom";
import Game from "../../components/Game";
import GameDetails from "../../components/GamesDetail";

const Shop = () => {
  const location = useParams();

  // console.log(location);

  // const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular } = useSelector((state) => state.games);
  // console.log(pathId);

  return (
    <div className="mx-16 mt-5">
      {location && (
        <div>
          <GameDetails pathId={location} />
        </div>
      )}
      <div>
        <h1 className="text-6xl bold font-bold font-Poppins">All time top</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-center gap-6 mt-8">
        {popular &&
          popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              img={game.background_image}
              key={game.id}
            />
          ))}
        {/* {console.log(game.id)} */}
      </div>
    </div>
  );
};

export default Shop;
