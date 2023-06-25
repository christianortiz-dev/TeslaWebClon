const encabezados = document.querySelectorAll('.article');

const observer = new IntersectionObserver((entradas, observador) => {
    // console.log(entradas);
    entradas.forEach(entrada => {
        if(entrada.isIntersecting) {
            
            console.log(entrada.target.id);
            if (entrada.target.id == 'mainArticle') {
                // console.log(entrada.target.id);
                document.body.style.color = "white";
                document.getElementById('teslaLogo').style.filter = "invert(100%)";

                const buttons = document.querySelectorAll('.nav-btn');
                buttons.forEach(function(button) {
                    button.style.color = "white";
                });

            } else {
                document.body.style.color = "black";
                document.getElementById('teslaLogo').style.filter = "invert(0%)";
                const buttons = document.querySelectorAll('.nav-btn');
                buttons.forEach(function(button) {
                    button.style.color = "black";
                });
                
            }
            
        }
    })
}, {
    threshold: 1,
    rootMargin: '0px'
});

encabezados.forEach(encabezado => {
    observer.observe(encabezado);
})

// console.log(encabezados); 
function changeColor() {

    
    
    }