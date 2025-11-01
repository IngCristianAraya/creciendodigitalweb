import Head from 'next/head';

export default function CookiesPage() {
  return (
    <>
      <Head>
        <title>Política de Cookies | Creciendo Digital</title>
        <meta name="description" content="Lee la política de cookies de Creciendo Digital: qué son, cómo las usamos y cómo puedes gestionarlas en nuestro sitio web." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-[60vh] bg-gray-50 dark:bg-gray-900 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mt-24">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Política de Cookies</h1>
          <p className="mb-5">Usamos cookies para que el sitio funcione correctamente, mejorar la experiencia y comprender el uso del contenido.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">1. ¿Qué son las cookies?</h2>
          <p className="mb-4">Son pequeños archivos que se almacenan en tu dispositivo al navegar por sitios web. Permiten, por ejemplo, recordar preferencias o mantener una sesión iniciada.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">2. Qué tipos usamos</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li><span className="font-semibold">Esenciales:</span> necesarias para funciones básicas y seguridad.</li>
            <li><span className="font-semibold">Preferencias:</span> recuerdan opciones como idioma o modo oscuro.</li>
            <li><span className="font-semibold">Analíticas:</span> ayudan a entender el rendimiento y la interacción con el sitio.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">3. Gestión de cookies</h2>
          <p className="mb-4">Puedes controlar o bloquear cookies desde la configuración de tu navegador. Ten en cuenta que desactivar cookies esenciales puede afectar el funcionamiento del sitio.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">4. Cookies de terceros</h2>
          <p className="mb-4">Podemos usar servicios de terceros (por ejemplo, analítica o mensajería) que establezcan sus propias cookies. Te recomendamos revisar sus políticas específicas.</p>

          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">5. Actualizaciones</h2>
          <p className="mb-4">Podemos actualizar esta política. Publicaremos la versión vigente en esta página.</p>

          <p className="mt-10 text-sm text-gray-500">Última actualización: 1 de noviembre de 2025</p>
        </div>
      </div>
    </>
  );
}
