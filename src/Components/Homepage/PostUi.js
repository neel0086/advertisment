import React, { useState } from 'react'
import StarIcon from "@mui/icons-material/Star";
import Like from "../../images/like.png"
import Liked from "../../images/liked.png"
import Comment from "../../images/comment.png"
import Repost from "../../images/repost.png"
import PostComment from "./PostComment"
import "./Post.css"
// import PostModal from './PostModal';
import { Button, Modal, Form } from 'react-bootstrap';
function PostUi({ item }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [likePost,setLikePost] = useState(false) 
    function openModal() {
        setOpen(true)
    }
    function closeModal() {
        setOpen(false)
    }
    function handleSubmit(e) {

        closeModal();
    }
    const LikePost = () =>{
        setLikePost(!likePost)
    }
    return (
        <>

            <Modal show={open} onHide={closeModal}>

                <div
                    key={item.id}
                    className="glass h-xvh border-[1px] border-gray-200 pt-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
                >
                    {/* <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                                {item.category}
                            </span> */}
                    <div className="h-1/10 px-2 bg-white flex flex-col gap-1 z-10">
                        <div className="px-2 flex items-center justify-between">
                            <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                                {item.name.substring(0, 20)}
                            </h2>
                            <p className="text-sm text-gray-600 font-semibold">
                                {item.price}
                            </p>
                        </div>


                    </div>
                    <PostComment item={item}/>
                </div>

            </Modal>
            <div
                key={item.id}
                className="glass postui h-auto border-[1px] border-gray-200 pt-6 z-30 shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-1"
            >
                <span className="text-xs capitalize italic absolute top-2 left-3 text-gray-500">
                    {item.category}
                </span>
                {/* ========== Product Image Start here ============== */}
                <div className="w-full h-auto flex items-center justify-center relative group">
                    <img
                        className="p-2 h-auto object-contain "
                        src={item.image}
                        alt="ProductImg"
                    />


                    {/* ================== Product mini drop down End here ============== */}
                </div>
                {/* ========== Product Image End here ================ */}
                {/* ========== Product Info Start here =============== */}
                <div className="px-2  flex flex-col gap-1 z-10">
                    <div className="px-2 flex items-center justify-between">
                        <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                            {item.name.substring(0, 20)}
                        </h2>
                    </div>
                    <div className="px-2 flex items-center justify-between">
                        <h4 className="font-bodyFont tracking-wide max-h-40 overflow-scroll text-sml text-amazon_blue font-medium">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua.
                        </h4>
                    </div>
                    
                    <div className="flex flex-row justify-between">
                        <p
                            onClick={LikePost}
                            className="cursor-pointer flex flex-row items-center align-middle py-1 rounded-md mt-3 font-titleFont font-medium text-base duration-200"
                        >
                            <span className="pb-2 pr-2">
                                {likePost ? <img className="transition-transform w-8" src={Like} /> : <img className="w-8 transition-transform" src={Liked} />}
                            </span>
                            {/* <span >Like</span> */}
                        </p>
                        <div className="flex flex-row">

                            
                            <div
                                onClick={openModal}
                                className="cursor-pointer flex flex-row items-center align-middle py-1.5  rounded-md mt-3 font-titleFont font-medium text-base duration-200"
                            >
                                <img src={Comment} className="w-8"/>
                                {/* <span>Comment</span> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PostUi
