import React from 'react'

type ComingSoonProps = {
  serviceName?: string;
};

function ComingSoon({ serviceName }: ComingSoonProps) {
return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-center text-gray-700">
      <h1 className="text-3xl font-bold mb-4 text-main">
        {serviceName ? `${serviceName} no está disponible` : "Servicio no disponible"}
      </h1>
      <p className="text-lg">
       This service isn&#39;t available right now, keep enjoying the rest of our store.
      </p>
    </main>
  );
}

export default ComingSoon