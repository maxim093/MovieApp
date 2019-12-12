fetch('http://localhost:3000/movies')
.then(result => {
    return result.json();
})
.then(data => {
    
    let html = "";
    data.map( (movie) => {
        html += `<tr>
            <td>${movie._id} </td>
            <td>${movie.title}</td>
            <td>${movie.description}</td>
            <td>${movie.date}</td>
        </tr>`;

        console.log(movie);
    });
    document.querySelector("tbody").innerHTML = html;

})





