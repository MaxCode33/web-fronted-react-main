import { Link, useLocation } from "react-router-dom";
import Spinners from "../../components/Spinners";
import { useCards } from "../../hooks/useCards";
import { Box } from "@mui/material";

const Cards = () => {
  const { cards, loading, error } = useCards();
  let location = useLocation(); 
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {loading && <Spinners />}
      {error && <div>{error}</div>}

      {cards.map((c) => (
        <Link
          to={`${location.pathname}/${c._id}`}
          relative="path"
          key={c._id}
          className="shadow-2xl p-5 w-1/2 mx-auto rounded-md my-2 text-center"
        >
          <h2 className="text-xl">{c.title}</h2>
          <hr />
          <p>{c.subtitle}</p>
          <img src={c.image?.url} alt={c.image?.alt} />
        </Link>
      ))}
    </Box>
  );
};

export default Cards;
