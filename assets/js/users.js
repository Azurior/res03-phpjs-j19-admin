function allUsers(){
    
    
    // Récupération des données
    let user = {
    	username : "",
    	firstName : "",
    	lastName : "",
    	email : ""
    };
    
    formData = new FormData();
    formData.append('username', user.username);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    
    const options = {
    	method: 'POST',
    	body: formData
    };
    
    fetch('https://tonygohin.sites.3wa.io/php/res03-php-j19-api/user/1')
    .then(response => response.json())
    .then(data => {
    	console.log(data);
    });
    
    //Application des données dans le DOM
    
    let tbody = document.querySelector('body main table tbody');
    
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    
    let username = document.createTextNode(user.username);
    let firstName = document.createTextNode(user.firstName);
    let lastName = document.createTextNode(user.lastName);
    let email = document.createTextNode(user.email);
    
    tbody.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(username);
    td.appendChild(firstName);
    td.appendChild(lastName);
    td.appendChild(email);
}

export { allUsers };