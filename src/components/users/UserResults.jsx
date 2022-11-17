import React from 'react'
import {useContext} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const {users, loading} = useContext(GithubContext)

    if(!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-col-3 md: grid-col-2'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
         )
    } else {
        return (
            <h3>{Spinner}</h3>
        )
    }
    
}

export default UserResults