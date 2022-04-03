import React, { useReducer } from 'react';
import './Contact.scss';
const initialState = {
  name:{val:"",err:""},
  contact:{val:"",err:""},
  email:{val:"",err:""},
  Mun:{val:"",err:""},
  aboutMun:{val:"",err:""}

};
const reducer = (state,action)=>{
  if(action.type == "name"){
    let temp = {...state};
    temp.name.val = action.val;
    return temp;
  }
  if(action.type == "contact"){
    let temp = {...state};
    temp.contact.val = action.val;
    return temp;
  }
  if(action.type == "email"){
    let temp = {...state};
    temp.email.val = action.val;
    return temp;
  }
  if(action.type == "Mun"){
    let temp = {...state};
    temp.Mun.val = action.val;
    return temp;
  }
  if(action.type == "aboutMun"){
    let temp = {...state};
    temp.aboutMun.val = action.val;
    return temp;
  }
  if(action.type == "checkErr"){
    let temp = {...state};
    let errCount = 0;
    if(temp.name.val==""){
      errCount++;
      temp.name.err = "Name is required.";
    }else{
      temp.name.err = "";
    }
    if(isNaN(temp.contact.val)){
      errCount++;
      temp.contact.err = "Please enter Valid Contact.";
      
    }else{
      temp.contact.err = "";
    }
    if(temp.email.val=="" || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(temp.email.val)){
      errCount++;
      
      temp.email.err = "Please enter Valid Email";
    }else{
      temp.email.err = "";
    }
    if(temp.Mun.val==""){
      errCount++;
      temp.Mun.err = "MUN name is required.";
    }else{
      temp.Mun.err = "";
    }
    if(temp.aboutMun.val==""){
      errCount++;
      temp.aboutMun.err = "MUN description is required.";
    }else{
      temp.aboutMun.err = "";
    }

    if(errCount==0){
      // onSuccess();
      alert("success");
    }else{
      alert("has error please check");
    }
    return temp

  }
  
  
}
function Contact() {
  
  const [formVal,dispatch] = useReducer(reducer,initialState);
  return (
    <div class="contact">
      <form action="#" class="contact__form" onSubmit={(e)=>{e.preventDefault()}}>
        <div class="contact__head">
          <h3 class="contact__title">Are you an Organizer?</h3>
          <p class="contact__subtitle">
            Contact us to get your MUN listed here.
          </p>
        </div>
        <input
          type="text"
          class="contact__name"
          name="name"
          id="name"
          placeholder="Your Name"
          value={formVal.name.val}
          onInput={(e)=>{dispatch({type:'name',val:e.target.value})}}
        />
        {formVal.name.err!="" && <p>{formVal.name.err}</p>}
        
        <input
          class="contact__number"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Contact Number (M)"
          value={formVal.contact.val}
          onInput={(e)=>{dispatch({type:'contact',val:e.target.value})}}
        />
        {formVal.contact.err!="" && <p>{formVal.contact.err}</p>}
        <input
          class="contact__email"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={formVal.email.val}
          onInput={(e)=>{dispatch({type:'email',val:e.target.value})}}
        />
        {formVal.email.err!="" && <p>{formVal.email.err}</p>}
        <input
          class="contact__MUN"
          type="text"
          name="MUN"
          id="MUN"
          placeholder="Name of your MUN"
          value={formVal.Mun.val}
          onInput={(e)=>{dispatch({type:'Mun',val:e.target.value})}}
        />
        {formVal.Mun.err!="" && <p>{formVal.Mun.err}</p>}
        <textarea
          name="about"
          id="about"
          placeholder="What is your MUN about?"
          value={formVal.aboutMun.val}
          onInput={(e)=>{dispatch({type:'aboutMun',val:e.target.value})}}
        ></textarea>
        {formVal.aboutMun.err!="" && <p>{formVal.aboutMun.err}</p>}
        <div></div>
        <div class="submit-box">
          <input
            style={{ color: '#fff' }}
            type="submit"
            class="btn-contact"
            value="Submit"
            onClick={(e)=>{
              dispatch({type:'checkErr'});
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
