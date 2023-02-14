import React, { useState, useEffect } from 'react'
import "./PostComment.css"
import Man from "../../images/man.png"
import { BlogState } from '../Hooks/BlogState'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
function Comment({ item }) {
  const user = useSelector(selectUser);

  const [inputComment, setInputComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = db.blogs.doc(item.id).onSnapshot((snapshot) => {
      setComments(snapshot.data().comments);
    });

    return unsubscribe;
  }, [item.id])

  const doComment = (e) => {
    console.log(user)
    db.blogs.doc(item.id).get().then(snapshot => {
      db.blogs.doc(item.id).update({
        comments: snapshot.data().comments ? [...snapshot.data().comments, { userName: user.displayName, comment: inputComment }] : [{ userName: user.displayName, comment: inputComment }]
      });
    });
  }
  return (
    <>
      <div className="antialiased overflow-scroll mx-3 max-w-screen-sml">

        <div className="space-y-4  ">

          {
            comments?.map((comment, index) => {
              return (
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={Man} alt="" />
                  </div>
                  <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>{comment.userName}</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              )
            })
          }


          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={Man} alt="" />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <strong>Neel</strong> <span className="text-xs text-gray-400">3:34 PM</span>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
              </p>

              <h4 className="my-3 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>

              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src={Man} alt="" />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Neel</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src={Man} alt="" />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Neel</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>

              </div>

            </div>


          </div>

        </div>


      </div>
      <div className="space-y-4 px-2 pb-2">
        <input type="text" placeholder='No Abusive Comments' value={inputComment} name='comment' onChange={(e) => setInputComment(e.target.value)} className='bg-whitesmoke p-2 w-full outline-none font' />
        <span onClick={doComment}>send</span>
      </div>
    </>
  )
}

export default Comment
