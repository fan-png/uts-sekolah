import Image from 'next/image';

const DistributedTeamsSection = () => {
  return (
    <section className="py-20 px-16 bg-white flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="md:w-1/2 space-y-4 text-center md:text-left"> {/* Tambahkan text-center pada mobile */}
        <h2 className="text-3xl font-bold text-gray-900">
          Chats for your distributed teams
        </h2>
        <p className="text-gray-700">
          Team combines the immediacy of real-time chat with an email threading model. With Team, you
          can catch up on important conversations while ignoring irrelevant ones.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Learn more →
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/mockup.png" // Update with the correct path to your image
          alt="Team Dashboard Mockup"
          width={600} // Adjust based on your design
          height={400} // Adjust based on your design
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default DistributedTeamsSection;
