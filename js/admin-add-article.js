let articles = [
    { 
        id: 1, 
        title: "۵ اشتباه رایج در بدنسازی", 
        summary: "آشنایی با اشتباهات رایج و راهکارهای جلوگیری از آسیب در بدنسازی", 
        date: "۱۴۰۴/۰۲/۲۰",
        readTime: "۵ دقیقه",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop",
        hashtags: ["بدنسازی", "تمرین", "آسیب‌شناسی"],
        fullText: "در این مقاله به بررسی ۵ اشتباه رایج در بدنسازی می‌پردازیم:\n\n۱. انجام حرکات با فرم نامناسب\n۲. عدم توجه به گرم کردن قبل از تمرین\n۳. سنگین کردن بیش از حد وزنه‌ها\n۴. استراحت ناکافی بین ستها\n۵. تغذیه نامناسب بعد از تمرین\n\nبرای جلوگیری از آسیب و بهبود نتایج، حتماً به این نکات توجه کنید."
    },
    { 
        id: 2, 
        title: "تغذیه قبل و بعد از تمرین", 
        summary: "چه بخوریم تا بهترین نتیجه را از تمرین بگیریم؟ راهنمای کامل تغذیه ورزشی", 
        date: "۱۴۰۴/۰۲/۱۸",
        readTime: "۷ دقیقه",
        imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=200&fit=crop",
        hashtags: ["تغذیه ورزشی", "پروتئین", "کربوهیدرات"],
        fullText: "تغذیه صحیح قبل و بعد از تمرین نقش حیاتی در عملکرد و ریکاوری دارد.\n\nقبل از تمرین:\n- ۲ ساعت قبل: وعده اصلی حاوی کربوهیدرات و پروتئین\n- ۳۰ دقیقه قبل: موز یا خرما\n\nبعد از تمرین:\n- ۳۰ دقیقه اول: پروتئین سریع جذب\n- ۲ ساعت بعد: وعده کامل حاوی پروتئین و کربوهیدرات"
    },
    { 
        id: 3, 
        title: "حرکات اصلاحی برای گردن و کمر", 
        summary: "تمرینات ساده برای کاهش دردهای نشیمنگاهی و بهبود وضعیت بدنی", 
        date: "۱۴۰۴/۰۲/۱۵",
        readTime: "۶ دقیقه",
        imageUrl: "https://images.unsplash.com/photo-1574680096145-d0546c2c8c9a?w=400&h=200&fit=crop",
        hashtags: ["حرکات اصلاحی", "گردن درد", "کمر درد"],
        fullText: "دردهای گردن و کمر از مشکلات شایع در میان دانشجویان است. این حرکات ساده می‌تواند کمک کننده باشد:\n\n۱. کشش گردن به طرفین\n۲. چرخش شانه‌ها\n۳. حرکت گربه و شتر\n۴. پل زدن\n۵. تمرین تی آر ای\n\nاین حرکات را روزانه انجام دهید."
    }
];

let filteredArticles = [];
let currentPage = 1;
let currentEditId = null;
let uploadedImageData = null;
const itemsPerPage = 8;

// ========== توابع کمکی ==========
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

function updateReadTime() {
    const fullText = document.getElementById('articleFullText').value;
    const words = fullText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    let minutes = Math.max(1, Math.ceil(wordCount / 200));
    
    let timeText = "";
    if (minutes < 60) {
        timeText = `${minutes} دقیقه`;
    } else {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (mins > 0) {
            timeText = `${hours} ساعت و ${mins} دقیقه`;
        } else {
            timeText = `${hours} ساعت`;
        }
    }
    
    document.getElementById('articleReadTime').value = timeText;
    return timeText;
}

function toggleImageSource() {
    const uploadRadio = document.querySelector('input[name="imageSource"][value="upload"]');
    const linkRadio = document.querySelector('input[name="imageSource"][value="link"]');
    const uploadGroup = document.getElementById('uploadGroup');
    const linkGroup = document.getElementById('linkGroup');
    
    if (uploadRadio.checked) {
        uploadGroup.style.display = 'flex';
        linkGroup.style.display = 'none';
    } else {
        uploadGroup.style.display = 'none';
        linkGroup.style.display = 'flex';
    }
    document.getElementById('imagePreview').style.display = 'none';
    uploadedImageData = null;
}

