import { useNavigate } from "react-router-dom";
import HeroSection from "../assets/home.webp";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <div className="md:relative">
        <img src={HeroSection} className="min-w-[400px] " />
        <button
          className="fixed md:absolute md:py-2 md:px-4 lg:text-2xl font-semibold bg-[#2a52be] hover:bg-blue-900 text-white md:text-black md:bg-white md:bottom-7 lg:rounded-2xl md:right-10 md:hover:bg-gray-300 rounded-md py-1 px-3 bottom-12 right-2"
          onClick={() => navigate("/form")}
        >
          Get In Touch
        </button>
      </div>
      <div className="px-10 bg-blue-200 pb-24">
        <h1 className="text-2xl font-semibold py-4">
          <span className="text-amber-700 font-bold">Central Gold:</span> Your Trusted Partner in Gold Buying
        </h1>
        <p>
          Central Gold is a premier gold buying company specializing in the
          purchase of gold from individuals and businesses. Our mission is to
          provide a seamless, transparent, and fair process for those looking to
          sell their gold items, including jewelry, coins, bullion, and other
          gold assets. At Central Gold, we prioritize customer satisfaction and
          aim to offer the best value for your gold, backed by a team of
          experienced professionals and industry-leading practices.
        </p>
        <h1>What We Offer:</h1>
        <h2>Fair and Transparent Pricing:</h2>
        <p>
          At Central Gold, we use the latest market rates to ensure you receive
          the most competitive prices for your gold. Our transparent pricing
          model ensures you understand the value of your items, with no hidden
          fees or surprises.
        </p>
        <h2>Expert Valuation:</h2>
        <p>
          Our team of certified experts conducts thorough evaluations of your
          gold items using advanced testing methods and equipment. We assess the
          purity, weight, and overall quality to provide an accurate and fair
          offer.
        </p>
        <h2>Convenient and Secure Transactions:</h2>
        <p>
          We prioritize the safety and convenience of our customers. Our secure
          transaction process includes in-person evaluations at our
          well-equipped locations or through our mail-in service, where your
          items are insured and tracked throughout the process.
        </p>
        <h2>Customer-Centric Service:</h2>
        <p>
          At Central Gold, we value our customers and strive to provide
          exceptional service. Our friendly and knowledgeable staff are here to
          answer any questions you may have, guiding you through the selling
          process with professionalism and care.
        </p>
      </div>
    </main>
  );
}
