// ==================== Dynamic Content Management ====================

// Sample data - will be loaded from data files or local storage
const contentData = {
    services: [
        {
            id: 1,
            title: "Đánh giá Tác động Môi trường (ĐTM)",
            icon: "📋",
            description: "Hỗ trợ đánh giá ĐTM, ĐTM rút gọn, báo cáo môi trường",
            details: "Dịch vụ đánh giá tác động môi trường toàn diện cho các dự án xây dựng, công nghiệp, năng lượng. Tuân thủ đầy đủ Luật Bảo vệ Môi trường và các tiêu chuẩn hiện hành."
        },
        {
            id: 2,
            title: "Giám sát Quan trắc Môi trường",
            icon: "🔍",
            description: "Lấy mẫu, kiểm test chất lượng nước, không khí, đất",
            details: "Dịch vụ giám sát và kiểm test đầy đủ các thông số môi trường. Sử dụng thiết bị hiện đại, được cấp chứng chỉ kiểm định. Lập báo cáo theo tiêu chuẩn."
        },
        {
            id: 3,
            title: "Xin Giấy phép Môi trường",
            icon: "📄",
            description: "Tư vấn, chuẩn bị hồ sơ, hỗ trợ thủ tục hành chính",
            details: "Hỗ trợ toàn diện từ tư vấn pháp luật đến chuẩn bị, nộp hồ sơ xin giấy phép môi trường. Kinh nghiệm làm việc với các cơ quan MONRE, UBND."
        },
        {
            id: 4,
            title: "Quản lý Chất thải & Xử lý Nước thải",
            icon: "♻️",
            description: "Xử lý nước thải, khí thải, quản lý chất thải nguy hiểm",
            details: "Tư vấn giải pháp xử lý nước thải, khí thải, quản lý chất thải nguy hiểm. Thiết kế, vận hành, bảo trì các hệ thống xử lý."
        },
        {
            id: 5,
            title: "Huấn luyện & Đào tạo Nhân sự",
            icon: "👨‍🎓",
            description: "Đào tạo nhân sự chuyên về môi trường",
            details: "Cung cấp các khóa đào tạo chuyên sâu về luật môi trường, quản lý môi trường, kỹ thuật xử lý."
        },
        {
            id: 6,
            title: "Tư vấn Kỹ thuật",
            icon: "⚙️",
            description: "Tư vấn giải pháp kỹ thuật bảo vệ môi trường",
            details: "Tư vấn thiết kế, cải tiến các giải pháp kỹ thuật bảo vệ môi trường, giảm phát thải."
        },
        {
            id: 7,
            title: "Kiểm kê Khí nhà kính (GHG Inventory)",
            icon: "🌍",
            description: "Đánh giá và kiểm kê phát thải khí nhà kính",
            details: "Dịch vụ kiểm kê khí nhà kính theo tiêu chuẩn quốc tế GHG Protocol. Xác định nguồn phát thải Scope 1, 2, 3. Hỗ trợ lập kế hoạch giảm phát thải và báo cáo carbon footprint."
        },
        {
            id: 8,
            title: "Tư vấn HSE (Health, Safety, Environment)",
            icon: "🛡️",
            description: "Quản lý sức khỏe, an toàn, môi trường toàn diện",
            details: "Tư vấn, thiết kế và triển khai hệ thống HSE. Tuân thủ tiêu chuẩn OHSAS 18001, ISO 45001, ISO 14001. Đào tạo HSE, kiểm toán, giám sát tuân thủ."
        },
        {
            id: 9,
            title: "Tư vấn ESG (Environmental, Social, Governance)",
            icon: "🌱",
            description: "Hỗ trợ phát triển bền vững và báo cáo ESG",
            details: "Tư vấn chiến lược ESG, lập báo cáo phát triển bền vững (Sustainability Report). Đánh giá hiệu suất môi trường, xã hội, quản trị. Hỗ trợ cấp chứng chỉ ESG, GRI reporting."
        }
    ],
    news: [
        {
            id: 1,
            date: "2026-05-09",
            title: "Luật Bảo vệ Môi trường 2024 - Những thay đổi quan trọng",
            summary: "Tìm hiểu các thay đổi quan trọng trong Luật Bảo vệ Môi trường năm 2024 và cách doanh nghiệp tuân thủ.",
            content: "Luật Bảo vệ Môi trường 2024 có những thay đổi quan trọng liên quan đến yêu cầu đánh giá tác động môi trường, tiêu chuẩn chất lượng môi trường, và quản lý chất thải..."
        },
        {
            id: 2,
            date: "2026-05-05",
            title: "Hướng dẫn chuẩn bị hồ sơ xin giấy phép môi trường",
            summary: "Quy trình chi tiết và danh sách tài liệu cần thiết để xin giấy phép môi trường.",
            content: "Để xin giấy phép môi trường, doanh nghiệp cần chuẩn bị đầy đủ các tài liệu gồm: đơn xin, báo cáo, bảng kê thiết bị, cam kết bảo vệ môi trường..."
        },
        {
            id: 3,
            date: "2026-05-01",
            title: "Tiêu chuẩn chất lượng nước thải xả ra môi trường",
            summary: "Tiêu chuẩn QCVN về chất lượng nước thải và cách kiểm test, đánh giá.",
            content: "Tiêu chuẩn QCVN 40:2011/BTNMT quy định các chỉ tiêu chất lượng nước thải xả ra môi trường. Doanh nghiệp cần tuân thủ các giới hạn quy định..."
        }
    ]
};

