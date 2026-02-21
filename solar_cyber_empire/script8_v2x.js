/**
 * ប្រព័ន្ធគ្រប់គ្រងចរាចរណ៍វៃឆ្លាត V2X (Vehicle-to-Everything)
 * តភ្ជាប់បណ្តាញស្រាវជ្រាវរបស់៖ លោកម្ចាស់ ហួកាំង ថារ៉ា
 */

function runV2XMonitor() {
    playSound('scan');
    const terminal = document.getElementById('main-terminal');
    const status = document.getElementById('status-tag');
    const monitor = document.querySelector('.monarch-monitor');

    // ១. ប្តូរស្ថានភាព UI ទៅជាពណ៌ស្វាយអាមេទីស (Amethyst Purple) - តំណាងឱ្យ AI & V2X
    status.innerText = "កំពុងស្កេនបណ្តាញចរាចរណ៍ V2X...";
    status.style.background = "#bf00ff";
    status.style.color = "#fff";
    status.style.boxShadow = "0 0 20px #bf00ff";

    if (monitor) {
        monitor.style.borderColor = "#bf00ff";
        monitor.style.boxShadow = "inset 0 0 60px rgba(191, 0, 255, 0.2)";
    }

    // ២. ទិន្នន័យចរាចរណ៍យុទ្ធសាស្ត្រ
    const v2xLogs = [
        "> ព្រះរាជសារ៖ កំពុងភ្ជាប់ទៅកាន់ប្រព័ន្ធ V2X Research Lab...",
        "> ស្ថានភាព V2V (Vehicle-to-Vehicle)៖ យានយន្ត ៥០,០០០ គ្រឿងបានតភ្ជាប់...",
        "> ស្ថានភាព V2I (Vehicle-to-Infrastructure)៖ ផ្លូវអវកាសស្ថិតក្នុងស្ថិរភាព...",
        "> ការវិភាគ៖ កាត់បន្ថយការកកស្ទះ និងគ្រោះថ្នាក់ចរាចរណ៍បាន ៩៩.៩%...",
        "> គោលដៅ៖ តភ្ជាប់បណ្តាញទៅកាន់ https://tharahuokaing.github.io/V2X/ ...",
        "> ព្រះរាជបញ្ជា៖ គ្រប់គ្រងលំហូរចរាចរណ៍អន្តរភព ក្រោមក្រសែភ្នែកអធិរាជ!"
    ];

    terminal.innerHTML = "";
    
    v2xLogs.forEach((log, i) => {
        setTimeout(() => {
            const p = document.createElement('p');
            
            if (i === 1 || i === 4) {
                p.style.color = "#bf00ff";
                p.style.fontWeight = "bold";
            } else if (i === 5) {
                p.style.color = "#ffd700";
            } else {
                p.style.color = "#00f2ff";
            }

            p.innerHTML = log;
            terminal.appendChild(p);
            terminal.scrollTop = terminal.scrollHeight;

            if (i % 2 === 0) playSound('click');
        }, i * 800);
    });
}
