export default function CookiesPage() {
  return (
    <div className="min-h-[60vh] bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mt-24">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Política de Cookies</h1>
        <p className="mb-5">En Creciendo Digital utilizamos cookies para mejorar tu experiencia de navegación y analizar el uso de nuestro sitio web.</p>
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">1. ¿Qué son las cookies?</h2>
        <p className="mb-4">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y reconocer tu visita.</p>
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">2. Tipos de cookies que usamos</h2>
        <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
          <li><b>Cookies esenciales:</b> necesarias para el funcionamiento básico del sitio.</li>
          <li><b>Cookies de análisis:</b> nos ayudan a entender cómo los usuarios interactúan con el sitio.</li>
        </ul>
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">3. Gestión de cookies</h2>
        <p className="mb-4">Puedes configurar tu navegador para aceptar o rechazar cookies. Ten en cuenta que deshabilitar algunas puede afectar el funcionamiento del sitio.</p>
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-8 mb-2">4. Cambios en la política</h2>
        <p className="mb-4">Podemos actualizar esta política en cualquier momento. Los cambios serán publicados en esta página.</p>
        <p className="mt-10 text-sm text-gray-500">Última actualización: 5 de junio de 2025</p>
      </div>
    </div>
  );
}
