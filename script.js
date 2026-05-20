/**
 * FitCalc Pro — Core Application Script
 * Optimized Sync for Claude's HTML & Multilingual Engine
 */

// ==========================================
// 1. TRANSLATION DICTIONARY (i18n)
// ==========================================
const translations = {
  en: {
    appName: "FitCalc Pro",
    heroLine1: "Your Complete",
    heroLine2: "Fitness Dashboard",
    heroSub: "Calculate BMI, daily calories, gym macros, and water intake — then get a personalized health guide crafted just for your body.",
    tabBMI: "BMI & Ideal Weight",
    tabCalories: "Calories & TDEE",
    tabMacros: "Gym Macros",
    tabWater: "Water Intake",
    bmiTitle: "BMI & Ideal Weight",
    bmiDesc: "Enter your measurements to calculate your Body Mass Index and ideal weight range.",
    unitSystem: "Unit System",
    metric: "Metric (kg/cm)",
    imperial: "Imperial (lbs/in)",
    weight: "Weight",
    height: "Height",
    age: "Age",
    gender: "Gender",
    male: "Male",
    female: "Female",
    calculate: "Calculate",
    resultPlaceholder: "Your results will appear here after calculation.",
    bmiLabel: "BMI",
    underweight: "Underweight",
    healthy: "Healthy",
    overweight: "Overweight",
    obese: "Obese",
    idealWeightTitle: "Ideal Weight Range",
    average: "Average",
    exportReport: "Download Report",
    calTitle: "Daily Calories & TDEE",
    calDesc: "Uses the Mifflin-St Jeor Equation to estimate your Basal Metabolic Rate and Total Daily Energy Expenditure.",
    activityLevel: "Activity Level",
    actSedentary: "Sedentary (desk job, little/no exercise)",
    actLight: "Lightly Active (1–3 days/week)",
    actModerate: "Moderately Active (3–5 days/week)",
    actVery: "Very Active (6–7 days/week)",
    actAthlete: "Athlete (2x/day, intense training)",
    goal: "Your Goal",
    goalLose: "🔥 Lose Weight",
    goalMaintain: "⚖️ Maintain Weight",
    goalGain: "💪 Gain Muscle",
    bmrLabel: "BMR (Base)",
    bmrHint: "Calories at rest",
    tdeeLabel: "TDEE (Daily)",
    tdeeHint: "With your activity",
    caloriesPerDay: "calories / day",
    calBreakdownTitle: "Weekly Goal Timeline",
    weekly: "Weekly",
    monthly: "Monthly",
    macroTitle: "Gym Macros Calculator",
    macroDesc: "Break down your daily calories into the optimal grams of Protein, Carbohydrates, and Fats for your fitness goal.",
    macroTDEELabel: "Your TDEE / Daily Calories",
    macroTDEEHint: "Use your result from the Calories tab, or enter manually.",
    goalCut: "🔥 Cut (Fat Loss)",
    goalBulk: "💪 Bulk (Muscle Gain)",
    bodyType: "Body Type / Preference",
    ecto: "Ectomorph",
    meso: "Mesomorph",
    endo: "Endomorph",
    protein: "Protein",
    carbs: "Carbohydrates",
    fats: "Fats",
    perMealTitle: "Per Meal Split (3 meals)",
    waterTitle: "Daily Water Intake",
    waterDesc: "Calculate how much water your body needs each day based on your weight, activity, and environment.",
    climate: "Climate / Environment",
    climateCool: "Cool / Temperate",
    climateNormal: "Normal",
    climateHot: "Hot / Humid",
    climateVeryHot: "Very Hot / Desert",
    litersPerDay: "Liters / Day",
    glassesPerDay: "Glasses / Day",
    waterScheduleTitle: "Daily Drinking Schedule",
    waterTipsTitle: "Hydration Tips",
    disclaimer: "⚠️ This tool is for informational purposes only. Always consult a qualified healthcare provider before making significant changes to your diet or exercise routine.",
    
    // Dynamic SEO Articles
    articleUnderweightTitle: "💡 Your Custom Guide: Healthy Bulking & Muscle Gain",
    articleUnderweightText: `
      <h3>Understanding Underweight Status</h3>
      <p>Your BMI indicates that you are currently in the underweight range. To build a strong, healthy physique, your goal should be a progressive and clean calorie surplus, combined with structured resistance training.</p>
    `,
    articleHealthyTitle: "💡 Your Custom Guide: Fitness Optimization & Recomposition",
    articleHealthyText: `
      <h3>Celebrating a Healthy BMI Range</h3>
      <p>Great job! Your current BMI places you within the optimal healthy range. At this stage, your focus should shift toward body recomposition (building muscle while shedding fat).</p>
    `,
    articleOverweightTitle: "💡 Your Custom Guide: Sustainable Fat Loss & Metabolism Boosting",
    articleOverweightText: `
      <h3>Managing Overweight Status Mindfully</h3>
      <p>Your calculated BMI falls within the overweight/obese spectrum. This is a highly accurate baseline from which we will launch a sustainable lifestyle transformation focused on burning fat.</p>
    `
  },
  ar: {
    appName: "فيت كالك برو",
    heroLine1: "لوحة تحكمك",
    heroLine2: "الصحية المتكاملة",
    heroSub: "احسب مؤشر كتلة جسمك، سعراتك اليومية، نسب المغذيات الكبرى (الماكروس)، وااحتياجك من المياه — واحصل على دليل صحي مخصص ومصمم خصيصاً لطبيعة جسمك.",
    tabBMI: "الكتلة والوزن المثالي",
    tabCalories: "السعرات والـ TDEE",
    tabMacros: "ماكروس الجيم",
    tabWater: "الاحتياج المائي",
    bmiTitle: "مؤشر كتلة الجسم والوزن المثالي",
    bmiDesc: "أدخل قياساتك الحالية لحساب مؤشر كتلة الجسم والتعرف على نطاق الوزن المثالي الطبيعي لك.",
    unitSystem: "نظام القياس",
    metric: "متري (كجم/سم)",
    imperial: "إمبراطوري (رطل/بوصة)",
    weight: "الوزن",
    height: "الطول",
    age: "العمر",
    gender: "الجنس",
    male: "ذكر",
    female: "أنثى",
    calculate: "احسب الآن",
    resultPlaceholder: "ستظهر نتائج حساباتك الدقيقة هنا فوراً بعد الضغط على الحساب.",
    bmiLabel: "الكتلة",
    underweight: "نحافة",
    healthy: "وزن مثالي",
    overweight: "وزن زائد",
    obese: "سمنة",
    idealWeightTitle: "نطاق الوزن المثالي المقترح",
    average: "المعدل الوسطي",
    exportReport: "تحميل التقرير",
    calTitle: "حساب السعرات اليومية والـ TDEE",
    calDesc: "نعتمد على معادلة (Mifflin-St Jeor) العالمية لحساب معدل الأيض الأساسي وإجمالي الطاقة المستهلكة يومياً.",
    activityLevel: "معدل النشاط اليومي",
    actSedentary: "خامل (عمل مكتبي، بدون تمارين)",
    actLight: "نشاط خفيف (تمارين من 1-3 أيام/أسبوع)",
    actModerate: "نشاط متوسط (تمارين من 3-5 أيام/أسبوع)",
    actVery: "نشط جداً (تمارين من 6-7 أيام/أسبوع)",
    actAthlete: "رياضي محترف (تمارين مكثفة مرتين يومياً)",
    goal: "الهدف الرياضي الحالي",
    goalLose: "🔥 خسارة وزن وتخسيس",
    goalMaintain: "⚖️ المحافظة على الوزن",
    goalGain: "💪 تضخيم وبناء عضلات",
    bmrLabel: "الأيض الأساسي (BMR)",
    bmrHint: "حرق الجسم في حالة الراحة",
    tdeeLabel: "الاحتياج اليومي (TDEE)",
    tdeeHint: "السعرات شاملة نشاطك وحركتك",
    caloriesPerDay: "سعرة حرارية / يوم",
    calBreakdownTitle: "الخطة الزمنية المتوقعة للهدف",
    weekly: "أسبوعياً",
    monthly: "شهرياً",
    macroTitle: "حاسبة نسب المغذيات (الماكروس)",
    macroDesc: "تقسيم سعراتك الحرارية اليومية إلى جرامات دقيقة من البروتين، الكربوهيدرات، والدهون لتناسب هدفك الرياضي.",
    macroTDEELabel: "إجمالي السعرات اليومية المستهدفة",
    macroTDEEHint: "أدخل السعرات الناتجة من علامة تبويب السعرات، أو اكتبها يدوياً.",
    goalCut: "🔥 تنشيف وخسارة دهون",
    goalBulk: "💪 تضخيم وبناء عضلات",
    bodyType: "طبيعة وشكل الجسم",
    ecto: "إكتومورف (نحيف)",
    meso: "ميزومورف (عضلي)",
    endo: "إندومورف (قابل لتخزين الدهون)",
    protein: "البروتين",
    carbs: "الكربوهيدرات",
    fats: "الدهون الصحية",
    perMealTitle: "تقسيم الوجبات المقترح (على 3 وجبات)",
    waterTitle: "حاسبة الاحتياج المائي اليومي",
    waterDesc: "تعرف على كمية المياه التي يحتاجها جسمك للبقاء رطباً بناءً على وزنك ومعدل مجهودك وطبيعة المناخ.",
    climate: "المناخ والبيئة المحيطة",
    climateCool: "بارد / معتدل شديد",
    climateNormal: "طبيعي / معتدل",
    climateHot: "حار / رطوبة عالية",
    climateVeryHot: "حار جداً / مناخ صحراوي",
    litersPerDay: "لتر / يوم",
    glassesPerDay: "كوب / يوم",
    waterScheduleTitle: "الجدول الزمني المقترح لشرب الماء",
    waterTipsTitle: "نصائح هيدراتية هامة",
    disclaimer: "⚠️ تنبيه طبي وإخلاء مسؤولية: هذه الأداة للاسترشاد المعرفي فقط. يجب دائماً استشارة طبيب متخصص أو أخصائي تغذية معتمد.",
    
    articleUnderweightTitle: "💡 دليلك المخصص: التضخيم الصحي وزيادة الكتلة العضلية للنحافة",
    articleUnderweightText: `
      <h3>فهم حالة النحافة ومؤشر الـ BMI</h3>
      <p>يشير مؤشر كتلة جسمك الحالي إلى وجود نحافة عن المعدل الطبيعي. لبناء جسد قوي ومتناسق وصحي، يجب أن يكون هدفك الرئيسي هو إحداث فائض سعرات حرارية نظيف ومدروس مع الالتزام بتمارين المقاومة والأوزان.</p>
    `,
    articleHealthyTitle: "💡 دليلك المخصص: تحسين الأداء الرياضي وتنسيق القوام",
    articleHealthyText: `
      <h3>تهانينا على التواجد في النطاق المثالي!</h3>
      <p>أنت حالياً تتمتع بمؤشر كتلة جسم مثالي ومتوازن تماماً. في هذه المرحلة، يجب أن يتركز هدفك على عملية بناء الكتلة العضلية الصافية بالتزامن مع خفض نسب الدهون.</p>
    `,
    articleOverweightTitle: "💡 دليلك المخصص: حرق الدهون المستدام وهندسة عجز السعرات للتخسيس",
    articleOverweightText: `
      <h3>التعامل الذكي مع زيادة الوزن</h3>
      <p>مؤشر كتلة الجسم الحالي يوضح وجود زيادة في الوزن أو سمنة. لا تقلق مطلقاً، فهذه النتيجة هي مجرد نقطة انطلاق رقمية دقيقة سنبني عليها خطة تحول ذكية ومستدامة.</p>
    `
  }
};

