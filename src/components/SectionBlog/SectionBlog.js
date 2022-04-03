import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import './SectionBlog.scss';
import './../../sassStyles/base/_typography.scss';

import imageBlog from './../../images/special.png';
import iconShare from './../../images/svg/Share-black.svg';
import { Link } from 'react-router-dom';

function SectionBlog() {
  const history = useHistory();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, []);

  return (
    <div className="section-blog">
      <div className="section-blog__head">
        <div className="section-blog__head-left">
          <h2 className="section-blog__title heading-secondary">
            Immerse Yourself
          </h2>
          <p className="section-blog__subtitle">Blogs from the world of MUNs</p>
        </div>
        <div className="section-blog__head-right">
          <Link to="/blog" className="section-blog__link-more">
            More Like This
          </Link>
        </div>
      </div>
      <div className="section-blog__body">
        <div className="section-blog__img-box">
          <img src={imageBlog} alt="" className="section-blog__img" />
        </div>
        <div className="section-blog__content-box">
          <div className="section-blog__content-head">
            <h3 className="blog-title-1 heading-tertiary">
              Tips for New Delegates:
            </h3>
            <h3 className="blog-title-2 heading-tertiary">
              How to Face your Fear in your First MUN
            </h3>
            <button className="section-blog__share-box btn">
              <img src={iconShare} className="section-blog__share" alt="" />
            </button>
          </div>
          <div className="section-blog__content-body">
            <p className="section-blog__content ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              id fringilla lectus mauris. Ultricies faucibus sit eget mauris at.
              Velit orci, mauris at et nulla pellentesque amet, sollicitudin.
              Vestibulum suspendisse augue.
            </p>
            <p className="section-blog__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              id fringilla lectus mauris. Ultricies faucibus sit eget mauris at.
              Velit orci, mauris at et nulla pellentesque amet, sollicitudin.
              augue et nec vel...{' '}
              <span
                onClick={() => {
                  history.push('/blog');
                }}
                className="section-blog__link-continue"
              >
                Continue Reading
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBlog;
