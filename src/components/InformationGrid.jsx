import React from 'react'
import user from '../assets/user.png'
import {RiFlagLine} from "react-icons/ri"
import {BiCake} from "react-icons/bi"

const InformationGrid = ({id, name, email, country, birth_date}) => {
  return (
    <div >
      <li key={id} className="col-span-1 divide-y divide-gray-100 rounded-lg bg-violet-300 shadow-2xl list-none">

        
        <div className="flex w-full items-center justify-between space-x-6 p-2">
          <div className="flex-1 truncate items-center">
          <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100" src={user} alt="user" />
                <h3 className="truncate text-lg font-medium capitalize text-gray-900 text-center">{name}</h3>
            <span className="mt-3 mb-3 truncate text-sm inline-block flex-shrink-0 rounded-full bg-green-400 px-2 py-0.5 font-medium text-green-800">{email}</span>
          </div>
        </div>


        <div>
          <div className="-mt-px flex divide-x divide-gray-100">
            <div className="flex w-0 flex-1">
              <div
               className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-900 "
              >
                <BiCake className="h-5 w-5 text-gray-800" aria-hidden="true" />
                <span className="ml-3">{birth_date}</span>
              </div>
            </div>

            <div className="-ml-px flex w-0 flex-1">
              <div
                className="relative capitalize inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-900"
              >
                <RiFlagLine className="h-5 w-5 text-gray-800" aria-hidden="true" />
                <span className="ml-3">{country}</span>
              </div>
            </div>
          </div>
        </div>

      </li>
  </div>
  )
}

export default InformationGrid