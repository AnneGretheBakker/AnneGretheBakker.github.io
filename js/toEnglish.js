export function toEnglish() {
  const appIcons = document.getElementById("appIcons");
  appIcons.innerHTML = `
    <div class="icon" data-window="about">
      <img src="/img/computer.png" width="100px" class="iconClick">
      <h2 class="iconClick">About me</h2>
    </div>
    <div class="icon" data-window="school">
      <img src="/img/folder.png" width="100px" class="iconClick">
      <h2 class="iconClick">School projects</h2>
    </div>
    <div class="icon" data-window="personal">
      <img src="/img/internet.png" width="100px" class="iconClick">
      <h2 class="iconClick">Personal projects</h2>
    </div>
    <div class="icon" data-window="resume">
      <img src="/img/notepad.png" width="100px" class="iconClick">
      <h2 class="iconClick">My resume</h2>
    </div>
    <div class="icon" data-window="contact">
      <img src="/img/help.png" width="100px" class="iconClick">
      <h2 class="iconClick">Contact me</h2>
    </div>
  `;

  const windowSelfie = document.getElementById("window-selfie");
  windowSelfie.innerHTML = `
    <div class="window-bar">
      <span class="window-title">My selfie</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <img src="/img/selfie.png" width="99%;"/>
    </div>
  `

  const windowAbout = document.getElementById("window-about");
  windowAbout.innerHTML = `
    <div class="window-bar">
      <span class="window-title">About me</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        Hi, I'm Anne-Grethe Bakker, a 20 years old creative technologist and software engineering student from The
        Netherlands.<br/><br/>

        I'm currently in my second year at the Amsterdam University of Applied Sciences, where I've built a solid
        foundation in JavaScript/TypeScript, Python, Java, and PHP. I've also worked with Git, Symfony, and Vue.<br/><br/>

        What I love most is combining design and code – crafting websites and applications from the frontend down to the
        backend. I'm always happy to pick up new technologies, and learning and problem-solving are part of my workflow.
        <br/><br/>

        Outside of studying, I take inspiration from creatively styled games. My portfolio's look is directly influenced
        by some of my favourites. I also enjoy building small side projects, especially ones that solve problems I
        personally run into.<br/><br/>

        Interested in working together? Click 'Contact me' and let's talk.
      </p>
    </div>
  `

  const windowSchool = document.getElementById("window-school");
  windowSchool.innerHTML = `
    <div class="window-bar">
      <span class="window-title">School projects</span>
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
        A school project for the Research Group Responsible IT of the Amsterdam University of Applied Sciences.<br><br>

        <b>The challenge:</b> Create a generative AI system that reveals a dark side of GenAI and makes people reflect
        on its real-world impact.<br><br>

        <b>Our solution:</b> An AI image generator that takes a webcam picture and a prompt, then produces an image.
        Beside the interface stands a physical tank of water with a live fish. Every time a user generates an image,
        an amount of water (equivalent to what a real AI image generation consumes) drips out of the tank. This visual,
        tangible feedback makes users acutely aware of GenAI's hidden water footprint and its climate impact.<br><br>

        <b>My role:</b> Creative Technologist and original concept creator.<br>

        <b>Software:</b> Connected frontend to backend using JavaScript and Python.<br>

        <b>Hardware:</b> Programmed the water release mechanism with C++.<br>

        <b>Team process:</b> Pitched the idea, worked out the details after it was chosen, and collaborated closely with
        a product owner for the first time – teaching me agile communication and requirement management.<br><br>

        <b>What I learned:</b> Brainstorming under constraints, pitching to stakeholders, and turning a metaphor into a
        working prototype.
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
        A school project in the first year to create a game in Typescript. My team and I chose to make a horror escape
        room game, where you are stuck in a castle with ghosts and monsters, and have to find the correct items to
        escape. The game has multiple endings, minigames and ways to die. We've made the art for the game ourselves,
        and also added sound effects and background music to increase the environment and tension of the game.<br><br>

        My role in the project was to create the storage room and the downstairs hallway, two rooms of the game. These
        rooms included a character to talk to, multiple items to get, doors to other rooms and locks to open.
        Furthermore, I also created a Mermaid diagram with the layout and all the different actions for the whole game,
        added the sound effects, made the doors between different rooms work, and did a lot of the bug fixes.<br><br>

        At the end of the project, our school held an award show, giving prices to the best games for every category.
        Our game won the award for 'Most suspenseful', and was nominated for 'Game of the year'. We also got voted the
        best game of our class by teachers and students. I'm really proud of the game we made, both the design and
        actual product, and I've learned a lot from this.<br><br>

        <a href="https://point-and-click-game-api.vercel.app/">Here is a link to the game</a>
      </p>
    </div>
  `

  const windowPersonal = document.getElementById("window-personal");
  windowPersonal.innerHTML = `
    <div class="window-bar">
        <span class="window-title">Personal projects</span>
        <button class="window-close">X</button>
      </div>
      <div class="window-content">
        <div class="projectsDiv icon" data-window="task">
          <img src="/img/task.png" height="130px" class="iconClick">
          <h3 class="iconClick">Task manager</h3>
        </div>
      </div>
  `

  const windowTask = document.getElementById("window-task");
  windowTask.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Task manager</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        <b>Task manager</b><br>
        When I learned that a lot of web developers code in the language PHP, I decided to learn developing websites
        with PHP. Since the best method for learning a programming language is developing projects in that language, I
        decided to create a simple task manager. This way I could learn about user authentication and CRUD.<br><br>

        For developing this application, I used Symfony for the backend, SQLite and MySQL for the database, Twig for the
        templating and Doctrine for the Object-Relation Mapping. I also used Javascript, HTML5 and CSS.<br><br>

        I really learned a lot from developing this project, and I enjoy coding with Symfony. This way of developing
        websites is way more effective than creating the CRUD manually. The development only took around a week of work,
        and most of that was spent on the appearance.<br><br>

        <a href="https://github.com/AnneGretheBakker/Task-Manager">Here is a link to the GitHub page</a>
      </p>
    </div>
  `

  const windowTaskImg = document.getElementById("window-task-img");
  windowTaskImg.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Task manager</span>
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
      <span class="window-title">My resume</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <img src="/img/resume.png" width="99%">
    </div>
  `

  const windowContact = document.getElementById("window-contact");
  windowContact.innerHTML = `
    <div class="window-bar">
      <span class="window-title">Contact me</span>
      <button class="window-close">X</button>
    </div>
    <div class="window-content">
      <p>
        <b>GitHub</b><br>
        <a href="https://github.com/AnneGretheBakker">AnneGretheBakker</a><br><br>
        <b>Email</b><br>
        <a href="mailto:agbakker2005@gmail.nl">agbakker2005@gmail.com</a><br><br>
        <b>Phone number</b><br>
        0629-432857
      </p>
    </div>
  `
}
