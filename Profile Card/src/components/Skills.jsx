import React from 'react'

function Skills() {
  
    const skills = ["Sql", "Python", "C++", "JavaScript", "Tailwind"];
    return (
    <div className='flex flex-wrap justify-center gap-3 mt-6'>
        {skills.map(function(skill) {
            return <p key={skill} className='bg-blue-100 text-bluw-700 px-3 py-1 rounded-full font-medium'>{skill}</p>
        })}
    </div>
  )
}

export default Skills