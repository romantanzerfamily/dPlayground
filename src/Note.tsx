import './App.css';
import './note.scss';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';

interface NoteProps {
    author: string;
    title: string;
    text: string;
}
const Note: React.FC<NoteProps> = ({ title, author, text }) => {

    return (<div className="note">
        <h2 className="title">{title}</h2>
        <div className="content">
            <p>{text}</p>
            <p>{author}</p>
        </div>
    </div>);
}

export default Note;