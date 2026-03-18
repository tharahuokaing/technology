/**
 * ព្រះរាជប្រព័ន្ធគ្រប់គ្រងមហាកងទ័ពយន្ត និងគ្រឿងចក្រយោធាអវកាសភពអង្គារ
 * ស្ថិតក្រោមព្រះរាជហឫទ័យបញ្ជាដាច់ខាត៖ ព្រះករុណាជាអម្ចាស់ជីវិតលើត្បូង លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

function systemHardware() {
    // ១. បញ្ជាសូរសព្ទស្កេនគ្រឿងចក្រយោធាភពអង្គារ
    playSound('scan');

    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');
    const monitor = document.querySelector('.monarch-monitor');

    // ២. ផ្លាស់ប្តូររស្មីនៃផ្ទាំងបញ្ជា (UI) ទៅជាពណ៌ខៀវតេជៈ (Electric Imperial Cyan)
    status.innerText = "កំពុងថ្វាយការបញ្ជាមហាកងទ័ពយន្តភពអង្គារ (Mars Droid Army)...";
    status.style.background = "#00f2ff";
    status.style.color = "#000";
    status.style.boxShadow = "0 0 30px #00f2ff, inset 0 0 10px #ffffff";

    // ៣. បន្ថែមឥទ្ធិពលចក្ខុ (Visual Effect) លើព្រះរាជមណ្ឌល (Droid Link Interface)
    if (monitor) {
        monitor.style.borderColor = "#00f2ff";
        monitor.style.boxShadow = "inset 0 0 80px rgba(0, 242, 255, 0.4), 0 0 40px rgba(0, 242, 255, 0.2)";
    }

    // ៤. ក្រាបបង្គំទូលថ្វាយស្ថានភាពមហាកងទ័ពយន្ត និងគ្រឿងចក្រសឹក
    const armyStatus = [
        "> ព្រះរាជសារ៖ កំពុងភ្ជាប់ព្រះរាជហឫទ័យទៅកាន់មជ្ឈមណ្ឌលបញ្ជាការដ្ឋាន Olympus Mons...",
        "> ក្រាបបង្គំទូល៖ មហាកងពល Droid ៥ លានយូនីត ស្ថិតក្នុងស្ថានភាព 'សឹកសង្គ្រាម' (Combat Ready)...",
        "> ព្រះរាជឫទ្ធានុភាពគ្រឿងចក្រ៖ មហាភាយុធ Plasma Railguns ដំណើរការស្ថិរភាព ១០០%...",
        "> ការត្រួតពិនិត្យថាមពលរាជ្យ៖ ព្រះបរមស្នូល (RTG) គ្រប់គ្រាន់សម្រាប់ប្រតិបត្តិការមហិមា...",
        "> ព្រះរាជវិនិច្ឆ័យ៖ ដែនដីភពអង្គារស្ថិតក្រោមមហិទ្ធិឫទ្ធិគ្រប់គ្រងទាំងស្រុង...",
        "> ព្រះរាជឱង្ការដាច់ខាត៖ រង់ចាំសញ្ញាប្រកាសសឹកពី អង្គអធិរាជ ហួកាំង ថារ៉ា ដើម្បីកម្ទេចបច្ចាមិត្រ!"
    ];

    // ៥. បង្ហាញទិន្នន័យថ្វាយលើព្រះរាជ Terminal
    terminal.innerHTML = ""; // លាងសម្អាតមណ្ឌលទិន្នន័យ

    armyStatus.forEach((line, i) => {
        setTimeout(() => {
            const p = document.createElement('p');

            // ប្តូរពណ៌អត្ថបទតាមឋានៈនៃកម្លាំងសឹកសាយប័រ
            if (i === 1 || i === 2) {
                p.style.color = "#00f2ff"; // ពណ៌ខៀវតេជៈបច្ចេកវិទ្យា
                p.style.fontWeight = "bold";
                p.style.textShadow = "0 0 10px rgba(0, 242, 255, 0.8)";
            } else if (i === 5) {
                p.style.color = "#ffd700"; // ពណ៌មាសសម្រាប់ព្រះរាជឱង្ការប្រកាសសឹក
                p.style.fontWeight = "bold";
                p.style.fontSize = "1.1rem";
                p.style.textShadow = "0 0 20px rgba(255, 215, 0, 0.9)";
            } else {
                p.style.color = "#ffffff";
            }

            p.innerHTML = line;
            terminal.appendChild(p);

            // រំកិលអេក្រង់ស្វ័យប្រវត្តិថ្វាយខ្សែព្រះនេត្រ
            terminal.scrollTop = terminal.scrollHeight;

            if (i % 2 === 0) playSound('click');
        }, i * 800);
    });
}
