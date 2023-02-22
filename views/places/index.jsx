const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6" key={ index }>
          <h2 className= "text-center">
            <a href = "#"> {place.name} </a> 
          </h2>
          <p className="text-center">{ place.cuisines }</p>
          <img src={place.pic} alt={place.name}/>
          <p className="text-center">
              Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES to Rant or Rave About</h1>
              <div clasName="row">
                 {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  module.exports = index()
  