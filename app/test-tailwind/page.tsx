export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-600 mb-8">
          Tailwind CSS Test Page
        </h1>
        
        {/* Test Colors */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Color Test</h2>
          <div className="grid grid-cols-5 gap-2">
            <div className="h-20 bg-primary-500 rounded"></div>
            <div className="h-20 bg-secondary-500 rounded"></div>
            <div className="h-20 bg-red-500 rounded"></div>
            <div className="h-20 bg-green-500 rounded"></div>
            <div className="h-20 bg-blue-500 rounded"></div>
          </div>
        </div>

        {/* Test Spacing */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spacing & Layout Test</h2>
          <div className="flex gap-4">
            <div className="w-1/3 h-24 bg-primary-100"></div>
            <div className="w-1/3 h-24 bg-primary-200"></div>
            <div className="w-1/3 h-24 bg-primary-300"></div>
          </div>
        </div>

        {/* Test Typography */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Typography Test</h2>
          <p className="text-sm text-gray-600 mb-2">Small text</p>
          <p className="text-base text-gray-700 mb-2">Base text</p>
          <p className="text-lg text-gray-800 mb-2">Large text</p>
          <p className="text-xl font-bold text-gray-900">Extra large bold text</p>
        </div>

        {/* Test Gradient */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gradient Test</h2>
          <div className="h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg"></div>
          <p className="mt-4 gradient-text text-3xl font-bold">Gradient Text</p>
        </div>

        {/* Test Responsive */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsive Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-20 bg-secondary-200 rounded"></div>
            <div className="h-20 bg-secondary-300 rounded"></div>
            <div className="h-20 bg-secondary-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
