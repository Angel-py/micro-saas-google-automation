function doGet () {
  return HtmlService.createTemplateFromFile('Index')
  .evaluate()
  .setTitle('Agendador Técnico Inteligente - EADIC')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function procesarAgendado(datos) {
  try {
    const { nombreCandidato, rol, emailEntrevistador, fechaHora } = datos;
    const inicio = new Date(fechaHora);
    const fin = new Date(inicio.getTime() + 60 * 60 * 1000); 

    const cuerpoIA = generarTextoIA(nombreCandidato, rol);

    const titulo = `Entrevista Técnica: ${nombreCandidato} - ${rol}`;
    const descripcion = `Entrevista coordinada vía Micro-SaaS EADIC.\n\n${cuerpoIA}`;
    
    const evento = CalendarApp.getDefaultCalendar().createEvent(titulo, inicio, fin, {
      description: descripcion,
      guests: `${emailEntrevistador}, email_de_rrhh@eadic.com`, 
    });

    GmailApp.sendEmail(emailEntrevistador, titulo, cuerpoIA, {
      name: "RR.HH. EADIC",
      cc: "Correo@gmail.com" 
    });

    return "¡Éxito! El evento ha sido agendado y los correos enviados.";
  } catch (e) {
    return "Error: " + e.toString();
  }
}

