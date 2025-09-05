import React from 'react'
import { useParams, Link } from 'react-router-dom'
import newsData from './newsData.js'

function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find(item => item.id === parseInt(id));

  if (!news) {
    return <p className="text-center text-red-500">News not found!</p>;
  }

  return (
    <div>
      {/* Header Background */}
      <div
        className="w-full h-96 bg-cover bg-center flex flex-col justify-center items-center text-white p-6"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${news.image})` }}
      >
        {news.smallText && <p className="text-xs">{news.smallText}</p>}
        <h1 className="text-5xl md:text-8xl archivo-black-regular max-w-7xl text-center font-bold mb-2">
          {news.title}
        </h1>
      </div>

      {/* Body Section */}
      <div className="max-w-5xl mt-12 space-y-12 mx-auto p-6 rounded-lg">
        <p className="text-lg">{news.summary}</p>

        {/* If video property exists */}
        {news.video && (
          <div className="space-y-6">
            <iframe
              width="918"
              height="514"
              src={news.video}
              title={news.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
<div className='block space-y-5'>
<h4 className='font-semibold'>Key Insight: Understanding the Momentum of the Club</h4>
<p className="text-gray-600 mb-4 whitespace-pre-line">{news.content}</p>
<p className="text-gray-600 mb-4 whitespace-pre-line">{news.content2}</p>
</div>
          </div>
        )}

        <Link to="/news" className="text-blue-600 hover:underline">
          ← Back to News
        </Link>
      </div>
    </div>
  )
}

export default NewsDetail
