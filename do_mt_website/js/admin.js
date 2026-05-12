// ==================== Admin CMS System ====================

// Data storage
let contentData = {
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
        }
    ],
    news: [
        {
            id: 1,
            date: "2026-05-09",
            title: "Luật Bảo vệ Môi trường 2024 - Những thay đổi quan trọng",
            summary: "Tìm hiểu các thay đổi quan trọng trong Luật Bảo vệ Môi trường năm 2024.",
            content: "Luật Bảo vệ Môi trường 2024 có những thay đổi quan trọng..."
        }
    ]
};

let settings = {
    companyName: "DO MT",
    companyEmail: "info@domt.vn",
    companyPhone: "0123-456-789",
    companyAddress: "123 Đường ABC, Quận ABC, Hà Nội",
    companyIntro: "Dịch vụ Tư vấn Môi trường Chuyên nghiệp"
};

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', function() {
    loadDataFromStorage();
    renderDashboard();
    setupMenuButtons();
    setupModalHandlers();
    setupFormHandlers();
});

// ==================== Storage Management ====================
function loadDataFromStorage() {
    const stored = localStorage.getItem('domt_content_data');
    if (stored) {
        contentData = JSON.parse(stored);
    }
    
    const storedSettings = localStorage.getItem('domt_settings');
    if (storedSettings) {
        settings = JSON.parse(storedSettings);
    }
    
    loadSettingsForm();
}

function saveDataToStorage() {
    localStorage.setItem('domt_content_data', JSON.stringify(contentData));
    localStorage.setItem('domt_settings', JSON.stringify(settings));
}

// ==================== Menu Navigation ====================
function setupMenuButtons() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tabName = this.getAttribute('data-tab');
            if (!tabName) return;
            
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all menu items
            document.querySelectorAll('.menu-item').forEach(m => {
                m.classList.remove('active');
            });
            
            // Show selected tab
            document.getElementById(tabName).classList.add('active');
            this.classList.add('active');
            
            // Render content for tab
            if (tabName === 'services') {
                renderServices();
            } else if (tabName === 'news') {
                renderNews();
            } else if (tabName === 'contacts') {
                renderContacts();
            } else if (tabName === 'dashboard') {
                renderDashboard();
            }
        });
    });
}

// ==================== Dashboard ====================
function renderDashboard() {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    document.getElementById('total-contacts').textContent = contacts.length;
    document.getElementById('total-news').textContent = contentData.news.length;
    document.getElementById('total-services').textContent = contentData.services.length;
}

