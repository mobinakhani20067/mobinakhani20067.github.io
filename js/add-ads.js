let currentUser = { fullName: "فاطمه محمدی" };
try {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        if (userData && userData.fullName) currentUser = userData;
    }
} catch(e) {}

function numberToWords(num) {
    if (num === 0 || isNaN(num)) return "صفر";
    if (num > 999999999) return "مبلغ بیش از حد مجاز";
    
    const ones = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
    const tens = ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
    const hundreds = ["", "یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"];
    const units = ["", "هزار", "میلیون", "میلیارد"];
    
    function convertChunk(n) {
        if (n === 0) return "";
        let result = "";
        let h = Math.floor(n / 100);
        let r = n % 100;
        
        if (h > 0) {
            result += hundreds[h];
            if (r > 0) result += " و ";
        }
        
        if (r >= 10 && r <= 19) {
            if (r === 10) result += "ده";
            else if (r === 11) result += "یازده";
            else if (r === 12) result += "دوازده";
            else if (r === 13) result += "سیزده";
            else if (r === 14) result += "چهارده";
            else if (r === 15) result += "پانزده";
            else if (r === 16) result += "شانزده";
            else if (r === 17) result += "هفده";
            else if (r === 18) result += "هجده";
            else if (r === 19) result += "نوزده";
        } else {
            let t = Math.floor(r / 10);
            let o = r % 10;
            if (t > 0) {
                result += tens[t];
                if (o > 0) result += " و ";
            }
            if (o > 0) result += ones[o];
        }
        
        return result.trim();
    }
    
    let parts = [];
    let temp = num;
    let unitIndex = 0;
    
    while (temp > 0) {
        let chunk = temp % 1000;
        if (chunk > 0) {
            let chunkText = convertChunk(chunk);
            if (chunkText) {
                if (unitIndex > 0) {
                    parts.unshift(chunkText + " " + units[unitIndex]);
                } else {
                    parts.unshift(chunkText);
                }
            }
        }
        temp = Math.floor(temp / 1000);
        unitIndex++;
    }
    
    let result = parts.join(" و ");
    return result;
}

const priceInput = document.getElementById('priceAmount');
const wordsSpan = document.getElementById('priceInWords');
const priceLabel = document.getElementById('priceLabel');
const rentPeriodSelect = document.getElementById('rentPeriod');

if (priceInput) {
    priceInput.addEventListener('input', function(e) {
        let value = this.value;
        let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        for (let i = 0; i < 10; i++) {
            value = value.replace(persianNumbers[i], i);
        }
        let numbers = value.replace(/[^0-9]/g, '');
        if (numbers.length > 9) {
            numbers = numbers.slice(0, 9);
            showToast('حداکثر مبلغ مجاز 999,999,999 تومان است', true);
        }
        
        this.value = numbers;
        
        if (numbers === '') {
            if (wordsSpan) wordsSpan.style.display = 'none';
            return;
        }
        
        let num = parseInt(numbers, 10);
        if (!isNaN(num) && num > 0) {
            if (num > 999999999) {
                showToast('حداکثر مبلغ مجاز 999,999,999 تومان است', true);
                this.value = '999999999';
                num = 999999999;
            }
            if (wordsSpan) {
                wordsSpan.innerHTML = `📝 ${numberToWords(num)} تومان`;
                wordsSpan.style.display = 'inline-block';
            }
        } else {
            if (wordsSpan) wordsSpan.style.display = 'none';
        }
    });
}

function togglePriceSection() {
    const adType = document.querySelector('input[name="adType"]:checked')?.value;
    const priceSection = document.getElementById('priceSection');
    
    if (adType === 'donate') {
        if (priceSection) priceSection.classList.add('hidden');
        if (priceInput) priceInput.value = '';
        if (wordsSpan) wordsSpan.style.display = 'none';
    } else {
        if (priceSection) priceSection.classList.remove('hidden');
        if (adType === 'rent') {
            if (priceLabel) priceLabel.innerHTML = 'مبلغ اجاره <span class="required">*</span>';
            if (priceInput) priceInput.placeholder = "مبلغ اجاره به تومان";
            if (rentPeriodSelect) rentPeriodSelect.style.display = 'block';
        } else {
            if (priceLabel) priceLabel.innerHTML = 'قیمت فروش <span class="required">*</span>';
            if (priceInput) priceInput.placeholder = "قیمت فروش به تومان";
            if (rentPeriodSelect) rentPeriodSelect.style.display = 'none';
        }
    }
}

let selectedImages = [];
const uploadArea = document.getElementById('imageUploadArea');
const imageInputElem = document.getElementById('imageUpload');
const previewContainer = document.getElementById('imagePreviewContainer');

