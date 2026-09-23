export interface UserProfile {
  name: string;
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  activityLevel: number;
  createdAt: string;
}

export interface WeightEntry {
  date: string;
  weight: number;
  waist?: number;
  shoulder?: number;
  notes?: string;
}

export interface LiftEntry {
  date: string;
  exercise: string;
  weight: number;
  reps: number;
  sets: number;
  rir?: number;
}

export interface WorkoutSession {
  id: string;
  date: string;
  type: 'A' | 'B';
  exercises: LiftEntry[];
  duration?: number;
  notes?: string;
}

export interface UserData {
  profile: UserProfile | null;
  weightLog: WeightEntry[];
  workoutHistory: WorkoutSession[];
  measurements: { date: string; waist: number; shoulder: number; arm?: number; thigh?: number }[];
}
