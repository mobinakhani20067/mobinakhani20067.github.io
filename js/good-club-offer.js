let currentUser = { fullName: "فاطمه محمدی", id: "user_123" };
try {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        if (userData && userData.fullName) currentUser = userData;
    }
} catch(e) {}
let allGyms = [];

function loadGyms() {
    const saved = localStorage.getItem('allGyms');
    if (saved) {
        allGyms = JSON.parse(saved);
    } else {
        allGyms = [
            {
                id: 1,
                name: "باشگاه ورزشی المپیک",
                address: "قم، بلوار امین، نبش کوچه ۱۲",
                description: "سالن بدنسازی مجهز با دستگاه‌های مدرن، سونا و جکوزی، کلاس‌های یوگا و پیلاتس، کافی شاپ",
                imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=160&fit=crop",
                submittedBy: currentUser.fullName,
                submittedById: currentUser.id,
                date: "۱۴۰۴/۰۲/۲۰",
                comments: [
                    { id: 101, author: "مریم رضایی", text: "واقعاً باشگاه عالی‌ای هست، رفتم راضی بودم", date: "۱۴۰۴/۰۲/۲۱", reply: null },
                    { id: 102, author: "نرگس کریمی", text: "هزینه‌اش چنده؟", date: "۱۴۰۴/۰۲/۲۲", reply: null },
                    { id: 103, author: "سارا محمدی", text: "محیطش چطوره؟ شلوغ نیست؟", date: "۱۴۰۴/۰۲/۲۳", reply: null }
                ]
            }
        ];
        saveGyms();
    }
}

function saveGyms() {
    localStorage.setItem('allGyms', JSON.stringify(allGyms));
}

function getPersianDate() {
    return new Date().toLocaleDateString('fa-IR');
}

