import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import UpdateModal from '../UpdatedModal/UpdateModel';

function FavList() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const [ele, setEle] = useState({});

    const [title, setTitleInput] = useState("");
    const [image, setImageInput] = useState("");
    const [comment, setCommentInput] = useState("");

    const handleClose = () => setShow(false);



    const getFavMovies = async () => {

        return await axios.get(`https://movie-renad.herokuapp.com/getMovies`)
            .then(result => {
                console.log(result.data);
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getFavMovies();
    }, []);

    // console.log(typeof (data))
    const deleteFromFavorite = async (id) => {
        await axios.delete(`https://movie-renad.herokuapp.com/deleteMovie/${id}`)
            .then(() => {
                console.log("The Movie is Deleted")
                getFavMovies();
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <Container className='div-container'>
                <Row md={3}>
                    {/* {console.log(typeof (data))} */}
                    {
                        data.length && data.map((ele) => (
                            < Col key={ele.id} md={4} >
                                <Card className='div-card'>
                                    <Card.Img className='div-card-img' variant="top" src={ele.poster_path} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                        <Card.Link className='div-card-link'>
                                            {ele.backdrop_path}
                                        </Card.Link>
                                        <Card.Text >
                                            {ele.comment}
                                        </Card.Text>
                                        <div>
                                            <Button className='div-card-button' variant="primary"
                                                onClick={() => {
                                                    setShow(true)
                                                    setEle(ele);
                                                    setTitleInput(ele.title);
                                                    setCommentInput(ele.comment);
                                                    setImageInput(ele.image);
                                                }}
                                            >Update</Button>
                                            <Button className='div-card-button' variant="danger"
                                                onClick={() => deleteFromFavorite(ele.id)}
                                            >Delete</Button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                    {
                        !data.length && <div><h3>The Page is empty :3 </h3></div>
                    }

                    {
                        <UpdateModal show={show} handleClose={handleClose} ele={ele} getFavMovies={getFavMovies}


                            titleInput={title}
                            setTitleInput={setTitleInput}
                            imageInput={image}
                            setImageInput={image}
                            commentInput={comment}
                            setCommentInput={setCommentInput}

                        />
                    }
                </Row>
            </Container>

        </>

    );
}

export default FavList;