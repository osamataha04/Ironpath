export default function Nutrition() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Food, Sleep & Recovery
        </h2>
        <p className="text-gray-400 text-lg">
          The non-gym half that decides whether this works
        </p>
      </div>

      {/* Priority Order */}
      <div className="bg-gradient-to-br from-green-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-700/30 mb-6">
        <h3 className="text-lg font-bold text-green-400 mb-3">⚡ Priority Order When a Week Goes Badly</h3>
        <p className="text-gray-400 text-sm mb-4">Cut from the bottom, not the top:</p>
        <div className="space-y-2">
          {[
            { rank: 1, item: 'Sleep', color: 'text-green-400' },
            { rank: 2, item: 'Lifting (even 2 shorter sessions)', color: 'text-green-400' },
            { rank: 3, item: 'Calories and protein', color: 'text-green-300' },
            { rank: 4, item: 'Pull-aparts and mobility', color: 'text-yellow-400' },
            { rank: 5, item: 'Zone 2 walking', color: 'text-yellow-400' },
            { rank: 6, item: 'Apnea walks and cold showers', color: 'text-orange-400' },
            { rank: 7, item: 'The dashboard streak', color: 'text-red-400' },
          ].map((item) => (
            <div key={item.rank} className="flex items-center gap-3">
              <span className={`${item.color} font-bold w-6 text-sm`}>{item.rank}.</span>
              <span className="text-gray-300 text-sm">{item.item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Food */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">🍽️ Food Rules</h3>
        <div className="space-y-4">
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="text-white font-medium mb-2">Calibrate by the scale</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Weigh food for 2 weeks, then adjust by weight trend</li>
              <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Weight flat 3 weeks → add 150-200 kcal/day (mostly carbs)</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">⚠</span> Gaining faster than 1.2 kg/month → trim 150 kcal</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">⚠</span> Waist rising more than 1cm per 1.5kg gained → gaining too fast</li>
            </ul>
          </div>

          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="text-white font-medium mb-2">Protein Target</div>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-red-400">1.6-2.2</div>
              <div className="text-gray-400 text-sm">
                <div>grams per kg bodyweight</div>
                <div className="text-gray-500">e.g. at 65kg: 105-145g/day</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="text-white font-medium mb-2">Add to Your Meals</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🥬</span>
                <span className="text-gray-300 text-sm">More vegetables</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🐟</span>
                <span className="text-gray-300 text-sm">Fish 1-2×/week (sardines, mackerel)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">💊</span>
                <span className="text-gray-300 text-sm">Creatine 3-5g/day (optional)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🥚</span>
                <span className="text-gray-300 text-sm">Eggs, lean meat, dairy</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="text-white font-medium mb-2">Bodyweight Target</div>
            <p className="text-gray-300 text-sm">
              Aim for <span className="text-green-400 font-medium">+0.5-1 kg per month</span>. This ensures most gains are muscle, not fat.
            </p>
          </div>
        </div>
      </div>

      {/* Sleep */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">😴 Sleep</h3>
        <div className="bg-indigo-900/20 rounded-lg p-4 border border-indigo-800/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🌙</span>
            <div>
              <div className="text-white font-bold">7-8 hours per night</div>
              <div className="text-gray-400 text-sm">Wake at 7:00 → bed by 23:00</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Sleep is where you recover. When sleep is short, the first things to suffer are lifts, mood, and focus.
          </p>
        </div>
        <div className="mt-3 bg-red-900/20 rounded-lg p-3 border border-red-800/30">
          <p className="text-red-300 text-xs">
            ⚠️ Miss on a day when you slept under 6 hours, were sick, or ate almost nothing doesn't count as a real failure. Repeat the weight.
          </p>
        </div>
      </div>

      {/* Cardio */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">🚶 Zone 2 Cardio</h3>
        <div className="bg-gray-700/30 rounded-lg p-4">
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-start gap-2"><span className="text-green-400">•</span> Pace: can talk in full sentences but not sing</li>
            <li className="flex items-start gap-2"><span className="text-green-400">•</span> Duration: 30-45 minutes</li>
            <li className="flex items-start gap-2"><span className="text-green-400">•</span> Frequency: 2-3 days/week on non-lifting days</li>
            <li className="flex items-start gap-2"><span className="text-yellow-400">⚠</span> Should never leave you too tired to lift next day</li>
          </ul>
        </div>
      </div>

      {/* Home Posture Block */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">🏠 Daily Home Posture Block (~10 min)</h3>
        <p className="text-gray-400 text-sm mb-4">Do this every day. Stretching alone doesn't fix posture — strength does.</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-xl">1️⃣</span>
            <div>
              <div className="text-white text-sm font-medium">Chin Tucks</div>
              <div className="text-gray-400 text-xs">10 reps, hold 5 seconds each</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-xl">2️⃣</span>
            <div>
              <div className="text-white text-sm font-medium">Doorway Chest Stretch</div>
              <div className="text-gray-400 text-xs">2 × 60 seconds each side</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-xl">3️⃣</span>
            <div>
              <div className="text-white text-sm font-medium">Wall Slides</div>
              <div className="text-gray-400 text-xs">2 × 10 (back against wall, arms sliding up/down)</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-xl">4️⃣</span>
            <div>
              <div className="text-white text-sm font-medium">Thoracic Extension</div>
              <div className="text-gray-400 text-xs">1-2 minutes over rolled towel or foam roller</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-xl">5️⃣</span>
            <div>
              <div className="text-white text-sm font-medium">Band Pull-Aparts</div>
              <div className="text-gray-400 text-xs">20 reps at each work break (2-3× daily)</div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-blue-900/20 rounded-lg p-3 border border-blue-800/30">
          <p className="text-blue-300 text-xs">
            💡 Desk setup: monitor at eye level, elbows ~90°, stand up briefly every 30-40 minutes.
          </p>
        </div>
      </div>

      {/* Deloads */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">🔄 When to Deload</h3>
        <p className="text-gray-400 text-sm mb-4">A planned easier week that lets accumulated fatigue drain away.</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-sm">
            <span className="text-yellow-400">•</span>
            <span className="text-gray-300">Two or more main lifts reset within the same 2 weeks</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <span className="text-yellow-400">•</span>
            <span className="text-gray-300">Joint aches persist for a week or more</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <span className="text-yellow-400">•</span>
            <span className="text-gray-300">Slept under 6 hours for most of a week or unusual stress</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <span className="text-yellow-400">•</span>
            <span className="text-gray-300">In Stage 2: every 8-10 weeks as insurance</span>
          </div>
        </div>
        <div className="bg-yellow-900/20 rounded-lg p-3 border border-yellow-800/30">
          <p className="text-yellow-300 text-sm">
            <strong>How:</strong> Same exercises, weights at ~85%, only 2 sets each. Nothing close to failure (RIR 4+). Then return to normal.
          </p>
        </div>
      </div>
    </div>
  );
}
