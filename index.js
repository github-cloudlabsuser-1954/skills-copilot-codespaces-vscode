import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

console.log(reverseSentence("hello world")); // Output: "World hello"
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

const flattenedData = flattenArray(data);
console.log(flattenedData);
// Output: [{ name: 'John', age: 2

const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 35 }
];

const names = data.map(person => person.name);
console.log(names); // Output: ["John", "Jane", "Jim"]

const nestedData = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 35 }
    ]
];

const extractedNames = nestedData.flatMap(innerArray => innerArray.map(person => person.name));
console.log(extractedNames); // Output: ['John', 'Jane', 'Bob']