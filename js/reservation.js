const closetData = [
{num:1, status:'red'}, {num:2, status:'yellow'}, {num:3, status:'green'}, {num:4, status:'green'}, 
{num:5, status:'green'}, {num:6, status:'red'}, {num:7, status:'red'}, {num:8, status:'yellow'}, 
{num:9, status:'green'}, {num:10, status:'green'},
{num:11, status:'yellow'}, {num:12, status:'green'}, {num:13, status:'red'}, {num:14, status:'yellow'}, 
{num:15, status:'red'}, {num:16, status:'yellow'}, {num:17, status:'green'}, {num:18, status:'red'}, 
{num:19, status:'green'}, {num:20, status:'red'},
{num:21, status:'green'}, {num:22, status:'red'}, {num:23, status:'yellow'}, {num:24, status:'green'}, 
{num:25, status:'yellow'}, {num:26, status:'green'}, {num:27, status:'red'}, {num:28, status:'yellow'}, 
{num:29, status:'red'}, {num:30, status:'yellow'},
{num:31, status:'red'}, {num:32, status:'yellow'}, {num:33, status:'green'}, {num:34, status:'red'}, 
{num:35, status:'green'}, {num:36, status:'red'}, {num:37, status:'yellow'}, {num:38, status:'green'}, 
{num:39, status:'yellow'}, {num:40, status:'green'},
{num:41, status:'green'}, {num:42, status:'green'}, {num:43, status:'yellow'}, {num:44, status:'yellow'}, 
{num:45, status:'red'}, {num:46, status:'yellow'}, {num:47, status:'green'}, {num:48, status:'red'}, 
{num:49, status:'green'}, {num:50, status:'red'}
];

function buildCloset() {
const container = document.getElementById('closetGrid');
if (!container) return;
container.innerHTML = '';

closetData.forEach(closet => {
    const div = document.createElement('div');
    div.className = `closet-item status-${closet.status}`;
    div.setAttribute('data-closet', closet.num);
    
    const lockIcon = document.createElement('div');
    lockIcon.className = 'lock-icon';
    
    const numberSpan = document.createElement('div');
    numberSpan.className = 'number';
    numberSpan.textContent = closet.num.toString().padStart(2, '0');
    
    div.appendChild(lockIcon);
    div.appendChild(numberSpan);
    
    div.addEventListener('click', () => {
        if(closet.status === 'green') {
            window.location.href = 'Regest_reserve.html';
        } else {
            let statusText = closet.status === 'red' ? 'رزرو شده طولانی مدت' : 'رزرو شده برای امروز';
            alert(`کمد شماره ${closet.num} ${statusText} می‌باشد و قابل رزرو نیست.`);
        }
    });
    
    container.appendChild(div);
});
}

document.addEventListener('DOMContentLoaded', buildCloset);
