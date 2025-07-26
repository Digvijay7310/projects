import React from 'react'
import { FaComment, FaCommentAlt } from 'react-icons/fa'

function Comments() {

    let array = new Array(4).fill(null)

    const [seeComment, setSeeComment] = React.useState()

    const handleComment = () => {
        setSeeComment(prev => !prev)
    }
  return (
    <div className='max-w-[900px] p-2 mt-3'>

        <button onClick={handleComment}>{seeComment ? <FaComment /> : <FaCommentAlt/>}</button>
        {seeComment && (
            <div>
            {array.map((_, id) => (
            <div key={id} className="text-green-950 mb-1 bg-gradient-to-br from bg-red-700 to-orange-900">
            <h6>UserName</h6>
            <p>What the user will Comment</p>
            <p>Date 26/08/2025</p>
        </div>
        ))}
        </div>
        )}
    </div>
  )
}

export default Comments