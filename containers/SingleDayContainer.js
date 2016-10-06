import React from 'react'
import { Link } from 'react-router'
import ForecastPanel from '../components/ForecastPanel'

var SingleDayContainer = React.createClass({
  render: function () {
    return (
      <div>
        <h1>This is where there is a single day</h1>
        <Link to='/'>
          <button type='button' className='btn btn-lg btn-success'>back to the stuff</button>
        </Link>
        

      </div>
    )
  }
});

export default SingleDayContainer