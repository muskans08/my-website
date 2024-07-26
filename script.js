function showProjectDetails(projectId) {
    const projectDetails = {
        project1: {
            title: "Project 1",
            description: "Detailed description of Project 1 goes here."
        },
        project2: {
            title: "Project 2",
            description: "Detailed description of Project 2 goes here."
        }
        // Add more projects as needed
    };

    const project = projectDetails[projectId];
    const modal = document.getElementById("project-modal");
    const projectDetailsDiv = document.getElementById("project-details");

    projectDetailsDiv.innerHTML = `<h2>${project.title}</h2><p>${project.description}</p>`;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
