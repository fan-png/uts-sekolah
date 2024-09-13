import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center justify-center text-center">
        <div className="order-1">
          {/* Teks diperbesar */}
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Choose how you want to work</h1>
          <p className="text-base md:text-lg mb-4">
            In Team, you’ve got all the flexibility to work when, where and how
            it’s best for you. You can easily chat, send emails or video clips,
            or hop on a huddle to talk things out live.
          </p>
          <a href="#" className="text-blue-600 font-semibold">
            Learn more →
          </a>
        </div>
        <div className="order-2">
          {/* Gambar lebih kecil */}
          <Image
            src="/images/info1.png"
            alt="Person using a laptop for remote work"
            width={360} // Ukuran gambar diperkecil
            height={240} // Ukuran gambar diperkecil
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center justify-center text-center">
        <div className="order-1 md:order-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Move faster with your Team tools</h1>
          <p className="text-base md:text-lg mb-4">
            With your other work apps connected to Team, you can work faster by
            switching less. And with powerful mobile and desktop apps, you can
            automate your routine tasks.
          </p>
          <a href="#" className="text-blue-600 font-semibold">
            Learn more →
          </a>
        </div>
        <div className="order-2 md:order-1">
          {/* Gambar lebih kecil */}
          <Image
            src="/images/info2.png"
            alt="Person sitting with a laptop and using Team app"
            width={360} // Ukuran gambar diperkecil
            height={240} // Ukuran gambar diperkecil
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center text-center">
        <div className="order-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Chats for your distributed teams</h1>
          <p className="text-base md:text-lg mb-4">
            Team combines the immediacy of real-time chat with an email threading model. With Team, you
            can catch up on important conversations while ignoring irrelevant ones.
          </p>
          <a href="#" className="text-blue-600 font-semibold">
            Learn more →
          </a>
        </div>
        <div className="order-2">
          {/* Gambar lebih kecil */}
          <Image
            src="/images/info3.png"
            alt="Person using a laptop with Team app open"
            width={360} // Ukuran gambar diperkecil
            height={240} // Ukuran gambar diperkecil
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
