import { useState,useEffect } from 'react';
import './App.css';
import {storage} from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import {v4} from "uuid"

function App() {
  const [image, setImage] = useState(null)
  const [existingFiles, setexistingFiles] = useState([])
  const imageListRef = ref(storage, "images/")
 //<img src={url} />
 useEffect(()=>{
  listAll(imageListRef).then((response)=>{
    response.items.forEach((items)=>{
        getDownloadURL(items).then((url)=>{
          setexistingFiles((prev)=>[...prev,url])
        })
    })
  })
},[])
 
 
 
  const uploadImage = () => {
      if(image == null) return
      const imageRef = ref(storage, `images/${image.name + v4()}`)
      uploadBytes(imageRef, image).then((snaphsot) =>{
        getDownloadURL(snaphsot.ref).then((url)=>{
          setexistingFiles((prev)=>[...prev,url])
        })
      })
  }

  //(<img src={url}/>)
  return (
    <div className="App">
      <h1>File Uploader</h1>
      
      <div class="row">
  <div class="col-sm-6 "><label for="formFileMultiple" class="form-label">Add File Here</label></div>
  <div class="col-6 "></div>
</div>
      
      <div class="row">
  <div class="col-sm-6 "><input class="form-control col-md-6" type="file" onChange={(event) => {setImage(event.target.files)}} id="formFileMultiple" multiple /></div>
  <div class="col-sm-6 "><button type="button" class="btn btn-success" onClick={uploadImage}>Send It</button></div>
  
</div>
{existingFiles.map((url) =>{
        return <a href={url} target="_blank"rel='noopener noreferrer'>File Name</a>
      })}
      </div>
  
      




  );
}

export default App;
