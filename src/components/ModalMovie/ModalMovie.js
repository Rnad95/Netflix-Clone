import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
function Modalo({ movieInfo, show, handleClose }) {
    return (

        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{movieInfo.title}</h3>
                    <img alt="" src={movieInfo.backdrop_path} />
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => {
                            handleClose()
                        }}> Close</Button>
                    <Button variant="primary"> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Modalo;