fetch("http://localhost:3000/movies")
  .then(result => {
    return result.json();
  })
  .then(data => {
    let html = "";
    data.map(movie => {
      // format Date
      let startDate = new Date(movie.start);

      // Logic to calculate the Weeks from startdate to currentdate
      let differenz = startDate - new Date(Date.now());
      let tagDifferenz = differenz / (1000 * 3600 * 24);
      let wochenDifferenz = tagDifferenz / 7;
      let differenzGerundet = wochenDifferenz.toFixed(0).substr(1);

      html += `<tr>
            <td>${movie._id} </td>
            <td>${movie.title}</td>
            <td>${movie.description}</td>
            <td>${startDate.toLocaleDateString("de-DE")}</td>
            <td>${
              movie.currentlyRunning === false
                ? (differenzGerundet = 0)
                : differenzGerundet
            }</td>
            <td>${movie.date}</td>
            <td>${movie.currentlyRunning}
        </tr>`;
    });
    document.querySelector("tbody").innerHTML = html;
  });
