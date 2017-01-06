var React = require('react');

var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.jsx Rendered</p>
          <p> Some shit to dispay Main </p>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
