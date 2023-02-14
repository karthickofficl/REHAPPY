import React from 'react'
import ListBanner from './ListBanner'
import ListBrowser from './ListBrowser'
import ListHeader from './ListHeader'
import ListPages from './ListPages'

const Listing = () => {
  return (
    <div>
      <ListHeader/>
      <ListBanner/>
      <ListBrowser/>
      <ListPages/>
    </div>
  )
}

export default Listing