let listings = [
    { id: 1, type: "rent", title: "راکت تنیس حرفه‌ای", price: "30000", desc: "راکت حرفه‌ای برند ویلسون، یک ماه اجاره", owner: "سارا احمدی", ownerContact: "@sara.ahmadi", ownerId: "98123456", date: "۱۴۰۴/۰۲/۲۰" },
    { id: 2, type: "sale", title: "توپ فوتبال", price: "250000", desc: "توپ فوتبال استاندارد، کم کارکرد", owner: "مریم کریمی", ownerContact: "09123456789", ownerId: "98123457", date: "۱۴۰۴/۰۲/۱۸" },
    { id: 3, type: "donate", title: "دمبل 5 کیلویی", price: "0", desc: "کاملاً نو، فقط یکبار استفاده", owner: "زهرا حسینی", ownerContact: "@zahra.h", ownerId: "98123458", date: "۱۴۰۴/۰۲/۱۵" },
    { id: 4, type: "rent", title: "تشک یوگا", price: "15000", desc: "تشک یوگا با ضخامت مناسب", owner: "نرگس رحیمی", ownerContact: "09198765432", ownerId: "98123459", date: "۱۴۰۴/۰۲/۱۴" },
    { id: 5, type: "sale", title: "ساک ورزشی", price: "180000", desc: "ساک بزرگ برند نایک، در حد نو", owner: "فاطمه محمدی", ownerContact: "@fatemeh.m", ownerId: "98123460", date: "۱۴۰۴/۰۲/۱۲" },
    { id: 6, type: "donate", title: "کفش کوهپیمایی", price: "0", desc: "سایز 38، فقط دو بار استفاده", owner: "مینا احمدی", ownerContact: "09123334455", ownerId: "98123461", date: "۱۴۰۴/۰۲/۱۰" }
];

let filteredListings = [];
let currentPage = 1;
let currentEditId = null;
const itemsPerPage = 8;

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

function saveListings() {
    localStorage.setItem('adminMarketplaceListings', JSON.stringify(listings));
}

function loadListings() {
    const saved = localStorage.getItem('adminMarketplaceListings');
    if (saved) {
        listings = JSON.parse(saved);
    } else {
        saveListings();
    }
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

function getTypeText(type) {
    if (type === "rent") return "اجاره";
    if (type === "sale") return "فروش";
    return "اهدایی";
}

function getPriceDisplay(price, type) {
    if (type === "donate" || price === "0" || price === 0) return "رایگان";
    return Number(price).toLocaleString() + " تومان";
}

function filterData() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const typeValue = document.getElementById('typeFilter').value;

    filteredListings = listings.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchText) || 
                              item.desc.toLowerCase().includes(searchText) ||
                              item.owner.toLowerCase().includes(searchText) ||
                              item.ownerContact.toLowerCase().includes(searchText);
        const matchesType = typeValue === 'all' || item.type === typeValue;
        return matchesSearch && matchesType;
    });

    currentPage = 1;
    renderTable();
}

function renderTable() {
    const tbody = document.getElementById('listingsTableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredListings.slice(start, end);
    const noDataMsg = document.getElementById('noDataMessage');

    tbody.innerHTML = '';
    if (filteredListings.length === 0) {
        noDataMsg.style.display = 'block';
        document.getElementById('paginationControls').innerHTML = '';
        return;
    }
    noDataMsg.style.display = 'none';

    pageData.forEach(item => {
        const typeClass = item.type === "rent" ? "type-rent" : (item.type === "sale" ? "type-sale" : "type-donate");
        const priceDisplay = getPriceDisplay(item.price, item.type);

        const row = tbody.insertRow();
        row.innerHTML = `
            <td><span class="type-badge ${typeClass}">${getTypeText(item.type)}</span></td>
            <td style="font-weight: bold;">${escapeHtml(item.title)}</td>
            <td>${priceDisplay}</td>
            <td>${escapeHtml(item.owner)}</td>
            <td>${item.date}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn details-btn" onclick="openDetailsModal(${item.id})" title="مشاهده جزئیات آگهی‌دهنده">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/>
                            <path d="M12 16v-4M12 8h.01"/>
                        </svg>
                        جزئیات
                    </button>
                    <button class="action-btn edit-btn" onclick="openEditModal(${item.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="M17 3l4 4L7 21H3v-4L17 3z"/>
                        </svg>
                        ویرایش
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteListing(${item.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="M4 7h16M10 11v6M14 11v6M5 7l1 14h12l1-14"/>
                            <line x1="9" y1="3" x2="15" y2="3"/>
                        </svg>
                        حذف
                    </button>
                </div>
            </td>
        `;
    });

    updatePagination();
}

function updatePagination() {
    const paginationDiv = document.getElementById('paginationControls');
    const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
    paginationDiv.innerHTML = '';

    if (totalPages <= 1) return;

    const prevBtn = document.createElement('button');
    prevBtn.innerText = 'قبلی';
    prevBtn.onclick = () => changePage(currentPage - 1);
    prevBtn.disabled = currentPage === 1;
    paginationDiv.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => changePage(i);
        paginationDiv.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.innerText = 'بعدی';
    nextBtn.onclick = () => changePage(currentPage + 1);
    nextBtn.disabled = currentPage === totalPages;
    paginationDiv.appendChild(nextBtn);
}

function changePage(page) {
    const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
    }
}

