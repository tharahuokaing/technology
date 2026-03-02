/**
 * ប្រព័ន្ធបញ្ជាយានអវកាសអធិរាជ & បណ្តាញអាណាចក្រឌីជីថល
 * រួមបញ្ចូលប្រាសាទបក្សីចាំក្រុង និងបណ្តាញវេបសាយទាំង ១១ របស់លោកម្ចាស់
 * គ្រប់គ្រងដោយ៖ លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

function launchSpacecraft() {
    playSound('scan');
    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');
    const monitor = document.querySelector('.monarch-monitor');
    const aura = document.querySelector('.aura-circle');
    const hologramDisplay = document.getElementById('hologram-display');
    const spacecraftHologram = document.getElementById('spacecraft-hologram');

    // ១. ប្តូរ UI ទៅជាពណ៌មាសអធិរាជ
    status.innerText = "កំពុងបញ្ឆេះម៉ាស៊ីនយានបក្សីចាំក្រុង...";
    status.style.background = "#ffd700";
    status.style.color = "#000";

    if (monitor) monitor.style.boxShadow = "inset 0 0 60px rgba(255, 215, 0, 0.4)";
    
    // ២. បញ្ជីអាណាចក្រឌីជីថល (Digital Empire Links)
    const empireLinks = [
        { name: "Digital Casino 1", url: "https://tharahuokaing.github.io/casino1/" },
        { name: "Digital Casino", url: "https://tharahuokaing.github.io/casino/" },
        { name: "Banking System", url: "https://tharahuokaing.github.io/bank/" },
        { name: "ភោជនីយដ្ឋាន ហួ កាំង", url: "https://tharahuokaing.github.io/restaurant/" },
        { name: "T-Coin Central", url: "https://tharahuokaing.github.io/T-Coin/" },
        { name: "SINGULARITY_ROADMAP", url: "https://tharahuokaing.github.io/singularity_roadmap/" },
        { name: "HuakangThara AI", url: "https://tharahuokaing.github.io/ai/" },
        { name: "Tech Researcher", url: "https://tharahuokaing.github.io/technology/" },
        { name: "Tech Researcher 1", url: "https://tharahuokaing.github.io/Modern_Technology_Research_1/" },
        { name: "Y2K38 Problem Center", url: "https://tharahuokaing.github.io/Y2K38_Problem/" },
        { name: "V2X System", url: "https://tharahuokaing.github.io/V2X/" },
        { name: "V2X Research Lab", url: "https://tharahuokaing.github.io/V2X_Research/" },
        { name: "Solar-System", url: "https://tharahuokaing.github.io/solar-system/" }
    ];

    // ៣. ដំណើរការបង្ហោះយានអវកាស
    terminal.innerHTML = `<p style="color: #ffd700">> [SYSTEM] កំពុងរៀបចំការតភ្ជាប់បណ្តាញអាណាចក្រ...</p>`;
    
    setTimeout(() => {
        terminal.innerHTML += `<p style="color: #00f2ff">> [ENGINE] ថាមពលគ្រីស្តាល់ 100% | យានអវកាសបក្សីចាំក្រុង បាញ់បង្ហោះ!</p>`;
        
        // បង្ហាញរូបភាពយាន
        if (hologramDisplay) {
            hologramDisplay.style.display = 'flex';
            spacecraftHologram.src = 'solar_cyber_empire/baksey_cham_krong_spacecraft.jpg';
        }
        
        // ៤. បញ្ចាំង Link ទាំងអស់ចូលក្នុង Terminal ជាលក្ខណៈ Hologram Menu
        setTimeout(() => {
            terminal.innerHTML += `<p style="color: #00ff88; font-weight: bold;">> [PORTAL] បណ្តាញអាណាចក្រឌីជីថលត្រូវបានដាក់ពង្រាយ៖</p>`;
            
            empireLinks.forEach((link, index) => {
                setTimeout(() => {
                    const linkEl = document.createElement('p');
                    linkEl.innerHTML = `&nbsp;&nbsp;&nbsp; [${index + 1}] <a href="${link.url}" target="_blank" style="color: #ffd700; text-decoration: none; border-bottom: 1px dashed;">${link.name}</a> ⚡ ACTIVE`;
                    linkEl.style.animation = "textAppear 0.5s forwards";
                    terminal.appendChild(linkEl);
                    terminal.scrollTop = terminal.scrollHeight;
                    playSound('click');
                }, index * 200);
            });
        }, 1000);
        
    }, 1500);
}