function renderMyGyms() {
    const container = document.getElementById('myGymsContainer');
    const myGyms = allGyms.filter(g => g.submittedById === currentUser.id);
    
    if (myGyms.length === 0) {
        container.innerHTML = `<div class="no-data">شما هنوز باشگاهی معرفی نکرده‌اید. از فرم بالا شروع کنید!</div>`;
        return;
    }
    
    container.innerHTML = `<div class="my-gyms-list">${myGyms.map(gym => `
        <div class="my-gym-item" data-gym-id="${gym.id}">
            <div class="my-gym-header">
                <span class="my-gym-name">${escapeHtml(gym.name)}</span>
                <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                    <span class="my-gym-date">${gym.date}</span>
                    <button class="delete-gym-btn" onclick="deleteGym(${gym.id})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 7h16M10 11v6M14 11v6M5 7l1 14h12l1-14"/>
                            <line x1="9" y1="3" x2="15" y2="3"/>
                        </svg>
                        حذف باشگاه
                    </button>
                </div>
            </div>
            <div class="my-gym-address">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                </svg>
                ${escapeHtml(gym.address)}
            </div>
            <div class="my-gym-desc">${escapeHtml(gym.description)}</div>
            ${gym.imageUrl ? `<div class="my-gym-image"><img src="${gym.imageUrl}" alt="${escapeHtml(gym.name)}"></div>` : ''}
            
            <div class="comments-admin-section">
                <div class="comments-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2c7a4a" stroke-width="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    نظرات کاربران (${gym.comments.length})
                </div>
                ${gym.comments.length === 0 ? '<div style="font-size:12px; color:#999;">هنوز نظری ثبت نشده است</div>' : ''}
                ${gym.comments.map(comment => `
                    <div class="comment-item-admin">
                        <div class="comment-author">${escapeHtml(comment.author)}</div>
                        <div class="comment-text">${escapeHtml(comment.text)}</div>
                        <div class="comment-date">${comment.date}</div>
                        ${comment.reply ? `
                            <div class="reply-display">
                                <strong>پاسخ شما:</strong> ${escapeHtml(comment.reply)}
                            </div>
                        ` : `
                            <div class="reply-form" id="reply-form-${comment.id}">
                                <input type="text" class="reply-input" id="reply-text-${comment.id}" placeholder="پاسخ خود را بنویسید...">
                                <button class="reply-btn" onclick="submitReply(${gym.id}, ${comment.id})">ارسال پاسخ</button>
                            </div>
                        `}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('')}</div>`;
}

function deleteGym(gymId) {
    if (confirm('آیا از حذف این باشگاه اطمینان دارید؟ با حذف باشگاه، تمام نظرات آن نیز حذف می‌شود.')) {
        allGyms = allGyms.filter(g => g.id !== gymId);
        saveGyms();
        renderMyGyms();
        showToast('باشگاه با موفقیت حذف شد');
    }
}

function submitReply(gymId, commentId) {
    const replyText = document.getElementById(`reply-text-${commentId}`)?.value.trim();
    if (!replyText) {
        showToast('لطفاً متن پاسخ را وارد کنید', true);
        return;
    }
    
    const gym = allGyms.find(g => g.id === gymId);
    if (gym) {
        const comment = gym.comments.find(c => c.id === commentId);
        if (comment) {
            comment.reply = replyText;
            saveGyms();
            renderMyGyms();
            showToast('پاسخ شما با موفقیت ثبت شد');
        }
    }
}

let uploadedImageData = null;

function setupImageHandlers() {
    const uploadRadio = document.querySelector('input[name="gymImageSource"][value="upload"]');
    const linkRadio = document.querySelector('input[name="gymImageSource"][value="link"]');
    const linkGroup = document.getElementById('gymLinkGroup');
    const uploadGroup = document.getElementById('gymUploadGroup');
    const fileInput = document.getElementById('gymImageUpload');
    const urlInput = document.getElementById('gymImageUrl');
    const previewDiv = document.getElementById('gymImagePreview');
    const previewImg = document.getElementById('previewGymImg');
    const uploadArea = document.getElementById('uploadArea');
    const selectedFileName = document.getElementById('selectedFileName');
    
    function toggleSource() {
        if (uploadRadio && uploadRadio.checked) {
            if (linkGroup) linkGroup.style.display = 'none';
            if (uploadGroup) uploadGroup.style.display = 'block';
            previewDiv.style.display = 'none';
        } else {
            if (linkGroup) linkGroup.style.display = 'block';
            if (uploadGroup) uploadGroup.style.display = 'none';
            if (urlInput && urlInput.value) {
                previewImg.src = urlInput.value;
                previewDiv.style.display = 'block';
            } else {
                previewDiv.style.display = 'none';
            }
        }
    }
    
    function displayUploadedImage(file) {
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            showToast('حجم فایل نباید بیشتر از ۵ مگابایت باشد', true);
            return;
        }
        if (!file.type.match('image.*')) {
            showToast('لطفاً فقط فایل تصویری انتخاب کنید', true);
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (ev) => {
            uploadedImageData = ev.target.result;
            previewImg.src = uploadedImageData;
            previewDiv.style.display = 'block';
            
            if (selectedFileName) {
                selectedFileName.textContent = `📷 ${file.name}`;
                selectedFileName.style.display = 'inline-block';
            }
            
            if (uploadArea) {
                uploadArea.style.borderColor = '#2c7a4a';
                uploadArea.style.background = '#e8f5e8';
            }
        };
        reader.readAsDataURL(file);
    }
    
    if (uploadArea) {
        uploadArea.addEventListener('click', (e) => {
            if (e.target === uploadArea || e.target.closest('.upload-area')) {
                fileInput.click();
            }
        });
    }
    
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                displayUploadedImage(file);
            }
        });
    }
    
    if (uploadArea) {
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        
        uploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file) {
                displayUploadedImage(file);
                if (fileInput) fileInput.files = e.dataTransfer.files;
            }
        });
    }
    
    const removeImageBtn = document.getElementById('removeImageBtn');
    if (removeImageBtn) {
        removeImageBtn.addEventListener('click', () => {
            uploadedImageData = null;
            previewDiv.style.display = 'none';
            previewImg.src = '';
            if (fileInput) fileInput.value = '';
            if (selectedFileName) selectedFileName.style.display = 'none';
            if (uploadArea) {
                uploadArea.style.borderColor = '#CBECA7';
                uploadArea.style.background = '#fefefe';
            }
            showToast('عکس حذف شد');
        });
    }
    
    if (uploadRadio && linkRadio) {
        uploadRadio.addEventListener('change', toggleSource);
        linkRadio.addEventListener('change', toggleSource);
    }
    
    if (urlInput) {
        urlInput.addEventListener('input', () => {
            if (linkRadio && linkRadio.checked && urlInput.value) {
                previewImg.src = urlInput.value;
                previewDiv.style.display = 'block';
            } else if (linkRadio && linkRadio.checked) {
                previewDiv.style.display = 'none';
            }
        });
    }
    
    toggleSource();
}

