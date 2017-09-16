import React from 'react';
import {blogEntries} from './content-data';

class Blog extends React.Component {

  render() {
    return (
      <div>
        <div className="blog-nav">
          <ul className="blog-nav-list">
            { blogEntries.map( (blogEntry, index) => {
                let monthNames = [
                  "January", "February", "March",
                  "April", "May", "June", "July",
                  "August", "September", "October",
                  "November", "December"
                ];
                let date = new Date(blogEntry.date);

                return (
                  <li key={index}>{monthNames[date.getMonth()]} {date.getFullYear()}
                    <ul className="blog-nav-list">
                      <li>- <a href="#">{blogEntry.shortTitle}</a></li>
                    </ul>
                  </li>
                )
              })
            }
          </ul>
        </div>

          { blogEntries.map( (blogEntry, index) => {
              return (
                <BlogEntry blogContent={blogEntry} key={index}/>
              )
            })
          }
      </div>
    )
  };
};

class BlogEntry extends React.Component {
  render () {
    let blogContent = this.props.blogContent;

    return (
      <article className="blog-entry">
        <h2>{blogContent.title}</h2>
        <h3>{blogContent.date} - {blogContent.author}</h3>
        <p>{blogContent.entry}</p>
      </article>
    )
  }
}

export default Blog;
export { BlogEntry };
