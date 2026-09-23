export default function Stages() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Training Stages
        </h2>
        <p className="text-gray-400 text-lg">
          Your roadmap from beginner to advanced
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 via-yellow-500 to-purple-500" />

        {/* Stage 0 */}
        <div className="relative pl-12 md:pl-20 pb-8">
          <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900" />
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-blue-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600/30 text-blue-400 text-xs font-bold px-2 py-1 rounded">STAGE 0</span>
              <span className="text-gray-500 text-sm">Weeks 1-2</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Learn & Find Your Weights</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Empty bar (or lighter) for 3×5 on every barbell lift</li>
              <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Add weight each session: Squat/DL +5kg, Bench/OHP +2.5kg</li>
              <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Stop jumping when a set of 5 feels like RIR 3</li>
              <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Consider 1-2 sessions with a coach for form check</li>
              <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Expect soreness in weeks 1-3 — it's normal</li>
            </ul>
            <div className="mt-3 bg-blue-900/20 rounded-lg p-3 border border-blue-800/30">
              <p className="text-blue-300 text-xs">Typical starts at 65kg BW: Squat 40-60kg, Deadlift 50-70kg, Bench 30-40kg, OHP 20-30kg</p>
            </div>
          </div>
        </div>

        {/* Stage 1 */}
        <div className="relative pl-12 md:pl-20 pb-8">
          <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-green-500 border-4 border-gray-900" />
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-green-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-600/30 text-green-400 text-xs font-bold px-2 py-1 rounded">STAGE 1</span>
              <span className="text-gray-500 text-sm">Weeks 3-16</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Linear Progression</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="text-green-400">•</span> Complete all sets/reps → add weight next session</li>
              <li className="flex items-start gap-2"><span className="text-green-400">•</span> 1st failure: repeat same weight</li>
              <li className="flex items-start gap-2"><span className="text-green-400">•</span> 2nd failure in a row: reduce 10%, rebuild</li>
              <li className="flex items-start gap-2"><span className="text-green-400">•</span> After 2 resets on same lift: move to Stage 2</li>
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-green-900/20 rounded-lg p-2 text-center border border-green-800/30">
                <div className="text-green-400 font-bold text-sm">+30-50 kg</div>
                <div className="text-gray-400 text-xs">Squat (12 weeks)</div>
              </div>
              <div className="bg-green-900/20 rounded-lg p-2 text-center border border-green-800/30">
                <div className="text-green-400 font-bold text-sm">+40-60 kg</div>
                <div className="text-gray-400 text-xs">Deadlift (12 weeks)</div>
              </div>
              <div className="bg-green-900/20 rounded-lg p-2 text-center border border-green-800/30">
                <div className="text-green-400 font-bold text-sm">+10-20 kg</div>
                <div className="text-gray-400 text-xs">Bench (12 weeks)</div>
              </div>
              <div className="bg-green-900/20 rounded-lg p-2 text-center border border-green-800/30">
                <div className="text-green-400 font-bold text-sm">+5-10 kg</div>
                <div className="text-gray-400 text-xs">OHP (12 weeks)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="relative pl-12 md:pl-20 pb-8">
          <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-yellow-500 border-4 border-gray-900" />
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-yellow-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-yellow-600/30 text-yellow-400 text-xs font-bold px-2 py-1 rounded">STAGE 2</span>
              <span className="text-gray-500 text-sm">Months 4-12</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Weekly Progression + More Exercises</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span> Progression slows to every 1-2 weeks</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span> Squat drops to 2×/week: one heavy (3×5), one light (2×5 at ~85%)</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span> New exercises: RDL, calf raises, curls, triceps, abs</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span> V-taper work stays priority</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span> Formal deload every 8-10 weeks</li>
            </ul>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="relative pl-12 md:pl-20 pb-4">
          <div className="absolute left-2 md:left-6 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-900" />
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-purple-700/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-600/30 text-purple-400 text-xs font-bold px-2 py-1 rounded">STAGE 3</span>
              <span className="text-gray-500 text-sm">Year 2+</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">More Days or More Volume</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Either a 4th training day or higher volume</li>
              <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Endurance work (running, swimming, etc.) begins Year 3</li>
              <li className="flex items-start gap-2"><span className="text-purple-400">•</span> Avoid interference with muscle/strength gains in first 2 years</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Checkpoints */}
      <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">📊 Ballpark Checkpoints</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="text-left py-2 pr-2">When</th>
                <th className="text-left py-2 pr-2">BW</th>
                <th className="text-center py-2 pr-2">Squat</th>
                <th className="text-center py-2 pr-2">Deadlift</th>
                <th className="text-center py-2 pr-2">Bench</th>
                <th className="text-center py-2">OHP</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-2">Month 3</td>
                <td className="py-2 pr-2">67-69 kg</td>
                <td className="py-2 pr-2 text-center">1.0-1.3×</td>
                <td className="py-2 pr-2 text-center">1.3-1.6×</td>
                <td className="py-2 pr-2 text-center">0.6-0.8×</td>
                <td className="py-2 text-center">0.4-0.5×</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-2">Month 6</td>
                <td className="py-2 pr-2">68-71 kg</td>
                <td className="py-2 pr-2 text-center">1.25-1.5×</td>
                <td className="py-2 pr-2 text-center">1.5-1.8×</td>
                <td className="py-2 pr-2 text-center">0.8-1.0×</td>
                <td className="py-2 text-center">0.5-0.6×</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 pr-2">Month 12</td>
                <td className="py-2 pr-2">71-75 kg</td>
                <td className="py-2 pr-2 text-center">1.5-1.75×</td>
                <td className="py-2 pr-2 text-center">1.75-2.0×</td>
                <td className="py-2 pr-2 text-center">1.0-1.25×</td>
                <td className="py-2 text-center">0.65-0.75×</td>
              </tr>
              <tr>
                <td className="py-2 pr-2">Month 24</td>
                <td className="py-2 pr-2">75-80 kg</td>
                <td className="py-2 pr-2 text-center">higher</td>
                <td className="py-2 pr-2 text-center">higher</td>
                <td className="py-2 pr-2 text-center">higher</td>
                <td className="py-2 text-center">higher</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-3">* Values are 5-rep working weights relative to bodyweight</p>
      </div>

      {/* RIR Guide */}
      <div className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">🎯 Reps in Reserve (RIR) Guide</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-blue-400 font-bold w-8">4+</span>
            <span className="text-gray-300 text-sm">Warm-up. Fast, easy bar speed.</span>
            <span className="text-gray-500 text-xs ml-auto hidden sm:block">Ramp sets, Stage 0</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-green-400 font-bold w-8">3</span>
            <span className="text-gray-300 text-sm">Solid but clearly not hard.</span>
            <span className="text-gray-500 text-xs ml-auto hidden sm:block">Main lifts, weeks 3-6</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-yellow-400 font-bold w-8">2</span>
            <span className="text-gray-300 text-sm">Last rep is slow but clean.</span>
            <span className="text-gray-500 text-xs ml-auto hidden sm:block">Main lifts 6+, accessories 1-2</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-orange-400 font-bold w-8">1</span>
            <span className="text-gray-300 text-sm">Last rep is a grind, form still good.</span>
            <span className="text-gray-500 text-xs ml-auto hidden sm:block">Last work set</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-700/30 rounded-lg p-3">
            <span className="text-red-400 font-bold w-8">0</span>
            <span className="text-gray-300 text-sm">Nothing left, or form breaks.</span>
            <span className="text-gray-500 text-xs ml-auto hidden sm:block">Avoid on main lifts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
