
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flory - Preserve Your Floral Memories</title>
        <meta name="description" content="Flory offers handcrafted herbariums to preserve your floral memories in glass." />
        <meta property="og:title" content="Flory Herbarium" />
        <meta property="og:description" content="Handcrafted floral memories preserved forever." />
        <meta property="og:image" content="/og-image.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white text-gray-800 font-sans">
        <section
          className="h-screen bg-cover bg-center flex items-center justify-center text-center"
          style={{ backgroundImage: "url('/herbarium-hero.webp')" }}
        >
          <div className="bg-white/80 p-10 rounded-2xl shadow-xl max-w-lg mx-4">
            <h1 className="text-5xl font-bold mb-4">Flory</h1>
            <p className="text-xl mb-6">Preserve your floral memories in glass</p>
            <a href="#gallery" className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              View Collection
            </a>
          </div>
        </section>

        <section className="px-6 py-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">What is a Herbarium?</h2>
          <p className="text-gray-600 text-lg">
            A herbarium is a preserved floral arrangement in glass, capturing the delicate beauty of nature and the memories they represent. Every Flory piece is handcrafted with love and care.
          </p>
        </section>

        <section id="gallery" className="bg-gray-100 px-6 py-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Creations</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white p-4 rounded-lg shadow">
                <img
                  src={`/herbarium${num}.webp`}
                  alt={`Herbarium ${num}`}
                  className="rounded-lg mb-2"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <p className="text-center text-gray-700">Herbarium #{num}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Order & Contact</h2>
          <p className="text-lg mb-2">
            To order, please email us at{' '}
            <a href="mailto:floryherbarium@gmail.com" className="text-green-600 underline">
              floryherbarium@gmail.com
            </a>
          </p>
          <p className="text-lg">
            Or message us on Instagram:{' '}
            <a href="https://instagram.com/floryherbarium" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">
              @floryherbarium
            </a>
          </p>
        </section>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>© {new Date().getFullYear()} Flory. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
