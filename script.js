function storeData() {
    car = {
        brand: brand.value,
        price: price.value,
        key: key.value,
    }

    if (car.brand == "" || car.price == "" || car.key == "") {
        alert("please fill all fields")
    } else {
        if (car.key in localStorage) {
            alert("car already exist")
        } else {
            localStorage.setItem(car.key, JSON.stringify(car))
            alert("car added successfully")
        }
    }
}

function retreiveData(event) {
    event.preventDefault();
    let key = retrievekey.value;
    let car = JSON.parse(localStorage.getItem(key))
    if (car) {
        showitem.innerHTML = `
        <div class="card">
          <ul>
            <li><strong>Brand:</strong> ${car.brand}</li>
            <li><strong>Price:</strong> ${car.price}</li>
            <li><strong>Key:</strong> ${car.key}</li>
          </ul>
        </div>`;
    } else {
        showitem.innerHTML = "No car found with the given key.";
    }
}

function removeData(event) {
    event.preventDefault();
    let key = removekey.value
    let car = localStorage.getItem(key);
    if (car) {
        localStorage.removeItem(key);
        alert("car removed successfully")
    } else {
        alert("no car based on this key")
    }
}

function clearAllData() {
    localStorage.clear();
    alert("All car details have been cleared");
}