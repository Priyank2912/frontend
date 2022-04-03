// <<<<<<< HEAD
// <<<<<<< HEAD
import { useState } from 'react';

import './FormField.scss';
// =======

import './FormField.scss';
// >>>>>>> 2b13aff4ff566254f8cdd46191e9299235dc4502
// =======

import './FormField.scss';
// >>>>>>> 5e49c1f3ecfe978c235c50a17714f49abe618299
const FormField = (Props) => {
  const [type, changeType] = useState(Props.type);

  return (
    <div className="formFieldContainer">
      {Props.type != 'password' && (
        <div className="formFieldContainerInner">
          <input
            formnovalidate={true}
            name={Props.name}
            value={Props.value}
            onInput={(e) => {
              Props.changeTo(e.target.value);
            }}
            onBlur={(e) => {
              Props.onBlur(e.target.value);
            }}
            type={type}
            placeholder={Props.placeholder}
          />
          {Props.message != '' && <p>{Props.message}</p>}
          
        </div>
      )}
      {Props.type == 'password' && (
        <div className="formFieldContainerInnerPassword">
          <input
            formnovalidate={true}
            value={Props.value}
            onInput={(e) => {
              Props.changeTo(e.target.value);
            }}
            onBlur={(e) => {
              Props.onBlur(e.target.value);
            }}
            type={type}
            placeholder={Props.placeholder}
          />
          <button
            onClick={() => {
              changeType(type == 'password' ? 'text' : 'password');
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9996 9.005C13.0605 9.005 14.0779 9.42643 14.828 10.1766C15.5782 10.9267 15.9996 11.9441 15.9996 13.005C15.9996 14.0659 15.5782 15.0833 14.828 15.8334C14.0779 16.5836 13.0605 17.005 11.9996 17.005C10.9387 17.005 9.92131 16.5836 9.17117 15.8334C8.42102 15.0833 7.9996 14.0659 7.9996 13.005C7.9996 11.9441 8.42102 10.9267 9.17117 10.1766C9.92131 9.42643 10.9387 9.005 11.9996 9.005ZM11.9996 10.505C11.3366 10.505 10.7007 10.7684 10.2318 11.2372C9.76299 11.7061 9.4996 12.342 9.4996 13.005C9.4996 13.668 9.76299 14.3039 10.2318 14.7728C10.7007 15.2416 11.3366 15.505 11.9996 15.505C12.6626 15.505 13.2985 15.2416 13.7674 14.7728C14.2362 14.3039 14.4996 13.668 14.4996 13.005C14.4996 12.342 14.2362 11.7061 13.7674 11.2372C13.2985 10.7684 12.6626 10.505 11.9996 10.505ZM11.9996 5.5C16.6126 5.5 20.5956 8.65 21.7006 13.064C21.749 13.2569 21.7188 13.4612 21.6166 13.6319C21.5144 13.8025 21.3485 13.9256 21.1556 13.974C20.9627 14.0224 20.7584 13.9922 20.5877 13.89C20.4171 13.7878 20.294 13.6219 20.2456 13.429C19.7833 11.5918 18.7208 9.9616 17.2266 8.79704C15.7323 7.63248 13.892 7.00028 11.9975 7.00074C10.1031 7.0012 8.26304 7.6343 6.76937 8.79958C5.2757 9.96486 4.21395 11.5956 3.7526 13.433C3.70079 13.6219 3.57711 13.7831 3.40801 13.882C3.23892 13.9809 3.03783 14.0098 2.84775 13.9623C2.65767 13.9149 2.49369 13.795 2.39088 13.6283C2.28807 13.4615 2.25459 13.2611 2.2976 13.07C2.83987 10.9075 4.08906 8.98806 5.8468 7.61657C7.60455 6.24509 9.7701 5.50013 11.9996 5.5Z"
                fill="#369FFF"
              />
            </svg>
          </button>
          {Props.message != '' && <p>{Props.message}</p>}
        </div>
      )}
    </div>
  );
};
export default FormField;