// ==========================================
// 2. STATE MANAGEMENT & INITIALIZATION
// ==========================================
let currentLang = "en";
let currentTheme = "light";

const userSelections = {
  bmiUnit: "metric",
  bmiGender: "male",
  calUnit: "metric",
  calGender: "male",
  calGoal: "maintain",
  macroGoal: "maintain",
  macroBody: "ecto",
  waterUnit: "metric"
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initTabs();
  initSegmentedControls();
  registerCalculators();
  registerExportButtons();
  
  applyLanguage(currentLang);
});

// ==========================================
// 3. THEME MANAGEMENT
// ==========================================
function initTheme() {
  const themeBtn = document.getElementById("themeToggle");
  if (!themeBtn) return;
  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    document.documentElement.className = currentTheme === "dark" ? "dark-mode" : "";
  });
}

// ==========================================
// 4. LANGUAGE SWITCHER
// ==========================================
function initLanguage() {
  const langBtn = document.getElementById("langToggle");
  if (!langBtn) return;
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  
  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = lang === "ar" ? "English" : "عربي";

  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  updateUnitLabels();
}

function updateUnitLabels() {
  const isBmiMetric = userSelections.bmiUnit === "metric";
  const weightLabel = document.getElementById("weightUnitLabel");
  const heightLabel = document.getElementById("heightUnitLabel");
  if (weightLabel) weightLabel.textContent = isBmiMetric ? "kg" : "lbs";
  if (heightLabel) heightLabel.textContent = isBmiMetric ? "cm" : "in";

  const isCalMetric = userSelections.calUnit === "metric";
  const calWeightLabel = document.getElementById("calWeightUnitLabel");
  const calHeightLabel = document.getElementById("calHeightUnitLabel");
  if (calWeightLabel) calWeightLabel.textContent = isCalMetric ? "kg" : "lbs";
  if (calHeightLabel) calHeightLabel.textContent = isCalMetric ? "cm" : "in";

  const isWaterMetric = userSelections.waterUnit === "metric";
  const waterWeightLabel = document.getElementById("waterWeightUnitLabel");
  if (waterWeightLabel) waterWeightLabel.textContent = isWaterMetric ? "kg" : "lbs";
}