function addRemoveButtonToPreview() {
    const previewDiv = document.getElementById('gymImagePreview');
    if (previewDiv && !document.getElementById('removeImageBtn')) {
        const removeBtn = document.createElement('button');
        removeBtn.id = 'removeImageBtn';
        removeBtn.className = 'remove-image-btn';
        removeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
        removeBtn.onclick = () => {
            uploadedImageData = null;
            previewDiv.style.display = 'none';
            const previewImg = document.getElementById('previewGymImg');
            if (previewImg) previewImg.src = '';
            const fileInput = document.getElementById('gymImageUpload');
            if (fileInput) fileInput.value = '';
            const selectedFileName = document.getElementById('selectedFileName');
            if (selectedFileName) selectedFileName.style.display = 'none';
            const uploadArea = document.getElementById('uploadArea');
            if (uploadArea) {
                uploadArea.style.borderColor = '#CBECA7';
                uploadArea.style.background = '#fefefe';
            }
            showToast('عکس حذف شد');
        };
        previewDiv.appendChild(removeBtn);
    }
}

document.getElementById('newGymForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('gymName').value.trim();
    const address = document.getElementById('gymAddress').value.trim();
    const desc = document.getElementById('gymDesc').value.trim();
    
    if (!name) { showToast('لطفاً نام باشگاه را وارد کنید', true); return; }
    if (!address) { showToast('لطفاً آدرس باشگاه را وارد کنید', true); return; }
    if (!desc) { showToast('لطفاً توضیحات باشگاه را وارد کنید', true); return; }
    
    const uploadRadio = document.querySelector('input[name="gymImageSource"][value="upload"]');
    let imageUrl = '';
    
    if (uploadRadio && uploadRadio.checked) {
        if (uploadedImageData) {
            imageUrl = uploadedImageData;
        }
    } else {
        imageUrl = document.getElementById('gymImageUrl')?.value.trim() || '';
    }
    
    if (!imageUrl) {
        imageUrl = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=160&fit=crop';
    }
    
    const newId = allGyms.length > 0 ? Math.max(...allGyms.map(g => g.id)) + 1 : 2;
    const newGym = {
        id: newId,
        name: name,
        address: address,
        description: desc,
        imageUrl: imageUrl,
        submittedBy: currentUser.fullName,
        submittedById: currentUser.id,
        date: getPersianDate(),
        comments: []
    };
    
    allGyms.push(newGym);
    saveGyms();
    renderMyGyms();
    
    document.getElementById('gymName').value = '';
    document.getElementById('gymAddress').value = '';
    document.getElementById('gymDesc').value = '';
    document.getElementById('gymImageUrl').value = '';
    document.getElementById('gymImageUpload').value = '';
    uploadedImageData = null;
    
    const previewDiv = document.getElementById('gymImagePreview');
    if (previewDiv) previewDiv.style.display = 'none';
    const previewImg = document.getElementById('previewGymImg');
    if (previewImg) previewImg.src = '';
    const selectedFileName = document.getElementById('selectedFileName');
    if (selectedFileName) selectedFileName.style.display = 'none';
    
    const linkRadio = document.querySelector('input[name="gymImageSource"][value="link"]');
    if (linkRadio) linkRadio.checked = true;
    
    const linkGroup = document.getElementById('gymLinkGroup');
    const uploadGroup = document.getElementById('gymUploadGroup');
    if (linkGroup) linkGroup.style.display = 'block';
    if (uploadGroup) uploadGroup.style.display = 'none';
    
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.style.borderColor = '#CBECA7';
        uploadArea.style.background = '#fefefe';
    }
    
    showToast(`باشگاه "${name}" با موفقیت معرفی شد`);
});

function showToast(msg, isError = false) {
    const toast = document.getElementById('toastMsg');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) toast.classList.add('error');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
    }, 3000);
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

loadGyms();
renderMyGyms();
setupImageHandlers();
addRemoveButtonToPreview();
