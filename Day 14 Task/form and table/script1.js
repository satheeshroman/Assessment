document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const selectedFood = formData.getAll("food");

            if (selectedFood.length !== 2) {
                alert("Please choose exactly 2 food options Only.");
                return;
            }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${formData.get("firstname")}</td>
        <td>${formData.get("lastname")}</td>
        <td>${formData.get("address")}</td>
        <td>${formData.get("pincode")}</td>
        <td>${formData.get("country")}</td>
        <td>${formData.get("gender")}</td>
        <td>${formData.getAll("food").join(", ")}</td>
        <td>${formData.get("state")}</td>
    `;

    document.querySelector("#dataTable tbody").appendChild(newRow);
    this.reset();
});

