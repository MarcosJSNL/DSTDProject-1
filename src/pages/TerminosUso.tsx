import LegalLayout from './LegalLayout'

export default function TerminosUso() {
  return (
    <LegalLayout title="Términos de Uso">
      <p className="text-sm text-graphite/50">Última actualización: Junio 2026</p>

      <div>
        <h2 className="text-xl font-medium text-navy">1. Aceptación de los términos</h2>
        <p>
          Al acceder y utilizar el sitio web de DSTD Enterprises, aceptas cumplir con estos términos de uso. Si no estás de acuerdo con alguna parte de estos términos, te solicitamos que no utilices nuestro sitio.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">2. Uso del sitio web</h2>
        <p>
          Este sitio web tiene como propósito presentar información sobre nuestros servicios, productos y divisiones empresariales. Puedes utilizar el sitio para:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-graphite/70">
          <li>Conocer nuestros servicios y divisiones</li>
          <li>Solicitar información o cotizaciones</li>
          <li>Contactarnos a través de los formularios habilitados</li>
        </ul>
        <p className="mt-2">
          Queda prohibido el uso del sitio para actividades ilegales, fraudulentas o que puedan dañar la integridad de la plataforma.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">3. Propiedad intelectual</h2>
        <p>
          Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos, diseños y código fuente, es propiedad de DSTD Enterprises o de sus respectivos licenciantes. No se permite la reproducción, distribución o modificación del contenido sin autorización previa por escrito.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">4. Información y cotizaciones</h2>
        <p>
          La información presentada en este sitio tiene carácter informativo. Las cotizaciones solicitadas a través del sitio son estimaciones preliminares sujetas a revisión técnica y comercial. Los precios, disponibilidad y condiciones pueden variar sin previo aviso.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">5. Enlaces a terceros</h2>
        <p>
          Nuestro sitio puede contener enlaces a sitios web de terceros (como WhatsApp). DSTD Enterprises no se hace responsable del contenido, políticas de privacidad o prácticas de dichos sitios externos.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">6. Limitación de responsabilidad</h2>
        <p>
          DSTD Enterprises no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio web. El uso del sitio es bajo tu propio riesgo.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">7. Disponibilidad del sitio</h2>
        <p>
          Nos esforzamos por mantener el sitio web disponible en todo momento, pero no garantizamos acceso ininterrumpido. Podemos realizar mantenimiento, actualizaciones o modificaciones sin previo aviso.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">8. Modificaciones de los términos</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor desde su publicación en esta página. Te recomendamos revisar esta sección periódicamente.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">9. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República Dominicana. Cualquier disputa relacionada con el uso de este sitio será sometida a la jurisdicción de los tribunales competentes en La Vega, República Dominicana.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">10. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos, puedes escribirnos a <strong>dstdenterprises@gmail.com</strong> o contactarnos por WhatsApp al <strong>829-367-2491</strong>.
        </p>
      </div>
    </LegalLayout>
  )
}
