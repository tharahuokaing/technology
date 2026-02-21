/**
 * ប្រព័ន្ធគ្រប់គ្រងរបាំងការពារភពសៅរ៍ (Saturn Shield & Satellite Grid)
 * ត្រួតពិនិត្យដោយ៖ លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

function checkGpsRollover() {
    // ១. បញ្ជាសំឡេងស្កេនកម្រិតខ្ពស់
    playSound('scan');

    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');
    const monitor = document.querySelector('.monarch-monitor');

    // ២. ប្តូរស្ថានភាព UI ទៅជាពណ៌បៃតងសន្តិសុខ (Security Green)
    status.innerText = "កំពុងស្កេនរបាំងការពារភពសៅរ៍ (Saturn Shield)...";
    status.style.background = "#00ff88";
    status.style.color = "#000";
    status.style.boxShadow = "0 0 20px #00ff88";

    // ៣. បន្ថែម Visual Effect ទៅលើ Monitor (Shield Pulse)
    if (monitor) {
        monitor.style.borderColor = "#00ff88";
        monitor.style.boxShadow = "inset 0 0 60px rgba(0, 255, 136, 0.3), 0 0 30px rgba(0, 255, 136, 0.1)";
    }

    // ៤. ទិន្នន័យប្រតិបត្តិការផ្កាយរណប
    const shieldLogs = [
        "> ព្រះរាជសារ៖ កំពុងសមកាលកម្មបណ្តាញផ្កាយរណប Saturn Rings Grid...",
        "> ស្ថានភាពបណ្តាញ៖ ផ្កាយរណបចំនួន ៨២ គ្រឿង កំពុងស្ថិតក្នុងគន្លងអធិរាជ...",
        "> របាំងថាមពល (Plasma Shield)៖ ដំណើរការស្ថិរភាព ៩៩.៩៩%",
        "> ការត្រួតពិនិត្យរលកសញ្ញា៖ មិនមានការជ្រៀតជ្រែកពីអាណាចក្រក្រៅ...",
        "> ការវិភាគ៖ ដែនអាកាសអន្តរភពស្ថិតក្រោមការបិទខ្ទប់ដាច់ខាត!",
        "> ព្រះរាជបញ្ជា៖ រក្សាវិន័យការពារ និងត្រៀមបាញ់កម្ទេចរាល់យានចម្លែក!"
    ];

    // ៥. បង្ហាញទិន្នន័យលើ Terminal
    terminal.innerHTML = ""; // លាងសម្អាត Terminal
    
    shieldLogs.forEach((log, i) => {
        setTimeout(() => {
            const p = document.createElement('p');
            
            // ប្តូរពណ៌អត្ថបទ៖ ពណ៌បៃតងសម្រាប់សន្តិសុខ និងពណ៌មាសសម្រាប់បញ្ជា
            if (i === 2 || i === 4) {
                p.style.color = "#00ff88";
                p.style.textShadow = "0 0 8px rgba(0, 255, 136, 0.5)";
            } else if (i === 5) {
                p.style.color = "#ffd700";
                p.style.fontWeight = "bold";
            } else {
                p.style.color = "#00f2ff";
            }

            p.innerHTML = log;
            terminal.appendChild(p);
            
            // Auto-scroll ទៅក្រោមបំផុត
            terminal.scrollTop = terminal.scrollHeight;

            // សំឡេងប៊ីបតិចៗពេលសារលោតឡើង
            if (i % 2 === 0) playSound('click');
        }, i * 800);
    });
}
