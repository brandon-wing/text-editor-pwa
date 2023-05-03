const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    //store the event
    window.deferredPrompt = event;
    //if button is hidden, make it not hidden
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
//if there is no prompt, reset. if there is, show it!
    if (!promptEvent) {
     return;
    }
    promptEvent.prompt();
  
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});
//set value of the prompt to null in order to clear it
window.addEventListener('appinstalled', (event) => {window.deferredPrompt = null;});
