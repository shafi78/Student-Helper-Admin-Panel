import React, { useState , Alert } from 'react'
import './AddDsaContest.css'

import {db , storage} from '../firebase/FirebaseConfig';
import {addDoc , collection,getDocs,getDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
// import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';

const AddDsaContest = () => {
    
    const [title,setTitle] = useState('');
    const [Question, set_Question] = useState('');
    const [difficulty,setDifficulty] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
                    
        const Data = {
                        title,
                        Question,
                        difficulty,
                        id: new Date().getTime().toString()
                    }
            
                    try{

                        if (Question === "" || title === "" || difficulty === "" )
                        {
                            alert("All Fields are mandatory!");
                            return ;
                        }


                        const docRef = addDoc(collection(db, "DSAContest"),Data);
                        alert("Data added successfully ",docRef.id);
                    }
                    
                    catch(error){
                        alert("Error adding document ",error);
                    }
                    
    }

  return (
    <div>
        {/* <Navbar/> */}
        <div className='form-outer'>
        <h1>Add Contest Data</h1>
        <form className='form-inner'>

        <label>Title</label>        
        <input 
        name='title'
        onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <label>Question</label>
            <textarea name='Question'
            onChange={(e) => set_Question(e.target.value)}
            rows={10}
            multiple={true}
            ></textarea>
            <br />
            
        

            
            <div className='form-row'>
                <div className='form-col'>
                <label>Difficulty Level</label>
            <select name='difficulty' 
            onChange={(e) => {setDifficulty(e.target.value)}}>
                <option value='null'>Select Difficulty Level</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            </div>
            </div>

            <br />


            <button onClick={handleSubmit}>Add</button>

        </form>
    </div>
    </div>
  )
}

export default AddDsaContest