

export default function Art() {
  const pieces = [
    { name: "Painting 1", price: "$125" },
    { name: "Print 1", price: "$15" },
    { name: "Print 2", price: "$15" },
  ]

  return (
    <section id="art" className="min-h-screen bg-purple-500 text-white p-10 scroll-mt-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Art</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {pieces.map((piece) => (
          <div key={piece.name} className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">{piece.name}</h3>
            <p className="mb-4">{piece.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Buy
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}