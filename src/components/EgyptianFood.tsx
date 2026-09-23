import { useState } from 'react';

interface FoodItem {
  name: string;
  nameEn: string;
  serving: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  keyMicros: string[];
  category: string;
}

interface MealPlan {
  name: string;
  time: string;
  foods: { item: string; amount: string; calories: number; protein: number }[];
  totalCalories: number;
  totalProtein: number;
}

const egyptianFoods: FoodItem[] = [
  // بروتينات
  { name: 'فول مدمس', nameEn: 'Fava Beans', serving: '1 كوب (200g)', calories: 230, protein: 15, carbs: 33, fat: 3, fiber: 9, keyMicros: ['حديد 5mg', 'ماغنسيوم 80mg', 'بوتاسيوم 450mg', 'فيتامين B1'], category: 'بروتين نباتي' },
  { name: 'طعمية (فلافل)', nameEn: 'Falafel', serving: '5 حبات (150g)', calories: 340, protein: 13, carbs: 30, fat: 18, fiber: 6, keyMicros: ['حديد 4mg', 'زنك 2mg', 'فيتامين B6'], category: 'بروتين نباتي' },
  { name: 'بيض بلدي', nameEn: 'Egyptian Eggs', serving: '2 بيضة (100g)', calories: 155, protein: 13, carbs: 1, fat: 11, fiber: 0, keyMicros: ['فيتامين D 2µg', 'فيتامين B12 1µg', 'سيلينيوم 30µg', 'كولين 250mg'], category: 'بروتين حيواني' },
  { name: 'صدر فراخ مشوي', nameEn: 'Grilled Chicken Breast', serving: '150g', calories: 248, protein: 46, carbs: 0, fat: 6, fiber: 0, keyMicros: ['نياسين 15mg', 'فيتامين B6 1mg', 'فوسفور 330mg', 'سيلينيوم 40µg'], category: 'بروتين حيواني' },
  { name: 'سمك بلطي مشوي', nameEn: 'Grilled Tilapia', serving: '150g', calories: 175, protein: 36, carbs: 0, fat: 3, fiber: 0, keyMicros: ['فيتامين B12 2µg', 'فوسفور 300mg', 'سيلينيوم 55µg', 'بوتاسيوم 450mg'], category: 'بروتين حيواني' },
  { name: 'سردين', nameEn: 'Sardines', serving: '100g', calories: 208, protein: 25, carbs: 0, fat: 11, fiber: 0, keyMicros: ['أوميجا 3 1.5g', 'فيتامين D 5µg', 'كالسيوم 380mg', 'فيتامين B12 9µg'], category: 'بروتين حيواني' },
  { name: 'لحمة بقري', nameEn: 'Beef', serving: '150g', calories: 330, protein: 39, carbs: 0, fat: 18, fiber: 0, keyMicros: ['حديد 4mg', 'زنك 8mg', 'فيتامين B12 3µg', 'كرياتين طبيعي'], category: 'بروتين حيواني' },
  { name: 'كبدة', nameEn: 'Liver', serving: '100g', calories: 175, protein: 26, carbs: 4, fat: 5, fiber: 0, keyMicros: ['حديد 9mg', 'فيتامين A 5000µg', 'فيتامين B12 70µg', 'فولات 215µg'], category: 'بروتين حيواني' },
  { name: 'جبنة قريش', nameEn: 'Cottage Cheese', serving: '100g', calories: 98, protein: 11, carbs: 3, fat: 4, fiber: 0, keyMicros: ['كالسيوم 83mg', 'فوسفور 160mg', 'سيلينيوم 15µg'], category: 'ألبان' },
  { name: 'زبادي بلدي', nameEn: 'Egyptian Yogurt', serving: '200g', calories: 120, protein: 8, carbs: 10, fat: 5, fiber: 0, keyMicros: ['كالسيوم 200mg', 'فيتامين B12 1µg', 'بروبيوتيك', 'بوتاسيوم 300mg'], category: 'ألبان' },
  { name: 'لبنة', nameEn: 'Labneh', serving: '50g', calories: 85, protein: 3, carbs: 2, fat: 7, fiber: 0, keyMicros: ['كالسيوم 60mg', 'فيتامين A 50µg'], category: 'ألبان' },
  
  // كربوهيدرات
  { name: 'عيش بلدي (أسمر)', nameEn: 'Brown Baladi Bread', serving: '1 رغيف (100g)', calories: 250, protein: 8, carbs: 48, fat: 2, fiber: 6, keyMicros: ['حديد 3mg', 'ماغنسيوم 60mg', 'فيتامين B1'], category: 'كربوهيدرات' },
  { name: 'عيش أبيض', nameEn: 'White Baladi Bread', serving: '1 رغيف (100g)', calories: 265, protein: 7, carbs: 52, fat: 1, fiber: 2, keyMicros: ['حديد 2mg', 'فيتامين B1'], category: 'كربوهيدرات' },
  { name: 'أرز مصري', nameEn: 'Egyptian Rice', serving: '1 كوب مطبوخ (200g)', calories: 260, protein: 5, carbs: 57, fat: 1, fiber: 1, keyMicros: ['ماغنسيوم 20mg', 'بوتاسيوم 50mg'], category: 'كربوهيدرات' },
  { name: 'مكرونة', nameEn: 'Pasta', serving: '1 كوب مطبوخ (200g)', calories: 220, protein: 8, carbs: 43, fat: 1, fiber: 3, keyMicros: ['حديد 2mg', 'فيتامين B1', 'فيتامين B3'], category: 'كربوهيدرات' },
  { name: 'بطاطا مسلوقة', nameEn: 'Boiled Potato', serving: '200g', calories: 170, protein: 4, carbs: 38, fat: 0, fiber: 4, keyMicros: ['بوتاسيوم 700mg', 'فيتامين C 30mg', 'فيتامين B6'], category: 'كربوهيدرات' },
  { name: 'بطاطس حلوة', nameEn: 'Sweet Potato', serving: '200g', calories: 180, protein: 3, carbs: 42, fat: 0, fiber: 6, keyMicros: ['فيتامين A 1400µg', 'بوتاسيوم 500mg', 'فيتامين C 4mg'], category: 'كربوهيدرات' },
  { name: 'شوفان', nameEn: 'Oats', serving: '50g جاف', calories: 190, protein: 7, carbs: 33, fat: 4, fiber: 5, keyMicros: ['ماغنسيوم 70mg', 'حديد 2mg', 'زنك 2mg', 'فيتامين B1'], category: 'كربوهيدرات' },
  { name: 'برغل', nameEn: 'Bulgur Wheat', serving: '1 كوب مطبوخ (180g)', calories: 150, protein: 6, carbs: 34, fat: 0, fiber: 8, keyMicros: ['ماغنسيوم 80mg', 'حديد 1.5mg', 'منجنيز'], category: 'كربوهيدرات' },

  // خضار وفاكهة
  { name: 'ملوخية', nameEn: 'Jew Mallow', serving: '1 كوب (200g)', calories: 60, protein: 5, carbs: 7, fat: 1, fiber: 4, keyMicros: ['حديد 4mg', 'كالسيوم 200mg', 'فيتامين A 300µg', 'فيتامين C 20mg'], category: 'خضار' },
  { name: 'سبانخ', nameEn: 'Spinach', serving: '1 كوب مطبوخ (180g)', calories: 41, protein: 5, carbs: 7, fat: 0, fiber: 4, keyMicros: ['حديد 6mg', 'كالسيوم 245mg', 'فيتامين K 888µg', 'فولات 263µg'], category: 'خضار' },
  { name: 'بامية', nameEn: 'Okra', serving: '1 كوب (100g)', calories: 33, protein: 2, carbs: 7, fat: 0, fiber: 3, keyMicros: ['فيتامين C 23mg', 'فيتامين K 40µg', 'فولات 60µg', 'ماغنسيوم 57mg'], category: 'خضار' },
  { name: 'خس', nameEn: 'Lettuce', serving: '1 كوب (50g)', calories: 8, protein: 1, carbs: 1, fat: 0, fiber: 1, keyMicros: ['فيتامين K 60µg', 'فيتامين A 40µg', 'فولات 20µg'], category: 'خضار' },
  { name: 'خيار', nameEn: 'Cucumber', serving: '1 حبة (200g)', calories: 30, protein: 1, carbs: 6, fat: 0, fiber: 1, keyMicros: ['بوتاسيوم 300mg', 'فيتامين K 10µg', 'ماء 96%'], category: 'خضار' },
  { name: 'طماطم', nameEn: 'Tomato', serving: '1 حبة (150g)', calories: 27, protein: 1, carbs: 6, fat: 0, fiber: 2, keyMicros: ['فيتامين C 15mg', 'بوتاسيوم 350mg', 'لايكوبين', 'فيتامين A 50µg'], category: 'خضار' },
  { name: 'جزر', nameEn: 'Carrot', serving: '1 حبة (100g)', calories: 41, protein: 1, carbs: 10, fat: 0, fiber: 3, keyMicros: ['فيتامين A 835µg', 'بوتاسيوم 320mg', 'فيتامين K 13µg'], category: 'خضار' },
  { name: 'موز', nameEn: 'Banana', serving: '1 حبة (120g)', calories: 105, protein: 1, carbs: 27, fat: 0, fiber: 3, keyMicros: ['بوتاسيوم 420mg', 'فيتامين B6 0.4mg', 'ماغنسيوم 32mg'], category: 'فاكهة' },
  { name: 'برتقال', nameEn: 'Orange', serving: '1 حبة (150g)', calories: 62, protein: 1, carbs: 15, fat: 0, fiber: 3, keyMicros: ['فيتامين C 70mg', 'فولات 40µg', 'بوتاسيوم 240mg'], category: 'فاكهة' },
  { name: 'تمر', nameEn: 'Dates', serving: '3 حبات (60g)', calories: 170, protein: 1, carbs: 45, fat: 0, fiber: 4, keyMicros: ['بوتاسيوم 400mg', 'ماغنسيوم 30mg', 'حديد 1mg'], category: 'فاكهة' },
  { name: 'مانجو', nameEn: 'Mango', serving: '1 حبة (200g)', calories: 120, protein: 1, carbs: 30, fat: 1, fiber: 4, keyMicros: ['فيتامين C 60mg', 'فيتامين A 90µg', 'فولات 60µg'], category: 'فاكهة' },

  // دهون صحية
  { name: 'زيت زيتون', nameEn: 'Olive Oil', serving: '1 ملعقة (15ml)', calories: 120, protein: 0, carbs: 0, fat: 14, fiber: 0, keyMicros: ['فيتامين E 2mg', 'فيتامين K 8µg', 'بوليفينول'], category: 'دهون' },
  { name: 'طحينة', nameEn: 'Tahini', serving: '2 ملعقة (30g)', calories: 180, protein: 5, carbs: 6, fat: 16, fiber: 2, keyMicros: ['كالسيوم 130mg', 'حديد 2.5mg', 'زنك 1mg', 'ماغنسيوم 95mg'], category: 'دهون' },
  { name: 'مكسرات مشكلة', nameEn: 'Mixed Nuts', serving: '30g', calories: 180, protein: 5, carbs: 6, fat: 16, fiber: 2, keyMicros: ['ماغنسيوم 80mg', 'فيتامين E 4mg', 'زنك 2mg', 'أوميجا 3'], category: 'دهون' },
  { name: 'افوكادو', nameEn: 'Avocado', serving: 'نصف حبة (75g)', calories: 120, protein: 2, carbs: 6, fat: 11, fiber: 5, keyMicros: ['بوتاسيوم 360mg', 'فيتامين K 15µg', 'فولات 60µg', 'فيتامين E 1.5mg'], category: 'دهون' },
];

