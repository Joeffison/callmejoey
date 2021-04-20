import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import ReactWordcloud from 'react-wordcloud';

const words = [
  {
    text: 'Python',
    value: 100,
  },
  {
    text: 'ReactJs',
    value: 40,
  },
  {
    text: 'VueJs',
    value: 70,
  },
  {
    text: 'MongoDB',
    value: 90,
  },
  {
    text: 'SQL',
    value: 90,
  },
  {
    text: 'Data Visualization',
    value: 70,
  },
  {
    text: 'RabbitMQ',
    value: 50,
  },
  {
    text: 'Angular',
    value: 50,
  },
  {
    text: 'JavaScript',
    value: 60,
  },
  {
    text: 'TypeScript',
    value: 20,
  },
  {
    text: 'Pascal',
    value: 1,
  },
  {
    text: 'Tableau',
    value: 70,
  },
  {
    text: 'Databricks',
    value: 70,
  },
];

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const size = [vw * 0.5, vh * 0.3];

const Contact = () => (
  <div className="w-100">
    <h2> Contact </h2>

    <p>
      Oh, looking for me?
      Try these:
    </p>

    <a
      className="fa-stack"
      href="https://www.linkedin.com/in/joeffison/"
      rel="noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
      <FontAwesomeIcon icon={faLinkedinIn} className="fa-stack-1x" />
    </a>
    <a
      className="fa-stack"
      href="https://github.com/Joeffison/"
      rel="noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
      <FontAwesomeIcon icon={faGithubAlt} className="fa-stack-1x" />
    </a>

    <ReactWordcloud
      options={{enableTooltip: false, fontWeight: 'bolder'}}
      words={words}
      size={size}
    />
  </div>
)

export default Contact;
