import React from 'react'

const Preview = ({ thumbnail }) => (
  <div className="w-full flex items-center justify-center mt-4">
    {thumbnail ? (
      <img src={thumbnail} alt="preview" className="w-40 h-40 object-contain border rounded" />
    ) : (
      <p>No preview available</p>
    )}
  </div>
);

export default Preview