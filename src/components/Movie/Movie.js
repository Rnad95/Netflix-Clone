
import Modalo from "../ModalMovie/ModalMovie";
import { Card, Button, Container, col, Row } from "react-bootstrap"
import { useState } from "react"
// import axios from "axios";

function Movie({ data }) {
    // console.log(ele)

    const [movieInfo, setMovieInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    return (
        <>
            {/* {console.log(ele)} */}

            {data.length && data.map((mov, idx) => {
                return (


                    <div className="div2" key={idx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={mov.backdrop_path} />
                            <Card.Body>
                                {/* {console.log(mov.title)} */}
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>
                                    {mov.overview}
                                </Card.Text>
                                <Button variant="secondary" onClick={() => {
                                    handleClose();
                                }}>Close</Button> &nbsp;
                                <Button variant="primary" onClick={() => {
                                    setMovieInfo(mov)
                                    setShow(true);
                                }}>Add to favorite</Button>


                            </Card.Body>
                        </Card>
                    </div>


                )
            })}
            {
                <Modalo movieInfo={movieInfo} show={show} handleClose={handleClose} />
            }


        </>

    );

}
export default Movie;