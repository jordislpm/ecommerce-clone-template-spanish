
import React from 'react';
import { myStoreInfo } from '../../contants/general';
import Link from 'next/link';
import Image from 'next/image';
import { socialIcons } from '../../contants/socialMedia';
import ContactForm from '../../components/share/ContactForm';

function Contact() {
  const { email, phone, address, socialMedia, contact } = myStoreInfo;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
      <h1 className="text-3xl font-bold mb-6 text-main">{contact.heading}</h1>
      <p className="text-lg text-secundary mb-8">{contact.description}</p>

      <div className="space-y-6 mb-12">
        <div>
          <h2 className="font-semibold text-lg text-main">Email</h2>
          <p className="text-gray-700">{email}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg text-main">Phone</h2>
          <p className="text-gray-700">{phone}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg text-main">Address</h2>
          <p className="text-gray-700">{address}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg text-main">Social Media</h2>
          <div className="flex gap-4 mt-2">
            {socialIcons.map(({ name, icon }) => {
              const url = socialMedia[name];
              return url ? (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={icon} alt={`${name} icon`} width={16} height={16} />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>

      <ContactForm formTitle="Contact Us" />
    </div>
  );
}

export default Contact;