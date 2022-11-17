import React from 'react'

function UserSearch() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" />
                    </div>
                </div>
            </form>
        </div>
        <div>
            <button className='btn btn-ghost btn-lg'>
                Clear
            </button>
        </div>
    </div>
  )
}

export default UserSearch