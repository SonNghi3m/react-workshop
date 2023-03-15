import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import DataTable from './DataTable';

// const greetingMessage = <div>Welcome to React Workshop!</div>;
// ReactDOM.createRoot(document.getElementById('root')).render(greetingMessage);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataTable />);