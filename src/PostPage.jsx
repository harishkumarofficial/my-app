import React from 'react'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const  PostPage = () => {
    
  const {posts, handleDelete} = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString
    () === id);
    return (
        <main className='PostPage'>
          <article className='post'>
            {post &&
              <>
                <h2>{post.title}</h2>
                <p className='postDate'>{post.Datetime}</p>
                <p className='postBody'>{post.body}</p>
                <Link to={`/edit/${post.id}`}> <button className='editButton'>Edit</button> </Link>
                <button className='deleteButton' onClick={() => handleDelete(post.id)}>
                Remove
                </button>
              </>
            }
              {!post &&
                <>
                    <h2>ID not Fount</h2>
                </>
                }
          </article>
        </main>
    )
}

export default PostPage