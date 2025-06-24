import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f9fcff] dark:bg-[#1c1c1c] text-[#2b2b2b] dark:text-[#e5e5e5] font-serif p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-6 border-b border-gray-400 dark:border-gray-600">
            <button
              className={`pb-2 text-lg font-medium border-b-2 transition-all duration-300 ${activeTab === 'projects' ? 'border-current' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-current'}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              className={`pb-2 text-lg font-medium border-b-2 transition-all duration-300 ${activeTab === 'about' ? 'border-current' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-current'}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border border-gray-400 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {activeTab === 'projects' && (
          <div className="space-y-10">
            <div>
              <div className="flex flex-col mb-6 space-y-1">
                <img src="./birby_grey.png" alt="Birby" className="w-12 h-12 block dark:hidden" />
                <img src="./birby_yerg.png" alt="Birby" className="w-12 h-12 hidden dark:block" />
                <div className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 font-mono">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">Loopbirb:</span> Loops of Ideas. Flights of Code.
                </div>
              </div>
              <h2 className="text-lg font-semibold font-mono mb-2">
                Entry: 2025.06, OntologyOne
              </h2>
                <p className="text-[1rem] leading-relaxed italic max-w-prose">
                  OntologyOne began as a personal reckoning after a difficult chapter — a period of emotional upheaval that left me searching for clarity, healing, and direction...
                </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="/OntologyOne/letter.html" className="underline text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                    Read the letter
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    A personal reflection on how OntologyOne began.
                  </p>
                </li>

                <li>
                  <a href="https://ontologyone-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                    Launch the app
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Try the latest version of the OntologyOne interface.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
        <div className="mt-8 text-[1.05rem] leading-relaxed space-y-4">
          <p className="mb-6">Hello there, I'm Siew-choo.</p>
          
          <p>
            I enjoy learning, exploring, and building things. My apps may not be revolutionary, but I hope you find them interesting or useful — I certainly had fun creating them.
            OntologyOne grew out of that same spirit: a solo project, built from scratch as a proof of vision.
          </p>
          
          <p>
            I'm based in Singapore, and I work mostly alone — unless you count the chatbot.
            Curious to learn more? You can find me on <a href="https://www.linkedin.com/in/siewchoo-tay" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">LinkedIn</a>.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 pt-4">
            The source code for OntologyOne is private for now — but I'm always happy to talk shop if you're curious.
          </p>
        </div>
        )}
      </div>
    </div>
  );
}
