import { PosterItem, PricingPlan, FAQItem, DeviceInfo, PackageTier, DurationPack, ChannelItem } from '../types';

export const WHATSAPP_NUMBER = "447414662070"; // same line as beehoster.net
export const WHATSAPP_DISPLAY = "+44 7414 662070";

export const POSTER_ITEMS: PosterItem[] = [
  // Live Sports
  {
    id: 'mv-tt0111161',
    title: 'The Shawshank Redemption',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 9.3,
    year: '1994',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Condamné à perpétuité pour un meurtre qu’il n’a pas commis, un banquier noue une amitié improbable et prépare patiemment sa liberté.',
    genre: ['Drame']
  },
  {
    id: 'mv-tt0068646',
    title: 'The Godfather',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 9.2,
    year: '1972',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNmExZDQzMmMtZThkOS00NTlmLWJhOWMtMDQ5MmY5ZDcwNmQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Le patriarche vieillissant d’une dynastie criminelle new-yorkaise transmet son empire à un fils qui n’en voulait pas.',
    genre: ['Policier', 'Drame']
  },
  {
    id: 'mv-tt0468569',
    title: 'The Dark Knight',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 9.1,
    year: '2008',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Batman affronte le Joker, un anarchiste sans autre projet que le chaos, dans un duel qui pousse Gotham à bout.',
    genre: ['Policier', 'Thriller']
  },
  {
    id: 'mv-tt0071562',
    title: 'The Godfather Part II',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 9.0,
    year: '1974',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjgzY2JiOGItYzY0ZS00MGFjLTgwNzctNjkwMmNkNjhjNWE5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Michael Corleone resserre son emprise sur les affaires familiales, tandis que le jeune Vito s’élève dans le New York des années 1920.',
    genre: ['Policier', 'Drame']
  },
  {
    id: 'mv-tt0167260',
    title: 'The Lord of the Rings: The Return of the King',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 9.0,
    year: '2003',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzBiOGYzYzYtYmQyMi00ZGI0LWE4NTUtMDM3NmEzMGEzM2I4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Gandalf et Aragorn mènent l’ultime résistance contre Sauron pendant que Frodon et Sam portent l’Anneau jusqu’à la Montagne du Destin.',
    genre: ['Aventure', 'Drame', 'Fantastique']
  },
  {
    id: 'mv-tt0050083',
    title: '12 Angry Men',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 9.0,
    year: '1957',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGFmOTdhN2MtNTM2NS00YjE3LWI3ODMtMmYxYzBjMjQ3Mjg0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un juré refuse de condamner sans débattre, et la salle de délibération se transforme en bataille autour du doute raisonnable.',
    genre: ['Policier', 'Drame']
  },
  {
    id: 'mv-tt0108052',
    title: "Schindler's List",
    category: 'movies',
    categoryLabel: 'Films',
    rating: 9.0,
    year: '1993',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNTQ5NmE4MjctYzQ1MS00YjlkLTg4ZDItMjY1OTI0MTBjZWZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un industriel allemand transforme son usine en refuge et sauve plus de mille Juifs de la Shoah.',
    genre: ['Biographie', 'Drame', 'Histoire']
  },
  {
    id: 'mv-tt0120737',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.9,
    year: '2001',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un hobbit hérite d’un anneau au pouvoir terrible et part avec huit compagnons pour le détruire.',
    genre: ['Aventure', 'Drame', 'Fantastique']
  },
  {
    id: 'mv-tt0110912',
    title: 'Pulp Fiction',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.8,
    year: '1994',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOWM4Nzg5YjgtOGJmNi00NDIyLThjYjAtMDI0ZDFkYzdjMDM5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Deux tueurs à gages, un boxeur et la femme d’un gangster se croisent dans quelques récits de Los Angeles racontés dans le désordre.',
    genre: ['Policier', 'Drame']
  },
  {
    id: 'mv-tt0060196',
    title: 'The Good, the Bad and the Ugly',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.8,
    year: '1966',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTk0MzQwNDE4Ml5BMl5BanBnXkFtZTgwODQ4ODE5MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Trois hors-la-loi se disputent un trésor confédéré enfoui, sur fond de guerre de Sécession.',
    genre: ['Aventure', 'Drame', 'Western']
  },
  {
    id: 'mv-tt0167261',
    title: 'The Lord of the Rings: The Two Towers',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.8,
    year: '2002',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDVhZDJmYTMtNjJhMi00ZmNiLWFiMjUtMGZiOGZlNGFkNzNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Communauté brisée combat sur plusieurs fronts tandis que le Rohan résiste au Gouffre de Helm.',
    genre: ['Aventure', 'Drame', 'Fantastique']
  },
  {
    id: 'mv-tt0109830',
    title: 'Forrest Gump',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.8,
    year: '1994',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzZhZTZlMmItNDQ1Yi00NDFlLTlmMGUtNGY2YjkyMWUzZTNiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un homme au grand cœur traverse trente ans d’histoire américaine sans jamais oublier Jenny.',
    genre: ['Drame', 'Romance']
  },
  {
    id: 'mv-tt0137523',
    title: 'Fight Club',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.8,
    year: '1999',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDNkMzU0MzktNDc0Ny00MDE3LWFlZWEtNTQzYTdiYmFiZWUzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un employé insomniaque et un vendeur de savon fondent un club de combat qui leur échappe très vite.',
    genre: ['Policier', 'Drame', 'Thriller']
  },
  {
    id: 'mv-tt1375666',
    title: 'Inception',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.8,
    year: '2010',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDZkNjdmNDAtMTJjNS00OTA3LWIwM2UtMzNhOGFlYTM0NGU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un voleur de secrets dans les rêves se voit offrir une seconde vie s’il parvient à implanter une idée au lieu d’en dérober une.',
    genre: ['Aventure', 'SF', 'Thriller']
  },
  {
    id: 'mv-tt0080684',
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.7,
    year: '1980',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDZiNGFjNzUtNWE0MC00Y2FkLWIwMTMtZmVlZjg0MjMzNGQxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Rébellion se disperse après une lourde défaite : Luke s’entraîne auprès de Yoda pendant que Vador se rapproche.',
    genre: ['Aventure', 'Fantastique', 'SF']
  },
  {
    id: 'mv-tt0133093',
    title: 'The Matrix',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.7,
    year: '1999',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDlkMmZlNTktNDgwZC00MDA4LWE2MWUtNjBhMTY1ODUwMDBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un hacker découvre que son monde est une simulation et rejoint la lutte pour libérer l’humanité des machines.',
    genre: ['Action', 'SF']
  },
  {
    id: 'mv-tt0816692',
    title: 'Interstellar',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.7,
    year: '2014',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOGZhOGMwNTMtNDIyMS00MGI2LWJkYmYtMjA1YjQwNTBmODZlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Terre se meurt : un ancien pilote quitte ses enfants et franchit un trou de ver pour trouver un nouveau monde.',
    genre: ['Aventure', 'Drame', 'SF']
  },
  {
    id: 'mv-tt0099685',
    title: 'GoodFellas',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.7,
    year: '1990',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOWM2MDIzYjEtNWViYS00NDNkLThmYjItMzg0NWE5MmE1MzA4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Trente ans dans la mafia, de l’ivresse d’en être à la paranoïa qui emporte tout.',
    genre: ['Biographie', 'Policier', 'Drame']
  },
  {
    id: 'mv-tt0073486',
    title: "One Flew Over the Cuckoo's Nest",
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.6,
    year: '1975',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjZiOTkxZWMtMDk4My00YjEyLWIyNTItNTA0MDRkMjBmMDFlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un détenu simule la folie pour purger sa peine en hôpital psychiatrique et se heurte à l’infirmière Ratched.',
    genre: ['Drame']
  },
  {
    id: 'mv-tt0114369',
    title: 'Se7en',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.6,
    year: '1995',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjE0MmVmM2YtMDM5MS00ZjhlLThhNTctYmQ2ZDE2NzY4ZjY2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Deux inspecteurs traquent un tueur qui met en scène ses crimes autour des sept péchés capitaux.',
    genre: ['Policier', 'Drame', 'Mystère']
  },
  {
    id: 'mv-tt0038650',
    title: "It's a Wonderful Life",
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.6,
    year: '1946',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjU3ZTM2ODQtYzg4Mi00MWQ0LWI2NjktZDBmMDIyMzU0MDQzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Au pire soir de sa vie, un homme découvre ce que serait le monde s’il n’était jamais né.',
    genre: ['Drame', 'Famille', 'Fantastique']
  },
  {
    id: 'mv-tt0102926',
    title: 'The Silence of the Lambs',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.6,
    year: '1991',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDdkODJlOTEtYTZiMi00NDgyLWE3NWMtZmE5ZTRiMjVkODc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Une jeune recrue du FBI négocie avec un cannibale emprisonné pour arrêter un tueur en série toujours en liberté.',
    genre: ['Policier', 'Drame', 'Horreur']
  },
  {
    id: 'mv-tt0120815',
    title: 'Saving Private Ryan',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.6,
    year: '1998',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWM2YzZiYTYtNjU2MC00ZjgxLTk3NWYtM2Q3MWIyOGNiZWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Après le débarquement de Normandie, une escouade passe les lignes ennemies pour ramener un parachutiste chez lui.',
    genre: ['Drame', 'Guerre']
  },
  {
    id: 'mv-tt0047478',
    title: 'Seven Samurai',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.6,
    year: '1954',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTU3NTI2MzExMl5BMl5BanBnXkFtZTgwMzM2OTE4MzE@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un village affamé engage sept samouraïs sans maître pour défendre la récolte contre des bandits.',
    genre: ['Action', 'Drame']
  },
  {
    id: 'mv-tt0120689',
    title: 'The Green Mile',
    category: 'movies',
    categoryLabel: 'Films',
    rating: 8.6,
    year: '1999',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjJjNTdhZjAtOGE2Ny00OWU1LTk3MzMtMjgyZTc4ZjJhNmYyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Les gardiens du couloir de la mort rencontrent un détenu au don impossible, et rien n’est plus pareil.',
    genre: ['Policier', 'Drame', 'Fantastique']
  },

  // TV Series - IMDb Top 250 TV, ranks 1-25 (imdb.com/chart/toptv)
  {
    id: 'tv-tt0903747',
    title: 'Breaking Bad',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.5,
    year: '2008 - 2013',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOWE4NTc3YmYtNmU2Mi00ZjhkLWE1MTItZmM1M2U1ODU3YjFlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un professeur de chimie en phase terminale se met à produire de la méthamphétamine pour sa famille et se perd dans son empire.',
    genre: ['Policier', 'Drame', 'Thriller']
  },
  {
    id: 'tv-tt5491994',
    title: 'Planet Earth II',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.4,
    year: '2016',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzY4NDBkMWYtYzdkYy00YzBjLWJmODctMWM4YjYzZTdjNWE5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'David Attenborough filme îles, montagnes, jungles et villes avec une proximité stupéfiante.',
    genre: ['Documentaire', 'Famille']
  },
  {
    id: 'tv-tt0795176',
    title: 'Planet Earth',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.4,
    year: '2006',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BY2NjNDUzOTgtMDFmNC00ZGQ4LWE5MDctMzczNGVlOGU1N2MyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La série animalière de référence : cinq ans de tournage et quarante pays pour filmer la vie sur tous les continents.',
    genre: ['Documentaire', 'Famille']
  },
  {
    id: 'tv-tt0185906',
    title: 'Band of Brothers',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.4,
    year: '2001',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjdlNGJlYjQtMDU2Mi00ZjA1LWEwYzgtYzlmNDM5MmE1ZGUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'La Easy Company saute sur la Normandie et traverse l’Europe, du Jour J à la fin de la guerre.',
    genre: ['Action', 'Drame', 'Histoire']
  },
  {
    id: 'tv-tt7366338',
    title: 'Chernobyl',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.3,
    year: '2019',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzJkOWMwY2QtZDQ3YS00YzA4LWFjZDYtMWMwYzA4YTU3ODUyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'L’explosion du réacteur en 1986, et les scientifiques, mineurs et pompiers qui ont payé le prix du mensonge.',
    genre: ['Drame', 'Histoire', 'Thriller']
  },
  {
    id: 'tv-tt0306414',
    title: 'The Wire',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.3,
    year: '2002 - 2008',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjIxZTMwZmUtOTUzYS00YmU2LWJhNDAtNzA2NDg0NDA0MjVkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Baltimore vue de tous les côtés à la fois : la rue, les docks, la mairie, l’école et la rédaction.',
    genre: ['Policier', 'Drame', 'Thriller']
  },
  {
    id: 'tv-tt0417299',
    title: 'Avatar: The Last Airbender',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.3,
    year: '2005 - 2008',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNWVhZWE2ZDMtOGExNS00NGUzLWExNjQtOWZiZGUyZDUyZjc3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un jeune maître de l’air se réveille après un siècle de glace : le monde est en guerre et lui seul peut l’arrêter.',
    genre: ['Animation', 'Action', 'Aventure']
  },
  {
    id: 'tv-tt0141842',
    title: 'The Sopranos',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.2,
    year: '1999 - 2007',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNWFlNTY5NTQtOGNmNC00ZDVmLWE3NzktYjc3ZmU0YjhjOGQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un parrain du New Jersey jongle entre deux familles et finit par consulter une psy.',
    genre: ['Policier', 'Drame']
  },
  {
    id: 'tv-tt6769208',
    title: 'Blue Planet II',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.3,
    year: '2017',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNmUwYThjM2UtNTg1Yy00MzRlLThhMmYtNjlmOWU0ZmQxZDA3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'De nouvelles technologies emmènent les caméras plus profond que jamais dans des océans encore mal connus.',
    genre: ['Documentaire', 'Famille']
  },
  {
    id: 'tv-tt2395695',
    title: 'Cosmos: A Spacetime Odyssey',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.2,
    year: '2014',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTRlMzk0NzctNTI3Ni00N2E2LWJiNGMtMDdlNjk1YWNmMzkyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Neil deGrasse Tyson reprend le vaisseau de l’imagination de Sagan pour un nouveau tour de l’univers.',
    genre: ['Documentaire', 'Famille']
  },
  {
    id: 'tv-tt0081846',
    title: 'Cosmos',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.3,
    year: '1980',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTA5MWFhMzAtOWU1OS00Yjk4LTlkNGItNGI3N2VkNzcyNGU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Le voyage original de Carl Sagan en treize épisodes, à travers l’espace, le temps et la méthode scientifique.',
    genre: ['Documentaire']
  },
  {
    id: 'tv-tt9253866',
    title: 'Our Planet',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.2,
    year: '2019 - 2023',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDE1NzlkNWMtNzFiMC00ZTgxLTgyMmItOTU5OGI2NWQ4MDMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'L’histoire naturelle à la plus grande échelle, doublée d’un constat sans détour de ce que nous perdons.',
    genre: ['Documentaire', 'Famille']
  },
  {
    id: 'tv-tt0944947',
    title: 'Game of Thrones',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.2,
    year: '2011 - 2019',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTJmODhlYTgtZDUyNi00YzM0LTkxZTEtYjk2MjlmZGM2ODYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Neuf grandes maisons se disputent le Trône de Fer pendant qu’un ennemi oublié se rassemble au-delà du Mur.',
    genre: ['Drame', 'Fantastique']
  },
  {
    id: 'tv-tt7678620',
    title: 'Bluey',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.3,
    year: '2018 - Present',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Une chiotte bleue transforme le quotidien familial en jeu, sept minutes parfaites à la fois.',
    genre: ['Animation', 'Court', 'Comédie']
  },
  {
    id: 'tv-tt0071075',
    title: 'The World at War',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.2,
    year: '1973 - 1974',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2I1OGUyNmYtZmNiOC00OGQ4LWFlNDEtYTM5ZTAxMDI4ZmMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Le récit de référence de la Seconde Guerre mondiale, raconté par ceux qui l’ont vécue.',
    genre: ['Documentaire', 'Histoire', 'Guerre']
  },
  {
    id: 'tv-tt2560140',
    title: 'Attack on Titan',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.1,
    year: '2013 - 2023',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'L’humanité s’abrite derrière des murs géants jusqu’au jour où les Titans les franchissent.',
    genre: ['Animation', 'Action', 'Aventure']
  },
  {
    id: 'tv-tt1355642',
    title: 'Fullmetal Alchemist: Brotherhood',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.1,
    year: '2009 - 2010',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzNiODA5NjYtYWExZS00OTc4LTg3N2ItYWYwYTUyYmM5MWViXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Deux frères paient très cher une alchimie interdite et cherchent la pierre qui pourrait tout réparer.',
    genre: ['Animation', 'Action', 'Aventure']
  },
  {
    id: 'tv-tt1533395',
    title: 'Life',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.1,
    year: '2009',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZDJjMzJiMTktMWZkZi00YWY0LWJjNGUtY2ZmNTFlOThhZTA4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Quatre ans de tournage sur les stratégies de survie les plus étranges que l’évolution ait produites.',
    genre: ['Documentaire']
  },
  {
    id: 'tv-tt8420184',
    title: 'The Last Dance',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.0,
    year: '2020',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTQyYmQ1N2UtYjFkNS00NzgyLTk5YTUtYjExMDdjOTA3MGU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Des images inédites de la dernière saison de Michael Jordan avec les Chicago Bulls.',
    genre: ['Documentaire', 'Biographie', 'Histoire']
  },
  {
    id: 'tv-tt0052520',
    title: 'The Twilight Zone',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.0,
    year: '1959 - 1964',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjkyZmRmYmMtYTg5Zi00MjA0LTliYmQtMDU0NzBiZDcxNzA0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'L’anthologie de Rod Serling : des histoires indépendantes, entre science-fiction et fable morale.',
    genre: ['Drame', 'Fantastique', 'Horreur']
  },
  {
    id: 'tv-tt1877514',
    title: 'The Vietnam War',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.1,
    year: '2017',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTQ1ZWYzMmQtNWU5OC00YWY0LTkyMWMtMTU0NjYxMjJkMmNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Ken Burns et Lynn Novick racontent la guerre à travers les soldats et les civils de tous les camps.',
    genre: ['Documentaire', 'Histoire', 'Guerre']
  },
  {
    id: 'tv-tt2861424',
    title: 'Rick and Morty',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.0,
    year: '2013 - Present',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Un génie nihiliste entraîne son petit-fils à travers les dimensions, en aggravant tout au passage.',
    genre: ['Animation', 'Aventure', 'Comédie']
  },
  {
    id: 'tv-tt1475582',
    title: 'Sherlock',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.0,
    year: '2010 - 2017',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjRhZDdjMDYtMTg5Yy00NGI4LWI3ZDgtYjNkNDc4MzJkNDRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Le détective de Conan Doyle transposé dans le Londres d’aujourd’hui, en enquêtes au long cours.',
    genre: ['Policier', 'Drame', 'Mystère']
  },
  {
    id: 'tv-tt0103359',
    title: 'Batman: The Animated Series',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.0,
    year: '1992 - 1995',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Le Gotham art déco qui a défini Batman pour toute une génération et donné naissance à Harley Quinn.',
    genre: ['Animation', 'Action', 'Aventure']
  },
  {
    id: 'tv-tt3032476',
    title: 'Better Call Saul',
    category: 'series',
    categoryLabel: 'Séries TV',
    rating: 9.0,
    year: '2015 - 2022',
    resolution: '4K ULTRA HD',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzc0ZWUzODQtOTliZi00MDQ0LTlkYzYtZjU5ZTBjMWMzYWIwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    description: 'Six ans avant Walter White, le petit avocat Jimmy McGill devient Saul Goodman.',
    genre: ['Policier', 'Drame']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p1',
    name: '3 Months',
    duration: '3 Months Access',
    price: {
      USD: 26.99,
      EUR: 24.99,
      GBP: 21.99
    },
    originalPrice: {
      USD: 48.99,
      EUR: 44.99,
      GBP: 38.99
    },
    popular: false,
    savings: 'Save 40%',
    tagline: 'Most popular choice for the sports season',
    features: [
      '80,000+ Live TV Channels',
      '95,000+ Movies & Series',
      '4K & 60FPS Ultra HD Quality',
      'Anti-Freeze 9.0 (99.9% Uptime)',
      'Active Within 5 Minutes',
      'Works on All Devices & Apps',
      'Electronic Program Guide (EPG)',
      'Free 7-Day Catch-Up',
      'Adult Channels (Optional)',
      '24/7 VIP Priority Support',
      '1 Connection'
    ],
    whatsappText: 'Hello! I want to order the 3 Months IPTV Pack (EUR 24.99). Please activate my account.'
  },
  {
    id: 'p2',
    name: '6 Months',
    duration: '6 Months Access',
    price: {
      USD: 37.99,
      EUR: 34.99,
      GBP: 29.99
    },
    originalPrice: {
      USD: 75.99,
      EUR: 69.99,
      GBP: 59.99
    },
    popular: false,
    savings: 'Save 45%',
    tagline: 'Strong value for longer viewing',
    features: [
      '80,000+ Live TV Channels',
      '95,000+ Movies & Series',
      '4K & 60FPS Ultra HD Quality',
      'Anti-Freeze 9.0 (99.9% Uptime)',
      'Active Within 5 Minutes',
      'Works on All Devices & Apps',
      'Electronic Program Guide (EPG)',
      'Free 7-Day Catch-Up',
      'Adult Channels (Optional)',
      'Automatic Playlist Updates',
      '24/7 VIP Priority Support',
      '1 Connection'
    ],
    whatsappText: 'Hello! I want to order the 6 Months IPTV Pack (EUR 34.99). Please activate my account.'
  },
  {
    id: 'p3',
    name: '12 Months',
    duration: '1 Year Full Access',
    price: {
      USD: 52.99,
      EUR: 49.0,
      GBP: 41.99
    },
    originalPrice: {
      USD: 128.99,
      EUR: 119.0,
      GBP: 101.99
    },
    popular: true,
    savings: 'BEST VALUE - SAVE 55%',
    tagline: 'Best price, guaranteed buffer-free',
    features: [
      '80,000+ Live TV Channels',
      '95,000+ Movies & Series',
      '4K & 60FPS Ultra HD Quality',
      'Anti-Freeze 9.0 (99.9% Uptime)',
      'Active Within 5 Minutes',
      'Works on All Devices & Apps',
      'Electronic Program Guide (EPG)',
      'Free 7-Day Catch-Up',
      'Adult Channels (Optional, PIN protected)',
      'Channel Requests & Server Updates Included',
      '24/7 Instant VIP Support on WhatsApp',
      '1 Connection (works across rooms)'
    ],
    whatsappText: 'Hello! I want to order the 12 Months IPTV Pack (EUR 49.00). Please activate my account.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'En combien de temps ma playlist est-elle activée ?',
    answer: 'L’activation est quasi immédiate. Une fois la commande passée sur WhatsApp, nos serveurs génèrent votre lien M3U et vos identifiants Xtream Codes en 2 à 5 minutes.',
    category: 'setup'
  },
  {
    id: 'faq2',
    question: 'Quels appareils et applications sont compatibles ?',
    answer: 'Tous les appareils : Smart TV (Samsung Tizen, LG WebOS, Android TV), Amazon Firestick, boîtiers MAG et Formuler, Apple TV, iOS, Android, Windows et Mac.',
    category: 'setup'
  },
  {
    id: 'faq3',
    question: 'Quel débit faut-il pour regarder en 4K ?',
    answer: 'Comptez 10 Mbps minimum pour la HD, et 25 Mbps pour la 4K Ultra HD et le sport en 60 FPS. Une connexion fibre ou 5G stable donne le meilleur résultat.',
    category: 'technical'
  },
  {
    id: 'faq4',
    question: 'Qu’est-ce que la technologie Anti-Freeze ?',
    answer: 'Notre technologie Anti-Freeze v4.0 répartit la charge sur plusieurs serveurs régionaux et bascule votre flux en quelques millisecondes en cas de congestion : plus de coupures pendant les grands matchs.',
    category: 'technical'
  },
  {
    id: 'faq5',
    question: 'Comment commander et en combien de temps suis-je activé ?',
    answer: 'Choisissez votre pack, votre formule et le nombre d’écrans, puis appuyez sur Commander sur WhatsApp. Vos identifiants arrivent dans la même conversation, en 5 minutes en moyenne.',
    category: 'general'
  },
  {
    id: 'faq6',
    question: 'Puis-je utiliser mon abonnement sur plusieurs écrans ?',
    answer: 'Oui. Chaque pack se choisit selon le nombre d’écrans, de 1 à 4 connexions simultanées : salon, chambre et mobile en même temps. Sélectionnez le nombre voulu avant de commander.',
    category: 'general'
  }
];

