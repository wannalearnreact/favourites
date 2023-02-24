import { useState } from 'react';

const Card = ({ data }) => {
    const { id, name } = data;
    const [favourites, setFavourites] = useState([]);

    const isFavourite = favourites.includes(id);

    const handleCardClick = () => {
        if (isFavourite) {
            setFavourites(favourites.filter((favId) => favId !== id));
        } else {
            setFavourites([...favourites, id]);
        }
    };

    return (
        <div
            key={id}
            className={`card ${isFavourite ? 'favourite' : ''}`}
            onClick={handleCardClick}
        >
            <h4>{name}</h4>
        </div>
    );
};
export default Card;
