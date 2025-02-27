import { useEffect } from 'react';
import './App.css'

function App() {
    return (
        <main className='p-4'>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows="20" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Job description" required ></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
                        <button type="submit" className="btn preset-filled-primary-500">
                           Generate 
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default App
