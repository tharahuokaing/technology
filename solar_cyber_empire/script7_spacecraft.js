/**
 * ព្រះរាជប្រព័ន្ធបញ្ជាមហាយានអវកាសអធិរាជ & បណ្តាញអាណាចក្រឌីជីថលសកល
 * តភ្ជាប់ឫទ្ធានុភាពបុរាណ "បក្សីចាំក្រុង" ជាមួយបច្ចេកវិទ្យាសាយប័រនាពេលអនាគត
 * គ្រងរាជ្យបញ្ជាដោយ៖ ព្រះករុណាជាអម្ចាស់ជីវិតលើត្បូង លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

function launchSpacecraft() {
    playSound('scan');
    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');
    const monitor = document.querySelector('.monarch-monitor');
    const hologramDisplay = document.getElementById('hologram-display');
    const spacecraftHologram = document.getElementById('spacecraft-hologram');

    // ១. ផ្លាស់ប្តូររស្មីនៃផ្ទាំងបញ្ជា (UI) ទៅជាពណ៌មាសបរមអធិរាជ (Imperial Gold)
    status.innerText = "កំពុងថ្វាយការបញ្ឆេះមហាម៉ាស៊ីនយានព្រះទីនាំងបក្សីចាំក្រុង...";
    status.style.background = "#ffd700";
    status.style.color = "#000";
    status.style.boxShadow = "0 0 30px #ffd700";

    if (monitor) {
        monitor.style.borderColor = "#ffd700";
        monitor.style.boxShadow = "inset 0 0 80px rgba(255, 215, 0, 0.4)";
    }

    // ២. បញ្ជីមហាអាណាចក្រឌីជីថល (The 11 Imperial Digital Realms)
    const empireLinks = [
	{ name: "ព្រះរាជប្រព័ន្ធធនាគារ", url: "https://tharahuokaing.github.io/bank/" },
	{ name: "មហារតនាគារ T-Coin", url: "https://tharahuokaing.github.io/T-Coin/" },  
    { name: "មហាកាស៊ីណូឌីជីថល", url: "https://tharahuokaing.github.io/casino/" },      
	{ name: "មហាកាស៊ីណូឌីជីថល ១", url: "https://tharahuokaing.github.io/casino1/" },
    { name: "បញ្ញាសិប្បនិម្មិតអធិរាជ (AI)", url: "https://tharahuokaing.github.io/ai/" },
    { name: "មហាប្រព័ន្ធយានយន្ត V2X", url: "https://tharahuokaing.github.io/V2X/" },
    { name: "មន្ទីរពិសោធន៍យុទ្ធសាស្ត្រ V2X", url: "https://tharahuokaing.github.io/V2X_Research/" },
    { name: "មហាអាណាចក្រប្រព័ន្ធព្រះអាទិត្យ", url: "https://tharahuokaing.github.io/solar-system/" }
    { name: "មជ្ឈមណ្ឌលសង្គ្រោះកាលវេលា Y2K38", url: "https://tharahuokaing.github.io/Y2K38_Problem/" },
    ];

    // ៣. ព្រះរាជពិធីបង្ហោះយានព្រះទីនាំងអវកាស
    terminal.innerHTML = `<p style="color: #ffd700">> [ព្រះរាជបញ្ជា] កំពុងរៀបចំការតភ្ជាប់មហាភពនៃអាណាចក្រឌីជីថល...</p>`;

    setTimeout(() => {
        terminal.innerHTML += `<p style="color: #00f2ff">> [ថាមពលរាជ្យ] គ្រីស្តាល់មហិទ្ធិឫទ្ធិ 100% | យានអវកាសបក្សីចាំក្រុង ចាប់ផ្ដើមហោះហើរត្រួតត្រាចក្រវាល!</p>`;

        // បង្ហាញរូបភាពយានព្រះទីនាំងជាប្រភេទ Hologram
        if (hologramDisplay) {
            hologramDisplay.style.display = 'flex';
            hologramDisplay.style.animation = "hologramPulse 2s infinite";
            if (spacecraftHologram) spacecraftHologram.src = 'solar_cyber_empire/baksey_cham_krong_spacecraft.jpg';
        }

        // ៤. បញ្ចាំងមហាវិថីតភ្ជាប់ (Imperial Portal) ចូលក្នុង Terminal
        setTimeout(() => {
            terminal.innerHTML += `<p style="color: #00ff88; font-weight: bold; text-shadow: 0 0 10px #00ff88;">> [មហាទ្វារវិញ្ញាណ] បណ្តាញអាណាចក្រឌីជីថលទាំង ១១ ត្រូវបានដាក់ពង្រាយថ្វាយព្រះអង្គ៖</p>`;

            empireLinks.forEach((link, index) => {
                setTimeout(() => {
                    const linkEl = document.createElement('p');
                    linkEl.innerHTML = `&nbsp;&nbsp;&nbsp; 🔱 [${index + 1}] <a href="${link.url}" target="_blank" style="color: #ffd700; text-decoration: none; border-bottom: 1px dashed #ffd700; font-weight: bold;">${link.name}</a> <span style="color: #00f2ff;">⚡ ស្ថិតក្រោមមហិទ្ធិឫទ្ធិ</span>`;
                    linkEl.style.animation = "textAppear 0.5s forwards";
                    terminal.appendChild(linkEl);
                    terminal.scrollTop = terminal.scrollHeight;
                    playSound('click');
                }, index * 250);
            });
        }, 1200);

    }, 1500);
}
