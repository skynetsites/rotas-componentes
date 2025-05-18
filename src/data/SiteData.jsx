// Dados objetos do Site
const SiteData = {
  // Informações do Site
  siteinfo: {
    name: "Skynet React",
    description: "Temos o compromisso é desenvolver produtos acessíveis e de forma inclusiva e eficiente.",
    icon: "ti ti-brand-react",
    user: {
      name: "Isaias Oliveira",
      username: "isaiasoliveira",
      link: "/user/123",
      icon: "pi pi-user",
      avatar: "https://avatars.githubusercontent.com/u/4692453?v=4",
      btnin: {
        class: "bg-blue-600",
        icon: "pi pi-ellipsis-v",
      },
      btnout: {
        class: "bg-blue-600 border-0",
        icon: "pi pi-sign-out",
      },
    },
    menu: [
      { name: "Home", link: "/", icon: "pi pi-home" },
      { name: "Sobre", link: "/about", icon: "pi pi-info-circle" },
      { name: "Contato", link: "/contact", icon: "pi pi-envelope" },
    ],
    social: [
      { icon: "pi pi-facebook", label: "Facebook", link: "https://www.facebook.com/skynetsites" },
      { icon: "pi pi-instagram", label: "Instagram", link: "https://www.instagram.com/skynetsites" },
      { icon: "pi pi-twitter", label: "Twitter", link: "https://x.com/skynetsites" },
      { icon: "pi pi-linkedin", label: "Linkedin", link: "https://www.linkedin.com/in/skynetsites" },
    ],
  },

  // Página Inicial
  home: {
    title: "Bem-vindo à Skynet React",
    description:
      "Nós somos movidos pela paixão de transformar ideias em experiências visuais. A web é um espaço de infinitas possibilidades, e é a motivação que nos impulsiona a criar soluções inovadoras, funcionais e digitais.",
    button: [
      {
        link: "/about",
        label: "Saiba Mais",
        icon: "pi pi-info-circle",
        class: "p-button-raised",
      },
      {
        link: "/contact",
        label: "Entre em Contato",
        icon: "pi pi-envelope",
        class: "p-button-outlined",
      },
    ],
    resources: {
      title: "Recursos",
      resource: [
        {
          icon: "ti ti-brand-react",
          title: "React",
          description: "É uma biblioteca Front-end em JavaScript de código aberto com foco na criação de interfaces de usuário eficientes e reutilizáveis.",
        },
        {
          icon: "ti ti-brand-vite",
          title: "Vite Contributors",
          description: "É uma ferramenta de construção para criação rápida e enxuta de projetos web modernos.",
        },
        {
          icon: "pi pi-prime",
          title: "PrimeReact / Flex",
          description: "São bibliotecas com dezenas de componentes e utilitários CSS Flexbox para criar layouts responsivos com agilidade.",
        },
        {
          icon: "ti ti-code",
          title: "Styled Components",
          description: "Estilização com CSS-in-JS para componentes isolados e manutenção simplificada.",
        },
        {
          icon: "ti ti-grain",
          title: "React Router",
          description: "Gerencia a navegação entre páginas em aplicações React de forma declarativa e intuitiva.",
        },
        {
          icon: "pi pi-github",
          title: "GitHub e Git",
          description: "Ferramentas essenciais de versionamento e colaboração para controle de código-fonte e desenvolvimento em equipe.",
        },
      ],
    },
  },

  // Página Sobre
  aboutus: {
    title: "Sobre Nós",
    subtitle: "Conheça mais sobre nossa empresa e a equipe por trás da Skynet React.",
    ourhistory: {
      title: "Nossa História",
      description: [
        "Fundada em 2020, a Skynet React surgiu do desejo de transformar a forma como as pessoas interagem com a tecnologia. Nascemos com o propósito de criar soluções web modernas, acessíveis e de alto desempenho, sempre alinhadas às necessidades reais dos usuários.",
        "Acreditamos que a inovação só faz sentido quando promove experiências digitais intuitivas, eficientes e inclusivas.</p><p>Desde então, temos atuado como parceiros estratégicos de empresas de diversos setores e startups em crescimento, contribuindo ativamente para a concretização de ideias em produtos digitais robustos e escaláveis.",
        "Nosso time multidisciplinar alia conhecimento técnico, sensibilidade estética e metodologias ágeis para entregar soluções sob medida, que realmente agregam valor ao negócio do cliente.",
        "Ao longo de nossa trajetória, construímos uma reputação sólida baseada na excelência, no foco no usuário e na busca constante por inovação. Esse compromisso nos posiciona como referência no desenvolvimento de aplicações web.",
      ],
    },
    ourvalues: {
      title: "Nossos Valores",
      description: "Na Skynet React, estamos em constante evolução, sempre em busca das mais avançadas tecnologias, metodologias inovadoras e abordagens criativas. Nosso compromisso é entregar soluções digitais modernas, eficientes e alinhadas com as reais necessidades dos nossos clientes. Combinamos expertise técnica, visão estratégica e paixão por inovação para desenvolver produtos que não apenas acompanham as tendências do mercado, mas que também geram valor duradouro e impactam positivamente os negócios.",
      values: [
        {
          title: "Inovação",
          description: "Buscamos novas tecnologias, métodos e ideias criativas para entregar soluções digitais modernas e relevantes para o mercado.",
        },
        {
          title: "Qualidade",
          description: "Prezamos pela excelência técnica e tecnológica. Garantimos desempenho e ótima experiência em nossos produtos e serviços.",
        },
        {
          title: "Colaboração",
          description: "Acreditamos que os melhores resultados surgem do trabalho em equipe, da colaboração e uma parceria sólida com nossos clientes.",
        },
      ],
    },
  },

  // Página Contato
  contact: {
    title: "Entre em Contato",
    description: "Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e entraremos em contato em breve!",
    info: {
      address: {
        icon: "pi pi-map-marker",
        title: "Endereço",
        detail: "Rua Maria Júlia, s/n - Bom Jardim, Fortaleza - CE",
      },
      email: {
        icon: "pi pi-envelope",
        title: "E-mail",
        detail: "isaiaswebnet@gmail.com",
      },
      phone: {
        icon: "pi pi-phone",
        title: "Telefone",
        detail: "(85) 98689-1116",
      },
    },
    social: {
      title: "Redes Sociais",
    },
  },

  // Página não Encontrada
  notfound: {
    title: "Página não Encontrada",
    description: "A página que você está procurando não existe ou foi movida. Verifique o URL ou retorne para a página inicial.",
    button: [
      {
        link: "/",
        label: "Voltar para Home",
        icon: "pi pi-arrow-left",
        class: "p-button-raised",
      },
      {
        link: "/contact",
        label: "Entre em Contato",
        icon: "pi pi-envelope",
        class: "p-button-outlined",
      },
    ],
  },

  // Página em Construção
  underconst: {
    title: "Página em Construção",
    description: "Esta funcionalidade ainda está em desenvolvimento.",
    button: [
      {
        link: "/",
        label: "Ir para Home",
        icon: "pi pi-home",
        severity: "",
        class: "p-button-raised",
      },
      {
        link: "/contact",
        label: "Entre em Contato",
        icon: "pi pi-envelope",
        class: "p-button-outlined",
      },
    ],
  },

  // SideBar do Perfil
  usersidebar: {
    favorites: {
      title: "Favoritos",
      menu: [
        { name: "Painel", icon: "pi pi-home", link: "/dashboard" },
        { name: "Marcadores", icon: "pi pi-bookmark", link: "/bookmarks" },
        { name: "Relatórios", icon: "pi pi-chart-line", link: "/reports" },
        { name: "Equipe", icon: "pi pi-users", link: "/team" },
        {
          name: "Mensagens",
          icon: "pi pi-comments",
          link: "/messages",
          badge: 3,
        },
      ],
    },
    application: {
      title: "Aplicativo",
      menu: [
        { name: "Projetos", icon: "pi pi-folder", link: "/projects" },
        { name: "Análises", icon: "pi pi-chart-bar", link: "/analytics" },
        { name: "Tarefas", icon: "pi pi-check-square", link: "/tasks" },
        { name: "Calendário", icon: "pi pi-calendar", link: "/calendar" },
        { name: "Ferramentas", icon: "pi pi-wrench", link: "/tools" },
      ],
    },
    account: {
      title: "Conta",
      menu: [
        { name: "Perfil", icon: "pi pi-user", link: "/profile" },
        { name: "Segurança", icon: "pi pi-shield", link: "/security" },
        { name: "Faturamento", icon: "pi pi-credit-card", link: "/billing" },
        { name: "Preferências", icon: "pi pi-sliders-h", link: "/preferences" },
        { name: "Configurações", icon: "pi pi-cog", link: "/settings" },
      ],
    },
  },

  // Usuário Específico
  specificUser: {
    id: "123",
    name: "Isaias Oliveira",
    username: "isaiasoliveira",
    badge: "20",
    contacts: {
      email: "isaiaswebnet@gmail.com",
      phone: "(85) 98689-1116",
      github: "github.com/skynetsites",
    },
    role: "Sou Desenvolvedor Front-end e Back-end na Agência Skynet Sites, onde atuo no planejamento, desenvolvimento e manutenção de soluções digitais modernas e responsivas. Paralelamente, exerço o cargo de Coordenador Técnico na empresa Matuto da Praia, liderando equipes e projetos voltados para inovação tecnológica e transformação digital.",
    location: "Fortaleza, Ceará",
    bio: [
      "Desenvolvedor apaixonado por React e por todo o ecossistema de tecnologias web modernas, atuo com foco em criar interfaces interativas, escaláveis e de alta performance. Tenho experiência na construção de aplicações responsivas que unem eficiência técnica e boas práticas de desenvolvimento, sempre buscando a melhor experiência para o usuário final.",
      "Além disso, sou um entusiasta de UI/UX e contribuidor ativo em projetos open source, onde colaboro com comunidades e compartilho conhecimento. Acredito no poder da colaboração e da melhoria contínua como pilares para evoluir como profissional e impactar positivamente o ambiente digital.",
      "Estou sempre em busca de novos desafios que me permitam crescer tecnicamente e colaborar com equipes criativas e engajadas. Meu objetivo é desenvolver soluções que não apenas funcionem bem, mas que encantem, comuniquem e façam a diferença na vida das pessoas.",
    ],
    avatar: "https://avatars.githubusercontent.com/u/4692453?v=4",
    stats: {
      posts: 42,
      followers: 1024,
      following: 256,
    },
    skills: [
      { 
        icon: "ti ti-brand-react",
        name: "React", 
        color: "", 
      },
      { 
        icon: "ti ti-brand-javascript",
        name: "JavaScript", 
        color: "success",  
      },
      { 
        icon: "ti ti-brand-css3", 
        name: "CSS", 
        color: "info", 
      },
      { 
        icon: "ti ti-brand-html5", 
        color: "warning", 
        name: "HTML", 
      },
      { 
        icon: "ti ti-brand-nodejs",
        name: "Node.js", 
        color: "danger",  
      },
      { 
        icon: "ti ti-brand-github", 
        name: "GitHub e Git",
        color: "#662785", 
      },
    ],
    projects: [
      {
        name: "TutorMaq",
        description: "Um aplicativo onde você terá acesso aos vídeos e manuais em PDF de cada máquina.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Apache Cordova", "API REST", "WordPress"],
        link: "https://tutormaq.web.app",
      },,
      {
        name: "Rádio Miguell Ferreira",
        description: "Um aplicativo para os ouvintes da rádio para ouvir músicas pelo seu aparelho celular",
        technologies: ["HTML5", "CSS3", "JavaScript", "Apache Cordova", "Andoid"],
        link: "https://play.google.com/store/apps/details?id=com.miguellferreira.app",
      },
      {
        name: "Google Map Tab",
        description: "Um plugin que permite adicionar Google Maps em posts ou páginas usando um shortcode.",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "API Google", "WordPress"],
        link: "https://wordpress.com/plugins/google-map-tab",
      }
    ],
    activity: [
      "Atualizou uma novo versão para App TutorMaq App;",
      "Revisou os termos para App Rádio Miguell Ferreira;",
      "Criou uma nova versão do Plugin Google Map Tab.",
    ],
  },

  // Usuário Padrão
  defaultUser: {
    id: "000",
    name: "Usuário Padrão",
    username: "usuario_padrao",
    badge: "14",
    contacts: {
      email: "usuario@exemplo.com",
      phone: "(85) 98765-4321",
      github: "https://github.com/usuario_padrao",
      linkedin: "https://www.linkedin.com/in/usuario_padrao",
      portfolio: "https://usuario.design",
    },
    role: "Atuo como Desenvolvedor Frontend Júnior, contribuindo para a criação de interfaces modernas, responsivas e centradas na experiência do usuário. Com foco em tecnologias como HTML, CSS, JavaScript e frameworks como React, busco constantemente aprimorar minhas habilidades técnicas e eficientes.",
    location: "Fortaleza, CE, Brasil",
    bio: [
      "Sou desenvolvedor frontend apaixonado por criar interfaces intuitivas que proporcionam uma experiência fluida e agradável para o usuário. Acredito que um bom design começa pela empatia com quem está do outro lado da tela, e por isso busco entender a fundo os fluxos de navegação, aplicando soluções que tornem a interação simples, funcional e envolvente.",
      "Tenho especialização em React, uma das tecnologias que mais me identifico, pela sua flexibilidade, escalabilidade e forte comunidade. Utilizo esse framework para construir aplicações dinâmicas, eficientes e de fácil manutenção, sempre alinhado às boas práticas de desenvolvimento e princípios sólidos de UI/UX. Estou constantemente buscando novas formas de otimizar o código e manter uma base limpa, reutilizável e bem estruturada.",
      "Além da técnica, valorizo a performance e o design responsivo como pilares fundamentais de qualquer projeto frontend. Entendo que um bom desempenho não apenas melhora a experiência do usuário, mas também impacta diretamente nos resultados do negócio. Meu compromisso é entregar produtos digitais de alta qualidade, acessíveis em diferentes dispositivos e pensados para escalar de forma sustentável.",
    ],
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    stats: {
      posts: 28,
      followers: 240,
      following: 180,
      likes: 340,
      contributions: 95,
    },
    skills: [
      {
        icon: "ti ti-brand-react",
        name: "React",
        color: "",
      },
      {
        icon: "ti ti-brand-html5",
        name: "HTML5",
        color: "success",
      },
      {
        icon: "ti ti-brand-css3",
        name: "CSS3",
        color: "info",
      },
      {
        icon: "ti ti-brand-nodejs",
        name: "Node.js",
        color: "danger",
      },
      {
        icon: "ti ti-chart-area-line",
        name: "Chart.js",
        color: "warning",
      },
      {
        icon: "ti ti-brand-github",
        name: "GitHub e Git",
        color: "#662785",
      },
    ],
    projects: [
      {
        name: "Portfólio Pessoal",
        description: "Aplicação web desenvolvida com React e styled-components, com foco em design responsivo, responsividade e usabilidade.",
        technologies: ["React", "styled-components", "Vite", "Netlify"],
        link: "https://usuariopadrao.com/portfolio",
      },
      {
        name: "Clima Fortaleza App",
        description: "Aplicativo interativo de previsão do tempo construído com React, utilizando Hooks para gerenciamento de estado e efeitos.",
        technologies: ["React", "Axios", "API REST"],
        link: "https://github.com/usuario_padrao/clima-app",
      },
      {
        id: 3,
        name: "Dashboard Administrativo",
        description: "Sistema de dashboard desenvolvido com React, React Router e Chart.js, permitindo a visualização clara e dinâmica de dados.",
        technologies: ["React", "Chart.js", "React Router", "SASS"],
        link: "https://github.com/usuario_padrao/dashboard-admin",
      },
    ],
    activity: [
      "Publicou um artigo sobre otimização de performance em React;",
      "Comentou em 'Melhores práticas com hooks;",
      "Atualizou o projeto Clima Fortaleza App.",
    ],
  },
};

export default SiteData;
