/**
 * ព្រះរាជស្នូលមហាបញ្ជាការដ្ឋាន និងមហាប្រព័ន្ធសន្តិសុខអធិរាជ (Imperial Core & Security)
 * គ្រងរាជ្យ និងគ្រប់គ្រងផ្តាច់មុខដោយ៖ អង្គអធិរាជ ហួកាំង ថារ៉ា
 */

// ១. ព្រះរាជពិធីត្រួតពិនិត្យព្រះអត្តសញ្ញាណ (Imperial Gatekeeper Protocol)
function unlockSystem() {
    const accessCode = prompt("🔐 [ព្រះរាជសញ្ញាអាសន្ន] សូមបញ្ជាក់ព្រះបរមអត្តសញ្ញាណនៃអង្គអធិរាជសាយប័រ (Access Code):");

    // ព្រះរាជលក្ខខណ្ឌសម្ងាត់៖ ត្រូវវាយឈ្មោះ "huokaingthara"
    if (accessCode && accessCode.toLowerCase() === "huokaingthara") {
        playSound('scan');
        document.body.style.filter = "none"; // បើកពន្លឺព្រះរាជមណ្ឌល
        document.body.style.pointerEvents = "auto"; // អនុញ្ញាតឱ្យបញ្ជាព្រះរាជកិច្ច
        initializeEmpire();
    } else {
        alert("⚠️ [មិច្ឆាទិដ្ឋិជ្រៀតចូល] ការបំពានត្រូវបានបដិសេធ! កងទ័ពយន្តភពអង្គារកំពុងឡោមព័ទ្ធអ្នក!");
        window.location.reload(); // បិទព្រះរាជប្រព័ន្ធភ្លាមៗ
    }
}

// ២. ព្រះរាជពិធីបើកមហាអាណាចក្រ (Imperial Activation)
function initializeEmpire() {
    initMatrixRain(); // បើកមហាភាយុធកូដនៅ Background

    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');

    setTimeout(() => {
        terminal.innerHTML = `<p style="color: #ffd700">> [ព្រះរាជប្រព័ន្ធ] មហាអាណាចក្រសាយប័រ ស្ថិតក្នុងស្ថានភាព ONLINE...</p>`;
        setTimeout(() => {
            terminal.innerHTML += `<p style="color: #00f2ff">> [បរមស្នូល] ថាមពលគ្រីស្តាល់បុរាណត្រូវបានសមកាលកម្មថ្វាយព្រះអង្គ...</p>`;
            terminal.innerHTML += `<p style="color: #00ff88; font-weight: bold; font-size: 1.2rem; text-shadow: 0 0 10px #00ff88;">> [មង្គលរាជ្យ] សូមក្រាបបង្គំគាល់ ស្វាគមន៍ការយាងត្រឡប់មកវិញនៃ អង្គអធិរាជ ហួកាំង ថារ៉ា!</p>`;

            status.innerText = "ព្រះរាជប្រព័ន្ធអធិរាជសាយប័រ៖ ONLINE";
            status.style.background = "#00ff88";
            status.style.color = "#000";
            status.style.boxShadow = "0 0 30px #00ff88, inset 0 0 10px #ffffff";
        }, 1000);
    }, 500);
}

// ៣. ព្រះរាជនាឡិកាបរមវិចិត្រ (Imperial Precision Clock)
setInterval(() => {
    const d = new Date();
    const time = d.getHours().toString().padStart(2, '0') + ":" +
                 d.getMinutes().toString().padStart(2, '0') + ":" +
                 d.getSeconds().toString().padStart(2, '0') + ":" +
                 Math.floor(d.getMilliseconds() / 10).toString().padStart(2, '0');

    const clockElement = document.getElementById('live-clock');
    if (clockElement) clockElement.innerText = time;
}, 50);

// ៤. ព្រះរាជភាយុធកូដសាយប័រ (Imperial Matrix Background)
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "HUOKAINGTHARA01010101帝国"; 
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00f2ff"; // ពណ៌រស្មីអធិរាជ
        ctx.font = `${fontSize}px 'Courier New'`;

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

// ៥. ព្រះរាជកិច្ចចារឹកព្រះសារសវនកម្ម (Imperial Archive)
function exportReport() {
    playSound('scan');
    const terminal = document.getElementById('main-terminal');

    if (terminal.innerText.length > 50) {
        terminal.style.transition = "0.5s";
        terminal.style.boxShadow = "0 0 100px #ffd700";
        setTimeout(() => { terminal.style.boxShadow = "none"; }, 800);

        alert("📜 [ព្រះរាជបណ្ណាល័យ] ព្រះសារសវនកម្មរាជ្យត្រូវបានចារឹកក្នុងប្រវត្តិសាស្ត្រចក្រវាលរួចរាល់!");
        console.log("Imperial Audit Secured by His Majesty Lord Huakang Dara.");
    } else {
        alert("⚠️ [ទទេរស្អាត] គ្មានព្រះរាជទិន្នន័យសម្រាប់ចារឹកឡើយ! សូមត្រួតពិនិត្យភពនានាមុនសិន!");
    }
}

// ៦. ព្រះរាជសូរសព្ទអធិរាជ (Imperial Voice Engine)
function playSound(type) {
    const sound = document.getElementById(`sound-${type}`);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {
            console.warn("Audio waiting for Imperial Interaction...");
        });
    }
}

// ៧. ការចាប់ផ្តើមមហាស្បៃ Blur មុនព្រះរាជពិធី Unlock
window.addEventListener('load', () => {
    document.body.style.filter = "blur(25px) brightness(0.1)";
    document.body.style.pointerEvents = "none";
    document.body.style.transition = "filter 1.5s ease-in-out";

    setTimeout(unlockSystem, 800);
});
