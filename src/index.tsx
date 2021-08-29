import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <span>Hello.</span>
        <style jsx>{` span { color: red; } `}</style>
    </div>
);

const root: HTMLElement = document.createElement('div');
root.id = 'root';
document.body.appendChild(root),

ReactDOM.render(
    <App />,
    root
);