import { Project } from 'src/app/shared/project.model';

export const projectInfo: Project[] = [
  {
    title: 'Clock-Timer-Stopwatch',
    description: 'Includes a clock, timer, and stopwatch',
    img: '/assets/timeApp--small.png',
    tools: 'HTML, CSS, JavaScript, TypeScript, Angular 2+, RxJS',
    features: `
      <ul>
        <li>Gets and displays the current time using the JavaScript Date object.</li>
        <br>
        <li>Accepts user input and counts down to zero and then plays a beeping noise. The timer can be paused and canceled.</li>
        <br>
        <li>A typical stopwatch that can be started, stopped, and reset. Lap times can also be recorded.</li>
      </ul>
    `,
    // tslint:disable-next-line: max-line-length
    about: 'A time app that includes a clock that shows the current time, a timer that accepts user input then counts to zero and beeps, and a stopwatch. This app uses a single reusable component for displaying the time. Depending on the mode, it displays the meridiem and milliseconds field and allows user input.',
    codeLink: 'https://github.com/aj11131/clock-timer-stopwatch',
    liveLink: 'https://time-app11131.netlify.com'
  },
  {
    title: 'Display Weather',
    description: 'Displays the weather conditions of your current location and any searched location.',
    img: '/assets/weatherApp--small.png',
    tools: 'HTML, CSS, JavaScript, TypeScript, Node.js, Express, Angular 2+, RxJS, Google Places API, DarkSky weather API',
    features: `
      <ul>
        <li>Display the current weather and a 7 day forecast of your current and any searched location</li>
        <br>
        <li>Search bar with location auto complete</li>
        <br>
        <li>Change locations without reloading the page</li>
      </ul>
    `,
    // tslint:disable-next-line: max-line-length
    about: `The user's current location is found using the navigator.geolocation.getCurrentPosition. If the user declines to share their position, the app will default to finding the current location with the user's IP address. Once the user is located, the coordinates are sent to Google's Places API and Dark Sky's weather API. To change the displayed location, the search bar can be used. Input from this searchbar will send a request to Google's Places API and return a list of the 5 top matches of the current input. If one of these matches is selected, the data associated with that result is emitted using an RxJs Subject that the weather display is subscribed to. These components will update displaying the new data.`,
    codeLink: 'https://github.com/aj11131/Weather-App',
    liveLink: 'https://weather-app11131.netlify.com'
  },
  {
    title: 'Note Editor',
    description: 'Create, edit, search, and delete notes stored locally on browser.',
    img: '/assets/notesApp--small.png',
    tools: 'HTML, CSS, JavaScript, TypeScript, Angular 2+, RxJS',
    features: `
    <ul>
      <li>Create, edit, and Delete notes</li>
      <br>
      <li>Notes persist in local storage</li>
      <br>
      <li>Search through existing notes</li>
      <br>
      <li>Warn users before leaving a new note page without saving changes</li>
    </ul>
  `,
  // tslint:disable-next-line: max-line-length
  about: 'To add a new note click the new tab located in the header. Here you have the option to input a title and a note body. Neither of this fields are required. The title block will default to "Untitled" and the body will default to blank. If the user attempts to leave the page without saving the note, the app will ask the user wants to leave without saving their changes. To edit an already added note, in the note list click the note. This will navigate to the edit page. To begin editing, click the pencil icon in the top right of the page. Now you are able to edit the text. As new input is entered, the note will automatically be saved. When done, click save to return to the note list. On this page, notes can also be deleted with the delete button. The user will be asked to confirm before deleting. To display the search bar, click the magnifying glass icon. Input entered in the search bar will filter existing notes to only those that contain the entered string.',
  codeLink: 'https://github.com/aj11131/Note-Editor',
  liveLink: 'https://note-editor11131.netlify.com'
  },
  {
    title: 'Scientific Calculator',
    description: 'Calculator that includes standard and scientific interface.',
    img: '/assets/scientificCalculator--small.png',
    tools: 'HTML, CSS, JavaScript, TypeScript, Angular 2+, RxJS',
    features: `
    <ul>
      <li>Includes standard and scientific calculator interface</li>
      <br>
      <li>Input data using buttons or the keyboard</li>
      <br>
      <li>Toggle between degrees and radians for  trigonometric functions</li>
      <br>
      <li>Includes a secondary display window that calculates results from the primary display as input is keyed in.</li>
    </ul>
  `,
    // tslint:disable-next-line: max-line-length
    about: `To calculate input, the string that appears in the calculator display is passed to a formatting function that uses regular expressions to replace functions such as sin() with Math.sin(). This formatting function also handles different muliplication scenarios such as multplication using parenthesis and multiplication of a numbers situated by a letter/symbol ie. (2)(3) and 2π. The formatted string is then evaluated. If there are nested calculator functions such as sin(cos()), the formatting function is called recursively and the inner function is evaluated and then the outer function. How the trigonometric functions are calculated can be toggled between degrees and radians using the switch located near the main display.`,
    codeLink: 'https://github.com/aj11131/Scientific-Calculator',
    liveLink: 'https://scientific-calculator11131.netlify.com'
  },
];
