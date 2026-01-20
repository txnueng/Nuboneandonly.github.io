// ข้อมูลสมาชิก (แก้ไขรายละเอียดตรงนี้)
const membersData = {
    1: {
        name: "นาย ก. ไก่",
        role: "หัวหน้าพรรค",
        desc: "มุ่งมั่น ตั้งใจ เพื่อยโสธรพิทยาคมที่ดีกว่า",
        img: "https://via.placeholder.com/150",
        ig: "https://instagram.com/p1",
        fb: "https://facebook.com/p1"
    },
    2: {
        name: "นางสาว ข. ไข่",
        role: "รองหัวหน้าพรรค 1",
        desc: "สานงานต่อให้เป็นรูปธรรม",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    // เพิ่มข้อมูลให้ครบ 10 คน ตาม ID ที่ใส่ใน HTML
    10: {
        name: "ชื่อ สมาชิก 10",
        role: "ฝ่ายสวัสดิการ",
        desc: "ดูแลทุกข์สุขของเพื่อนพี่น้อง",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    }
};

// ฟังก์ชันเปิด Modal สมาชิก
function openMemberModal(id) {
    const modal = document.getElementById("memberModal");
    const data = membersData[id];

    if (data) {
        document.getElementById("modal-name").innerText = data.name;
        document.getElementById("modal-role").innerText = data.role;
        document.getElementById("modal-desc").innerText = data.desc;
        document.getElementById("modal-img").src = data.img;
        document.getElementById("modal-ig").href = data.ig;
        document.getElementById("modal-fb").href = data.fb;
        
        modal.style.display = "block";
    }
}

// ฟังก์ชันปิด Modal
function closeModal() {
    document.getElementById("memberModal").style.display = "none";
}

// ปิด Modal เมื่อคลิกพื้นที่ว่างๆ ข้างนอก
window.onclick = function(event) {
    const modal = document.getElementById("memberModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Animation on Scroll (เลื่อนลงแล้วค่อยๆ ปรากฏ)
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // แสดงครั้งเดียว
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
});

