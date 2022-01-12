import { useState } from "react";
import { init, send } from 'emailjs-com';
import "./contact.scss";
require("dotenv").config();

export default function Contact() {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const userID = process.env.REACT_APP_USER_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  console.log("userID is", userID)
  console.log("serviceID is", serviceID)
  console.log("templateID is", templateID)

  const sendMail = () => {
    if (userID !== undefined && serviceID !== undefined && templateID !== undefined) init(userID);

    const template_param = {
        from_name: name,
        from_email: mail,
        message: message,
    };

    send(serviceID, templateID, template_param).then(() => {
      window.alert("Sent your message!");

      setName("");
      setMail("");
      setMessage("");
    });
  }
  const handleClick = (e) => {
    e.preventDefault();
    sendMail();
  };

  const handleCanceled = () => {
    setName('');
    setMail('');
    setMessage('');
  };

  const disableSend = name === '' || mail === '' || message === '';

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://github.com/Shinji-Nishikita/S_Nishikita_website/blob/master/public/assets/IMG_3466.jpg?raw=true" alt="" />
      </div>
      <div className="right">
        <h2 className="pageTitle">Contact</h2>
        <form>
          <div>
            <label htmlFor="nameForm"></label>
          </div>
          <input
            type="text"
            id="nameForm"
            className="formInput"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          <div>
            <label htmlFor="mailForm"></label>
          </div>
          <input
            type="email"
            id="mailForm"
            className="formInput"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}/>
          <div>
            <label htmlFor="mailContentForm"></label>
          </div>
          <textarea
            type="text"
            id="mailContentForm"
            className="formInput"
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}>
          </textarea>
          <button
            className="sendButton"
            variant="contained"
            onClick={handleClick}
            disabled={disableSend}
          >
            <strong>Send</strong>
          </button>
          <button
            className="cancelButton"
            variant="contained"
            onClick={handleCanceled}
          >
            <strong>Cancel</strong>
          </button>
        </form>
      </div>
    </div>
  )
}

// return (
//         <div className="contact" id="contact">
//             <div className="left">
//                 <img src="https://github.com/Shinji-Nishikita/S_Nishikita_website/blob/master/public/assets/IMG_3466.jpg?raw=true" alt="" />
//             </div>
//             <div className="right">
//                 <h2>Contact</h2>
//                 <form >
//                     <input type="text" placeholder="Name" />
//                     <input type="text" placeholder="Email" />
//                     <textarea placeholder="Message"></textarea>
//                     <button type="submit">Send</button>
//                     {message && <span>Thanks, I'll reply ASAP!</span>}
//                 </form>
//             </div>
//         </div>
// )
// }
