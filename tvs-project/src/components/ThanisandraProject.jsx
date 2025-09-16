// src/components/ThanisandraProject.jsx
import React from 'react';
import Slider from 'react-slick';
import SiteVisitForm from '../SiteVisitForm';
import 'slick-carousel/slick/slick.css';

function ThanisandraProject() {
  const amenities = [
    'Basketball Court',
    'Jogging Track',
    'Billiards Table',
    'Swimming Pools',
    'GYMNASIUM',
    'Tennis Court',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593696140826-c58b02198d47?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderImages = [
    'https://images.unsplash.com/photo-1600585154154-1e1f4d6f9ff8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <div className="font-sans bg-gray-50">
      <section>
        <Slider {...sliderSettings}>
          {sliderImages.map((img, index) => (
            <div key={index}>
              <div
                className="bg-cover bg-center h-96 text-white flex items-center"
                style={{ backgroundImage: `url('${img}')` }}
              >
                <div className="container mx-auto px-6 text-center bg-black bg-opacity-50 p-6 rounded-lg">
                  <h2 className="text-4xl font-bold mb-2">TVS Emerald Thanisandra</h2>
                  <p className="text-xl">At Thanisandra, North Bangalore</p>
                  <p className="text-2xl font-bold mt-4">₹ 1.32 Cr* Onwards</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <main className="container mx-auto px-6 py-12">
        <section id="eoi" className="mb-12 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2">Pre-Launch: Expression of Interest (EOI) is Now Open!</h3>
          <p className="text-lg">
            Secure your price benefits by participating in our exclusive pre-launch phase. Submit a non-bankable cheque to register your interest and be among the first to avail special offers. This is a limited-time opportunity to get the best value on your investment.
          </p>
        </section>

        <section id="about" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Overview</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-700 mb-2">TVS Emerald Thanisandra</h4>
              <p className="text-gray-600 mb-4">
                TVS Emerald Thanisandra is an upcoming residential project in North Bangalore, developed by the trusted TVS Emerald, part of the century-strong TVS Group. Spread across 3.71 acres, this premium development comprises 6 blocks with B+G+12 floors, offering 393 thoughtfully designed apartments. Every unit is 100% Vastu-compliant, with North, East, or West-facing entrances, ensuring a harmonious living experience. With over 40 luxury amenities, the project is tailored for modern families seeking comfort and connectivity. Located in Thanisandra, it offers excellent access to Manyata Tech Park, Outer Ring Road, and the upcoming metro station. Surrounded by top schools, hospitals, and malls, TVS Emerald Thanisandra presents a perfect blend of lifestyle, location, and legacy.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Project Highlights</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Total Area:</strong> 3.71 Acres</li>
                <li><strong>Towers:</strong> 6 Iconic Towers (A, B, C, D, E, F)</li>
                <li><strong>Units:</strong> 390 Exquisite Units with 100% Vastu</li>
                <li><strong>Structure:</strong> 1B+G+12 Floors</li>
                <li><strong>Guest Parking:</strong> 50+</li>
                <li><strong>Apartments per Floor:</strong> 4 & 6</li>
                <li><strong>Expected ROI:</strong> 15% – 16% Appreciation</li>
                <li><strong>Proximity:</strong> Close to IT Hubs & Industrial Zones</li>
                <li><strong>Token Amount:</strong> ₹5 Lakh (Non-Refundable)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="price" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Price</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Type</th>
                  <th className="py-3 px-6 text-left">Saleable Area</th>
                  <th className="py-3 px-6 text-left">Price</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-4 px-6">2 BHK</td>
                  <td className="py-4 px-6">1100-1200 Sq.Ft.</td>
                  <td className="py-4 px-6 font-bold">₹ 1.32 Cr* Onwards</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">3 BHK (2 Toilets)</td>
                  <td className="py-4 px-6">1400-1600 Sq.Ft.</td>
                  <td className="py-4 px-6 font-bold">₹ 1.79 Cr* Onwards</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">3 BHK (3 Toilets)</td>
                  <td className="py-4 px-6">1800-1880 Sq.Ft.</td>
                  <td className="py-4 px-6 font-bold">₹ 2.00 Cr* Onwards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="site-plan" className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Site & Floor Plan</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">View Master Plan</button>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">2 BHK Unit Plan</button>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">3 BHK Unit Plan</button>
            <a
              href="/Thanisandra%20-%20VP%20deck.pdf"
              download
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Download Brochure
            </a>
          </div>
        </section>

        <section id="amenities" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="emi-plan" className="mb-12 bg-blue-50 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Special EMI Plan for Salaried Employees</h3>
          <p className="text-gray-600 text-lg mb-2">
            Own your dream home with our exclusive offer!
          </p>
          <div className="flex justify-center items-center space-x-8 my-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">10%</p>
              <p className="text-gray-700">Upfront Payment</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">0.1%</p>
              <p className="text-gray-700">EMI Until Possession</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            *Terms and conditions apply. Offer valid for a limited period.
          </p>
        </section>

        <section id="gallery" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Location</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full h-96">
              <iframe
                title="project-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31084.61991239578!2d77.61929219999999!3d13.08434485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae197126583563%3A0x566fd4e925734143!2sThanisandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678886393080!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Connectivity</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Thanisandra Main Road:</strong> 500 m</li>
                <li><strong>Outer Ring Road:</strong> 3 km</li>
                <li><strong>Manyata Tech Park:</strong> 4.5 km</li>
                <li><strong>Yelahanka Railway Station:</strong> 9 km</li>
                <li><strong>Kempegowda International Airport:</strong> 26 km (40 mins)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="virtual-tour" className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Virtual Site Tour</h3>
          <div className="relative h-96 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-500">Virtual Tour Coming Soon</p>
          </div>
        </section>

        <section id="developer" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">About the Developer</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
            TVS Emerald is a trusted name in Indian real estate, backed by the prestigious TVS Group with over a century of excellence in business. Known for its commitment to quality, timely delivery, and innovative design, TVS Emerald builds homes that blend comfort, sustainability, and modern aesthetics. With successful projects in Chennai and Bangalore, TVS Emerald has earned a reputation for creating well-planned residential communities featuring world-class amenities. Their focus on customer satisfaction and eco-friendly practices ensures homes that meet both present and future needs.
          </p>
        </section>

        <section id="investment" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Invest in TVS Emerald, Thanisandra Road?</h3>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto text-center mb-8">
            TVS Emerald, located near Manyata Tech Park and major IT hubs, offers one of the most promising investment opportunities in North Bengaluru. With flexible payment plans and strong growth potential, this project ensures high returns for both investors and end-users.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">1. Capital Appreciation – High Returns on Low Investment</h4>
              <p className="text-gray-600 mb-4">
                With the DEMI Plan, you invest only a fraction of the total cost upfront: Pay just 0.1% as EMI for 3 years until possession and only 10% of the property value at launch.
              </p>
              <p className="text-gray-600">
                For example, booking a 2BHK at ₹1.4 Cr could yield a net profit of around ₹50 lakhs in 3 years, simply by reselling at the right time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">2. Rental Income – Consistent Monthly Returns</h4>
              <p className="text-gray-600 mb-4">
                North Bengaluru’s rental market is one of the strongest in the city, driven by the huge workforce at Manyata Tech Park.
              </p>
              <p className="text-gray-600">
                Expect a projected rental income of ₹50,000 – ₹55,000 per month post-possession, making it ideal for steady passive income.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">3. Self-Use – Perfect Lifestyle Choice</h4>
              <p className="text-gray-600 mb-4">
                Beyond investment, TVS Emerald is designed for comfortable living, located next to Manyata Tech Park and surrounded by a vibrant community of professionals.
              </p>
              <p className="text-gray-600">
                Enjoy easy access to workplaces, schools, healthcare, and entertainment hubs.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-12 rounded-lg">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your Site Visit</h3>
            <div className="flex justify-center">
              <SiteVisitForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ThanisandraProject;
