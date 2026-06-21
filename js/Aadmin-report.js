let universities = [
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
    { id: 94, name: "دانشگاه علوم پزشکی سقز", president: "دکتر رضایی", presidentPhone: "09151234567", uniPhone: "087-1234567", province: "کردستان", city: "سقز", address: "دانشگاه علوم پزشکی سقز", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰３/۰۱/۲۸" },
    { id: 95, name: "دانشگاه علوم پزشکی میبد", president: "دکتر موسوی", presidentPhone: "09161234567", uniPhone: "035-1234567", province: "یزد", city: "میبد", address: "دانشگاه علوم پزشکی میبد", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۲۵" },
    { id: 96, name: "دانشگاه علوم پزشکی تربت حیدریه", president: "دکتر نادری", presidentPhone: "09171234567", uniPhone: "051-1234567", province: "خراسان رضوی", city: "تربت حیدریه", address: "دانشگاه علوم پزشکی تربت حیدریه", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["زمین چمن", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۲۰" },
    { id: 97, name: "دانشگاه علوم پزشکی بهبهان", president: "دکتر علیپور", presidentPhone: "09181234567", uniPhone: "061-1234567", province: "خوزستان", city: "بهبهان", address: "دانشگاه علوم پزشکی بهبهان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["استخر"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۱۵" },
    { id: 98, name: "دانشگاه علوم پزشکی گچساران", president: "دکتر صمدی", presidentPhone: "09191234567", uniPhone: "074-1234567", province: "کهگیلویه و بویراحمد", city: "گچساران", address: "دانشگاه علوم پزشکی گچساران", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۱۰" },
    { id: 99, name: "دانشگاه علوم پزشکی دزفول", president: "دکتر رستمی", presidentPhone: "09201234567", uniPhone: "061-1234567", province: "خوزستان", city: "دزفول", address: "دانشگاه علوم پزشکی دزفول", sports: ["بسکتبال", "والیبال", "بدمینتون", "دارت"], facilities: ["استخر", "زمین تنیس"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۰۵" },
    { id: 100, name: "دانشگاه علوم پزشکی آبادان", president: "دکتر کریمی", presidentPhone: "09211234567", uniPhone: "061-1234567", province: "خوزستان", city: "آبادان", address: "دانشگاه علوم پزشکی آبادان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "approved", date: "۱۴۰۳/۰۱/۰۱" }
];

let requests = [
    { id: 1, name: "دانشگاه علوم پزشکی ایران", president: "دکتر رضایی", presidentPhone: "09123456789", uniPhone: "021-1234567", province: "تهران", city: "تهران", address: "خیابان انقلاب، دانشگاه علوم پزشکی ایران", sports: ["بسکتبال", "والیبال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۹" },
    { id: 2, name: "دانشگاه علوم کشاورزی و منابع طبیعی گرگان", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "017-1234567", province: "گلستان", city: "گرگان", address: "دانشگاه علوم کشاورزی گرگان", sports: ["والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۷" },
    { id: 3, name: "دانشگاه علوم پزشکی کرمانشاه", president: "دکتر محمدی", presidentPhone: "09123456789", uniPhone: "083-1234567", province: "کرمانشاه", city: "کرمانشاه", address: "دانشگاه علوم پزشکی کرمانشاه", sports: ["بسکتبال", "فوتسال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۵" },
    { id: 4, name: "دانشگاه علوم پزشکی کرمان", president: "دکتر حسینی", presidentPhone: "09123456789", uniPhone: "034-1234567", province: "کرمان", city: "کرمان", address: "دانشگاه علوم پزشکی کرمان", sports: ["والیبال", "پینگ پنگ"], facilities: ["زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۳" },
    { id: 5, name: "دانشگاه علوم پزشکی ارومیه", president: "دکتر نادری", presidentPhone: "09123456789", uniPhone: "044-1234567", province: "آذربایجان غربی", city: "ارومیه", address: "دانشگاه علوم پزشکی ارومیه", sports: ["بسکتبال", "والیبال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۲" },
    { id: 6, name: "دانشگاه علوم پزشکی زنجان", president: "دکتر علیپور", presidentPhone: "09123456789", uniPhone: "024-1234567", province: "زنجان", city: "زنجان", address: "دانشگاه علوم پزشکی زنجان", sports: ["فوتسال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۹" },
    { id: 7, name: "دانشگاه علوم پزشکی شهرکرد", president: "دکتر صمدی", presidentPhone: "09123456789", uniPhone: "038-1234567", province: "چهارمحال و بختیاری", city: "شهرکرد", address: "دانشگاه علوم پزشکی شهرکرد", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۸" },
    { id: 8, name: "دانشگاه علوم پزشکی بجنورد", president: "دکتر رستمی", presidentPhone: "09123456789", uniPhone: "058-1234567", province: "خراسان شمالی", city: "بجنورد", address: "دانشگاه علوم پزشکی بجنورد", sports: ["والیبال", "پینگ پنگ"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۶" },
    { id: 9, name: "دانشگاه علوم پزشکی یاسوج", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "074-1234567", province: "کهگیلویه و بویراحمد", city: "یاسوج", address: "دانشگاه علوم پزشکی یاسوج", sports: ["بسکتبال", "فوتسال", "تیراندازی"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۵" },
    { id: 10, name: "دانشگاه علوم پزشکی سمنان", president: "دکتر حسینی", presidentPhone: "09123456789", uniPhone: "023-1234567", province: "سمنان", city: "سمنان", address: "دانشگاه علوم پزشکی سمنان", sports: ["والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۳" },
    { id: 11, name: "دانشگاه علوم پزشکی رفسنجان", president: "دکتر محمدی", presidentPhone: "09123456789", uniPhone: "034-1234567", province: "کرمان", city: "رفسنجان", address: "دانشگاه علوم پزشکی رفسنجان", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۱" },
    { id: 12, name: "دانشگاه صنعتی امیرکبیر", president: "دکتر احمدی", presidentPhone: "09123456789", uniPhone: "021-1234567", province: "تهران", city: "تهران", address: "خیابان حافظ، دانشگاه صنعتی امیرکبیر", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن", "استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۲" },
    { id: 13, name: "دانشگاه صنعتی خواجه نصیرالدین طوسی", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "021-1234567", province: "تهران", city: "تهران", address: "خیابان مطهری، دانشگاه صنعتی خواجه نصیر", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["استخر", "زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۴" },
    { id: 14, name: "دانشگاه علوم پزشکی قم", president: "دکتر رضایی", presidentPhone: "09123456789", uniPhone: "025-1234567", province: "قم", city: "قم", address: "بلوار جمهوری، دانشگاه علوم پزشکی قم", sports: ["والیبال", "بدمینتون", "پینگ پنگ"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۳" },
    { id: 15, name: "دانشگاه علوم پزشکی البرز", president: "دکتر حسینی", presidentPhone: "09123456789", uniPhone: "026-1234567", province: "البرز", city: "کرج", address: "بلوار دانشجو، دانشگاه علوم پزشکی البرز", sports: ["بسکتبال", "فوتسال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۱" },
    { id: 16, name: "دانشگاه علوم پزشکی گیلان", president: "دکتر نادری", presidentPhone: "09123456789", uniPhone: "013-1234567", province: "گیلان", city: "رشت", address: "بلوار دانشگاه، دانشگاه علوم پزشکی گیلان", sports: ["والیبال", "شطرنج", "دارت"], facilities: ["زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۰" },
    { id: 17, name: "دانشگاه علوم پزشکی زاهدان", president: "دکتر علیپور", presidentPhone: "09123456789", uniPhone: "054-1234567", province: "سیستان و بلوچستان", city: "زاهدان", address: "بلوار دانشگاه، دانشگاه علوم پزشکی زاهدان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۸" },
    { id: 18, name: "دانشگاه علوم پزشکی کردستان", president: "دکتر صمدی", presidentPhone: "09123456789", uniPhone: "087-1234567", province: "کردستان", city: "سنندج", address: "بلوار دانشگاه، دانشگاه علوم پزشکی کردستان", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۶" },
    { id: 19, name: "دانشگاه علوم پزشکی هرمزگان", president: "دکتر رستمی", presidentPhone: "09123456789", uniPhone: "076-1234567", province: "هرمزگان", city: "بندرعباس", address: "بلوار دانشگاه، دانشگاه علوم پزشکی هرمزگان", sports: ["والیبال", "پینگ پنگ", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۴" },
    { id: 20, name: "دانشگاه علوم پزشکی اراک", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "086-1234567", province: "مرکزی", city: "اراک", address: "بلوار دانشگاه، دانشگاه علوم پزشکی اراک", sports: ["بسکتبال", "فوتسال", "شطرنج"], facilities: ["استخر", "زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۱" }
];

let waitingList = [
    { id: 1, name: "دانشگاه صنعتی امیرکبیر", province: "تهران", city: "تهران", date: "۱۴۰۴/۰۲/۲۰", status: "approved", statusText: "تایید شده" },
    { id: 2, name: "دانشگاه علوم پزشکی ایران", province: "تهران", city: "تهران", date: "۱۴۰۴/۰۲/۱۹", status: "pending", statusText: "در انتظار" },
    { id: 3, name: "دانشگاه صنعتی خواجه نصیرالدین طوسی", province: "تهران", city: "تهران", date: "۱۴۰۴/۰۲/۱۸", status: "rejected", statusText: "رد شده" },
    { id: 4, name: "دانشگاه علوم کشاورزی و منابع طبیعی گرگان", province: "گلستان", city: "گرگان", date: "۱۴۰۴/۰۲/۱۷", status: "pending", statusText: "در انتظار" },
    { id: 5, name: "دانشگاه صنعتی نوشیروانی بابل", province: "مازندران", city: "بابل", date: "۱۴۰۴/۰۲/۱۶", status: "approved", statusText: "تایید شده" },
    { id: 6, name: "دانشگاه علوم پزشکی کرمانشاه", province: "کرمانشاه", city: "کرمانشاه", date: "۱۴۰۴/۰۲/۱۵", status: "pending", statusText: "در انتظار" },
    { id: 7, name: "دانشگاه علوم پزشکی همدان", province: "همدان", city: "همدان", date: "۱۴۰۴/۰۲/۱۴", status: "rejected", statusText: "رد شده" },
    { id: 8, name: "دانشگاه علوم پزشکی کرمان", province: "کرمان", city: "کرمان", date: "۱۴۰۴/۰۲/۱۳", status: "pending", statusText: "در انتظار" },
    { id: 9, name: "دانشگاه علوم پزشکی ارومیه", province: "آذربایجان غربی", city: "ارومیه", date: "۱۴۰۴/۰۲/۱۲", status: "pending", statusText: "در انتظار" },
    { id: 10, name: "دانشگاه علوم پزشکی زاهدان", province: "سیستان و بلوچستان", city: "زاهدان", date: "۱۴۰۴/۰۲/۱۱", status: "rejected", statusText: "رد شده" },
    { id: 11, name: "دانشگاه علوم پزشکی بوشهر", province: "بوشهر", city: "بوشهر", date: "۱۴۰۴/۰۲/۱۰", status: "approved", statusText: "تایید شده" },
    { id: 12, name: "دانشگاه علوم پزشکی زنجان", province: "زنجان", city: "زنجان", date: "۱۴۰۴/۰۲/۰۹", status: "pending", statusText: "در انتظار" },
    { id: 13, name: "دانشگاه علوم پزشکی شهرکرد", province: "چهارمحال و بختیاری", city: "شهرکرد", date: "۱۴۰۴/۰۲/۰۸", status: "pending", statusText: "در انتظار" },
    { id: 14, name: "دانشگاه علوم پزشکی ایلام", province: "ایلام", city: "ایلام", date: "۱۴۰۴/۰۲/۰۷", status: "rejected", statusText: "رد شده" },
    { id: 15, name: "دانشگاه علوم پزشکی بجنورد", province: "خراسان شمالی", city: "بجنورد", date: "۱۴۰۴/۰۲/۰۶", status: "pending", statusText: "در انتظار" },
    { id: 16, name: "دانشگاه علوم پزشکی یاسوج", province: "کهگیلویه و بویراحمد", city: "یاسوج", date: "۱۴۰۴/۰۲/۰۵", status: "pending", statusText: "در انتظار" },
    { id: 17, name: "دانشگاه علوم پزشکی بیرجند", province: "خراسان جنوبی", city: "بیرجند", date: "۱۴۰۴/۰۲/۰۴", status: "approved", statusText: "تایید شده" },
    { id: 18, name: "دانشگاه علوم پزشکی سمنان", province: "سمنان", city: "سمنان", date: "۱۴۰۴/۰۲/۰۳", status: "pending", statusText: "در انتظار" },
    { id: 19, name: "دانشگاه علوم پزشکی اردبیل", province: "اردبیل", city: "اردبیل", date: "۱۴۰۴/۰۲/۰۲", status: "rejected", statusText: "رد شده" },
    { id: 20, name: "دانشگاه علوم پزشکی رفسنجان", province: "کرمان", city: "رفسنجان", date: "۱۴۰۴/۰۲/۰۱", status: "pending", statusText: "در انتظار" }
];

let admins = [
    { id: 1, username: "admin_super", role: "super", roleName: "مدیر کل", status: "active" },
    { id: 2, username: "modir_sport", role: "admin", roleName: "مدیر ارشد", status: "active" },
    { id: 3, username: "news_admin", role: "manager", roleName: "مدیر بخش", status: "active" },
    { id: 4, username: "ticket_viewer", role: "viewer", roleName: "کاربر عادی", status: "inactive" }
];

let tickets = [
    { id: "T1001", status: "open" },
    { id: "T1002", status: "open" },
    { id: "T1003", status: "closed" },
    { id: "T1004", status: "open" },
    { id: "T1005", status: "closed" },
    { id: "T1006", status: "open" }
];

let newsList = [
    { id: 1, status: "active" },
    { id: 2, status: "active" },
    { id: 3, status: "inactive" },
    { id: 4, status: "active" }
];

let adminActivities = [
    { adminName: "admin_super", action: "تایید دانشگاه تهران", time: "۱۴۰۴/۰۲/۲۵ - ۱۰:۳۰", type: "approve" },
    { adminName: "admin_super", action: "افزودن خبر جدید مسابقات فوتسال", time: "۱۴۰۴/۰۲/۲۴ - ۱۴:۱۵", type: "news" },
    { adminName: "modir_sport", action: "ویرایش اطلاعات دانشگاه صنعتی شریف", time: "۱۴۰۴/۰۲/۲۴ - ۱۱:۲۰", type: "edit" },
    { adminName: "news_admin", action: "حذف خبر قدیمی", time: "۱۴۰۴/۰۲/۲۳ - ۱۶:۴۵", type: "delete" },
    { adminName: "admin_super", action: "پاسخ به تیکت T1003", time: "۱۴۰۴/۰۲/۲۳ - ۰۹:۰۰", type: "ticket" },
    { adminName: "modir_sport", action: "رد درخواست دانشگاه نامعتبر", time: "۱۴۰۴/۰۲/۲۲ - ۱۳:۳۰", type: "reject" },
    { adminName: "admin_super", action: "افزودن ادمین جدید modir_sport", time: "۱۴۰۴/۰۲/۲۱ - ۱۲:۰۰", type: "admin" },
    { adminName: "news_admin", action: "ویرایش خبر افتتاحیه سالن", time: "۱۴۰۴/۰۲/۲۱ - ۱۰:۲۰", type: "edit" },
    { adminName: "modir_sport", action: "تایید درخواست دانشگاه شیراز", time: "۱۴۰۴/۰۲/۲۰ - ۱۵:۴۵", type: "approve" },
    { adminName: "admin_super", action: "تغییر وضعیت ادمین ticket_viewer", time: "۱۴۰۴/۰۲/۱۹ - ۱۱:۰۰", type: "admin" },
    { adminName: "modir_sport", action: "ایجاد سایت برای دانشگاه فردوسی", time: "۱۴۰۴/۰۲/۱۸ - ۱۴:۳۰", type: "site" },
    { adminName: "admin_super", action: "بروزرسانی تنظیمات سیستم", time: "۱۴۰۴/۰۲/۱۷ - ۰۹:۱۵", type: "settings" }
];

let roleColors = { super: '#d97706', admin: '#4338ca', manager: '#059669', viewer: '#9333ea' };
let roleNames = { super: 'مدیر کل', admin: 'مدیر ارشد', manager: 'مدیر بخش', viewer: 'کاربر عادی' };

function getActivityIcon(type) {
    switch(type) {
        case 'approve': return '<svg width="18" height="18" fill="#2b7a44" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
        case 'reject': return '<svg width="18" height="18" fill="#d9534f" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
        case 'news': return '<svg width="18" height="18" fill="#3498db" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>';
        case 'edit': return '<svg width="18" height="18" fill="#f39c12" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
        case 'delete': return '<svg width="18" height="18" fill="#d9534f" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';
        case 'ticket': return '<svg width="18" height="18" fill="#9b59b6" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/></svg>';
        case 'admin': return '<svg width="18" height="18" fill="#2c3e2f" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>';
        case 'site': return '<svg width="18" height="18" fill="#2b7a44" viewBox="0 0 24 24"><path d="M12 2L1 9l4 2.18v6L12 22l7-3.82v-6l2-1.09V17h2V9L12 2z"/></svg>';
        default: return '<svg width="18" height="18" fill="#8aa08e" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
    }
}

function updateStats() {
    let totalUni = document.getElementById('totalUniversities');
    let totalAdminsEl = document.getElementById('totalAdmins');
    let totalTicketsEl = document.getElementById('totalTickets');
    let totalNewsEl = document.getElementById('totalNews');
    if (totalUni) totalUni.innerText = universities.length;
    if (totalAdminsEl) totalAdminsEl.innerText = admins.length;
    if (totalTicketsEl) totalTicketsEl.innerText = tickets.length;
    if (totalNewsEl) totalNewsEl.innerText = newsList.length;
}

function renderUniversitiesReport() {
    let provinces = {};
    universities.forEach(u => { provinces[u.province] = (provinces[u.province] || 0) + 1; });
    
    let tbody = document.getElementById('universitiesReportBody');
    if (!tbody) return;
    let html = '';
    for (let province in provinces) {
        let percent = ((provinces[province] / universities.length) * 100).toFixed(1);
        html += '<tr><td style="text-align:center;">' + province + '</td><td>' + provinces[province] + '</td><td>' + percent + '%</td></tr>';
    }
    tbody.innerHTML = html;
    
    let approved = universities.filter(u => u.status === 'approved').length;
    let pending = universities.filter(u => u.status === 'pending').length;
    let total = universities.length;
    let approvedPercent = (approved / total * 100).toFixed(1);
    let pendingPercent = (pending / total * 100).toFixed(1);
    
    let approvedCountEl = document.getElementById('approvedCount');
    let pendingCountEl = document.getElementById('pendingCount');
    let approvedBarEl = document.getElementById('approvedBar');
    let pendingBarEl = document.getElementById('pendingBar');
    
    if (approvedCountEl) approvedCountEl.innerText = approved + ' (' + approvedPercent + '%)';
    if (pendingCountEl) pendingCountEl.innerText = pending + ' (' + pendingPercent + '%)';
    if (approvedBarEl) approvedBarEl.style.width = approvedPercent + '%';
    if (pendingBarEl) pendingBarEl.style.width = pendingPercent + '%';
    
    let roles = { super: 0, admin: 0, manager: 0, viewer: 0 };
    admins.forEach(a => { roles[a.role]++; });
    
    let pieHtml = '<div class="pie-chart">';
    for (let role in roles) {
        let percent = (roles[role] / admins.length * 100).toFixed(1);
        pieHtml += `
            <div class="pie-item">
                <div class="pie-color" style="background: ${roleColors[role]}"></div>
                <div class="pie-label">${roleNames[role]}</div>
                <div class="pie-value">${roles[role]} نفر</div>
                <div class="pie-bar">
                    <div class="pie-bar-fill" style="width: ${percent}%; background: ${roleColors[role]}"></div>
                </div>
                <div class="pie-value">${percent}%</div>
            </div>
        `;
    }
    pieHtml += '</div>';
    let rolesPieEl = document.getElementById('rolesPieChart');
    if (rolesPieEl) rolesPieEl.innerHTML = pieHtml;
    
    let openTickets = tickets.filter(t => t.status === 'open').length;
    let closedTickets = tickets.filter(t => t.status === 'closed').length;
    let openPercent = (openTickets / tickets.length * 100).toFixed(1);
    let closedPercent = (closedTickets / tickets.length * 100).toFixed(1);
    
    let openTicketsCountEl = document.getElementById('openTicketsCount');
    let closedTicketsCountEl = document.getElementById('closedTicketsCount');
    let openTicketsBarEl = document.getElementById('openTicketsBar');
    let closedTicketsBarEl = document.getElementById('closedTicketsBar');
    
    if (openTicketsCountEl) openTicketsCountEl.innerText = openTickets + ' (' + openPercent + '%)';
    if (closedTicketsCountEl) closedTicketsCountEl.innerText = closedTickets + ' (' + closedPercent + '%)';
    if (openTicketsBarEl) openTicketsBarEl.style.width = openPercent + '%';
    if (closedTicketsBarEl) closedTicketsBarEl.style.width = closedPercent + '%';
}

function renderActivities() {
    let container = document.getElementById('activityLog');
    if (!container) return;
    let html = '';
    for (let i = 0; i < adminActivities.length; i++) {
        let act = adminActivities[i];
        html += `
            <div class="activity-item">
                <div class="activity-icon">${getActivityIcon(act.type)}</div>
                <div class="activity-content">
                    <div class="activity-text">${act.adminName} - ${act.action}</div>
                    <div class="activity-time">${act.time}</div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function exportUniversitiesReport() {
    let format = document.getElementById('uniExportFormat').value;
    let provinces = {};
    universities.forEach(u => { provinces[u.province] = (provinces[u.province] || 0) + 1; });
    let data = [];
    for (let province in provinces) {
        let percent = ((provinces[province] / universities.length) * 100).toFixed(1);
        data.push({ استان: province, تعداد: provinces[province], درصد: percent + '%' });
    }
    
    if (format === 'pdf') {
        let content = `
            <html dir="rtl">
            <head><meta charset="UTF-8"><style>body{font-family:Tahoma; padding:20px;} table{width:100%; border-collapse:collapse;} th,td{border:1px solid #ddd; padding:8px; text-align:center;} th{background:#f5f5f5;}</style></head>
            <body>
            <h2 style="color:#1a472a;">گزارش دانشگاه‌ها بر اساس استان</h2>
            <table><thead><tr><th>استان</th><th>تعداد دانشگاه</th><th>درصد</th></tr></thead><tbody>
        `;
        data.forEach(item => { content += `<tr><td>${item.استان}</td><td>${item.تعداد}</td><td>${item.درصد}</td></tr>`; });
        content += `</tbody></table><p style="margin-top:20px;">تاریخ تولید: ${new Date().toLocaleDateString('fa-IR')}</p></body></html>`;
        let blob = new Blob([content], {type: 'application/pdf'});
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'گزارش_دانشگاه‌ها.pdf';
        link.click();
    } else if (format === 'csv') {
        let csv = "استان,تعداد دانشگاه,درصد\n";
        data.forEach(item => { csv += `${item.استان},${item.تعداد},${item.درصد}\n`; });
        downloadFile(csv, "گزارش_دانشگاه‌ها.csv", "text/csv");
    } else {
        let txt = "گزارش دانشگاه‌ها بر اساس استان\n========================\n\n";
        data.forEach(item => { txt += `${item.استان}: ${item.تعداد} دانشگاه (${item.درصد})\n`; });
        downloadFile(txt, "گزارش_دانشگاه‌ها.txt", "text/plain");
    }
}

function exportActivitiesReport() {
    let format = document.getElementById('activityExportFormat').value;
    
    if (format === 'pdf') {
        let content = `
            <html dir="rtl">
            <head><meta charset="UTF-8"><style>body{font-family:Tahoma; padding:20px;} table{width:100%; border-collapse:collapse;} th,td{border:1px solid #ddd; padding:8px; text-align:center;} th{background:#f5f5f5;}</style></head>
            <body>
            <h2 style="color:#1a472a;">گزارش فعالیت ادمین‌ها</h2>
            <table><thead><tr><th>ادمین</th><th>فعالیت</th><th>زمان</th></tr></thead><tbody>
        `;
        for (let act of adminActivities) {
            content += `<tr><td>${act.adminName}</td><td>${act.action}</td><td>${act.time}</td></tr>`;
        }
        content += `</tbody></table><p style="margin-top:20px;">تاریخ تولید: ${new Date().toLocaleDateString('fa-IR')}</p></body></html>`;
        let blob = new Blob([content], {type: 'application/pdf'});
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'گزارش_فعالیت_ادمین‌ها.pdf';
        link.click();
    } else if (format === 'csv') {
        let csv = "ادمین,فعالیت,زمان\n";
        for (let act of adminActivities) { csv += `${act.adminName},${act.action},${act.time}\n`; }
        downloadFile(csv, "گزارش_فعالیت_ادمین‌ها.csv", "text/csv");
    } else {
        let txt = "گزارش فعالیت ادمین‌ها\n========================\n\n";
        for (let act of adminActivities) { txt += `ادمین: ${act.adminName}\nفعالیت: ${act.action}\nزمان: ${act.time}\n------------------------\n`; }
        downloadFile(txt, "گزارش_فعالیت_ادمین‌ها.txt", "text/plain");
    }
}

function downloadFile(content, filename, type) {
    let blob = new Blob(["\uFEFF" + content], {type: type});
    let a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
}

function logout() {
    if (confirm('آیا از خروج از پنل مطمئن هستید؟')) {
        window.location.href = 'main_index.html';
    }
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
renderUniversitiesReport();
renderActivities();