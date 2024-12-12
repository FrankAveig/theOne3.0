document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const statusToken = urlParams.get('status_token');
    const messageElement = document.getElementById('message');
    const approveButton = document.getElementById('approveButton');
    const spinner = document.getElementById('spinner');
    const offerHeader = document.getElementById('offerHeader');

    // Toggle offer details visibility


    // Obtener datos de la oferta
    if (statusToken) {
        const getOfferDataUrl = `https://api.ipsomary.bigproject.dev/api/v1/user/offers/get-offer-data/${statusToken}`;

        spinner.style.display = 'block';

        axios.get(getOfferDataUrl)
            .then(response => {
                if (response.data.status === 200) {
                    const data = response.data.data;
                    offerDetails.innerHTML = `
                        <p><strong>Clientes:</strong> ${data.clients.map(client => `${client.name}`).join('')}</p>
                        <p><strong>Nombre del proyecto:</strong> ${data.project_name}</p>
                        <p><strong>Código:</strong> ${data.code}</p>
                        <p><strong>Dirección:</strong> ${data.address}</p>
                        <p><strong>Ciudad:</strong> ${data.city}</p>
                        <p><strong>Subtotal:</strong> $${data.subtotal}</p>
                        <p><strong>Extras subtotal:</strong> $${data.extras_subtotal}</p>
                        <p><strong>Impuestos:</strong> $${data.taxes}</p>
                        <p><strong>Descuento:</strong> $${data.discount}</p>
                        <p><strong>Total:</strong> $${data.total}</p>
                    `;
                } else {
                    offerDetails.textContent = 'No se pudieron cargar los datos de la oferta.';
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos de la oferta:', error);
                offerDetails.textContent = 'Error al cargar los datos de la oferta.';
            })
            .finally(() => {
                spinner.style.display = 'none';
            });
    }

    approveButton.addEventListener('click', () => {
        if (statusToken) {
            approveButton.disabled = true;
            spinner.style.display = 'block';
            const apiUrl = `https://api.ipsomary.bigproject.dev/api/v1/user/offers/approve/offer/${statusToken}`;

            axios.put(apiUrl)
                .then(response => {
                    messageElement.textContent = '¡Tu oferta ha sido aprobada exitosamente! Si esto es un error, por favor llame al +593 981220850.';
                    messageElement.style.color = 'green';
                })
                .catch(error => {
                    console.error(error);
                    if (error.response && error.response.status === 422) {
                        messageElement.textContent = `${error.response.data.message} y ${error.response.data.data} Si esto es un error, por favor llame al +593 981220850.`;
                    } else {
                        messageElement.textContent = 'Error al aprobar la oferta, intente nuevamente más tarde.';
                    }
                    messageElement.style.color = 'red';
                })
                .finally(() => {
                    approveButton.disabled = false;
                    spinner.style.display = 'none';
                });
        } else {
            messageElement.textContent = 'Token de estado inválido o faltante.';
            messageElement.style.color = 'red';
        }
    });
});