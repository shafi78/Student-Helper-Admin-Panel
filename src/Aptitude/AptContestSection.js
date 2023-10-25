import React, { useEffect, useState} from 'react'
import './AptContestSection.css'
// import Navbar from '../Navbar/Navbar'
import {collection,deleteDoc,doc,getDocs,setDoc} from 'firebase/firestore';
import {db,storage} from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
// import AddData from './AddData';

const AptContestSection = () => {

    const [Questions,setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    },[])

    const getQuestions = async() => {
        const data = await getDocs(collection(db, "AptitudeContest"));
        setQuestions(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const handleDelete = async(id) => {
        const QnaDoc = doc(db,"AptitudeContest",id);
        await deleteDoc(QnaDoc)
        alert('Deleted Successfully');
        window.location.reload();
    }



  return (
    <div className='order-section'>
        {/* <Navbar/> */}
        <h1 className='order-head1'>Manage Aptitude Contest</h1>
        <div className='order__container'>

        <table className='table'>
        <th className='tablehead'>No.</th>
            <th className='tablehead'>Questions</th>
            <th className='tablehead'>Option 1</th>
            <th className='tablehead'>Option 2</th>
            <th className='tablehead'>Option 3</th>
            <th className='tablehead'>Option 4</th>
            <th className='tablehead'>Correct option</th>
            <th className='tablehead'>Delete</th>
        {Questions.map((doc,index) => {
            return (
                <tr key={doc.id} >
            <td className='tablerow'>{index+1}</td>
            <td className='tablerow'>{doc.Question}</td>
            <td className='tablerow'>{doc.option1}</td>
            <td className='tablerow'>{doc.option2}</td>
            <td className='tablerow'>{doc.option3}</td>
            <td className='tablerow'>{doc.option4}</td>
            <td className='tablerow'>{doc.correctOption}</td>
            <td className='tablerow'>
                <button onClick={() => handleDelete(doc.id)} className='btndelete'>Delete</button>
            </td>
            </tr>
            )
        })}

            
            

            
        </table>
        </div>
       
        
    </div>
  )
}

export default AptContestSection