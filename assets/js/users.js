function allUsers(){
    
    
    // Récupération des données
    
    fetch('https://tonygohin.sites.3wa.io/php/res03-php-j19-api/users')
    .then(response => response.json())
    .then(data => {
    	console.log(data);
    
    let users = data;
    
        //Application des données dans le DOM
        for(let i = 0; i < users.length; i++){
            
            
            let tbody = document.querySelector('body main table tbody');
            
            let tr = document.createElement('tr');
            
            
            //Création du tableau
            
            //id
            let idTd = document.createElement('td');
            let id = document.createTextNode(users[i].id);
            idTd.appendChild(id);
            idTd.setAttribute('scope', 'row');
            tr.appendChild(idTd);
            tbody.appendChild(tr);
            
            //username
            let usernameTd = document.createElement('td');
            let username = document.createTextNode(users[i].username);
            usernameTd.appendChild(username);
            tr.appendChild(usernameTd);
            tbody.appendChild(tr);
            
            //firstname
            let firstNameTd = document.createElement('td');
            let firstName = document.createTextNode(users[i].firstName);
            firstNameTd.appendChild(firstName);
            tr.appendChild(firstNameTd);
            tbody.appendChild(tr);
            
            //lastname
            let lastNameTd = document.createElement('td');
            let lastName = document.createTextNode(users[i].lastName);
            lastNameTd.appendChild(lastName);
            tr.appendChild(lastNameTd);
            tbody.appendChild(tr);
            
            //email
            let emailTd = document.createElement('td');
            let email = document.createTextNode(users[i].email);
            emailTd.appendChild(email);
            tr.appendChild(emailTd);
            tbody.appendChild(tr);
            
            //action
            
    
        }

    });
}

export { allUsers };