// ==========================================
// 5. TABS & SEGMENTED CONTROLS
// ==========================================
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-nav .tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      tabButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

function initSegmentedControls() {
  const configs = [
    { id: "bmi-unit-control", key: "bmiUnit" },
    { id: "bmi-gender-control", key: "bmiGender" },
    { id: "cal-unit-control", key: "calUnit" },
    { id: "cal-gender-control", key: "calGender" },
    { id: "cal-goal-control", key: "calGoal" },
    { id: "macro-goal-control", key: "macroGoal" },
    { id: "macro-body-control", key: "macroBody" },
    { id: "water-unit-control", key: "waterUnit" }
  ];

  configs.forEach(cfg => {
    const container = document.getElementById(cfg.id);
    if (!container) return;

    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg-btn, .goal-btn");
      if (!btn) return;

      container.querySelectorAll(".seg-btn, .goal-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const value = btn.getAttribute("data-unit") || btn.getAttribute("data-gender") || btn.getAttribute("data-goal") || btn.getAttribute("data-body");
      userSelections[cfg.key] = value;

      updateUnitLabels();
    });
  });
}

// ==========================================
// 6. CALCULATORS ENGINE (RAISED SEO ARTICLE POSITION)
// ==========================================
function registerCalculators() {
  document.getElementById("calcBMI")?.addEventListener("click", calculateBMI);
  document.getElementById("calcCalories")?.addEventListener("click", calculateCalories);
  document.getElementById("calcMacros")?.addEventListener("click", calculateMacros);
  document.getElementById("calcWater")?.addEventListener("click", calculateWater);
}

