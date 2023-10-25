import React, { useEffect, useState} from 'react'
import './AptitudeSection.css'
// import Navbar from '../Navbar/Navbar'
import {collection,deleteDoc,doc,getDocs,setDoc} from 'firebase/firestore';
import {db,storage} from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
// import AddData from './AddData';

const AptitudeSection = () => {

    const [Questions,setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    },[])

    const getQuestions = async() => {
        const data = await getDocs(collection(db, "AptitudeQuiz"));
        setQuestions(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const handleDelete = async(id) => {
        const QnaDoc = doc(db,"AptitudeQuiz",id);
        await deleteDoc(QnaDoc)
        alert('Deleted Successfully');
        window.location.reload();
    }



  return (
    <div className='order-section'>
        {/* <Navbar/> */}
        <h1 className='order-head1'>Manage Questions</h1>
        <div className='order__container'>

        <table className='table'>
        <th className='tablehead'>No.</th>
            <th className='tablehead'>Questions</th>
            <th className='tablehead'>Category</th>
            <th className='tablehead'>Delete</th>
        {Questions.map((doc,index) => {
            return (
                <tr key={doc.id} >
            <td className='tablerow'>{index+1}</td>
            <td className='tablerow'>{doc.Question}</td>
            <td className='tablerow'>{doc.Question_category}</td>
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

export default AptitudeSection