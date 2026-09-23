import { useState } from 'react';

interface Exercise {
  name: string;
  setsReps: string;
  rest: string;
  why: string;
  youtubeUrl: string;
  tips?: string[];
}

const workoutA: Exercise[] = [
  {
    name: 'Barbell Back Squat',
    setsReps: '3 × 5',
    rest: '3 min',
    why: 'Biggest muscle mass in the body: quads, glutes, trunk. Main driver of total strength and overall size.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ultWZbUMPL8',
    tips: ['High-bar position for easier setup with tight shoulders', 'Hip crease below top of knee', 'Brace as if bracing for a punch'],
  },
  {
    name: 'Barbell Bench Press',
    setsReps: '3 × 5',
    rest: '3 min',
    why: 'Chest, front delts, triceps. The main upper-body pressing strength builder.',
    youtubeUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
    tips: ['Elbows 45-60° from torso', 'Shoulder blades retracted and down', 'Never press without safeties or spotter'],
  },
  {
    name: 'Lat Pulldown (Overhand)',
    setsReps: '3 × 8-12',
    rest: '2 min',
    why: 'Lat width. This is your V-taper priority.',
    youtubeUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
    tips: ['Grip slightly wider than shoulders', 'Drive elbows down toward ribs', 'Touch bar to upper chest'],
  },
  {
    name: 'Seated Cable Row',
    setsReps: '3 × 8-12',
    rest: '2 min',
    why: 'Mid-back thickness; balances pressing; posture.',
    youtubeUrl: 'https://www.youtube.com/watch?v=GZbfZ033f74',
    tips: ['Sit tall, chest up', 'Pull elbows back to hips', 'Squeeze shoulder blades together'],
  },
  {
    name: 'Cable Lateral Raise',
    setsReps: '3 × 12-20',
    rest: '60-90s',
    why: 'Side delts: shoulder width. The other half of the V-taper.',
    youtubeUrl: 'https://www.youtube.com/watch?v=3VcKaXpzqRo',
    tips: ['Lead with the elbow', 'Light weight, controlled tempo', 'Lower over 2-3 seconds'],
  },
  {
    name: 'Face Pull',
    setsReps: '3 × 15-20',
    rest: '60-90s',
    why: 'Rear delts, lower/mid traps, rotator cuff. Posture and shoulder health.',
    youtubeUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
    tips: ['Rope at eye level', 'Pull toward forehead, spread rope ends', 'Hands rotated back at finish'],
  },
];

const workoutB: Exercise[] = [
  {
    name: 'Barbell Back Squat',
    setsReps: '3 × 5',
    rest: '3 min',
    why: 'Same progression as A. Squatting 3 times a week is how beginners learn it fast.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ultWZbUMPL8',
    tips: ['Same cues as Workout A', 'Focus on depth consistency', 'Bar over mid-foot'],
  },
  {
    name: 'Overhead Barbell Press',
    setsReps: '3 × 5',
    rest: '3 min',
    why: 'Shoulders and triceps; builds the upper "frame".',
    youtubeUrl: 'https://www.youtube.com/watch?v=2yjwXTZQDDI',
    tips: ['Move head back, push through once bar passes forehead', 'Squeeze glutes, ribs down', 'Finish with bar over mid-foot'],
  },
  {
    name: 'Barbell Deadlift',
    setsReps: '1 × 5',
    rest: '3-5 min',
    why: 'Posterior chain (back, glutes, hamstrings), grip, whole-body strength. One heavy set is enough.',
    youtubeUrl: 'https://www.youtube.com/watch?v=op9kVnSso6Q',
    tips: ['Bar over mid-foot, 2-3cm from shins', 'Push floor away with legs', 'Spine straight from head to tailbone'],
  },
  {
    name: 'Lat Pulldown (Underhand)',
    setsReps: '3 × 8-12',
    rest: '2 min',
    why: 'Second vertical pull of the week: lat growth with more biceps involvement.',
    youtubeUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
    tips: ['Shoulder-width underhand grip', 'Same cues as overhand pulldown', 'More biceps engagement'],
  },
  {
    name: 'Cable Lateral Raise',
    setsReps: '3 × 12-20',
    rest: '60-90s',
    why: 'Same as A. Side delt width for V-taper.',
    youtubeUrl: 'https://www.youtube.com/watch?v=3VcKaXpzqRo',
    tips: ['Lead with the elbow', 'Light weight, controlled tempo', 'Lower over 2-3 seconds'],
  },
  {
    name: 'Face Pull',
    setsReps: '3 × 15-20',
    rest: '60-90s',
    why: 'Same as A. Rear delts and posture.',
    youtubeUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
    tips: ['Rope at eye level', 'Pull toward forehead', 'Spread rope ends apart'],
  },
];

