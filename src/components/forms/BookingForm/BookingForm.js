import React, { useReducer, useState } from 'react';
import './BookingForm.scss';
import './../../../sassStyles/base/_typography.scss';
import img from './../../../images/briefcase.png';

import RadioButton from './../../common/button/RadioButton';
import { useHistory } from 'react-router';
const detectAge = (date, month, year) => {
  let Currentdate = new Date().getTime();
  let dob = new Date(year, month, date).getTime();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let days = Math.floor((Currentdate - dob) / day);
  if (days < 0) {
    return 0;
  } else {
    return Math.floor(days / 365);
  }
};
const reducer = (state, action) => {
  if (action.type == 'fname') {
    let temp = { ...state };
    temp.fname = action.val;
    return temp;
  }
  if (action.type == 'lname') {
    let temp = { ...state };
    temp.lname = action.val;
    return temp;
  }
  if (action.type == 'institution') {
    let temp = { ...state };
    temp.institution = action.val;
    return temp;
  }
  if (action.type == 'city') {
    let temp = { ...state };
    temp.city = action.val;
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
    if (action.val.toString().length <= 4 && !isNaN(action.val)) {
      temp.dob.year = action.val;
    }
    return temp;
  }
  if (action.type == 'age') {
    let temp = { ...state };
    temp.dob.age = detectAge(
      parseInt(temp.dob.date),
      parseInt(temp.dob.month),
      parseInt(temp.dob.year)
    );
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

  if (action.type == 'food') {
    let temp = { ...state };
    temp.food = action.val;
    return temp;
  }

  if (action.type == 'accommodation') {
    let temp = { ...state };
    temp.accommodation = action.val;
    return temp;
  }
  if (action.type == 'premium') {
    let temp = { ...state };
    temp.premium = action.val;
    return temp;
  }

  if (action.type == 'all') {
    let temp = { ...state };
    temp = action.val;
    return temp;
  }
};
function BookingForm() {
  const date = new Date();
  const history = useHistory();
  const initialData = {
    fname: '',
    lname: '',
    dob: {
      date: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
      month: date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth(),
      year: date.getFullYear(),
      age: 0,
    },
    institution: '',
    city: '',
    contact: '',
    email: '',
    food: 'nonJain',
    accommodation: false,
    premium: false,
  };
  const [formData, dispatch] = useReducer(reducer, initialData);
  const [progressCount, changeProgressCount] = useState(1);
  const [dropDown, toggleDropDown] = useState({
    visiblity: false,
    list: Array(
      { id: 1, country: 'United Nation', commitee: 'Human Rights Committee' },
      { id: 2, country: 'United Nation', commitee: 'soham Rights Committee' },
      { id: 3, country: 'United Nation', commitee: 'test Rights Committee' },
      { id: 4, country: 'United Nation', commitee: 'done Rights Committee' },
      { id: 5, country: 'United Nation', commitee: 'pink Rights Committee' }
    ),
    selected: {
      id: 1,
      country: 'United Nation',
      commitee: 'Human Rights Committee',
    },
  });
  const checkOut = () => {
    history.push('/summary');
  };
  return (
    <div className="booking-form__box">
      <h2 className="booking-form__title heading-secondary">My Booking</h2>
      <div className="booking-form">
        <div className="booking-form__head">
          <div className="booking-form__img-box">
            <img className="booking-form__img" src={img} alt="" />
          </div>
          <div className="booking-form__card">
            <div className="booking-form__card-title">
              World Archive Simulation
            </div>
            <div className="booking-form__card-committee-box">
              <div className="booking-form__card-committee">
                <span className="booking-form__card-committee--nation">
                  {dropDown.selected.country}
                </span>
                <span className="booking-form__card-committee--name">
                  {dropDown.selected.commitee}
                </span>

                {dropDown.visiblity && (
                  <ul className="booking-form__card-committee--dropdown">
                    {dropDown.list.map((data) => {
                      return (
                        <li
                          onClick={() => {
                            let list = dropDown.list;
                            let index = list.indexOf(data);
                            list.splice(index, 1);
                            list.unshift(data);

                            toggleDropDown({
                              visiblity: false,
                              selected: data,
                              list: list,
                            });
                          }}
                        >
                          <span
                            className="booking-form__card-committee--nation"
                            style={{
                              color:
                                data.id == dropDown.selected.id
                                  ? '#369FFF'
                                  : 'black',
                            }}
                          >
                            {data.country}
                          </span>
                          <span
                            className="booking-form__card-committee--name"
                            style={{
                              color:
                                data.id == dropDown.selected.id
                                  ? '#369FFF'
                                  : 'black',
                            }}
                          >
                            {data.commitee}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              {/* <div className="committee__dropdown">
                <div className="committee__dropdown-item">
                  <span className="committee__dropdown-nation">
                    United Nations
                  </span>
                  <span className="committee__dropdown-name">
                    Human Rights Committee
                  </span>
                </div>
                <div className="committee__dropdown-item">
                  <span className="committee__dropdown-nation">
                    United Nations
                  </span>
                  <span className="committee__dropdown-name">
                    Human Rights Committee
                  </span>
                </div>
                <div className="committee__dropdown-item">
                  <span className="committee__dropdown-nation">
                    United Nations
                  </span>
                  <span className="committee__dropdown-name">
                    Human Rights Committee
                  </span>
                </div>
                <div className="committee__dropdown-item">
                  <span className="committee__dropdown-nation">
                    United Nations
                  </span>
                  <span className="committee__dropdown-name">
                    Human Rights Committee
                  </span>
                </div>
                <div className="committee__dropdown-item">
                  <span className="committee__dropdown-nation">
                    United Nations
                  </span>
                  <span className="committee__dropdown-name">
                    Human Rights Committee
                  </span>
                </div>
                <div className="committee__dropdown-item">
                  <span className="committee__dropdown-nation">
                    United Nations
                  </span>
                  <span className="committee__dropdown-name">
                    Human Rights Committee
                  </span>
                </div>
              </div> */}
              <div className="booking-form__card-committee-btn-box">
                <button
                  className="btn booking-form__card-committee-btn"
                  onClick={() => {
                    toggleDropDown({
                      visiblity: !dropDown.visiblity,
                      list: dropDown.list,
                      selected: dropDown.selected,
                    });
                  }}
                >
                  Change Committee
                </button>
              </div>
            </div>
            <div className="booking-form__card-location">
              Zydus School, Ahmedabad
              <span className="booking-form__card-location-link-box">
                View in
                <a href="#" className="booking-form__card-location-link">
                  Maps
                </a>
              </span>
            </div>
            <div className="booking-form__card-time">10 a.m. - 5 p.m.</div>
            <div className="booking-form__card-date">October 13 - 14, 2021</div>
            <div className="booking-form__card-text">
              Further details will be communicated via email.
            </div>
          </div>
        </div>
        <div className="booking-form__body">
          <div class="thin-line"></div>
          <div className="booking-form__field-group-box booking-form__field-group-box--nd">
            {/* <div className="booking-form__line booking-form__line--name">
                &nbsp;
              </div> */}

            <div
              className="booking-form__line"
              style={{ background: progressCount >= 1 ? '#369fff' : '#c4c4c4' }}
            >
              &nbsp;
            </div>

            <div className="booking-form__field-group">
              <div className="booking-form__field booking-form__name-box">
                <div className="booking-form__label booking-form__label--name">
                  Name
                </div>
                <input
                  type="text"
                  name="First Name"
                  id="First name"
                  onFocus={() => {
                    changeProgressCount(1);
                  }}
                  value={formData.fname}
                  onInput={(e) => {
                    dispatch({ type: 'fname', val: e.target.value });
                  }}
                  placeholder="First Name"
                  class="booking-form__first-name"
                />
                <input
                  type="text"
                  name="last Name"
                  id="last name"
                  onFocus={() => {
                    changeProgressCount(1);
                  }}
                  value={formData.lname}
                  onInput={(e) => {
                    dispatch({ type: 'lname', val: e.target.value });
                  }}
                  placeholder="Last Name"
                  class="booking-form__last-name"
                />
              </div>

              <div className="booking-form__field booking-form__date-box">
                <div className="booking-form__label">Date of Birth</div>
                <input
                  type="text"
                  name="day"
                  id="day"
                  placeholder="Date"
                  class="booking-form__date"
                  onFocus={() => {
                    changeProgressCount(1);
                  }}
                  onBlur={() => {
                    dispatch({ type: 'age' });
                  }}
                  value={formData.dob.date}
                  onInput={(e) => {
                    dispatch({ type: 'date', val: e.target.value });
                  }}
                />
                <input
                  type="text"
                  name="Month"
                  id="Month"
                  placeholder="Month"
                  onFocus={() => {
                    changeProgressCount(1);
                  }}
                  onBlur={() => {
                    dispatch({ type: 'age' });
                  }}
                  value={formData.dob.month}
                  onInput={(e) => {
                    dispatch({ type: 'month', val: e.target.value });
                  }}
                  class="booking-form__month"
                />
                <input
                  type="text"
                  name="Year"
                  id="Year"
                  placeholder="Year"
                  onFocus={() => {
                    changeProgressCount(1);
                  }}
                  onBlur={() => {
                    dispatch({ type: 'age' });
                  }}
                  value={formData.dob.year}
                  onInput={(e) => {
                    dispatch({ type: 'year', val: e.target.value });
                  }}
                  class="booking-form__year"
                />

                <div className="age">Age</div>
                <input
                  type="text"
                  name="Age"
                  id="Age"
                  disabled={true}
                  value={formData.dob.age}
                  placeholder=""
                  className="booking-form__age"
                />
              </div>
            </div>
          </div>

          <div className="booking-form__field-group-box booking-form__field-group-box--ic">
            <div
              className="booking-form__line"
              style={{ background: progressCount >= 2 ? '#369fff' : '#c4c4c4' }}
            ></div>
            <div className="booking-form__field-group">
              <div className="booking-form__field booking-form__institution-box">
                <div className="booking-form__label booking-form__label--institution">
                  Institution
                </div>
                <input
                  onFocus={() => {
                    changeProgressCount(2);
                  }}
                  type="text"
                  name="institution"
                  id="institution"
                  placeholder="Full name of the institution you study in"
                  value={formData.institution}
                  onInput={(e) => {
                    dispatch({ type: 'institution', val: e.target.value });
                  }}
                  className="booking-form__institution"
                />
              </div>

              <div className="booking-form__field booking-form__city-box">
                <div className="booking-form__label booking-form__label--city">
                  City
                </div>
                <input
                  onFocus={() => {
                    changeProgressCount(2);
                  }}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Your city of residence"
                  value={formData.city}
                  onInput={(e) => {
                    dispatch({ type: 'city', val: e.target.value });
                  }}
                  class="booking-form__city"
                />
              </div>
            </div>
          </div>

          <div className="booking-form__field-group-box booking-form__field-group-box--c">
            <div
              className="booking-form__line"
              style={{ background: progressCount >= 3 ? '#369fff' : '#c4c4c4' }}
            ></div>
            <div className="booking-form__field-group">
              <div className="booking-form__field booking-form__contact-box">
                <div className="booking-form__label">
                  Contact Details
                  <p className="booking-form__label--subtitle contact-subtitle">
                    Please make sure you provide a contact number an active
                    Whatsapp account.
                  </p>
                </div>
                <span className="booking-form__phone-pre">+91</span>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onFocus={() => {
                    changeProgressCount(3);
                  }}
                  value={formData.contact}
                  onInput={(e) => {
                    dispatch({ type: 'contact', val: e.target.value });
                  }}
                  class="booking-form__phone"
                />
                <div class="email">Email Address</div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onFocus={() => {
                    changeProgressCount(3);
                  }}
                  value={formData.email}
                  onInput={(e) => {
                    dispatch({ type: 'email', val: e.target.value });
                  }}
                  placeholder="Ex. alexjacob@gmail.com"
                  class="booking-form__email"
                />
              </div>
            </div>
          </div>

          <div className="booking-form__field-group-box booking-form__field-group-box--faa">
            <div
              className="booking-form__line"
              style={{ background: progressCount >= 4 ? '#369fff' : '#c4c4c4' }}
            ></div>
            <div className="booking-form__field-group">
              <div className="booking-form__field booking-form__food-box">
                <div className="booking-form__label">
                  Food Preference
                  <p className=" booking-form__label--subtitle food-subtitle">
                    We only provide vegetarian options.
                  </p>
                </div>

                {/* <div className="btn-box">
                  <button className="btn booking-form-btn">
                    <span className="circle"></span>Jain
                  </button>
                  <button className="btn booking-form-btn">
                    <span className="circle"></span>Non-jain
                  </button>
                </div> */}

                <span className="booking-form__btn booking-form__btn--lg">
                  <RadioButton
                    text="Jain"
                    isSelected={formData.food == 'jain' ? true : false}
                    onClick={() => {
                      changeProgressCount(4);
                      dispatch({ type: 'food', val: 'jain' });
                    }}
                    className=""
                  ></RadioButton>
                </span>
                <span className="booking-form__btn booking-form__btn--lg">
                  <RadioButton
                    text="Non-Jain"
                    className=""
                    isSelected={formData.food == 'nonJain' ? true : false}
                    onClick={() => {
                      changeProgressCount(4);
                      dispatch({ type: 'food', val: 'nonJain' });
                    }}
                  ></RadioButton>
                </span>
              </div>

              <div className="booking-form__field booking-form__accomodation-box">
                <div className="booking-form__label">
                  Accommodation
                  <p className="accomodation-subtitle booking-form__label--subtitle">
                    Accomodation details will be communicated via email after
                    the booking.
                  </p>
                </div>

                <span className="booking-form__btn booking-form__btn--sm">
                  <RadioButton
                    text="Yes"
                    isSelected={formData.accommodation ? true : false}
                    onClick={() => {
                      changeProgressCount(4);
                      dispatch({ type: 'accommodation', val: true });
                    }}
                    className=""
                  ></RadioButton>
                </span>
                <span className="booking-form__btn booking-form__btn--sm">
                  <RadioButton
                    text="No"
                    isSelected={!formData.accommodation ? true : false}
                    onClick={() => {
                      changeProgressCount(4);
                      dispatch({ type: 'accommodation', val: false });
                    }}
                    className=""
                  ></RadioButton>
                </span>
              </div>

              <div className="booking-form__field booking-form__premium-box">
                <div className="booking-form__label">Avail Premium</div>

                <span className="booking-form__btn booking-form__btn--sm">
                  <RadioButton
                    text="Yes"
                    isSelected={formData.premium ? true : false}
                    onClick={() => {
                      changeProgressCount(4);
                      dispatch({ type: 'premium', val: true });
                    }}
                    className=""
                  ></RadioButton>
                </span>
                <span className="booking-form__btn booking-form__btn--sm">
                  <RadioButton
                    text="No"
                    isSelected={!formData.premium ? true : false}
                    onClick={() => {
                      changeProgressCount(4);
                      dispatch({ type: 'premium', val: false });
                    }}
                    className=""
                  ></RadioButton>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-form__checkout-box">
          <button
            className="btn btn-checkout"
            onClick={() => {
              checkOut();
            }}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
