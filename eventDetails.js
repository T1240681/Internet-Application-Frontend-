document.addEventListener("DOMContentLoaded", function() {
    const event = JSON.parse(localStorage.getItem("eventDetails"));
    
    if (event) {
        const eventDetailsContainer = document.querySelector("#eventDetails");
        eventDetailsContainer.innerHTML = `
            <div class="eventDetailCard">
                <img src="${event.image}" alt="${event.name}">
                <h2>${event.name}</h2>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.Time}</p>
                <p>Location: ${event.location}</p>
                <p>Category: ${event.category}</p>
                <p>Description: ${event.description}</p>
                <h3>Event Details</h3>
                <p>${event.detail}</p>
            </div>
        `;
    } else {
        document.body.innerHTML = `<h1>Event Not Found</h1>`;
    }
});
