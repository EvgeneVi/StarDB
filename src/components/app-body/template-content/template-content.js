import React from 'react';
export default ({left,right})=>
    <div className="row">
        <div className="people-list col-lg-6">
            {left}
        </div>
        <div className='col-lg-6'>
            {right}
        </div>
    </div>