function revealResults(placeholderId, contentId) {
  document.getElementById(placeholderId)?.classList.add("hidden");
  document.getElementById(contentId)?.classList.remove("hidden");
}

// --- TAB 1: BMI CALCULATION ---
function calculateBMI() {
  let weight = parseFloat(document.getElementById("bmi-weight").value) || 70;
  let height = parseFloat(document.getElementById("bmi-height").value) || 175;

  if (userSelections.bmiUnit === "imperial") {
    weight = weight * 0.45359237;
    height = height * 2.54;
  }

  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);

  revealResults("bmi-placeholder", "bmi-result-content");
  document.getElementById("bmiValue").textContent = bmi.toFixed(1);

  let statusKey = "healthy";
  let needleDeg = 0;
  if (bmi < 18.5) { statusKey = "underweight"; needleDeg = -60; }
  else if (bmi >= 18.5 && bmi < 25) { statusKey = "healthy"; needleDeg = -20; }
  else if (bmi >= 25 && bmi < 30) { statusKey = "overweight"; needleDeg = 20; }
  else { statusKey = "obese"; needleDeg = 60; }

  const badge = document.getElementById("bmiStatusBadge");
  if (badge) {
    badge.textContent = translations[currentLang][statusKey];
    badge.className = `bmi-status-badge status--${statusKey}`;
  }

  const needle = document.getElementById("gaugeNeedle");
  if (needle) needle.style.transform = `translateX(-50%) rotate(${needleDeg}deg)`;

  const baseHeightInches = (height / 2.54) - 60;
  let factor = userSelections.bmiGender === "male" ? 50 : 45.5;
  let incFactorHamwi = userSelections.bmiGender === "male" ? 2.7 : 2.2;
  let incFactorOther = userSelections.bmiGender === "male" ? 2.3 : 2.2;

  let hamwi = factor + (incFactorHamwi * baseHeightInches);
  let devine = factor + (incFactorOther * baseHeightInches);
  let robinson = (userSelections.bmiGender === "male" ? 52 : 49) + (1.9 * baseHeightInches);
  let avg = (hamwi + devine + robinson) / 3;

  const suffix = currentLang === "ar" ? " كجم" : " kg";
  document.getElementById("iwHamwi").textContent = Math.round(hamwi) + suffix;
  document.getElementById("iwDevine").textContent = Math.round(devine) + suffix;
  document.getElementById("iwRobinson").textContent = Math.round(robinson) + suffix;
  document.getElementById("iwAverage").textContent = Math.round(avg) + suffix;

  // 🔥 [تحديث الرفع للمقالة]: حقن الكارت جوه النتيجة مباشرة فوق زرار التنزيل
  let inlineArticle = document.getElementById("inline-bmi-article");
  if (!inlineArticle) {
    inlineArticle = document.createElement("div");
    inlineArticle.id = "inline-bmi-article";
    const exportBtn = document.getElementById("exportBMI");
    exportBtn.parentNode.insertBefore(inlineArticle, exportBtn);
  }
  
  inlineArticle.innerHTML = `
    <div class="article-card" style="margin: 20px 0; padding: 20px; background: rgba(var(--accent-rgb), 0.05); border-radius: 12px; border: 1px solid var(--border); text-align: ${currentLang === 'ar' ? 'right' : 'left'};">
      <h3 style="color: var(--accent); margin-bottom: 8px; font-family: 'Cairo', sans-serif; font-size: 1.1rem;">${translations[currentLang][`article${statusKey.charAt(0).toUpperCase() + statusKey.slice(1)}Title`]}</h3>
      <div style="line-height: 1.5; font-size: 0.9rem; color: var(--text-muted);">${translations[currentLang][`article${statusKey.charAt(0).toUpperCase() + statusKey.slice(1)}Text`]}</div>
    </div>
  `;
}

