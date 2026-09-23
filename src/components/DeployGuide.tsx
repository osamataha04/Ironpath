import { useState } from 'react';

interface ContentBlock {
  type: string;
  text?: string;
  items?: string[];
  url?: string;
  code?: string;
  label?: string;
  note?: string;
  files?: string[];
}

interface Step {
  title: string;
  titleEn: string;
  icon: string;
  content: ContentBlock[];
}

export default function DeployGuide() {
  const [currentStep, setCurrentStep] = useState(0);
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const steps: Step[] = [
    {
      title: 'إنشاء حساب GitHub',
      titleEn: 'Step 1: Create a GitHub Account',
      icon: '📝',
      content: [
        {
          type: 'text',
          text: 'لو مش عندك حساب GitHub، هتعمل واحد دلوقتي. لو عندك حساب، اتخطى للخطوة اللي بعدها.'
        },
        {
          type: 'text',
          text: 'If you don\'t have a GitHub account, create one now. If you already have one, skip to the next step.'
        },
        {
          type: 'steps',
          items: [
            'افتح المتصفح وروح على: github.com',
            'Open your browser and go to: github.com',
          ]
        },
        {
          type: 'link',
          url: 'https://github.com/signup',
          text: '👈 اضغط هنا للتسجيل (Sign Up)'
        },
        {
          type: 'steps',
          items: [
            'دخل إيميلك (أو استخدم حساب Google)',
            'Enter your email (or use Google account)',
            'اختار باسورد قوية',
            'Choose a strong password',
            'اختار يوزرنيم (ده هيكون جزء من لينك الموقع بتاعك)',
            'Choose a username (this will be part of your website URL)',
            'كمل الخطوات واضغط "Create account"',
            'Complete the steps and click "Create account"',
            'اختار "Free" plan',
            'Choose the "Free" plan',
          ]
        },
        {
          type: 'tip',
          text: '💡 اليوزرنيم مهم! لو اسمك مثلاً "ahmed"، الموقع بتاعك هيكون: ahmed.github.io/ironpath'
        },
      ]
    },
    {
      title: 'تحميل Git على الكمبيوتر',
      titleEn: 'Step 2: Install Git on Your Computer',
      icon: '⬇️',
      content: [
        {
          type: 'text',
          text: 'Git هو برنامج بيساعدك ترفع الكود على GitHub. لازم تنزله على جهازك.'
        },
        {
          type: 'text',
          text: 'Git is a program that helps you upload code to GitHub. You need to install it on your device.'
        },
        {
          type: 'heading',
          text: '🪟 لو على Windows:'
        },
        {
          type: 'link',
          url: 'https://git-scm.com/download/win',
          text: '👈 حمّل Git for Windows من هنا'
        },
        {
          type: 'steps',
          items: [
            'شغّل الملف اللي نزلته',
            'Run the downloaded file',
            'اضغط "Next" في كل الخيارات (الافتراضي كويس)',
            'Click "Next" on all options (defaults are fine)',
            'لما يخلص، اقفل الويندوز وافتحه تاني (عشان Git يشتغل)',
            'When done, close and reopen Command Prompt (so Git works)',
          ]
        },
        {
          type: 'heading',
          text: '🍎 لو على Mac:'
        },
        {
          type: 'steps',
          items: [
            'افتح Terminal',
            'Open Terminal',
            'اكتب: git --version',
            'Type: git --version',
            'لو طلب تحميل، اضغط "Install" وسيه يخلص',
            'If it asks to install, click "Install" and let it finish',
          ]
        },
        {
          type: 'heading',
          text: '📱 لو على تليفون (Android/iPhone):'
        },
        {
          type: 'text',
          text: 'على التليفون مش هتحتاج Git. هنستخدم طريقة تانية أسهل - شوف الخطوة 4.'
        },
        {
          type: 'text',
          text: 'On phone you won\'t need Git. We\'ll use an easier method - see Step 4.'
        },
        {
          type: 'tip',
          text: '💡 للتأكد إن Git اتنزّل: افتح Command Prompt (Windows) أو Terminal (Mac) واكتب: git --version - لازم يطلعلك رقم version'
        },
      ]
    },
    {
      title: 'إنشاء Repository جديد على GitHub',
      titleEn: 'Step 3: Create a New Repository on GitHub',
      icon: '📁',
      content: [
        {
          type: 'text',
          text: 'الـ Repository هو مجلد المشروع بتاعك على GitHub. هنعمل واحد جديد.'
        },
        {
          type: 'text',
          text: 'A Repository is your project folder on GitHub. Let\'s create a new one.'
        },
        {
          type: 'steps',
          items: [
            'سجّل دخول على github.com',
            'Log in to github.com',
            'اضغط على زرار "+" في الأعلى (أو روح على: github.com/new)',
            'Click the "+" button at the top (or go to: github.com/new)',
            'في خانة "Repository name" اكتب: ironpath',
            'In "Repository name" type: ironpath',
            'اختار "Public" (عام)',
            'Choose "Public"',
            '✅ علّم على "Add a README file"',
            '✅ Check "Add a README file"',
            'اضغط الزرار الأخضر "Create repository"',
            'Click the green "Create repository" button',
          ]
        },
        {
          type: 'link',
          url: 'https://github.com/new',
          text: '👈 اضغط هنا لإنشاء Repository جديد'
        },
        {
          type: 'tip',
          text: '💡 اسم الـ Repository هيكون جزء من لينك الموقع. مثلاً: yourname.github.io/ironpath'
        },
      ]
    },
    {
      title: 'رفع الكود على GitHub (من الكمبيوتر)',
      titleEn: 'Step 4A: Upload Code from Computer',
      icon: '💻',
      content: [
        {
          type: 'text',
          text: 'لو عندك الكود على الكمبيوتر، هنرفعه على GitHub باستخدام Git.'
        },
        {
          type: 'text',
          text: 'If you have the code on your computer, we\'ll upload it using Git.'
        },
        {
          type: 'heading',
          text: 'الخطوات بالترتيب (انسخ كل سطر والصقه في Command Prompt / Terminal):'
        },
        {
          type: 'heading',
          text: 'أولاً: روح لمجلد المشروع بتاعك'
        },
        {
          type: 'code',
          code: 'cd path/to/your/project',
          label: 'cd-command',
          note: 'غيّر path/to/your/project للمكان الحقيقي للمشروع. مثلاً: cd Desktop/ironpath'
        },
        {
          type: 'heading',
          text: 'ثانياً: هيّأ Git في المجلد'
        },
        {
          type: 'code',
          code: 'git init',
          label: 'git-init',
        },
        {
          type: 'heading',
          text: 'ثالثاً: ضيف كل الملفات'
        },
        {
          type: 'code',
          code: 'git add .',
          label: 'git-add',
        },
        {
          type: 'heading',
          text: 'رابعاً: اعمل commit (احفظ التغييرات)'
        },
        {
          type: 'code',
          code: 'git commit -m "IronPath - Gym & Diet Planner"',
          label: 'git-commit',
        },
        {
          type: 'heading',
          text: 'خامساً: غيّر اسم الـ branch لـ main'
        },
        {
          type: 'code',
          code: 'git branch -M main',
          label: 'git-branch',
        },
        {
          type: 'heading',
          text: 'سادساً: اربط المشروع بالـ Repository على GitHub'
        },
        {
          type: 'code',
          code: 'git remote add origin https://github.com/YOUR_USERNAME/ironpath.git',
          label: 'git-remote',
          note: '⚠️ غيّر YOUR_USERNAME لاسم حسابك على GitHub!'
        },
        {
          type: 'heading',
          text: 'سابعاً: ارفع الكود!'
        },
        {
          type: 'code',
          code: 'git push -u origin main',
          label: 'git-push',
          note: 'هيسألك عن اليوزرنيم والباسورد. استخدم Personal Access Token (مش الباسورد العادي)'
        },
        {
          type: 'warning',
          text: '⚠️ لما يسألك عن Password، GitHub مش بيقبل الباسورد العادي. لازم تعمل Personal Access Token. شوف الخطوة اللي بعدها.'
        },
      ]
    },
    {
      title: 'رفع الكود من التليفون (بدون Git)',
      titleEn: 'Step 4B: Upload Code from Phone (No Git)',
      icon: '📱',
      content: [
        {
          type: 'text',
          text: 'لو على تليفون، أسهل طريقة إنك ترفع الملفات يدوي على GitHub.'
        },
        {
          type: 'text',
          text: 'If on phone, the easiest way is to upload files manually to GitHub.'
        },
        {
          type: 'steps',
          items: [
            'روح على الـ Repository اللي عملته (github.com/YOUR_USERNAME/ironpath)',
            'Go to your repository (github.com/YOUR_USERNAME/ironpath)',
            'اضغط "Add file" → "Upload files"',
            'Click "Add file" → "Upload files"',
            'اسحب الملفات أو اختارها من جهازك',
            'Drag files or select them from your device',
            'في الأسفل اكتب وصف واضغط "Commit changes"',
            'Scroll down, write a description and click "Commit changes"',
          ]
        },
        {
          type: 'heading',
          text: '📂 الملفات اللي لازم ترفعها:'
        },
        {
          type: 'text',
          text: 'لازم ترفع كل الملفات والمجلدات دي بالترتيب:'
        },
        {
          type: 'filelist',
          files: [
            '📄 index.html',
            '📄 package.json',
            '📄 package-lock.json',
            '📄 vite.config.js',
            '📄 tsconfig.json',
            '📄 README.md',
            '📁 src/ (كل الملفات جواه)',
            '📁 public/ (كل الملفات جواه)',
            '📁 .github/ (كل الملفات جواه - مهم للـ deployment)',
          ]
        },
        {
          type: 'tip',
          text: '💡 لو الملفات كتير، ارفعها على ZIP وفكّها، أو استخدم طريقة أسهل: انسخ الكود من هنا وارفعه ملف ملف.'
        },
        {
          type: 'warning',
          text: '⚠️ مهم جداً: لازم ترفع مجلد .github/workflows/deploy.yml عشان الـ deployment يشتغل تلقائي!'
        },
      ]
    },
    {
      title: 'عمل Personal Access Token',
      titleEn: 'Step 5: Create Personal Access Token (for Git push)',
      icon: '🔑',
      content: [
        {
          type: 'text',
          text: 'GitHub مش بيسمح تستخدم الباسورد العادي مع Git. لازم تعمل Token.'
        },
        {
          type: 'text',
          text: 'GitHub doesn\'t allow regular passwords with Git. You need to create a Token.'
        },
        {
          type: 'steps',
          items: [
            'روح على: github.com/settings/tokens',
            'Go to: github.com/settings/tokens',
            'اضغط "Generate new token" → "Generate new token (classic)"',
            'Click "Generate new token" → "Generate new token (classic)"',
            'في "Note" اكتب: ironpath',
            'In "Note" type: ironpath',
            'في "Expiration" اختار: 90 days (أو No expiration)',
            'In "Expiration" choose: 90 days (or No expiration)',
            '✅ علّم على "repo" (كل الخيارات تحته)',
            '✅ Check "repo" (all options under it)',
            'اضغط "Generate token" في الأسفل',
            'Click "Generate token" at the bottom',
            '⚠️ انسخ التوكن اللي ظاهر (هيظهر مرة واحدة بس!)',
            '⚠️ Copy the token shown (it appears only once!)',
            'لما Git يسألك عن Password، الصق التوكن هنا',
            'When Git asks for Password, paste the token here',
          ]
        },
        {
          type: 'link',
          url: 'https://github.com/settings/tokens',
          text: '👈 اضغط هنا لعمل Token جديد'
        },
        {
          type: 'warning',
          text: '⚠️ التوكن زي الباسورد - متشاركهوش مع حد! لو ضيعته، اعمل واحد جديد.'
        },
      ]
    },
    {
      title: 'تفعيل GitHub Pages',
      titleEn: 'Step 6: Enable GitHub Pages',
      icon: '🚀',
      content: [
        {
          type: 'text',
          text: 'دلوقتي الكود على GitHub. هنفعّل الـ Pages عشان الموقع يشتغل.'
        },
        {
          type: 'text',
          text: 'Now the code is on GitHub. Let\'s enable Pages so the website works.'
        },
        {
          type: 'steps',
          items: [
            'روح على الـ Repository بتاعك على GitHub',
            'Go to your repository on GitHub',
            'اضغط على "Settings" (فوق يمين، أيقونة الترس ⚙️)',
            'Click "Settings" (top right, gear icon ⚙️)',
            'في القائمة على الشمال، اضغط "Pages"',
            'In the left menu, click "Pages"',
            'تحت "Source" اختار: "GitHub Actions"',
            'Under "Source" choose: "GitHub Actions"',
            'استنى 1-2 دقيقة...',
            'Wait 1-2 minutes...',
            'اضغط F5 أو اعمل refresh',
            'Press F5 or refresh',
            'هتلاقي لينك الموقع ظاهر فوق!',
            'You\'ll see your website URL at the top!',
          ]
        },
        {
          type: 'success',
          text: '🎉 مبروك! الموقع بتاعك دلوقتي على: https://YOUR_USERNAME.github.io/ironpath/'
        },
        {
          type: 'tip',
          text: '💡 لو مش شغال فوراً، استنى 2-3 دقائق. الـ GitHub Actions بيحتاج وقت يبني الموقع.'
        },
        {
          type: 'tip',
          text: '💡 تقدر تتابع حالة الـ deployment من: Repository → Actions tab'
        },
      ]
    },
    {
      title: 'تغيير إعدادات Vite (مهم!)',
      titleEn: 'Step 7: Update Vite Config (Important!)',
      icon: '⚙️',
      content: [
        {
          type: 'text',
          text: 'لازم تعدّل ملف vite.config.js عشان الموقع يشتغل على GitHub Pages.'
        },
        {
          type: 'text',
          text: 'You need to edit vite.config.js so the website works on GitHub Pages.'
        },
        {
          type: 'heading',
          text: 'افتح ملف vite.config.js وعدّله ليكون كده:'
        },
        {
          type: 'code',
          code: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/ironpath/',  // ← اسم الـ Repository بتاعك
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});`,
          label: 'vite-config',
          note: '⚠️ غيّر /ironpath/ لاسم الـ Repository بتاعك! لو اسمه gym-app يبقى /gym-app/'
        },
        {
          type: 'steps',
          items: [
            'بعد ما تعدّل الملف، ارفعه تاني على GitHub',
            'After editing the file, upload it again to GitHub',
            'لو على الكمبيوتر:',
            'If on computer:',
          ]
        },
        {
          type: 'code',
          code: 'git add .\ngit commit -m "Update vite config for GitHub Pages"\ngit push',
          label: 'git-update',
        },
        {
          type: 'steps',
          items: [
            'لو على التليفون: روح على الملف على GitHub واضغط أيقونة القلم ✏️ للتعديل',
            'If on phone: Go to the file on GitHub and click the pencil icon ✏️ to edit',
          ]
        },
        {
          type: 'tip',
          text: '💡 بعد أي تعديل، GitHub هيعمل build و deploy تلقائي. استنى 1-2 دقيقة وشوف الموقع.'
        },
      ]
    },
    {
      title: 'مشاركة الموقع',
      titleEn: 'Step 8: Share Your Website',
      icon: '🔗',
      content: [
        {
          type: 'success',
          text: '🎉 الموقع بتاعك جاهز! شاركه مع أي حد!'
        },
        {
          type: 'heading',
          text: 'اللينك بتاعك هيكون:'
        },
        {
          type: 'code',
          code: 'https://YOUR_USERNAME.github.io/ironpath/',
          label: 'final-url',
          note: 'غيّر YOUR_USERNAME لاسم حسابك على GitHub'
        },
        {
          type: 'heading',
          text: '📱 مميزات الموقع:'
        },
        {
          type: 'steps',
          items: [
            '✅ يشتغل على أي جهاز (تليفون، تابلت، لابتوب)',
            '✅ Works on any device (phone, tablet, laptop)',
            '✅ البيانات محفوظة على جهاز كل مستخدم',
            '✅ Data saved on each user\'s device',
            '✅ مفيش سيرفر - مجاني 100%',
            '✅ No server - 100% free',
            '✅ أي حد يفتح اللينك يقدر يستخدمه',
            '✅ Anyone who opens the link can use it',
          ]
        },
        {
          type: 'heading',
          text: '🔄 لما تحب تعدّل حاجة:'
        },
        {
          type: 'steps',
          items: [
            'عدّل الكود على جهازك',
            'Edit code on your device',
            'اكتب في Command Prompt:',
            'Type in Command Prompt:',
          ]
        },
        {
          type: 'code',
          code: 'git add .\ngit commit -m "وصف التعديل"\ngit push',
          label: 'update-code',
        },
        {
          type: 'text',
          text: 'GitHub هيعمل build و deploy تلقائي خلال 1-2 دقيقة!'
        },
        {
          type: 'text',
          text: 'GitHub will build and deploy automatically within 1-2 minutes!'
        },
      ]
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          🚀 دليل النشر على GitHub Pages
        </h2>
        <p className="text-gray-400 text-lg">
          Step-by-step guide to deploy your website for free
        </p>
        <p className="text-gray-500 text-sm mt-2">
          اتبع الخطوات بالترتيب - هتلاقي كل حاجة موضحة
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>{currentStep + 1} / {steps.length}</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setCurrentStep(i)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              i === currentStep
                ? 'bg-blue-600 text-white'
                : i < currentStep
                ? 'bg-green-900/30 text-green-400 border border-green-800/30'
                : 'bg-gray-700 text-gray-400'
            }`}
          >
            <span>{step.icon}</span>
            <span className="hidden sm:inline">{i + 1}</span>
          </button>
        ))}
      </div>

      {/* Current Step Content */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{steps[currentStep].icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{steps[currentStep].title}</h3>
            <p className="text-gray-400 text-sm">{steps[currentStep].titleEn}</p>
          </div>
        </div>

        <div className="space-y-4">
          {steps[currentStep].content.map((block, i) => {
            switch (block.type) {
              case 'text':
                return <p key={i} className="text-gray-300 text-sm leading-relaxed">{block.text}</p>;
              case 'heading':
                return <h4 key={i} className="text-white font-bold text-sm mt-4">{block.text}</h4>;
              case 'steps':
                return (
                  <div key={i} className="bg-gray-700/30 rounded-lg p-4 space-y-2">
                    {block.items!.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="text-blue-400 text-xs mt-1">
                          {j % 2 === 0 ? `${Math.floor(j/2) + 1}.` : ''}
                        </span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                );
              case 'link':
                return (
                  <a
                    key={i}
                    href={block.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600/20 text-blue-400 border border-blue-600/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600/30 transition-colors"
                  >
                    {block.text}
                  </a>
                );
              case 'code':
                return (
                  <div key={i} className="relative">
                    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto border border-gray-700">
                      <code className="text-green-400 text-sm font-mono whitespace-pre">{block.code}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(block.code!, block.label!)}
                      className="absolute top-2 left-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded transition-colors"
                    >
                      {copiedText === block.label ? '✓ Copied!' : '📋 Copy'}
                    </button>
                    {block.note && (
                      <p className="text-yellow-400/80 text-xs mt-2">{block.note}</p>
                    )}
                  </div>
                );
              case 'tip':
                return (
                  <div key={i} className="bg-blue-900/20 rounded-lg p-3 border border-blue-800/30">
                    <p className="text-blue-300 text-sm">{block.text}</p>
                  </div>
                );
              case 'warning':
                return (
                  <div key={i} className="bg-red-900/20 rounded-lg p-3 border border-red-800/30">
                    <p className="text-red-300 text-sm">{block.text}</p>
                  </div>
                );
              case 'success':
                return (
                  <div key={i} className="bg-green-900/20 rounded-lg p-4 border border-green-800/30">
                    <p className="text-green-300 text-sm font-medium">{block.text}</p>
                  </div>
                );
              case 'filelist':
                return (
                  <div key={i} className="bg-gray-700/30 rounded-lg p-4">
                    <div className="space-y-1">
                      {block.files!.map((file, j) => (
                        <div key={j} className="text-gray-300 text-sm font-mono">{file}</div>
                      ))}
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← السابق
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          التالي →
        </button>
      </div>

      {/* Quick Summary */}
      <div className="mt-8 bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">📋 ملخص سريع (Quick Summary)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-white text-sm font-medium">1. اعمل حساب GitHub</div>
            <div className="text-gray-500 text-xs">Create GitHub account</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-white text-sm font-medium">2. نزّل Git (كمبيوتر بس)</div>
            <div className="text-gray-500 text-xs">Install Git (computer only)</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-white text-sm font-medium">3. اعمل Repository جديد</div>
            <div className="text-gray-500 text-xs">Create new repository</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-white text-sm font-medium">4. ارفع الكود</div>
            <div className="text-gray-500 text-xs">Upload code</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-white text-sm font-medium">5. فعّل GitHub Pages</div>
            <div className="text-gray-500 text-xs">Enable GitHub Pages</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="text-white text-sm font-medium">6. شارك اللينك!</div>
            <div className="text-gray-500 text-xs">Share the link!</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-800/30">
          <p className="text-green-300 text-sm text-center">
            🎉 الموقع هيكون مجاني 100% ومفتوح لأي حد في العالم!
          </p>
          <p className="text-green-400/60 text-xs text-center mt-1">
            Your website will be 100% free and accessible to anyone in the world!
          </p>
        </div>
      </div>
    </div>
  );
}
