import React, { useState } from 'react'
import { Modal } from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'
import Form from './Form'


const ProductLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return  (
    <>
        <Header title="Products app" />
        <AddButton onClick={() => setIsModalOpen(true)}></AddButton>
        <ListProducts />
        <Modal show={ isModalOpen }  onClose={() => setIsModalOpen(false)}>
            <Modal.Card>
                <Modal.Card.Header showClose= {false}>
                    <Modal.Card.Title>
                        Add Product
                    </Modal.Card.Title>
                </Modal.Card.Header>
                <Modal.Card.Body>
                    <Form />
                </Modal.Card.Body>
            </Modal.Card>
        </Modal>
    </>
    )
}

export default ProductLayout