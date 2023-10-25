import React, { useState } from 'react'
import './AddWebData.css'

import {db , storage} from '../firebase/FirebaseConfig';
import {addDoc , collection} from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';

const AddWebData = () => {
    
    const [title, setTitle] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [webVideo, setWebVideo] = useState(null);
    const [videoUrl,setVideoUrl] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(webVideo == null){
            alert("Please select an video")
            return 
        }

        else {
            const imageRef = ref(storage,`Webinars/${webVideo.name}`)
            uploadBytes(imageRef,webVideo)
            .then(()=> {
                alert("Video uploaded successfully")
                getDownloadURL(imageRef)
                .then((url)=> {
                    // console.log(url)
                    setVideoUrl(url)

                    const WebData = {
                        title,
                        videoUrl : url,
                        videoDescription,
                        id: new Date().getTime().toString(),
                        Time : new Date().toLocaleString()
                    }
            
                    console.log(WebData)
            
                    try{
                        const docRef = addDoc(collection(db, "Webinars"),WebData);
                        console.log("Clicked")
                        alert("Data added successfully ",docRef.id);
                    }
            
                    catch(error){
                        alert("Error adding document ",error);
                    }
                })
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
    }

  return (
    <div>
        <div className='form-outer'>
        <h1>Add Webinar's Data</h1>
        <form className='form-inner'>
            <label>Title</label>
            <input type='text' name='title' 
            onChange={(e) => {setTitle(e.target.value)}}
            />
            <br />

            <label>Description</label>
            <input type='text' name='videoDescription' 
            onChange={(e) => {setVideoDescription(e.target.value)}}
            />
            <br />

            <label>Video</label>
            <input type='file' name='webVideo' 
            onChange={(e) => {setWebVideo(e.target.files[0])}}
            />
            <br />

            <br />

            <button onClick={handleSubmit}>Add</button>

        </form>
    </div>
    </div>
  )
}

export default AddWebData