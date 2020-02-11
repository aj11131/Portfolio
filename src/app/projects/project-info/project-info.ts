import { Project } from 'src/app/shared/project.model';

export const projectInfo: Project[] = [
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
    learned: 'This app gave me an excellent opportunity to begin experimenting with RxJS and external API’s. Connecting the location and weather API and getting them to work together was a great learning experience. One challenge I faced in this project was getting the weather information on the page to update after selecting a different location without reloading the page. I found behavior subjects in RxJS an invaluable tool for this. They allowed me to easily notify the other components in the app of the change. Another challenge I faced was minimizing the amount of requests made by the autocomplete location search. I didn’t want every keystroke to trigger a request. The debounce operator in RxJS Allowed me to minimize the amount of requests by waiting until the input was stable for a specified amount of time before making requests.',
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
  learned: 'This is the first project I built myself on Angular. I learned a lot about the core features of Angular including components, services, directives, pipes, routing, guards, and modules. What became apparent to me very quickly was how useful services are for communication between components and sharing code. Using a service I was able to create a search bar that is able to quickly search through all the notes. The biggest obstacle I faced during this project was dynamically sizing the textarea for the title and note body input. I didn’t want there to be a limit on the size of the text area, but instead I wanted the text area to be able to grow as the user inputed more information. I was able to accomplish this using a custom Angular directive.',
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
      <li>Includes a secondary display window that calculates results from the primary display as they are keyed in.</li>
    </ul>
  `,
    // tslint:disable-next-line: max-line-length
    learned: 'In this project, I learned how useful Angular is for creating reusable components. Instead of creating a button element for each button on the calculator, I was able to generate the buttons from an array of button objects using the NgFor directive. The biggest obstacle of this project was dealing with nested operations such as sin(cos(tan(45))). To solve this problem, I used a recursive function that solves the nested operations from inside out.',
    codeLink: 'https://github.com/aj11131/Scientific-Calculator',
    liveLink: 'https://scientific-calculator11131.netlify.com'
  },
];
