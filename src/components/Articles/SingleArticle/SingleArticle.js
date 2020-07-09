import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class SingleArticle extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <article>
          <div className="image">IMAGE</div>
          <div className="information">
            <span className="information__data">Nov 29, 2018</span>
            <span className="information__data">John Smith</span>
            <span className="information__data">the Verge</span>
          </div>
          <h3 className="title">Title Article</h3>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            quia error laudantium. Accusantium ullam facere tempore, voluptas
            rerum atque maxime.
          </div>
          <Link to="/article" className="CTA">
            Read More
          </Link>
        </article>
      </Fragment>
    );
  }
}

export default SingleArticle;
