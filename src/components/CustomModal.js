import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';

function MyVerticallyCenteredModal(props) {
  const [judul, setJudul] = useState("");
  const [genre, setGenre] = useState("");
  const [penulis, setPenulis] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tahunTerbit, setTahunTerbit] = useState("");
  const [jumlahHalaman, setJumlahHalaman] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [statusBuku, setStatusBuku] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // kirim data ke server atau lakukan tindakan lainnya
    console.log(judul, genre, penulis, penerbit, tahunTerbit, jumlahHalaman, currentPage, statusBuku);
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          DETAIL BUKU
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formJudul">
            <Form.Label>Judul Buku</Form.Label>
            <Form.Control type="text" value={judul} onChange={(e) => setJudul(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Control type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPenulis">
            <Form.Label>Penulis</Form.Label>
            <Form.Control type="text" value={penulis} onChange={(e) => setPenulis(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPenerbit">
            <Form.Label>Penerbit</Form.Label>
            <Form.Control type="text" value={penerbit} onChange={(e) => setPenerbit(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formTahunTerbit">
            <Form.Label>Tahun Terbit</Form.Label>
            <Form.Control type="text" value={tahunTerbit} onChange={(e) => setTahunTerbit(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formJumlahHalaman">
            <Form.Label>Jumlah Halaman</Form.Label>
            <Form.Control type="text" value={jumlahHalaman} onChange={(e) => setJumlahHalaman(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formCurrentPage">
            <Form.Label>Current Page</Form.Label>
            <Form.Control type="text" value={currentPage} onChange={(e) => setCurrentPage(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formStatusBuku">
            <Form.Label>Status Buku</Form.Label>
            <Form.Control type="text" value={statusBuku} onChange={(e) => setStatusBuku(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function CustomModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        TAMBAH
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CustomModal;