export const SUPPORTED_DEVICES: DeviceInfo[] = [
  {
    name: 'Smart TV (LG & Samsung)',
    iconName: 'Tv',
    description: 'Native app integration with Flix IPTV, Smart ONE, IB Player, or NET IPTV.',
    apps: ['Flix IPTV', 'IB Player Pro', 'Smart ONE', 'SET IPTV']
  },
  {
    name: 'Firestick & Android TV',
    iconName: 'Flame',
    description: 'High performance playback on Amazon Fire TV, Nvidia Shield, and Xiaomi Box.',
    apps: ['TiviMate 4K', 'IPTV Smarters Pro', 'XCIPTV', 'Ibo Player']
  },
  {
    name: 'Apple TV & iOS Devices',
    iconName: 'Apple',
    description: 'Crisp 4K HDR playback on Apple TV 4K, iPad, and iPhone.',
    apps: ['GSE Smart IPTV', 'IPTV Smarters', 'Smarters Player Lite']
  },
  {
    name: 'MAG & Formuler Boxes',
    iconName: 'Box',
    description: 'Portal URL support with MAC address line connection for hardware boxes.',
    apps: ['Stalker Portal', 'Formuler MyTVOnline 2/3', 'MAG Portal']
  },
  {
    name: 'PC & Mac Laptops',
    iconName: 'Monitor',
    description: 'Stream directly in Web Player, VLC, or dedicated Windows / MacOS software.',
    apps: ['VLC Media Player', 'SFVIP Player', 'Web Player Portal']
  }
];

