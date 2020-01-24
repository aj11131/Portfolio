import { Project } from 'src/app/shared/project.model';

export const projectInfo: Project[] = [
  {
    title: 'Display Weather',
    description: 'Displays the weather conditions of your current location and any searched location.',
    img: '/assets/weatherApp.PNG',
    tools: 'HTML, CSS, JavaScript, TypeScript, Node.js, Express, Angular 2+, RxJS, External APIs, AWS',
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
    learned: 'This app gave me an excellent opportunity to begin experimenting with RxJS and external API’s. Connecting location and weather API and getting them to work together was a great learning experience. The biggest challenge I faced in this project was getting the weather information on the page to update after selecting a different location without reloading the page. I found behavior subjects in RxJS as an invaluable tool for this. They allowed me to easily notify the other components in the app of the change in location.',
    codeLink: '',
    liveLink: ''
  },
  {
    title: 'Note Editor',
    description: 'Create, edit, search, and delete notes stored locally on browser.',
    img: '/assets/notesApp.PNG',
    tools: 'HTML, CSS, JavaScript, TypeScript, Angular 2+, RxJS, AWS',
    features: `
    <ul>
      <li>Create, edit, and Delete notes</li>
      <br>
      <li>Notes persist in local storage</li>
      <br>
      <li>Search through existing notes</li>
    </ul>
  `,
  // tslint:disable-next-line: max-line-length
  learned: 'This is the first project I built myself on Angular. I learned a lot about the core features of Angular including components, services, directives, pipes, routing, and modules. What became apparent to me very quickly was how useful services are for communication between components and sharing code. Using a service I was able to create a search bar that is able to quickly search through all the notes.',
  codeLink: '',
  liveLink: ''
  },
  {
    title: 'Scientific Calculator',
    description: 'Displays the weather conditions of your current location and any searched location.',
    img: '/assets/weatherApp.PNG',
    tools: 'HTML, CSS, JavaScript, TypeScript, Angular 2+, RxJS',
    features: `
    <ul>
      <li>Includes standard and scientific calculator interface</li>
      <br>
      <li>Input data using the buttons or keyboard</li>
      <br>
      <li>Toggle between degrees and radians for  trigonometric functions</li>
      <br>
      <li>Includes a secondary display window that calculates results from the primary display as they are keyed in.</li>
    </ul>
  `,
    // tslint:disable-next-line: max-line-length
    learned: 'In this project, I learned how useful Angular is for creating reusable components. Instead of creating a button element for each button on the calculator, I was able to generate the buttons from an array of button objects using the NgFor directive. The biggest obstacle of this project was dealing with nested operations such as sin(cos(tan(45))). To solve this problem, I used a recursive function that solves the nested operations from inside out.',
    codeLink: '',
    liveLink: ''
  },
];
