import { useEffect, useReducer } from "react";
import { getAll, search } from "../../Services/foodService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import NotFound from "../../components/Notfound/NotFound";

const initialState = { foods: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FOOD_LOADED":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;
  const { searchTerm } = useParams();

  useEffect(() => {
    const loadFoods = searchTerm ? search(searchTerm) : getAll();
    loadFoods.then((foods) =>
      dispatch({ type: "FOOD_LOADED", payload: foods })
    );
  }, [searchTerm]);

  return (
    <>
      <Search />

      {foods.length === 0 && <NotFound linkText="Reset Search" />}
      <Thumbnails foods={foods} />
    </>
  );
}
