import { useState, useEffect } from 'react'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => console.error('Error:', error))
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product._id} className="border rounded-lg p-4 shadow-md">
          <img 
            src={product.imageUrl} 
            alt={product.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">{product.author}</p>
          <p className="text-lg font-semibold">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
