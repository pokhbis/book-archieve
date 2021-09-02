document.getElementById('empty-input').style.display = 'none';
document.getElementById('error-message').style.display = 'none';
const loadSearch = () => {
    const searchField = document.getElementById('input-field');
    const searchFieldText = searchField.value;
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchFieldText === '') {
        document.getElementById('empty-input').style.display = 'block';

    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchFieldText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearch(data.docs))
        // .catch(error => displayError(error))
    }

}

const displaySearch = books => {

    // removePreviousResult('none');
    document.getElementById('empty-input').style.display = 'none';
    const displayField = document.getElementById('book-list');
    displayField.textContent = '';
    books?.forEach(book => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
       <div class="card mb-5">
                    <img  src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : 'Not Available'}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">Book Name: ${book.subject[0]}</h4>
                        <p class="card-text">Author: ${book.author_name[0] ? book.author_name[0] : 'Not Available'}</p>
                        <p class="card-text">Publisher: ${book.publisher[0] ? book.publisher[0] : 'Not Available'}</p>

                    </div>
                    <div class="card-footer">
                        <small>Publishing Year: ${book.first_publish_year ? book.first_publish_year : 'Not Available'}</small>
                    </div>
                </div>
                 </div> 
                
`;
        div.classList.add('grid-style');
        displayField.appendChild(div);
    })

}
