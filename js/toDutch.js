export function toDutch() {
  const appIcons = document.getElementById("appIcons");
  appIcons.innerHTML = `
    <div class="icon" data-window="about">
      <img src="/img/computer.png" width="100px" class="iconClick"/>
      <h2 class="iconClick">Over mij</h2>
    </div>
    <div class="icon" data-window="school">
      <img src="/img/folder.png" width="100px" class="iconClick"/>
      <h2 class="iconClick">School projecten</h2>
    </div>
    <div class="icon" data-window="personal">
      <img src="/img/internet.png" width="100px" class="iconClick"/>
      <h2 class="iconClick">Persoonlijke projecten</h2>
    </div>
    <div class="icon" data-window="resume">
      <img src="/img/notepad.png" width="100px" class="iconClick"/>
      <h2 class="iconClick">Mijn CV</h2>
    </div>
    <div class="icon" data-window="contact">
      <img src="/img/help.png" width="100px" class="iconClick"/>
      <h2 class="iconClick">Bereik mij</h2>
    </div>
  `;

  const windowSelfie = document.getElementById("window-selfie");
  windowSelfie.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Mijn selfie</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <img src="/img/selfie.png" width="99%;"/>
    </div>
  `

  const windowAbout = document.getElementById("window-about");
  windowAbout.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Over mij</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        Hallo, mijn naam is Anne-Grethe Bakker, een 20 jarige creatieve technologist en software engineering student uit
        Nederland.<br/><br/>

        Op dit moment zit ik in mijn tweede jaar van de opleiding aan de Hogeschool van Amsterdam, waar ik een goede
        basis in Javascript/Typescript, Python, Java, en PHP heb opgebouwd. Ook heb ik met Git, Symfony en Vue gewerkt.
        <br/><br/>

        Mijn favoriete onderdeel van het beroep vind ik de combinatie van ontwerpen en coderen - websites en applicaties
        bouwen met zowel frontend als backend. Ik ben altijd blij om nieuwe technologieën te leren, en leren en
        problemen oplossen is een onderdeel van mijn workflow.<br/><br/>

        Naast studeren neem ik inspiratie uit creatief ontworpen games. Mijn portfolio ontwerp is gebaseerd op een
        aantal van mijn favorieten. Ook heb ik plezier aan het bouwen van kleinschalige side projecten, specifiek
        projecten die problemen oplossen die ik persoonlijk tegenkom.<br/><br/>

        Geïnteresseerd in samenwerken? Klik op 'Bereik mij' en laat het me weten.
      </p>
    </div>
  `

  const windowSchool = document.getElementById("window-school");
  windowSchool.innerHTML = `
    <div class="window-bar">
      <span class="window-title">School projecten</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <div class="projectsDiv icon" data-window="water">
        <img src="/img/water.png" height="130px" class="iconClick">
        <h3 class="iconClick">GenAI exposed</h3>
      </div>
      <div class="projectsDiv icon" data-window="game">
        <img src="/img/game.png" height="130px" class="iconClick">
        <h3 class="iconClick">Kidnapped: Castle Breakout</h3>
      </div>
    </div>
  `

  const windowWater = document.getElementById("window-water");
  windowWater.innerHTML = `
    <div class="window-bar">
      <span class="window-title">GenAI exposed</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        <b>GenAI Exposed: Flush the AI</b><br>
        Een schoolproject voor de Lectoraat Responsible IT van de Hogeschool van Amsterdam.<br>

        <br>De uitdaging:</b> Een generatieve AI maken die de donkere kant van GenAI laat zien en mensen laat nadenken
        over de impact in de echte wereld hiervan.<br><br>

        <b>Onze oplossing:</b> Een AI afbeelding generator die een webcam foto en prompt krijgt, en hier een afbeelding
        bij maakt. Naast de interface staat een fysieke watertank met een nep vis. Elke keer dat een gebruiker een
        afbeelding genereert stroomt een deel van het water (gelijk aan het aantal water dat het genereren in het echt
        kost) uit de tank. Dit beeld maakt de gebruikers bewust van het aantal water dat GenAI kost, en het effect op
        het klimaat hiervan.<br><br>

        <b>Mijn taak:</b> Creatieve Technologist en originele concept ontwerper.<br>
        <b>Software:</b> Verbonden frontend en backend met Javascript en Python.<br>
        <b>Team proces:</b> Kwam met het idee, werkte de details uit nadat deze gekozen was, en werkte samen met de
        product owner voor de eerste keer, waardoor ik agile communicatie en requirement management heb geleerd.<br><br>

        <b>Wat ik heb geleerd:</b> Brainstormen onder grenzen, ideeën pitchen naar stakeholders, en metaphoren tot een
        werkende prototype maken.
      </p>
    </div>
  `

  const windowGame = document.getElementById("window-game");
  windowGame.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Kidnapped: Castle Breakout</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        <b>Kidnapped: Castle Breakout</b><br>
        Een schoolproject in het eerste jaar waarin we een game in Typescript moesten ontwikkelen. Mijn team en ik kozen
        voor het maken van een horror escape room game, waarin je vast komt te zitten in een kasteel met geesten en
        monsters, en moet ontsnappen door het vinden van de juiste objecten. Het spel heeft meerdere eindes, minigames
        en manieren om dood te gaan. De art hebben we volledig zelf gemaakt, en we hebben ook geluidseffecten en
        achtergrondmuziek toegevoegd om de sfeer en stress van het spel te verhogen.<br><br>

        Mijn rol in het project was het ontwikkelen van de storage room en voordeur. Deze kamers bevatten een personage
        om mee te praten die raadsels geeft, meerdere objecten om te vinden, deuren naar andere kamers en sloten om te
        openen. Daarnaast heb ik ook de Mermaid diagram gemaakt met de layout en acties in het spel, de geluidseffecten
        toegevoegd, alle deuren tussen de kamers werkend gemaakt, en een groot deel van de bug fixes opgelost<br><br>

        Aan het einde van het project heeft onze school een prijsuitreiking georganiseerd, waarin prijzen werden gegeven
        voor de beste games in elke categorie. Onze game heeft de prijs voor 'Most suspenseful' gewonnen, en was ook
        genomineerd voor 'Game of the Year'. Ook werden we gekozen als de beste game van onze klas door onze klasgenoten
        en docenten. Ik ben erg trots op onze game, en heb hier veel door geleerd.<br><br>
        A school project in the first year to create a game in Typescript. My team and I chose to make a horror escape
        room game, where you are stuck in a castle with ghosts and monsters, and have to find the correct items to
        escape. The game has multiple endings, minigames and ways to die. We've made the art for the game ourselves,
        and also added sound effects and background music to increase the environment and tension of the game.<br><br>

        <a href="https://point-and-click-game-api.vercel.app/">Hier is de link naar de game</a>
      </p>
    </div>
  `

  const windowPersonal = document.getElementById("window-personal");
  windowPersonal.innerHTML = `
    <div class="window-bar">
        <span class="window-title">Persoonlijke projecten</span>
        <button class="window-close">X</button>
      </div>
      <div class="window-content">
        <div class="projectsDiv icon" data-window="task">
          <img src="/img/task.png" height="130px" class="iconClick">
          <h3 class="iconClick">Taakbeheer</h3>
        </div>
      </div>
  `

  const windowTask = document.getElementById("window-task");
  windowTask.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Taakbeheer</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        <b>Taakbeheer</b><br>
        Toen ik erachter kwam dat veel web developers coderen in de taal PHP, besloot ik om dit te leren. Aangezien de
        beste manier om een programmeertaal te leren is om projecten te ontwikkelen in deze taal, besloot ik een simpele
        taakbeheer applicatie te ontwikkelen. Hierdoor kon ik leren over gebruiker authenticatie en CRUD.<br><br>

        Voor het ontwikkelen van deze applicatie heb ik Symfony gebruikt voor de backend, SQLite en MySQL voor de
        database, Twig voor de templates, en Doctrine voor de Object-Relation Mapping. Ook heb ik Javascript, HTML5 en
        CSS gebruikt voor de frontend.<br><br>

        Ik heb veel geleerd van het ontwikkelen van dit project, en ik vond het fijn om te coderen met Symfony. Deze
        manier van websites ontwikkelen is veel effectiever dan de CRUD handmatig maken. De development duurde maar een
        week van werk, en een groot deel hiervan is besteed aan het uiterlijk van de website.

        <a href="https://github.com/AnneGretheBakker/Task-Manager">Hier is een link naar de Github pagina</a>
      </p>
    </div>
  `

  const windowTaskImg = document.getElementById("window-task-img");
  windowTaskImg.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Taakbeheer</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content" style="display: flex; align-items: center; gap: 10px;">
      <button class="nav-btn prev-btnT" style="font-size: 24px; padding: 8px 12px;">◀</button>
      <img id="task-slideshow" src="/img/taskimg1.png" width="80%" style="max-width: 100%; height: auto; flex: 1;">
      <button class="nav-btn next-btnT" style="font-size: 24px; padding: 8px 12px;">▶</button>
    </div>
  `

  const windowResume = document.getElementById("window-resume");
  windowResume.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Mijn CV</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <img src="/img/resume.png" width="99%">
    </div>
  `

  const windowContact = document.getElementById("window-contact");
  windowContact.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Bereik mij</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        <b>GitHub</b><br>
        <a href="https://github.com/AnneGretheBakker">AnneGretheBakker</a><br><br>
        <b>Email</b><br>
        <a href="mailto:agbakker2005@gmail.nl">agbakker2005@gmail.com</a><br><br>
        <b>Telefoon</b><br>
        0629-432857
      </p>
    </div>
  `
}
