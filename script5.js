
(function(){
  function syncSettings(){
    const q=AI_CFG.GROQ_API_KEY||'';
    const qi=document.getElementById('settingsGroqKey'), st=document.getElementById('settingsApiStatus');
    if(qi) qi.value=q;
    if(st) st.textContent=q?('Saved: Groq ✓ '+maskKey(q)):'No Groq API key saved.';
  }
  window.openApiSettings=function(){ syncSettings(); const el=document.getElementById('apiSettingsOverlay'); if(el) el.classList.add('show'); };
  const fab=document.getElementById('apiSettingsFab'); if(fab) fab.onclick=window.openApiSettings;
  const save=document.getElementById('settingsSaveBtn'); if(save) save.onclick=function(){
    const q=(document.getElementById('settingsGroqKey')?.value||'').trim();
    AI_CFG.GROQ_API_KEY=q; localStorage.setItem('vaultApiKeys',JSON.stringify({groq:q}));
    syncSettings(); if(typeof toast==='function') toast('Groq API key saved on this device');
  };
  const clear=document.getElementById('settingsClearBtn'); if(clear) clear.onclick=function(){
    AI_CFG.GROQ_API_KEY=''; localStorage.removeItem('vaultApiKeys'); syncSettings(); if(typeof toast==='function') toast('Groq API key cleared');
  };
  window.addEventListener('load',function(){try{loadSavedApiKeys();}catch(e){} syncSettings();});
})();
