import LoadingDots from "./LoadingDots"

export default function Art() {
  const pieces = [
    { name: "Painting 1", price: "$125" },
    { name: "Print 1", price: "$15" },
    { name: "Print 2", price: "$15" },
  ]

  return (
    <section id="merch" className="min-h-screen bg-pink-300 text-white p-10 scroll-mt-10 flex flex-col items-center">
      <h2 className="text-4xl font-bitcount font-bold mb-10">Art</h2>
      <div className="flex mt-20">
       <LoadingDots/>
      </div>
    </section>
  )
}