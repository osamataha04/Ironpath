import { useState } from 'react';

interface NutritionResults {
  bmi: number;
  bmr: number;
  tdee: number;
  surplus: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  water: number;
  micros: {
    vitaminD: string;
    vitaminC: string;
    vitaminB12: string;
    iron: string;
    calcium: string;
    zinc: string;
    magnesium: string;
    potassium: string;
    sodium: string;
    omega3: string;
  };
}

export default function Calculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.55');
  const [results, setResults] = useState<NutritionResults | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activityLevel);

    if (!w || !h || !a) return;

    // BMI
    const heightM = h / 100;
    const bmi = w / (heightM * heightM);

    // BMR (Mifflin-St Jeor)
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // TDEE
    const tdee = bmr * act;

    // Surplus for muscle gain (+300 kcal)
    const surplus = tdee + 300;

    // Macros
    const protein = Math.round(w * 2); // 2g/kg
    const fat = Math.round((surplus * 0.25) / 9); // 25% from fat
    const carbs = Math.round((surplus - protein * 4 - fat * 9) / 4);

    // Micros
    const micros = gender === 'male'
      ? {
          vitaminD: '15-25 µg (600-1000 IU)',
          vitaminC: '90 mg',
          vitaminB12: '2.4 µg',
          iron: '8 mg',
          calcium: '1000 mg',
          zinc: '11 mg',
          magnesium: '400-420 mg',
          potassium: '3400 mg',
          sodium: '1500 mg',
          omega3: '1.6 g (EPA+DHA)',
        }
      : {
          vitaminD: '15-25 µg (600-1000 IU)',
          vitaminC: '75 mg',
          vitaminB12: '2.4 µg',
          iron: '18 mg',
          calcium: '1000 mg',
          zinc: '8 mg',
          magnesium: '310-320 mg',
          potassium: '2600 mg',
          sodium: '1500 mg',
          omega3: '1.1 g (EPA+DHA)',
        };

    setResults({
      bmi: Math.round(bmi * 10) / 10,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      surplus: Math.round(surplus),
      protein,
      carbs,
      fat,
      fiber: gender === 'male' ? 38 : 25,
      water: Math.round(w * 0.033 * 10) / 10,
      micros,
    });
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-400' };
    if (bmi < 25) return { label: 'Normal', color: 'text-green-400' };
    if (bmi < 30) return { label: 'Overweight', color: 'text-yellow-400' };
    return { label: 'Obese', color: 'text-red-400' };
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Nutrition Calculator
        </h2>
        <p className="text-gray-400 text-lg">
          Enter your details to get personalized macro & micronutrient targets
        </p>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
            <div className="flex gap-3">
              <button
                onClick={() => setGender('male')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  gender === 'male'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  gender === 'female'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 25"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 65"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 175"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Activity Level */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-2">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly active (1-3 days/week)</option>
              <option value="1.55">Moderately active (3-5 days/week)</option>
              <option value="1.725">Very active (6-7 days/week)</option>
              <option value="1.9">Extra active (very hard exercise daily)</option>
            </select>
          </div>
        </div>

        <button
          onClick={calculate}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-95"
        >
          Calculate My Nutrition Plan
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-8 space-y-6">
          {/* BMI */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">📊 Body Mass Index</h3>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-white">{results.bmi}</div>
              <div className={`text-lg font-medium ${getBMICategory(results.bmi).color}`}>
                {getBMICategory(results.bmi).label}
              </div>
            </div>
            <div className="mt-4 h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full"
                style={{ width: '100%' }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>16</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
            </div>
          </div>

          {/* Calories */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">🔥 Daily Calories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-400">BMR</div>
                <div className="text-2xl font-bold text-white">{results.bmr}</div>
                <div className="text-xs text-gray-500">kcal (resting)</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-400">TDEE</div>
                <div className="text-2xl font-bold text-blue-400">{results.tdee}</div>
                <div className="text-xs text-gray-500">kcal (maintenance)</div>
              </div>
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl p-4 text-center border border-green-700/50">
                <div className="text-sm text-green-300">Target (Surplus)</div>
                <div className="text-2xl font-bold text-green-400">{results.surplus}</div>
                <div className="text-xs text-green-400/70">kcal (+300 for muscle)</div>
              </div>
            </div>
          </div>

          {/* Macros */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">🥩 Macronutrients</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-red-900/20 rounded-xl p-4 text-center border border-red-800/30">
                <div className="text-3xl mb-1">🥩</div>
                <div className="text-2xl font-bold text-red-400">{results.protein}g</div>
                <div className="text-sm text-gray-400">Protein</div>
                <div className="text-xs text-gray-500">2g/kg bodyweight</div>
              </div>
              <div className="bg-yellow-900/20 rounded-xl p-4 text-center border border-yellow-800/30">
                <div className="text-3xl mb-1">🍚</div>
                <div className="text-2xl font-bold text-yellow-400">{results.carbs}g</div>
                <div className="text-sm text-gray-400">Carbs</div>
                <div className="text-xs text-gray-500">fuel for training</div>
              </div>
              <div className="bg-purple-900/20 rounded-xl p-4 text-center border border-purple-800/30">
                <div className="text-3xl mb-1">🥑</div>
                <div className="text-2xl font-bold text-purple-400">{results.fat}g</div>
                <div className="text-sm text-gray-400">Fat</div>
                <div className="text-xs text-gray-500">25% of calories</div>
              </div>
              <div className="bg-green-900/20 rounded-xl p-4 text-center border border-green-800/30">
                <div className="text-3xl mb-1">🥦</div>
                <div className="text-2xl font-bold text-green-400">{results.fiber}g</div>
                <div className="text-sm text-gray-400">Fiber</div>
                <div className="text-xs text-gray-500">digestive health</div>
              </div>
            </div>
            <div className="mt-4 bg-blue-900/20 rounded-xl p-4 border border-blue-800/30">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💧</span>
                <div>
                  <span className="text-blue-400 font-bold">{results.water}L</span>
                  <span className="text-gray-400 text-sm ml-2">water per day minimum</span>
                </div>
              </div>
            </div>
          </div>

          {/* Micros */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">💊 Micronutrients (Daily Targets)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(results.micros).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center bg-gray-700/30 rounded-lg px-4 py-3">
                  <span className="text-gray-300 capitalize text-sm">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-white font-medium text-sm">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-amber-900/20 rounded-xl border border-amber-800/30">
              <p className="text-amber-300 text-sm">
                💡 <strong>Supplement tip:</strong> Creatine monohydrate (3-5g/day) is the best-supported supplement for strength and lean mass. Consider Vitamin D if you don't get enough sun.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