const mealPlans: MealPlan[] = [
  {
    name: 'فطار قوي (قبل التمرين)',
    time: '7:00 صباحاً',
    foods: [
      { item: 'فول مدمس', amount: '1 كوب', calories: 230, protein: 15 },
      { item: 'عيش بلدي أسمر', amount: 'نصف رغيف', calories: 125, protein: 4 },
      { item: 'زيت زيتون', amount: '1 ملعقة', calories: 120, protein: 0 },
      { item: 'بيض بلدي', amount: '2 بيضة', calories: 155, protein: 13 },
      { item: 'موز', amount: '1 حبة', calories: 105, protein: 1 },
    ],
    totalCalories: 735,
    totalProtein: 33,
  },
  {
    name: 'فطار خفيف (شوفان)',
    time: '7:00 صباحاً',
    foods: [
      { item: 'شوفان', amount: '50g', calories: 190, protein: 7 },
      { item: 'زبادي بلدي', amount: '200g', calories: 120, protein: 8 },
      { item: 'مكسرات', amount: '20g', calories: 120, protein: 3 },
      { item: 'موز', amount: '1 حبة', calories: 105, protein: 1 },
      { item: 'عسل', amount: '1 ملعقة', calories: 64, protein: 0 },
    ],
    totalCalories: 599,
    totalProtein: 19,
  },
  {
    name: 'غداء (بعد التمرين)',
    time: '2:00 ظهراً',
    foods: [
      { item: 'صدر فراخ مشوي', amount: '200g', calories: 330, protein: 62 },
      { item: 'أرز مصري', amount: '1 كوب', calories: 260, protein: 5 },
      { item: 'سلطة خضار', amount: '1 طبق', calories: 50, protein: 2 },
      { item: 'زيت زيتون', amount: '1 ملعقة', calories: 120, protein: 0 },
      { item: 'عيش بلدي', amount: 'نصف رغيف', calories: 125, protein: 4 },
    ],
    totalCalories: 885,
    totalProtein: 73,
  },
  {
    name: 'غداء (سمك)',
    time: '2:00 ظهراً',
    foods: [
      { item: 'سمك بلطي مشوي', amount: '200g', calories: 233, protein: 48 },
      { item: 'أرز مصري', amount: '1 كوب', calories: 260, protein: 5 },
      { item: 'ملوخية', amount: '1 كوب', calories: 60, protein: 5 },
      { item: 'طحينة', amount: '1 ملعقة', calories: 90, protein: 3 },
      { item: 'عيش بلدي', amount: 'نصف رغيف', calories: 125, protein: 4 },
    ],
    totalCalories: 768,
    totalProtein: 65,
  },
  {
    name: 'عشاء خفيف',
    time: '8:00 مساءً',
    foods: [
      { item: 'جبنة قريش', amount: '150g', calories: 147, protein: 17 },
      { item: 'طماطم وخيار', amount: 'طبق', calories: 40, protein: 2 },
      { item: 'عيش بلدي أسمر', amount: 'نصف رغيف', calories: 125, protein: 4 },
      { item: 'زيت زيتون', amount: 'نصف ملعقة', calories: 60, protein: 0 },
    ],
    totalCalories: 372,
    totalProtein: 23,
  },
  {
    name: 'وجبة قبل النوم',
    time: '10:00 مساءً',
    foods: [
      { item: 'زبادي بلدي', amount: '200g', calories: 120, protein: 8 },
      { item: 'مكسرات', amount: '20g', calories: 120, protein: 3 },
      { item: 'تمر', amount: '2 حبة', calories: 113, protein: 1 },
    ],
    totalCalories: 353,
    totalProtein: 12,
  },
];

