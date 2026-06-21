	const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23CBECA7'/%3E%3Ccircle cx='50' cy='40' r='22' fill='%23165526'/%3E%3Cpath d='M20 75 Q50 85 80 75 L80 100 L20 100 Z' fill='%23165526'/%3E%3Crect x='30' y='55' width='40' height='8' rx='4' fill='%23165526'/%3E%3C/svg%3E";
		let profileData = {
		fullName: 'دکتر سارا مرادی',
		personnelId: 'STF-1402-089',
		position: 'مدیر سامانه یکپارچه',
		department: 'دانشکده فنی و حرفه‌ای دختران قم',
		email: 's.moradi@qom.fd.ir',
		phone: '025-36654321',
		mobile: '09123456789',
		office: 'ساختمان مرکزی، طبقه دوم، اتاق 204',
		avatar: defaultAvatar
	};
	
	function enableEditMode() {
		document.getElementById('editBtn').style.display = 'none';
		document.getElementById('saveBtn').style.display = 'inline-block';
		document.getElementById('cancelBtn').style.display = 'inline-block';
		
		document.querySelectorAll('.view-field').forEach(el => el.style.display = 'none');
		document.querySelectorAll('.edit-field').forEach(el => el.style.display = 'block');
	}
	
	function cancelEdit() {
		document.getElementById('editBtn').style.display = 'inline-block';
		document.getElementById('saveBtn').style.display = 'none';
		document.getElementById('cancelBtn').style.display = 'none';
		
		document.getElementById('editFullName').value = profileData.fullName;
		document.getElementById('editPosition').value = profileData.position;
		document.getElementById('editDepartment').value = profileData.department;
		document.getElementById('editEmail').value = profileData.email;
		document.getElementById('editPhone').value = profileData.phone;
		document.getElementById('editMobile').value = profileData.mobile;
		document.getElementById('editOffice').value = profileData.office;
		
		document.querySelectorAll('.view-field').forEach(el => el.style.display = 'block');
		document.querySelectorAll('.edit-field').forEach(el => el.style.display = 'none');
		
		updateDisplayValues();
	}
	
	function updateDisplayValues() {
		document.getElementById('displayName').innerText = profileData.fullName;
		document.getElementById('valFullName').innerText = profileData.fullName;
		document.getElementById('valPersonnelId').innerText = profileData.personnelId;
		document.getElementById('valPosition').innerText = profileData.position;
		document.getElementById('valDepartment').innerText = profileData.department;
		document.getElementById('valEmail').innerText = profileData.email;
		document.getElementById('valPhone').innerText = profileData.phone;
		document.getElementById('valMobile').innerText = profileData.mobile;
		document.getElementById('valOffice').innerText = profileData.office;
	}
	
	function saveProfile() {
		profileData.fullName = document.getElementById('editFullName').value;
		profileData.position = document.getElementById('editPosition').value;
		profileData.department = document.getElementById('editDepartment').value;
		profileData.email = document.getElementById('editEmail').value;
		profileData.phone = document.getElementById('editPhone').value;
		profileData.mobile = document.getElementById('editMobile').value;
		profileData.office = document.getElementById('editOffice').value;
		
		updateDisplayValues();
		cancelEdit();
		localStorage.setItem('adminProfile', JSON.stringify(profileData));
		alert('✅ اطلاعات پروفایل با موفقیت ذخیره شد');
	}
	
	function openAvatarModal() {
		document.getElementById('avatarModal').style.display = 'flex';
		document.getElementById('avatarInput').value = '';
		
		const currentAvatar = profileData.avatar || defaultAvatar;
		document.getElementById('modalPreviewImg').src = currentAvatar;
		document.getElementById('modalPreviewImg').style.display = 'block';
	}
	
	function closeAvatarModal() {
		document.getElementById('avatarModal').style.display = 'none';
	}
	
	function saveAvatar() {
		const file = document.getElementById('avatarInput').files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileData.avatar = e.target.result;
            document.getElementById('avatarImg').src = e.target.result;
            localStorage.setItem('adminProfile', JSON.stringify(profileData));
            alert('✅ عکس پروفایل با موفقیت تغییر کرد');
            closeAvatarModal();
            location.reload();
        };
        reader.readAsDataURL(file);
    } else {
        alert('❌ لطفا یک عکس انتخاب کنید');
    }
	}
	
	function loadProfileData() {
		const saved = localStorage.getItem('adminProfile');
    if(saved) {
        try {
            const data = JSON.parse(saved);
            profileData = { ...profileData, ...data };
            updateDisplayValues();
            document.getElementById('editFullName').value = profileData.fullName;
            document.getElementById('editPosition').value = profileData.position;
            document.getElementById('editDepartment').value = profileData.department;
            document.getElementById('editEmail').value = profileData.email;
            document.getElementById('editPhone').value = profileData.phone;
            document.getElementById('editMobile').value = profileData.mobile;
            document.getElementById('editOffice').value = profileData.office;
            
            if(profileData.avatar && profileData.avatar !== '') {
                document.getElementById('avatarImg').src = profileData.avatar;
            } else {
                document.getElementById('avatarImg').src = defaultAvatar;
            }
        } catch(e) {
            document.getElementById('avatarImg').src = defaultAvatar;
        }
    } else {
        document.getElementById('avatarImg').src = defaultAvatar;
    }
	}
	
	loadProfileData();
	
	window.onclick = function(event) {
		let modal = document.getElementById('avatarModal');
		if(event.target === modal) closeAvatarModal();
	}