// ==================== Services Management ====================
function renderServices() {
    const container = document.getElementById('services-list');
    
    if (contentData.services.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Chưa có dịch vụ nào. Hãy thêm dịch vụ mới.</p></div>';
        return;
    }
    
    let html = '';
    contentData.services.forEach(service => {
        html += `
            <div class="list-item">
                <div class="item-info">
                    <h3>${service.icon} ${service.title}</h3>
                    <p>${service.description}</p>
                </div>
                <div class="item-actions">
                    <button class="btn btn-edit" onclick="editService(${service.id})">Sửa</button>
                    <button class="btn btn-delete" onclick="deleteService(${service.id})">Xóa</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function editService(id) {
    const service = contentData.services.find(s => s.id === id);
    if (!service) return;
    
    document.getElementById('modal-id').value = id;
    document.getElementById('modal-type').value = 'service';
    document.getElementById('modal-title').textContent = 'Sửa Dịch vụ';
    
    document.getElementById('service-title').value = service.title;
    document.getElementById('service-icon').value = service.icon;
    document.getElementById('service-description').value = service.description;
    document.getElementById('service-details').value = service.details;
    
    document.getElementById('service-fields').style.display = 'block';
    document.getElementById('news-fields').style.display = 'none';
    
    showModal();
}

function deleteService(id) {
    if (confirm('Bạn chắc chắn muốn xóa dịch vụ này?')) {
        contentData.services = contentData.services.filter(s => s.id !== id);
        saveDataToStorage();
        renderServices();
    }
}

// ==================== News Management ====================
function renderNews() {
    const container = document.getElementById('news-list');
    
    if (contentData.news.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Chưa có bài viết nào. Hãy thêm bài viết mới.</p></div>';
        return;
    }
    
    let html = '';
    contentData.news.forEach(news => {
        html += `
            <div class="list-item">
                <div class="item-info">
                    <h3>${news.title}</h3>
                    <p>Ngày: ${formatDate(news.date)} | ${news.summary}</p>
                </div>
                <div class="item-actions">
                    <button class="btn btn-edit" onclick="editNews(${news.id})">Sửa</button>
                    <button class="btn btn-delete" onclick="deleteNews(${news.id})">Xóa</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function editNews(id) {
    const news = contentData.news.find(n => n.id === id);
    if (!news) return;
    
    document.getElementById('modal-id').value = id;
    document.getElementById('modal-type').value = 'news';
    document.getElementById('modal-title').textContent = 'Sửa Bài viết';
    
    document.getElementById('news-title').value = news.title;
    document.getElementById('news-date').value = news.date;
    document.getElementById('news-summary').value = news.summary;
    document.getElementById('news-content').value = news.content;
    
    document.getElementById('service-fields').style.display = 'none';
    document.getElementById('news-fields').style.display = 'block';
    
    showModal();
}

function deleteNews(id) {
    if (confirm('Bạn chắc chắn muốn xóa bài viết này?')) {
        contentData.news = contentData.news.filter(n => n.id !== id);
        saveDataToStorage();
        renderNews();
    }
}

// ==================== Contacts Management ====================
function renderContacts() {
    const container = document.getElementById('contacts-list');
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    
    if (contacts.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Chưa có liên hệ nào từ khách hàng.</p></div>';
        return;
    }
    
    let html = '';
    contacts.reverse().forEach((contact, index) => {
        const date = new Date(contact.timestamp).toLocaleString('vi-VN');
        html += `
            <div class="list-item">
                <div class="item-info">
                    <h3>${contact.name}</h3>
                    <p>Email: ${contact.email} | Phone: ${contact.phone}</p>
                    <p>Công ty: ${contact.company || 'N/A'}</p>
                    <p>Dịch vụ: ${contact.service}</p>
                    <p>Tin nhắn: ${contact.message.substring(0, 50)}...</p>
                    <p style="color: #bbb; font-size: 12px;">Ngày: ${date}</p>
                </div>
                <div class="item-actions">
                    <button class="btn btn-delete" onclick="deleteContact(${contacts.length - 1 - index})">Xóa</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function deleteContact(index) {
    if (confirm('Xóa liên hệ này?')) {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
    }
}

// ==================== Modal Handlers ====================
function setupModalHandlers() {
    document.getElementById('add-service-btn').addEventListener('click', function() {
        document.getElementById('modal-id').value = '';
        document.getElementById('modal-type').value = 'service';
        document.getElementById('modal-title').textContent = 'Thêm Dịch vụ';
        document.getElementById('modal-form').reset();
        document.getElementById('service-fields').style.display = 'block';
        document.getElementById('news-fields').style.display = 'none';
        showModal();
    });
    
    document.getElementById('add-news-btn').addEventListener('click', function() {
        document.getElementById('modal-id').value = '';
        document.getElementById('modal-type').value = 'news';
        document.getElementById('modal-title').textContent = 'Thêm Bài viết';
        document.getElementById('modal-form').reset();
        document.getElementById('news-date').valueAsDate = new Date();
        document.getElementById('service-fields').style.display = 'none';
        document.getElementById('news-fields').style.display = 'block';
        showModal();
    });
    
    document.querySelector('.close').addEventListener('click', closeModal);
    
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

function showModal() {
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
    document.getElementById('modal-form').reset();
}

// ==================== Form Handlers ====================
function setupFormHandlers() {
    document.getElementById('modal-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('modal-type').value;
        const id = document.getElementById('modal-id').value;
        
        if (type === 'service') {
            saveService(id);
        } else if (type === 'news') {
            saveNews(id);
        }
        
        closeModal();
    });
    
    document.getElementById('settings-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveSettings();
    });
}

function saveService(id) {
    const service = {
        title: document.getElementById('service-title').value,
        icon: document.getElementById('service-icon').value || '📋',
        description: document.getElementById('service-description').value,
        details: document.getElementById('service-details').value
    };
    
    if (id) {
        service.id = parseInt(id);
        const index = contentData.services.findIndex(s => s.id === service.id);
        if (index !== -1) {
            contentData.services[index] = service;
        }
    } else {
        service.id = Math.max(...contentData.services.map(s => s.id), 0) + 1;
        contentData.services.push(service);
    }
    
    saveDataToStorage();
    renderServices();
}

function saveNews(id) {
    const news = {
        title: document.getElementById('news-title').value,
        date: document.getElementById('news-date').value,
        summary: document.getElementById('news-summary').value,
        content: document.getElementById('news-content').value
    };
    
    if (id) {
        news.id = parseInt(id);
        const index = contentData.news.findIndex(n => n.id === news.id);
        if (index !== -1) {
            contentData.news[index] = news;
        }
    } else {
        news.id = Math.max(...contentData.news.map(n => n.id), 0) + 1;
        contentData.news.push(news);
    }
    
    saveDataToStorage();
    renderNews();
}

function saveSettings() {
    settings = {
        companyName: document.getElementById('company-name').value,
        companyEmail: document.getElementById('company-email').value,
        companyPhone: document.getElementById('company-phone').value,
        companyAddress: document.getElementById('company-address').value,
        companyIntro: document.getElementById('company-intro').value
    };
    
    saveDataToStorage();
    alert('Cài đặt đã được lưu thành công!');
}

function loadSettingsForm() {
    document.getElementById('company-name').value = settings.companyName;
    document.getElementById('company-email').value = settings.companyEmail;
    document.getElementById('company-phone').value = settings.companyPhone;
    document.getElementById('company-address').value = settings.companyAddress;
    document.getElementById('company-intro').value = settings.companyIntro;
}

// ==================== Utilities ====================
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}
