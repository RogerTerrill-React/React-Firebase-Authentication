import React from 'react'
import HomeSummary from './HomeSummary';

const HomeList = ({homes}) => {
  return (
    <div className="home-list section">
      {homes && homes.map(home => {
        return (
          <HomeSummary home={home} key={home.id} />
        )
      })}
      
    </div>
  )
}

export default HomeList
