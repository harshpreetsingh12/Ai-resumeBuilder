import React from 'react'
import DashboardPage from './DashboardPage'
import { getAllUserResumes } from '../../../../actions/resume'

const page = async () => {
  const AllResumes= await getAllUserResumes()
  return <DashboardPage resumes={AllResumes}/>
}

export default page
