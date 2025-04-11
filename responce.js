
let allBreeds = "";

async function getDogBreeds() {
        const response = await fetch("https://dogapi.dog/api/v2/breeds");
        const data = await response.json();
        allBreeds = data.data;    
}


function displayBreeds(breeds) {
    const container = document.getElementById("breedsContainer");
    container.innerHTML = ""; 

    

    breeds.forEach(breed => {
        const dogDiv = document.createElement("div");
        dogDiv.classList.add("dog");

        dogDiv.innerHTML = `
            <h2>${breed.attributes.name}</h2>
            <p>${breed.attributes.description}</p>
        `;

        container.appendChild(dogDiv);
    });
}


document.querySelector(".searchBtn").addEventListener("click", function (event) {
    event.preventDefault(); 

    const searchQuery = document.querySelector(".searchBox").value.trim();

    if (searchQuery === "") {
        document.getElementById("breedsContainer").innerHTML = ""; 
        return;
    }

    const filteredBreeds = allBreeds.filter(breed =>
        breed.attributes.name.toLowerCase().includes(searchQuery)
    );

    displayBreeds(filteredBreeds);
});

getDogBreeds();

