import LoadingDots from "./LoadingDots";


export default function Merch() {
  const products = [
    { name: "T-Shirt", price: "$25" },
    { name: "Hoodie", price: "$45" },
    { name: "Poster", price: "$15" },
  ]

  return (
    <section id="merch" className="min-h-screen bg-gray-100 text-black p-10 scroll-mt-10 flex flex-col items-center">
      <h2 className="text-4xl font-bitcount font-bold mb-10">Merch</h2>
      <div className="flex mt-20">
       <LoadingDots/>
      </div>
    </section>
  )
}