// --- TAB 2: CALORIES CALCULATION ---
function calculateCalories() {
  let weight = parseFloat(document.getElementById("cal-weight").value) || 70;
  let height = parseFloat(document.getElementById("cal-height").value) || 175;
  let age = parseInt(document.getElementById("cal-age").value) || 25;
  let activityFactor = parseFloat(document.getElementById("cal-activity").value) || 1.2;

  if (userSelections.calUnit === "imperial") {
    weight = weight * 0.45359237;
    height = height * 2.54;
  }

  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  bmr = userSelections.calGender === "male" ? bmr + 5 : bmr - 161;
  let tdee = bmr * activityFactor;

  let finalTargetCalories = tdee;
  if (userSelections.calGoal === "lose") finalTargetCalories = tdee - 500;
  if (userSelections.calGoal === "gain") finalTargetCalories = tdee + 400;

  revealResults("cal-placeholder", "cal-result-content");

  document.getElementById("bmrValue").textContent = Math.round(bmr);
  document.getElementById("tdeeValue").textContent = Math.round(tdee);
  document.getElementById("goalCalValue").textContent = Math.round(finalTargetCalories);

  const goalLabelElem = document.getElementById("goalResultLabel");
  if (goalLabelElem) {
    if (userSelections.calGoal === "lose") goalLabelElem.textContent = translations[currentLang]["goalLose"];
    else if (userSelections.calGoal === "gain") goalLabelElem.textContent = translations[currentLang]["goalGain"];
    else goalLabelElem.textContent = translations[currentLang]["goalMaintain"];
  }

  const diff = Math.round((finalTargetCalories - tdee) * 7);
  const prefix = diff > 0 ? "+" : "";
  const unitStr = currentLang === "ar" ? " سعرة / أسبوع" : " kcal / week";
  const mUnitStr = currentLang === "ar" ? " سعرة / شهر" : " kcal / month";
  
  document.getElementById("weeklyChange").textContent = prefix + diff + unitStr;
  document.getElementById("monthlyChange").textContent = prefix + (diff * 4) + mUnitStr;
}

