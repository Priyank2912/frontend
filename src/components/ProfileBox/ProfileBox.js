import React, { useReducer, useState } from 'react';

import './ProfileBox.scss';
const reducer = (state, action) => {
  if (action.type == 'name') {
    let temp = { ...state };
    temp.name = action.val;
    return temp;
  }
  if (action.type == 'date') {
    let temp = { ...state };
    if (action.val <= 31) {
      temp.dob.date = action.val;
    }
    return temp;
  }
  if (action.type == 'month') {
    let temp = { ...state };
    if (action.val <= 12) {
      temp.dob.month = action.val;
    }
    return temp;
  }
  if (action.type == 'year') {
    let temp = { ...state };
    if (action.val.toString().length <= 4) {
      temp.dob.year = action.val;
    }
    return temp;
  }
  if (action.type == 'contact') {
    let temp = { ...state };
    if (!isNaN(action.val)) {
      temp.contact = action.val;
    }
    return temp;
  }
  if (action.type == 'email') {
    let temp = { ...state };
    temp.email = action.val;
    return temp;
  }
  if (action.type == 'all') {
    let temp = { ...state };
    temp = action.val;
    return temp;
  }
};
const ProfileBox = () => {
  const initialData = {
    name: 'soham',
    dob: {
      date: '02',
      month: '09',
      year: '2001',
    },
    contact: '8320911631',
    email: 'sohampatel9403@gmail.com',
  };
  const [formData, dispatch] = useReducer(reducer, initialData);
  const [editmode, changemode] = useState();
  const [err, setErr] = useState('');
  const submit = () => {
    if (formData.name == '') {
      setErr('name is required');
      return '';
    } else if (formData.contact == '') {
      setErr('Contact is required');
      return '';
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      )
    ) {
      setErr('please enter valid email');
      return '';
    } else if (
      formData.dob.date == '' ||
      formData.dob.month == '' ||
      formData.dob.year == ''
    ) {
      setErr('please enter your birth-date');
      return '';
    } else {
      setErr('');
    }

    if (formData.dob.date < 10) {
      dispatch({ type: 'date', val: '0' + parseInt(formData.dob.date) });
    }
    if (formData.dob.date < 10) {
      dispatch({ type: 'month', val: '0' + parseInt(formData.dob.month) });
    }
  };
  return (
    <div className="profile-container">
      <div className="tooltip"></div>
      <h1 className="heading">My Profile</h1>
      <div className="body">
        <div className="account">
          <div className="sub-heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
            >
              <path d="M12 1L6.62791 6L1 1" stroke="#369FFF" />
            </svg>
            <span>Account</span>
          </div>

          <div className="data">
            <ul className="title">
              <li>
                <span>Name</span>
              </li>
              <li>
                <span>Date of Birth</span>
              </li>
              <li>
                <span>Contact Number</span>
              </li>
              <li>
                <span>Email Address</span>
              </li>
            </ul>
            <ul className="value">
              <li>
                <input
                  disabled={!editmode}
                  value={formData.name}
                  type="text"
                  name="name"
                  onInput={(e) => {
                    dispatch({ type: 'name', val: e.target.value });
                  }}
                />
              </li>
              <li className="dob">
                <input
                  disabled={!editmode}
                  value={formData.dob.date}
                  type="number"
                  maxLength="2"
                  max="31"
                  name="date"
                  className="date"
                  onInput={(e) => {
                    dispatch({ type: 'date', val: e.target.value });
                  }}
                />
                <input
                  disabled={!editmode}
                  value={formData.dob.month}
                  type="number"
                  maxLength="2"
                  max="12"
                  name="month"
                  className="month"
                  onInput={(e) => {
                    dispatch({ type: 'month', val: e.target.value });
                  }}
                />
                <input
                  disabled={!editmode}
                  value={formData.dob.year}
                  type="number"
                  name="year"
                  className="year"
                  onInput={(e) => {
                    dispatch({ type: 'year', val: e.target.value });
                  }}
                />
              </li>
              <li>
                <input
                  disabled={!editmode}
                  value={formData.contact}
                  type="tel"
                  name="contact"
                  onInput={(e) => {
                    dispatch({ type: 'contact', val: e.target.value });
                  }}
                />
              </li>
              <li>
                <input
                  disabled={!editmode}
                  value={formData.email}
                  type="email"
                  name="email"
                  onInput={(e) => {
                    dispatch({ type: 'email', val: e.target.value });
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
        {err != '' && (
          <p
            style={{
              color: 'red',
              fontSize: '1.5rem',
              padding: '0.5rem 1.5rem',
              textAlign: 'center',
            }}
          >
            {err}
          </p>
        )}
        <div className="btn">
          {!editmode && (
            <button
              className="edit"
              onClick={() => {
                changemode(true);
              }}
            >
              Edit
            </button>
          )}
          {editmode && (
            <button
              className="edit"
              onClick={() => {
                submit();
              }}
            >
              submit
            </button>
          )}
          <button className="logout">logOut</button>
        </div>

        <div className="booking-history">
          <div className="sub-heading">
            <svg
              style={{ transform: 'rotate(-90deg)' }}
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
            >
              <path d="M12 1L6.62791 6L1 1" stroke="#369FFF" />
            </svg>
            <span style={{ borderBottom: '0px' }}>Booking History</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
