import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';


const Edit = ( {handleModal, state, xxx} ) => {

    console.log("xxxxxxxx", state);

    return (
        <>
            <Button variant="secondary" onClick={handleModal}>
                        Close
                    </Button>
        </>
    )
}

export default Edit