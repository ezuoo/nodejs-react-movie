import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../Common/MainImage';
import MovieInfo from './Sections/MovieInfo';
import { Button, Row } from 'antd';
import GridCards from '../Common/GridCards';
function MovieDetail(props) {

    let movieId = props.match.params.movieId;
    const movieinfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const crewInfo = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    const [Crew, setCrew] = useState([]);
    const [Movie, setMovie] = useState([]);
    const [Toggle, setToggle] = useState(false);

    // get movie data
    useEffect(() => {
        fetch(movieinfo)
            .then(response => response.json())
            .then(response => {
                setMovie(response);
            });

        fetch(crewInfo)
            .then(response => response.json())
            .then(response => {
                setCrew(response.cast);
            });

    }, []);

    // get and print actor data
    const onClickToggleHandler = () => {
        setToggle(!Toggle);
    }

    return (
        <div>
            {/** Header */}
            <div style={{ width: '100%', margin: '0' }}>
                {Movie &&
                    <MainImage image={`${IMAGE_BASE_URL}w1280/${Movie.backdrop_path}`}
                        title={Movie.original_title} overview={Movie.overview} />
                }
            </div>

            {/** Movie info */}
            <div style={{ width: '76%', margin: '1rem auto' }}>
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button>Add to Favorite 0</Button>
                </div>

                {Movie &&
                    <MovieInfo movie={Movie} />
                }

                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={onClickToggleHandler}>Toggle Actor View</Button>
                </div>
                <br />
                {/** crew Grid Card */}
                {Crew && Toggle &&
                    <Row gutter={[16, 16]}>
                        {Crew && Crew.map((crew, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    image={crew.profile_path ? `${IMAGE_BASE_URL}w500${crew.profile_path}` : null}
                                    crewName={crew.name} />
                            </React.Fragment>
                        ))}
                    </Row>
                }
            </div>
        </div>

    )
}

export default React.memo(MovieDetail)
