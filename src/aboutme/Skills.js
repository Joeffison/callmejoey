import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const factor = .9;
const skillData = [
  {
    subject: 'Python',
    A: 100 * factor,
    fullMark: 100,
  },
  {
    subject: 'VueJs',
    A: 80 * factor,
    fullMark: 100,
  },
  {
    subject: 'ReactJs',
    A: 50 * factor,
    fullMark: 100,
  },
  {
    subject: 'SQL',
    A: 90 * factor,
    fullMark: 100,
  },
  {
    subject: 'MongoDB',
    A: 88 * factor,
    fullMark: 100,
  },
  {
    subject: 'Data Visualization',
    A: 85 * factor,
    fullMark: 100,
  },
  {
    subject: 'RabbitMQ',
    A: 70 * factor,
    fullMark: 100,
  },
];

const Skills = () => (
  <div className="w-100">
    <h2> Highlights </h2>

    <p className="text-justify">
      I have worked with many technologies
      and below you can find those I am currently working with.
    </p>

    <ResponsiveContainer className="textsize" width="100%" height="100%" aspect={3}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} tick={false} domain={[0, 100]} />
        <Tooltip></Tooltip>
        <Radar name="Skill" dataKey="A" stroke="darkorange" fill="orange" fillOpacity={0.93} />
      </RadarChart>
    </ResponsiveContainer>
  </div>
)

export default Skills;
