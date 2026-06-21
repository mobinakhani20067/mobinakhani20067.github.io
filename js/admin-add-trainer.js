const defaultProfile="https://4kia.ir/s4/img_project/44748_1561984670.jpg";
    let trainers = [
        { 
            id: 1, 
            name: "نرگس مولایی", 
            specialty: "ورزش های رزمی",
            bio: "مربی تربیت بدنی دانشگاه با ۷ سال سابقه تدریس.",
            fullBio: "فاطمه احمدی فارغ‌التحصیل رشته تربیت بدنی از دانشگاه آزاد قم است. ایشان به عنوان مربی تربیت بدنی دانشگاه مشغول به فعالیت بوده و کلاس‌های آمادگی جسمانی و ورزش‌های پایه را برگزار می‌کنند.",
            contact: "@fatemeh.ahmadi",
            imageUrl: defaultProfile
        },
        { 
            id: 2, 
            name: "زهرا رضایی", 
            specialty: "آمادگی جسمانی",
            bio: "مربی آمادگی جسمانی و حرکات اصلاحی.",
            fullBio: "زهرا رضایی کارشناس ارشد فیزیولوژی ورزشی است. ایشان در زمینه آمادگی جسمانی و حرکات اصلاحی تخصص دارند و به دانشجویان در بهبود وضعیت بدنی کمک می‌کنند.",
            contact: "@zahra.rezaei",
            imageUrl: defaultProfile
        },
        { 
            id: 3, 
            name: "مریم حسینی", 
            specialty: "ورزش‌های توپی",
            bio: "مربی رسمی فدراسیون والیبال و بسکتبال.",
            fullBio: "مریم حسینی دارای مدرک مربیگری درجه یک فدراسیون والیبال و بسکتبال است. ایشان تیم‌های ورزشی دانشگاه را در مسابقات ملی هدایت کرده‌اند.",
            contact: "@maryam.hosseini",
            imageUrl: defaultProfile
        },
        { 
            id: 4, 
            name: "سارا کریمی", 
            specialty: "ورزش های توپی ",
            bio: "مسئول فنی سالن‌های ورزشی دانشگاه.",
            fullBio: "سارا کریمی با ۱۲ سال سابقه مدیریت و مربیگری در سالن‌های ورزشی، مسئولیت نظارت بر اجرای صحیح برنامه‌های ورزشی دانشجویان را بر عهده دارند.",
            contact: "@sara.karimi",
            imageUrl: defaultProfile
        },
        { 
            id: 5, 
            name: "مهسا علیپور", 
            specialty: "ورزش های توپی",
            bio: "مربی برنامه‌ریزی تمرینات ورزشی.",
            fullBio: "مهسا علیپور دارای مدرک تخصصی در زمینه برنامه‌ریزی تمرینات ورزشی برای دانشجویان در سطوح مختلف آمادگی جسمانی است.",
            contact: "@mahsa.alipour",
            imageUrl: defaultProfile
        }
    ];
    let filteredTrainers = [];
    let currentPage = 1;
    let currentEditId = null;
    let uploadedImageData = null;
    const itemsPerPage = 8;
    function saveTrainers() {
        localStorage.setItem('adminTrainers', JSON.stringify(trainers));
        localStorage.setItem('trainersList', JSON.stringify(trainers));
    }

    function loadTrainers() {
        const saved = localStorage.getItem('adminTrainers');
        if (saved) {
            trainers = JSON.parse(saved);
        } else {
            saveTrainers();
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
        const file = document.getElementById('trainerImageUpload').files[0];
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
        const url = document.getElementById('trainerImageUrl').value;
        if (url) {
            const previewImg = document.getElementById('previewImg');
            previewImg.src = url;
            document.getElementById('imagePreview').style.display = 'block';
        } else {
            document.getElementById('imagePreview').style.display = 'none';
        }
    }

    function filterData() {
        const searchText = document.getElementById('searchInput').value.toLowerCase();
        filteredTrainers = trainers.filter(trainer => {
            return trainer.name.toLowerCase().includes(searchText) || 
                   trainer.specialty.toLowerCase().includes(searchText) ||
                   trainer.bio.toLowerCase().includes(searchText);
        });
        currentPage = 1;
        renderTable();
    }

    function renderTable() {
        const tbody = document.getElementById('trainersTableBody');
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = filteredTrainers.slice(start, end);
        const noDataMsg = document.getElementById('noDataMessage');

        tbody.innerHTML = '';
        if (filteredTrainers.length === 0) {
            noDataMsg.style.display = 'block';
            document.getElementById('paginationControls').innerHTML = '';
            return;
        }
        noDataMsg.style.display = 'none';

        pageData.forEach(trainer => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td><img src="${escapeHtml(trainer.imageUrl)}" class="image-thumb" onerror="this.src='https://placehold.co/50x50?text=No+Image'"></td>
                <td style="font-weight: bold;">${escapeHtml(trainer.name)}</td>
                <td><span class="specialty-badge">${escapeHtml(trainer.specialty)}</span></td>
                <td style="max-width: 250px; white-space: normal;">${escapeHtml(trainer.bio.substring(0, 60))}${trainer.bio.length > 60 ? '...' : ''}</td>
                <td>${escapeHtml(trainer.contact)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn preview-btn" onclick="previewTrainer(${trainer.id})" title="پیش‌نمایش">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/>
                            </svg>
                            پیش‌نمایش
                        </button>
                        <button class="action-btn edit-btn" onclick="editTrainer(${trainer.id})">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <path d="M17 3l4 4L7 21H3v-4L17 3z"/>
                            </svg>
                            ویرایش
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteTrainer(${trainer.id})">
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
        const totalPages = Math.ceil(filteredTrainers.length / itemsPerPage);
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
        const totalPages = Math.ceil(filteredTrainers.length / itemsPerPage);
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            renderTable();
        }
    }
    function previewTrainer(id) {
        const trainer = trainers.find(t => t.id === id);
        if (!trainer) return;
        
        const previewHtml = `
            <img src="${escapeHtml(trainer.imageUrl)}" class="preview-avatar" onerror="this.src='https://placehold.co/120x120?text=No+Image'">
            <div class="preview-name">${escapeHtml(trainer.name)}</div>
            <div class="preview-specialty">${escapeHtml(trainer.specialty)}</div>
            <div class="preview-bio">${escapeHtml(trainer.fullBio)}</div>
            <div class="preview-contact">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                ${escapeHtml(trainer.contact)}
            </div>
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
            افزودن مربی جدید
        `;
        document.getElementById('trainerName').value = '';
        document.getElementById('trainerSpecialty').value = '';
        document.getElementById('trainerBio').value = '';
        document.getElementById('trainerFullBio').value = '';
        document.getElementById('trainerContact').value = '';
        document.getElementById('trainerImageUrl').value = '';
        document.getElementById('trainerImageUpload').value = '';
        uploadedImageData = null;
        document.querySelector('input[name="imageSource"][value="link"]').checked = true;
        toggleImageSource();
        document.getElementById('imagePreview').style.display = 'none';
        document.getElementById('trainerModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function editTrainer(id) {
        const trainer = trainers.find(t => t.id === id);
        if (!trainer) return;
        currentEditId = id;
        document.getElementById('modalTitle').innerHTML = `
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5">
                <path d="M17 3l4 4L7 21H3v-4L17 3z"/>
            </svg>
            ویرایش اطلاعات مربی
        `;
        document.getElementById('trainerName').value = trainer.name;
        document.getElementById('trainerSpecialty').value = trainer.specialty;
        document.getElementById('trainerBio').value = trainer.bio;
        document.getElementById('trainerFullBio').value = trainer.fullBio;
        document.getElementById('trainerContact').value = trainer.contact;
        document.getElementById('trainerImageUrl').value = trainer.imageUrl || '';
        document.getElementById('trainerImageUpload').value = '';
        uploadedImageData = null;
        document.querySelector('input[name="imageSource"][value="link"]').checked = true;
        toggleImageSource();
        
        if (trainer.imageUrl) {
            const previewImg = document.getElementById('previewImg');
            previewImg.src = trainer.imageUrl;
            document.getElementById('imagePreview').style.display = 'block';
        } else {
            document.getElementById('imagePreview').style.display = 'none';
        }
        
        document.getElementById('trainerModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function saveTrainer() {
        const name = document.getElementById('trainerName').value.trim();
        const specialty = document.getElementById('trainerSpecialty').value.trim();
        const bio = document.getElementById('trainerBio').value.trim();
        const fullBio = document.getElementById('trainerFullBio').value.trim();
        const contact = document.getElementById('trainerContact').value.trim();
        const uploadRadio = document.querySelector('input[name="imageSource"][value="upload"]');
        let imageUrl = '';
        
        if (!name) {
            showToast("لطفاً نام مربی را وارد کنید", true);
            return;
        }
        if (!specialty) {
            showToast("لطفاً تخصص مربی را وارد کنید", true);
            return;
        }
        if (!bio) {
            showToast("لطفاً بیوگرافی کوتاه را وارد کنید", true);
            return;
        }
        if (!fullBio) {
            showToast("لطفاً بیوگرافی کامل را وارد کنید", true);
            return;
        }
        if (!contact) {
            showToast("لطفاً راه ارتباطی را وارد کنید", true);
            return;
        }
        
        if (uploadRadio && uploadRadio.checked && uploadedImageData) {
            imageUrl = uploadedImageData;
        } else if (!uploadRadio.checked) {
            imageUrl = document.getElementById('trainerImageUrl').value.trim();
            if (!imageUrl) {
                showToast("لطفاً لینک تصویر را وارد کنید یا تصویر را آپلود کنید", true);
                return;
            }
        } else if (uploadRadio && uploadRadio.checked && !uploadedImageData) {
            showToast("لطفاً یک تصویر انتخاب کنید", true);
            return;
        }
        
        const defaultImage = "https://4kia.ir/s4/img_project/44748_1561984670.jpg";
        const finalImageUrl = imageUrl || defaultImage;
        
        if (currentEditId === null) {
            const newId = trainers.length > 0 ? Math.max(...trainers.map(t => t.id)) + 1 : 7;
            trainers.push({
                id: newId,
                name: name,
                specialty: specialty,
                bio: bio,
                fullBio: fullBio,
                contact: contact,
                imageUrl: finalImageUrl
            });
            showToast(`مربی "${name}" با موفقیت اضافه شد`);
        } else {
            const index = trainers.findIndex(t => t.id === currentEditId);
            if (index !== -1) {
                trainers[index] = {
                    ...trainers[index],
                    name: name,
                    specialty: specialty,
                    bio: bio,
                    fullBio: fullBio,
                    contact: contact,
                    imageUrl: finalImageUrl
                };
                showToast(`اطلاعات مربی "${name}" با موفقیت ویرایش شد`);
            }
        }
        
        saveTrainers();
        filterData();
        closeTrainerModal();
    }

    function deleteTrainer(id) {
        if (confirm("آیا از حذف این مربی اطمینان دارید؟")) {
            const trainer = trainers.find(t => t.id === id);
            trainers = trainers.filter(t => t.id !== id);
            saveTrainers();
            filterData();
            showToast(`مربی "${trainer?.name}" حذف شد`);
        }
    }

    function closeTrainerModal() {
        document.getElementById('trainerModal').style.display = 'none';
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

    
    document.getElementById('searchInput').addEventListener('input', filterData);
    document.getElementById('trainerImageUrl')?.addEventListener('input', previewImageFromUrl);
    
    loadTrainers();
    filteredTrainers = [...trainers];
    renderTable();
    loadMenuState();
