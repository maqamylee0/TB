import React from 'react';
import {useRef,useEffect,useState} from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
  const userRef  = useRef()
  const errRef = useRef()

  const [user,setUser] = useState('')
  const [pwd,setPwd] = useState('')
  const [nin,setNin] = useState('')

  const [errMsg,setErrMsg] = useState('')

  useEffect(() => {
    useRef.current.focus();
  })

  useEffect(()=> {
    setErrMsg =''
  },[user,pwd,nin])

  const handleSubmit = async(e)=>{
    e.preventDefault()

  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <form onSubmit={handleSubmit}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p ref = {errRef} className ={errMsg ? "errmsg" : "offscreen"} aria-live = "assertive" >{errMsg}</p>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Name' id='form1' type='text' 
                 ref={userRef}
                  className='w-100'
                   autoComplete='off'
                   onChange={(e)=>{
                    setUser(e.target.value)
                   }}
                   value ={user} required />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Nin' id='form2' type='text' autoComplete='off'
                onChange={(e)=>{
                 setNin(e.target.value)
                }}
                value ={nin} required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' autoComplete='off'
                onChange={(e)=>{
                 setPwd(e.target.value)
                }}
                value ={pwd} />
              </div>

             

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg'>Sign In</MDBBtn>

            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src="https://t4.ftcdn.net/jpg/02/73/87/77/240_F_273877701_Q7wFeIORNw6MTXaLYIy81yX9iiNeKgtb.jpg" />
            </MDBCol>

          </MDBRow>

        </MDBCardBody>
        </form>
      </MDBCard>

    </MDBContainer>

  );
}

export default Login;