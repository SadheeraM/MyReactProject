import React from 'react';
import harryPotterImage from '../assets/images/harry-potter.jpg';
import soul from '../assets/images/soul.jpg';
import alone from '../assets/images/alone.jpg';
import BookTile from "./BookTile";

const Main = () => {

    const books = [
        {id: 1, title: 'Harry Potter', author: 'Author 1', description: 'Description 1', image: harryPotterImage},
        {id: 2, title: 'Soul', author: 'Author 2', description: 'Description 1', image: soul},
        {id: 3, title: 'Alone', author: 'Author 3', description: 'Description 1', image: alone},
        {id: 1, title: 'Harry Potter', author: 'Author 1', description: 'Description 1', image: harryPotterImage},
        {id: 2, title: 'Soul', author: 'Author 2', description: 'Description 1', image: soul},
        {id: 3, title: 'Alone', author: 'Author 3', description: 'Description 1', image: alone},
        {id: 1, title: 'Harry Potter', author: 'Author 1', description: 'Description 1', image: harryPotterImage},
        {id: 2, title: 'Soul', author: 'Author 2', description: 'Description 1', image: soul},
        {id: 3, title: 'Alone', author: 'Author 3', description: 'Description 1', image: alone},
        {id: 1, title: 'Harry Potter', author: 'Author 1', description: 'Description 1', image: harryPotterImage},
        {id: 2, title: 'Soul', author: 'Author 2', description: 'Description 1', image: soul},
        {id: 3, title: 'Alone', author: 'Author 3', description: 'Description 1', image: alone}
    ];

    return (
        <main className="main-content">
            <section className="grid-container">
                {books.map(book => (
                    <div className="tile">
                        <BookTile key={book.id} book={book}/>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Main;
