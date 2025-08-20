import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert('Thank you for your consultation request! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">Request a Free Consultation</h2>
          <p className="text-amber-500 mt-3 text-lg">Let's Build the Future of Your Brand Together</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="lg:w-1/2 bg-gray-900/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Request a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-gray-400 mb-2 block">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all" required />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-400 mb-2 block">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all" required />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-400 mb-2 block">Tell us about your project (optional)</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-600/40">
                Request Consultation
              </button>
            </form>
          </div>
          {/* Info & Map */}
          <div className="lg:w-1/2">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">Contact Information</h3>
              <div className="space-y-4 text-gray-300 text-lg">
                <p><strong>Phone:</strong> <a href="tel:9381912308" className="hover:text-amber-500 transition-colors">9381912308</a></p>
                <p><strong>Address:</strong> 1444, Madhapur, Hyderabad</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-80 border border-gray-700 shadow-2xl shadow-black/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.92211463177!2d78.38575087799298!3d17.436997455823075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158350d4b85%3A0x448d68962615951d!2sMadhapur%2C%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1689793150241!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vaurion Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;