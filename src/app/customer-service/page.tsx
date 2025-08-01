import React from 'react'
import { myStoreInfo } from "../../contants/general";

function CustomerService() {
    const { customerService } = myStoreInfo;

    if (!customerService) return null;

    return (
        <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
            <h1 className="text-4xl font-bold text-main mb-6">{customerService.title}</h1>
            <p className="mb-8 text-lg">{customerService.intro}</p>

            {customerService.sections.map((section, i) => (
                <section key={i} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-main">{section.heading}</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {section.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
}
export default CustomerService