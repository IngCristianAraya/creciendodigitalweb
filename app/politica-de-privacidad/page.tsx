import Head from 'next/head';

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | Creciendo Digital</title>
        <meta name="description" content="Conoce cómo Creciendo Digital protege tu privacidad y gestiona tus datos personales al usar nuestros servicios digitales." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-[60vh] bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mt-24">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Política de Privacidad</h1>
          <p className="mb-5">En Creciendo Digital valoramos y protegemos tu privacidad. Aquí explicamos qué datos tratamos, con qué finalidad y cómo puedes ejercer tus derechos.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">1. Responsable</h2>
          <p className="mb-4">Creciendo Digital es responsable del tratamiento de tus datos personales. Para cualquier consulta, contáctanos por WhatsApp: <a className="text-blue-700 dark:text-blue-400 underline" href="https://wa.me/51939914908" target="_blank" rel="noopener noreferrer">+51 939 914 908</a>.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">2. Datos que Recopilamos</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Datos de contacto que nos proporcionas (nombre, teléfono, correo, mensajes).</li>
            <li>Datos de uso del sitio (IP, dispositivo, páginas visitadas, interacción básica).</li>
            <li>Información técnica y de cookies según tu configuración del navegador.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">3. Finalidades</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Atender consultas y prestar servicios solicitados.</li>
            <li>Gestionar la relación con clientes y el soporte.</li>
            <li>Mejorar el sitio y la experiencia del usuario.</li>
            <li>Cumplir obligaciones legales aplicables.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">4. Bases Legales</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Consentimiento cuando nos contactas o aceptas cookies no esenciales.</li>
            <li>Ejecución de contrato al solicitar y recibir servicios.</li>
            <li>Interés legítimo para seguridad y mejora del sitio.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">5. Conservación</h2>
          <p className="mb-4">Conservamos los datos el tiempo necesario para las finalidades indicadas y/o conforme a plazos legales. Si solicitas la eliminación y no existe obligación legal de conservarlos, los borraremos.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">6. Encargados y Terceros</h2>
          <p className="mb-4">Podemos usar proveedores para alojamiento web, mensajería y análisis. En caso de transferencias internacionales, se realizarán con garantías adecuadas conforme a la normativa aplicable.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">7. Seguridad</h2>
          <p className="mb-4">Aplicamos medidas razonables para proteger los datos contra accesos no autorizados. No obstante, ningún sistema es 100% infalible.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">8. Tus Derechos</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Acceso, rectificación, actualización y eliminación.</li>
            <li>Oposición y limitación del tratamiento, cuando corresponda.</li>
            <li>Portabilidad de datos, cuando sea aplicable.</li>
          </ul>
          <p className="mb-4">Para ejercer tus derechos, contáctanos por WhatsApp en <a className="text-blue-700 dark:text-blue-400 underline" href="https://wa.me/51939914908" target="_blank" rel="noopener noreferrer">+51 939 914 908</a>.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">9. Cambios en esta Política</h2>
          <p className="mb-4">Podemos actualizar esta política y publicaremos la versión vigente en esta página.</p>

          <p className="mt-10 text-sm text-gray-500">Última actualización: 1 de noviembre de 2025</p>
        </div>
      </div>
    </>
  );
}
