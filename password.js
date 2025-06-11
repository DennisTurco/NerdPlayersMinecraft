function showProtectedContent() {
  document.querySelectorAll('.protected').forEach(el => {
    el.style.display = 'block';
  });
}

function hideProtectedContent() {
  document.querySelectorAll('.protected').forEach(el => {
    el.style.display = 'none';
  });
}

function setFeedback(message, isSuccess) {
  const feedbackEl = document.getElementById('password-feedback');
  feedbackEl.textContent = message;
  if (isSuccess) {
    feedbackEl.classList.add('success');
    feedbackEl.classList.remove('error');
  } else {
    feedbackEl.classList.add('error');
    feedbackEl.classList.remove('success');
  }
}

function checkPassword() {
  const saved = localStorage.getItem('passwordAccepted');
  if (saved === 'true') {
    showProtectedContent();
    setFeedback("Password già inserita, contenuto sbloccato.", true);
    return;
  }

  const password = prompt("Inserisci la password per visualizzare alcuni contenuti protetti:");
  if (password === "nerdplayersdildo2025") {
    localStorage.setItem('passwordAccepted', 'true');
    showProtectedContent();
    setFeedback("Password corretta! Contenuto sbloccato.", true);
  } else {
    hideProtectedContent();
    setFeedback("Password errata. Alcuni contenuti rimangono nascosti.", false);
  }
}

window.onload = () => {
  hideProtectedContent();
  checkPassword();
}
