/**
 * ប្រព័ន្ធវិភាគសេដ្ឋកិច្ច និងរតនាគារឌីជីថលអន្តរភព
 * គ្រប់គ្រងដោយ៖ លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

function calculateRisk() {
    // ១. បញ្ជាសំឡេងស្កេនទិន្នន័យហិរញ្ញវត្ថុ
    playSound('scan');

    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');
    const monitor = document.querySelector('.monarch-monitor');

    // ២. ប្តូរស្ថានភាព UI ទៅជាពណ៌មាសអធិរាជ (Imperial Gold)
    status.innerText = "កំពុងវិភាគរតនាគារសាយប័រ (Cyber-Coin)...";
    status.style.background = "#ffd700";
    status.style.color = "#000";
    status.style.boxShadow = "0 0 20px #ffd700";

    // ៣. បន្ថែម Visual Effect ទៅលើ Monitor (Wealth Glow)
    if (monitor) {
        monitor.style.borderColor = "#ffd700";
        monitor.style.boxShadow = "inset 0 0 60px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.1)";
    }

    // ៤. ទិន្នន័យសេដ្ឋកិច្ចយុទ្ធសាស្ត្រ
    const economyData = [
        "> ព្រះអធិរាជសារ៖ កំពុងទាញយកទិន្នន័យពីធនាគារកណ្តាលអន្តរភព...",
        "> ស្ថានភាព Cyber-Coin៖ កំពុងឡើងថ្លៃ +១៥% ធៀបនឹងមាសសុទ្ធ...",
        "> ថវិកាយោធាអវកាស៖ ត្រូវបានបែងចែកទៅកាន់ Mars Droid Army រួចរាល់...",
        "> ការវិភាគ៖ កំណើនសេដ្ឋកិច្ចអាណាចក្រស្ថិតក្នុងកម្រិតមហិមា (Hyper-Growth)...",
        "> ស្ថានភាពបំណុល៖ មាន (អាណាចក្រដទៃជំពាក់យើង ៥០០ លាន Cyber-Coin)...",
        "> ព្រះអធិរាជបញ្ជា៖ បន្តវិនិយោគលើបច្ចេកវិទ្យា Quantum ដើម្បីរក្សាអំណាចហិរញ្ញវត្ថុ!... https://tharahuokaing.github.io/T-Coin/ "
    ];

    // ៥. បង្ហាញទិន្នន័យលើ Terminal
    terminal.innerHTML = ""; // លាងសម្អាត Terminal
    
    economyData.forEach((line, i) => {
        setTimeout(() => {
            const p = document.createElement('p');
            
            // ប្តូរពណ៌អត្ថបទ៖ ពណ៌មាសសម្រាប់ទិន្នន័យហិរញ្ញវត្ថុ
            if (i === 1 || i === 4) {
                p.style.color = "#ffd700";
                p.style.textShadow = "0 0 8px rgba(255, 215, 0, 0.5)";
                p.style.fontWeight = "bold";
            } else if (i === 5) {
                p.style.color = "#00f2ff"; // ពណ៌ខៀវសម្រាប់បញ្ជាចុងក្រោយ
                p.style.fontWeight = "bold";
            } else {
                p.style.color = "#ffffff";
            }

            p.innerHTML = line;
            terminal.appendChild(p);
            
            // Auto-scroll
            terminal.scrollTop = terminal.scrollHeight;

            if (i % 2 === 0) playSound('click');
        }, i * 850);
    });
}

