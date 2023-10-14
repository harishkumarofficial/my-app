import { createContext, useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize"
import useAxiosFetch from "../hooks/useAxiosFetch"
import api from "../api/posts"
import { useNavigate } from "react-router-dom"
import { format } from "date-fns"


const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([]) 
    const [search, setSearch] = useState('') 
    const [searchResults, SetSearchResults] = useState([]) 
    const [postTitle, setPostTitle] = useState('') 
    const [postBody, setPostBody] = useState('') 
    const [editTitle, setEditTitle] = useState('') 
    const [editBody, setEditBody] = useState('') 
    const { width } = useWindowSize()
    const navigate = useNavigate()
    const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts")
  
    // initialize a data 
    useEffect(() => {
      setPosts(data);
    }, [data])
  
    // Search based on latest posts
    useEffect(() => {
      const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase()));
  
      SetSearchResults(filteredResults.reverse());
    }, [posts, search])
  
    // Submit a new post 
    const handleSubmit = async (e) => {
      e.preventDefault();
      const id = posts.length ? posts[posts.length-1].id + 1 :1;
      const datetime = format(new Date(), 'MMM dd, yyyypp');  
      const newPost = {id, title:postTitle, datetime, body:postBody}
  
      try{
        const postResponse = await api.post('/posts', newPost)
        const allPosts = [...posts, postResponse.data];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/')
      }
      catch (err) {
          // Not in the 200 response range
          
          if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
          } 
            else {
              console.log(`Error: ${err.message}`);
          }
        }      
      }
    // edit a post
    const handleEdit = async (id) => {
      const datetime = format(new Date(), 'MMM dd, yyyypp');  
  
      const updatedPost = {id, title:editTitle, datetime, body:editBody}
      try{
        const response = await api.put(`/posts/${id}`, updatedPost)
        setPosts(posts.map(post => post.id === id ? {...response.data} : post));
        setEditTitle('');
        setEditBody('');
        navigate('/')
      }
      catch (err) {
          // Not in the 200 response range
          if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
          } 
            else {
              console.log(`Error: ${err.message}`);
          }
        }      
      }    
    // Delete a post 
    const handleDelete = async (id) => {
        try{
          await api.delete(`posts/${id}`)
          const postList = posts.filter(post => post.id !== id)
          setPosts(postList);
          navigate('/')
        }
        catch (err) {
          console.log(`Error: ${err.message}`);
        }
    }
    return (
            <DataContext.Provider value={{
                width, search, setSearch, searchResults, fetchError, isLoading, setPostTitle, setPostBody,
                handleSubmit, postTitle, postBody, posts, setEditBody, editTitle, setEditTitle,
                handleDelete, handleEdit, editBody
            }}>
                {children}
            </ DataContext.Provider>
    )
}

export default DataContext