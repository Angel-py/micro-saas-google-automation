

const OPENROUTER_KEY = "OPENROUTER_KEY";

function generarTextoIA(candidato, rol) {
  try {
    const url = "https://openrouter.ai/api/v1/chat/completions"; 
    const prompt = `Redacta un Correo en el que se le diga a ${candidato},\n\nQue es placer saludarlo desde la Empresa KINEDRIK y Nos gustaría invitarlo a una entrevista técnica para la posición de ${rol} utilizando un lenguaje formal, pero a la vez cálido, diciendo que Nuestra institución se enfoca en la evolución tecnológica del sector AEC.\n\nFinalizando con Atentamente,\nEquipo de Selección KINEDRIK. solo el cuerpo del correo y sin decir que es un borrador`;

    const payload = {
      "model": "google/gemini-2.5-flash-lite",
      "messages": [{"role": "user", "content": prompt}]
    };

    const options = {
      "method": "POST",
      "headers": {
        "Authorization": "Bearer " + OPENROUTER_KEY,
        "Content-Type": "application/json",
      },
      "payload": JSON.stringify(payload),
      "muteHttpExceptions": true
    };

    const response = UrlFetchApp.fetch(url, options);
    const resText = response.getContentText();
    const json = JSON.parse(resText);

    if (json.choices && json.choices[0] && json.choices[0].message) {
      return json.choices[0].message.content;
    } else {
      console.log(json);
    }
  } catch (e) {
    console.error("Error en IA: " + e.message);
    
    return `Estimado/a ${candidato},\n\nEs un placer saludarte desde KINEDRIK. Nos gustaría invitarte a una entrevista técnica para la posición de ${rol}. Nuestra institución se enfoca en la evolución tecnológica del sector AEC.\n\nAtentamente,\nEquipo de Selección KINEDRIK.`;
  }
}
 