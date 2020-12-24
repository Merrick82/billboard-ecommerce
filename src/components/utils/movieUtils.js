import {getRandomArbitrary} from '../utils/numberUtils.js';

export function getMoviesList() {
    return [
        {
            id: 1,
            title: 'Avatar',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/CH2dhAQ.jpg',
            year: 2009,
            director: 'James Cameron',
            cast: `Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, 
            Michelle Rodriguez, Giovanni Ribisi, Joel David Moore, Wes Studi, CCH Pounder, 
            Laz Alonso, Dileep Rao, Terry Notary`,
            sinopsis: `Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, 
            sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, 
            donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra. 
            Para contrarrestar la toxicidad de la atmósfera de Pandora, se ha creado el programa Avatar, gracias al cual los 
            seres humanos mantienen sus conciencias unidas a un avatar: un cuerpo biológico controlado de forma remota que 
            puede sobrevivir en el aire letal. Esos cuerpos han sido creados con ADN humano, mezclado con ADN de los nativos 
            de Pandora, los Na'vi. Convertido en avatar, Jake puede caminar otra vez. Su misión consiste en infiltrarse entre 
            los Na'vi, que se han convertido en el mayor obstáculo para la extracción del mineral. Pero cuando Neytiri, una bella 
            Na'vi (Zoe Saldana), salva la vida de Jake, todo cambia: Jake, tras superar ciertas pruebas, es admitido en su clan. 
            Mientras tanto, los hombres esperan los resultados de la misión de Jake.`
        },
        {
            id: 2,
            title: 'Dunkirk',
            price: getRandomArbitrary(16, 29),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/vq4oiRd.jpg',
            year: 2017,
            director: 'Christopher Nolan',
            cast: `Fionn Whitehead, Mark Rylance, Kenneth Branagh, Tom Hardy, Cillian Murphy, 
            Barry Keoghan, Harry Styles, Jack Lowden, Aneurin Barnard, James D'Arcy, 
            Tom Glynn-Carney, Bradley Hall, Damien Bonnard, Jochum ten Haaf, Michel Biel, 
            James Bloor, Luke Thompson, Billy Howle, Mikey Collins, Bobby Lockwood, 
            Will Attenborough, Tom Nolan, Matthew Marsh, Adam Long, Miranda Nolan, Jack Cutmore-Scott, 
            Michael Fox, Brian Vernel, Elliott Tittensor, Kevin Guthrie, Harry Richardson, Richard Sanderson, 
            Kim Hartman, Calam Lynch, Charley Palmer Rothwell, John Nolan, Bill Milner, Jack Riddiford, 
            Harry Collett, Eric Richard`,
            sinopsis: `Año 1940, en plena 2ª Guerra Mundial. En las playas de Dunkerque, cientos de miles de 
            soldados de las tropas británicas y francesas se encuentran rodeados por el avance del ejército alemán, 
            que ha invadido Francia. Atrapados en la playa, con el mar cortándoles el paso, las tropas se enfrentan 
            a una situación angustiosa que empeora a medida que el enemigo se acerca.`
        },
        {
            id: 3,
            title: 'IT',
            price: getRandomArbitrary(30, 45),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/2QeNbmL.jpg',
            year: 2017,
            director: 'Andy Muschietti',
            cast: `Bill Skarsgård, Jaeden Martell, Sophia Lillis, Finn Wolfhard, Wyatt Oleff, Jeremy Ray Taylor, Jack Dylan Grazer, Chosen Jacobs, Nicholas Hamilton, Jake Sim, Logan Thompson, Owen Teague, Jackson Robert Scott, Javier Botet, Stephen Bogaert, Stuart Hughes, Geoffrey Pounsett, Megan Charpentier, Isabelle Nelisse, Tatum Lee, Pip Dwyer, Molly Atkinson, Steven Williams, Elizabeth Saunders, Joe Bostick, Ari Cohen, Anthony Ulc, Edie Inksetter, Martha Gibson, Donald Tripe, Liz Gordon, Neil Crone, Janet Porter`,
            sinopsis: `Cuando empiezan a desaparecer niños en el pueblo de Derry (Maine), un pandilla de amigos lidia con sus mayores miedos al enfrentarse a un malvado payaso llamado Pennywise, cuya historia de asesinatos y violencia data de siglos. Adaptación cinematográfica de la conocida novela de Stephen King "It".`
        },
        {
            id: 4,
            title: 'Kingsman: The Golden Circle',
            price: getRandomArbitrary(15, 40),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/5wel4LX.jpg',
            year: 2017,
            director: 'Matthew Vaughn',
            cast: `Taron Egerton, Colin Firth, Julianne Moore, Mark Strong, Halle Berry, Pedro Pascal, Channing Tatum, Thomas Turgoose, Jeff Bridges, Elton John, Bruce Greenwood, Emily Watson, Edward Holcroft, Hanna Alström, Sophie Cookson, Michael Gambon, Poppy Delevingne, Björn Granath, Samantha Womack, Tom Benedict Knight, Alessandro De Marco`,
            sinopsis: `Cuando el cuartel general de la agencia secreta es destruido, se descubre una organización de espionaje aliada en EE.UU. llamada Statesman, cuyo origen se remonta a la fecha en que ambas fueron fundadas. En una nueva aventura que pone a prueba la fuerza y el ingenio de sus agentes, ambas organizaciones secretas de élite aúnan sus esfuerzos para intentar derrotar a su enemigo común y salvar al mundo... algo que está convirtiéndose en una especie de hábito para Eggsy.`
        },
        {
            id: 5,
            title: 'Despicable Me 3',
            price: getRandomArbitrary(19, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/MirVUWV.jpg',
            year: 2017,
            director: 'Kyle Balda, Pierre Coffin, Eric Guillon',
            cast: `Steve Carell, Kristen Wiig, Trey Parker`,
            sinopsis: `Balthazar Pratt, un antiguo niño estrella obsesionado con el personaje que encarnó en los años ochenta, demuestra ser el peor enemigo al que Gru ha debido enfrentarse hasta la fecha. `
        },
        {
            id: 6,
            title: 'John Wick',
            price: getRandomArbitrary(10, 60),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/i0wbkiO.jpg',
            year: 2014,
            director: 'Chad Stahelski, David Leitch',
            cast: `Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe, Dean Winters, Adrianne Palicki, Omer Barnea, Toby Leonard Moore, Daniel Bernhardt, Bridget Moynahan, John Leguizamo, Ian McShane, Bridget Regan, Lance Reddick, Keith Jardine, Thomas Sadoski, Clarke Peters, Kevin Nash, Randall Duk Kim, David Patrick Kelly, Gameela Wright`,
            sinopsis: `En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo.`
        },
        {
            id: 7,
            title: 'Justice League',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/b7NRpPm.jpg',
            year: 2017,
            director: 'Zack Snyder, Joss Whedon',
            cast: `Ben Affleck, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Henry Cavill, Amy Adams, Ciarán Hinds, J.K. Simmons, Jeremy Irons, Connie Nielsen, Amber Heard, Diane Lane, Billy Crudup, Daniel Stisen, Jesse Eisenberg, Samantha Jo, Joe Morton, Holt McCallany, Gem Refoufi`,
            sinopsis: `Motivado por la fe que había recuperado en la humanidad e inspirado por la acción altruista de Superman, Bruce Wayne recluta la ayuda de su nueva aliada, Diana Prince, para enfrentarse a un enemigo aún mayor. Juntos, Batman y Wonder Woman se mueven rápidamente para intentar encontrar y reclutar un equipo de metahumanos que combata esta nueva amenaza. El problema es que a pesar de la formación de esta liga de héroes sin precedentes –Batman, Wonder Woman, Aquaman, Cyborg y Flash– puede que sea demasiado tarde para salvar el planeta de una amenaza de proporciones catastróficas.`
        },
        {
            id: 8,
            title: 'Kong',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/O4xifbI.jpg',
            year: 2017,
            director: 'Jordan Vogt-Roberts',
            cast: `Tom Hiddleston, Brie Larson, Samuel L. Jackson, John C. Reilly, John Goodman, Corey Hawkins, John Ortiz, Jing Tian, Toby Kebbell, Jason Mitchell, Thomas Mann, Shea Whigham, Eugene Cordero, Terry Notary, Marc Evan Jackson, Will Brittain, Takamasa Ishihara, Richard Jenkins, Allyn Rachel, Robert Taylor, James M. Connor`,
            sinopsis: `En los años 70, un variopinto grupo de exploradores y soldados es reclutado para viajar a una misteriosa isla del Pacífico. Entre ellos están el capitán James Conrad (Tom Hiddleston), el teniente coronel Packard (Samuel L. Jackson) y una fotoperiodista (Brie Larson). Pero al adentrarse en esta bella pero traicionera isla, los exploradores encontrarán algo absolutamente sorprendente. Sin saberlo, estarán invadiendo los dominios del mítico Kong, el gorila gigante rey de esta isla. Será Marlow (John C. Reilly), un peculiar habitante del lugar, quien les enseñe los secretos de Isla Calavera, además del resto de seres monstruosos que la habitan.`
        },
        {
            id: 9,
            title: 'Last Action Hero',
            price: getRandomArbitrary(0, 20),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/LJH37Dg.jpg',
            year: 1993,
            director: 'John McTiernan',
            cast: `Arnold Schwarzenegger, Austin O'Brien, Charles Dance, Anthony Quinn, F. Murray Abraham, Robert Prosky, Mercedes Ruehl, Frank McRae, Tom Noonan, Bridgette Wilson, Ian McKellen, Art Carney, Rick Ducommun, Joan Plowright, Toru Tanaka, Tina Turner`,
            sinopsis: `Danny Madigan es un chico fantasioso, ferviente admirador de Jack Slater, el mayor héroe del cine de acción. Cuando se estrena su última película, el viejo acomodador del cine le regala una entrada para que la vea en primicia. Gracias a esa entrada, que resulta tener poderes mágicos, Danny consigue introducirse en la pantalla y vivir trepidantes aventuras con Jack.`
        },
        {
            id: 10,
            title: 'Limitless',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/8k2ThBU.jpg',
            year: 2011,
            director: 'Neil Burger',
            cast: `Bradley Cooper, Abbie Cornish, Robert De Niro, Anna Friel, Andrew Howard, Johnny Whitworth, Robert John Burke, Tomas Arana`,
            sinopsis: `El escritor Eddie Morra (Bradley Cooper) sufre una grave crisis de creatividad. Un día prueba una nueva droga que le permite sacar el máximo partido a sus facultades mentales. De este modo, consigue triunfar en Nueva York. Un poderoso magnate de Wall Street (Robert De Niro) siente una irreprimible curiosidad por averiguar qué se esconde detrás de tanto éxito.`
        },
        {
            id: 11,
            title: 'The Lion King',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/12qgoYR.jpg',
            year: 1994,
            director: 'Rob Minkoff, Roger Allers',
            cast: `Matthew Broderick, Jeremy Irons, James Earl Jones`,
            sinopsis: `La sabana africana es el escenario en el que tienen lugar las aventuras de Simba, un pequeño león que es el heredero del trono. Sin embargo, al ser injustamente acusado por el malvado Scar de la muerte de su padre, se ve obligado a exiliarse. Durante su destierro, hará buenas amistades e intentará regresar para recuperar lo que legítimamente le corresponde.`
        },
        {
            id: 12,
            title: 'The Little Mermaid',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/OWVRhgz.jpg',
            year: 1989,
            director: 'John Musker, Ron Clements',
            cast: `Jodi Benson, Samuel E. Wright, Rene Auberjonois`,
            sinopsis: `Ariel, hija del rey Tritón, es la princesa de las sirenas. Está a punto de celebrarse su fiesta de cumpleaños y su mayor ilusión es poder conocer a los seres humanos. Con la ayuda de la bruja Úrsula, Ariel consigue subir a la superficie, donde salva de morir ahogado a un hermoso príncipe, cuyo barco acaba de naufragar, del que se enamora perdidamente.`
        },
        {
            id: 13,
            title: 'Logan',
            price: getRandomArbitrary(10, 20),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/IHo1aHM.jpg',
            year: 2017,
            director: 'James Mangold',
            cast: `Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook, Stephen Merchant, Elizabeth Rodriguez, Richard E. Grant, Doris Morgado, Han Soto, Julia Holt, Elise Neal, Al Coronel`,
            sinopsis: `Sin sus poderes, por primera vez, Wolverine es verdaderamente vulnerable. Después de una vida de dolor y angustia, sin rumbo y perdido en el mundo donde los X-Men son leyenda, su mentor Charles Xavier lo convence para asumir una última misión: proteger a una joven que será la única esperanza para la raza mutante... Tercera y última película protagonizada por Hugh Jackman en el papel de Lobezno.`
        },
        {
            id: 14,
            title: 'Maleficent',
            price: getRandomArbitrary(20, 35),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/Ro1kdFc.jpg',
            year: 2019,
            director: 'Joachim Rønning',
            cast: `Angelina Jolie, Michelle Pfeiffer, Elle Fanning, Harris Dickinson, Ed Skrein, Chiwetel Ejiofor, Juno Temple, Sam Riley, David Gyasi, Lesley Manville, Imelda Staunton, Jenn Murray, Kae Alexander, Fernanda Diniz, Teresa Mahoney, Takamasa Ishihara, Robert Lindsay, Judith Shekoni, Barry Aird, Joakim Skarli, Zak Holland, John Carew, Russell Balogh, Jess Liaudin, Bernardo Santos, Bruce Johnson, Tom Bonington, Rayna Campbell, Kas Meghani, Alex Martin, Mens-Sana Tamakloe, Mark Knightley, Frederick Szkoda, Sarah Sayuri Hare`,
            sinopsis: `Tiene lugar varios años después de los acontecimientos narrados en la primera película, y explora la relación entre Maléfica y Aurora y las alianzas que se forman para sobrevivir a las amenazas del mágico mundo en el que habitan. Secuela de "Maléfica" (2014).`
        },
        {
            id: 15,
            title: 'Deadpool',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/bya1I1z.jpg',
            year: 2018,
            director: 'David Leitch',
            cast: `Ryan Reynolds, Fred Savage, Josh Brolin, Morena Baccarin, Julian Dennison, Zazie Beetz, T.J. Miller, Leslie Uggams, Karan Soni, Brianna Hildebrand, Jack Kesy, Eddie Marsan, Shiori Kutsuna, Randal Reeder, Nikolai Witschl, Thayr Harris, Rob Delaney, Lewis Tan, Bill Skarsgård, Terry Crews, Brad Pitt, Paul Wu, Robert Maillet, Alan Tudyk, Matt Damon, Michasha Armstrong, Joe Doserro, Hayley Sales, Islie Hirvonen, Jagua Arneja, Mike Dopud, Luke Roessler, Tanis Dolman, Hunter Dillon, Sala Baker, Paul Wernick, Rhett Reese, David Leitch`,
            sinopsis: `Deadpool (Ryan Reynolds) le cuenta al actor Fred Savage (el niño de "La Princesa Prometida") algunas de sus aventuras, en un homenaje-parodia a dicha película de 1987 en la que el abuelo le contaba historias a Fred. 'Once Upon a Deadpool' es una revisión estrenada en cines de "Deadpool 2" adaptada a la calificación por edades PG-13, es decir: un reestreno navideño sin violencia, palabras malsonantes y otras características del film original de David Leitch, añadiéndose además nuevas escenas a la película.`
        },
        {
            id: 16,
            title: 'Spectre',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/nOGQ2mn.jpg',
            year: 2015,
            director: 'Sam Mendes',
            cast: `Daniel Craig, Christoph Waltz, Léa Seydoux, Ralph Fiennes, Monica Bellucci, Naomie Harris, Rory Kinnear, Ben Whishaw, Dave Bautista, Andrew Scott, Jesper Christensen, Stephanie Sigman, Tenoch Huerta, Adriana Paz, Domenico Fortunato, Marco Zingaro, Ian Bonar, Tam Williams, Pip Carter, Simon Lenagan, Alessandro Bressanello, Marc Zinga, Brigitte Millar, Adel Bencherif, Peppe Lanzetta, Francesco Arca, Matteo Taranto, Emilio Aniba, Benito Sagredo, George Lasha, Sargon Yelda, Andy Cheung, Erick Hayden, Antonio Salines, Nigel Barber, Patrice Naiambana, Stephane Cornicard, John Phillip Law, Joseph Balderrama, Eiji Mihara, Junichi Kajioka, Victor Schefé, Harald Windisch, Detlef Bothe, Bodo Friesecke, Noah Saavedra, Michael Glantschnig, Marlon Boess, Marie Fee Wohlmuth, Lili Epply, Lara Parmiani, Umit Ulgen, Amra Mallassi, Ziad Abaza, Nari Blair-Mangat, Judi Dench`,
            sinopsis: `James Bond recibe un críptico mensaje del pasado que le confía una misión secreta que lo lleva a México D.F. y a Roma, donde conoce a Lucía Sciarra, la hermosa viuda de un infame criminal. Bond se infiltra en una reunión secreta y descubre la existencia de una siniestra organización conocida como SPECTRE. Mientras tanto, en Londres, el nuevo director del Centro para la Seguridad Nacional cuestiona las acciones de Bond y pone en duda la importancia del MI6, encabezado por M. De modo encubierto Bond recluta a dos colaboradores para que le ayuden a encontrar a Madeleine Swann, la hija de su gran enemigo, el Sr. White, pues quizá tenga la clave para desentrañar el misterio de SPECTRE. A medida que Bond avanza en su investigación, descubre una estremecedora conexión entre él y el enemigo que busca.`
        },
        {
            id: 17,
            title: 'Star Wars: The Last Jedi',
            price: getRandomArbitrary(15, 40),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/o9jl2Xh.jpg',
            year: 2017,
            director: 'Rian Johnson',
            cast: `Daisy Ridley, John Boyega, Adam Driver, Oscar Isaac, Mark Hamill, Carrie Fisher, Kelly Marie Tran, Domhnall Gleeson, Benicio del Toro, Laura Dern, Andy Serkis, Gwendoline Christie, Lupita Nyong'o, Anthony Daniels, Frank Oz, Warwick Davis, Veronica Ngo, Justin Theroux, Billie Lourd, Lily Cole, Navin Chowdhry, Temirlan Blaev, Sara Heller, Josiah Oniha, Joseph Gordon-Levitt, Liang Yang`,
            sinopsis: `La malvada Primera Orden se ha vuelto más poderosa y tiene contra las cuerdas a la Resistencia, liderada por la General Leia Organa (Carrie Fisher). El piloto Poe Dameron (Oscar Isaac) encabeza una misión para intentar destruir un acorazado de la Primera Orden. Mientras tanto, la joven Rey (Daisy Ridley) tendrá que definir su futuro y su vocación, y el viejo jedi Luke Skywalker (Mark Hamill) revaluar el significado de su vida.`
        },
        {
            id: 18,
            title: 'The Legend Of Tarzan',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/BBZNakN.jpg',
            year: 2016,
            director: 'David Yates',
            cast: `Alexander Skarsgård, Margot Robbie, Christoph Waltz, Samuel L. Jackson, Djimon Hounsou, Jim Broadbent, Ella Purnell, Simon Russell Beale, Madeleine Worrall, Laurence Spellman, Lasco Atkins, Casper Crump, Guy Potter, Rory J. Saper, Cali Nelle, Mimi Ndiweni`,
            sinopsis: `Ya hace años que Tarzán (Alexander Skarsgård) abandonó la jungla africana para llevar una vida aburguesada como John Clayton III, Lord Greystoke, junto a su esposa Jane (Margot Robbie). Pero un día le ofrecen el cargo de embajador en el Congo. En realidad, todo forma parte de un plan ideado por un capitán belga (Christoph Waltz), aunque los responsables de llevarlo a cabo no están preparados para ello.`
        },
        {
            id: 19,
            title: 'Thor: Ragnarok',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/tI5YSEh.jpg',
            year: 2017,
            director: 'Taika Waititi',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 20,
            title: 'Wonder Woman',
            price: getRandomArbitrary(15, 40),
            stock: getRandomArbitrary(10, 50),
            urlCover: 'https://i.imgur.com/qexPLfB.jpg',
            year: 2017,
            director: 'Patty Jenkins',
            cast: `Gal Gadot, Chris Pine, David Thewlis, Danny Huston, Elena Anaya, Ewen Bremner, Saïd Taghmaoui, Eugene Brave Rock, Connie Nielsen, Robin Wright, Lucy Davis, Samantha Jo, Lisa Loven, Florence Kasumba, Mayling Ng, Emily Carey, Doutzen Kroes, Jemma Moore`,
            sinopsis: `Antes de ser Wonder Woman (Gal Gadot) era Diana, princesa de las Amazonas, entrenada para ser una guerrera invencible. Diana fue criada en una isla paradisíaca protegida. Hasta que un día un piloto norteamericano (Chris Pine), que tiene un accidente y acaba en sus costas, le habla de un gran conflicto existente en el mundo [Primera Guerra Mundial]. Diana decide salir de la isla convencida de que puede detener la terrible amenaza. Mientras lucha junto a los hombres en la guerra que acabará con todas las guerras, Diana descubre todos sus poderes y su verdadero destino.`
        }
    ];
}