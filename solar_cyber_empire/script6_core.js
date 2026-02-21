/**
 * មហាស្នូលបញ្ជាការដ្ឋាន និងប្រព័ន្ធសន្តិសុខអធិរាជ (Imperial Core & Security)
 * គ្រប់គ្រងផ្តាច់មុខដោយ៖ លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

// ១. ប្រព័ន្ធ Identity Check (Gatekeeper Protocol)
function unlockSystem() {
    // បង្កើត Interface សួរពាក្យសម្ងាត់បែប Cyber
    const accessCode = prompt("🔐 [SECURITY ALERT] សូមបញ្ជាក់អត្តសញ្ញាណអធិរាជ (Access Code):");
    
    // លក្ខខណ្ឌសម្ងាត់៖ ត្រូវវាយឈ្មោះ "Huakang Dara" (មិនប្រកាន់អក្សរតូចធំ)
    if (accessCode && accessCode.toLowerCase() === "huakang dara") {
        playSound('scan');
        document.body.style.filter = "none"; // បើកពន្លឺអេក្រង់
        document.body.style.pointerEvents = "auto"; // អនុញ្ញាតឱ្យចុច
        initializeEmpire();
    } else {
        alert("⚠️ [INTRUDER ALERT] ការជ្រៀតចូលត្រូវបានបដិសេធ! កងទ័ពយន្តភពអង្គារកំពុងតាមដានអ្នក!");
        window.location.reload(); // បិទប្រព័ន្ធភ្លាមៗ
    }
}

// ២. មុខងារចាប់ផ្តើមអាណាចក្រ (ក្រោយពេល Authenticated)
function initializeEmpire() {
    initMatrixRain(); // បើកភ្លៀងកូដ Matrix នៅ Background
    
    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');

    setTimeout(() => {
        terminal.innerHTML = `<p style="color: #ffd700">> [SYSTEM] អាណាចក្រសាយប័រ ស្ថិតក្នុងស្ថានភាព ONLINE...</p>`;
        setTimeout(() => {
            terminal.innerHTML += `<p style="color: #00f2ff">> [CORE] ថាមពលគ្រីស្តាល់បុរាណត្រូវបានសមកាលកម្ម...</p>`;
            terminal.innerHTML += `<p style="color: #00ff88; font-weight: bold;">> [WELCOME] ស្វាគមន៍ការត្រឡប់មកវិញ នៃលោកម្ចាស់ ហួកាំង ថារ៉ា!</p>`;
            
            status.innerText = "ប្រព័ន្ធអធិរាជ៖ ONLINE";
            status.style.background = "#00ff88";
            status.style.color = "#000";
            status.style.boxShadow = "0 0 20px #00ff88";
        }, 1000);
    }, 500);
}

// ៣. ប្រព័ន្ធនាឡិកាអធិរាជ (Imperial Precision Clock)
setInterval(() => {
    const d = new Date();
    const time = d.getHours().toString().padStart(2, '0') + ":" + 
                 d.getMinutes().toString().padStart(2, '0') + ":" + 
                 d.getSeconds().toString().padStart(2, '0') + ":" + 
                 Math.floor(d.getMilliseconds() / 10).toString().padStart(2, '0');
    
    const clockElement = document.getElementById('live-clock');
    if (clockElement) clockElement.innerText = time;
}, 50);

// ៤. ប្រព័ន្ធភ្លៀងកូដសាយប័រ (Matrix Background Engine)
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // កំណត់ទំហំ Canvas ឱ្យពេញអេក្រង់
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789កខគឃងចឆជឈញដឋឌឍណ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#00f2ff"; // ពណ៌ខៀវអធិរាជ
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, y * fontSize);
            
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }
    setInterval(draw, 50);
}

// ៥. មុខងារចារឹកព្រះរាជសារ (Imperial Archive)
function exportReport() {
    playSound('scan');
    const terminal = document.getElementById('main-terminal');
    
    if (terminal.innerText.length > 50) {
        terminal.style.transition = "0.3s";
        terminal.style.boxShadow = "0 0 70px #ffd700";
        setTimeout(() => { terminal.style.boxShadow = "none"; }, 500);

        alert("📜 [ARCHIVE] ព្រះរាជសារសវនកម្មត្រូវបានចារឹកក្នុងប្រវត្តិសាស្ត្ររួចរាល់!");
        console.log("Imperial Audit Secured by Lord Huakang Dara.");
    } else {
        alert("⚠️ [EMPTY] គ្មានទិន្នន័យសម្រាប់ចារឹកឡើយ! សូមបញ្ជាភពនានាមុនសិន!");
    }
}

// ៦. ប្រព័ន្ធសំឡេង (Imperial Voice Engine)
function playSound(type) {
    const sound = document.getElementById(`sound-${type}`);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {
            // បង្ហាញក្នុង Console ប្រសិនបើ Browser ប្លុកសំឡេង
            console.warn("Audio waiting for user interaction...");
        });
    }
}

// ៧. ការចាប់ផ្តើម Lock Screen ពេលបើក Web ភ្លាម
window.addEventListener('load', () => {
    // បង្កើតស្ទីល Blur និងបិទកុំឱ្យចុចមុនពេល Unlock
    document.body.style.filter = "blur(15px) brightness(0.2)";
    document.body.style.pointerEvents = "none";
    document.body.style.transition = "filter 1s ease";

    // ពន្យារពេល ០.៥ វិនាទី សឹមសួរពាក្យសម្ងាត់
    setTimeout(unlockSystem, 500);
});

// ៨. ភ្ជាប់ចលនាប៊ូតុងទាំងអស់
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.royal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('click');
            btn.style.transform = "scale(0.95)";
            setTimeout(() => { btn.style.transform = "scale(1)"; }, 100);
        });
    });
});