function handleImageUpload() {
    const file = document.getElementById('articleImageUpload').files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showToast("لطفاً یک فایل تصویری انتخاب کنید", true);
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImageData = e.target.result;
        const previewImg = document.getElementById('previewImg');
        previewImg.src = uploadedImageData;
        document.getElementById('imagePreview').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function previewImageFromUrl() {
    const url = document.getElementById('articleImageUrl').value;
    if (url) {
        const previewImg = document.getElementById('previewImg');
        previewImg.src = url;
        document.getElementById('imagePreview').style.display = 'block';
    } else {
        document.getElementById('imagePreview').style.display = 'none';
    }
}

function saveArticles() {
    localStorage.setItem('adminArticles', JSON.stringify(articles));
    localStorage.setItem('articlesList', JSON.stringify(articles));
}

function loadArticles() {
    const saved = localStorage.getItem('adminArticles');
    if (saved) {
        articles = JSON.parse(saved);
    } else {
        saveArticles();
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

function filterData() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    filteredArticles = articles.filter(article => {
        return article.title.toLowerCase().includes(searchText) || 
                article.hashtags.some(tag => tag.toLowerCase().includes(searchText));
    });
    currentPage = 1;
    renderTable();
}

function renderTable() {
    const tbody = document.getElementById('articlesTableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredArticles.slice(start, end);
    const noDataMsg = document.getElementById('noDataMessage');

    tbody.innerHTML = '';
    if (filteredArticles.length === 0) {
        noDataMsg.style.display = 'block';
        document.getElementById('paginationControls').innerHTML = '';
        return;
    }
    noDataMsg.style.display = 'none';

    pageData.forEach(article => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><img src="${escapeHtml(article.imageUrl)}" class="image-thumb" onerror="this.src='https://placehold.co/50x40?text=No+Image'"></td>
            <td style="font-weight: bold; max-width: 200px;">${escapeHtml(article.title)}</td>
            <td>
                <div class="hashtags-preview">
                    ${article.hashtags.map(tag => `<span class="hashtag-badge">#${escapeHtml(tag)}</span>`).join('')}
                </div>
            </td>
            <td>${article.date}</td>
            <td>${article.readTime}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn preview-btn" onclick="previewArticle(${article.id})" title="پیش‌نمایش">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/>
                        </svg>
                        پیش‌نمایش
                    </button>
                    <button class="action-btn edit-btn" onclick="editArticle(${article.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path d="M17 3l4 4L7 21H3v-4L17 3z"/>
                        </svg>
                        ویرایش
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteArticle(${article.id})">
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
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
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
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
    }
}

function previewArticle(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;
    
    const previewHtml = `
        <div class="preview-title">${escapeHtml(article.title)}</div>
        <div class="preview-meta">
            <span>📅 ${article.date}</span>
            <span>⏱️ ${article.readTime}</span>
        </div>
        <div class="preview-hashtags">
            ${article.hashtags.map(tag => `<span class="preview-hashtag">#${escapeHtml(tag)}</span>`).join('')}
        </div>
        <div class="preview-text">${escapeHtml(article.fullText).replace(/\n/g, '<br>')}</div>
    `;
    
    document.getElementById('previewContent').innerHTML = previewHtml;
    document.getElementById('previewModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePreviewModal() {
    document.getElementById('previewModal').style.display = 'none';
    document.body.style.overflow = '';
}

function openAddModal() {
    currentEditId = null;
    document.getElementById('modalTitle').innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        افزودن مقاله جدید
    `;
    document.getElementById('articleTitle').value = '';
    document.getElementById('articleFullText').value = '';
    document.getElementById('articleReadTime').value = '';
    document.getElementById('articleHashtags').value = '';
    document.getElementById('articleImageUrl').value = '';
    document.getElementById('articleImageUpload').value = '';
    uploadedImageData = null;
    document.querySelector('input[name="imageSource"][value="link"]').checked = true;
    toggleImageSource();
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('articleModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function editArticle(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;
    currentEditId = id;
    document.getElementById('modalTitle').innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5">
            <path d="M17 3l4 4L7 21H3v-4L17 3z"/>
        </svg>
        ویرایش مقاله
    `;
    document.getElementById('articleTitle').value = article.title;
    document.getElementById('articleFullText').value = article.fullText;
    document.getElementById('articleReadTime').value = article.readTime;
    document.getElementById('articleHashtags').value = article.hashtags.join(',');
    document.getElementById('articleImageUrl').value = article.imageUrl || '';
    document.getElementById('articleImageUpload').value = '';
    uploadedImageData = null;
    document.querySelector('input[name="imageSource"][value="link"]').checked = true;
    toggleImageSource();
    
    if (article.imageUrl) {
        const previewImg = document.getElementById('previewImg');
        previewImg.src = article.imageUrl;
        document.getElementById('imagePreview').style.display = 'block';
    } else {
        document.getElementById('imagePreview').style.display = 'none';
    }
    
    document.getElementById('articleModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function saveArticle() {
    const title = document.getElementById('articleTitle').value.trim();
    const fullText = document.getElementById('articleFullText').value.trim();
    const hashtagsStr = document.getElementById('articleHashtags').value.trim();
    const readTime = document.getElementById('articleReadTime').value;
    const uploadRadio = document.querySelector('input[name="imageSource"][value="upload"]');
    let imageUrl = '';
    
    if (!title) {
        showToast("لطفاً عنوان مقاله را وارد کنید", true);
        return;
    }
    if (!fullText) {
        showToast("لطفاً متن کامل مقاله را وارد کنید", true);
        return;
    }
    
    let finalReadTime = readTime;
    if (!finalReadTime) {
        finalReadTime = updateReadTime();
    }
    
    if (uploadRadio && uploadRadio.checked && uploadedImageData) {
        imageUrl = uploadedImageData;
    } else if (!uploadRadio.checked) {
        imageUrl = document.getElementById('articleImageUrl').value.trim();
        if (!imageUrl) {
            showToast("لطفاً لینک تصویر را وارد کنید یا تصویر را آپلود کنید", true);
            return;
        }
    } else if (uploadRadio && uploadRadio.checked && !uploadedImageData) {
        showToast("لطفاً یک تصویر انتخاب کنید", true);
        return;
    }
    
    const defaultImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop";
    const finalImageUrl = imageUrl || defaultImage;
    const hashtags = hashtagsStr ? hashtagsStr.split(',').map(t => t.trim()).filter(t => t) : [];
    const currentDate = getCurrentDate();
    
    if (currentEditId === null) {
        const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 4;
        articles.push({
            id: newId,
            title: title,
            summary: fullText.substring(0, 100),
            fullText: fullText,
            hashtags: hashtags,
            readTime: finalReadTime,
            date: currentDate,
            imageUrl: finalImageUrl
        });
        showToast(`مقاله "${title}" با موفقیت اضافه شد`);
    } else {
        const index = articles.findIndex(a => a.id === currentEditId);
        if (index !== -1) {
            articles[index] = {
                ...articles[index],
                title: title,
                fullText: fullText,
                summary: fullText.substring(0, 100),
                hashtags: hashtags,
                readTime: finalReadTime,
                imageUrl: finalImageUrl
            };
            showToast(`مقاله "${title}" با موفقیت ویرایش شد`);
        }
    }
    
    saveArticles();
    filterData();
    closeArticleModal();
}

function deleteArticle(id) {
    if (confirm("آیا از حذف این مقاله اطمینان دارید؟")) {
        const article = articles.find(a => a.id === id);
        articles = articles.filter(a => a.id !== id);
        saveArticles();
        filterData();
        showToast(`مقاله "${article?.title}" حذف شد`);
    }
}

function closeArticleModal() {
    document.getElementById('articleModal').style.display = 'none';
    document.body.style.overflow = '';
    currentEditId = null;
    uploadedImageData = null;
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

function closeMobileMenu() {
    document.getElementById('sideMenu').classList.remove('open');
    document.querySelector('.menu-overlay').style.display = 'none';
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
}
function openMobileMenu() {
    document.getElementById('sideMenu').classList.add('open');
    document.querySelector('.menu-overlay').style.display = 'block';
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
}
function toggleMobileMenu() {
    let m = document.getElementById('sideMenu');
    m.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
}
function toggleMenuCollapse() {
    if (window.innerWidth >= 769) {
        let menu = document.getElementById('sideMenu');
        let body = document.body;
        let txt = document.querySelector('.collapse-btn .collapse-btn-text');
        menu.classList.toggle('collapsed');
        if (menu.classList.contains('collapsed')) {
            body.classList.add('menu-collapsed');
            if (txt) txt.textContent = 'باز کردن منو';
        } else {
            body.classList.remove('menu-collapsed');
            if (txt) txt.textContent = 'بستن منو';
        }
        localStorage.setItem('menuCollapsed', menu.classList.contains('collapsed'));
    } else closeMobileMenu();
}
function loadMenuState() {
    if (window.innerWidth >= 769) {
        let menu = document.getElementById('sideMenu');
        let body = document.body;
        const isCollapsed = localStorage.getItem('menuCollapsed') === 'true';
        if (isCollapsed) {
            menu.classList.add('collapsed');
            body.classList.add('menu-collapsed');
            let txt = document.querySelector('.collapse-btn .collapse-btn-text');
            if (txt) txt.textContent = 'باز کردن منو';
        }
    }
}

document.getElementById('collapseMenuBtn')?.addEventListener('click', (e) => { e.stopPropagation(); toggleMenuCollapse(); });
window.addEventListener('resize', () => { if (window.innerWidth >= 769) closeMobileMenu(); });
window.onclick = function(event) {
    let articleModal = document.getElementById('articleModal');
    let previewModal = document.getElementById('previewModal');
    if (event.target === articleModal) closeArticleModal();
    if (event.target === previewModal) closePreviewModal();
}

document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('articleImageUrl')?.addEventListener('input', previewImageFromUrl);

loadArticles();
filteredArticles = [...articles];
renderTable();
loadMenuState();
