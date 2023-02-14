import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { db } from '../../firebase'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase";

function UploadBlog() {

    const [imageUpload, setImageUpload] = useState(null);
    const initials = {
        shopname: '',
        bloghead: '',
        city: '',
        state: '',
        description: ''
    }

    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [authData, setAuthData] = useState(initials);
    function openModal() {
        setOpen(true)
    }
    function closeModal() {
        setOpen(false)
    }
    const handleChange = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
        console.log(authData)
    }
    const onUpload = () => {

        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                alert('done')
            });
        });

        db.blogs.add({
            heading: authData["shopname"],
            title: authData["bloghead"],
            state: authData["state"],
            city: authData["city"],
            description: authData["description"],
            likes: [],
            comment: []
        })
    }
    return (
        <>
            <Modal show={open} onHide={closeModal} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <div className=" h-fit flex">
                    <div className="w-full">
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <input
                                        type="file"
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                        }}
                                    />
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label for="shopname">Shop Name</label>
                                            <input onChange={(e) => handleChange(e)} type="text" name="shopname" id="shopname" className="h-10 border mt-1 rounded px-2 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="bloghead">Blog Title</label>
                                            <input onChange={(e) => handleChange(e)} type="text" name="bloghead" id="bloghead" className="h-10 border mt-1 rounded px-2 w-full bg-gray-50" placeholder="bloghead@domain.com" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label for="city">City</label>
                                            <input onChange={(e) => handleChange(e)} type="text" name="city" id="city" className="h-10 border mt-1 rounded px-2 w-full bg-gray-50" placeholder="" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label for="state">State / province</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input onChange={(e) => handleChange(e)} name="state" id="state" placeholder="State" className="px-2 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                                <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                                <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5 ">
                                            <label for="description">Description</label>
                                            <textarea onChange={(e) => handleChange(e)} type="text" name="description" id="description" className="h-10 border mt-1 rounded px-2 w-full bg-gray-50 resize-none" placeholder="" />
                                        </div>
                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <button onClick={onUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
            <div onClick={openModal}>
                Share
            </div>
        </>
    )
}

export default UploadBlog
