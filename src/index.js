import React from "react";
import ReactDOM from "react-dom";

class Reddit extends React.Component {
  state = {
    posts: []
  };

  render() {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => {
            <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const root = document.getElementById("root");

ReactDOM.render(<Reddit />, root);
