export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="max-w-2xl text-center space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">
                    🚗 EkriMenDarek
                </h1>

                <p className="text-xl text-gray-600">
                    Frontend initialisé - Structure de base prête !
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 text-left">
                    <h2 className="text-lg font-semibold mb-3 text-gray-800">
                        ✅ Projet Next.js 14 configuré
                    </h2>
                    <ul className="space-y-2 text-gray-600">
                        <li>✓ App Router activé</li>
                        <li>✓ TypeScript en mode strict</li>
                        <li>✓ TailwindCSS configuré</li>
                        <li>✓ ESLint activé</li>
                        <li>✓ Structure de dossiers créée</li>
                    </ul>
                </div>

                <p className="text-sm text-gray-500">
                    Prochaine étape : Installation des dépendances et développement des composants
                </p>
            </div>
        </main>
    )
}
