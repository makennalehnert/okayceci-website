

export default function Merch() {
  const products = [
    { name: "T-Shirt", price: "$25" },
    { name: "Hoodie", price: "$45" },
    { name: "Poster", price: "$15" },
  ]

  return (
    <section id="merch" className="min-h-screen bg-gray-100 text-black p-10 scroll-mt-10 flex flex-col items-center">
      <h2 className="text-4xl font-bitcount font-bold mb-10">Merch</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">{item.name}</h3>
            <p className="mb-4">{item.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Buy
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}