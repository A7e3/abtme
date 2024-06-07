let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discordapp.com/users/411436556792889356';
      break;
    case 'github':
      url = 'https://github.com/Nerpx';
      break;
    case 'twitter':
      url = 'https://twitter.com/GitCLIMC';
      break;
    case 'java':
      url = 'https://www.java.com/en';
      break;
    case 'js':
      url = 'https://en.wikipedia.org/wiki/JavaScript';
      break;
    case 'csharp':
      url = 'https://dotnet.microsoft.com/en-us/languages/csharp';
  }

  window.open(url);
}

function startIntroTyping() {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('Press any key to continue.', { delay: 1200 })
    .go();

  setTimeout(function () {
    switchAllowed = true;
  }, 100);
}

function typerStartTyping(typer) {
  typer.reset();

  let text = ['Java Developer...', "JavaScript Developer...", 'C# Developer...', "Computer Science Student..."];

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

function switchScreen() {
  document.title = 'A7e3 | About Me';

  $('.intro').fadeOut(2000, function () {
    $('.bg-image').fadeIn(2000);
    $('.main').fadeIn(2000, function () {
      startMainTyping();
    });
  });

  ['background'].forEach(function (audioName) {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none';

    audioElement.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });

    audioElement.play();
  });
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // switchAllowed = false;
  // switchScreen();
  startIntroTyping();
});
