import React from 'react';
import { myStoreInfo } from '../../contants/general';
import Image from 'next/image';

function About() {
  const { title, description, about } = myStoreInfo;

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-main mb-6">{title}</h1>

      <section className="mb-10 text-lg leading-relaxed text-gray-700">
        <p>{description}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-main">Nuestra mision</h2>
        <p>{about.mission}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-main">¿Por qué elegirnos?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {about.whyChooseUs.map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-main">Contáctenos y visítenos</h2>
        <address className="not-italic mb-4 text-gray-700">
          {myStoreInfo.address}
          <br />
          Correo:{" "}
          <a href={`mailto:${myStoreInfo.email}`} className="text-secundary underline">
            {myStoreInfo.email}
          </a>
          <br />
          Telefono:{" "}
          <a href={`tel:${myStoreInfo.phone}`} className="text-secundary underline">
            {myStoreInfo.phone}
          </a>
        </address>
        <div className="flex space-x-4">
          {Object.entries(myStoreInfo.socialMedia).map(([key, url]) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Image src={`/${key}.png`} alt={key} width={24} height={24} />
              </a>
            ) : null
          )}
        </div>
      </section>
    </main>
  );
}

export default About;