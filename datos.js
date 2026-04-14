// ═══════════════════════════════════════════════════════════════
//  datos.js — SinergIA Diagnóstico v3.0
//  Compartido entre diagnostico.html e historial.html
// ═══════════════════════════════════════════════════════════════

const SECTIONS = [
  {
    id:'costos', label:'Control de costos', weight:18,
    color:'#4C1D95', fill:'#EDE9FE', pillBg:'#EDE9FE', pillColor:'#3C3489',
    pill:'Sección 1 de 8 · 18% del diagnóstico',
    title:'Control de costos y presupuesto de obra',
    sub:'Cómo comparan el costo real contra el presupuesto aprobado y calculan indicadores de valor ganado durante la ejecución.',
    questions:[
      { text:'¿Cómo llevan el control del costo real versus el presupuesto por rubro de obra?',
        opts:['No lo llevamos activamente — solo vemos el total cuando el proyecto termina','Excel manual que alguien actualiza cada semana o quincena con los datos que llegan','Sistema que existe pero los datos del campo llegan con uno o dos semanas de retraso','Sistema actualizado en tiempo real directamente desde el campo sin intermediarios'] },
      { text:'¿Cuándo se enteran normalmente de que un rubro específico está superando el presupuesto?',
        opts:['Cuando ya se gastó todo o cuando hay una deuda impaga con el proveedor','En la reunión mensual cuando el contador cierra el mes y presenta los números','Semanalmente al revisar la planilla de costos, pero el proceso toma varias horas','Recibimos una alerta automática antes de que el sobrecosto supere el umbral definido'] },
      { text:'¿Calculan indicadores de Valor Ganado — CPI, SPI, EAC — en sus proyectos activos?',
        opts:['No conocemos esa metodología — nunca la hemos aplicado en nuestra empresa','La conocemos pero no la calculamos porque toma demasiado tiempo hacerlo manualmente','La calculamos para algunos proyectos o solo en ciertos meses del año','Se calcula automáticamente para todos los proyectos y está visible en el dashboard'] },
      { text:'¿Tienen visibilidad del costo final estimado (EAC) del proyecto mientras está en ejecución?',
        opts:['Solo cuando el proyecto está casi terminado o al cierre definitivo','Hacemos una estimación informal de vez en cuando, sin metodología consistente','Lo calculamos manualmente cada mes con los datos del sistema existente','El sistema lo actualiza automáticamente con cada reporte de avance del campo'] },
      { text:'¿Cómo controlan las órdenes de cambio y su impacto acumulado en el presupuesto total?',
        opts:['No se documentan formalmente — se acuerdan verbalmente o por WhatsApp','Se registran en Excel pero no siempre se actualizan a tiempo ni se consolidan','Proceso manual con formulario establecido, pero lento y con retrasos frecuentes','Proceso digital con aprobación formalizada y actualización automática del presupuesto'] },
    ]
  },
  {
    id:'cronograma', label:'Control de cronograma', weight:18,
    color:'#064E3B', fill:'#D1FAE5', pillBg:'#D1FAE5', pillColor:'#065F46',
    pill:'Sección 2 de 8 · 18% del diagnóstico',
    title:'Control de cronograma CPM y avance de obra',
    sub:'Cómo gestionan el cronograma base, calculan el camino crítico, manejan baselines múltiples y comparan el avance real contra el plan.',
    questions:[
      { text:'¿Cómo gestionan el cronograma base CPM aprobado del proyecto durante la ejecución?',
        opts:['No hay cronograma CPM formal — o existe pero nadie lo consulta ni actualiza','Existe en Excel o MS Project pero se actualiza esporádicamente, menos de una vez al mes','Se actualiza semanalmente por alguien del equipo técnico con datos del campo','Se actualiza con CPM activo: camino crítico, float y dependencias recalculados automáticamente'] },
      { text:'¿Calculan y monitorean el camino crítico y las holguras (float) de sus proyectos activos?',
        opts:['No usamos CPM ni calculamos camino crítico en nuestros proyectos de construcción','Identificamos la ruta crítica al inicio pero no la actualizamos durante la ejecución','Se revisa mensualmente de forma manual por el director de proyecto','El camino crítico y el float se recalculan automáticamente con cada actualización del campo'] },
      { text:'¿Gestionan múltiples baselines (líneas base) para comparar escenarios del cronograma?',
        opts:['Solo tenemos una línea base inicial que nunca actualizamos durante la obra','Guardamos versiones del cronograma pero no hacemos comparación formal de varianzas','Comparamos baseline original vs actual ocasionalmente, de forma manual','Gestionamos múltiples baselines con análisis de varianza automático por actividad'] },
      { text:'¿Cómo recibe el gerente de obra el reporte de avance físico diario desde el campo?',
        opts:['Llamada o WhatsApp al grupo sin ningún registro estructurado ni trazabilidad','WhatsApp al grupo pero nadie consolida la información de forma sistemática','El residente llena un parte o formulario físico o digital cada día','Bot o formulario digital que registra, estructura y consolida automáticamente en el sistema'] },
      { text:'¿Cuándo detectan normalmente que una actividad crítica está retrasada respecto al plan?',
        opts:['Cuando el cliente, el banco o el contratista menciona el retraso directamente','En la reunión semanal, cuando el retraso ya tiene días y es difícil recuperar','Al comparar manualmente el parte diario con el cronograma, proceso que toma horas','Alerta automática cuando el SPI baja del umbral, con días de anticipación para reaccionar'] },
    ]
  },
  {
    id:'lean', label:'Planificación Lean / LPS', weight:15,
    color:'#065F46', fill:'#ECFDF5', pillBg:'#ECFDF5', pillColor:'#064E3B',
    pill:'Sección 3 de 8 · 15% del diagnóstico',
    title:'Planificación Lean y Last Planner System',
    sub:'Uso de metodología Lean en obra: planificación colaborativa, porcentaje de plan completo (PPC), lookahead y eliminación de restricciones.',
    questions:[
      { text:'¿Utilizan Last Planner System (LPS) u otra metodología de planificación Lean en sus obras?',
        opts:['No conocemos o no usamos metodología Lean — planificamos solo con cronograma maestro','Conocemos LPS pero no lo aplicamos formalmente en campo; hacemos algo similar de forma intuitiva','Aplicamos LPS parcialmente en algunas obras o fases del proyecto','Usamos LPS con tableros de planificación semanales, lookahead de 6 semanas y registro de PPC'] },
      { text:'¿Calculan semanalmente el Porcentaje de Plan Completo (PPC) con su equipo de campo?',
        opts:['No calculamos PPC — no usamos esa métrica en nuestra gestión de obra','Sabemos que existe pero nunca lo hemos calculado de forma sistemática','Lo calculamos ocasionalmente pero no como proceso semanal establecido','El PPC se calcula automáticamente cada semana y se revisa en la reunión de obra del lunes'] },
      { text:'¿Tienen un proceso de lookahead (anticipación 3-6 semanas) para identificar y remover restricciones?',
        opts:['No tenemos proceso de lookahead — reaccionamos a los problemas cuando aparecen en campo','El residente piensa en lo que viene pero no hay un proceso formal ni documentado','Hacemos un lookahead informal de 2 semanas en las reuniones de coordinación de obra','Lookahead formal de 6 semanas con identificación y responsable de remoción de cada restricción'] },
      { text:'¿Documentan y analizan las causas raíz de los compromisos incumplidos en planificación semanal?',
        opts:['No documentamos por qué se incumplieron los compromisos de la semana anterior','Comentamos verbalmente en reunión las razones pero no queda registro estructurado','Llevamos un log de causas de incumplimiento pero sin análisis sistemático de patrones','Registro de causas raíz que se analiza mensualmente para mejorar la planificación futura'] },
    ]
  },
  {
    id:'riesgos', label:'Gestión de riesgos', weight:15,
    color:'#DC2626', fill:'#FEE2E2', pillBg:'#FEE2E2', pillColor:'#991B1B',
    pill:'Sección 4 de 8 · 15% del diagnóstico',
    title:'Gestión de riesgos del proyecto',
    sub:'Cómo identifican, analizan, cuantifican y responden a los riesgos que pueden afectar el costo y el cronograma de sus proyectos.',
    questions:[
      { text:'¿Tienen un registro formal de riesgos por proyecto, actualizado durante la ejecución?',
        opts:['No llevamos un registro de riesgos — los manejamos de forma reactiva cuando ocurren','Identificamos riesgos al inicio pero no los actualizamos ni hacemos seguimiento formal','Existe un registro pero se actualiza solo cuando ocurre un evento significativo','Registro de riesgos actualizado mensualmente con responsables asignados por riesgo'] },
      { text:'¿Analizan la probabilidad e impacto de cada riesgo identificado usando matrices formales?',
        opts:['No analizamos probabilidad ni impacto de los riesgos — todo es criterio del director','Clasificamos los riesgos informalmente como alto/medio/bajo sin metodología definida','Usamos matrices de probabilidad e impacto ocasionalmente para los proyectos más grandes','Análisis cualitativo con matrices P×I como parte del proceso estándar en todos los proyectos'] },
      { text:'¿Cuantifican el impacto de los riesgos en la fecha de término o el costo final del proyecto?',
        opts:['No cuantificamos el impacto monetario ni en plazo de los riesgos identificados','Hacemos estimaciones informales del impacto sin metodología probabilística','Calculamos un colchón de contingencia global sin asociarlo a riesgos específicos','Simulación cuantitativa que da rango probabilístico de costo y fecha de término'] },
      { text:'¿Tienen planes de respuesta establecidos — mitigación, contingencia — para los riesgos críticos?',
        opts:['No tenemos planes de respuesta — actuamos según criterio cuando el riesgo se materializa','Pensamos en respuestas pero no están documentadas ni asignadas a un responsable','Planes de respuesta documentados para los riesgos de mayor impacto en el proyecto','Planes pre y post-mitigación integrados al cronograma con actividades y responsables asignados'] },
    ]
  },
  {
    id:'recursos', label:'Gestión de recursos', weight:12,
    color:'#D97706', fill:'#FEF3C7', pillBg:'#FEF3C7', pillColor:'#92400E',
    pill:'Sección 5 de 8 · 12% del diagnóstico',
    title:'Gestión de recursos de obra',
    sub:'Cómo planifican, asignan y controlan la mano de obra, equipos y materiales, y si tienen visibilidad de la capacidad en múltiples proyectos.',
    questions:[
      { text:'¿Cómo planifican y controlan la mano de obra y equipos por actividad en sus proyectos?',
        opts:['Sin planificación formal de recursos — se asigna según disponibilidad en el momento','Planificamos recursos al inicio pero no hacemos seguimiento del rendimiento real vs plan','Controlamos la asignación de recursos semanalmente con ajuste manual al cronograma','Asignación de recursos por actividad en el cronograma con histogramas de carga actualizados'] },
      { text:'¿Tienen visibilidad de la capacidad de recursos disponibles en todos sus proyectos activos?',
        opts:['No — cada gerente de obra gestiona sus recursos de forma independiente y aislada','Coordinamos informalmente por teléfono cuando hay un conflicto de recursos entre proyectos','Revisión mensual manual de disponibilidad de recursos en la reunión de gerencia general','Dashboard de capacidad multi-proyecto que muestra sobre-asignación y disponibilidad en tiempo real'] },
      { text:'¿Realizan nivelación de recursos para evitar sobrecargas en períodos críticos de la obra?',
        opts:['No hacemos nivelación formal — el equipo trabaja más horas cuando hay sobrecarga','El director ajusta intuitivamente los cronogramas cuando ve que hay conflicto de recursos','Hacemos nivelación manual ocasionalmente para los recursos más críticos del proyecto','Nivelación automática de recursos multi-proyecto con análisis de capacidad y curvas de carga'] },
    ]
  },
  {
    id:'portafolio', label:'Portafolio y reportes', weight:10,
    color:'#1E40AF', fill:'#DBEAFE', pillBg:'#DBEAFE', pillColor:'#1E3A8A',
    pill:'Sección 6 de 8 · 10% del diagnóstico',
    title:'Visibilidad de portafolio y reportes ejecutivos',
    sub:'Cómo el directorio visualiza el estado de todos los proyectos, compara escenarios y toma decisiones de priorización con información actualizada.',
    questions:[
      { text:'¿Tiene el directorio una vista consolidada en tiempo real del estado de todos los proyectos activos?',
        opts:['No existe — cada gerente tiene sus propios archivos sin ninguna vista consolidada','Existe un Excel de portafolio que alguien actualiza manualmente cada mes','Existe en el ERP pero los datos no siempre reflejan la realidad actual del campo','Dashboard automático multi-proyecto actualizado con datos del campo, sin trabajo manual'] },
      { text:'¿Realizan análisis de escenarios (what-if) sobre costo, cronograma o recursos a nivel portafolio?',
        opts:['No hacemos análisis de escenarios — trabajamos con el plan aprobado hasta que cambia','Hacemos ejercicios informales de "qué pasaría si..." sin herramienta ni metodología formal','Modelamos 1 o 2 escenarios alternativos manualmente cuando hay una decisión crítica','Planificación de escenarios integrada: cambiamos supuestos y el sistema recalcula impactos'] },
      { text:'¿Tienen KPIs de desempeño definidos y visibles a nivel portafolio para la alta gerencia?',
        opts:['No hay KPIs formales de portafolio — las decisiones se basan en criterio del directorio','Tenemos algunos KPIs pero se calculan manualmente y llegan al directorio con retraso','KPIs definidos que se preparan mensualmente con datos del sistema existente','KPIs de portafolio calculados automáticamente y disponibles en dashboard ejecutivo en tiempo real'] },
      { text:'¿Cuánto tiempo toma preparar el informe semanal de avance de obra para el directorio?',
        opts:['No existe informe semanal — la información se da verbalmente cuando se pide','Más de 4 horas entre consolidar datos, redactar el documento y preparar presentaciones','Entre 1 y 4 horas si los datos ya están disponibles en el sistema de la empresa','Menos de 30 minutos o se genera completamente automático sin intervención del equipo'] },
    ]
  },
  {
    id:'comunicacion', label:'Comunicación y actas', weight:7,
    color:'#0D9488', fill:'#CCFBF1', pillBg:'#CCFBF1', pillColor:'#0F766E',
    pill:'Sección 7 de 8 · 7% del diagnóstico',
    title:'Comunicación, actas y colaboración del equipo',
    sub:'Cómo se generan las actas, se hace seguimiento a compromisos, y si el equipo de campo y oficina trabajan sobre datos sincronizados en tiempo real.',
    questions:[
      { text:'¿Cómo gestionan las actas de las reuniones de coordinación y obra actualmente?',
        opts:['No se hacen actas — o se hacen de forma muy ocasional e informal sin estructura','Alguien toma notas y las pasa a Word o correo, proceso que tarda 1 a 2 días','Hay un formato estándar que se completa manualmente después de cada reunión','Transcripción automática y acta estructurada generada en menos de 30 minutos con IA'] },
      { text:'¿El equipo de campo y el equipo de oficina trabajan sobre el mismo cronograma en tiempo real?',
        opts:['No — campo trabaja con copias físicas o impresiones; oficina actualiza su propio archivo','Enviamos el cronograma actualizado por email o WhatsApp cuando hay cambios importantes','El residente tiene acceso al sistema pero lo actualiza con demora, no en tiempo real','Sincronización instantánea campo-oficina — el residente actualiza desde móvil y el sistema refleja de inmediato'] },
      { text:'¿Cómo hacen seguimiento formal a los compromisos acordados en las reuniones de obra?',
        opts:['No hay seguimiento formal — los acuerdos quedan en la memoria de los participantes','Alguien revisa el correo o chat donde se mandó el acta de la reunión anterior','Lista en Excel o Notion que alguien mantiene actualizada cuando tiene tiempo','Sistema que notifica automáticamente al responsable antes del vencimiento de su compromiso'] },
    ]
  },
  {
    id:'herramientas', label:'Herramientas y adopción', weight:5,
    color:'#6D28D9', fill:'#EDE9FE', pillBg:'#EDE9FE', pillColor:'#4C1D95',
    pill:'Sección 8 de 8 · 5% del diagnóstico',
    title:'Herramientas digitales y capacidad de adopción',
    sub:'El estado actual de digitalización del equipo de proyectos y la capacidad de la organización para adoptar y sostener nuevas herramientas.',
    questions:[
      { text:'¿Qué herramientas digitales usa actualmente el equipo de proyectos para la gestión de obra?',
        opts:['Principalmente WhatsApp y Excel para absolutamente todo el control del proyecto','WhatsApp, Excel y algún software básico de presupuesto o contabilidad de proyectos','ERP o software de gestión de proyectos, pero sin integración real con el campo','Suite integrada donde los datos del campo llegan automáticamente al sistema del directorio'] },
      { text:'¿Usan aplicación móvil para que el equipo de campo actualice avance offline desde la obra?',
        opts:['No — toda actualización de campo pasa por llamada o mensaje y luego alguien la carga','El residente usa el celular para fotos o notas pero no hay app conectada al sistema central','Usamos formularios digitales (Google Forms, etc.) pero sin sincronización automática al sistema','App móvil nativa que funciona offline y sincroniza automáticamente al reconectarse al sistema'] },
      { text:'¿Pueden varios miembros del equipo trabajar simultáneamente sobre el mismo cronograma del proyecto?',
        opts:['No — solo una persona puede editar el archivo del cronograma a la vez (Excel/P6 local)','Compartimos el archivo en la nube pero si dos personas editan a la vez hay conflictos','Diferentes personas gestionan diferentes partes del cronograma con coordinación manual','Multi-usuario simultáneo sobre el mismo cronograma con discusiones y notificaciones integradas'] },
      { text:'¿Cuánto tiempo tarda su equipo en adoptar efectivamente una herramienta nueva de gestión?',
        opts:['Nunca las adoptan realmente — siempre vuelven al WhatsApp y el Excel conocidos','Entre 6 y 12 meses con resistencia significativa del equipo de campo y de obra','Entre 3 y 6 meses con capacitación intensiva, seguimiento y presión de la gerencia','Menos de 3 meses si la herramienta es práctica, intuitiva y resuelve un dolor real'] },
    ]
  },
];

