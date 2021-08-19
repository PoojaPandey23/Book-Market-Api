import Card from '../UI/Card';
import classes from './AvailableBooks.module.css'
import BookItem from './BookItem/BookItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AvailableBooks = () => {

    const [books, setBooks] = useState([]);

    const booksList = books.map((book) =>
        <BookItem
            //props for passing data
            id={book.id}
            key={book.id}
            name={book["name "]}
            image={book.image}
            price={book.price}
            stock={book.stock}
            author={book.author}
            genre={book.genre}
            published_date={book.published_date}>
        </BookItem>
    );

    // useEffect(() => {
    //     axios.get('https://book-set-task.herokuapp.com/api/list_books')
    //         .then((res) => {
    //             console.log(res)
    //             setBooks(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, []);

    useEffect(() => {
        fetch('https://book-set-task.herokuapp.com/api/list_books')
            .then((res) => {
                return res.json();
            })
            .then(data => {
                setBooks(data)
            });
    }, []);




    return (
        <div>
            <section className={classes.books}>
                <Card>
                    <ul>
                        {booksList}
                    </ul>
                </Card>
            </section>
        </div>
    );

    // function fetchMovies() {
    //     fetch('https://book-set-task.herokuapp.com/api/list_books')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then((data) => {

    //             const transformedBooks = data.map(book => {
    //                 return {
    //                     id: book.id,
    //                     name: book.name
    //                 };
    //             });
    //             setBooks(transformedBooks);
    //         }); 

    // };



    // return (
    //     <div>
    //         <section className={classes.books}>
    //             <BookItem>{fetchMovies}</BookItem>
    //         </section>
    //     </div>
    // )

}
export default AvailableBooks;