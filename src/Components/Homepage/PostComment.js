import React from 'react'
import "./PostComment.css"
import Man from "../../images/man.png"
import { BlogState } from '../Hooks/BlogState'
import { db } from '../../firebase'
function Comment({item}) {
  // const {} = BlogState(item.id)
  const doComment = () =>{
    db.blogs.add({
      blogName:item.name,
      blogLikes:0,
      blogComment:[],
      Time:db.getCurrentTimestamp()
    })
  }
  return (
    <>
      <div class="antialiased overflow-scroll mx-3 max-w-screen-sml">

        <div class="space-y-4  ">

          <div class="flex">
            <div class="flex-shrink-0 mr-3">
              <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={Man} alt="" />
            </div>
            <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <strong>Neel</strong> <span class="text-xs text-gray-400">3:34 PM</span>
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
              </p>
              <div class="mt-4 flex items-center">
                <div class="flex -space-x-2 mr-2">
                  <img class="rounded-full w-6 h-6 border border-white" src={Man} alt="" />
                  <img class="rounded-full w-6 h-6 border border-white" src={Man} alt="" />
                </div>
                <div class="text-sm text-gray-500 font-semibold">
                  5 Replies
                </div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0 mr-3">
              <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={Man} alt="" />
            </div>
            <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
              <strong>Neel</strong> <span class="text-xs text-gray-400">3:34 PM</span>
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
              </p>

              <h4 class="my-3 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>

              <div class="space-y-4">
                <div class="flex">
                  <div class="flex-shrink-0 mr-3">
                    <img class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src={Man} alt="" />
                  </div>
                  <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Neel</strong> <span class="text-xs text-gray-400">3:34 PM</span>
                    <p class="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0 mr-3">
                    <img class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src={Man} alt="" />
                  </div>
                  <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Neel</strong> <span class="text-xs text-gray-400">3:34 PM</span>
                    <p class="text-xs sm:text-sm">
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
      <div class="space-y-4 px-2 pb-2">
        <input type="text" placeholder='No Abusive Comments' className='bg-whitesmoke p-2 w-full outline-none font' />
        <span onClick={doComment}>send</span>
      </div>
    </>
  )
}

export default Comment
