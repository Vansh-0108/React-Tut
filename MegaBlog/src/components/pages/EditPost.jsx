import React, {useState, useEffect} from 'react'
import {Container, PostForm} from '../../components'
import appwriteService from "../../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    const {slug} = useParams();

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post)
                    setPost(post);
            });
        }
        else
            navigate('/');
    }, [navigate, slug])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost