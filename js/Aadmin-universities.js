let allUniversities = [
    { id: 1, name: "دانشگاه تهران", president: "دکتر محمدی", presidentPhone: "09121234567", uniPhone: "021-12345678", province: "تهران", city: "تهران", address: "خیابان انقلاب، خیابان ۱۶ آذر", sports: ["بسکتبال", "والیبال", "فوتسال", "بدمینتون"], facilities: ["زمین چمن", "استخر"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۱۰" },
    { id: 2, name: "دانشگاه صنعتی شریف", president: "دکتر حسینی", presidentPhone: "09128765432", uniPhone: "021-66123456", province: "تهران", city: "تهران", address: "خیابان آزادی، دانشگاه صنعتی شریف", sports: ["بسکتبال", "والیبال", "فوتسال", "تیراندازی"], facilities: ["زمین چمن", "استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۰۵" },
    { id: 3, name: "دانشگاه شهید بهشتی", president: "دکتر هاشمی", presidentPhone: "09141234567", uniPhone: "021-1234567", province: "تهران", city: "تهران", address: "اوین، دانشگاه شهید بهشتی", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۲۳" },
    { id: 4, name: "دانشگاه صنعتی اصفهان", president: "دکتر نوروزی", presidentPhone: "09131234567", uniPhone: "031-1234567", province: "اصفهان", city: "اصفهان", address: "دانشگاه صنعتی اصفهان", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۲۲" },
    { id: 5, name: "دانشگاه فردوسی مشهد", president: "دکتر کریمی", presidentPhone: "09151234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "مشهد", address: "میدان آزادی، دانشگاه فردوسی", sports: ["بسکتبال", "والیبال", "فوتسال", "دارت", "ژیمناستیک"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۱۸" },
    { id: 6, name: "دانشگاه شیراز", president: "دکتر احمدی", presidentPhone: "09171234567", uniPhone: "071-1234567", province: "فارس", city: "شیراز", address: "بلوار ارم، دانشگاه شیراز", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۲۰" },
    { id: 7, name: "دانشگاه تبریز", president: "دکتر رضایی", presidentPhone: "09181234567", uniPhone: "041-1234567", province: "آذربایجان شرقی", city: "تبریز", address: "بلوار ۲۹ بهمن، دانشگاه تبریز", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن", "استخر"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۱۵" },
    { id: 8, name: "دانشگاه شهید چمران اهواز", president: "دکتر موسوی", presidentPhone: "09191234567", uniPhone: "061-1234567", province: "خوزستان", city: "اهواز", address: "گلستان، دانشگاه شهید چمران", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۱۲" },
    { id: 9, name: "دانشگاه رازی کرمانشاه", president: "دکتر نادری", presidentPhone: "09201234567", uniPhone: "083-1234567", province: "کرمانشاه", city: "کرمانشاه", address: "میدان دانشگاه، دانشگاه رازی", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۰۸" },
    { id: 10, name: "دانشگاه گیلان", president: "دکتر مرادی", presidentPhone: "09211234567", uniPhone: "013-1234567", province: "گیلان", city: "رشت", address: "میدان دانشگاه، دانشگاه گیلان", sports: ["بسکتبال", "والیبال", "فوتسال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۴/۰۲/۰۳" },
    { id: 11, name: "دانشگاه مازندران", president: "دکتر علیپور", presidentPhone: "09221234567", uniPhone: "011-1234567", province: "مازندران", city: "بابلسر", address: "دانشگاه مازندران، بابلسر", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۴/۰۱/۲۸" },
    { id: 12, name: "دانشگاه خوارزمی", president: "دکتر صمدی", presidentPhone: "09231234567", uniPhone: "026-1234567", province: "البرز", city: "کرج", address: "میدان دانشگاه، دانشگاه خوارزمی", sports: ["بسکتبال", "والیبال", "دارت"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۴/۰۱/۲۵" },
    { id: 13, name: "دانشگاه بوعلی سینا همدان", president: "دکتر رستمی", presidentPhone: "09241234567", uniPhone: "081-1234567", province: "همدان", city: "همدان", address: "میدان دانشگاه، بوعلی سینا", sports: ["بسکتبال", "والیبال", "فوتسال", "تیراندازی"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۴/۰۱/۲۰" },
    { id: 14, name: "دانشگاه سیستان و بلوچستان", president: "دکتر نوروزی", presidentPhone: "09251234567", uniPhone: "054-1234567", province: "سیستان و بلوچستان", city: "زاهدان", address: "دانشگاه سیستان و بلوچستان", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۴/۰۱/۱۵" },
    { id: 15, name: "دانشگاه قم", president: "دکتر حسینی", presidentPhone: "09261234567", uniPhone: "025-1234567", province: "قم", city: "قم", address: "بلوار دانشگاه، دانشگاه قم", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۴/۰۱/۱۰" },
    { id: 16, name: "دانشگاه ارومیه", president: "دکتر محمدی", presidentPhone: "09271234567", uniPhone: "044-1234567", province: "آذربایجان غربی", city: "ارومیه", address: "دانشگاه ارومیه", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۴/۰۱/۰۵" },
    { id: 17, name: "دانشگاه کردستان", president: "دکتر کریمی", presidentPhone: "09281234567", uniPhone: "087-1234567", province: "کردستان", city: "سنندج", address: "دانشگاه کردستان، سنندج", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۴/۰۱/۰۱" },
    { id: 18, name: "دانشگاه یزد", president: "دکتر احمدی", presidentPhone: "09291234567", uniPhone: "035-1234567", province: "یزد", city: "یزد", address: "دانشگاه یزد، صفائیه", sports: ["بسکتبال", "والیبال", "فوتسال", "تیراندازی"], facilities: ["زمین چمن", "استخر"], images: [], status: "approved", date: "۱۴۰۳/۱۲/۲۸" },
    { id: 19, name: "دانشگاه اراک", president: "دکتر رضایی", presidentPhone: "09301234567", uniPhone: "086-1234567", province: "مرکزی", city: "اراک", address: "دانشگاه اراک", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۲/۲۵" },
    { id: 20, name: "دانشگاه هرمزگان", president: "دکتر نادری", presidentPhone: "09311234567", uniPhone: "076-1234567", province: "هرمزگان", city: "بندرعباس", address: "دانشگاه هرمزگان، بندرعباس", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۱۲/۲۰" },
    { id: 21, name: "دانشگاه بین المللی امام خمینی", president: "دکتر موسوی", presidentPhone: "09321234567", uniPhone: "028-1234567", province: "قزوین", city: "قزوین", address: "دانشگاه بین المللی امام خمینی", sports: ["بسکتبال", "والیبال", "شطرنج", "دارت"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۱۲/۱۵" },
    { id: 22, name: "دانشگاه گلستان", president: "دکتر مرادی", presidentPhone: "09331234567", uniPhone: "017-1234567", province: "گلستان", city: "گرگان", address: "دانشگاه گلستان، گرگان", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۱۲/۱۰" },
    { id: 23, name: "دانشگاه لرستان", president: "دکتر علیپور", presidentPhone: "09341234567", uniPhone: "066-1234567", province: "لرستان", city: "خرم‌آباد", address: "دانشگاه لرستان، خرم‌آباد", sports: ["بسکتبال", "والیبال", "فوتسال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۲/۰۵" },
    { id: 24, name: "دانشگاه خلیج فارس", president: "دکتر صمدی", presidentPhone: "09351234567", uniPhone: "077-1234567", province: "بوشهر", city: "بوشهر", address: "دانشگاه خلیج فارس، بوشهر", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۱۲/۰۱" },
    { id: 25, name: "دانشگاه زنجان", president: "دکتر رستمی", presidentPhone: "09361234567", uniPhone: "024-1234567", province: "زنجان", city: "زنجان", address: "دانشگاه زنجان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۱/۲۵" },
    { id: 26, name: "دانشگاه شهرکرد", president: "دکتر حسینی", presidentPhone: "09371234567", uniPhone: "038-1234567", province: "چهارمحال و بختیاری", city: "شهرکرد", address: "دانشگاه شهرکرد", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۱۱/۲۰" },
    { id: 27, name: "دانشگاه ایلام", president: "دکتر محمدی", presidentPhone: "09381234567", uniPhone: "084-1234567", province: "ایلام", city: "ایلام", address: "دانشگاه ایلام", sports: ["بسکتبال", "والیبال", "پینگ پنگ", "دارت"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۱/۱۵" },
    { id: 28, name: "دانشگاه بجنورد", president: "دکتر کریمی", presidentPhone: "09391234567", uniPhone: "058-1234567", province: "خراسان شمالی", city: "بجنورد", address: "دانشگاه بجنورد", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۱۱/۱۰" },
    { id: 29, name: "دانشگاه یاسوج", president: "دکتر احمدی", presidentPhone: "09401234567", uniPhone: "074-1234567", province: "کهگیلویه و بویراحمد", city: "یاسوج", address: "دانشگاه یاسوج", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۱/۰۵" },
    { id: 30, name: "دانشگاه بیرجند", president: "دکتر نادری", presidentPhone: "09411234567", uniPhone: "056-1234567", province: "خراسان جنوبی", city: "بیرجند", address: "دانشگاه بیرجند", sports: ["بسکتبال", "والیبال", "بدمینتون", "شطرنج"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۱۱/۰۱" },
    { id: 31, name: "دانشگاه سمنان", president: "دکتر رضایی", presidentPhone: "09421234567", uniPhone: "023-1234567", province: "سمنان", city: "سمنان", address: "دانشگاه سمنان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۱۰/۲۸" },
    { id: 32, name: "دانشگاه محقق اردبیلی", president: "دکتر موسوی", presidentPhone: "09431234567", uniPhone: "045-1234567", province: "اردبیل", city: "اردبیل", address: "دانشگاه محقق اردبیلی", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۱۰/۲۵" },
    { id: 33, name: "دانشگاه صنعتی نوشیروانی بابل", president: "دکتر علیپور", presidentPhone: "09441234567", uniPhone: "011-1234567", province: "مازندران", city: "بابل", address: "دانشگاه صنعتی نوشیروانی بابل", sports: ["بسکتبال", "والیبال", "فوتسال", "دارت"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۰/۲۰" },
    { id: 34, name: "دانشگاه کاشان", president: "دکتر مرادی", presidentPhone: "09451234567", uniPhone: "031-1234567", province: "اصفهان", city: "کاشان", address: "دانشگاه کاشان", sports: ["بسکتبال", "والیبال", "شطرنج", "تیراندازی"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۱۰/۱۵" },
    { id: 35, name: "دانشگاه مراغه", president: "دکتر صمدی", presidentPhone: "09461234567", uniPhone: "041-1234567", province: "آذربایجان شرقی", city: "مراغه", address: "دانشگاه مراغه", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۰/۱۰" },
    { id: 36, name: "دانشگاه جیرفت", president: "دکتر رستمی", presidentPhone: "09471234567", uniPhone: "034-1234567", province: "کرمان", city: "جیرفت", address: "دانشگاه جیرفت", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۱۰/۰۵" },
    { id: 37, name: "دانشگاه ولیعصر رفسنجان", president: "دکتر کریمی", presidentPhone: "09481234567", uniPhone: "034-1234567", province: "کرمان", city: "رفسنجان", address: "دانشگاه ولیعصر رفسنجان", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۱۰/۰۱" },
    { id: 38, name: "دانشگاه صنعتی شاهرود", president: "دکتر حسینی", presidentPhone: "09491234567", uniPhone: "023-1234567", province: "سمنان", city: "شاهرود", address: "دانشگاه صنعتی شاهرود", sports: ["بسکتبال", "والیبال", "فوتسال", "تیراندازی"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۹/۲۸" },
    { id: 39, name: "دانشگاه حکیم سبزواری", president: "دکتر محمدی", presidentPhone: "09501234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "سبزوار", address: "دانشگاه حکیم سبزواری", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۹/۲۵" },
    { id: 40, name: "دانشگاه دامغان", president: "دکتر رضایی", presidentPhone: "09511234567", uniPhone: "023-1234567", province: "سمنان", city: "دامغان", address: "دانشگاه دامغان", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۹/۲۰" },
    { id: 41, name: "دانشگاه جهرم", president: "دکتر موسوی", presidentPhone: "09521234567", uniPhone: "071-1234567", province: "فارس", city: "جهرم", address: "دانشگاه جهرم", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۹/۱۵" },
    { id: 42, name: "دانشگاه خوی", president: "دکتر نادری", presidentPhone: "09531234567", uniPhone: "044-1234567", province: "آذربایجان غربی", city: "خوی", address: "دانشگاه خوی", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۹/۱۰" },
    { id: 43, name: "دانشگاه سقز", president: "دکتر علیپور", presidentPhone: "09541234567", uniPhone: "087-1234567", province: "کردستان", city: "سقز", address: "دانشگاه سقز", sports: ["بسکتبال", "والیبال", "بدمینتون", "دارت"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۹/۰۵" },
    { id: 44, name: "دانشگاه میبد", president: "دکتر صمدی", presidentPhone: "09551234567", uniPhone: "035-1234567", province: "یزد", city: "میبد", address: "دانشگاه میبد", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۹/۰۱" },
    { id: 45, name: "دانشگاه تربت حیدریه", president: "دکتر رستمی", presidentPhone: "09561234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "تربت حیدریه", address: "دانشگاه تربت حیدریه", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۸/۲۸" },
    { id: 46, name: "دانشگاه صنعتی بهبهان", president: "دکتر کریمی", presidentPhone: "09571234567", uniPhone: "061-1234567", province: "خوزستان", city: "بهبهان", address: "دانشگاه صنعتی بهبهان", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۸/۲۵" },
    { id: 47, name: "دانشگاه علوم پزشکی گچساران", president: "دکتر حسینی", presidentPhone: "09581234567", uniPhone: "074-1234567", province: "کهگیلویه و بویراحمد", city: "گچساران", address: "دانشگاه علوم پزشکی گچساران", sports: ["بسکتبال", "والیبال", "فوتسال", "شطرنج"], facilities: ["زمین چمن", "استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۸/۲۰" },
    { id: 48, name: "دانشگاه علوم پزشکی دزفول", president: "دکتر محمدی", presidentPhone: "09591234567", uniPhone: "061-1234567", province: "خوزستان", city: "دزفول", address: "دانشگاه علوم پزشکی دزفول", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۸/۱۵" },
    { id: 49, name: "دانشگاه علوم پزشکی آبادان", president: "دکتر رضایی", presidentPhone: "09601234567", uniPhone: "061-1234567", province: "خوزستان", city: "آبادان", address: "دانشگاه علوم پزشکی آبادان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۸/۱۰" },
    { id: 50, name: "دانشگاه علوم پزشکی بابل", president: "دکتر موسوی", presidentPhone: "09611234567", uniPhone: "011-1234567", province: "مازندران", city: "بابل", address: "دانشگاه علوم پزشکی بابل", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۸/۰۵" },
    { id: 51, name: "دانشگاه علوم پزشکی البرز", president: "دکتر نادری", presidentPhone: "09621234567", uniPhone: "026-1234567", province: "البرز", city: "کرج", address: "دانشگاه علوم پزشکی البرز", sports: ["بسکتبال", "والیبال", "پینگ پنگ", "دارت"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۸/۰۱" },
    { id: 52, name: "دانشگاه علوم پزشکی کرمانشاه", president: "دکتر علیپور", presidentPhone: "09631234567", uniPhone: "083-1234567", province: "کرمانشاه", city: "کرمانشاه", address: "دانشگاه علوم پزشکی کرمانشاه", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۷/۲۸" },
    { id: 53, name: "دانشگاه علوم پزشکی همدان", president: "دکتر صمدی", presidentPhone: "09641234567", uniPhone: "081-1234567", province: "همدان", city: "همدان", address: "دانشگاه علوم پزشکی همدان", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۷/۲۵" },
    { id: 54, name: "دانشگاه علوم پزشکی قزوین", president: "دکتر رستمی", presidentPhone: "09651234567", uniPhone: "028-1234567", province: "قزوین", city: "قزوین", address: "دانشگاه علوم پزشکی قزوین", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۷/۲۰" },
    { id: 55, name: "دانشگاه علوم پزشکی گلستان", president: "دکتر کریمی", presidentPhone: "09661234567", uniPhone: "017-1234567", province: "گلستان", city: "گرگان", address: "دانشگاه علوم پزشکی گلستان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۷/۱۵" },
    { id: 56, name: "دانشگاه علوم پزشکی لرستان", president: "دکتر حسینی", presidentPhone: "09671234567", uniPhone: "066-1234567", province: "لرستان", city: "خرم‌آباد", address: "دانشگاه علوم پزشکی لرستان", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۷/۱۰" },
    { id: 57, name: "دانشگاه علوم پزشکی اراک", president: "دکتر محمدی", presidentPhone: "09681234567", uniPhone: "086-1234567", province: "مرکزی", city: "اراک", address: "دانشگاه علوم پزشکی اراک", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۷/۰۵" },
    { id: 58, name: "دانشگاه علوم پزشکی هرمزگان", president: "دکتر رضایی", presidentPhone: "09691234567", uniPhone: "076-1234567", province: "هرمزگان", city: "بندرعباس", address: "دانشگاه علوم پزشکی هرمزگان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۷/۰۱" },
    { id: 59, name: "دانشگاه علوم پزشکی زنجان", president: "دکتر موسوی", presidentPhone: "09701234567", uniPhone: "024-1234567", province: "زنجان", city: "زنجان", address: "دانشگاه علوم پزشکی زنجان", sports: ["بسکتبال", "والیبال", "شطرنج", "دارت"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۶/۲۸" },
    { id: 60, name: "دانشگاه علوم پزشکی شهرکرد", president: "دکتر نادری", presidentPhone: "09711234567", uniPhone: "038-1234567", province: "چهارمحال و بختیاری", city: "شهرکرد", address: "دانشگاه علوم پزشکی شهرکرد", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۶/۲۵" },
    { id: 61, name: "دانشگاه علوم پزشکی ایلام", president: "دکتر علیپور", presidentPhone: "09721234567", uniPhone: "084-1234567", province: "ایلام", city: "ایلام", address: "دانشگاه علوم پزشکی ایلام", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۶/۲۰" },
    { id: 62, name: "دانشگاه علوم پزشکی بجنورد", president: "دکتر صمدی", presidentPhone: "09731234567", uniPhone: "058-1234567", province: "خراسان شمالی", city: "بجنورد", address: "دانشگاه علوم پزشکی بجنورد", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۶/۱۵" },
    { id: 63, name: "دانشگاه علوم پزشکی یاسوج", president: "دکتر رستمی", presidentPhone: "09741234567", uniPhone: "074-1234567", province: "کهگیلویه و بویراحمد", city: "یاسوج", address: "دانشگاه علوم پزشکی یاسوج", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۶/۱۰" },
    { id: 64, name: "دانشگاه علوم پزشکی بیرجند", president: "دکتر کریمی", presidentPhone: "09751234567", uniPhone: "056-1234567", province: "خراسان جنوبی", city: "بیرجند", address: "دانشگاه علوم پزشکی بیرجند", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۶/۰۵" },
    { id: 65, name: "دانشگاه علوم پزشکی سمنان", president: "دکتر حسینی", presidentPhone: "09761234567", uniPhone: "023-1234567", province: "سمنان", city: "سمنان", address: "دانشگاه علوم پزشکی سمنان", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۶/۰۱" },
    { id: 66, name: "دانشگاه علوم پزشکی اردبیل", president: "دکتر محمدی", presidentPhone: "09771234567", uniPhone: "045-1234567", province: "اردبیل", city: "اردبیل", address: "دانشگاه علوم پزشکی اردبیل", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۵/۲۸" },
    { id: 67, name: "دانشگاه علوم پزشکی جندی شاپور", president: "دکتر رضایی", presidentPhone: "09781234567", uniPhone: "061-1234567", province: "خوزستان", city: "اهواز", address: "دانشگاه علوم پزشکی جندی شاپور", sports: ["بسکتبال", "والیبال", "فوتسال", "تیراندازی"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۵/۲۵" },
    { id: 68, name: "دانشگاه صنعتی جندی شاپور", president: "دکتر موسوی", presidentPhone: "09791234567", uniPhone: "061-1234567", province: "خوزستان", city: "اهواز", address: "دانشگاه صنعتی جندی شاپور", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۵/۲۰" },
    { id: 69, name: "دانشگاه علوم پزشکی مشهد", president: "دکتر نادری", presidentPhone: "09801234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "مشهد", address: "دانشگاه علوم پزشکی مشهد", sports: ["بسکتبال", "والیبال", "فوتسال", "دارت"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۵/۱۵" },
    { id: 70, name: "دانشگاه صنعتی مشهد", president: "دکتر علیپور", presidentPhone: "09811234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "مشهد", address: "دانشگاه صنعتی مشهد", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۵/۱۰" },
    { id: 71, name: "دانشگاه علوم پزشکی تبریز", president: "دکتر صمدی", presidentPhone: "09821234567", uniPhone: "041-1234567", province: "آذربایجان شرقی", city: "تبریز", address: "دانشگاه علوم پزشکی تبریز", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۵/۰۵" },
    { id: 72, name: "دانشگاه علوم پزشکی اصفهان", president: "دکتر رستمی", presidentPhone: "09831234567", uniPhone: "031-1234567", province: "اصفهان", city: "اصفهان", address: "دانشگاه علوم پزشکی اصفهان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۵/۰۱" },
    { id: 73, name: "دانشگاه هنر اصفهان", president: "دکتر کریمی", presidentPhone: "09841234567", uniPhone: "031-1234567", province: "اصفهان", city: "اصفهان", address: "دانشگاه هنر اصفهان", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۴/۲۸" },
    { id: 74, name: "دانشگاه صنعتی شیراز", president: "دکتر حسینی", presidentPhone: "09851234567", uniPhone: "071-1234567", province: "فارس", city: "شیراز", address: "دانشگاه صنعتی شیراز", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۴/۲۵" },
    { id: 75, name: "دانشگاه علوم پزشکی شیراز", president: "دکتر محمدی", presidentPhone: "09861234567", uniPhone: "071-1234567", province: "فارس", city: "شیراز", address: "دانشگاه علوم پزشکی شیراز", sports: ["بسکتبال", "والیبال", "فوتسال", "شطرنج"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۴/۲۰" },
    { id: 76, name: "دانشگاه علوم پزشکی کرمان", president: "دکتر رضایی", presidentPhone: "09871234567", uniPhone: "034-1234567", province: "کرمان", city: "کرمان", address: "دانشگاه علوم پزشکی کرمان", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۴/۱۵" },
    { id: 77, name: "دانشگاه شهید باهنر کرمان", president: "دکتر موسوی", presidentPhone: "09881234567", uniPhone: "034-1234567", province: "کرمان", city: "کرمان", address: "دانشگاه شهید باهنر کرمان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۴/۱۰" },
    { id: 78, name: "دانشگاه علوم پزشکی ارومیه", president: "دکتر نادری", presidentPhone: "09891234567", uniPhone: "044-1234567", province: "آذربایجان غربی", city: "ارومیه", address: "دانشگاه علوم پزشکی ارومیه", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۴/۰۵" },
    { id: 79, name: "دانشگاه علوم پزشکی زاهدان", president: "دکتر علیپور", presidentPhone: "09901234567", uniPhone: "054-1234567", province: "سیستان و بلوچستان", city: "زاهدان", address: "دانشگاه علوم پزشکی زاهدان", sports: ["بسکتبال", "والیبال", "پینگ پنگ", "دارت"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۴/۰۱" },
    { id: 80, name: "دانشگاه علوم پزشکی قم", president: "دکتر صمدی", presidentPhone: "09911234567", uniPhone: "025-1234567", province: "قم", city: "قم", address: "دانشگاه علوم پزشکی قم", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۳/۲۸" },
    { id: 81, name: "دانشگاه علوم پزشکی کردستان", president: "دکتر رستمی", presidentPhone: "09921234567", uniPhone: "087-1234567", province: "کردستان", city: "سنندج", address: "دانشگاه علوم پزشکی کردستان", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۳/۲۵" },
    { id: 82, name: "دانشگاه علوم پزشکی یزد", president: "دکتر کریمی", presidentPhone: "09931234567", uniPhone: "035-1234567", province: "یزد", city: "یزد", address: "دانشگاه علوم پزشکی یزد", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۳/۲۰" },
    { id: 83, name: "دانشگاه علوم پزشکی بوشهر", president: "دکتر حسینی", presidentPhone: "09941234567", uniPhone: "077-1234567", province: "بوشهر", city: "بوشهر", address: "دانشگاه علوم پزشکی بوشهر", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۳/۱۵" },
    { id: 84, name: "دانشگاه علوم پزشکی گیلان", president: "دکتر محمدی", presidentPhone: "09951234567", uniPhone: "013-1234567", province: "گیلان", city: "رشت", address: "دانشگاه علوم پزشکی گیلان", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۳/۱۰" },
    { id: 85, name: "دانشگاه علوم پزشکی مازندران", president: "دکتر رضایی", presidentPhone: "09961234567", uniPhone: "011-1234567", province: "مازندران", city: "ساری", address: "دانشگاه علوم پزشکی مازندران", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۳/۰۵" },
    { id: 86, name: "دانشگاه علوم پزشکی جیرفت", president: "دکتر موسوی", presidentPhone: "09971234567", uniPhone: "034-1234567", province: "کرمان", city: "جیرفت", address: "دانشگاه علوم پزشکی جیرفت", sports: ["بسکتبال", "والیبال", "فوتسال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۳/۰۱" },
    { id: 87, name: "دانشگاه آزاد اسلامی مرودشت", president: "دکتر نادری", presidentPhone: "09981234567", uniPhone: "071-1234567", province: "فارس", city: "مرودشت", address: "دانشگاه آزاد اسلامی مرودشت", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۲/۲۸" },
    { id: 88, name: "دانشگاه علوم پزشکی رفسنجان", president: "دکتر علیپور", presidentPhone: "09991234567", uniPhone: "034-1234567", province: "کرمان", city: "رفسنجان", address: "دانشگاه علوم پزشکی رفسنجان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۲/۲۵" },
    { id: 89, name: "دانشگاه صنعتی قم", president: "دکتر صمدی", presidentPhone: "09101234567", uniPhone: "025-1234567", province: "قم", city: "قم", address: "دانشگاه صنعتی قم", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۲/۲۰" },
    { id: 90, name: "دانشگاه علوم پزشکی سبزوار", president: "دکتر رستمی", presidentPhone: "09111234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "سبزوار", address: "دانشگاه علوم پزشکی سبزوار", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۲/۱۵" },
    { id: 91, name: "دانشگاه علوم پزشکی شاهرود", president: "دکتر کریمی", presidentPhone: "09121234567", uniPhone: "023-1234567", province: "سمنان", city: "شاهرود", address: "دانشگاه علوم پزشکی شاهرود", sports: ["بسکتبال", "والیبال", "فوتسال", "دارت"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۲/۱۰" },
    { id: 92, name: "دانشگاه علوم پزشکی دامغان", president: "دکتر حسینی", presidentPhone: "09131234567", uniPhone: "023-1234567", province: "سمنان", city: "دامغان", address: "دانشگاه علوم پزشکی دامغان", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۲/۰۵" },
    { id: 93, name: "دانشگاه علوم پزشکی خوی", president: "دکتر محمدی", presidentPhone: "09141234567", uniPhone: "044-1234567", province: "آذربایجان غربی", city: "خوی", address: "دانشگاه علوم پزشکی خوی", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۲/۰۱" },
    { id: 94, name: "دانشگاه علوم پزشکی سقز", president: "دکتر رضایی", presidentPhone: "09151234567", uniPhone: "087-1234567", province: "کردستان", city: "سقز", address: "دانشگاه علوم پزشکی سقز", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۲۸" },
    { id: 95, name: "دانشگاه علوم پزشکی میبد", president: "دکتر موسوی", presidentPhone: "09161234567", uniPhone: "035-1234567", province: "یزد", city: "میبد", address: "دانشگاه علوم پزشکی میبد", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۲۵" },
    { id: 96, name: "دانشگاه علوم پزشکی تربت حیدریه", president: "دکتر نادری", presidentPhone: "09171234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "تربت حیدریه", address: "دانشگاه علوم پزشکی تربت حیدریه", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۲۰" },
    { id: 97, name: "دانشگاه علوم پزشکی بهبهان", president: "دکتر علیپور", presidentPhone: "09181234567", uniPhone: "061-1234567", province: "خوزستان", city: "بهبهان", address: "دانشگاه علوم پزشکی بهبهان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۱۵" },
    { id: 98, name: "دانشگاه علوم پزشکی گچساران", president: "دکتر صمدی", presidentPhone: "09191234567", uniPhone: "074-1234567", province: "کهگیلویه و بویراحمد", city: "گچساران", address: "دانشگاه علوم پزشکی گچساران", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۱۰" },
    { id: 99, name: "دانشگاه علوم پزشکی دزفول", president: "دکتر رستمی", presidentPhone: "09201234567", uniPhone: "061-1234567", province: "خوزستان", city: "دزفول", address: "دانشگاه علوم پزشکی دزفول", sports: ["بسکتبال", "والیبال", "بدمینتون", "دارت"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۰۵" },
    { id: 100, name: "دانشگاه علوم پزشکی آبادان", president: "دکتر کریمی", presidentPhone: "09211234567", uniPhone: "061-1234567", province: "خوزستان", city: "آبادان", address: "دانشگاه علوم پزشکی آبادان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۰۱" }
];

let universities = allUniversities.filter(u => u.status === 'approved');
let currentUniversityId = null;
let editUniversityId = null;
let currentSearch = "";
let currentPage = 1;
let itemsPerPage = 15;

function updateStats() {
    document.getElementById('totalUniversities').innerText = universities.length;
    let provinces = new Set(universities.map(u => u.province));
    document.getElementById('activeProvinces').innerText = provinces.size;
}

function searchUniversities() {
    currentSearch = document.getElementById('searchInput').value.toLowerCase();
    currentPage = 1;
    filterAndRender();
}

function filterAndRender() {
    let filtered = universities.filter(u => 
        u.name.toLowerCase().includes(currentSearch)
    );
    renderWithPagination(filtered);
}

function renderWithPagination(filtered) {
    let totalItems = filtered.length;
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    if (currentPage < 1) {
        currentPage = 1;
    }
    
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    let pageItems = filtered.slice(startIndex, endIndex);
    
    renderUniversitiesList(pageItems);
    renderPaginationControls(totalPages, totalItems);
}

function renderUniversitiesList(items) {
    let tbody = document.getElementById('universitiesTableBody');
    
    if (items.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">هیچ دانشگاهی یافت نشد</td></tr>';
        return;
    }

    let html = '';
    for (let i = 0; i < items.length; i++) {
        let u = items[i];
        html += '<tr>' +
            '<td>' + u.name + '</td>' +
            '<td>' + u.province + '</td>' +
            '<td>' + u.city + '</td>' +
            '<td>' + u.president + '</td>' +
            '<td>' + u.date + '</td>' +
            '<td><span class="status-badge status-approved">تایید شده</span></td>' +
            '<td><div class="actions-cell">' +
                '<button class="btn-details" onclick="showDetails(' + u.id + ')">' +
                    '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>' +
                    '<span>جزئیات</span>' +
                '</button>' +
                '<button class="btn-edit" onclick="openEditModal(' + u.id + ')">' +
                    '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>' +
                    '<span>ویرایش</span>' +
                '</button>' +
            '</div></td>' +
            '</tr>';
    }
    tbody.innerHTML = html;
}

function renderPaginationControls(totalPages, totalItems) {
    let container = document.getElementById('paginationContainer');
    
    if (totalItems === 0 || totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    html += '<button onclick="goToPage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + '>قبلی</button>';
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        html += '<button onclick="goToPage(1)">1</button>';
        if (startPage > 2) {
            html += '<span style="padding:0 5px;">...</span>';
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += '<button onclick="goToPage(' + i + ')" class="' + (i === currentPage ? 'active-page' : '') + '">' + i + '</button>';
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += '<span style="padding:0 5px;">...</span>';
        }
        html += '<button onclick="goToPage(' + totalPages + ')">' + totalPages + '</button>';
    }
    
    html += '<button onclick="goToPage(' + (currentPage + 1) + ')" ' + (currentPage === totalPages ? 'disabled' : '') + '>بعدی</button>';
    
    container.innerHTML = html;
}

function goToPage(page) {
    let filtered = universities.filter(u => 
        u.name.toLowerCase().includes(currentSearch)
    );
    let totalPages = Math.ceil(filtered.length / itemsPerPage);
    
    if (page < 1 || page > totalPages) {
        return;
    }
    currentPage = page;
    renderWithPagination(filtered);
}

function openEditModal(id) {
    editUniversityId = id;
    let uni = allUniversities.find(u => u.id === id);
    if (!uni) return;

    document.getElementById('editName').value = uni.name;
    document.getElementById('editPresident').value = uni.president;
    document.getElementById('editPresidentPhone').value = uni.presidentPhone;
    document.getElementById('editUniPhone').value = uni.uniPhone;
    document.getElementById('editProvince').value = uni.province;
    document.getElementById('editCity').value = uni.city;
    document.getElementById('editAddress').value = uni.address;
    document.getElementById('editStatus').value = uni.status;

    document.getElementById('editModal').style.display = 'flex';
}

function saveEdit() {
    let uni = allUniversities.find(u => u.id === editUniversityId);
    if (uni) {
        let oldStatus = uni.status;
        
        uni.name = document.getElementById('editName').value;
        uni.president = document.getElementById('editPresident').value;
        uni.presidentPhone = document.getElementById('editPresidentPhone').value;
        uni.uniPhone = document.getElementById('editUniPhone').value;
        uni.province = document.getElementById('editProvince').value;
        uni.city = document.getElementById('editCity').value;
        uni.address = document.getElementById('editAddress').value;
        uni.status = document.getElementById('editStatus').value;
        
        universities = allUniversities.filter(u => u.status === 'approved');
        
        updateStats();
        currentPage = 1;
        filterAndRender();
        
        if (oldStatus === 'approved' && uni.status === 'pending') {
            alert('⚠️ وضعیت دانشگاه به "در انتظار تایید" تغییر کرد.\n\nاین دانشگاه از لیست دانشگاه‌های تایید شده حذف شد و به بخش "درخواست‌ها" منتقل شد.\n(برای مشاهده به صفحه درخواست‌ها مراجعه کنید)');
        } else {
            alert('✅ اطلاعات دانشگاه با موفقیت به روز شد');
        }
        
        if (currentUniversityId === editUniversityId && document.getElementById('detailsView').style.display === 'block') {
            if (uni.status === 'pending') {
                backToList();
            } else {
                showDetails(editUniversityId);
            }
        }
        
        closeEditModal();
    }
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    editUniversityId = null;
}

function showDetails(id) {
    currentUniversityId = id;
    let uni = allUniversities.find(u => u.id === id);
    if (!uni) return;
    
    if (uni.status !== 'approved') {
        alert('این دانشگاه تایید نشده است و در لیست دانشگاه‌ها قابل مشاهده نیست.');
        backToList();
        return;
    }

    let sportsHtml = '';
    for (let i = 0; i < uni.sports.length; i++) {
        sportsHtml += '<span class="sport-tag">' + uni.sports[i] + '</span>';
    }

    let facilitiesHtml = '';
    for (let i = 0; i < uni.facilities.length; i++) {
        facilitiesHtml += '<span class="facility-tag">' + uni.facilities[i] + '</span>';
    }

    let imagesHtml = '';
    if (uni.images && uni.images.length > 0) {
        for (let i = 0; i < uni.images.length; i++) {
            imagesHtml += '<img src="' + uni.images[i] + '" class="gallery-img" onerror="this.style.display=\'none\'">';
        }
    } else {
        imagesHtml = '<div class="gallery-img" style="display:flex;">📷 تصویری آپلود نشده</div>';
    }

    let detailsHtml = `
        <h2 class="details-title">
            <svg width="24" height="24" fill="#1c542c" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 22l7-3.82v-6l2-1.09V17h2V9L12 3z"/></svg>
            جزئیات دانشگاه ${uni.name}
        </h2>
        <div class="details-grid">
            <div class="detail-item"><div class="detail-label">نام دانشگاه</div><div class="detail-value">${uni.name}</div></div>
            <div class="detail-item"><div class="detail-label">رئیس دانشگاه</div><div class="detail-value">${uni.president}</div></div>
            <div class="detail-item"><div class="detail-label">شماره رئیس دانشگاه</div><div class="detail-value">${uni.presidentPhone}</div></div>
            <div class="detail-item"><div class="detail-label">تلفن دانشگاه</div><div class="detail-value">${uni.uniPhone}</div></div>
            <div class="detail-item"><div class="detail-label">استان</div><div class="detail-value">${uni.province}</div></div>
            <div class="detail-item"><div class="detail-label">شهر</div><div class="detail-value">${uni.city}</div></div>
            <div class="detail-item"><div class="detail-label">آدرس دانشگاه</div><div class="detail-value">${uni.address}</div></div>
            <div class="detail-item"><div class="detail-label">تاریخ ثبت</div><div class="detail-value">${uni.date}</div></div>
            <div class="detail-item"><div class="detail-label">وضعیت</div><div class="detail-value"><span class="status-badge status-approved">تایید شده</span></div></div>
        </div>
        
        <div class="detail-item" style="margin-bottom:20px;">
            <div class="detail-label">⚽ ورزش‌های قابل اجرا در سالن</div>
            <div class="sports-list">${sportsHtml || 'هیچ ورزشی انتخاب نشده'}</div>
        </div>
        
        <div class="detail-item" style="margin-bottom:20px;">
            <div class="detail-label">🏟️ امکانات جانبی دانشگاه</div>
            <div class="facilities-list">${facilitiesHtml || 'هیچ امکاناتی انتخاب نشده'}</div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">🖼️ تصاویر آپلود شده</div>
            <div class="images-gallery">${imagesHtml}</div>
        </div>
    `;

    detailsHtml += `
        <div style="margin-top:30px; display:flex; gap:15px; justify-content:center;">
            <button class="btn-edit" onclick="openEditModal(${uni.id})">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                ویرایش اطلاعات
            </button>
        </div>
    `;

    document.getElementById('detailsContainer').innerHTML = detailsHtml;
    
    document.getElementById('listView').style.display = 'none';
    document.getElementById('detailsView').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function backToList() {
    document.getElementById('detailsView').style.display = 'none';
    document.getElementById('listView').style.display = 'block';
    universities = allUniversities.filter(u => u.status === 'approved');
    updateStats();
    currentPage = 1;
    filterAndRender();
}

let menuToggle = document.getElementById('menuToggleBtn');
let sidebar = document.getElementById('sidebarMenu');
let overlay = document.getElementById('sidebarOverlay');

if (menuToggle) {
    menuToggle.onclick = function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

if (overlay) {
    overlay.onclick = function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
});

window.onclick = function(event) {
    let modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeEditModal();
    }
}

let profileBtn = document.getElementById('profileBtn');
let profileDropdown = document.getElementById('profileDropdown');

if (profileBtn) {
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });
}

document.addEventListener('click', function(event) {
    if (profileDropdown && profileDropdown.classList.contains('show')) {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.remove('show');
        }
    }
});

let userName = localStorage.getItem('adminName') || 'نام ادمین';
let dropdownName = document.getElementById('dropdownUserName');
if (dropdownName) {
    dropdownName.textContent = userName;
}

updateStats();
filterAndRender();
