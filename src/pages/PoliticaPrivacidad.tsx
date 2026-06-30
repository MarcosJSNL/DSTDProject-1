import LegalLayout from './LegalLayout'
import BrandText from '../components/BrandText'
import { useLanguage } from '../context/LanguageContext'

export default function PoliticaPrivacidad() {
  const { language } = useLanguage()
  const isEn = language === 'en'
  const t = isEn
    ? {
        title: 'Privacy Policy',
        updated: 'Last updated: June 2026',
        sections: [
          { title: '1. Introduction', text: 'DSTD Enterprises ("we", "our" or "the company") is committed to protecting the privacy of users who visit our website. This policy describes how we collect, use and protect the personal information you provide through our contact forms and communication channels.' },
          { title: '2. Information we collect', text: 'We may collect the following information when you complete a form on our website:', list: ['Full name', 'Email address', 'Phone number', 'Location or project address', 'Details about the type of service or product of interest', 'Additional messages you send us'] },
          { title: '3. How we use your information', text: 'We use the information collected exclusively for the following purposes:', list: ['Respond to your inquiries and quote requests', 'Coordinate visits, deliveries or services related to your project', 'Send relevant information about our products and services', 'Improve the user experience on our website'] },
          { title: '4. Sharing information', text: 'We do not sell, rent or share your personal information with third parties for commercial purposes. We only share data when necessary to comply with legal obligations or when you expressly authorize us.' },
          { title: '5. Data security', text: 'We implement reasonable security measures to protect your information against unauthorized access, alteration, disclosure or destruction. However, no data transmission over the internet is completely secure, so we cannot guarantee absolute security.' },
          { title: '6. Your rights', text: 'You have the right to:', list: ['Access the personal information we have about you', 'Request correction of inaccurate data', 'Request deletion of your personal information', 'Object to the use of your data for marketing purposes'], footer: 'To exercise these rights, contact us via email: dstdenterprises@gmail.com.' },
          { title: '7. Use of cookies', text: 'Our website may use technical cookies necessary for its operation. We do not use third-party tracking cookies or for advertising purposes.' },
          { title: '8. Changes to this policy', text: 'We may update this privacy policy occasionally. We recommend reviewing it periodically. Significant changes will be notified on our website.' },
          { title: '9. Contact', text: 'If you have questions about this privacy policy, you can contact us via email dstdenterprises@gmail.com or WhatsApp at 829-367-2491.' },
        ],
      }
    : {
        title: 'Política de Privacidad',
        updated: 'Última actualización: Junio 2026',
        sections: [
          { title: '1. Introducción', text: 'DSTD Enterprises ("nosotros", "nuestro" o "la empresa") se compromete a proteger la privacidad de los usuarios que visitan nuestro sitio web. Esta política describe cómo recopilamos, usamos y protegemos la información personal que nos proporcionas a través de nuestros formularios de contacto y canales de comunicación.' },
          { title: '2. Información que recopilamos', text: 'Podemos recopilar la siguiente información cuando completas un formulario en nuestro sitio web:', list: ['Nombre completo', 'Dirección de correo electrónico', 'Número de teléfono', 'Ubicación o dirección del proyecto', 'Detalles sobre el tipo de servicio o producto de interés', 'Mensajes adicionales que nos envíes'] },
          { title: '3. Cómo usamos tu información', text: 'Utilizamos la información recopilada exclusivamente para los siguientes fines:', list: ['Responder a tus consultas y solicitudes de cotización', 'Coordinar visitas, entregas o servicios relacionados con tu proyecto', 'Enviar información relevante sobre nuestros productos y servicios', 'Mejorar la experiencia de usuario en nuestro sitio web'] },
          { title: '4. Compartir información', text: 'No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales. Solo compartimos datos cuando sea necesario para cumplir con obligaciones legales o cuando tú nos lo autorices expresamente.' },
          { title: '5. Seguridad de los datos', text: 'Implementamos medidas de seguridad razonables para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ninguna transmisión de datos por internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta.' },
          { title: '6. Tus derechos', text: 'Tienes derecho a:', list: ['Acceder a la información personal que tenemos sobre ti', 'Solicitar la corrección de datos inexactos', 'Solicitar la eliminación de tu información personal', 'Oponerte al uso de tus datos para fines de marketing'], footer: 'Para ejercer estos derechos, contáctanos a través de nuestro correo electrónico: dstdenterprises@gmail.com.' },
          { title: '7. Uso de cookies', text: 'Nuestro sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento de terceros ni para fines publicitarios.' },
          { title: '8. Cambios a esta política', text: 'Podemos actualizar esta política de privacidad ocasionalmente. Te recomendamos revisarla periódicamente. Los cambios significativos serán notificados en nuestro sitio web.' },
          { title: '9. Contacto', text: 'Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través del correo electrónico dstdenterprises@gmail.com o por WhatsApp al 829-367-2491.' },
        ],
      }

  return (
    <LegalLayout title={t.title}>
      <p className="text-sm text-graphite/50">{t.updated}</p>
      {t.sections.map((s) => (
        <div key={s.title}>
          <h2 className="text-xl font-medium text-navy">{s.title}</h2>
          <p><BrandText>{s.text}</BrandText></p>
          {s.list && (
            <ul className="list-disc pl-6 mt-2 space-y-1 text-graphite/70">
              {s.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {s.footer && <p className="mt-2"><BrandText>{s.footer}</BrandText></p>}
        </div>
      ))}
    </LegalLayout>
  )
}
