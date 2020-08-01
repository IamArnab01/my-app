import React from 'react';

const withClass = (WrappedComponent,className) =>{
    return props => (
      <div className="clasasName">
       <WrappedComponent {...props} />
      </div>
    );
}

export default withClass;