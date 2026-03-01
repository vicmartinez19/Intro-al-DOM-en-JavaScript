
        // Selección de elementos del DOM
        let formulario = document.getElementById('formulario');
        let textarea = document.getElementById('comentario');
        let listaComentarios = document.getElementById('listaComentarios');

        // Evento submit del formulario
        formulario.addEventListener('submit', function (event) {
            event.preventDefault(); 

            let textoComentario = textarea.value.trim();

            if (textoComentario === '') {
                return;
            }

            let divComentario = document.createElement('div');
            divComentario.className = 'comentario';

            let pTexto = document.createElement('p');
            pTexto.textContent = textoComentario;

            let fecha = document.createElement('div');
            fecha.className = 'fecha';
            let ahora = new Date();
            fecha.textContent = ahora.toLocaleString();

            let botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.className = 'eliminar';

            botonEliminar.addEventListener('click', function () {
                divComentario.remove();
            });

            divComentario.appendChild(pTexto);
            divComentario.appendChild(fecha);
            divComentario.appendChild(botonEliminar);

            listaComentarios.appendChild(divComentario);

            textarea.value = '';
        });
    