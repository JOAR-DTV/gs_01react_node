import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(()=>{
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
                {
                    bookData === null
                    ? <p>now loading...</p>
                    : bookData.data.items.map(
                        (x,index) => 
                            <ul key={index} style={{listStyleType: "none"}}>
                                <li>タイトル：{x.volumeInfo.title}</li>
                                <li>著者：{x.volumeInfo.authors}</li>
                                <li>
                                    {
                                    x.volumeInfo.readingModes.image === false
                                    ? <p>No image</p>
                                    : <img src={x.volumeInfo.imageLinks.smallThumbnail} />
                                    }
                                </li>
                            </ul>
                    )
                }
            
        </div>
    );
}
export default Booklist;