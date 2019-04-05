import { Components, registerComponent} from 'meteor/vulcan:core';
import React, { Component } from 'react';

const API = 'https://www.reddit.com/r/stopdrinking/new.json?sort=new';

class Sidebartwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then(response => response.json())
      .then(response => this.setState({
           isLoaded: true,
           items: response.results,
        }))
  }

  render(props) {
    var {isLoaded, items} = this.state;  
    const { item } = props;

    return (
      <div className="sidebar-all">
     
      <Components.Newsletter />

      <div className="sidebar-exp">
        <div className="sidebar-logo">
          <img src="/packages/app/lib/static/zenproverb.jpg" alt="IWNDWYT"/>
        </div>
        <div className="sidebar-txt">
          <h4>Sidebar</h4>
          
          <p>All the words that I want to post go right in here and then you can see them!</p>
        </div>
      </div>

      <div className="sidebar-exp">
        
        <div className="sidebar-txt">
        <ul>
        {items.map(item =>
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        )}
        </ul>
        </div>
      </div>

    </div>
    )
  }
}

export default Sidebartwo;