export default function TrainingPlan() {
  const [activeWorkout, setActiveWorkout] = useState<'A' | 'B'>('A');
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);

  const currentWorkout = activeWorkout === 'A' ? workoutA : workoutB;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Training Plan
        </h2>
        <p className="text-gray-400 text-lg">
          Phase 1: First Day to Confident Barbell Lifter
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Goal: 65 kg → ~80 kg with a visible V-taper
        </p>
      </div>

      {/* Key Principles */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">🏋️ Five Core Principles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-blue-400 font-medium text-sm">Progressive Overload</div>
            <div className="text-gray-400 text-xs mt-1">More weight or more reps over time</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-green-400 font-medium text-sm">Recovery = Growth</div>
            <div className="text-gray-400 text-xs mt-1">48+ hours between sessions</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-purple-400 font-medium text-sm">Skill First</div>
            <div className="text-gray-400 text-xs mt-1">Clean technique before heavy weight</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-yellow-400 font-medium text-sm">Fuel</div>
            <div className="text-gray-400 text-xs mt-1">Calorie surplus + enough protein</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-pink-400 font-medium text-sm">Consistency</div>
            <div className="text-gray-400 text-xs mt-1">2 boring sessions/week for a year {'>'} heroic month</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-orange-400 font-medium text-sm">3 Sessions/Week</div>
            <div className="text-gray-400 text-xs mt-1">Alternate A/B, 1 rest day between</div>
          </div>
        </div>
      </div>

      {/* Workout Toggle */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => { setActiveWorkout('A'); setExpandedExercise(null); }}
          className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
            activeWorkout === 'A'
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-900/30'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Workout A
        </button>
        <button
          onClick={() => { setActiveWorkout('B'); setExpandedExercise(null); }}
          className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
            activeWorkout === 'B'
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-900/30'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Workout B
        </button>
      </div>

      {/* Exercises */}
      <div className="space-y-4">
        {currentWorkout.map((exercise, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all"
          >
            <button
              onClick={() => setExpandedExercise(expandedExercise === idx ? null : idx)}
              className="w-full p-4 md:p-5 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  activeWorkout === 'A' ? 'bg-blue-600/30 text-blue-400' : 'bg-purple-600/30 text-purple-400'
                }`}>
                  {idx + 1}
                </div>
                <div>
                  <div className="text-white font-medium">{exercise.name}</div>
                  <div className="text-gray-400 text-sm">{exercise.setsReps} • Rest: {exercise.rest}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={exercise.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch
                </a>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${expandedExercise === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {expandedExercise === idx && (
              <div className="px-4 md:px-5 pb-5 border-t border-gray-700">
                <div className="mt-4 space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm font-medium">Why: </span>
                    <span className="text-gray-300 text-sm">{exercise.why}</span>
                  </div>
                  {exercise.tips && (
                    <div>
                      <span className="text-gray-400 text-sm font-medium block mb-2">Key Tips:</span>
                      <ul className="space-y-1">
                        {exercise.tips.map((tip, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">✓</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a
                    href={exercise.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch YouTube Tutorial
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progression Rules */}
      <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">📈 Progression Rules</h3>
        <div className="space-y-4">
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="text-blue-400 font-medium mb-2">Main Lifts (Linear Progression)</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-300">Squat: <span className="text-white">+2.5 kg/session</span></div>
              <div className="text-gray-300">Deadlift: <span className="text-white">+2.5-5 kg/session</span></div>
              <div className="text-gray-300">Bench: <span className="text-white">+1-2.5 kg/session</span></div>
              <div className="text-gray-300">OHP: <span className="text-white">+1-1.25 kg/session</span></div>
            </div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="text-green-400 font-medium mb-2">Accessories (Double Progression)</div>
            <p className="text-gray-300 text-sm">Add reps first → when all 3 sets hit top of range → increase weight → return to bottom of range</p>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="text-yellow-400 font-medium mb-2">Failure Rules</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 1st failure: repeat same weight next session</li>
              <li>• 2nd failure in a row: reduce 10%, rebuild</li>
              <li>• After 2 resets: move to Stage 2 rules</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Session Structure */}
      <div className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">🕐 Session Structure (~75-90 min)</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">1</div>
            <div>
              <div className="text-white text-sm font-medium">General Warm-up (~5 min)</div>
              <div className="text-gray-400 text-xs">Light cardio, 10 bodyweight squats, 15 band pull-aparts</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">2</div>
            <div>
              <div className="text-white text-sm font-medium">Ramp Sets (before each main lift)</div>
              <div className="text-gray-400 text-xs">Not counted in work sets. Example for 60kg squat: 20kg×8, 30kg×5, 40kg×3, 50kg×2</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">3</div>
            <div>
              <div className="text-white text-sm font-medium">Work Sets</div>
              <div className="text-gray-400 text-xs">Full rest between sets. Use a timer.</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">4</div>
            <div>
              <div className="text-white text-sm font-medium">Log Every Set</div>
              <div className="text-gray-400 text-xs">Weight × reps. If it isn't written down, it didn't happen.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
