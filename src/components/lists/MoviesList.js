import { FlatList } from "native-base";
import MovieTvCard from "../cards/MovieTvCard";

const MoviesList = props => {
    const { navigation, movies } = props;

    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => (
                <MovieTvCard
                    id={item.id}
                    image={item.poster_path}
                    title={item.title}
                    popularity={item.popularity}
                    releaseDate={item.release_date}
                    overview={item.overview}
                    navigation={navigation}
                />
            )}
        />
    )
}

export default MoviesList;