// ==================== Initialize Page ====================
let currentSlide = 0;

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Load dynamic content based on current page
    if (currentPage === 'services.html') {
        loadServices();
        initializeCarousel();

    } else if (currentPage === 'news.html') {
        loadNews();
    }
    
    // Setup contact form
    setupContactForm();
});

// ==================== Services Loading ====================
function loadServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    let servicesHTML = '';
    contentData.services.forEach(service => {
        servicesHTML += `
            <div class="service-detail-item">
                <div style="font-size: 32px; margin-bottom: 15px;">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.details}</p>
                <p><strong>Liên hệ ngay:</strong> <a href="contact.html" class="btn btn-primary">Nhận tư vấn miễn phí</a></p>
            </div>
        `;
    });
    
    container.innerHTML = servicesHTML;
}

// ==================== Carousel Management ====================
function initializeCarousel() {
    const carouselContainer = document.getElementById('services-carousel');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    
    if (!carouselContainer) return;
    
    // Create carousel items
    let carouselHTML = '';
    contentData.services.forEach(service => {
        carouselHTML += `
            <div class="carousel-item">
                <div class="carousel-image">${service.icon}</div>
                <h3>${service.title}</h3>
                <p class="description">${service.description}</p>
                <p style="font-style: italic; color: var(--primary-color);">Nhấn vào để xem chi tiết</p>
            </div>
        `;
    });
    carouselContainer.innerHTML = carouselHTML;
    
    // Create indicator dots
    let indicatorsHTML = '';
    contentData.services.forEach((service, index) => {
        indicatorsHTML += `<div class="indicator-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>`;
    });
    indicatorsContainer.innerHTML = indicatorsHTML;
    
    // Add click event to carousel items to view details
    document.querySelectorAll('.carousel-item').forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const service = contentData.services[index];
            showServiceDetail(service);
        });
    });
}

function nextService() {
    currentSlide = (currentSlide + 1) % contentData.services.length;
    updateCarousel();
}

function prevService() {
    currentSlide = (currentSlide - 1 + contentData.services.length) % contentData.services.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('services-carousel');
    const offset = currentSlide * -100;
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function showServiceDetail(service) {
    alert(`${service.title}\n\n${service.details}\n\nLiên hệ: 0123-456-789 | info@domt.vn`);
}

// ==================== News Loading ====================
function loadNews() {
    const container = document.getElementById('news-container');
    if (!container) return;
    
    let newsHTML = '';
    contentData.news.forEach(newsItem => {
        const formattedDate = formatDate(newsItem.date);
        newsHTML += `
            <div class="news-item">
                <div class="news-date">${formattedDate}</div>
                <h3>${newsItem.title}</h3>
                <p>${newsItem.summary}</p>
                <a href="#" onclick="viewNewsDetail(${newsItem.id}); return false;">Đọc thêm →</a>
            </div>
        `;
    });
    
    container.innerHTML = newsHTML;
}

// ==================== Helper Functions ====================
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', locale: 'vi-VN' };
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', options);
}

function viewNewsDetail(id) {
    const newsItem = contentData.news.find(n => n.id === id);
    if (newsItem) {
        alert(`${newsItem.title}\n\n${newsItem.content}`);
    }
}

// ==================== Contact Form ====================
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Save to localStorage (simulating backend)
        saveContact(formData);
        
        // Show success message
        alert('Cảm ơn! Chúng tôi sẽ liên hệ lại bạn trong 24 giờ.');
        
        // Reset form
        form.reset();
    });
}

function saveContact(data) {
    let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    data.timestamp = new Date().toISOString();
    contacts.push(data);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('Contact saved:', data);
}

// ==================== CTA Button ====================
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary') && 
        (e.target.textContent.includes('Liên hệ') || e.target.textContent.includes('Gọi'))) {
        const isContactPage = window.location.pathname.includes('contact.html');
        if (!isContactPage && e.target.textContent.includes('Liên hệ')) {
            window.location.href = 'contact.html';
        }
    }
});
