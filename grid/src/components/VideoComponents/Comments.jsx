import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Comments() {
  const [seeComment, setSeeComment] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState([]);

  const handleComment = () => {
    setSeeComment(prev => !prev);
  };

  const toggleComment = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    setComments(prev => [...prev, comment.trim()]);
    setComment('');
  };

  return (
    <div className='max-w-[900px] p-2'>
      <button
        onClick={handleComment}
        className='text-white px-2 py-0.5 rounded-2xl'
      >
        {seeComment ? 'Hide Comments' : 'Comments'}
      </button>

      {seeComment && (
        <div>
          {/* New comment input */}
          <form
            onSubmit={toggleComment}
            className='flex w-auto bg-zinc-900 p-1 rounded-2xl mt-2'
          >
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              type='text'
              className='bg-zinc-800 p-1 h-10 text-white border-0 outline-0 ring-1 ring-red-500 rounded-xl min-w-[300px]'
              placeholder='Enter the comment'
            />
            <button
              className='text-white bg-red-500 px-2 rounded-xl'
              type='submit'
            >
              <FaArrowAltCircleRight size={25} />
            </button>
          </form>

          {/* Comments display */}
          <div className='p-2 h-[300px] overflow-y-auto  md:overflow-s  md:h-auto mt-3'>
            {comments.length === 0 ? (
              <div className='text-white font-lg'>Be the first to comment</div>
            ) : (
              comments.map((cmt, id) => (
                <div
                  key={id}
                  className='text-white mb-2 p-2 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-950'
                >
                  <div className='flex items-center gap-2'>
                    <img
                      src='https://up.yimg.com/ib/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?pid=Api&rs=1&c=1&qlt=95&w=107&h=107'
                      alt='User'
                      className='h-7 rounded-full ring-1 ring-red-500'
                    />
                    <Link to='#' className='text-sm'>
                      UserName
                    </Link>
                  </div>
                  <p className='text-xs mt-1'>{cmt}</p>
                  <p className='text-xs'>{new Date().toLocaleDateString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;
