import React from 'react'

const Contact = () => {
    return (
      
        <>

            <div id='Contact' className='container' style={{textAlign:"center",marginTop:20}}>
            <h2 className='section-hadding'>Get in touch</h2><hr></hr>
            <p style={{fontSize:18}} className='mb-5'>Have an idea and want to bring it to the world? Great! Give send us an email or whatsapp us and we will get back to you as soon as possible!</p>
           
            </div>

            <div className='row'>
            <div className='col-md-6'>
                    <img style={{width:'70%',marginLeft:40,marginBottom:20} } alt='' src = "/Img/img-01.png"/>
            </div>
            <div className='col-md-6'>
                <div className='card bg-light' style={{borderRadius:20}}>
                <section className='contact-clean' style={{backgroundColor:"rgb(255,255,255)",paddingTop:"0px",paddingBottom:"0px"}}>
                    <div className='Container' style={{textAlign:"center"}}>
                       <form action='/msg' style={{paddingTop:"60px"}}>
                        <div className='mb-3'>
                            <input style={{height:"50px",paddingTop:"0px",width:"70%",marginTop:"0px"}} required type="text" placeholder='Name'/>
                        </div>
                        <div className='mb-3'>
                            <input style={{width:"70%",height:"50px"}} className='from-control' required type="email" placeholder="Email"/>
                        </div>
                        <div className='mb-3'>
                            <textarea style={{width:"70%",}} type="message" required  placeholder='Message' rows="7"/>
                        </div>
                        <div className='mb-3'>
                            <button>Submit</button>
                        </div>
                       </form>
                    </div>
                </section>
                </div>
            </div>
            </div>

          <div className='container'>
                <div className='row'>
                <div className='col-md-6' style={{textAlign:"center",marginTop:80}}>
                    <h1>Subscribe to our Newsletter!</h1>
                    <p>Feel free to connect with us to receive updates and info about whats happening new.</p>
                   <div className='container'>
                   <form action='/sub' style={{paddingTop:"60px"}}>
                    <div className='mb-3'>
                    <input style={{height:"50px",borderRadius:20}} className='from-control'   type="email" name='email' placeholder='Enter your Email Here' required></input>
                    </div>
                    <div className='mb-3' style={{margin:20}}>
                    <button  style={{borderRadius:10,height:"40px"}}>Subscribe</button>
                    </div>
                    
                    </form>
                    </div>
                </div>
                <div className='col-md-6'>
                <img style={{width:"70%"}} alt='' src='/Img/56819-newsletter.gif'/>
                </div>
                </div>          
          </div>

          
   
        </>
    )
}

export default Contact;
