document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Login
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email1 = document.getElementById('email1').value;
            const password = document.getElementById('password').value;
          

            const storedUser = localStorage.getItem('UserEmail');
            const storedPass = localStorage.getItem('password2');
          

            if (email1 === '' || password === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid!',
                    text: 'Please fill in both username and password.'
                });
            } else if (email1 === storedUser && password === storedPass) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    text: 'Welcome Back!'
                }).then(() => {
                    window.location.href = './dashboard.html';
                });

            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Invalid!',
                    text: 'Invalid email or password.'
                });           }
        });
    }

    // Registration
    const registrationForm = document.querySelector('form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
          
            const password1 = document.getElementById('password1').value;
            const email = document.getElementById('email').value;
            const em=localStorage.getItem('UserEmail');
            const ps=localStorage.getItem('password2')
             if(email===em&&password1===ps){
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid!',
                    text: 'Already registerd!'
                });
                return;
             }



            if ( password1 === '' || email === '' ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid!',
                    text: 'All fields are required.'
                });

            } else {
          
                localStorage.setItem('password2', password1);
                localStorage.setItem('UserEmail', email);

                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful!',
                    text: 'Welcome!'
                }).then(() => {
                    window.location.href = './index.html';
                });
                
            }
        });
    }
});