// --- TAB 3: MACROS CALCULATION ---
function calculateMacros() {
  let tdee = parseFloat(document.getElementById("macro-tdee").value);
  if (!tdee) {
    const computedGoal = document.getElementById("goalCalValue")?.textContent;
    tdee = computedGoal && computedGoal !== "--" ? parseFloat(computedGoal) : 2000;
    document.getElementById("macro-tdee").value = tdee;
  }

  let pPct = 0.30, cPct = 0.40, fPct = 0.30;
  if (userSelections.macroGoal === "cut") { pPct = 0.40; cPct = 0.35; fPct = 0.25; }
  else if (userSelections.macroGoal === "bulk") { pPct = 0.25; cPct = 0.50; fPct = 0.25; }

  if (userSelections.macroBody === "ecto") { cPct += 0.05; fPct -= 0.05; }
  if (userSelections.macroBody === "endo") { cPct -= 0.10; fPct += 0.10; }

  const pGrams = (tdee * pPct) / 4;
  const cGrams = (tdee * cPct) / 4;
  const fGrams = (tdee * fPct) / 9;

  revealResults("macro-placeholder", "macro-result-content");

  document.getElementById("macroTotal").textContent = Math.round(tdee);
  document.getElementById("proteinGrams").textContent = `${Math.round(pGrams)} g`;
  document.getElementById("carbsGrams").textContent = `${Math.round(cGrams)} g`;
  document.getElementById("fatsGrams").textContent = `${Math.round(fGrams)} g`;

  document.getElementById("proteinPct").textContent = `${Math.round(pPct*100)}%`;
  document.getElementById("carbsPct").textContent = `${Math.round(cPct*100)}%`;
  document.getElementById("fatsPct").textContent = `${Math.round(fPct*100)}%`;

  document.getElementById("proteinCal").textContent = `${Math.round(tdee * pPct)} kcal`;
  document.getElementById("carbsCal").textContent = `${Math.round(tdee * cPct)} kcal`;
  document.getElementById("fatsCal").textContent = `${Math.round(tdee * fPct)} kcal`;

  document.getElementById("proteinBar").style.width = `${pPct*100}%`;
  document.getElementById("carbsBar").style.width = `${cPct*100}%`;
  document.getElementById("fatsBar").style.width = `${fPct*100}%`;

  document.getElementById("mealProtein").textContent = `${Math.round(pGrams / 3)}g`;
  document.getElementById("mealCarbs").textContent = `${Math.round(cGrams / 3)}g`;
  document.getElementById("mealFats").textContent = `${Math.round(fGrams / 3)}g`;
}

