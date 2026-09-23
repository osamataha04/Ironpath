import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { WeightEntry, LiftEntry, WorkoutSession, UserProfile } from '../types';

export default function ProgressTracker() {
  const [profile] = useLocalStorage<UserProfile | null>('ironpath_profile', null);
  const [weightLog, setWeightLog] = useLocalStorage<WeightEntry[]>('ironpath_weight_log', []);
  const [workoutHistory, setWorkoutHistory] = useLocalStorage<WorkoutSession[]>('ironpath_workout_history', []);
  const [activeSection, setActiveSection] = useState<'weight' | 'lifts' | 'workout'>('weight');

  // Weight form
  const [newWeight, setNewWeight] = useState('');
  const [newWaist, setNewWaist] = useState('');
  const [newShoulder, setNewShoulder] = useState('');

  // Workout form
  const [workoutType, setWorkoutType] = useState<'A' | 'B'>('A');
  const [liftExercises, setLiftExercises] = useState<LiftEntry[]>([]);
  const [currentExercise, setCurrentExercise] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [currentReps, setCurrentReps] = useState('');
  const [currentSets, setCurrentSets] = useState('');
  const [currentRir, setCurrentRir] = useState('');

  const addWeightEntry = () => {
    if (!newWeight) return;
    const entry: WeightEntry = {
      date: new Date().toISOString().split('T')[0],
      weight: parseFloat(newWeight),
      waist: newWaist ? parseFloat(newWaist) : undefined,
      shoulder: newShoulder ? parseFloat(newShoulder) : undefined,
    };
    setWeightLog([...weightLog, entry]);
    setNewWeight('');
    setNewWaist('');
    setNewShoulder('');
  };

  const addLiftToSession = () => {
    if (!currentExercise || !currentWeight || !currentReps || !currentSets) return;
    setLiftExercises([...liftExercises, {
      date: new Date().toISOString().split('T')[0],
      exercise: currentExercise,
      weight: parseFloat(currentWeight),
      reps: parseInt(currentReps),
      sets: parseInt(currentSets),
      rir: currentRir ? parseInt(currentRir) : undefined,
    }]);
    setCurrentExercise('');
    setCurrentWeight('');
    setCurrentReps('');
    setCurrentSets('');
    setCurrentRir('');
  };

  const saveWorkoutSession = () => {
    if (liftExercises.length === 0) return;
    const session: WorkoutSession = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      type: workoutType,
      exercises: liftExercises,
    };
    setWorkoutHistory([...workoutHistory, session]);
    setLiftExercises([]);
  };

  const deleteWeightEntry = (index: number) => {
    setWeightLog(weightLog.filter((_, i) => i !== index));
  };

  const deleteWorkout = (id: string) => {
    setWorkoutHistory(workoutHistory.filter(w => w.id !== id));
  };

  // Calculate trends
  const weightTrend = weightLog.length >= 2
    ? (weightLog[weightLog.length - 1].weight - weightLog[0].weight).toFixed(1)
    : '0';

  const bestLifts: Record<string, number> = {};
  workoutHistory.forEach(session => {
    session.exercises.forEach(ex => {
      const total = ex.weight * ex.reps * ex.sets;
      if (!bestLifts[ex.exercise] || total > bestLifts[ex.exercise]) {
        bestLifts[ex.exercise] = ex.weight;
      }
    });
  });

  const exercises = [
    'Barbell Back Squat',
    'Barbell Bench Press',
    'Overhead Barbell Press',
    'Barbell Deadlift',
    'Lat Pulldown',
    'Seated Cable Row',
    'Cable Lateral Raise',
    'Face Pull',
  ];

  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-2xl font-bold text-white mb-3">Set Up Your Profile First</h2>
        <p className="text-gray-400">Go to the Profile tab to create your account before tracking progress.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          📈 Progress Tracker
        </h2>
        <p className="text-gray-400 text-lg">
          Welcome back, <span className="text-blue-400 font-medium">{profile.name}</span>! Track your gains.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-xs text-gray-400">Current Weight</div>
          <div className="text-xl font-bold text-white">
            {weightLog.length > 0 ? weightLog[weightLog.length - 1].weight : profile.weight} kg
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-xs text-gray-400">Total Change</div>
          <div className={`text-xl font-bold ${parseFloat(weightTrend) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {parseFloat(weightTrend) >= 0 ? '+' : ''}{weightTrend} kg
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-xs text-gray-400">Sessions</div>
          <div className="text-xl font-bold text-blue-400">{workoutHistory.length}</div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-xs text-gray-400">V-Taper Ratio</div>
          <div className="text-xl font-bold text-purple-400">
            {weightLog.length > 0 && weightLog[weightLog.length - 1].shoulder && weightLog[weightLog.length - 1].waist
              ? (weightLog[weightLog.length - 1].shoulder! / weightLog[weightLog.length - 1].waist!).toFixed(2)
              : '—'}
          </div>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveSection('weight')}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
            activeSection === 'weight' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
        >
          ⚖️ Weight Log
        </button>
        <button
          onClick={() => setActiveSection('workout')}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
            activeSection === 'workout' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
        >
          🏋️ Log Workout
        </button>
        <button
          onClick={() => setActiveSection('lifts')}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
            activeSection === 'lifts' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
        >
          💪 PRs & History
        </button>
      </div>

      {/* Weight Log Section */}
      {activeSection === 'weight' && (
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">Log Today's Weight</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Weight (kg) *</label>
                <input
                  type="number"
                  value={newWeight}
                  onChange={(e) => setNewWeight(e.target.value)}
                  placeholder="e.g. 66.5"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Waist (cm)</label>
                <input
                  type="number"
                  value={newWaist}
                  onChange={(e) => setNewWaist(e.target.value)}
                  placeholder="optional"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Shoulder (cm)</label>
                <input
                  type="number"
                  value={newShoulder}
                  onChange={(e) => setNewShoulder(e.target.value)}
                  placeholder="optional"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              onClick={addWeightEntry}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              + Add Entry
            </button>
          </div>

          {/* Weight History */}
          {weightLog.length > 0 && (
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">History</h3>
              {/* Simple chart */}
              <div className="mb-4 h-32 flex items-end gap-1 overflow-x-auto">
                {weightLog.slice(-30).map((entry, i) => {
                  const min = Math.min(...weightLog.slice(-30).map(e => e.weight));
                  const max = Math.max(...weightLog.slice(-30).map(e => e.weight));
                  const range = max - min || 1;
                  const height = ((entry.weight - min) / range) * 100;
                  return (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t min-w-[8px] flex-1"
                      style={{ height: `${Math.max(height, 5)}%` }}
                      title={`${entry.date}: ${entry.weight}kg`}
                    />
                  );
                })}
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {[...weightLog].reverse().map((entry, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-700/30 rounded-lg px-4 py-2">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-sm">{entry.date}</span>
                      <span className="text-white font-medium">{entry.weight} kg</span>
                      {entry.waist && <span className="text-gray-500 text-xs">waist: {entry.waist}cm</span>}
                      {entry.shoulder && <span className="text-gray-500 text-xs">shoulder: {entry.shoulder}cm</span>}
                    </div>
                    <button
                      onClick={() => deleteWeightEntry(weightLog.length - 1 - i)}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Log Workout Section */}
      {activeSection === 'workout' && (
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">Log Workout Session</h3>
            
            {/* Workout type */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setWorkoutType('A')}
                className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                  workoutType === 'A' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                Workout A
              </button>
              <button
                onClick={() => setWorkoutType('B')}
                className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                  workoutType === 'B' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                Workout B
              </button>
            </div>

            {/* Add exercise */}
            <div className="space-y-3 mb-4">
              <select
                value={currentExercise}
                onChange={(e) => setCurrentExercise(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select exercise...</option>
                {exercises.map(ex => (
                  <option key={ex} value={ex}>{ex}</option>
                ))}
              </select>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <input
                  type="number"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  placeholder="Weight (kg)"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  value={currentReps}
                  onChange={(e) => setCurrentReps(e.target.value)}
                  placeholder="Reps"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  value={currentSets}
                  onChange={(e) => setCurrentSets(e.target.value)}
                  placeholder="Sets"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  value={currentRir}
                  onChange={(e) => setCurrentRir(e.target.value)}
                  placeholder="RIR"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={addLiftToSession}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                + Add Exercise
              </button>
            </div>

            {/* Current session exercises */}
            {liftExercises.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">This Session:</h4>
                <div className="space-y-1">
                  {liftExercises.map((ex, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-700/30 rounded px-3 py-2 text-sm">
                      <span className="text-white">{ex.exercise}</span>
                      <span className="text-gray-400">{ex.weight}kg × {ex.reps} × {ex.sets} sets{ex.rir ? ` (RIR ${ex.rir})` : ''}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={saveWorkoutSession}
              disabled={liftExercises.length === 0}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              💾 Save Workout Session
            </button>
          </div>
        </div>
      )}

      {/* PRs & History */}
      {activeSection === 'lifts' && (
        <div className="space-y-4">
          {/* Personal Records */}
          {Object.keys(bestLifts).length > 0 && (
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">🏆 Personal Records</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(bestLifts).map(([exercise, weight]) => (
                  <div key={exercise} className="bg-yellow-900/20 rounded-lg p-3 border border-yellow-800/30">
                    <div className="text-gray-400 text-xs">{exercise}</div>
                    <div className="text-yellow-400 font-bold text-lg">{weight} kg</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Workout History */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">📋 Workout History</h3>
            {workoutHistory.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-4">No workouts logged yet. Start tracking!</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {[...workoutHistory].reverse().map((session) => (
                  <div key={session.id} className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          session.type === 'A' ? 'bg-blue-600/30 text-blue-400' : 'bg-purple-600/30 text-purple-400'
                        }`}>
                          {session.type}
                        </span>
                        <span className="text-gray-400 text-sm">{session.date}</span>
                      </div>
                      <button
                        onClick={() => deleteWorkout(session.id)}
                        className="text-red-400 hover:text-red-300 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="space-y-1">
                      {session.exercises.map((ex, i) => (
                        <div key={i} className="text-gray-300 text-sm">
                          {ex.exercise}: {ex.weight}kg × {ex.reps} reps × {ex.sets} sets
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
