// Objeto con todas las traducciones
const translations = {
    es: {
      // Header
      title: "Premios Liga Con Nós",
      subtitle: "Premios bianuales que dan visibilidad a las patologías reumáticas",
      nav_home: "INICIO",
      nav_premio: "PREMIOS 2026",
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
      event_date: "9 de Noviembre de 2026",
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
      contact_intro: "Si tiene alguna pregunta, no dude en comunicárnoslo, para así poder resolversela en la mayor brevedad posible.",
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
      winners_2026_title: "Personas y Entidades Premiadas en 2026",
      more_info: "Más información +",
      less_info: "Menos información -",
      
      // Program page
      program_page_title: "Programa del Evento",
      program_page_intro: "La ceremonia de entrega de los Premios Liga Con Nós 2026 tendrá lugar el <strong>9 de noviembre</strong> en el Palacio de la Ópera de A Coruña. Te invitamos a conocer el programa completo de actividades que hemos preparado para esta ocasión especial.",
      schedule_title: "Cronograma de Actividades",
      
      // Program specific translations
      program_highlights_title: "Destacados del Programa",
      important_info_title: "Información Importante para Asistentes",
      registration_section_title: "Inscripción al Evento",
      registration_form_title: "Formulario de Inscripción",
      registration_intro: "Para asistir a los Premios Liga Con Nós 2026, complete el siguiente formulario. Recibirá confirmación por email con todos los detalles.",
      event_details_title_program: "Detalles del Evento",
      
      // Program form fields
      form_attendees: "Número de acompañantes",
      form_attendees_0: "Solo yo",
      form_attendees_1: "1 acompañante",
      form_attendees_2: "2 acompañantes",
      form_attendees_3: "3 acompañantes",
      form_dietary: "Restricciones alimentarias",
      form_dietary_placeholder: "Indique cualquier alergia o restricción alimentaria",
      form_accessibility: "Necesidades especiales de accesibilidad",
      form_accessibility_placeholder: "Describa cualquier asistencia que requiera",
      form_register_submit: "Inscribirse al Evento",
      
      // Program cards and highlights
      highlight_exceptional_title: "Premiados Excepcionales",
      highlight_exceptional_desc: "Reconocimiento a profesionales, organizaciones y personas que han contribuido significativamente a la visibilidad y tratamiento de las enfermedades reumáticas.",
      highlight_experts_title: "Mesa de Expertos",
      highlight_experts_desc: "Panel de discusión con reconocidos especialistas que compartirán los últimos avances en investigación y tratamiento de patologías reumáticas.",
      highlight_networking_title: "Networking Profesional",
      highlight_networking_desc: "Oportunidades únicas para establecer contactos con profesionales del sector, investigadores, pacientes y representantes institucionales.",
      highlight_media_title: "Cobertura Mediática",
      highlight_media_desc: "El evento contará con cobertura de medios especializados y locales, amplificando el mensaje de concienciación sobre las enfermedades reumáticas.",
      highlight_venue_title: "Ubicación Emblemática",
      highlight_venue_desc: "El Palacio de la Ópera de A Coruña proporciona un marco incomparable para esta celebración de la excelencia en el ámbito reumático.",
      highlight_gastronomy_title: "Gastronomía Gallega",
      highlight_gastronomy_desc: "El cóctel de clausura incluirá una selección de productos gastronómicos típicos de Galicia, celebrando también nuestra cultura local.",
      
      // Important info cards
      info_registration_title: "🎫 Inscripción",
      info_registration_desc: "El evento es gratuito pero requiere inscripción previa. Las plazas son limitadas. Regístrate a través del formulario de contacto antes del 5 de noviembre.",
      info_dress_title: "👔 Código de Vestimenta",
      info_dress_desc: "Se recomienda vestimenta formal o semi-formal. El evento tiene un carácter solemne de reconocimiento profesional.",
      info_parking_title: "🅿️ Aparcamiento",
      info_parking_desc: "Aparcamiento limitado en los alrededores del Palacio de la Ópera. Se recomienda el uso de transporte público o llegar con antelación.",
      info_accessibility_title: "♿ Accesibilidad",
      info_accessibility_desc: "El Palacio de la Ópera cuenta con instalaciones accesibles. Si requiere asistencia especial, indíquelo en la inscripción.",
      info_connectivity_title: "📱 Conectividad",
      info_connectivity_desc: "WiFi gratuito disponible. Se animará a compartir en redes sociales usando el hashtag #PremiosLigaConNos2026.",
      info_dietary_title: "🍫 Consideraciones Alimentarias",
      info_dietary_desc: "El cóctel incluye opciones para diferentes restricciones alimentarias. Indique sus necesidades específicas al inscribirse.",
      
      // Event details cards
      detail_date_title: "📅 Fecha y Hora",
      detail_date_desc: "<strong>9 de noviembre de 2026</strong><br>17:30 - 21:00 horas",
      detail_location_title: "📍 Ubicación",
      detail_location_desc: "<strong>Palacio de la Ópera</strong><br>Glorieta América, S/n<br>15004 A Coruña, Galicia",
      detail_registration_title: "🎫 Inscripción",
      detail_registration_desc: "<strong>Gratuito con inscripción previa</strong><br>Plazas limitadas<br>Fecha límite: 5 de noviembre",
      detail_note_title: "📝 Nota Importante",
      detail_note_desc: "Recibirá un email de confirmación con el programa detallado y las instrucciones de acceso al Palacio de la Ópera.",
      
      // Cookie banner
      cookie_text: "Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra",
      cookie_policy: "Política de Cookies",
      cookie_accept: "Aceptar",
      
      // Registration success
      registration_success: "¡Inscripción realizada con éxito! Recibirá un email de confirmación en breve.",
      
      // Premio/Nominaciones page
      prize_2026_title: "Premios Liga Con Nós 2026",
      prize_page_intro: "La próxima edición de los Premios Liga Con Nós reconocerá nuevamente la labor excepcional de profesionales, organizaciones y personas que contribuyen significativamente a dar visibilidad y mejorar la atención de las enfermedades reumáticas y musculoesqueléticas.",
      nominations_title: "Proceso de Nominaciones",
      nominations_intro: "¿Conoces a alguien que merezca ser reconocido por su excepcional labor en el ámbito de las enfermedades reumáticas? Te invitamos a realizar una nominación para los Premios Liga Con Nós 2026.",
      
      // Categories
      categories_title: "Categorías de Premios",
      category_medical_title: "🏥 Excelencia Médica",
      category_medical_desc: "Reconocimiento a profesionales médicos que han destacado por su labor asistencial, investigación o innovación en el tratamiento de enfermedades reumáticas.",
      category_research_title: "🔬 Investigación Científica",
      category_research_desc: "Para investigadores que han realizado contribuciones significativas al conocimiento científico sobre patologías reumáticas y musculoesqueléticas.",
      category_communication_title: "📢 Comunicación y Divulgación",
      category_communication_desc: "Profesionales de la comunicación, periodistas y divulgadores que han contribuido a dar visibilidad a estas enfermedades.",
      category_institutions_title: "🏛️ Instituciones y Organizaciones",
      category_institutions_desc: "Entidades públicas o privadas que han desarrollado programas o iniciativas destacadas en el ámbito reumático.",
      category_patients_title: "👥 Pacientes y Asociaciones",
      category_patients_desc: "Pacientes activos y asociaciones que han trabajado para mejorar la calidad de vida de las personas afectadas.",
      
      // Nomination criteria
      criteria_title: "Criterios de Nominación",
      criteria_intro: "Para ser elegible a los Premios Liga Con Nós 2026, los candidatos deben cumplir con los siguientes criterios:",
      criteria_1: "Impacto demostrable en la mejora de la atención, tratamiento o comprensión de las enfermedades reumáticas",
      criteria_2: "Labor desarrollada durante los últimos 5 años con resultados verificables",
      criteria_3: "Compromiso ético en su práctica profesional o activismo",
      criteria_4: "Contribución a la visibilización de las patologías reumáticas en la sociedad",
      criteria_5: "Innovación en metodologías, tratamientos o enfoques de atención",
      
      // Nomination process
      process_title: "Proceso de Nominación",
      process_step1_title: "1. Presentación de Candidaturas",
      process_step1_desc: "Las nominaciones pueden ser presentadas por cualquier persona o entidad a través del formulario oficial.",
      process_step2_title: "2. Evaluación por Comité",
      process_step2_desc: "Un comité de expertos evaluará todas las candidaturas según los criterios establecidos.",
      process_step3_title: "3. Selección de Finalistas",
      process_step3_desc: "Se seleccionarán los finalistas en cada categoría para la ceremonia de premiación.",
      process_step4_title: "4. Ceremonia de Entrega",
      process_step4_desc: "Los ganadores serán anunciados durante la ceremonia oficial el 9 de noviembre de 2026.",
      
      // Important dates
      important_dates_title: "Fechas Importantes",
      date_opening: "Apertura de nominaciones: 1 de marzo de 2026",
      date_deadline: "Fecha límite de nominaciones: 31 de julio de 2026",
      date_evaluation: "Período de evaluación: agosto - octubre 2026",
      date_ceremony: "Ceremonia de premios: 9 de noviembre de 2026",
      
      // Nomination form
      nomination_form_title: "Formulario de Nominación",
      nomination_form_intro: "Complete este formulario para nominar a un candidato para los Premios Liga Con Nós 2026. Toda la información proporcionada será tratada de forma confidencial.",
      form_nominator_info: "Información del Nominador",
      form_nominee_info: "Información del Nominado",
      form_nominee_name: "Nombre completo del nominado *",
      form_nominee_position: "Cargo/Posición",
      form_nominee_organization: "Organización/Institución",
      form_nominee_email: "Email del nominado",
      form_nominee_phone: "Teléfono del nominado",
      form_category: "Categoría del premio *",
      form_category_select: "Selecciona una categoría",
      form_justification: "Justificación de la nominación *",
      form_justification_placeholder: "Explique detalladamente por qué considera que este candidato merece el premio (máximo 1000 palabras)",
      form_achievements: "Logros y contribuciones específicas",
      form_achievements_placeholder: "Describa los logros más relevantes del nominado en los últimos 5 años",
      form_impact: "Impacto en la comunidad reumática",
      form_impact_placeholder: "Describa el impacto específico del trabajo del nominado en pacientes, profesionales o la sociedad en general",
      form_supporting_docs: "Documentos de apoyo (opcional)",
      form_supporting_docs_desc: "Puede adjuntar CV, artículos, certificados u otros documentos que respalden la nominación",
      form_consent: "Confirmo que tengo el consentimiento del nominado para presentar esta candidatura *",
      form_submit_nomination: "Enviar Nominación",
      
      // Success messages
      nomination_success: "¡Nominación enviada exitosamente! Recibirá confirmación por email en las próximas 24 horas.",
      
      // Previous winners section
      previous_winners_title: "Ganadores Anteriores",
      view_previous_btn: "Ver Ganadores 2024"
    },
    
    gl: {
      // Header
      title: "Premios Liga Con Nós",
      subtitle: "Premios bianuais que dan visibilidade ás patoloxías reumáticas",
      nav_home: "INICIO",
      nav_premio: "PREMIOS 2026",
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
      event_date: "9 de Novembro de 2026",
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
      winners_2026_title: "Persoas e Entidades Premiadas en 2026",
      more_info: "Máis información +",
      less_info: "Menos información -",
      
      // Program page
      program_page_title: "Programa do Evento",
      program_page_intro: "A cerimonia de entrega dos Premios Liga Con Nós 2026 terá lugar o <strong>9 de novembro</strong> no Palacio da Ópera de A Coruña. Convidámoste a coñecer o programa completo de actividades que preparamos para esta ocasión especial.",
      schedule_title: "Cronograma de Actividades",
      
      // Program specific translations
      program_highlights_title: "Destacados do Programa",
      important_info_title: "Información Importante para Asistentes",
      registration_section_title: "Inscrición ao Evento",
      registration_form_title: "Formulario de Inscrición",
      registration_intro: "Para asistir aos Premios Liga Con Nós 2026, complete o seguinte formulario. Recibirá confirmación por email con todos os detalles.",
      event_details_title_program: "Detalles do Evento",
      
      // Program form fields
      form_attendees: "Número de acompañantes",
      form_attendees_0: "Só eu",
      form_attendees_1: "1 acompañante",
      form_attendees_2: "2 acompañantes",
      form_attendees_3: "3 acompañantes",
      form_dietary: "Restricións alimentarias",
      form_dietary_placeholder: "Indique calquera alerxia ou restrición alimentaria",
      form_accessibility: "Necesidades especiais de accesibilidade",
      form_accessibility_placeholder: "Describa calquera asistencia que requira",
      form_register_submit: "Inscribirse ao Evento",
      
      // Program cards and highlights
      highlight_exceptional_title: "Premiados Excepcionais",
      highlight_exceptional_desc: "Recoñecemento a profesionais, organizacións e persoas que contribuíron significativamente á visibilidade e tratamento das enfermidades reumáticas.",
      highlight_experts_title: "Mesa de Expertos",
      highlight_experts_desc: "Panel de discusión con recoñecidos especialistas que compartirán os últimos avances en investigación e tratamento de patoloxías reumáticas.",
      highlight_networking_title: "Networking Profesional",
      highlight_networking_desc: "Oportunidades únicas para establecer contactos con profesionais do sector, investigadores, pacientes e representantes institucionais.",
      highlight_media_title: "Cobertura Mediática",
      highlight_media_desc: "O evento contará con cobertura de medios especializados e locais, amplificando a mensaxe de concienciación sobre as enfermidades reumáticas.",
      highlight_venue_title: "Ubicación Emblemática",
      highlight_venue_desc: "O Palacio da Ópera de A Coruña proporciona un marco incomparable para esta celebración da excelencia no ámbito reumático.",
      highlight_gastronomy_title: "Gastronomía Galega",
      highlight_gastronomy_desc: "O cóctel de clausura incluirá unha selección de produtos gastronómicos típicos de Galicia, celebrando tamén a nosa cultura local.",
      
      // Important info cards
      info_registration_title: "🎫 Inscrición",
      info_registration_desc: "O evento é gratuíto pero require inscrición previa. As prazas son limitadas. Rexístrate a través do formulario de contacto antes do 5 de novembro.",
      info_dress_title: "👔 Código de Vestimenta",
      info_dress_desc: "Recoméndase vestimenta formal ou semi-formal. O evento ten un carácter solemne de recoñecemento profesional.",
      info_parking_title: "🅿️ Aparcamento",
      info_parking_desc: "Aparcamento limitado nos arredores do Palacio da Ópera. Recoméndase o uso de transporte público ou chegar con antelación.",
      info_accessibility_title: "♿ Accesibilidade",
      info_accessibility_desc: "O Palacio da Ópera conta con instalacións accesibles. Se require asistencia especial, indíqueo na inscrición.",
      info_connectivity_title: "📱 Conectividade",
      info_connectivity_desc: "WiFi gratuíto dispoñible. Animarase a compartir en redes sociais usando o hashtag #PremiosLigaConNos2026.",
      info_dietary_title: "🍫 Consideracións Alimentarias",
      info_dietary_desc: "O cóctel inclúe opcións para diferentes restricións alimentarias. Indique as súas necesidades específicas ao inscribirse.",
      
      // Event details cards
      detail_date_title: "📅 Data e Hora",
      detail_date_desc: "<strong>9 de novembro de 2026</strong><br>17:30 - 21:00 horas",
      detail_location_title: "📍 Ubicación",
      detail_location_desc: "<strong>Palacio da Ópera</strong><br>Glorieta América, S/n<br>15004 A Coruña, Galicia",
      detail_registration_title: "🎫 Inscrición",
      detail_registration_desc: "<strong>Gratuíto con inscrición previa</strong><br>Prazas limitadas<br>Data límite: 5 de novembro",
      detail_note_title: "📝 Nota Importante",
      detail_note_desc: "Recibirá un email de confirmación co programa detallado e as instrucións de acceso ao Palacio da Ópera.",
      
      // Cookie banner
      cookie_text: "Usamos cookies para mellorar a túa experiencia. Ao continuar navegando aceptas a nosa",
      cookie_policy: "Política de Cookies",
      cookie_accept: "Aceptar",
      
      // Registration success
      registration_success: "¡Inscrición realizada con éxito! Recibirá un email de confirmación en breve.",
      
      // Premio/Nominaciones page
      prize_2026_title: "Premios Liga Con Nós 2026",
      prize_page_intro: "A próxima edición dos Premios Liga Con Nós recoñecerá novamente a labor excepcional de profesionais, organizacións e persoas que contribúen significativamente a dar visibilidade e mellorar a atención das enfermidades reumáticas e musculoesqueléticas.",
      nominations_title: "Proceso de Nominacións",
      nominations_intro: "¿Coñeces a alguén que mereza ser recoñecido pola súa excepcional labor no ámbito das enfermidades reumáticas? Convidámoste a realizar unha nominación para os Premios Liga Con Nós 2026.",
      
      // Categories
      categories_title: "Categorías de Premios",
      category_medical_title: "🏥 Excelencia Médica",
      category_medical_desc: "Recoñecemento a profesionais médicos que destacaron pola súa labor asistencial, investigación ou innovación no tratamento de enfermidades reumáticas.",
      category_research_title: "🔬 Investigación Científica",
      category_research_desc: "Para investigadores que realizaron contribucións significativas ao coñecemento científico sobre patoloxías reumáticas e musculoesqueléticas.",
      category_communication_title: "📢 Comunicación e Divulgación",
      category_communication_desc: "Profesionais da comunicación, xornalistas e divulgadores que contribuíron a dar visibilidade a estas enfermidades.",
      category_institutions_title: "🏛️ Institucións e Organizacións",
      category_institutions_desc: "Entidades públicas ou privadas que desenvolveron programas ou iniciativas destacadas no ámbito reumático.",
      category_patients_title: "👥 Pacientes e Asociacións",
      category_patients_desc: "Pacientes activos e asociacións que traballaron para mellorar a calidade de vida das persoas afectadas.",
      
      // Nomination criteria
      criteria_title: "Criterios de Nominación",
      criteria_intro: "Para ser elixible aos Premios Liga Con Nós 2026, os candidatos deben cumprir cos seguintes criterios:",
      criteria_1: "Impacto demostrable na mellora da atención, tratamento ou comprensión das enfermidades reumáticas",
      criteria_2: "Labor desenvolvida durante os últimos 5 anos con resultados verificables",
      criteria_3: "Compromiso ético na súa práctica profesional ou activismo",
      criteria_4: "Contribución á visibilización das patoloxías reumáticas na sociedade",
      criteria_5: "Innovación en metodoloxías, tratamentos ou enfoques de atención",
      
      // Nomination process
      process_title: "Proceso de Nominación",
      process_step1_title: "1. Presentación de Candidaturas",
      process_step1_desc: "As nominacións poden ser presentadas por calquera persoa ou entidade a través do formulario oficial.",
      process_step2_title: "2. Evaluación por Comité",
      process_step2_desc: "Un comité de expertos evaluará todas as candidaturas segundo os criterios establecidos.",
      process_step3_title: "3. Selección de Finalistas",
      process_step3_desc: "Seleccionaranse os finalistas en cada categoría para a cerimonia de premiación.",
      process_step4_title: "4. Cerimonia de Entrega",
      process_step4_desc: "Os gañadores serán anunciados durante a cerimonia oficial o 9 de novembro de 2026.",
      
      // Important dates
      important_dates_title: "Datas Importantes",
      date_opening: "Apertura de nominacións: 1 de marzo de 2026",
      date_deadline: "Data límite de nominacións: 31 de xullo de 2026",
      date_evaluation: "Período de evaluación: agosto - outubro 2026",
      date_ceremony: "Cerimonia de premios: 9 de novembro de 2026",
      
      // Nomination form
      nomination_form_title: "Formulario de Nominación",
      nomination_form_intro: "Complete este formulario para nominar a un candidato para os Premios Liga Con Nós 2026. Toda a información proporcionada será tratada de forma confidencial.",
      form_nominator_info: "Información do Nominador",
      form_nominee_info: "Información do Nominado",
      form_nominee_name: "Nome completo do nominado *",
      form_nominee_position: "Cargo/Posición",
      form_nominee_organization: "Organización/Institución",
      form_nominee_email: "Email do nominado",
      form_nominee_phone: "Teléfono do nominado",
      form_category: "Categoría do premio *",
      form_category_select: "Selecciona unha categoría",
      form_justification: "Xustificación da nominación *",
      form_justification_placeholder: "Explique detalladamente por que considera que este candidato merece o premio (máximo 1000 palabras)",
      form_achievements: "Logros e contribucións específicas",
      form_achievements_placeholder: "Describa os logros máis relevantes do nominado nos últimos 5 anos",
      form_impact: "Impacto na comunidade reumática",
      form_impact_placeholder: "Describa o impacto específico do traballo do nominado en pacientes, profesionais ou a sociedade en xeral",
      form_supporting_docs: "Documentos de apoio (opcional)",
      form_supporting_docs_desc: "Pode adxuntar CV, artigos, certificados ou outros documentos que respalden a nominación",
      form_consent: "Confirmo que teño o consentimento do nominado para presentar esta candidatura *",
      form_submit_nomination: "Enviar Nominación",
      
      // Success messages
      nomination_success: "¡Nominación enviada exitosamente! Recibirá confirmación por email nas próximas 24 horas.",
      
      // Previous winners section
      previous_winners_title: "Gañadores Anteriores",
      view_previous_btn: "Ver Gañadores 2024"
    },
    
    en: {
      // Header
      title: "Liga Con Nós Awards",
      subtitle: "Biannual awards that give visibility to rheumatic pathologies",
      nav_home: "HOME",
      nav_premio: "2026 AWARDS",
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
      event_date: "November 9, 2026",
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
      winners_2026_title: "People and Entities Awarded in 2026",
      more_info: "More information +",
      less_info: "Less information -",
      
      // Program page
      program_page_title: "Event Program",
      program_page_intro: "The Liga Con Nós Awards 2026 ceremony will take place on <strong>November 9</strong> at the Opera Palace in A Coruña. We invite you to learn about the complete program of activities we have prepared for this special occasion.",
      schedule_title: "Schedule of Activities",
      
      // Program specific translations
      program_highlights_title: "Program Highlights",
      important_info_title: "Important Information for Attendees",
      registration_section_title: "Event Registration",
      registration_form_title: "Registration Form",
      registration_intro: "To attend the Liga Con Nós Awards 2026, please complete the following form. You will receive email confirmation with all the details.",
      event_details_title_program: "Event Details",
      
      // Program form fields
      form_attendees: "Number of companions",
      form_attendees_0: "Just me",
      form_attendees_1: "1 companion",
      form_attendees_2: "2 companions",
      form_attendees_3: "3 companions",
      form_dietary: "Dietary restrictions",
      form_dietary_placeholder: "Indicate any allergies or dietary restrictions",
      form_accessibility: "Special accessibility needs",
      form_accessibility_placeholder: "Describe any assistance you require",
      form_register_submit: "Register for Event",
      
      // Program cards and highlights
      highlight_exceptional_title: "Exceptional Award Winners",
      highlight_exceptional_desc: "Recognition to professionals, organizations and people who have contributed significantly to the visibility and treatment of rheumatic diseases.",
      highlight_experts_title: "Expert Panel",
      highlight_experts_desc: "Discussion panel with renowned specialists who will share the latest advances in research and treatment of rheumatic pathologies.",
      highlight_networking_title: "Professional Networking",
      highlight_networking_desc: "Unique opportunities to establish contacts with sector professionals, researchers, patients and institutional representatives.",
      highlight_media_title: "Media Coverage",
      highlight_media_desc: "The event will have coverage from specialized and local media, amplifying the awareness message about rheumatic diseases.",
      highlight_venue_title: "Emblematic Location",
      highlight_venue_desc: "The Opera Palace of A Coruña provides an incomparable setting for this celebration of excellence in the rheumatic field.",
      highlight_gastronomy_title: "Galician Gastronomy",
      highlight_gastronomy_desc: "The closing cocktail will include a selection of typical Galician gastronomic products, also celebrating our local culture.",
      
      // Important info cards
      info_registration_title: "🎫 Registration",
      info_registration_desc: "The event is free but requires prior registration. Places are limited. Register through the contact form before November 5th.",
      info_dress_title: "👔 Dress Code",
      info_dress_desc: "Formal or semi-formal attire is recommended. The event has a solemn character of professional recognition.",
      info_parking_title: "🅿️ Parking",
      info_parking_desc: "Limited parking around the Opera Palace. Public transport is recommended or arrive early.",
      info_accessibility_title: "♿ Accessibility",
      info_accessibility_desc: "The Opera Palace has accessible facilities. If you require special assistance, please indicate it when registering.",
      info_connectivity_title: "📱 Connectivity",
      info_connectivity_desc: "Free WiFi available. Sharing on social media using the hashtag #PremiosLigaConNos2026 will be encouraged.",
      info_dietary_title: "🍫 Dietary Considerations",
      info_dietary_desc: "The cocktail includes options for different dietary restrictions. Indicate your specific needs when registering.",
      
      // Event details cards
      detail_date_title: "📅 Date and Time",
      detail_date_desc: "<strong>November 9, 2026</strong><br>5:30 PM - 9:00 PM",
      detail_location_title: "📍 Location",
      detail_location_desc: "<strong>Opera Palace</strong><br>Glorieta América, S/n<br>15004 A Coruña, Galicia",
      detail_registration_title: "🎫 Registration",
      detail_registration_desc: "<strong>Free with prior registration</strong><br>Limited places<br>Deadline: November 5th",
      detail_note_title: "📝 Important Note",
      detail_note_desc: "You will receive a confirmation email with the detailed program and access instructions to the Opera Palace.",
      
      // Cookie banner
      cookie_text: "We use cookies to improve your experience. By continuing to browse you accept our",
      cookie_policy: "Cookie Policy",
      cookie_accept: "Accept",
      
      // Registration success
      registration_success: "Registration successful! You will receive a confirmation email shortly.",
      
      // Premio/Nominaciones page
      prize_2026_title: "Liga Con Nós Awards 2026",
      prize_page_intro: "The next edition of the Liga Con Nós Awards will once again recognize the exceptional work of professionals, organizations and people who contribute significantly to giving visibility and improving care for rheumatic and musculoskeletal diseases.",
      nominations_title: "Nomination Process",
      nominations_intro: "Do you know someone who deserves to be recognized for their exceptional work in the field of rheumatic diseases? We invite you to make a nomination for the Liga Con Nós Awards 2026.",
      
      // Categories
      categories_title: "Award Categories",
      category_medical_title: "🏥 Medical Excellence",
      category_medical_desc: "Recognition to medical professionals who have excelled in their healthcare work, research or innovation in the treatment of rheumatic diseases.",
      category_research_title: "🔬 Scientific Research",
      category_research_desc: "For researchers who have made significant contributions to scientific knowledge about rheumatic and musculoskeletal pathologies.",
      category_communication_title: "📢 Communication and Outreach",
      category_communication_desc: "Communication professionals, journalists and disseminators who have contributed to giving visibility to these diseases.",
      category_institutions_title: "🏛️ Institutions and Organizations",
      category_institutions_desc: "Public or private entities that have developed outstanding programs or initiatives in the rheumatic field.",
      category_patients_title: "👥 Patients and Associations",
      category_patients_desc: "Active patients and associations that have worked to improve the quality of life of affected people.",
      
      // Nomination criteria
      criteria_title: "Nomination Criteria",
      criteria_intro: "To be eligible for the Liga Con Nós Awards 2026, candidates must meet the following criteria:",
      criteria_1: "Demonstrable impact on improving care, treatment or understanding of rheumatic diseases",
      criteria_2: "Work developed during the last 5 years with verifiable results",
      criteria_3: "Ethical commitment in their professional practice or activism",
      criteria_4: "Contribution to the visibility of rheumatic pathologies in society",
      criteria_5: "Innovation in methodologies, treatments or care approaches",
      
      // Nomination process
      process_title: "Nomination Process",
      process_step1_title: "1. Submission of Applications",
      process_step1_desc: "Nominations can be submitted by any person or entity through the official form.",
      process_step2_title: "2. Committee Evaluation",
      process_step2_desc: "A committee of experts will evaluate all applications according to established criteria.",
      process_step3_title: "3. Finalist Selection",
      process_step3_desc: "Finalists will be selected in each category for the awards ceremony.",
      process_step4_title: "4. Award Ceremony",
      process_step4_desc: "Winners will be announced during the official ceremony on November 9, 2026.",
      
      // Important dates
      important_dates_title: "Important Dates",
      date_opening: "Nominations opening: March 1, 2026",
      date_deadline: "Nominations deadline: July 31, 2026",
      date_evaluation: "Evaluation period: August - October 2026",
      date_ceremony: "Awards ceremony: November 9, 2026",
      
      // Nomination form
      nomination_form_title: "Nomination Form",
      nomination_form_intro: "Complete this form to nominate a candidate for the Liga Con Nós Awards 2026. All information provided will be treated confidentially.",
      form_nominator_info: "Nominator Information",
      form_nominee_info: "Nominee Information",
      form_nominee_name: "Full name of nominee *",
      form_nominee_position: "Position/Title",
      form_nominee_organization: "Organization/Institution",
      form_nominee_email: "Nominee email",
      form_nominee_phone: "Nominee phone",
      form_category: "Award category *",
      form_category_select: "Select a category",
      form_justification: "Nomination justification *",
      form_justification_placeholder: "Explain in detail why you believe this candidate deserves the award (maximum 1000 words)",
      form_achievements: "Specific achievements and contributions",
      form_achievements_placeholder: "Describe the most relevant achievements of the nominee in the last 5 years",
      form_impact: "Impact on the rheumatic community",
      form_impact_placeholder: "Describe the specific impact of the nominee's work on patients, professionals or society in general",
      form_supporting_docs: "Supporting documents (optional)",
      form_supporting_docs_desc: "You may attach CV, articles, certificates or other documents that support the nomination",
      form_consent: "I confirm that I have the nominee's consent to submit this application *",
      form_submit_nomination: "Submit Nomination",
      
      // Success messages
      nomination_success: "Nomination submitted successfully! You will receive email confirmation within the next 24 hours.",
      
      // Previous winners section
      previous_winners_title: "Previous Winners",
      view_previous_btn: "View 2024 Winners"
    }
  };
  
  // Función para obtener las traducciones del idioma actual
  function getTranslations(lang) {
    return translations[lang] || translations.es;
  }