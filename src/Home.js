import React from 'react'
const style = {
  color: 'darkblue',
  fontSize: 20,
  textDecoration: 'none',
  padding: 20,
  
}

const head = {
  color: 'firebrick',
}

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center',fontSize: '5rem',color: 'darkblue',marginTop: '5%',fontWeight: '500'}}>Admin Panel</h1>
    <div style={{marginTop: 10,display: 'flex',
    flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center',marginTop: '5%',textAlign: 'center',border: '1px solid black',padding: 10,width: '90%',marginLeft: '5%',backgroundColor: 'ghostwhite'}}>


      {/* Qna */}

      <div style={{flexDirection: 'column',border: '1px solid black',margin: 20,backgroundColor: 'snow'}}>

      <h1 style={head}>QNA</h1>

      <a href="/addQNA" style={style}>Add QNA Data</a>
      <br /> <br />
      <a href="./manageQNA" style={style}>Manage QNA Data</a>
      <br /> <br />

      </div>

      {/* Webinars */}

      <div style={{flexDirection: 'column',border: '1px solid black',margin: 20,backgroundColor: 'snow'}}>

      <h1 style={head}>Webinar</h1>

      <a href="/addwebinar" style={style}>Add Webinar's Data</a>
      <br /> <br />
      <a href="./managewebinar" style={style}>Manage Webinar's Data</a>
      <br /> <br />
      </div>

      {/* Blogs */}
      
      <div style={{flexDirection:'column',border: '1px solid black',margin: 20,backgroundColor: 'snow'}}>

      <h1 style={head}>Blogs</h1>

      <a href="/manageblogs" style={style}>Manage Blogs Data</a>
      <br /> <br />
      </div>


      {/* Aptitude */}

      <div style={{flexDirection: 'column',border: '1px solid black',margin: 20,backgroundColor: 'snow'}}>

        <h1 style={head}>Aptitude</h1>

      <a href="/aptquiz" style={style}>Add Aptitude Data</a>
      <br /> <br />
      <a href="/managequiz" style={style}>Manage Aptitude Data</a>
      <br /> <br />
      <a href="/aptcontest" style={style}>Add Aptitude Contest</a>
      <br /> <br />
      <a href="/manageaptcontest"style={style}>Manage Contest Data</a>
      <br /> <br />
      <a href="/manageaptresults" style={style}>Manage Aptitude Results</a>
      <br /> <br />
      </div>


      {/* Dsa */}

      <div  style={{flexDirection: 'column',border: '1px solid black',margin: 20,backgroundColor: 'snow'}}>

        <h1 style={head}>DSA</h1>

      <a href="/dsaQna" style={style}>Add DSA Questions Data</a>
      <br /> <br />
      <a href="/managedsa" style={style}>Manage DSA Questions Data</a>
      <br /> <br />
      <a href="/dsacontest" style={style}>Add DSA Contest</a>
      <br /> <br />
      <a href="/managedsacontest" style={style}>Manage Contest Data</a>
      <br /> <br />
      <a href="/managedsaresults" style={style}>Manage DSA Results</a>
      <br /> <br />
      </div>


      {/* Courses */}

      <div style={{flexDirection: 'column',border: '1px solid black',margin: 20,backgroundColor: 'snow'}}>

        <h1 style={head}>Courses</h1>

      <a href="/courses" style={style}>Manage Course's Data</a>
      <br /> <br />
      </div>



    </div>
    </div>
  )
}

export default Home