/**
 * ប្រព័ន្ធគ្រប់គ្រងកងទ័ពយន្ត និងគ្រឿងចក្រយោធាអវកាសភពអង្គារ
 * គ្រប់គ្រងដោយ៖ លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

function systemHardware() {
    // ១. បញ្ជាសំឡេងស្កេនគ្រឿងចក្រយោធា
    playSound('scan');

    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');
    const monitor = document.querySelector('.monarch-monitor');

    // ២. ប្តូរស្ថានភាព UI ទៅជាពណ៌ខៀវអគ្គិសនី (Electric Cyan)
    status.innerText = "កំពុងបញ្ជាកងទ័ពយន្តភពអង្គារ (Mars Droid Army)...";
    status.style.background = "#00f2ff";
    status.style.color = "#000";
    status.style.boxShadow = "0 0 20px #00f2ff";

    // ៣. បន្ថែម Visual Effect ទៅលើ Monitor (Droid Interface Glow)
    if (monitor) {
        monitor.style.borderColor = "#00f2ff";
        monitor.style.boxShadow = "inset 0 0 60px rgba(0, 242, 255, 0.3), 0 0 30px rgba(0, 242, 255, 0.1)";
    }

    // ៤. របាយការណ៍ស្ថានភាពកងទ័ពយន្ត
    const armyStatus = [
        "> ព្រះរាជសារ៖ កំពុងភ្ជាប់ទៅកាន់មជ្ឈមណ្ឌលបញ្ជាការដ្ឋាន Olympus Mons...",
        "> ស្ថានភាពទ័ព៖ កងពល Droid ៥ លានយូនីត ស្ថិតក្នុងស្ថានភាព 'Combat Ready'...",
        "> គ្រឿងចក្រយោធា៖ កាំភ្លើងធំ Plasma Railguns ដំណើរការ ១០០%...",
        "> ការត្រួតពិនិត្យថាមពល៖ ស្នូលនុយក្លេអ៊ែរ (RTG) គ្រប់គ្រាន់សម្រាប់ប្រតិបត្តិការ...",
        "> យុទ្ធសាស្ត្រ៖ ដែនដីភពអង្គារស្ថិតក្រោមការគ្រប់គ្រងទាំងស្រុង...",
        "> ព្រះរាជបញ្ជា៖ រង់ចាំសញ្ញាពីលោកម្ចាស់ ហួកាំង ថារ៉ា ដើម្បីចាប់ផ្តើមបេសកកម្ម!"
    ];

    // ៥. បង្ហាញទិន្នន័យលើ Terminal
    terminal.innerHTML = ""; // លាងសម្អាត Terminal
    
    armyStatus.forEach((line, i) => {
        setTimeout(() => {
            const p = document.createElement('p');
            
            // ប្តូរពណ៌អត្ថបទ៖ ពណ៌ខៀវសម្រាប់បច្ចេកវិទ្យា និងពណ៌មាសសម្រាប់បញ្ជា
            if (i === 1 || i === 2) {
                p.style.color = "#00f2ff";
                p.style.fontWeight = "bold";
                p.style.textShadow = "0 0 8px rgba(0, 242, 255, 0.5)";
            } else if (i === 5) {
                p.style.color = "#ffd700";
                p.style.fontWeight = "bold";
            } else {
                p.style.color = "#ffffff";
            }

            p.innerHTML = line;
            terminal.appendChild(p);
            
            // Auto-scroll ទៅក្រោមបំផុត
            terminal.scrollTop = terminal.scrollHeight;

            if (i % 2 === 0) playSound('click');
        }, i * 800);
    });
}

