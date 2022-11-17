import React from 'react'
import UserResults from './user/UserResults'
import UserSearch from '../../users/UserSearch'

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home