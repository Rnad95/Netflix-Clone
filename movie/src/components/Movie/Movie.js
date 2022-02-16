
import ModalMovie from "../ModalMovie/ModalMovie";
import { Card, Button, Container, col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios";

function Movie() {

    const [data, setData] = useState([]);
    const [movieInfo, setMovieInfo] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    const getAllMovies = async () => {

        return await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=21fa0ac2d839fad08826543d16d41138`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllMovies();
            setData(data);
        })();
    }, []);

    return (
        <>

            {data.length && data.map((ele, idx) => {
                return (
                    <div key={idx}>
                        <Container className='div-container'>
                            <Row md={3}>
                                {
                                    data.length && data.map((ele) => (
                                        <col key={ele.id} md={4}>
                                            <Card className='div-card'>
                                                <Card.Img className='div-card-img' variant="top" src={ele.image} />
                                                <Card.Body>
                                                    <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                                    <Card.Link className='div-card-link'>
                                                        {ele.poster_path}
                                                    </Card.Link>
                                                    <div>
                                                        <Button className='div-card-button' variant="primary"
                                                            onClick={() => {
                                                                setMovieInfo(ele)
                                                                setShow(true);
                                                            }}>Add To Favorite</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                )
            })}
            {
                <ModalMovie movieInfo={movieInfo} show={show} handleClose={handleClose} />
            }

            {/* <MovieList /> */}


        </>

    );

}
export default Movie;