import './blog.scss';
import LinesEllipsis from 'react-lines-ellipsis';
import Button from '../common/button/Button';
import { useState } from 'react';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
const BlogComponent = (Props) => {
  const [isClampped, changeClampped] = useState(false);
  const [maxLine, changeMaxLine] = useState(8);
  const reflow = (rleState) => {
    const { clamped, text } = rleState;
    changeClampped(clamped);
  };
  return (
    <div className="BlogComponentContainer">
      <div className="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
      </div>
      <div className="blogData">
        <div className="blogHeading">
          <h1>Essential Tips for New Delegates</h1>
          <h4>
            soham patel ,<p className="date"> September 11</p>{' '}
          </h4>
        </div>
        <hr />
        <div className="blog">
          <h2>How to Face Your Fears in Your First MUN?</h2>
          <div className="content">
            <ResponsiveEllipsis
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida. Justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. 

jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida. Justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. 

Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida

jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida. Justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. 

Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida

jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida. Justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. 

Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida. Justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus id fringilla lectus mauris. Ultricies faucibus sit eget mauris at. Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida. Velit orci, mauris at et nulla pellentesque amet, sollicitudin. Vestibulum suspendisse augue et nec vel, nam. hajtkhms a. jqherk kajejoro akwjfj lawmj lawke. awkd awjkdf.awkdl Elit non ipsum id arcu. Mattis nunc, in duis quam aliquet. Suspendisse viverra turpis ornare turpis. Vitae erat sed purus sit feugiat eget nunc. Proin et condimentum leo quis quis in non gravida
"
              maxLine={maxLine}
              ellipsis={'...'}
              trimRight
              basedOn="words"
              onReflow={(rleState) => {
                reflow(rleState);
              }}
            />
          </div>
        </div>
        {isClampped ? (
          <button className="btn-blog"
            onClick={() => {
              changeMaxLine(maxLine + 50);
            }}
          >
            Read more
          </button>
        ) : (
          <button className="btn-blog"
            onClick={() => {
              changeMaxLine(maxLine - 50);
            }}
          >
            Read Less
          </button>
        )}
      </div>
    </div>
  );
};
export default BlogComponent;
