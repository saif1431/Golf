import React from 'react'
import { Link } from 'react-router-dom'
import newsData from './newsData.js'

function NewsCard() {
  return (
    <div className='py-12 px-4 md:px-20'>
      <h1 className='archivo-black-regular text-center text-4xl'>NEWS</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 mt-12 lg:grid-cols-3 gap-6">
      {newsData.map(news => (
        <Link
          to={`/news/${news.id}`}
          key={news.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img src={news.image} alt={news.title} className="w-full h-86 object-cover" />
          <div className="p-4 text-center">
            <h5 className="text-gray-500">{news.date}</h5>
            <h2 className="text-xl font-bold mb-2">{news.title}</h2>
            <p className="text-gray-600 line-clamp-4">{news.summary}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default NewsCard
