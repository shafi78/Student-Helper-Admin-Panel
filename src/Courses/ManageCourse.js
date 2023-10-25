import React, { useEffect, useState} from 'react'
import './ManageCourse.css'
// import Navbar from '../Navbar/Navbar'
import {collection,deleteDoc,doc,getDocs,setDoc} from 'firebase/firestore';
import {db,storage} from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';

const ManageCourse = () => {

    const [Questions,setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    },[])

    const getQuestions = async() => {
        const data = await getDocs(collection(db, "Courses"));
        setQuestions(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const handleDelete = async(id) => {
        const QnaDoc = doc(db,"Courses",id);
        await deleteDoc(QnaDoc)
        alert('Deleted Successfully');
        window.location.reload();
    }



  return (
    <div className='order-section'>
        {/* <Navbar/> */}
        <h1 className='order-head1'>Manage Courses</h1>
        <div className='order__container'>

        <table className='table'>
        <th className='tablehead'>No.</th>
            <th className='tablehead'>Title</th>
            <th className='tablehead'>Description</th>
            <th className='tablehead'>Delete</th>
        {Questions.map((doc,index) => {
            return (
                <tr key={doc.id} >
            <td className='tablerow'>{index+1}</td>
            <td className='tablerow'>{doc.title}</td>
            <td className='tablerow'>{doc.description}</td>
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

export default ManageCourse