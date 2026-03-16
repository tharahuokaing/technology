/* ================================================== */
/* 👻 Ghost Protocol v6 - styles.css */
/* Full-page visual lockdown for classified content */
/* ================================================== */

/* Prevent selection and copying globally */
html, body, * {
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    -webkit-touch-callout: none !important;
    margin: 0;
    padding: 0;
}

/* Full-screen lockdown overlay */
.ghost-lockdown {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000; /* black screen */
    color: #ff0000;          /* red warning text */
    font-family: monospace;
    font-size: 2.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 999999999;      /* above all other content */
}

/* Optional blinking effect for high alert */
.ghost-lockdown.blink {
    animation: blink 1s step-start infinite;
}

@keyframes blink {
    50% { opacity: 0; }
}

/* Optional: make all elements invisible under lockdown */
.ghost-lockdown ~ * {
    visibility: hidden !important;
}
