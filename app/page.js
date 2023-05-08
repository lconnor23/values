import Link from "next/link"

function Home() {
  return (
    <main className="flex flex-col align-middle bg-lavender text-charcoal p-20 md:h-screen">

      <h1 className="text-3xl font-bold leading-normal text-center py-10 md:text-6xl md:leading-normal">Know Your Values<br />Know Yourself</h1>

      <p className="text-xl pb-8">Personal values are the guiding principles that are most important to us as individuals. They shape our decisions and actions, and they influence how we interact with the world around us. Identifying your own values can be a powerful exercise in self-awareness and self-discovery.</p>

      <p className="text-xl pb-8">Knowing your personal values can be incredibly helpful when it comes to making decisions. When faced with a choice, you can ask yourself whether that choice aligns with your values. If it does, you can feel confident that you're making a decision that's in line with your authentic self. If it doesn't, you may want to consider whether that choice is truly right for you.</p>

      <p className="text-xl pb-8">We believe that living in harmony with your personal values is one of the keys to a fulfilling and happy life. </p>

      <Link className="text-center m-auto text-xl border-2 border-black rounded-xl bg-beige mt-8 py-2 px-5 hover:bg-charcoal hover:text-beige " href={'/values'}><button>Explore Your Values</button></Link>
    </main>
  )
}

export default Home