if (uploadArea) {
    uploadArea.onclick = () => imageInputElem.click();
    uploadArea.ondragover = (e) => { e.preventDefault(); uploadArea.style.borderColor = '#2c7a4a'; uploadArea.style.background = '#e8f5e9'; };
    uploadArea.ondragleave = () => { uploadArea.style.borderColor = '#ccc'; uploadArea.style.background = '#fafafa'; };
    uploadArea.ondrop = (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ccc';
        uploadArea.style.background = '#fafafa';
        handleImageFiles(Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')));
    };
}

if (imageInputElem) {
    imageInputElem.onchange = (e) => { handleImageFiles(Array.from(e.target.files)); imageInputElem.value = ''; };
}

function handleImageFiles(files) {
    const remaining = 3 - selectedImages.length;
    const toAdd = files.slice(0, remaining);
    toAdd.forEach(file => {
        if (file.size > 5 * 1024 * 1024) {
            showToast('حجم تصویر نباید بیشتر از 5 مگابایت باشد', true);
            return;
        }
        selectedImages.push(file);
    });
    renderPreviews();
}

function renderPreviews() {
    if (!previewContainer) return;
    previewContainer.innerHTML = '';
    selectedImages.forEach((file, idx) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const div = document.createElement('div');
            div.className = 'image-preview-item';
            div.innerHTML = `<img src="${e.target.result}"><button class="remove-image" data-idx="${idx}">×</button>`;
            previewContainer.appendChild(div);
            div.querySelector('.remove-image').onclick = () => {
                selectedImages.splice(idx, 1);
                renderPreviews();
            };
        };
        reader.readAsDataURL(file);
    });
}

function showToast(msg, isError = false) {
    const toast = document.getElementById('toastMsg');
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) toast.classList.add('error');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
    }, 3000);
}

function getListings() {
    const stored = localStorage.getItem('marketplaceListings');
    return stored ? JSON.parse(stored) : [];
}

function saveListings(listings) {
    localStorage.setItem('marketplaceListings', JSON.stringify(listings));
}

function getPersianDate() {
    return new Date().toLocaleDateString('fa-IR');
}

document.getElementById('newListingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const type = document.querySelector('input[name="adType"]:checked')?.value;
    const title = document.getElementById('productTitle')?.value.trim();
    if (!title) { showToast('لطفاً عنوان محصول را وارد کنید', true); return; }
    
    const desc = document.getElementById('productDesc')?.value.trim();
    if (!desc) { showToast('لطفاً توضیحات محصول را وارد کنید', true); return; }
    
    const contact = document.getElementById('contactInfo')?.value.trim();
    if (!contact) { showToast('لطفاً اطلاعات تماس خود را وارد کنید', true); return; }
    
    let priceDisplay = "رایگان";
    if (type !== 'donate') {
        let priceValue = priceInput?.value || '';
        let priceNum = parseInt(priceValue, 10);
        
        if (isNaN(priceNum) || priceNum <= 0) { 
            showToast('لطفاً مبلغ معتبر وارد کنید (مثال: 100000)', true); 
            return; 
        }
        
        if (priceNum > 999999999) {
            showToast('حداکثر مبلغ مجاز 999,999,999 تومان است', true);
            return;
        }
        
        if (type === 'rent') {
            const period = rentPeriodSelect?.value || 'روز';
            priceDisplay = priceNum.toLocaleString('fa-IR') + " تومان/" + period;
        } else {
            priceDisplay = priceNum.toLocaleString('fa-IR') + " تومان";
        }
    }
    
    const condition = document.getElementById('condition')?.value || "";
    const category = document.getElementById('category')?.value || "";
    let fullDesc = desc;
    if (condition) fullDesc += ` | وضعیت: ${condition}`;
    if (category) fullDesc += ` | دسته: ${category}`;
    
    let listings = getListings();
    const newId = listings.length > 0 ? Math.max(...listings.map(l => l.id)) + 1 : 1;
    
    listings.push({
        id: newId, type: type, title: title, price: priceDisplay,
        desc: fullDesc, owner: currentUser.fullName, contact: contact,
        date: getPersianDate()
    });
    saveListings(listings);
    
    document.getElementById('productTitle').value = '';
    document.getElementById('productDesc').value = '';
    document.getElementById('contactInfo').value = '';
    if (priceInput) priceInput.value = '';
    document.getElementById('category').value = '';
    document.getElementById('condition').value = 'نو';
    document.querySelector('input[name="adType"][value="sale"]').checked = true;
    selectedImages = [];
    if (previewContainer) previewContainer.innerHTML = '';
    if (wordsSpan) wordsSpan.style.display = 'none';
    
    showToast(`✅ آگهی "${title}" با موفقیت ثبت شد!`);
    togglePriceSection();
});

document.querySelectorAll('input[name="adType"]').forEach(radio => {
    radio.addEventListener('change', togglePriceSection);
});

togglePriceSection();
