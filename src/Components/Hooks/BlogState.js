import { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import { selectUser } from '../features/userSlice'

function reducer(state,{type,payload}){
    switch(type){
        case 'blog_comment':
            return{
                blogId:payload.blogId,
                blogName:payload.blogName,
                // blogLikes:0,
                blogComments:[]

            }
        case 'blog_name':
            return {
                ...state,
                blogName:payload.blogName 
        }
       
        default:
            return state
        }
    }

export function BlogState(blogId = null, blogName = null) {
    const user = useSelector(selectUser)
    const [state, dispatch] = useReducer(reducer,
        {
            blogId,
            blogName,
            // blogLikes:0,
            blogComment: []
        })
        useEffect(()=>{
            console.log("Hook")
            dispatch({type:'blog_comment',payload:{blogId,blogName}})
        },[blogId,blogName])
        useEffect(()=>{
            return(db.blogs
                .where("blodId","==",blogId)
                .onSnapshot(snapshot=>{
                    dispatch({
                        type:'blog_comment',
                        payload:{blogComment:snapshot.docs.map(db.formatDoc)}
                    })
                })
                )
        })
}