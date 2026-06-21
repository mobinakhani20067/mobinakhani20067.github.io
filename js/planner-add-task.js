        const form = document.getElementById('taskForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const taskName = document.getElementById('taskName')?.value;
                if (!taskName || taskName.trim() === '') {
                    alert('لطفاً نام کار را وارد کنید!');
                    return;
                }
                alert(`✅ برنامه "${taskName}" با موفقیت اضافه شد!`);
                form.reset();
            });
        }
