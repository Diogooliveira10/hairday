import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
    try {
        // Faz a requisição para enviar os dados do agendamento.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })

        alert("Agendamento realizado com sucesso!")

        // Exibe mensagem de agendamento realizado.
    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar. Tente novamente mais tarde.")
    }
}