const SPRINT_MAP = {
  costos:       { name:'Sprint CFO Construcción',     area:'Flujo de caja predictivo + alertas EVM automáticas',        hrs:'9–15 h/sem' },
  cronograma:   { name:'Sprint Gerente de Obra',      area:'Bot de campo + monitor EVM + cronograma CPM con IA',         hrs:'9–15 h/sem' },
  lean:         { name:'Sprint Planificación Lean',   area:'LPS digital + PPC automático + lookahead con IA',            hrs:'5–8 h/sem'  },
  riesgos:      { name:'Sprint Gestión de Riesgos',   area:'Registro de riesgos + análisis cuantitativo con IA',         hrs:'4–7 h/sem'  },
  recursos:     { name:'Sprint Recursos y Capacidad', area:'Histogramas automáticos + nivelación multi-proyecto con IA', hrs:'4–6 h/sem'  },
  portafolio:   { name:'Sprint Reportes y Portafolio',area:'Dashboard ejecutivo + reportes automáticos de portafolio',   hrs:'5–8 h/sem'  },
  comunicacion: { name:'Sprint Comunicación',         area:'Actas automáticas + sincronización campo-oficina en tiempo real', hrs:'4–7 h/sem' },
  herramientas: { name:'Sprint Transformación Digital',area:'App de campo + adopción de herramientas de gestión con IA', hrs:'6–10 h/sem' },
};
