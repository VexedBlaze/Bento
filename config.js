// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Alyaman',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Ohayou gozaimasu!',
  greetingAfternoon: 'Kon\'nichiwa,',
  greetingEvening: 'Konbanwa,',
  greetingNight: 'Oyasumi nasai!',

  // Weather
  weatherKey: '63383645b2ac94ac5534247c87ac9b5d', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  weatherLatitude: '34.4333',
  weatherLongitude: '35.85',
  language: 'en', // More languages in https://openweathermap.org/current#multi

  // trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '34.4333',
  defaultLongitude: '35.85',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Moodle',
      icon: 'book',
      link: 'https://moodle.bau.edu.lb',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '6',
      name: 'Outlook',
      icon: 'pen-tool',
      link: 'https://outlook.office.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'globe',
  secondListIcon: 'code',

  // Links
  lists: {
    firstList: [
      {
        name: 'NixOS Search',
        link: 'https://search.nixos.org/',
      },
      {
        name: 'HoYoLab',
        link: 'https://hoyolab.com/home',
      },
      {
        name: 'GitLab',
        link: 'https://gitlab.com',
      },
      {
        name: 'Iconnect',
        link: 'https://iconnect.bau.edu.lb',
      },
    ],
    secondList: [
      {
        name: 'Rust Book',
        link: 'https://doc.rust-lang.org/book/',
      },
      {
        name: 'Rust By Example',
        link: 'https://doc.rust-lang.org/rust-by-example/',
      },
      {
        name: 'Rust Cookbook',
        link: 'https://rust-lang-nursery.github.io/rust-cookbook/',
      },
      {
        name: 'CLI In Rust',
        link: 'https://rust-cli.github.io/book/',
      },
    ],
  },
};
