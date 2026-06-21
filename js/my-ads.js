    let currentUser = { fullName: "فاطمه محمدی" };
    try {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            if (userData && userData.fullName) currentUser = userData;
        }
    } catch(e) {}

    function getListings() {
        const stored = localStorage.getItem('marketplaceListings');
        return stored ? JSON.parse(stored) : [];
    }

    function saveListings(listings) {
        localStorage.setItem('marketplaceListings', JSON.stringify(listings));
    }

    function getRequests() {
        const stored = localStorage.getItem('marketplaceRequests');
        return stored ? JSON.parse(stored) : [];
    }

    function saveRequests(requests) {
        localStorage.setItem('marketplaceRequests', JSON.stringify(requests));
    }

    function renderMyListings() {
        const container = document.getElementById('myListingsGrid');
        const allListings = getListings();
        const myListings = allListings.filter(item => item.owner === currentUser.fullName);
        
        if (myListings.length === 0) {
            container.innerHTML = `<div class="empty-state"> هنوز آگهی ثبت نکرده‌اید.<br><a href="add_ads.html" style="color: #2c7a4a;">ثبت آگهی جدید</a></div>`;
            return;
        }
        
        container.innerHTML = myListings.map(item => {
            let typeClass = '';
            let typeText = '';
            if (item.type === 'sale') { typeClass = 'type-sale'; typeText = 'فروش'; }
            else if (item.type === 'rent') { typeClass = 'type-rent'; typeText = 'اجاره'; }
            else { typeClass = 'type-donate'; typeText = 'اهدایی'; }
            
            return `
                <div class="listing-card" data-id="${item.id}">
                    <span class="listing-type ${typeClass}">${typeText}</span>
                    <div class="listing-title">${escapeHtml(item.title)}</div>
                    <div class="listing-price">💰 ${item.price}</div>
                    <div class="listing-desc">${escapeHtml(item.desc.substring(0, 100))}${item.desc.length > 100 ? '...' : ''}</div>
                    <div class="listing-date">📅 ${item.date}</div>
                    <button class="delete-btn" onclick="deleteListing(${item.id})">🗑 حذف آگهی</button>
                </div>
            `;
        }).join('');
    }

    window.deleteListing = function(id) {
        if (confirm('آیا از حذف این آگهی مطمئن هستید؟')) {
            let listings = getListings();
            listings = listings.filter(item => item.id !== id);
            saveListings(listings);
            
            let requests = getRequests();
            requests = requests.filter(req => req.listingId !== id);
            saveRequests(requests);
            
            showToast('آگهی با موفقیت حذف شد');
            renderMyListings();
            renderRequests();
            updateRequestBadge();
        }
    };

    function renderRequests() {
        const container = document.getElementById('requestsList');
        const allListings = getListings();
        const myListings = allListings.filter(item => item.owner === currentUser.fullName);
        const myListingIds = myListings.map(item => item.id);
        
        const allRequests = getRequests();
        const myRequests = allRequests.filter(req => myListingIds.includes(req.listingId));
        
        if (myRequests.length === 0) {
            container.innerHTML = `<div class="empty-state"> هیچ درخواستی برای آگهی‌های شما ثبت نشده است.</div>`;
            return;
        }
        
        const grouped = {};
        myRequests.forEach(req => {
            if (!grouped[req.listingId]) grouped[req.listingId] = [];
            grouped[req.listingId].push(req);
        });
        
        let html = '';
        for (const [listingId, requests] of Object.entries(grouped)) {
            const listing = allListings.find(l => l.id == listingId);
            if (listing) {
                html += `<div style="margin-bottom: 25px;">
                    <div style="background: #e8f5e9; padding: 10px 15px; border-radius: 12px; margin-bottom: 10px;">
                        <strong>📌 ${escapeHtml(listing.title)}</strong>
                    </div>`;
                
                requests.forEach(req => {
                    html += `
                        <div class="request-card">
                            <div class="request-title">👤 ${escapeHtml(req.senderName)}</div>
                            <div class="request-detail">📝 ${escapeHtml(req.message)}</div>
                            <div class="request-contact">📞 تماس: ${escapeHtml(req.senderContact)}</div>
                            <div class="request-detail" style="font-size: 10px; color: #999;">📅 ${req.date || 'جدید'}</div>
                        </div>
                    `;
                });
                html += `</div>`;
            }
        }
        container.innerHTML = html;
    }

    function updateRequestBadge() {
        const allListings = getListings();
        const myListings = allListings.filter(item => item.owner === currentUser.fullName);
        const myListingIds = myListings.map(item => item.id);
        const allRequests = getRequests();
        const myRequests = allRequests.filter(req => myListingIds.includes(req.listingId));
        
        const badge = document.getElementById('requestCount');
        if (myRequests.length > 0) {
            badge.textContent = myRequests.length;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
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

    const tabBtns = document.querySelectorAll('.tab-btn');
    const listingsTab = document.getElementById('listingsTab');
    const requestsTab = document.getElementById('requestsTab');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const tab = this.dataset.tab;
            if (tab === 'listings') {
                listingsTab.style.display = 'block';
                requestsTab.style.display = 'none';
                renderMyListings();
            } else {
                listingsTab.style.display = 'none';
                requestsTab.style.display = 'block';
                renderRequests();
            }
        });
    });

    renderMyListings();
    updateRequestBadge();