const categories = ['الكل', 'بروتين حيواني', 'بروتين نباتي', 'ألبان', 'كربوهيدرات', 'خضار', 'فاكهة', 'دهون'];

export default function EgyptianFood() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [activeTab, setActiveTab] = useState<'foods' | 'meals'>('foods');

  const filteredFoods = egyptianFoods.filter(food => {
    const matchCategory = selectedCategory === 'الكل' || food.category === selectedCategory;
    const matchSearch = food.name.includes(searchTerm) || food.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const dailyTotal = mealPlans.reduce((acc, meal) => ({
    calories: acc.calories + meal.totalCalories,
    protein: acc.protein + meal.totalProtein,
  }), { calories: 0, protein: 0 });

  return (
    <div className="max-w-5xl mx-auto" dir="rtl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          🇪🇬 الأكل المصري
        </h2>
        <p className="text-gray-400 text-lg">
          دليلك الغذائي بالأكل المتاح في مصر - السعرات والماكروز والميكروز
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveTab('foods')}
          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'foods'
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🥗 الأطعمة وقيمها الغذائية
        </button>
        <button
          onClick={() => setActiveTab('meals')}
          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'meals'
              ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🍽️ وجبات مقترحة
        </button>
      </div>

      {activeTab === 'foods' && (
        <>
          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث عن أكلة... (مثلاً: فول، فراخ، أرز)"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 text-right"
              dir="rtl"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredFoods.map((food, i) => (
              <button
                key={i}
                onClick={() => setSelectedFood(selectedFood?.name === food.name ? null : food)}
                className={`text-right bg-gray-800/50 rounded-xl p-4 border transition-all ${
                  selectedFood?.name === food.name
                    ? 'border-green-500 ring-1 ring-green-500/30'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">{food.category}</span>
                  <div className="text-left">
                    <span className="text-white font-bold text-lg">{food.calories}</span>
                    <span className="text-gray-500 text-xs mr-1">سعرة</span>
                  </div>
                </div>
                <h4 className="text-white font-bold mb-1">{food.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{food.serving}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-red-900/20 rounded p-1">
                    <div className="text-red-400 text-sm font-bold">{food.protein}g</div>
                    <div className="text-gray-500 text-[10px]">بروتين</div>
                  </div>
                  <div className="bg-yellow-900/20 rounded p-1">
                    <div className="text-yellow-400 text-sm font-bold">{food.carbs}g</div>
                    <div className="text-gray-500 text-[10px]">كارب</div>
                  </div>
                  <div className="bg-purple-900/20 rounded p-1">
                    <div className="text-purple-400 text-sm font-bold">{food.fat}g</div>
                    <div className="text-gray-500 text-[10px]">دهون</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Food Detail */}
          {selectedFood && (
            <div className="mt-6 bg-gray-800/50 rounded-2xl p-6 border border-green-700/30">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedFood.name}</h3>
                  <p className="text-gray-400 text-sm">{selectedFood.nameEn} - {selectedFood.serving}</p>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-green-400">{selectedFood.calories}</div>
                  <div className="text-gray-500 text-xs">سعرة حرارية</div>
                </div>
              </div>

              {/* Macros */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="bg-red-900/20 rounded-lg p-3 text-center border border-red-800/30">
                  <div className="text-xl font-bold text-red-400">{selectedFood.protein}g</div>
                  <div className="text-xs text-gray-400">بروتين</div>
                </div>
                <div className="bg-yellow-900/20 rounded-lg p-3 text-center border border-yellow-800/30">
                  <div className="text-xl font-bold text-yellow-400">{selectedFood.carbs}g</div>
                  <div className="text-xs text-gray-400">كربوهيدرات</div>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-3 text-center border border-purple-800/30">
                  <div className="text-xl font-bold text-purple-400">{selectedFood.fat}g</div>
                  <div className="text-xs text-gray-400">دهون</div>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3 text-center border border-green-800/30">
                  <div className="text-xl font-bold text-green-400">{selectedFood.fiber}g</div>
                  <div className="text-xs text-gray-400">ألياف</div>
                </div>
              </div>

              {/* Micros */}
              <div>
                <h4 className="text-white font-bold mb-2">🔬 العناصر المهمة (ميكروز):</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFood.keyMicros.map((micro, i) => (
                    <span key={i} className="bg-blue-900/20 text-blue-300 text-xs px-3 py-1.5 rounded-full border border-blue-800/30">
                      {micro}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === 'meals' && (
        <>
          {/* Daily Summary */}
          <div className="bg-gradient-to-br from-orange-900/20 to-gray-800/50 rounded-2xl p-6 border border-orange-700/30 mb-6">
            <h3 className="text-lg font-bold text-white mb-3">📊 إجمالي اليوم (كل الوجبات)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{dailyTotal.calories}</div>
                <div className="text-gray-400 text-sm">سعرة حرارية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">{dailyTotal.protein}g</div>
                <div className="text-gray-400 text-sm">بروتين</div>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3 text-center">
              * مثال ليوم تدريب - عدّل الكميات حسب احتياجك
            </p>
          </div>

          {/* Meal Plans */}
          <div className="space-y-4">
            {mealPlans.map((meal, i) => (
              <div key={i} className="bg-gray-800/50 rounded-2xl p-5 border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-white font-bold text-lg">{meal.name}</h4>
                    <p className="text-gray-500 text-sm">{meal.time}</p>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-orange-400 font-bold">{meal.totalCalories} سعرة</div>
                    <div className="text-xs text-red-400">{meal.totalProtein}g بروتين</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {meal.foods.map((food, j) => (
                    <div key={j} className="flex justify-between items-center bg-gray-700/30 rounded-lg px-3 py-2">
                      <span className="text-gray-300 text-sm">{food.item}</span>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-gray-400">{food.amount}</span>
                        <span className="text-orange-400">{food.calories} سعرة</span>
                        <span className="text-red-400">{food.protein}g بروتين</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-6 bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">💡 نصائح غذائية</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300 text-sm">الفول + العيش البلدي = بروتين كامل (كل الأحماض الأمينية)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300 text-sm">السردين أرخص مصدر للأوميجا 3 - كلّه مرة أو اتنين في الأسبوع</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300 text-sm">الكبدة أغنى مصدر للحديد وفيتامين B12 - مرة في الأسبوع كافية</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300 text-sm">الطحينة فيها كالسيوم وزنك كويس - حلوة مع الفول أو السلطة</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300 text-sm">المكسرات المصرية (فول سوداني، سمسم) رخيصة وفيها بروتين ودهون صحية</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400">⚠</span>
                <p className="text-gray-300 text-sm">قلّل الزيت في الطبخ - ملعقة زيت زيتون على الأكل أحسن من القلي العميق</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300 text-sm">الجبنة القريش أرخص مصدر بروتين عالي الجودة في مصر</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
