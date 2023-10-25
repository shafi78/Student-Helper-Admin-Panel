import React, { useState , Alert } from 'react'
import './AddAptitudeData.css'

import {db , storage} from '../firebase/FirebaseConfig';
import {addDoc , collection,getDocs,getDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
// import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';

const AddAptitudeData = () => {
    
    const [Question, set_Question] = useState('');
    const [correctOption, setCorrectOption] = useState();
    const [Question_category, setQuestion_category] = useState('');
    const [difficulty,setDifficulty] = useState('');
    const [option1,setOption1] = useState('');
    const [option2,setOption2] = useState('');
    const [option3,setOption3] = useState('');
    const [option4,setOption4] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
                    
        const Data = {
                        Question,
                        Question_category,
                        correctOption: parseInt(correctOption),
                        difficulty,
                        option1,
                        option2,
                        option3,
                        option4,
                        id: new Date().getTime().toString()
                    }
            
                    try{

                        if (Question === "" || Question_category === "" ||
                        option1 === "" || option2 === "" || option3 === "" || option4 === "" )
                        {
                            alert("All Fields are mandatory!");
                            return ;
                        }


                        const docRef = addDoc(collection(db, "AptitudeQuiz"),Data);
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

            <div className='form-row'>
                <div className='form-col'>
                <label>Question Category</label>
            <select name='Question_category' 
            onChange={(e) => {setQuestion_category(e.target.value)}}>
                <option value='null'>Select Question Category</option>
                <option value='general'>General Aptitude</option>
                <option value='verbal'>Verbal and Reasoning</option>
                <option value='current'>Current Affairs & GK</option>
                <option value='engineering'>Engineering</option>
                <option value='programming'>Programming</option>
                <option value='technical'>Technical</option>
            </select>
            </div>
            </div>

            <br />
            
            <div className='form-row'>
                <div className='form-col'>
                <label>Option 1</label>
            <input type='text' name='option1' 
            onChange={(e) => {setOption1(e.target.value)}}
            />
            </div>
            </div>

            <br />
            
            <div className='form-row'>
                <div className='form-col'>
                <label>Option 2</label>
            <input type='text' name='option2' 
            onChange={(e) => {setOption2(e.target.value)}}
            />
            </div>
            </div>

            <br />
            
            <div className='form-row'>
                <div className='form-col'>
                <label>Option 3</label>
            <input type='text' name='option3' 
            onChange={(e) => {setOption3(e.target.value)}}
            />
            </div>
            </div>

            <br />
            
            <div className='form-row'>
                <div className='form-col'>
                <label>Option 4</label>
            <input type='text' name='option4' 
            onChange={(e) => {setOption4(e.target.value)}}
            />
            </div>
            </div>

            <br />

            <div className='form-row'>
                <div className='form-col'>
                <label>Correct Option</label>
            <select name='Question_category' 
            onChange={(e) => {setCorrectOption(e.target.value)}}>
                <option value='null'>Select Correct Option</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
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

export default AddAptitudeData