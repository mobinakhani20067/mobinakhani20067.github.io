function makeMeal() {
document.querySelectorAll('#main .error').forEach(e => e.classList.remove('show'));
let valid = true;
let age = document.getElementById('age').value;
let height = document.getElementById('height').value;
let weight = document.getElementById('weight').value;
let gender = document.getElementById('gender').value;
let diet = document.getElementById('diet').value;

if(!age || age<15 || age>50) { document.getElementById('err-age').classList.add('show'); valid = false; }
if(!height || height<100 || height>250) { document.getElementById('err-height').classList.add('show'); valid = false; }
if(!weight || weight<30 || weight>200) { document.getElementById('err-weight').classList.add('show'); valid = false; }
if(!gender) { document.getElementById('err-gender').classList.add('show'); valid = false; }
if(!diet) { document.getElementById('err-diet').classList.add('show'); valid = false; }
if(!valid) return;

let btn = document.getElementById('btn');
btn.value = "⏳ در حال پردازش...";
btn.disabled = true;

let meals = {
	'کاهش وزن': { breakfast: "🍳 2 عدد تخم مرغ آب پز + 🥒 خیار + 🍞 نان سبوسدار", lunch: "🍗 150 گرم مرغ کبابی + 🥗 سالاد سبز", dinner: "🥛 ماست کم چرب + 🥬 سبزیجات" },
	'افزایش وزن': { breakfast: "🍳 املت 3 تخم مرغ + 🧀 پنیر + 🥛 شیر", lunch: "🍚 برنج + 🥩 گوشت قرمز + 🥑 آووکادو", dinner: "🥔 مرغ + سیب زمینی" },
	'ورزشکاری': { breakfast: "🥣 جو دوسر + 🍌 موز + پروتئین وی", lunch: "🍚 برنج قهوه‌ای + 🍗 سینه مرغ + 🥦 بروکلی", dinner: "🍳 6 عدد تخم مرغ + 🥗 کاهو" },
	'بدون برنج': { breakfast: "🍞 نان سنگک + 🧀 پنیر + 🌰 گردو", lunch: "🥘 خورشت بدون برنج + 🥖 نان", dinner: "🐟 ماهی سالمون + 🥒 کدوسبز" },
	'بدون فست فود': { breakfast: "🥣 حلیم + 🍞 نان", lunch: "🍗 جوجه کباب + 🍅 گوجه", dinner: "🥣 سوپ جو + سبزی" },
	'تثبیت': { breakfast: "🥛 ماست + 🍯 عسل + گردو", lunch: "🍚 برنج + 🍗 مرغ + سالاد", dinner: "🥗 سالاد سزار" }
};
let selected = meals[diet] || meals['تثبیت'];

setTimeout(() => {
	document.getElementById('breakfastTxt').innerHTML = selected.breakfast;
	document.getElementById('lunchTxt').innerHTML = selected.lunch;
	document.getElementById('dinnerTxt').innerHTML = selected.dinner;
	document.getElementById('meal').style.display = "block";
	btn.value = "✨ ایجاد برنامه غذایی";
	btn.disabled = false;
	document.getElementById('meal').scrollIntoView({ behavior: 'smooth' });
}, 1000);
}

