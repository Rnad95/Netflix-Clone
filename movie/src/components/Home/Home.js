
import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './Home.css';

function Home() {

    const [data, setData] = useState([]);

    const getAllMovies = async () => {
        return await axios.get(`https://movie-renad.herokuapp.com/getMovies`)

            .then(result => {
                return result.data;
            }).catch((err) => {

                console.log(err)
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllMovies();
            setData(data);
        })();
    }, [])

    return (
        <>
            {data.length && data.map((ele, idx) => {
                return (
                    <div className="div2" key={idx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                                    {ele.overview}
                                </Card.Text>
                                <Button variant="primary">
                                    Add to favorite</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}

            <MovieList />

            {!data.length && <div><h3>Page Not found, please try later  </h3></div>}

        </>
    );
}

export default Home;