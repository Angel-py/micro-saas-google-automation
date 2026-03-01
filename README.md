# micro-saas-google-automation
Intelligent AI-powered scheduling Micro-SaaS for the AEC sector, integrated into Google Workspace for KINEDRIK.

# 🚀 Agendador Técnico Inteligente - Micro-SaaS KINEDRIK

Este proyecto es una solución de automatización desarrollada para **KINEDRIK** , diseñada para optimizar la coordinación de entrevistas entre el equipo de RR.HH., los Entrevistadores Técnicos y los Candidatos del sector **AEC**.

## 📋 Descripción del Reto
El objetivo principal es eliminar el flujo manual de correos de ida y vuelta para agendar reuniones. Se ha creado una **Web App** desplegada en **Google Apps Script** que permite:
1. Visualizar la disponibilidad de RR.HH. en tiempo real.
2. Agendar slots de entrevista evitando solapamientos.
3. Generar invitaciones personalizadas mediante **Inteligencia Artificial (OpenRouter)**.

## 🛠️ Tecnologías Utilizadas
- **Lenguaje:** Google Apps Script (JavaScript).
- **Frontend:** HTML5, CSS3 (Diseño Responsive con paleta corporativa KINEDRIK).
- **Integraciones:** 
  - [Google Calendar API](https://developers.google.com) (Gestión de eventos).
  - [Gmail API](https://developers.google.com) (Notificaciones automáticas).
  - [OpenRouter API](https://openrouter.ai) (Modelos LLM para redacción dinámica).

## 🏗️ Arquitectura del Proyecto
Se ha seguido una **arquitectura modular** para garantizar un código limpio (*Clean Code*) y mantenible:
- `Servidor.gs`: Lógica del lado del servidor y manejo de APIs de Google.
- `IA.gs`: Conector centralizado para la comunicación con la API de OpenRouter.
- `Index.html`: Estructura base de la interfaz de usuario (Split View).
- `CSS.html`: Estilos corporativos (Azul #040025, Verde #8ABC43, Acento #2885FF).
- `JS.html`: Lógica del cliente, validaciones y comunicación asíncrona con el backend.

## 🚀 Instalación y Configuración
Para replicar este proyecto en tu entorno de Google Workspace:
1. Crea un nuevo proyecto en [Google Apps Script](https://script.google.com).
2. Copia los archivos de este repositorio en el editor.
3. Configura tu `API_KEY` de OpenRouter en el archivo `IA.gs`.
4. En **Google Calendar**, asegúrate de que el calendario de RR.HH. sea "Público" o compartido con los permisos necesarios.
5. Implementa como **Aplicación Web** con acceso para "Cualquier persona".

## 📺 Demo y Resultados
- **Video Explicativo:** 
- **Web App Funcional:** (https://script.google.com/macros/s/AKfycbzqjSwdFoWyyZq-71hmxbsNYSS-XtuAf14-xGUKTm5Nm6FNG-5fXagt1jNuTLMhO03ILQ/exec)

---
Desarrollado por Angel Reyes como parte de la prueba técnica para el rol de Automatizador de Procesos.
