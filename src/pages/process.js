import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/pages/form.module.scss'

function Form (props)
{
    const [data,setData] = useState({
        name:'',
        phone:'',
        instagram:'',
        email:'',
        message:''
    });
    const [submitted,setSubmitted] = useState(false);
    const {name,phone,instagram,email,message} =data;
    
    const handleChange  = e => {
        setData({...data, [e.target.name] : e.target.value })
        console.log(e.target.value)
    };
    const handleSubmit = async (e) => {
        setSubmitted(true);
        e.preventDefault();
        try {
const response = await fetch("https://v1.nocodeapi.com/ishaanwadhwa/google_sheets/brySVzAqjMiCqoOs?tabId=Sheet", {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json',
    },
    body : JSON.stringify([
        [name,phone,instagram,email,message, new Date().toLocaleDateString()],
]),
});
console.log(data);
console.log('handle submit')
await response.json();
setData({...data,  name:'',
phone:'',
instagram:'',
email:'',
message:''});
setSubmitted(false);
        }
        catch(err) {
            console.log(err);

        }
    }
    return(
    
        <div className={styles.form}>
            <Container fluid>
                <Row>
                    <Col md='12'>
                        {submitted && alert("Your response has been recorded!")}
                <div className={styles.formTitle}>
           We’re eager to drip you out, fill in the details and we’ll contact you shortly.</div>

            <div className={styles.formTile}>
                <div className={styles.formInternal}>
                    <Row>
                        <Col md='12'>
                    <form onSubmit={handleSubmit}>
                <div className={styles.fields}>
                <div className={styles.labels}>
                    Name</div>  
                    <div>                  
                    <input className={styles.inputs} name='name' type="text" title = "Name" value={name} onChange={handleChange} required="true"></input>
                    </div>
                </div>
                <div className={styles.fields}>
                <div className={styles.labels}>
                    Phone Number</div>  
                   <input className={styles.inputs} name='phone' type="tel" title = "Phone Number"  value={phone} onChange={handleChange}required="true"></input>
                </div>
                <div className={styles.fields}>
                <div className={styles.labels}>
                    @instagram</div>  
                    <input className={styles.inputs} 
                    value={instagram} onChange={handleChange} name='instagram'
                    type="text" title = "Instagram Handle" required="true"></input>
                </div>
                <div className={styles.fields}>
                <div className={styles.labels}>
                    Email</div>  
                  <input className={styles.inputs} name='email'
                  value={email} onChange={handleChange}
                  type="email" title = "Email ID"  ></input>
                </div>
                <div className={styles.fields}>
                <div className={styles.labels}>
                What design would you like to get on your custom shoes or apparel? Let us know.</div>  
                  <input className={styles.messageinput}
                  name = 'message'
                  value={message} onChange={handleChange}
                  type="text"  ></input>
                </div>

<input  className={styles.submitButton} onSubmit={handleSubmit} value="Make a request" type="submit">
    {/* <p className = {styles.buttonText}> */}
    </input>
                </form>
                </Col>
                </Row>
                </div>
            </div>
            </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Form;