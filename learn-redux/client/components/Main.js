  import React from 'react';
  
  import { Link } from 'react-router';

  const Main = React.createClass({
      render() {
          return (
              <div>
                 
                  <h1>
                      <Link to="/">Reduxstagram</Link>
                      </h1>
                    {/* child component,   this line below the clone allows props to pass
                    down to children ex PhotoGrid*/}
                      {React.cloneElement(this.props.children, this.props)}
                      </div>

          )
      }
  });
  export default Main;