// --- TAB 4: WATER CALCULATION ---
function calculateWater() {
  let weight = parseFloat(document.getElementById("water-weight").value) || 70;
  if (userSelections.waterUnit === "imperial") weight = weight * 0.45359237;

  let liters = weight * 0.035;
  const activity = document.getElementById("water-activity").value;
  if (activity === "light") liters += 0.4;
  else if (activity === "moderate") liters += 0.8;
  else if (activity === "very" || activity === "athlete") liters += 1.2;

  const climate = document.getElementById("water-climate").value;
  if (climate === "hot") liters += 0.6;
  else if (climate === "veryhot") liters += 1.1;

  revealResults("water-placeholder", "water-result-content");

  document.getElementById("waterLiters").textContent = liters.toFixed(1);
  document.getElementById("waterGlasses").textContent = Math.round(liters / 0.25);
  document.getElementById("waterFill").style.height = `${Math.min((liters / 4.5) * 100, 100)}%`;

  const scheduleGrid = document.getElementById("waterScheduleGrid");
  if (scheduleGrid) {
    const times = ["8:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"];
    scheduleGrid.innerHTML = times.map(time => `
      <div style="padding:12px; background:var(--bg-surface); border-radius:8px; border:1px solid var(--border); text-align:center;">
        <span style="display:block; font-size:1.1rem; margin-bottom:4px;">💧 250ml</span>
        <strong style="font-size:0.85rem; color:var(--text-muted);">${time}</strong>
      </div>
    `).join('');
  }

  const tipsList = document.getElementById("waterTipsList");
  if (tipsList) {
    const tips = currentLang === "ar" 
      ? ["اشرب كوباً فور الاستيقاظ مباشرة.", "احمل زجاجة مياه مخصصة معك.", "اضبط منبهاً كل ساعتين للتذكير."]
      : ["Drink a glass right after waking up.", "Keep a dedicated bottle with you.", "Set a timer every 2 hours."];
    tipsList.innerHTML = tips.map(tip => `<p style="margin-bottom:6px; font-size:0.9rem;">🔹 ${tip}</p>`).join('');
  }
}

// ==========================================
// 7. EXPORT FUNCTIONALITY (THE PDF FIX)
// ==========================================
function registerExportButtons() {
  document.getElementById("exportBMI")?.addEventListener("click", () => exportCardToPDF("bmi-result-content", "BMI_Report"));
  document.getElementById("exportCalories")?.addEventListener("click", () => exportCardToPDF("cal-result-content", "Calories_Report"));
  document.getElementById("exportMacros")?.addEventListener("click", () => exportCardToPDF("macro-results", "Macros_Report"));
  document.getElementById("exportWater")?.addEventListener("click", () => exportCardToPDF("water-result-content", "Water_Intake_Report"));
}

function exportCardToPDF(elementId, fileName) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  // استخدام دالة الطباعة الأصلية المضمنة بالمتصفح لحفظ الكارت بشكل نظيف وسريع جداً بدون مكتبات خارجية تعطل الفيرسيل
  const originalBody = document.body.innerHTML;
  const printContent = element.innerHTML;
  
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>${fileName}</title>
        <style>
          body { font-family: 'Cairo', 'DM Sans', sans-serif; padding: 40px; color: #333; background: #fff; direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'}; }
          .hidden { display: none !important; }
          .btn-export, .result-placeholder { display: none !important; }
          h2, h3 { color: #0f172a; }
          .bmi-score-circle { border: 4px solid #0f172a; padding: 20px; display: inline-block; border-radius: 50%; font-size: 2rem; font-weight: bold; }
          .iw-range { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px; }
          .iw-item { padding: 12px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; }
          .article-card { background: #f1f5f9 !important; border: 1px solid #cbd5e1 !important; }
        </style>
      </head>
      <body>
        <h1 style="text-align: center; color: #3b82f6;">FitCalc Pro Report</h1>
        <hr style="border: 1px solid #e2e8f0; margin-bottom: 30px;" />
        ${printContent}
      </body>
    </html>
  `);
  
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 500);
}