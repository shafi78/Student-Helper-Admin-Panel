import React, { useEffect, useState} from 'react'
import './AptContestResults.css'
// import Navbar from '../Navbar/Navbar'
import {collection,deleteDoc,doc,getDocs,setDoc} from 'firebase/firestore';
import {db,storage} from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
// import AddData from './AddData';

const AptContestResults = () => {

    const [results,setResults] = useState([]);

    useEffect(() => {
        getQuestions();
    },[])

    const getQuestions = async() => {
        const data = await getDocs(collection(db, "AptitudeResults"));
        setResults(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const handleDelete = async(id) => {
        const QnaDoc = doc(db,"AptitudeResults",id);
        await deleteDoc(QnaDoc)
        alert('Deleted Successfully');
        window.location.reload();
    }



  return (
    <div className='order-section'>
        {/* <Navbar/> */}
        <h1 className='order-head1'>Manage results</h1>
        <div className='order__container'>

        <table className='table'>
        <th className='tablehead'>No.</th>
            <th className='tablehead'>User id</th>
            <th className='tablehead'>User name</th>
            <th className='tablehead'>Score</th>
            <th className='tablehead'>Time</th>
            <th className='tablehead'>Delete</th>
        {results.map((doc,index) => {
            return (
                <tr key={doc.id} >
            <td className='tablerow'>{index+1}</td>
            <td className='tablerow'>{doc.userid}</td>
            <td className='tablerow'>{doc.name}</td>
            <td className='tablerow'>{doc.score}</td>
            <td className='tablerow'>{doc.Time}</td>
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

export default AptContestResults