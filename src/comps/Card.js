import React from 'react'

function Card(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="card text-white bg-primary mb-3" style={{ "maxWidth ": "18rem", "height":"150px" }}>
            <div className="card-header  d-flex justify-content-center">Confirmed</div>
            <div className="card-body d-flex align-items-center justify-content-center" >
              <h2 className="card-title">{props.confirmed}</h2>
             
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card text-white bg-primary mb-3" style={{ "maxWidth ": "18rem", "height":"150px" }}>
            <div className="card-header  d-flex justify-content-center">Deaths</div>
            <div className="card-body d-flex align-items-center justify-content-center" >
              <h2 className="card-title">{props.deaths}</h2>
             
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card text-white bg-primary mb-3" style={{ "maxWidth ": "18rem", "height":"150px" }}>
            <div className="card-header  d-flex justify-content-center">Recovered</div>
            <div className="card-body d-flex align-items-center justify-content-center" >
              <h2 className="card-title">{props.recovered}</h2>
             
            </div>
          </div>
        </div>
       
      </div>

    </div>
  )
}

export default Card