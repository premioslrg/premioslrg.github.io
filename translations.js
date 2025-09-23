// Objeto con todas las traducciones
const translations = {
    es: {
      // Header
      title: "Premios Liga Con Nós",
      subtitle: "Premios bianuales que dan visibilidad a las patologías reumáticas",
      nav_home: "INICIO",
      nav_program: "PROGRAMA DEL EVENTO", 
      nav_contact: "CONTACTO",
      nav_history: "HISTÓRICO PREMIOS",
      
      // Welcome
      welcome_title: "Bienvenidos a Premios Liga Con Nós",
      welcome_text: "Estos premios bianuales se otorgan a personas o entidades que desde diferentes campos científicos, artísticos, médicos, etc. contribuyen a dar visibilidad a las personas que sufren una patología reumática y/o músculo-esquelética.",
      
      // Blue section
      blue_text_1: "Esta entrega de premios se llevará a cabo por La Liga Reumatológica Galega, una entidad sin ánimo de lucro que agrupa a personas con enfermedades reumáticas y musculoesqueléticas, así como a sus familiares y profesionales de la salud.",
      blue_text_2: "Nuestra misión es promover y desarrollar la lucha contra estas enfermedades, enfocándonos en su prevención, tratamiento y rehabilitación. Trabajamos en la comunidad autónoma gallega para mejorar la calidad de vida de las personas afectadas, ofreciendo soporte y asesoramiento a pacientes y a sus familias.",
      blue_link_text: "Para más información, no dude en visitar nuestra página web:",
      
      // Awards preview
      awards_preview_title: "Próxima Ceremonia de Premios",
      event_details_title: "Detalles del Evento",
      event_date_label: "Fecha:",
      event_date: "9 de Noviembre de 2024",
      event_time_label: "Hora:",
      event_time: "19:00h",
      event_location_label: "Lugar:",
      event_location: "Palacio de la Ópera, A Coruña",
      event_address_label: "Dirección:",
      event_address: "Glorieta América, S/n - 15004",
      view_program_btn: "Ver Programa",
      register_btn: "Inscribirse",
      highlights_title: "Lo que te espera",
      highlight_1: "Ceremonia de entrega de premios",
      highlight_2: "Mesa redonda con expertos",
      highlight_3: "Networking profesional",
      highlight_4: "Cóctel de clausura",
      
      // Contact form
      contact_form_title: "Contacta con nosotros",
      contact_intro: "Si tiene alguna pregunta, no dude en comunicárnoslo, para así poder resolvérsela en la mayor brevedad posible.",
      form_name: "Nombre",
      form_name_full: "Nombre completo",
      form_email: "Dirección de correo electrónico", 
      form_phone: "Teléfono",
      form_subject: "Asunto",
      form_subject_select: "Selecciona un asunto",
      form_subject_general: "Información general",
      form_subject_registration: "Inscripción al evento",
      form_subject_press: "Consultas de prensa",
      form_subject_sponsorship: "Oportunidades de patrocinio",
      form_subject_nominations: "Nominaciones para premios",
      form_subject_others: "Otros",
      form_organization: "Organización/Empresa",
      form_message: "Mensaje",
      form_privacy: "Acepto la política de privacidad y el tratamiento de mis datos *",
      form_submit: "Enviar formulario",
      form_submit_extended: "Enviar mensaje",
      
      // Location
      map_placeholder: "Mapa de ubicación",
      location_title: "Ubicación",
      location_info: "El acto tendrá lugar en el <strong>Palacio de la Ópera</strong> el <strong>9 de noviembre</strong> a las <strong>19:00h</strong>.",
      location_address: "(<strong>Glorieta América, S/n - 15004</strong>).",
      
      // Footer
      footer_text: "Premios Liga Con Nós",
      
      // Messages
      form_success: "¡Formulario enviado correctamente!",
      form_error: "Por favor, complete todos los campos obligatorios.",
      email_error: "Por favor, ingrese una dirección de correo electrónico válida.",
      
      // Contact page specific
      contact_page_title: "Contacto",
      contact_page_intro: "¿Tienes alguna pregunta sobre los Premios Liga Con Nós? ¿Necesitas más información sobre el evento? Estamos aquí para ayudarte. No dudes en contactarnos a través de cualquiera de los medios disponibles.",
      contact_info_title: "Información de Contacto",
      contact_email_title: "📧 Correo Electrónico",
      contact_phone_title: "📞 Teléfono",
      contact_address_title: "📍 Dirección",
      contact_hours_title: "🕒 Horario de Atención",
      contact_hours_weekdays: "Lunes a Viernes: 9:00 - 17:00",
      contact_hours_saturday: "Sábados: 9:00 - 13:00",
      contact_hours_sunday: "Domingos: Cerrado",
      contact_help_title: "¿Cómo podemos ayudarte?",
      contact_help_event: "📋 Información sobre el evento",
      contact_help_event_desc: "Consultas sobre el programa, horarios, ubicación, inscripciones y cualquier aspecto relacionado con la ceremonia de premios.",
      contact_help_nominations: "🏆 Nominaciones",
      contact_help_nominations_desc: "Si conoces a alguien que debería ser reconocido por su labor en el ámbito de las enfermedades reumáticas, contáctanos.",
      contact_help_press: "📰 Prensa y medios",
      contact_help_press_desc: "Solicitudes de entrevistas, notas de prensa, acreditaciones y material gráfico para medios de comunicación.",
      contact_help_collaborations: "🤝 Colaboraciones",
      contact_help_collaborations_desc: "Oportunidades de patrocinio, colaboración institucional y alianzas estratégicas con organizaciones afines.",
      contact_tip_title: "💡 Consejo",
      contact_tip_desc: "Para una respuesta más rápida, incluye todos los detalles relevantes en tu mensaje inicial. Te responderemos en un plazo máximo de 48 horas.",
      
      // History page
      history_page_title: "Histórico de Premios Liga Con Nós",
      history_page_intro: "Desde su creación, los Premios Liga Con Nós han reconocido la labor excepcional de profesionales, organizaciones y personas que han contribuido significativamente a dar visibilidad y mejorar la atención de las enfermedades reumáticas y musculoesqueléticas.",
      winners_2024_title: "Personas y Entidades Premiadas en 2024",
      more_info: "Más información +",
      
      // Program page
      program_page_title: "Programa del Evento",
      program_page_intro: "La ceremonia de entrega de los Premios Liga Con Nós 2024 tendrá lugar el <strong>9 de noviembre</strong> en el Palacio de la Ópera de A Coruña. Te invitamos a conocer el programa completo de actividades que hemos preparado para esta ocasión especial.",
      schedule_title: "Cronograma de Actividades"
    },
    
    gl: {
      // Header
      title: "Premios Liga Con Nós",
      subtitle: "Premios bianuais que dan visibilidade ás patoloxías reumáticas",
      nav_home: "INICIO",
      nav_program: "PROGRAMA DO EVENTO",
      nav_contact: "CONTACTO", 
      nav_history: "HISTÓRICO PREMIOS",
      
      // Welcome
      welcome_title: "Benvidos aos Premios Liga Con Nós",
      welcome_text: "Estes premios bianuais concédenselles a persoas ou entidades que desde diferentes campos científicos, artísticos, médicos, etc. contribúen a dar visibilidade ás persoas que sofren unha patoloxía reumática e/ou músculo-esquelética.",
      
      // Blue section
      blue_text_1: "Esta entrega de premios levarase a cabo pola Liga Reumatológica Galega, unha entidade sen ánimo de lucro que agrupa a persoas con enfermidades reumáticas e musculoesqueléticas, así como aos seus familiares e profesionais da saúde.",
      blue_text_2: "A nosa misión é promover e desenvolver a loita contra estas enfermidades, enfocándonos na súa prevención, tratamento e rehabilitación. Traballamos na comunidade autónoma galega para mellorar a calidade de vida das persoas afectadas, ofrecendo soporte e asesoramento a pacientes e ás súas familias.",
      blue_link_text: "Para máis información, non dubide en visitar a nosa páxina web:",
      
      // Awards preview
      awards_preview_title: "Próxima Cerimonia de Premios",
      event_details_title: "Detalles do Evento",
      event_date_label: "Data:",
      event_date: "9 de Novembro de 2024",
      event_time_label: "Hora:",
      event_time: "19:00h",
      event_location_label: "Lugar:",
      event_location: "Palacio da Ópera, A Coruña",
      event_address_label: "Dirección:",
      event_address: "Glorieta América, S/n - 15004",
      view_program_btn: "Ver Programa",
      register_btn: "Inscribirse",
      highlights_title: "O que te espera",
      highlight_1: "Cerimonia de entrega de premios",
      highlight_2: "Mesa redonda con expertos",
      highlight_3: "Networking profesional",
      highlight_4: "Cóctel de clausura",
      
      // Contact form
      contact_form_title: "Contacta connosco",
      contact_intro: "Se ten algunha pregunta, non dubide en comunicárnoslo, para así poder resolvérllela na maior brevidade posible.",
      form_name: "Nome",
      form_name_full: "Nome completo",
      form_email: "Enderezo de correo electrónico",
      form_phone: "Teléfono",
      form_subject: "Asunto",
      form_subject_select: "Selecciona un asunto",
      form_subject_general: "Información xeral",
      form_subject_registration: "Inscrición ao evento",
      form_subject_press: "Consultas de prensa",
      form_subject_sponsorship: "Oportunidades de patrocinio",
      form_subject_nominations: "Nominacións para premios",
      form_subject_others: "Outros",
      form_organization: "Organización/Empresa",
      form_message: "Mensaxe", 
      form_privacy: "Acepto a política de privacidade e o tratamento dos meus datos *",
      form_submit: "Enviar formulario",
      form_submit_extended: "Enviar mensaxe",
      
      // Location
      map_placeholder: "Mapa de localización",
      location_title: "Localización",
      location_info: "O acto terá lugar no <strong>Palacio da Ópera</strong> o <strong>9 de novembro</strong> ás <strong>19:00h</strong>.",
      location_address: "(<strong>Glorieta América, S/n - 15004</strong>).",
      
      // Footer
      footer_text: "Premios Liga Con Nós",
      
      // Messages
      form_success: "¡Formulario enviado correctamente!",
      form_error: "Por favor, complete todos os campos obrigatorios.",
      email_error: "Por favor, ingrese un enderezo de correo electrónico válido.",
      
      // Contact page specific
      contact_page_title: "Contacto",
      contact_page_intro: "¿Tes algunha pregunta sobre os Premios Liga Con Nós? ¿Necesitas máis información sobre o evento? Estamos aquí para axudarte. Non dubides en contactarnos a través de calquera dos medios dispoñibles.",
      contact_info_title: "Información de Contacto",
      contact_email_title: "📧 Correo Electrónico",
      contact_phone_title: "📞 Teléfono",
      contact_address_title: "📍 Dirección",
      contact_hours_title: "🕒 Horario de Atención",
      contact_hours_weekdays: "Luns a Venres: 9:00 - 17:00",
      contact_hours_saturday: "Sábados: 9:00 - 13:00",
      contact_hours_sunday: "Domingos: Pechado",
      contact_help_title: "¿Como podemos axudarte?",
      contact_help_event: "📋 Información sobre o evento",
      contact_help_event_desc: "Consultas sobre o programa, horarios, ubicación, inscricións e calquera aspecto relacionado coa cerimonia de premios.",
      contact_help_nominations: "🏆 Nominacións",
      contact_help_nominations_desc: "Se coñeces a alguén que debería ser recoñecido pola súa labor no ámbito das enfermidades reumáticas, contactanos.",
      contact_help_press: "📰 Prensa e medios",
      contact_help_press_desc: "Solicitudes de entrevistas, notas de prensa, acreditacións e material gráfico para medios de comunicación.",
      contact_help_collaborations: "🤝 Colaboracións",
      contact_help_collaborations_desc: "Oportunidades de patrocinio, colaboración institucional e alianzas estratéxicas con organizacións afíns.",
      contact_tip_title: "💡 Consello",
      contact_tip_desc: "Para unha resposta máis rápida, inclúe todos os detalles relevantes na túa mensaxe inicial. Responderémosche nun prazo máximo de 48 horas.",
      
      // History page
      history_page_title: "Histórico de Premios Liga Con Nós",
      history_page_intro: "Desde a súa creación, os Premios Liga Con Nós recoñeceron a labor excepcional de profesionais, organizacións e persoas que contribuíron significativamente a dar visibilidade e mellorar a atención das enfermidades reumáticas e musculoesqueléticas.",
      winners_2024_title: "Persoas e Entidades Premiadas en 2024",
      more_info: "Máis información +",
      
      // Program page
      program_page_title: "Programa do Evento",
      program_page_intro: "A cerimonia de entrega dos Premios Liga Con Nós 2024 terá lugar o <strong>9 de novembro</strong> no Palacio da Ópera de A Coruña. Convidámoste a coñecer o programa completo de actividades que preparamos para esta ocasión especial.",
      schedule_title: "Cronograma de Actividades"
    },
    
    en: {
      // Header
      title: "Liga Con Nós Awards",
      subtitle: "Biannual awards that give visibility to rheumatic pathologies",
      nav_home: "HOME",
      nav_program: "EVENT PROGRAM",
      nav_contact: "CONTACT",
      nav_history: "AWARDS HISTORY",
      
      // Welcome
      welcome_title: "Welcome to Liga Con Nós Awards",
      welcome_text: "These biannual awards are given to people or entities that from different scientific, artistic, medical fields, etc. contribute to giving visibility to people who suffer from rheumatic and/or musculoskeletal pathology.",
      
      // Blue section
      blue_text_1: "This award ceremony will be carried out by The Galician Rheumatological League, a non-profit entity that brings together people with rheumatic and musculoskeletal diseases, as well as their families and health professionals.",
      blue_text_2: "Our mission is to promote and develop the fight against these diseases, focusing on their prevention, treatment and rehabilitation. We work in the Galician autonomous community to improve the quality of life of affected people, offering support and advice to patients and their families.",
      blue_link_text: "For more information, do not hesitate to visit our website:",
      
      // Awards preview
      awards_preview_title: "Next Awards Ceremony",
      event_details_title: "Event Details",
      event_date_label: "Date:",
      event_date: "November 9, 2024",
      event_time_label: "Time:",
      event_time: "7:00 PM",
      event_location_label: "Location:",
      event_location: "Opera Palace, A Coruña",
      event_address_label: "Address:",
      event_address: "Glorieta América, S/n - 15004",
      view_program_btn: "View Program",
      register_btn: "Register",
      highlights_title: "What awaits you",
      highlight_1: "Awards ceremony",
      highlight_2: "Expert panel discussion",
      highlight_3: "Professional networking",
      highlight_4: "Closing cocktail",
      
      // Contact form
      contact_form_title: "Contact us",
      contact_intro: "If you have any questions, do not hesitate to contact us, so we can resolve them as soon as possible.",
      form_name: "Name",
      form_name_full: "Full name",
      form_email: "Email address",
      form_phone: "Phone",
      form_subject: "Subject",
      form_subject_select: "Select a subject",
      form_subject_general: "General information",
      form_subject_registration: "Event registration",
      form_subject_press: "Press inquiries",
      form_subject_sponsorship: "Sponsorship opportunities",
      form_subject_nominations: "Award nominations",
      form_subject_others: "Others",
      form_organization: "Organization/Company",
      form_message: "Message",
      form_privacy: "I accept the privacy policy and data processing *",
      form_submit: "Send form",
      form_submit_extended: "Send message",
      
      // Location
      map_placeholder: "Location map",
      location_title: "Location", 
      location_info: "The event will take place at the <strong>Opera Palace</strong> on <strong>November 9th</strong> at <strong>7:00 PM</strong>.",
      location_address: "(<strong>Glorieta América, S/n - 15004</strong>).",
      
      // Footer
      footer_text: "Liga Con Nós Awards",
      
      // Messages
      form_success: "Form submitted successfully!",
      form_error: "Please fill in all required fields.",
      email_error: "Please enter a valid email address.",
      
      // Contact page specific
      contact_page_title: "Contact",
      contact_page_intro: "Do you have any questions about the Liga Con Nós Awards? Do you need more information about the event? We are here to help you. Don't hesitate to contact us through any of the available channels.",
      contact_info_title: "Contact Information",
      contact_email_title: "📧 Email",
      contact_phone_title: "📞 Phone",
      contact_address_title: "📍 Address",
      contact_hours_title: "🕒 Office Hours",
      contact_hours_weekdays: "Monday to Friday: 9:00 - 17:00",
      contact_hours_saturday: "Saturday: 9:00 - 13:00",
      contact_hours_sunday: "Sunday: Closed",
      contact_help_title: "How can we help you?",
      contact_help_event: "📋 Event information",
      contact_help_event_desc: "Inquiries about the program, schedules, location, registrations and any aspect related to the awards ceremony.",
      contact_help_nominations: "🏆 Nominations",
      contact_help_nominations_desc: "If you know someone who should be recognized for their work in the field of rheumatic diseases, contact us.",
      contact_help_press: "📰 Press and media",
      contact_help_press_desc: "Interview requests, press releases, accreditations and graphic material for media.",
      contact_help_collaborations: "🤝 Collaborations",
      contact_help_collaborations_desc: "Sponsorship opportunities, institutional collaboration and strategic alliances with related organizations.",
      contact_tip_title: "💡 Tip",
      contact_tip_desc: "For a faster response, include all relevant details in your initial message. We will respond within a maximum of 48 hours.",
      
      // History page
      history_page_title: "Liga Con Nós Awards History",
      history_page_intro: "Since its creation, the Liga Con Nós Awards have recognized the exceptional work of professionals, organizations and people who have contributed significantly to giving visibility and improving care for rheumatic and musculoskeletal diseases.",
      winners_2024_title: "People and Entities Awarded in 2024",
      more_info: "More information +",
      
      // Program page
      program_page_title: "Event Program",
      program_page_intro: "The Liga Con Nós Awards 2024 ceremony will take place on <strong>November 9</strong> at the Opera Palace in A Coruña. We invite you to learn about the complete program of activities we have prepared for this special occasion.",
      schedule_title: "Schedule of Activities"
    }
  };
  
  // Función para obtener las traducciones del idioma actual
  function getTranslations(lang) {
    return translations[lang] || translations.es;
  }