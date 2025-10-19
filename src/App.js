import { Checkpage } from './checkpage'
import './App.css';
import { Counter } from './counter';
import index from './index.css'
import Post  from './post.js';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Redux Counter App
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Counter Component</h2>
            <Counter/>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Check Page</h2>
            <Checkpage/>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Post Component</h2>
            <Post/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;