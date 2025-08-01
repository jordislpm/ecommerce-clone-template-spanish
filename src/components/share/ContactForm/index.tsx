"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { myStoreInfo } from '../../../contants/general';


type FormDataProps = {
  name: string;
  email: string;
  message: string;
};

type ContactProps = {
  formTitle: string;
};

const ContactForm: React.FC<ContactProps> = ({ formTitle }) => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!myStoreInfo.phone) {
      alert('WhatsApp number not configured.');
      return;
    }

    const nameEncoded = encodeURIComponent(formData.name);
    const messageEncoded = encodeURIComponent(formData.message);
    const emailEncoded = encodeURIComponent(formData.email);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${myStoreInfo.phone}&text=Name%3A%20${nameEncoded}%2C%20Message%3A%20%22${messageEncoded}%22.%20My%20email%20is%3A%20${emailEncoded}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <h2 className="font-semibold text-lg mb-2 text-main">{formTitle}</h2>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-main text-white px-6 py-2 rounded-2xl hover:bg-main/90"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
