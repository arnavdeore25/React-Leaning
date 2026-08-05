import React from 'react'

function NewsCard({article}) {
  return (
    <div>
        <h2 className="text-xl font-bold mb-2 m-8">{article.title}</h2>
        <h3 className="text-lg text-gray-600 mb-2 m-8 mt-3">{article.description}</h3>
        <p className="text-sm text-gray-500 m-10 mt-3">By {article.author}</p>
    </div>
  )
}

export default NewsCard