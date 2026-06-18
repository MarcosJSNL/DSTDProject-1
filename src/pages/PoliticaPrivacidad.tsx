import LegalLayout from './LegalLayout'

export default function PoliticaPrivacidad() {
  return (
    <LegalLayout title="Política de Privacidad">
      <p className="text-sm text-graphite/50">Última actualización: Junio 2026</p>

      <div>
        <h2 className="text-xl font-medium text-navy">1. Introducción</h2>
        <p>
          DSTD Enterprises (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la empresa&quot;) se compromete a proteger la privacidad de los usuarios que visitan nuestro sitio web. Esta política describe cómo recopilamos, usamos y protegemos la información personal que nos proporcionas a través de nuestros formularios de contacto y canales de comunicación.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">2. Información que recopilamos</h2>
        <p>Podemos recopilar la siguiente información cuando completas un formulario en nuestro sitio web:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-graphite/70">
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Ubicación o dirección del proyecto</li>
          <li>Detalles sobre el tipo de servicio o producto de interés</li>
          <li>Mensajes adicionales que nos envíes</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">3. Cómo usamos tu información</h2>
        <p>Utilizamos la información recopilada exclusivamente para los siguientes fines:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-graphite/70">
          <li>Responder a tus consultas y solicitudes de cotización</li>
          <li>Coordinar visitas, entregas o servicios relacionados con tu proyecto</li>
          <li>Enviar información relevante sobre nuestros productos y servicios</li>
          <li>Mejorar la experiencia de usuario en nuestro sitio web</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">4. Compartir información</h2>
        <p>
          No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales. Solo compartimos datos cuando sea necesario para cumplir con obligaciones legales o cuando tú nos lo autorices expresamente.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">5. Seguridad de los datos</h2>
        <p>
          Implementamos medidas de seguridad razonables para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ninguna transmisión de datos por internet es completamente segura, por lo que no podemos garantizar la seguridad absoluta.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">6. Tus derechos</h2>
        <p>Tienes derecho a:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-graphite/70">
          <li>Acceder a la información personal que tenemos sobre ti</li>
          <li>Solicitar la corrección de datos inexactos</li>
          <li>Solicitar la eliminación de tu información personal</li>
          <li>Oponerte al uso de tus datos para fines de marketing</li>
        </ul>
        <p className="mt-2">
          Para ejercer estos derechos, contáctanos a través de nuestro correo electrónico: <strong>dstdenterprises@gmail.com</strong>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">7. Uso de cookies</h2>
        <p>
          Nuestro sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento de terceros ni para fines publicitarios.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">8. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política de privacidad ocasionalmente. Te recomendamos revisarla periódicamente. Los cambios significativos serán notificados en nuestro sitio web.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-navy">9. Contacto</h2>
        <p>
          Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través del correo electrónico <strong>dstdenterprises@gmail.com</strong> o por WhatsApp al <strong>829-367-2491</strong>.
        </p>
      </div>
    </LegalLayout>
  )
}
