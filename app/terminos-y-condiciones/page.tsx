import Head from 'next/head';

export default function TerminosYCondicionesPage() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | Creciendo Digital</title>
        <meta name="description" content="Lee los términos y condiciones de uso de Creciendo Digital. Conoce tus derechos y obligaciones al utilizar nuestro sitio web y servicios digitales." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-[60vh] bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mt-24">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Términos y Condiciones</h1>
          <p className="mb-5">Bienvenido a Creciendo Digital. Al acceder y utilizar nuestro sitio web y servicios, aceptas estos Términos y Condiciones. Te recomendamos leerlos atentamente.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">1. Alcance y Aceptación</h2>
          <p className="mb-4">Estos términos regulan el uso del sitio web y los servicios que ofrecemos (creación de páginas web, soporte y asesoría digital). Si no aceptas estos términos, por favor no utilices el sitio ni nuestros servicios.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">2. Servicios y Cotizaciones</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Las descripciones de servicios en el sitio tienen carácter informativo.</li>
            <li>Las cotizaciones y plazos se confirman por escrito (por ejemplo, WhatsApp) antes de iniciar.</li>
            <li>Los tiempos de entrega pueden variar según la complejidad y la colaboración del cliente.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">3. Propiedad Intelectual</h2>
          <p className="mb-4">El contenido del sitio (textos, imágenes, logotipos, diseño y software) es propiedad de Creciendo Digital o de sus licenciantes y está protegido por normas de propiedad intelectual. No se permite su uso no autorizado.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">4. Uso Aceptable</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>No utilices el sitio para actividades ilícitas o que afecten su seguridad.</li>
            <li>No intentes interferir con el funcionamiento del sitio ni con las cuentas de otros usuarios.</li>
            <li>Podemos limitar o suspender el acceso en caso de incumplimiento.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">5. Enlaces y Proyectos de Terceros</h2>
          <p className="mb-4">El sitio puede incluir enlaces a terceros (por ejemplo, TuBarrio.pe). No somos responsables del contenido o políticas de esos sitios.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">6. Responsabilidad</h2>
          <p className="mb-4">Procuramos que el sitio funcione correctamente, pero no garantizamos disponibilidad continua ni ausencia de errores. No seremos responsables por daños derivados del uso o imposibilidad de uso del sitio.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">7. Modificaciones</h2>
          <p className="mb-4">Podemos actualizar estos términos en cualquier momento. Las modificaciones aplican desde su publicación.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">8. Contacto</h2>
          <p className="mb-4">Para consultas sobre estos términos, escríbenos por WhatsApp al <a className="text-blue-700 dark:text-blue-400 underline" href="https://wa.me/51939914908" target="_blank" rel="noopener noreferrer">+51 939 914 908</a>.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">9. Ley Aplicable</h2>
          <p className="mb-4">Estos términos se rigen por las leyes de Perú. Cualquier disputa se resolverá ante los tribunales de Lima, Perú.</p>

          <p className="mt-10 text-sm text-gray-500">Última actualización: 1 de noviembre de 2025</p>
        </div>
      </div>
    </>
  );
}
