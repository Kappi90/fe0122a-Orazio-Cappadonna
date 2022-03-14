

let butt = document.querySelector(".btn")

butt.addEventListener("click", (evento) => {
    
    evento.preventDefault();

    allInput = document.querySelectorAll(".form-control")
    let [name, surname, email, password, role] = allInput

    const data = {
        name: name.value,
        lastname: surname.value,
        email: email.value,
        password: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        role_id: role.value
    };

    fetch('https://sofin.wp-admin.it/public/api/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
    })
        /*.then(data => {
            console.log('Succes:', data)
        })
        .catch((error) => {
            console.log('Error:', error)
        })*/
    
})