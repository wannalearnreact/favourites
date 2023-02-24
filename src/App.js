import './index.css';
import Card from './Card';
const politicians = [
    {
        id: 1,
        name: 'Angela Merkel',
    },
    {
        id: 2,
        name: 'Gregor Gysi',
    },
    {
        id: 3,
        name: 'Andi Scheuer',
    },
    {
        id: 4,
        name: 'Annalena Baerbock',
    },
    {
        id: 5,
        name: 'Claudia Roth',
    },
];

const App = ({ favourites }) =>
    politicians.map((data) => (
        <Card key={data.id} data={data} favourites={favourites} />
    ));
export default App;
