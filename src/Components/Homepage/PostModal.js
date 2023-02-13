import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
function PostModal() {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")

    function openModal() {
        setOpen(true)
    }
    function closeModal() {
        setOpen(false)
    }
    function handleSubmit(e) {

        closeModal();
    }

    return (
        <div>
            
        </div>
    )
}

export default PostModal
