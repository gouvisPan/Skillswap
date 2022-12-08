import React from 'react'
import { Link } from 'react-router-dom'

const AddMentorships = () => {
  return (
    <div className="menteeships__no-skills">
    <h1>Add some skills to let other people find you!</h1>
    <p>
      It looks like you have not added any skills yet. Click{" "}
      <Link to="/profile">here</Link> to add some and start your Mentoring
      journey!
    </p>
  </div>
  )
}

export default AddMentorships