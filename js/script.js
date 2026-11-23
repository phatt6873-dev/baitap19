document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Trần Thanh Phát đã load xong!');

    // Hiển thị thông báo chào mừng khi mở trang chủ
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('/') || path === '') {
        alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
    }

    // Xử lý gửi form ở trang Liên hệ
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const senderName = document.getElementById('name').value.trim();
            alert(`Cảm ơn ${senderName || 'bạn'} đã gửi lời nhắn cho Trần Thanh Phát!`);
            contactForm.reset();
        });
    }
});
