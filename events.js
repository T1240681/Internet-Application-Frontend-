async function main() {
    const events = await getData();
    const eventsContainer = document.querySelector("#events");

    let eventsHtml = '';

    for (const event of events) {
        eventsHtml += `
        <div class="eventCard" data-id="${event.name}">   
            <img src="${event.image}" alt="${event.name}">
            <div class="eventContent">
                <h3>${event.name}</h3>
                <p>${event.date}</p>
                <p>${event.Time}</p>
                <p>${event.location}</p>
                <p>${event.category}</p>
                <p>${event.description}</p>
            </div>
        </div>
        `;
    }
    eventsContainer.innerHTML = eventsHtml;

    const eventCards = document.querySelectorAll('.eventCard');
    eventCards.forEach((card) => {
        card.addEventListener('click', () => {
            const eventName = card.dataset.id;
            const selectedEvent = events.find(event => event.name === eventName)
           
            localStorage.setItem("eventDetails", JSON.stringify(selectedEvent))
            
            window.location.href = "eventDetails.html";
        });
    });
}

async function getData() {
    const res = await fetch("./events.json");
    return res.json();
}

main();