/* ── Subscription packages ────────────────────────────────────────────────
   Ported from the beehoster project (bee wa3err/src/data/iptvData.ts):
   two tiers, four device counts, three durations. Prices are EUR, exactly as
   in the source — prices[tier][devices - 1]. */

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    headline: 'Que contient le pack Basic ?',
    features: [
      'Qualité SD / HD / Full HD',
      '25 000+ chaînes + Netflix',
      'TF1, France 2, M6, Canal+, RMC, beIN',
      '140 000+ films & séries',
      'Mises à jour hebdomadaires',
      'Support 24h/24',
      '100 % anonyme',
      'Technologie Anti-Freeze',
      'Tous les appareils',
      'Contenus français exclusifs',
      'Netflix, Amazon, HBO, Apple TV, Hulu'
    ]
  },
  {
    id: 'vip',
    name: 'Premium VIP',
    headline: 'Que contient le pack Premium VIP ?',
    features: [
      'SD / HD / Full HD / 4K / 8K / HDR-VR',
      '80 000+ chaînes + Netflix',
      'TF1, France 2, M6, Canal+, RMC, beIN, Eurosport',
      '200 000+ films & séries',
      'Mises à jour quotidiennes',
      'Tous les événements PPV',
      'Support VIP 24h/24',
      'Anti-Freeze PRO',
      'Conseiller VIP dédié',
      'Tous les appareils',
      'VPN inclus',
      'Contenus VIP exclusifs',
      'Netflix, Amazon, HBO, Apple TV, Disney+'
    ]
  }
];

