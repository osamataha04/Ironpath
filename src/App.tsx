import { useState } from 'react';
import Calculator from './components/Calculator';
import TrainingPlan from './components/TrainingPlan';
import Stages from './components/Stages';
import Nutrition from './components/Nutrition';
import UserProfilePage from './components/UserProfile';
import ProgressTracker from './components/ProgressTracker';
import EgyptianFood from './components/EgyptianFood';
import DeployGuide from './components/DeployGuide';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { UserProfile } from './types';

type Tab = 'profile' | 'calculator' | 'training' | 'stages' | 'progress' | 'nutrition' | 'food' | 'deploy';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('calculator');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profile] = useLocalStorage<UserProfile | null>('ironpath_profile', null);

  const tabs: { id: Tab; label: string; labelAr?: string; icon: string }[] = [
    { id: 'profile', label: 'Profile', labelAr: 'حسابي', icon: '👤' },
    { id: 'calculator', label: 'Calculator', labelAr: 'الحاسبة', icon: '🧮' },
    { id: 'training', label: 'Training', labelAr: 'التمرين', icon: '🏋️' },
    { id: 'stages', label: 'Stages', labelAr: 'المراحل', icon: '📈' },
    { id: 'progress', label: 'Progress', labelAr: 'تقدمي', icon: '📊' },
    { id: 'nutrition', label: 'Recovery', labelAr: 'التعافي', icon: '🍽️' },
    { id: 'food', label: 'Egyptian Food', labelAr: 'الأكل المصري', icon: '🇪🇬' },
    { id: 'deploy', label: 'Deploy', labelAr: 'النشر', icon: '🚀' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💪</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IronPath
            </h1>
            {profile && (
              <span className="hidden sm:inline text-gray-500 text-sm mr-2">
                • {profile.name}
              </span>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-800 px-4 py-2 max-h-[70vh] overflow-y-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${
                  activeTab === tab.id
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <div className="text-right">
                  <div>{tab.label}</div>
                  {tab.labelAr && <div className="text-xs text-gray-500">{tab.labelAr}</div>}
                </div>
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 md:py-10">
        {activeTab === 'profile' && <UserProfilePage onComplete={() => setActiveTab('calculator')} />}
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'training' && <TrainingPlan />}
        {activeTab === 'stages' && <Stages />}
        {activeTab === 'progress' && <ProgressTracker />}
        {activeTab === 'nutrition' && <Nutrition />}
        {activeTab === 'food' && <EgyptianFood />}
        {activeTab === 'deploy' && <DeployGuide />}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 z-50">
        <div className="flex justify-around py-2">
          {tabs.slice(0, 4).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all ${
                activeTab === tab.id ? 'text-blue-400' : 'text-gray-500'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-[10px]">{tab.label}</span>
            </button>
          ))}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-gray-500"
          >
            <span className="text-lg">⋯</span>
            <span className="text-[10px]">More</span>
          </button>
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-4 mb-16 lg:mb-0">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            IronPath — Your guide from first day to confident barbell lifter
          </p>
          <p className="text-gray-600 text-xs mt-2">
            This is general training guidance, not medical advice. Consult a professional for medical conditions.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Data is saved locally on your device. Clear browser data to reset.
          </p>
        </div>
      </footer>
    </div>
  );
}
