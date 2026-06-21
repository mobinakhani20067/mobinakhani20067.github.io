function makeSport() {
	document.querySelectorAll('#main2 .error').forEach(e => e.classList.remove('show'));
	let valid = true;
	let age = document.getElementById('age2').value;
	let height = document.getElementById('height2').value;
	let weight = document.getElementById('weight2').value;
	let gender = document.getElementById('gender2').value;
	let goal = document.getElementById('goal').value;
	
	if(!age || age<15 || age>50) { document.getElementById('err-age2').classList.add('show'); valid = false; }
	if(!height || height<100 || height>250) { document.getElementById('err-height2').classList.add('show'); valid = false; }
	if(!weight || weight<30 || weight>200) { document.getElementById('err-weight2').classList.add('show'); valid = false; }
	if(!gender) { document.getElementById('err-gender2').classList.add('show'); valid = false; }
	if(!goal) { alert('🎯 لطفا هدف خود را انتخاب کنید'); valid = false; }
	if(!valid) return;
	
	let btn = document.getElementById('btn2');
	btn.value = "⏳ در حال پردازش...";
	btn.disabled = true;
	
	let headers = { 'چربی سوزی': '🔥 برنامه چربی سوزی', 'عضله سازی': '💪 برنامه عضله سازی', 'سلامتی': '🧘 برنامه سلامتی', 'شکم': '🏃 برنامه آب کردن شکم' };
	document.getElementById('sportHeader').innerHTML = headers[goal] || '🏋️ برنامه تمرینی';
	
	setTimeout(() => {
		document.getElementById('sport').style.display = "block";
		btn.value = "⚡ ایجاد برنامه ورزشی";
		btn.disabled = false;
		document.getElementById('sport').scrollIntoView({ behavior: 'smooth' });
	}, 1000);
}
