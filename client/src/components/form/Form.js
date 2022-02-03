import React, { useState , useEffect } from 'react'
import useStyles from './styles'
import { TextField , Paper , Button , Typography} from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost , updatePost } from '../../actions/posts'
import { useSelector } from 'react-redux'
import {getPosts} from '../../actions/posts'

const Form = ( {currentId , setCurrentId} ) => {
    const [postData, setPostData] = useState({ creator : '', title : '', message : '' , tags : '' ,selectedFile : ''});
    const classes = useStyles()
    const dispatch = useDispatch()
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (e) =>{

        e.preventDefault();
        if(currentId){
            console.log("the data----" ,postData)
            dispatch(updatePost( currentId , postData))
        } else {
            dispatch(createPost(postData))
        } 
        clear()
    }
    const clear = () =>{
        setCurrentId(null)
        setPostData({ creator : '', title : '', message : '' , tags : '' ,selectedFile : ''})
    }

    return(
        <>
        <Typography variant='h4'>Form</Typography>
        <Paper className={classes.paper}>
            <form autoComplete="off"   className={classes.form} onSubmit={handleSubmit} >
                <Typography variant="h6">{currentId ? 'Edit' : 'Create'} a memory</Typography>
                <TextField className={"inputSection"}  required name="creator" variant="outlined"  label="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData , creator : e.target.value})} fullWidth  />
                <TextField className={"inputSection"} required name="title" variant="outlined"  label="title" value={postData.title} onChange={(e) => setPostData({ ...postData , title : e.target.value})} fullWidth  />
                <TextField className={"inputSection"} required name="message" variant="outlined"  label="message" value={postData.message} onChange={(e) => setPostData({ ...postData , message : e.target.value})} fullWidth  />
                <TextField className={"inputSection"} required  name="tags" variant="outlined"  label="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData , tags : e.target.value.split(",")})} fullWidth  />
                <div required className={classes.fileInput}>
                    <FileBase  required type="file" multiple={false} onDone={({base64}) => setPostData({...postData , selectedFile : base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Cancel</Button>

            </form>
        </Paper>
        </>
    )
}

export default Form ;