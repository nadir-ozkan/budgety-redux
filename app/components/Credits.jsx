import React from 'react';

class Credits extends React.Component {
  render(){
    return(
      <div>
        <h2>Credits</h2>
        <p> This budget app project is a part of the great Udemy course named <a href="https://www.udemy.com/the-complete-javascript-course">The Complete JavaScript Course: Build a Real-World Project </a>
          teached by <a href="https://www.udemy.com/user/jonasschmedtmann/"> Jonas Schmedtmann</a>. I highly recommend you take this course if you would like to learn advance parts of JS and to create wep applications using just JS.</p>
        <p> All the HTML and CSS is barrowed from the course content and is used with the permission of <a href="https://www.udemy.com/user/jonasschmedtmann/"> Jonas Schmedtmann</a>. </p>
        <p> Coded by <a href="https://www.linkedin.com/in/nadmez/"> Nadir Özkan </a> using React and Redux technologies as an exercise. You can access the code from <a href="https://bitbucket.org/huniyazilim/budgety-redux">here</a>. </p>
      </div>
    );
  }

}

export default Credits;
