import { MyStoreInfoType, SlideType } from "../types";


const baseInfo = {
  title: "Oli Store",
  email: "info@olistore.com",
  phone: "+1 829 268 2437",

};

export const myStoreInfo: MyStoreInfoType = {
  ...baseInfo,
  plan: "simple-whatsapp",
  title: baseInfo.title,
  description:
    "Encuentra la mejor ropa para niños con estilo, comodidad y calidad. Ropa para bebés y niños de hasta 12 años, con diseños modernos, divertidos y duraderos.",

  about: {
    mission:
      "En Oli Store, nuestra misión es vestir a los niños con estilo, comodidad y calidad. Creemos que cada niño merece usar ropa que le inspire confianza y alegría, hecha con materiales duraderos que los padres puedan confiar.",
    whyChooseUs: [
      "Amplia variedad de ropa moderna, divertida y duradera para niños desde recién nacidos hasta los 12 años.",
      "Precios competitivos sin comprometer la calidad.",
      "Atención al cliente enfocada en ayudarte a elegir el atuendo perfecto.",
      "Presencia local en Las Terrenas, Samaná — apoyando a la comunidad y las familias.",
    ],
  },

  contact: {
    heading: "Contáctanos",
    description:
      "Gracias por confiar en nosotros. ¡Estamos aquí para ayudarte! Escríbenos por correo, llámanos o visítanos en Las Terrenas.",
  },

  address:
    "Calle El Carmen, Local de Nancy la decoradora, Frente a Pica Pollo Charlie, Las Terrenas, Samaná, R.D.",
  email: baseInfo.email,
  phone: baseInfo.phone,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10805.526708238944!2d-69.55976984248882!3d19.314294922964134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaefa6e2bf3943b%3A0x685699a589f54921!2sNtra.%20Sra.%20del%20Carmen%20Street%2095%2C%20Las%20Terrenas%2032000%2C%20Dominican%20Republic!5e1!3m2!1sen!2sca!4v1753910889593!5m2!1sen!2sca",
  socialMedia: {
    facebook: "https://www.facebook.com/share/1HnMGwucYP",
    instagram: "https://www.instagram.com/tu_oli_store",
    youtube: null,
    pinterest: null,
    x: null,
  },
  legal: {
  title: "Legal y Privacidad",
  intro:
    "En Oli Store, valoramos tu privacidad y estamos comprometidos con la transparencia y la seguridad de tus datos. Esta página explica cómo usamos tu información, nuestros términos de uso y tus derechos como cliente.",

  privacyPolicy: {
    heading: "Política de Privacidad",
    content: [
      "Recopilamos información personal como nombre, correo electrónico y dirección de envío para procesar pedidos y mejorar tu experiencia.",
      "Usamos proveedores externos como Stripe, PayPal, y Google Analytics, quienes pueden procesar tus datos bajo sus propias políticas.",
      "Nunca vendemos tu información personal. Solo la compartimos con terceros necesarios para ofrecer nuestros servicios.",
      "Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados.",
    ],
  },

  termsOfService: {
    heading: "Términos y Condiciones",
    content: [
      "Al usar nuestro sitio, aceptas cumplir con nuestros términos. Nos reservamos el derecho de modificar estos términos en cualquier momento.",
      "No garantizamos disponibilidad continua del sitio o de los productos. Podemos limitar o cancelar pedidos según disponibilidad.",
      "Al realizar una compra, aceptas proporcionar información verdadera y actualizada.",
      "El uso del sitio por menores de edad debe estar supervisado por un adulto responsable.",
    ],
  },

  cookies: {
    heading: "Política de Cookies",
    content: [
      "Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y ofrecer publicidad personalizada.",
      "Puedes gestionar tus preferencias de cookies desde la configuración de tu navegador.",
    ],
  },

  returns: {
    heading: "Política de Devoluciones",
    content: [
      "Aceptamos devoluciones dentro de la primera semana luego de recibir el producto.",
      "El producto debe estar sin uso y en su empaque original. El cliente es responsable de los costos de envío de devolución.",
    ],
  },
},
customerService: {
  title: "Atención al Cliente",
  intro:
    "Tu satisfacción es nuestra prioridad. Estamos aquí para ayudarte en cada paso del camino. Si tienes preguntas, inquietudes o necesitas asistencia, no dudes en contactarnos.",

  sections: [
    {
      heading: "¿Cómo contactarnos?",
      content: [
        "Puedes escribirnos al correo electrónico o llamarnos directamente. También puedes visitarnos en nuestra tienda física durante el horario laboral.",
        `Correo: ${baseInfo.email}`,
        `Teléfono: ${baseInfo.phone}`,
      ],
    },
    {
      heading: "Envíos y entregas",
      content: [
        "Realizamos envíos locales e internacionales.",
        "El tiempo de entrega puede variar entre 3 a 7 días hábiles dependiendo de la ubicación.",
        "Una vez enviado el pedido, recibirás un número de seguimiento.",
      ],
    },
    {
      heading: "Devoluciones y reembolsos",
      content: [
        "Aceptamos devoluciones dentro de la primera semana posterior a la recepción del producto.",
        "El producto debe estar sin uso, en su empaque original.",
        "Los costos de envío para devoluciones corren por cuenta del cliente.",
      ],
    },
    {
      heading: "Horario de atención",
      content: [
        "Lunes a Viernes: 9:00 AM – 6:00 PM",
        "Sábados: 9:00 AM – 1:00 PM",
        "Domingos y feriados: Cerrado",
      ],
    },
  ],
},


};









export const slidesData: SlideType[] = [
  {
    id: 1,
    title: "Diversión de verano para niños",
    description: "¡Ropa fresca con hasta 50% de descuento! ☀️👕🩳",
    img: "https://images.pexels.com/photos/32859436/pexels-photo-32859436.jpeg",
    url: "/list?cat=summer",
    bg: "bg-gradient-to-r from-yellow-100 to-pink-100",
  },
  {
    id: 2,
    title: "Calidez y confort para el invierno",
    description: "¡Abrígate! Ahorra hasta 50% en estilos de invierno ❄️🧤🧣",
    img: "https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/list?cat=winter",
    bg: "bg-gradient-to-r from-blue-100 to-purple-100",
  },
  {
    id: 3,
    title: "Looks frescos de primavera",
    description: "¡Novedades floreciendo! 🌸 Hasta 50% de descuento",
    img: "https://images.pexels.com/photos/7850510/pexels-photo-7850510.jpeg",
    url: "/list?cat=spring",
    bg: "bg-gradient-to-r from-green-100 to-pink-100",
  },
];
