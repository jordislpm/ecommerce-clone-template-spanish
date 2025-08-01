import React from 'react'
import { myStoreInfo } from '../../contants/general';

function FindStore() {
    const { title, address } = myStoreInfo;

    return (
        <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
            <h1 className="text-4xl font-bold text-main mb-6">Encuentra Nuestra Tienda</h1>
            <p className="mb-4 text-lg">
                Visítanos en nuestra ubicación física. Te esperamos en:
            </p>
            <address className="not-italic mb-6 text-gray-700 font-medium">{address}</address>

            <div className="w-full h-[400px] shadow-md rounded-xl overflow-hidden">
                <iframe
                    src={myStoreInfo.mapEmbedUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </main>
    );
}

export default FindStore