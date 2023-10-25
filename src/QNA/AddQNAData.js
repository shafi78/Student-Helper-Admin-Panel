import React, { useState , Alert } from 'react'
import './AddQNAData.css'

import {db , storage} from '../firebase/FirebaseConfig';
import {addDoc , collection,getDocs,getDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
// import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';

const AddQNAData = () => {
    
    const [Question, set_Question] = useState('');
    const [Answer, set_Answer] = useState('');
    const [Question_category, setQuestion_category] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
                    
        const Data = {
                        Question,
                        Question_category,
                        Answer,
                        id: new Date().getTime().toString()
                    }
            
                    try{

                        if (Question === "" || Answer === "" || Question_category === "")
                        {
                            alert("All Fields are mandatory!");
                            return ;
                        }


                        const docRef = addDoc(collection(db, "QNA"),Data);
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
        <h1>Add Questions Data</h1>
        <form className='form-inner'>
            <label>Question</label>
            <input type='text' name='Question' 
            onChange={(e) => {set_Question(e.target.value)}}
            require
            />
            <br />

            <label>Answer</label>
            <input type='text' name='Answer' 
            onChange={(e) => {set_Answer(e.target.value)}}
            />
            <br />

            

            <div className='form-row'>
                <div className='form-col'>
                <label>Question Category</label>
            <select name='Question_category' 
            onChange={(e) => {setQuestion_category(e.target.value)}}>
                <option value='null'>Select Question Category</option>
                <option value='java'>Java</option>
                <option value='cpp'>C++</option>
                <option value='dbms'>DBMS</option>
                <option value='oops'>OOPs</option>
                <option value='cn'>Computer Network</option>
                <option value='os'>Operating System</option>
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

export default AddQNAData