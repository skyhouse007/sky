import React, { useState } from "react";
import projects from "./data/projects";

function SiteVisitForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    projectId: projects[0]?.id || "",
    contactMethod: "phone",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const project = projects.find(p => p.id === formData.projectId);
    const payload = {
      timestamp: new Date().toISOString(),
      projectId: formData.projectId,
      projectName: project ? project.name : '',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      contactMethod: formData.contactMethod,
      notes: formData.notes,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    const webhook = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;

    try {
      if (webhook) {
        const res = await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          mode: 'cors',
          keepalive: true,
        });
        if (!res.ok) throw new Error(`Webhook error: ${res.status}`);
      } else {
        // No webhook configured; log for admin visibility without affecting UX
        console.warn('VITE_ZAPIER_WEBHOOK_URL is not set. Submission stored locally.');
        const key = 'pending_site_visits';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push(payload);
        localStorage.setItem(key, JSON.stringify(existing));
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Could not submit right now. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  if (submitted) {
    const projectName = formData.projectId ? projects.find(p=>p.id===formData.projectId)?.name : '';
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Visit Requested</h2>
        <p className="text-gray-600 mt-2">{projectName ? projectName + ' — ' : ''}{formData.date} at {formData.time}</p>
        <p className="text-gray-500 mt-1 text-sm">We will reach out via {formData.contactMethod} to confirm.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={()=>setSubmitted(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Book Another</button>
          <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Home</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Schedule a Visit</h2>

      <div className="mb-4">
        <label htmlFor="projectId" className="block text-gray-700 text-sm font-bold mb-2">Project</label>
        <select
          id="projectId"
          name="projectId"
          value={formData.projectId}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {projects.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
        <input type="text" name="name" id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input type="tel" name="phone" id="phone" placeholder="123-456-7890" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
        <input type="email" name="email" id="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Preferred Date</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Preferred Time</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            <option value="" disabled>Select</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <span className="block text-gray-700 text-sm font-bold mb-2">Preferred Contact</span>
        <div className="flex items-center gap-4">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactMethod" value="phone" checked={formData.contactMethod === 'phone'} onChange={handleChange} />
            <span>Phone</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactMethod" value="whatsapp" checked={formData.contactMethod === 'whatsapp'} onChange={handleChange} />
            <span>WhatsApp</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactMethod" value="email" checked={formData.contactMethod === 'email'} onChange={handleChange} />
            <span>Email</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Notes</label>
        <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Any specific preferences or questions" />
      </div>

      {error && <p className="text-red-600 text-sm mb-3" role="alert">{error}</p>}
      <button type="submit" disabled={loading} className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 ${loading ? 'bg-blue-300 text-white cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>{loading ? 'Submitting...' : 'Book Now'}</button>
    </form>
  );
}

export default SiteVisitForm;
