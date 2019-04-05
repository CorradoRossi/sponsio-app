import { registerComponent} from 'meteor/vulcan:core';
import React, { Component } from 'react';

const API = 'https://www.reddit.com/r/stopdrinking/new.json?sort=new';
const DEFAULT_QUERY = 'redux';

const Sidebarthree = () => {

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(response => response.map(data => data.children))
      //.then(data => this.setState({ data: data.children }))
  }

  render() {
    const data = this.data;  

    return (
      <div className="sidebar-all">

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
        {data.map(data =>
          <li key={data.data}>
            <a href={data.url}>{data.title}</a>
          </li>
        )}
        </ul>
        </div>
      </div>

    </div>
    )
  };
}

registerComponent({ name: 'Sidebarthree', component: Sidebarthree });