export const DURATION_PACKS: DurationPack[] = [
  {
    id: 'pack-3m',
    label: '3 mois',
    months: 3,
    savePercent: 30,
    prices: {
      basic: [24.99, 39.99, 49.99, 57.99],
      vip: [34.99, 49.99, 69.99, 89.99]
    }
  },
  {
    id: 'pack-6m',
    label: '6 mois',
    months: 6,
    savePercent: 40,
    prices: {
      basic: [34.99, 49.99, 69.99, 89.99],
      vip: [49.99, 79.99, 99.99, 139.99]
    }
  },
  {
    id: 'pack-15m',
    label: '12 + 3 mois',
    months: 15,
    bestDeal: true,
    savePercent: 50,
    prices: {
      basic: [49.0, 79.0, 109.0, 129.0],
      vip: [79.99, 124.99, 179.99, 199.99]
    }
  }
];

/* ── Live channel line-up ─────────────────────────────────────────────────
   Popular French channels only: TNT, info, cinéma and sport. */

export const CHANNEL_ITEMS: ChannelItem[] = [
  {
    id: 'ch-tf1',
    name: 'TF1 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'TF1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Logo_TF1_2013.svg/250px-Logo_TF1_2013.svg.png'
  },
  {
    id: 'ch-france2',
    name: 'France 2 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'F2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/France_2_2018.svg/250px-France_2_2018.svg.png'
  },
  {
    id: 'ch-france3',
    name: 'France 3 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'F3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/France_3_-_logo_2018.svg/250px-France_3_-_logo_2018.svg.png'
  },
  {
    id: 'ch-france4',
    name: 'France 4 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'F4',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/France_4_-_logo_2018.svg/250px-France_4_-_logo_2018.svg.png'
  },
  {
    id: 'ch-france5',
    name: 'France 5 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'F5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/France_5_-_logo_2018.svg/250px-France_5_-_logo_2018.svg.png'
  },
  {
    id: 'ch-m6',
    name: 'M6 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'M6',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_M6_%282020%29.svg/250px-Logo_M6_%282020%29.svg.png'
  },
  {
    id: 'ch-arte',
    name: 'Arte HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'ARTE',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Arte_Logo_2011.svg/250px-Arte_Logo_2011.svg.png'
  },
  {
    id: 'ch-canal',
    name: 'Canal+ 4K',
    category: 'Cinéma',
    quality: '4K UHD',
    flag: 'FR',
    logoText: 'C+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_Canal%2B_1995.svg/250px-Logo_Canal%2B_1995.svg.png'
  },
  {
    id: 'ch-c8',
    name: 'C8 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'C8',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Logo_C8_2016.svg/250px-Logo_C8_2016.svg.png'
  },
  {
    id: 'ch-w9',
    name: 'W9 HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'W9',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/W9_2018.svg/250px-W9_2018.svg.png'
  },
  {
    id: 'ch-tmc',
    name: 'TMC HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'TMC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TMC_logo_2016.svg/250px-TMC_logo_2016.svg.png'
  },
  {
    id: 'ch-tfx',
    name: 'TFX HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'TFX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/TFX_logo.svg/250px-TFX_logo.svg.png'
  },
  {
    id: 'ch-6ter',
    name: '6ter HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: '6TER',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_6ter_2016.svg/250px-Logo_6ter_2016.svg.png'
  },
  {
    id: 'ch-cstar',
    name: 'CStar HD',
    category: 'TNT',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'CSTAR',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Logo_CStar_2016.svg/250px-Logo_CStar_2016.svg.png'
  },
  {
    id: 'ch-gulli',
    name: 'Gulli HD',
    category: 'Jeunesse',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'GULLI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Logo_Gulli_2023.svg/250px-Logo_Gulli_2023.svg.png'
  },
  {
    id: 'ch-tf1sf',
    name: 'TF1 Séries Films HD',
    category: 'Séries',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'TF1 SF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logo_TF1_S%C3%A9ries_Films_2018.jpg/250px-Logo_TF1_S%C3%A9ries_Films_2018.jpg'
  },
  {
    id: 'ch-parispremiere',
    name: 'Paris Première HD',
    category: 'Divertissement',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'PP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo-ParisPremiere-2023.svg/250px-Logo-ParisPremiere-2023.svg.png'
  },
  {
    id: 'ch-rmcdecouverte',
    name: 'RMC Découverte HD',
    category: 'Découverte',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'RMCD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_RMC_D%C3%A9couverte_2017.svg/250px-Logo_RMC_D%C3%A9couverte_2017.svg.png'
  },
  {
    id: 'ch-tv5monde',
    name: 'TV5Monde HD',
    category: 'Francophonie',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'TV5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Logo_TV5Monde_2025.svg/250px-Logo_TV5Monde_2025.svg.png'
  },
  {
    id: 'ch-bfm',
    name: 'BFM TV HD',
    category: 'Info',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'BFM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_BFMTV_2019.svg/250px-Logo_BFMTV_2019.svg.png'
  },
  {
    id: 'ch-cnews',
    name: 'CNews HD',
    category: 'Info',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'CNEWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/CNews_logo.svg/250px-CNews_logo.svg.png'
  },
  {
    id: 'ch-franceinfo',
    name: 'franceinfo HD',
    category: 'Info',
    quality: 'FHD',
    flag: 'FR',
    logoText: 'FINFO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Franceinfo.svg/250px-Franceinfo.svg.png'
  },
  {
    id: 'ch-canalsport',
    name: 'Canal+ Sport 4K',
    category: 'Sport',
    quality: '4K UHD',
    flag: 'FR',
    logoText: 'C+S',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Logo_Canal%2B_Sport_2013.svg/250px-Logo_Canal%2B_Sport_2013.svg.png'
  },
  {
    id: 'ch-bein',
    name: 'beIN Sports 1 4K',
    category: 'Sport',
    quality: '4K UHD',
    flag: 'FR',
    logoText: 'beIN',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/BeIN_Sports_logo_%28horizontal_version%29.svg/250px-BeIN_Sports_logo_%28horizontal_version%29.svg.png'
  },
  {
    id: 'ch-rmc',
    name: 'RMC Sport 1 HD',
    category: 'Sport',
    quality: 'FHD 60FPS',
    flag: 'FR',
    logoText: 'RMC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_RMC_Sport_1_2018.svg/250px-Logo_RMC_Sport_1_2018.svg.png'
  },
  {
    id: 'ch-eurosport',
    name: 'Eurosport 1 HD',
    category: 'Sport',
    quality: 'FHD 60FPS',
    flag: 'FR',
    logoText: 'ES',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Eurosport_Logo_%282011-2015%29.svg/250px-Eurosport_Logo_%282011-2015%29.svg.png'
  }
];