function openDetailsModal(id) {
    const listing = listings.find(l => l.id === id);
    if (!listing) return;
    
    document.getElementById('detailsOwnerName').textContent = listing.owner;
    document.getElementById('detailsOwnerContact').textContent = listing.ownerContact;
    document.getElementById('detailsOwnerId').textContent = listing.ownerId;
    document.getElementById('detailsListingDate').textContent = listing.date;
    document.getElementById('detailsListingTitle').textContent = listing.title;
    document.getElementById('detailsListingDesc').textContent = listing.desc;
    
    document.getElementById('detailsModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDetailsModal() {
    document.getElementById('detailsModal').style.display = 'none';
    document.body.style.overflow = '';
}

function openEditModal(id) {
    const listing = listings.find(l => l.id === id);
    if (!listing) return;
    currentEditId = id;
    
    document.getElementById('editType').value = listing.type;
    document.getElementById('editTitle').value = listing.title;
    document.getElementById('editDesc').value = listing.desc;
    
    const priceValue = (listing.price === "0" || listing.price === 0) ? "" : listing.price;
    document.getElementById('editPrice').value = priceValue;
    
    const priceWords = document.getElementById('editPriceWords');
    const editPriceGroup = document.getElementById('editPriceGroup');
    
    if (listing.type === 'donate') {
        if (editPriceGroup) editPriceGroup.style.display = 'none';
        priceWords.style.display = 'none';
    } else {
        if (editPriceGroup) editPriceGroup.style.display = 'block';
        if (priceValue && priceValue !== "") {
            const num = parseInt(priceValue, 10);
            if (!isNaN(num) && num > 0) {
                priceWords.innerHTML = `📝 ${numberToWords(num)} تومان`;
                priceWords.style.display = 'block';
            } else {
                priceWords.style.display = 'none';
            }
        } else {
            priceWords.style.display = 'none';
        }
    }
    
    document.getElementById('editModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function updateEditPriceWords() {
    const priceInput = document.getElementById('editPrice');
    const priceWords = document.getElementById('editPriceWords');
    const typeSelect = document.getElementById('editType');
    const selectedType = typeSelect?.value;
    
    if (selectedType === 'donate') {
        priceWords.style.display = 'none';
        return;
    }
    
    let value = priceInput.value;
    
    let numbers = value.replace(/[^0-9]/g, '');
        if (numbers.length > 9) {
        numbers = numbers.slice(0, 9);
        showToast('حداکثر مبلغ مجاز 999,999,999 تومان است', true);
    }
    
    priceInput.value = numbers;
    
    if (numbers === '' || numbers === '0') {
        priceWords.style.display = 'none';
        return;
    }
    
    let num = parseInt(numbers, 10);
    if (!isNaN(num) && num > 0) {
        if (num > 999999999) {
            priceInput.value = '999999999';
            num = 999999999;
        }
        priceWords.innerHTML = `📝 ${numberToWords(num)} تومان`;
        priceWords.style.display = 'block';
    } else {
        priceWords.style.display = 'none';
    }
}

function onEditTypeChange() {
    const typeSelect = document.getElementById('editType');
    const priceGroup = document.getElementById('editPriceGroup');
    const priceInput = document.getElementById('editPrice');
    const priceWords = document.getElementById('editPriceWords');
    
    if (typeSelect.value === 'donate') {
        if (priceGroup) priceGroup.style.display = 'none';
        priceInput.value = '';
        priceWords.style.display = 'none';
    } else {
        if (priceGroup) priceGroup.style.display = 'block';
        if (priceInput.value && priceInput.value !== '') {
            updateEditPriceWords();
        } else {
            priceWords.style.display = 'none';
        }
    }
}

function saveEdit() {
    const id = currentEditId;
    const index = listings.findIndex(l => l.id === id);
    if (index === -1) return;

    const newType = document.getElementById('editType').value;
    const newTitle = document.getElementById('editTitle').value.trim();
    const newDesc = document.getElementById('editDesc').value.trim();
    let newPrice = document.getElementById('editPrice').value.trim();

    if (!newTitle) {
        showToast("لطفاً عنوان را وارد کنید", true);
        return;
    }
    if (!newDesc) {
        showToast("لطفاً توضیحات را وارد کنید", true);
        return;
    }

    if (newType !== "donate") {
        if (!newPrice || isNaN(Number(newPrice)) || Number(newPrice) <= 0) {
            showToast("لطفاً قیمت معتبر وارد کنید", true);
            return;
        }
        let priceNum = Number(newPrice);
        if (priceNum > 999999999) {
            showToast("حداکثر مبلغ مجاز 999,999,999 تومان است", true);
            return;
        }
        newPrice = String(priceNum);
    } else {
        newPrice = "0";
    }

    listings[index] = {
        ...listings[index],
        type: newType,
        title: newTitle,
        desc: newDesc,
        price: newPrice
    };

    saveListings();
    filterData();
    closeEditModal();
    showToast("آگهی با موفقیت ویرایش شد");
}

function deleteListing(id) {
    if (confirm("آیا از حذف این آگهی اطمینان دارید؟")) {
        const listing = listings.find(l => l.id === id);
        listings = listings.filter(l => l.id !== id);
        saveListings();
        filterData();
        showToast(`آگهی "${listing?.title}" حذف شد`);
    }
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.body.style.overflow = '';
    currentEditId = null;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('typeFilter').addEventListener('change', filterData);

const editPriceInput = document.getElementById('editPrice');
if (editPriceInput) {
    editPriceInput.addEventListener('input', updateEditPriceWords);
}

const editTypeSelect = document.getElementById('editType');
if (editTypeSelect) {
    editTypeSelect.addEventListener('change', onEditTypeChange);
}
loadListings();
filteredListings = [...listings];
renderTable();
