import FeaturedMovie from './FeaturedMovie.js';
import "./FeaturedMovies.css";

const FeaturedMovies = props => {
    return (
        <div>
            <FeaturedMovie />
            <FeaturedMovie />
            <FeaturedMovie />
            <button>Browse All Titles</button>
        </div>
    );
};

export default FeaturedMovies;