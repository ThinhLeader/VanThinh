// login
// mở form đăng nhập
function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

// đóng form
function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

// gán sự kiện cho TẤT CẢ nút "Mua ngay"
document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        openLogin();
    });
});

// nút X
document.querySelector(".close").addEventListener("click", closeLogin);

// click nền tối để đóng
document.getElementById("loginModal").addEventListener("click", e => {
    if (e.target.id === "loginModal") {
        closeLogin();
    }
});

// loc xe theo data-brand
const diachi = new URLSearchParams(window.location.search);
const hang = diachi.get("brand");

if (hang) {
    document.querySelectorAll(".car").forEach(car => {
        if (car.dataset.brand !== hang) {
            car.style.display = "none";
        }
    });
}

