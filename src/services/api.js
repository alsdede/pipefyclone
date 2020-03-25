export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          },
          {
            id: 2,
            content: 'Recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          },
          {
            id: 4,
            content: 'Estudar NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          },
          {
            id: 5,
            content: 'Estudar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Estudar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          },
          {
            id: 8,
            content: 'Estudar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://media-exp1.licdn.com/dms/image/C4D03AQECooHSqhsAHQ/profile-displayphoto-shrink_100_100/0?e=1590624000&v=beta&t=-_WbkadYlqGirGyn0g_d5g_IXMSXr2cH5pos-4FQcpk'
          },
          {
            id: 9,
            content: 'Estudar biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Estudar  sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Estudar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Estudar aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }