import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { UserProfile } from '../types';

export default function UserProfilePage({ onComplete }: { onComplete: () => void }) {
  const [profile, setProfile] = useLocalStorage<UserProfile | null>('ironpath_profile', null);
  const [form, setForm] = useState<Partial<UserProfile>>(profile || {
    name: '',
    gender: 'male',
    age: 25,
    weight: 65,
    height: 175,
    activityLevel: 1.55,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!form.name || !form.age || !form.weight || !form.height) return;
    const newProfile: UserProfile = {
      name: form.name!,
      gender: form.gender || 'male',
      age: form.age!,
      weight: form.weight!,
      height: form.height!,
      activityLevel: form.activityLevel || 1.55,
      createdAt: new Date().toISOString(),
    };
    setProfile(newProfile);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onComplete();
    }, 1000);
  };

  const bmi = form.weight && form.height
    ? (form.weight / ((form.height / 100) ** 2)).toFixed(1)
    : '—';

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          👤 Your Profile
        </h2>
        <p className="text-gray-400">
          Set up your profile to personalize your training and nutrition plan
        </p>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              value={form.name || ''}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
            <div className="flex gap-3">
              <button
                onClick={() => setForm({ ...form, gender: 'male' })}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  form.gender === 'male'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                ♂ Male
              </button>
              <button
                onClick={() => setForm({ ...form, gender: 'female' })}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  form.gender === 'female'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                ♀ Female
              </button>
            </div>
          </div>

          {/* Age, Weight, Height */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
              <input
                type="number"
                value={form.age || ''}
                onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) || 0 })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Weight (kg)</label>
              <input
                type="number"
                value={form.weight || ''}
                onChange={(e) => setForm({ ...form, weight: parseFloat(e.target.value) || 0 })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Height (cm)</label>
              <input
                type="number"
                value={form.height || ''}
                onChange={(e) => setForm({ ...form, height: parseFloat(e.target.value) || 0 })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Activity Level</label>
            <select
              value={form.activityLevel || 1.55}
              onChange={(e) => setForm({ ...form, activityLevel: parseFloat(e.target.value) })}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly active (1-3 days/week)</option>
              <option value="1.55">Moderately active (3-5 days/week)</option>
              <option value="1.725">Very active (6-7 days/week)</option>
              <option value="1.9">Extra active (very hard exercise daily)</option>
            </select>
          </div>

          {/* BMI Preview */}
          {form.weight && form.height && (
            <div className="bg-gray-700/30 rounded-lg p-4 flex items-center justify-between">
              <span className="text-gray-400">Current BMI:</span>
              <span className={`text-xl font-bold ${
                parseFloat(bmi as string) < 18.5 ? 'text-blue-400' :
                parseFloat(bmi as string) < 25 ? 'text-green-400' :
                parseFloat(bmi as string) < 30 ? 'text-yellow-400' : 'text-red-400'
              }`}>{bmi}</span>
            </div>
          )}

          <button
            onClick={handleSave}
            className={`w-full font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 ${
              saved
                ? 'bg-green-600 text-white'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            {saved ? '✓ Saved!' : profile ? 'Update Profile' : 'Save Profile'}
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      {profile && (
        <div className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">📊 Quick Stats</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-gray-700/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Weight</div>
              <div className="text-lg font-bold text-white">{profile.weight} kg</div>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Height</div>
              <div className="text-lg font-bold text-white">{profile.height} cm</div>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Protein Target</div>
              <div className="text-lg font-bold text-red-400">{Math.round(profile.weight * 2)}g</div>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-400">Calories</div>
              <div className="text-lg font-bold text-green-400">
                {Math.round((profile.gender === 'male'
                  ? 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5
                  : 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161
                ) * profile.activityLevel + 300)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
