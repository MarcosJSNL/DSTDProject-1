import LegalLayout from './LegalLayout'
import BrandText from '../components/BrandText'
import { useLanguage } from '../context/LanguageContext'

export default function TerminosUso() {
  const { language } = useLanguage()
  const isEn = language === 'en'
  const t = isEn
    ? {
        title: 'Terms of Use',
        updated: 'Last updated: June 2026',
        sections: [
          { title: '1. Acceptance of terms', text: 'By accessing and using the DSTD Enterprises website, you agree to comply with these terms of use. If you do not agree with any part of these terms, we ask that you do not use our site.' },
          { title: '2. Use of the website', text: 'This website is intended to present information about our services, products and business divisions. You may use the site to:', list: ['Learn about our services and divisions', 'Request information or quotes', 'Contact us through the enabled forms'], footer: 'The use of the site for illegal, fraudulent activities or that may damage the integrity of the platform is prohibited.' },
          { title: '3. Intellectual property', text: 'All content on this website, including texts, images, logos, designs and source code, is the property of DSTD Enterprises or its respective licensors. Reproduction, distribution or modification of the content is not allowed without prior written authorization.' },
          { title: '4. Information and quotes', text: 'The information presented on this site is for informational purposes. Quotes requested through the site are preliminary estimates subject to technical and commercial review. Prices, availability and conditions may change without notice.' },
          { title: '5. Third-party links', text: 'Our site may contain links to third-party websites (such as WhatsApp). DSTD Enterprises is not responsible for the content, privacy policies or practices of such external sites.' },
          { title: '6. Limitation of liability', text: 'DSTD Enterprises will not be liable for direct, indirect, incidental or consequential damages resulting from the use or inability to use this website. Use of the site is at your own risk.' },
          { title: '7. Site availability', text: 'We strive to keep the website available at all times, but we do not guarantee uninterrupted access. We may perform maintenance, updates or modifications without prior notice.' },
          { title: '8. Changes to the terms', text: 'We reserve the right to modify these terms at any time. Changes will take effect from their publication on this page. We recommend reviewing this section periodically.' },
          { title: '9. Applicable law', text: 'These terms are governed by the laws of the Dominican Republic. Any dispute related to the use of this site will be submitted to the jurisdiction of the competent courts in La Vega, Dominican Republic.' },
          { title: '10. Contact', text: 'For any questions about these terms, you can write to us at dstdenterprises@gmail.com or contact us by WhatsApp at 829-367-2491.' },
        ],
      }
    : {
        title: 'Términos de Uso',
        updated: 'Última actualización: Junio 2026',
        sections: [
          { title: '1. Aceptación de los términos', text: 'Al acceder y utilizar el sitio web de DSTD Enterprises, aceptas cumplir con estos términos de uso. Si no estás de acuerdo con alguna parte de estos términos, te solicitamos que no utilices nuestro sitio.' },
          { title: '2. Uso del sitio web', text: 'Este sitio web tiene como propósito presentar información sobre nuestros servicios, productos y divisiones empresariales. Puedes utilizar el sitio para:', list: ['Conocer nuestros servicios y divisiones', 'Solicitar información o cotizaciones', 'Contactarnos a través de los formularios habilitados'], footer: 'Queda prohibido el uso del sitio para actividades ilegales, fraudulentas o que puedan dañar la integridad de la plataforma.' },
          { title: '3. Propiedad intelectual', text: 'Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos, diseños y código fuente, es propiedad de DSTD Enterprises o de sus respectivos licenciantes. No se permite la reproducción, distribución o modificación del contenido sin autorización previa por escrito.' },
          { title: '4. Información y cotizaciones', text: 'La información presentada en este sitio tiene carácter informativo. Las cotizaciones solicitadas a través del sitio son estimaciones preliminares sujetas a revisión técnica y comercial. Los precios, disponibilidad y condiciones pueden variar sin previo aviso.' },
          { title: '5. Enlaces a terceros', text: 'Nuestro sitio puede contener enlaces a sitios web de terceros (como WhatsApp). DSTD Enterprises no se hace responsable del contenido, políticas de privacidad o prácticas de dichos sitios externos.' },
          { title: '6. Limitación de responsabilidad', text: 'DSTD Enterprises no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio web. El uso del sitio es bajo tu propio riesgo.' },
          { title: '7. Disponibilidad del sitio', text: 'Nos esforzamos por mantener el sitio web disponible en todo momento, pero no garantizamos acceso ininterrumpido. Podemos realizar mantenimiento, actualizaciones o modificaciones sin previo aviso.' },
          { title: '8. Modificaciones de los términos', text: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor desde su publicación en esta página. Te recomendamos revisar esta sección periódicamente.' },
          { title: '9. Ley aplicable', text: 'Estos términos se rigen por las leyes de la República Dominicana. Cualquier disputa relacionada con el uso de este sitio será sometida a la jurisdicción de los tribunales competentes en La Vega, República Dominicana.' },
          { title: '10. Contacto', text: 'Para cualquier consulta sobre estos términos, puedes escribirnos a dstdenterprises@gmail.com o contactarnos por WhatsApp al 829-367-2491.' },
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
