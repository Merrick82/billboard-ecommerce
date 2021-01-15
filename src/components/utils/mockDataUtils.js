import {getRandomArbitrary} from './numberUtils.js';

export function getCategoriesList() {
    return [
        {
            id: 1,
            title: 'Peliculas & Series',
            route: '/video'
        },
        {
            id: 2,
            title: 'Musica',
            route: '/music'
        },
        {
            id: 3,
            title: 'Comics',
            route: '/comic'
        }
    ];
}

export function getProductList() {
    return [
        {
            id: 1,
            category: 1,
            title: 'Avatar',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
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
            category: 1,
            title: 'Dunkirk',
            price: getRandomArbitrary(16, 29),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
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
            category: 1,
            title: 'IT',
            price: getRandomArbitrary(30, 45),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/2QeNbmL.jpg',
            year: 2017,
            director: 'Andy Muschietti',
            cast: `Bill Skarsgård, Jaeden Martell, Sophia Lillis, Finn Wolfhard, Wyatt Oleff, Jeremy Ray Taylor, Jack Dylan Grazer, Chosen Jacobs, Nicholas Hamilton, Jake Sim, Logan Thompson, Owen Teague, Jackson Robert Scott, Javier Botet, Stephen Bogaert, Stuart Hughes, Geoffrey Pounsett, Megan Charpentier, Isabelle Nelisse, Tatum Lee, Pip Dwyer, Molly Atkinson, Steven Williams, Elizabeth Saunders, Joe Bostick, Ari Cohen, Anthony Ulc, Edie Inksetter, Martha Gibson, Donald Tripe, Liz Gordon, Neil Crone, Janet Porter`,
            sinopsis: `Cuando empiezan a desaparecer niños en el pueblo de Derry (Maine), un pandilla de amigos lidia con sus mayores miedos al enfrentarse a un malvado payaso llamado Pennywise, cuya historia de asesinatos y violencia data de siglos. Adaptación cinematográfica de la conocida novela de Stephen King "It".`
        },
        {
            id: 4,
            category: 1,
            title: 'Kingsman: The Golden Circle',
            price: getRandomArbitrary(15, 40),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/5wel4LX.jpg',
            year: 2017,
            director: 'Matthew Vaughn',
            cast: `Taron Egerton, Colin Firth, Julianne Moore, Mark Strong, Halle Berry, Pedro Pascal, Channing Tatum, Thomas Turgoose, Jeff Bridges, Elton John, Bruce Greenwood, Emily Watson, Edward Holcroft, Hanna Alström, Sophie Cookson, Michael Gambon, Poppy Delevingne, Björn Granath, Samantha Womack, Tom Benedict Knight, Alessandro De Marco`,
            sinopsis: `Cuando el cuartel general de la agencia secreta es destruido, se descubre una organización de espionaje aliada en EE.UU. llamada Statesman, cuyo origen se remonta a la fecha en que ambas fueron fundadas. En una nueva aventura que pone a prueba la fuerza y el ingenio de sus agentes, ambas organizaciones secretas de élite aúnan sus esfuerzos para intentar derrotar a su enemigo común y salvar al mundo... algo que está convirtiéndose en una especie de hábito para Eggsy.`
        },
        {
            id: 5,
            category: 1,
            title: 'Despicable Me 3',
            price: getRandomArbitrary(19, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/MirVUWV.jpg',
            year: 2017,
            director: 'Kyle Balda, Pierre Coffin, Eric Guillon',
            cast: `Steve Carell, Kristen Wiig, Trey Parker`,
            sinopsis: `Balthazar Pratt, un antiguo niño estrella obsesionado con el personaje que encarnó en los años ochenta, demuestra ser el peor enemigo al que Gru ha debido enfrentarse hasta la fecha. `
        },
        {
            id: 6,
            category: 1,
            title: 'John Wick',
            price: getRandomArbitrary(10, 60),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/i0wbkiO.jpg',
            year: 2014,
            director: 'Chad Stahelski, David Leitch',
            cast: `Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe, Dean Winters, Adrianne Palicki, Omer Barnea, Toby Leonard Moore, Daniel Bernhardt, Bridget Moynahan, John Leguizamo, Ian McShane, Bridget Regan, Lance Reddick, Keith Jardine, Thomas Sadoski, Clarke Peters, Kevin Nash, Randall Duk Kim, David Patrick Kelly, Gameela Wright`,
            sinopsis: `En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo.`
        },
        {
            id: 7,
            category: 1,
            title: 'Justice League',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/b7NRpPm.jpg',
            year: 2017,
            director: 'Zack Snyder, Joss Whedon',
            cast: `Ben Affleck, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Henry Cavill, Amy Adams, Ciarán Hinds, J.K. Simmons, Jeremy Irons, Connie Nielsen, Amber Heard, Diane Lane, Billy Crudup, Daniel Stisen, Jesse Eisenberg, Samantha Jo, Joe Morton, Holt McCallany, Gem Refoufi`,
            sinopsis: `Motivado por la fe que había recuperado en la humanidad e inspirado por la acción altruista de Superman, Bruce Wayne recluta la ayuda de su nueva aliada, Diana Prince, para enfrentarse a un enemigo aún mayor. Juntos, Batman y Wonder Woman se mueven rápidamente para intentar encontrar y reclutar un equipo de metahumanos que combata esta nueva amenaza. El problema es que a pesar de la formación de esta liga de héroes sin precedentes –Batman, Wonder Woman, Aquaman, Cyborg y Flash– puede que sea demasiado tarde para salvar el planeta de una amenaza de proporciones catastróficas.`
        },
        {
            id: 8,
            category: 1,
            title: 'Kong',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/O4xifbI.jpg',
            year: 2017,
            director: 'Jordan Vogt-Roberts',
            cast: `Tom Hiddleston, Brie Larson, Samuel L. Jackson, John C. Reilly, John Goodman, Corey Hawkins, John Ortiz, Jing Tian, Toby Kebbell, Jason Mitchell, Thomas Mann, Shea Whigham, Eugene Cordero, Terry Notary, Marc Evan Jackson, Will Brittain, Takamasa Ishihara, Richard Jenkins, Allyn Rachel, Robert Taylor, James M. Connor`,
            sinopsis: `En los años 70, un variopinto grupo de exploradores y soldados es reclutado para viajar a una misteriosa isla del Pacífico. Entre ellos están el capitán James Conrad (Tom Hiddleston), el teniente coronel Packard (Samuel L. Jackson) y una fotoperiodista (Brie Larson). Pero al adentrarse en esta bella pero traicionera isla, los exploradores encontrarán algo absolutamente sorprendente. Sin saberlo, estarán invadiendo los dominios del mítico Kong, el gorila gigante rey de esta isla. Será Marlow (John C. Reilly), un peculiar habitante del lugar, quien les enseñe los secretos de Isla Calavera, además del resto de seres monstruosos que la habitan.`
        },
        {
            id: 9,
            category: 1,
            title: 'Last Action Hero',
            price: getRandomArbitrary(0, 20),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/LJH37Dg.jpg',
            year: 1993,
            director: 'John McTiernan',
            cast: `Arnold Schwarzenegger, Austin O'Brien, Charles Dance, Anthony Quinn, F. Murray Abraham, Robert Prosky, Mercedes Ruehl, Frank McRae, Tom Noonan, Bridgette Wilson, Ian McKellen, Art Carney, Rick Ducommun, Joan Plowright, Toru Tanaka, Tina Turner`,
            sinopsis: `Danny Madigan es un chico fantasioso, ferviente admirador de Jack Slater, el mayor héroe del cine de acción. Cuando se estrena su última película, el viejo acomodador del cine le regala una entrada para que la vea en primicia. Gracias a esa entrada, que resulta tener poderes mágicos, Danny consigue introducirse en la pantalla y vivir trepidantes aventuras con Jack.`
        },
        {
            id: 10,
            category: 1,
            title: 'Limitless',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/8k2ThBU.jpg',
            year: 2011,
            director: 'Neil Burger',
            cast: `Bradley Cooper, Abbie Cornish, Robert De Niro, Anna Friel, Andrew Howard, Johnny Whitworth, Robert John Burke, Tomas Arana`,
            sinopsis: `El escritor Eddie Morra (Bradley Cooper) sufre una grave crisis de creatividad. Un día prueba una nueva droga que le permite sacar el máximo partido a sus facultades mentales. De este modo, consigue triunfar en Nueva York. Un poderoso magnate de Wall Street (Robert De Niro) siente una irreprimible curiosidad por averiguar qué se esconde detrás de tanto éxito.`
        },
        {
            id: 11,
            category: 1,
            title: 'The Lion King',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/12qgoYR.jpg',
            year: 1994,
            director: 'Rob Minkoff, Roger Allers',
            cast: `Matthew Broderick, Jeremy Irons, James Earl Jones`,
            sinopsis: `La sabana africana es el escenario en el que tienen lugar las aventuras de Simba, un pequeño león que es el heredero del trono. Sin embargo, al ser injustamente acusado por el malvado Scar de la muerte de su padre, se ve obligado a exiliarse. Durante su destierro, hará buenas amistades e intentará regresar para recuperar lo que legítimamente le corresponde.`
        },
        {
            id: 12,
            category: 1,
            title: 'The Little Mermaid',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/OWVRhgz.jpg',
            year: 1989,
            director: 'John Musker, Ron Clements',
            cast: `Jodi Benson, Samuel E. Wright, Rene Auberjonois`,
            sinopsis: `Ariel, hija del rey Tritón, es la princesa de las sirenas. Está a punto de celebrarse su fiesta de cumpleaños y su mayor ilusión es poder conocer a los seres humanos. Con la ayuda de la bruja Úrsula, Ariel consigue subir a la superficie, donde salva de morir ahogado a un hermoso príncipe, cuyo barco acaba de naufragar, del que se enamora perdidamente.`
        },
        {
            id: 13,
            category: 1,
            title: 'Logan',
            price: getRandomArbitrary(10, 20),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/IHo1aHM.jpg',
            year: 2017,
            director: 'James Mangold',
            cast: `Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook, Stephen Merchant, Elizabeth Rodriguez, Richard E. Grant, Doris Morgado, Han Soto, Julia Holt, Elise Neal, Al Coronel`,
            sinopsis: `Sin sus poderes, por primera vez, Wolverine es verdaderamente vulnerable. Después de una vida de dolor y angustia, sin rumbo y perdido en el mundo donde los X-Men son leyenda, su mentor Charles Xavier lo convence para asumir una última misión: proteger a una joven que será la única esperanza para la raza mutante... Tercera y última película protagonizada por Hugh Jackman en el papel de Lobezno.`
        },
        {
            id: 14,
            category: 1,
            title: 'Maleficent',
            price: getRandomArbitrary(20, 35),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/Ro1kdFc.jpg',
            year: 2019,
            director: 'Joachim Rønning',
            cast: `Angelina Jolie, Michelle Pfeiffer, Elle Fanning, Harris Dickinson, Ed Skrein, Chiwetel Ejiofor, Juno Temple, Sam Riley, David Gyasi, Lesley Manville, Imelda Staunton, Jenn Murray, Kae Alexander, Fernanda Diniz, Teresa Mahoney, Takamasa Ishihara, Robert Lindsay, Judith Shekoni, Barry Aird, Joakim Skarli, Zak Holland, John Carew, Russell Balogh, Jess Liaudin, Bernardo Santos, Bruce Johnson, Tom Bonington, Rayna Campbell, Kas Meghani, Alex Martin, Mens-Sana Tamakloe, Mark Knightley, Frederick Szkoda, Sarah Sayuri Hare`,
            sinopsis: `Tiene lugar varios años después de los acontecimientos narrados en la primera película, y explora la relación entre Maléfica y Aurora y las alianzas que se forman para sobrevivir a las amenazas del mágico mundo en el que habitan. Secuela de "Maléfica" (2014).`
        },
        {
            id: 15,
            category: 1,
            title: 'Deadpool',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/bya1I1z.jpg',
            year: 2018,
            director: 'David Leitch',
            cast: `Ryan Reynolds, Fred Savage, Josh Brolin, Morena Baccarin, Julian Dennison, Zazie Beetz, T.J. Miller, Leslie Uggams, Karan Soni, Brianna Hildebrand, Jack Kesy, Eddie Marsan, Shiori Kutsuna, Randal Reeder, Nikolai Witschl, Thayr Harris, Rob Delaney, Lewis Tan, Bill Skarsgård, Terry Crews, Brad Pitt, Paul Wu, Robert Maillet, Alan Tudyk, Matt Damon, Michasha Armstrong, Joe Doserro, Hayley Sales, Islie Hirvonen, Jagua Arneja, Mike Dopud, Luke Roessler, Tanis Dolman, Hunter Dillon, Sala Baker, Paul Wernick, Rhett Reese, David Leitch`,
            sinopsis: `Deadpool (Ryan Reynolds) le cuenta al actor Fred Savage (el niño de "La Princesa Prometida") algunas de sus aventuras, en un homenaje-parodia a dicha película de 1987 en la que el abuelo le contaba historias a Fred. 'Once Upon a Deadpool' es una revisión estrenada en cines de "Deadpool 2" adaptada a la calificación por edades PG-13, es decir: un reestreno navideño sin violencia, palabras malsonantes y otras características del film original de David Leitch, añadiéndose además nuevas escenas a la película.`
        },
        {
            id: 16,
            category: 1,
            title: 'Spectre',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/nOGQ2mn.jpg',
            year: 2015,
            director: 'Sam Mendes',
            cast: `Daniel Craig, Christoph Waltz, Léa Seydoux, Ralph Fiennes, Monica Bellucci, Naomie Harris, Rory Kinnear, Ben Whishaw, Dave Bautista, Andrew Scott, Jesper Christensen, Stephanie Sigman, Tenoch Huerta, Adriana Paz, Domenico Fortunato, Marco Zingaro, Ian Bonar, Tam Williams, Pip Carter, Simon Lenagan, Alessandro Bressanello, Marc Zinga, Brigitte Millar, Adel Bencherif, Peppe Lanzetta, Francesco Arca, Matteo Taranto, Emilio Aniba, Benito Sagredo, George Lasha, Sargon Yelda, Andy Cheung, Erick Hayden, Antonio Salines, Nigel Barber, Patrice Naiambana, Stephane Cornicard, John Phillip Law, Joseph Balderrama, Eiji Mihara, Junichi Kajioka, Victor Schefé, Harald Windisch, Detlef Bothe, Bodo Friesecke, Noah Saavedra, Michael Glantschnig, Marlon Boess, Marie Fee Wohlmuth, Lili Epply, Lara Parmiani, Umit Ulgen, Amra Mallassi, Ziad Abaza, Nari Blair-Mangat, Judi Dench`,
            sinopsis: `James Bond recibe un críptico mensaje del pasado que le confía una misión secreta que lo lleva a México D.F. y a Roma, donde conoce a Lucía Sciarra, la hermosa viuda de un infame criminal. Bond se infiltra en una reunión secreta y descubre la existencia de una siniestra organización conocida como SPECTRE. Mientras tanto, en Londres, el nuevo director del Centro para la Seguridad Nacional cuestiona las acciones de Bond y pone en duda la importancia del MI6, encabezado por M. De modo encubierto Bond recluta a dos colaboradores para que le ayuden a encontrar a Madeleine Swann, la hija de su gran enemigo, el Sr. White, pues quizá tenga la clave para desentrañar el misterio de SPECTRE. A medida que Bond avanza en su investigación, descubre una estremecedora conexión entre él y el enemigo que busca.`
        },
        {
            id: 17,
            category: 1,
            title: 'Star Wars: The Last Jedi',
            price: getRandomArbitrary(15, 40),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/o9jl2Xh.jpg',
            year: 2017,
            director: 'Rian Johnson',
            cast: `Daisy Ridley, John Boyega, Adam Driver, Oscar Isaac, Mark Hamill, Carrie Fisher, Kelly Marie Tran, Domhnall Gleeson, Benicio del Toro, Laura Dern, Andy Serkis, Gwendoline Christie, Lupita Nyong'o, Anthony Daniels, Frank Oz, Warwick Davis, Veronica Ngo, Justin Theroux, Billie Lourd, Lily Cole, Navin Chowdhry, Temirlan Blaev, Sara Heller, Josiah Oniha, Joseph Gordon-Levitt, Liang Yang`,
            sinopsis: `La malvada Primera Orden se ha vuelto más poderosa y tiene contra las cuerdas a la Resistencia, liderada por la General Leia Organa (Carrie Fisher). El piloto Poe Dameron (Oscar Isaac) encabeza una misión para intentar destruir un acorazado de la Primera Orden. Mientras tanto, la joven Rey (Daisy Ridley) tendrá que definir su futuro y su vocación, y el viejo jedi Luke Skywalker (Mark Hamill) revaluar el significado de su vida.`
        },
        {
            id: 18,
            category: 1,
            title: 'The Legend Of Tarzan',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/BBZNakN.jpg',
            year: 2016,
            director: 'David Yates',
            cast: `Alexander Skarsgård, Margot Robbie, Christoph Waltz, Samuel L. Jackson, Djimon Hounsou, Jim Broadbent, Ella Purnell, Simon Russell Beale, Madeleine Worrall, Laurence Spellman, Lasco Atkins, Casper Crump, Guy Potter, Rory J. Saper, Cali Nelle, Mimi Ndiweni`,
            sinopsis: `Ya hace años que Tarzán (Alexander Skarsgård) abandonó la jungla africana para llevar una vida aburguesada como John Clayton III, Lord Greystoke, junto a su esposa Jane (Margot Robbie). Pero un día le ofrecen el cargo de embajador en el Congo. En realidad, todo forma parte de un plan ideado por un capitán belga (Christoph Waltz), aunque los responsables de llevarlo a cabo no están preparados para ello.`
        },
        {
            id: 19,
            category: 1,
            title: 'Thor: Ragnarok',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/tI5YSEh.jpg',
            year: 2017,
            director: 'Taika Waititi',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 20,
            category: 1,
            title: 'Wonder Woman',
            price: getRandomArbitrary(15, 40),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/qexPLfB.jpg',
            year: 2017,
            director: 'Patty Jenkins',
            cast: `Gal Gadot, Chris Pine, David Thewlis, Danny Huston, Elena Anaya, Ewen Bremner, Saïd Taghmaoui, Eugene Brave Rock, Connie Nielsen, Robin Wright, Lucy Davis, Samantha Jo, Lisa Loven, Florence Kasumba, Mayling Ng, Emily Carey, Doutzen Kroes, Jemma Moore`,
            sinopsis: `Antes de ser Wonder Woman (Gal Gadot) era Diana, princesa de las Amazonas, entrenada para ser una guerrera invencible. Diana fue criada en una isla paradisíaca protegida. Hasta que un día un piloto norteamericano (Chris Pine), que tiene un accidente y acaba en sus costas, le habla de un gran conflicto existente en el mundo [Primera Guerra Mundial]. Diana decide salir de la isla convencida de que puede detener la terrible amenaza. Mientras lucha junto a los hombres en la guerra que acabará con todas las guerras, Diana descubre todos sus poderes y su verdadero destino.`
        },
        {
            id: 21,
            category: 2,
            title: 'Aretha Franklin',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/dG6zYSG.jpg',
            year: 1967,
            director: 'Aretha Franklin',
            cast: `Aretha Franklin`,
            sinopsis: `Se puede decir que es la obra suprema de Lady Soul. Es un conjunto de grandes canciones que pasarán a la historia; pero de las que destaca la innolvidable Respect. El debut de Aretha en Atlantic y la inclusión de este gran éxito, han hecho del álbum todo un clásico. Está producido por Jerry Wexler; habitual de Aretha y su sonido anterior en el sello Columbia, asesorado por la banda de Muscle Shoals; Wexler creó un material ideal para hacer a Aretha subir definitivamente al trono del soul, a lo que ella respondió con las interpretaciones más brillantes y apasionadas de toda su carrera.

            La obra maestra editada en 1967 se volvió a reeditar más tarde remasterizada (por la discográfica Rhino en 1995) y con tres pistas más; las versiones estéreo de varios temas: "Respect", "I never loved a man the way I love you" y "Do right woman, do right man". No contiene ninguna colaboración vocal, a excepción de la de los coros por parte de las hermanas Franklin (Carolyn y Erma); pero en la parte de las composiciones sí hay grandes colaboraciones: Otis Redding, King Curtis, Sam Cooke y Aretha y Carolyn Franklin. Se ha reeditado en seis ocasiones: 1967 por Atlantic (LP), 1990 por Atlantic (CS), 1993 también por Atlantic (CD), 1995 en Rhino (CD) y en 2001 por 4 Men with Beards (LP).`
        },
        {
            id: 22,
            category: 2,
            title: 'Ariana Grande',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/Fmv2boE.jpg',
            year: 2018,
            director: 'Republic Records',
            cast: `Scooter Braun, Charles Anderson, Brian Malik Baptiste, Tommy Brown, Michael Foster, Hit-Boy, Ilya, Max Martin, Pharrell Williams`,
            sinopsis: `Sweetener —en español, Edulcorante — es el cuarto trabajo discográfico de la cantante estadounidense Ariana Grande. Este está producido por la misma cantante. Trabajó en conjunto con el productor sueco Max Martin y los estadounidenses Pharrell Williams y Savan Kotecha, entre otros y cuenta con colaboraciones de Nicki Minaj, Pharrell y Missy Elliott. El álbum fue lanzado el 17 de agosto de 2018 a través de Republic Records.3​ Este es el segundo álbum de Grande (después de Dangerous Woman en 2016) que lleva la etiqueta de contenido explícito debido al lenguaje soez y de doble sentido que contienen algunas canciones a excepción de «No Tears Left To Cry». Sweetener se destaca por abarcar temas como el amor, la recuperación, la excesiva pasión, relaciones tóxicas e insinuaciones sexuales que juegan con el doble sentido.`
        },
        {
            id: 23,
            category: 2,
            title: 'Bruce Springsteen',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/onQyrqM.jpg',
            year: 1984,
            director: 'Columbia Records',
            cast: `Jon Landau, Chuck Plotkin, Bruce Springsteen, Steve Van Zandt​`,
            sinopsis: `Born in the U.S.A. —en español: Nacido en Estados Unidos— es el séptimo álbum de estudio del músico estadounidense Bruce Springsteen, publicado por la compañía discográfica Columbia Records en junio de 1984.1​

            El álbum, grabado en los estudios Hit Factory de Nueva York entre enero de 1982 y marzo de 1984,2​ supone el regreso de Springsteen a la música rock tras publicar Nebraska, un álbum orientado al folk. Sin embargo, Born in the U.S.A. mantiene la lírica de Nebraska al incluir letras sobre el pesimismo y el aislamiento, con canciones como «Born in the U.S.A.», que aunque puede confundirse como un himno patriótico, contiene una crítica a la participación de EE.UU. en la Guerra de Vietnam, y en concreto al trato dado por el país a los veteranos de dicho conflicto. Además, en comparación con trabajos como Born to Run y Darkness on the Edge of Town, el álbum incluyó un sonido más comercial, marcado por el uso de sintetizadores, que ayudaron a Springsteen a extender su creciente popularidad.
            
            Born in the U.S.A. fue el álbum más vendido de 1985 en los Estados Unidos, así como el trabajo más exitoso a nivel comercial de Springsteen, con quince millones de copias vendidas en su país natal y en torno a las treinta millones de copias a nivel global. Además, produjo un total de siete sencillos que alcanzaron el top 10 en Estados Unidos, empatando con el álbum Thriller, de Michael Jackson, así como una gira mundial de dos años de duración. Fue también reconocido por la prensa musical como uno de los mejores trabajos de Springsteen.`
        },
        {
            id: 24,
            category: 2,
            title: 'David Bowie',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/wpIsWmd.jpg',
            year: 1973,
            director: 'RCA Records',
            cast: `Ken Scott, David Bowie`,
            sinopsis: `Aladdin Sane es el título del sexto álbum del artista británico David Bowie, publicado por la discográfica RCA Records en el año 1973. Es el primer álbum que publicó tras The Rise and Fall of Ziggy Stardust and the Spiders from Mars, considerado como uno de los mejores de su carrera, y el primero que escribió desde un genuino estatus de estrella pop.

            Aunque muchos críticos opinan Aladdin Sane contiene parte de los mejores momentos de Bowie, las opiniones acerca de la calidad del disco en su conjunto han estado más divididas. De este modo, los editores de NME Roy Carr y Charles Shaar Murray señalaron que el álbum era «extrañamente insatisfactorio, considerablemente inferior a la suma de sus partes»,1​ mientras que el erudito sobre Bowie Nicholas Pegg sostiene que se trata de «una de las más apremiantes, convincentes y esenciales» de sus obras.2​ La crítica que Ben Gerson preparó para Rolling Stone sostiene que se trata de un álbum «menos frenético que The Man Who Sold The World y menos íntimo que Hunky Dory, sin ninguno de sus ataques de falta de confianza».3​
            
            La tapa del disco fue realizada por Brian Duffy4​ y si bien la crítica tuvo opiniones acerca de Aladdin Sane, no se puede ignorar que la iconografía del rayo azul y rojo que cubre el ojo derecho de David Bowie se volvió un auténtico referente de la cultura pop.5​
            
            En 2003, el álbum fue clasificado, entre los seis discos de Bowie que entraron a la lista de Rolling Stone de los 500 álbumes más grandes de todos los tiempos (en el N° 277) y luego ocupó el puesto N°77 en la lista de Pitchfork Media de los mejores 100 álbumes de los años setenta.`
        },
        {
            id: 25,
            category: 2,
            title: 'Judas Priest',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/qmrsSP6.jpg',
            year: 1980,
            director: 'Columbia Records',
            cast: `Tom Allon`,
            sinopsis: `British Steel es el sexto álbum de estudio de la banda británica de heavy metal Judas Priest, publicado en 1980 por Columbia Records. Es la primera producción con el baterista Dave Holland, luego de ingresar a la banda en agosto de 1979 en reemplazo de Les Binks.

            Para muchos críticos es el trabajo que los consagró en los mercados mundiales y que colocó al heavy metal en la escena musical de principios de los ochenta. Además, es considerado como la grabación que encabezó la Nueva ola del heavy metal británico durante el primer semestre de ese año.1​ También, y con el pasar de los años, ha sido colocado en diversas listas sobre los mejores álbumes del metal, un ejemplo de ello es que en 2005 la revista Kerrang! lo posicionó en el puesto 12 de su lista de los 100 mejores álbumes británicos.2​
            
            En 2001 se remasterizó con dos pistas adicionales; «Red, White & Blue» grabada durante las sesiones de Turbo en 1985 y una versión en vivo de «Grinder» grabada en 1984 en Long Beach (California). Por su parte en 2009, la banda dio una serie de conciertos para conmemorar los primeros treinta años de su lanzamiento, del cual se grabó el CD y DVD British Steel - 30th Anniversary que se publicó en el 2010. Como dato tanto este disco como Rocka Rolla de 1974 y Defenders of the Faith de 1984, son sus únicas producciones que han sido interpretadas completamente en directo.`
        },
        {
            id: 26,
            category: 2,
            title: 'Madonna',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/qjuGm6T.jpg',
            year: 1986,
            director: 'Sire, Warner Bros',
            cast: `Madonna, Stephen Bray, Patrick Leonard`,
            sinopsis: `True Blue es el tercer álbum de estudio de la cantante estadounidense Madonna, publicado el 30 de junio de 1986 por la compañía discográfica Sire Records. Para su grabación, la cantante trabajó en conjunto con Stephen Bray y Patrick Leonard, además de haber participado en la composición y producción de todas las pistas del álbum.​ Referido como su obra más femenina, True Blue mostró sus conceptos del amor, el trabajo, los sueños, así como el de las decepciones, y fue inspirado por su entonces esposo Sean Penn, a quien Madonna le llegó a dedicar el álbum. Las canciones tomaron una dirección diferente a la que fueron sus trabajos previos, ya que incorporó elementos de música clásica dentro de su habitual género dance pop con el fin de que pudiese atraer un público más maduro que se mantenía escéptico ante su obra. 

            La instrumentación del álbum incluye sonidos de guitarras acústicas, baterías, sintetizadores e instrumentos musicales típicos de Cuba. Las pistas abarcan letras que van desde el amor hasta la libertad, y en el caso de «Papa Don't Preach», problemas sociales como el embarazo adolescente. Luego de su lanzamiento, True Blue recibió reseñas generalmente positivas por parte de críticos musicales, quienes lo describieron como lo mejor del dance pop y como un arquetipo para los álbumes publicados a finales de los años 1980 y principios de los de 1990.​ También elogiaron el hecho de que la voz de Madonna sonara más fuerte que en sus trabajos anteriores, al tiempo que destacaron sus habilidades como compositora, cantante y artista.9​
            
            Tras su publicación, True Blue se convirtió en un éxito mundial, pues alcanzó el número uno en un récord de 28 países,10​ entre ellos Alemania, Australia, Canadá, España, Estados Unidos, Francia, Italia y Reino Unido. Además, pasó 29 semanas consecutivas en la cima de la lista European Top 100 Albums, más de lo que cualquier otro álbum ha logrado. Se convirtió en el disco más vendido de 1986 y en el más comercializado en la década de 1980 por una mujer, y permanece como uno de los más vendidos en la historia, con ventas que sobrepasan las 25 millones de copias. Los cinco sencillos obtenidos del álbum entraron a las primeras cinco posiciones del conteo Billboard Hot 100, de los cuales «Live to Tell», «Papa Don't Preach» y «Open Your Heart» llegaron al primer puesto, un récord para esa época.14​
            
            El lanzamiento se promocionó con la segunda gira y la primera mundial de la intérprete, Who's That Girl World Tour, que visitó varias ciudades de Norteamérica, Europa y Asia en 1987.​ Los sencillos y sus respectivos videos musicales generaron debates entre los grupos sociales y académicos, especialmente la letra de «Papa Don't Preach» sobre el embarazo en los adolescentes y el video de «Open Your Heart», en el que se muestra a un niño entrando a un club nudista. A menudo se cita a True Blue como el álbum que convirtió a Madonna en una verdadera superestrella y que cimentó su reputación como la figura femenina más importante de la industria musical en los años 1980.​ Este álbum también le brindó su primera aparición en el Libro Guinness de los récords.`
        },
        {
            id: 27,
            category: 2,
            title: 'Metallica',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/mIeTnfW.jpg',
            year: 1986,
            director: 'Elektra Records',
            cast: `Flemming Rasmussen`,
            sinopsis: `Master of Puppets es el tercer álbum de estudio de la banda de thrash metal estadounidense Metallica. Fue lanzado al mercado el 3 de marzo de 1986, bajo el sello de Elektra Records, alcanzando el puesto 292​ en el Billboard 200. El álbum fue el primer disco de oro de la banda tras vender 500 000 copias en Estados Unidos, aunque luego superaría las 6 millones. 3​

            Master of Puppets es el último álbum de Metallica en el que participa el bajista Cliff Burton, quien moriría en un trágico accidente de autobús meses después del lanzamiento del disco. Este recibió críticas muy favorables y es considerado un clásico del thrash metal, junto con otros álbumes como Rust in Peace, de Megadeth, Among the Living, de Anthrax, o Reign in Blood, de Slayer y del heavy metal en general. Es considerado una de las mayores influencias del thrash metal de todos los tiempos. El solo de guitarra de la canción "Master Of Puppets" fue considerado el quincuagésimo de los cien mejores, según un ejemplar de la revista Guitar World de 1998. "Welcome Home (Sanitarium)", "Master Of puppets", "Disposable Heroes", "Battery", "Orion" y "The Thing That Should Not Be" son jugables en el videojuego Guitar Hero: Metallica. Battery es jugable en el videojuego Rock Band 2. Es clasificado en el puesto #1 como el mejor álbum de Metal de la historia4​ por el sitio web Metal Rules.5​ Asimismo, en 2003, en una edición especial, la revista Rolling Stone posicionó el álbum en el puesto 167 de su lista de los 500 mejores álbumes de todos los tiempos. El álbum en el 2016 fue preservado en la Biblioteca del Congreso de Estados Unidos, el álbum es el primer registro de metal que ingresa a este archivo. Por su "significado cultural, artístico o histórico a la sociedad", algunas emblemáticas obras son escogidas para formar parte del catálogo de la biblioteca del Congreso de Estados Unidos.`
        },
        {
            id: 28,
            category: 2,
            title: 'Nicki Minaj',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/EcFHLH1.jpg',
            year: 2014,
            director: 'Young Money, Cash Money, Republic',
            cast: `Bryan Williams, Dwayne Carter, Ronald «Slim» Williams, Nicki Minaj`,
            sinopsis: `The Pinkprint es el tercer álbum de estudio de la cantante, compositora y rapera trinitense Nicki Minaj. Fue puesto a la venta el 12 de diciembre de 2014 a través de las compañías discográficas Young Money Entertainment, Cash Money Records y Republic Records.1​ Minaj coprodujo el álbum junto a Birdman, Lil Wayne y Ronald Williams, también con la ayuda de una variedad de productores. Para apartarse de los elementos dance pop de su segundo álbum de estudio, Pink Friday: Roman Reloaded lanzado en 2012, lo que quería lograr Minaj era lanzar un álbum influenciado por el tradicional hip hop de sus raíces.

            Sobre su lanzamiento, críticos de la música elogiaron The Pinkprint por su producción general y la cohesión. Fue reconocido como el proyecto más fuerte de Minaj hasta la fecha y se ubicó como uno de los mejores álbumes de 2014 por varias publicaciones. Debutó en el número 2 en el Billboard 200 con ventas de primera semana de 244 000 unidades (194 000 en ventas del álbum, sin contar streaming). Hasta la actualidad , el álbum obtuvo la certificación de X3 Platino en los Estados Unidos por vender más de 3 000 000 de copias. En el Reino Unido, el álbum debutó en el número 5 en el UK Albums Chart.`
        },
        {
            id: 29,
            category: 2,
            title: 'Nirvana',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/mYguDpT.jpg',
            year: 1991,
            director: 'DGC Records',
            cast: `Butch Vig`,
            sinopsis: `Nevermind (en español: No importa) es el segundo álbum de estudio de la banda estadounidense de grunge Nirvana, publicado el 24 de septiembre de 1991. Producido por Butch Vig, Nevermind fue el primer lanzamiento de la banda con DGC Records. El líder de la agrupación, Kurt Cobain, trató de hacer música fuera de los límites restrictivos de la escena grunge de Seattle, aprovechando la influencia de grupos como los Pixies y su uso de la dinámica de canciones ruidosas y calmadas, con grandes composiciones y sonidos. Gracias a este álbum el género grunge se hizo conocido a nivel mundial, recibiendo una gran aceptación y aclamación por críticos especializados de música, quienes también consideran el álbum como uno de los mejores de la historia.

            Pese a las escasas esperanzas comerciales por parte de la banda y del sello discográfico, Nevermind se convirtió en un sorprendente éxito a finales de 1991, en gran parte debido a su primer sencillo, «Smells Like Teen Spirit». En enero de 1992 había desbancado al álbum de Michael Jackson Dangerous del número uno del Billboard. La RIAA certificó el álbum con disco de diamante (diez millones de copias vendidas). Nevermind fue el responsable de dar a conocer el rock alternativo al gran público y la crítica lo calificó como uno de los mejores álbumes de todos los tiempos. Ha vendido treinta millones de copias en todo el mundo. Fue clasificado en el puesto 17 en la lista de Los 500 mejores álbumes de la historia y el número 1 de Los 100 mejores álbumes de los 90 según la revista Rolling Stone.`
        },
        {
            id: 30,
            category: 2,
            title: 'No Doubt',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/IZjiLt1.jpg',
            year: 1995,
            director: 'Trauma Records, Interescope',
            cast: `Matthew Wilder`,
            sinopsis: `Tragic Kingdom (inglés para "Reino Trágico") es el tercer álbum de estudio de la banda estadounidense No Doubt. Fue lanzado el 10 de octubre de 1995 a través de Trauma Records, una división de Interscope Records. Fue producido por Matthew Wilder, mezclado por Paul Palmer y grabado en 11 estudios en Los Ángeles. Entre 1995 y 1998 siete sencillos fueron publicados, incluyendo «Just a Girl», que logró buenas posiciones en el Billboard Hot 100 en los Estados Unidos, al igual que en el Reino Unido, y «Don't Speak» que llegó al número uno en ambos países y que alcanzó las primeras cinco posiciones en la mayoría de las listas internacionales.

            El álbum recibió comentarios positivos de parte de la crítica. Fue nominado en la 38º entrega de los Premios Grammy en las categorías mejor artista nuevo y mejor álbum de rock. El álbum ha vendido más de 17 millones de copias en todo el mundo, y fue certificado por la RIAA con el disco de diamante tras vender más de 10 millones de ejemplares en Estados Unidos al igual que en Canadá, en donde superó el millón, además obtuvo el platino en el Reino Unido y el triple platino en Australia. El disco ayudó a iniciar el resurgimiento del ska en los años 90.
            
            En 2003, ingresó en la lista de Rolling Stone entre los 500 álbumes más grandes de la historia, ocupando el puesto 441.`
        },
        {
            id: 31,
            category: 2,
            title: 'Pink Floyd',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/TDDAacZ.jpg',
            year: 1972,
            director: 'Harvest Records, Capitol Records',
            cast: `Pink Floyd`,
            sinopsis: `The Dark Side of the Moon –en español: El lado oscuro de la luna– es un álbum conceptual, el octavo de estudio de la banda británica de rock progresivo Pink Floyd. Fue lanzado el 1 de marzo de 1973 en los Estados Unidos y el 24 de marzo del mismo año en el Reino Unido. Se estima que el álbum ha vendido más de 50 millones de copias mundialmente.2​

            El álbum está construido a partir de las ideas que Pink Floyd había explorado en sus conciertos y anteriores grabaciones, pero carece de las largas piezas instrumentales que caracterizaban a los trabajos posteriores a la marcha en 1968 de su miembro fundador, principal compositor y letrista, Syd Barrett.3​ La temática del álbum incluye el conflicto, la avaricia, el envejecimiento y la enfermedad mental, este último inspirado, en parte, por el deterioro mental de Barrett.3​
            
            El álbum se desarrolló como parte de una futura gira de la banda, estrenándose en directo varios meses antes de que siquiera hubieran comenzado las grabaciones en el estudio.4​ El nuevo material se fue refinando a medida que avanzaba la gira, y fue grabado en dos sesiones en 1972 y 1973 en los Abbey Road Studios de Londres.5​ Pink Floyd usó algunas de las técnicas de grabación más avanzadas de la época, incluyendo grabaciones multipista y loops.6​ En varias de las pistas se usaron sintetizadores analógicos, mientras que una serie de entrevistas con la banda y el equipo técnico aparecen a lo largo del álbum en forma de citas filosóficas. Alan Parsons fue el responsable de algunos de los aspectos sónicos más innovadores del álbum, incluyendo la interpretación no léxica de Clare Torry.
            
            Fue un masivo éxito comercial, llegó a lo más alto de la lista Billboard 200 durante una semana,7​ y permaneció en las listas 937 semanas (más de 19 años), siendo así el álbum que más tiempo ha permanecido en listas de la historia musical.8​ Con una estimación de ventas de más de 50 millones de copias, siendo así el tercer álbum más vendido en la historia de la música, tan sólo detrás de Thriller de Michael Jackson y Back in Black de AC/DC,9​ es uno de los álbumes con mayores ventas del mundo y el más exitoso de Pink Floyd. Ha sido remasterizado y reeditado en dos ocasiones, además de haber sido versionado por varias bandas. Del álbum se extrajeron dos sencillos: «Money» y «Us and Them».
            
            Además de su éxito comercial, The Dark Side of the Moon fue altamente aclamado por la crítica y es considerado un trabajo seminal en la historia del rock, con muchas listas y rankings considerándolo entre los mejores discos de todos los tiempos.10​ Además, continúa siendo el álbum más popular de la banda, tanto entre sus seguidores como con la crítica especializada, quienes lo consideran como uno de los trabajos más influyentes y valorados en la historia de la música popular, siendo preservado en el Registro Nacional de la Grabación de la Biblioteca del Congreso de Estados Unidos por ser «cultural, histórica, o estéticamente significativo».11​Considerado como el mejor album de todos los tiempos por los críticos y encuestadores de la escena del Rock .`
        },
        {
            id: 32,
            category: 2,
            title: 'The Beatles',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/6KC30Hn.jpg',
            year: 1967,
            director: 'Parlophone Records, Capitol Records',
            cast: `	George Martin`,
            sinopsis: `Sgt. Pepper's Lonely Hearts Club Band es el octavo álbum de estudio de la banda británica de rock, The Beatles.

            Grabado en un periodo de 129 días y publicado el 1 de junio de 1967 en el Reino Unido y el 2 de junio del mismo año en Estados Unidos,10​ es a menudo citado por la crítica como una de sus mejores obras y uno de los discos más influyentes de todos los tiempos.11​12​13​ Continuando con la maduración artística de la banda vista en Revolver (1966),13​ se alejó bastante del pop rock convencional de la época e incorporó elementos poco comunes y muy divergentes entre sí a su música, como música india, música psicodélica, music hall, e influencias sinfónicas.14​15​
            
            Durante las sesiones de Sgt. Pepper's, la banda logró mejorar la calidad en la producción de su música, mientras que experimentaban con nuevas técnicas de grabación; entre ellas, la idea por parte del productor George Martin de incluir una orquesta.16​17​ La portada del álbum, extensamente aclamada e imitada; fue diseñada por los artistas Peter Blake y Jann Haworth, a partir de un dibujo de Paul McCartney.12​
            
            Pasó 27 semanas en la cima del UK Album Chart en el Reino Unido;18​ y alcanzó el primer lugar del Billboard 200 de Estados Unidos, manteniéndose ahí durante 15 semanas.19​
            
            Fundamental en la escena emergente del rock psicodélico, e inmediatamente después de salir a la venta, se convirtió en una sensación popular, obteniendo cuatro Premios Grammy en 1968.19​ Es uno de los álbumes más vendidos de la historia, con 32 millones de ventas estimadas;20​ y también se ha convertido en el segundo álbum más vendido en la historia del Reino Unido.21​ Innovador en muchos sentidos, desde su estructura hasta sus técnicas de grabación, fue agregado al Registro Nacional de la Grabación de la Biblioteca del Congreso de Estados Unidos por ser «cultural, histórica, o estéticamente significativo».15​nota 1​
            
            En 2020, Rolling Stone lo situó en el número 1 de su lista «500 Greatest Albums of All Time».`
        },
        {
            id: 33,
            category: 3,
            title: 'The Amazing Spider-Man',
            price: getRandomArbitrary(2, 5),
            stock: getRandomArbitrary(10, 20),
            quantity: 0,
            urlCover: 'https://i.imgur.com/0HTsJF0.jpg',
            year: 2016,
            director: 'Taika Waititi',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 34,
            category: 3,
            title: 'The Amazing Spider-Man',
            price: getRandomArbitrary(2, 5),
            stock: getRandomArbitrary(10, 30),
            quantity: 0,
            urlCover: 'https://i.imgur.com/YQ4nC7P.jpg',
            year: 2016,
            director: 'Taika Waititi',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 35,
            category: 3,
            title: 'Superman',
            price: getRandomArbitrary(1, 7),
            stock: getRandomArbitrary(10, 20),
            quantity: 0,
            urlCover: 'https://i.imgur.com/z0DNBDI.jpg',
            year: 2011,
            director: 'George Perez, Jesus Merino',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 36,
            category: 3,
            title: 'Aquaman: Rebirth',
            price: getRandomArbitrary(1, 6),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/cWYyrfi.jpg',
            year: 2011,
            director: 'Abnett Eaton Jimenez Morales Eltaeb',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 37,
            category: 3,
            title: 'The Mighty Thor',
            price: getRandomArbitrary(2, 5),
            stock: getRandomArbitrary(10, 15),
            quantity: 0,
            urlCover: 'https://i.imgur.com/zR7eRbd.jpg',
            year: 2016,
            director: 'Aaron Dauterman Wilson',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 38,
            category: 3,
            title: 'Wonder Woman',
            price: getRandomArbitrary(3, 10),
            stock: getRandomArbitrary(10, 20),
            quantity: 0,
            urlCover: 'https://i.imgur.com/Z1puP19.jpg',
            year: 2011,
            director: 'Brian Azzarello, Cliff Chiang',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 39,
            category: 3,
            title: 'Superman',
            price: getRandomArbitrary(20, 50),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/qFxsD79.jpg',
            year: 2011,
            director: 'George Perez, Nicola Scott, Trevor Scott',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 40,
            category: 3,
            title: 'Captain Marvel',
            price: getRandomArbitrary(2, 5),
            stock: getRandomArbitrary(10, 30),
            quantity: 0,
            urlCover: 'https://i.imgur.com/thGKSkz.jpg',
            year: 2016,
            director: 'Deconnic, Rios, Bellaire',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 41,
            category: 3,
            title: 'Batman',
            price: getRandomArbitrary(1, 5),
            stock: getRandomArbitrary(10, 40),
            quantity: 0,
            urlCover: 'https://i.imgur.com/QQhBEhY.jpg',
            year: 2011,
            director: 'Scott Snyder, Greg Capullo, Jonathan Glapion',
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        },
        {
            id: 42,
            category: 3,
            title: 'Captain America',
            price: getRandomArbitrary(2, 8),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/cOedPk5.jpg',
            year: 2016,
            director: `Brubaker, Epting, D'Armata`,
            cast: `Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Idris Elba, Karl Urban, Jeff Goldblum, Anthony Hopkins, Benedict Cumberbatch, Sam Neill, Ray Stevenson, Tadanobu Asano, Stan Lee, Rob Mayes, Rachel House, Luke Hemsworth, Charlotte Nicdao, Matt Damon, Zachary Levi, Paris Moletti`,
            sinopsis: `Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!.`
        }
    ];    
}

export function getFeaturedProductsList() {
    return [
        {
            id: 6,
            category: 1,
            title: 'John Wick',
            price: getRandomArbitrary(10, 60),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/i0wbkiO.jpg',
            year: 2014,
            director: 'Chad Stahelski, David Leitch',
            cast: `Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe, Dean Winters, Adrianne Palicki, Omer Barnea, Toby Leonard Moore, Daniel Bernhardt, Bridget Moynahan, John Leguizamo, Ian McShane, Bridget Regan, Lance Reddick, Keith Jardine, Thomas Sadoski, Clarke Peters, Kevin Nash, Randall Duk Kim, David Patrick Kelly, Gameela Wright`,
            sinopsis: `En Nueva York, John Wick, un asesino a sueldo retirado, vuelve otra vez a la acción para vengarse de los gángsters que le quitaron todo.`
        },
        {
            id: 10,
            category: 1,
            title: 'Limitless',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/8k2ThBU.jpg',
            year: 2011,
            director: 'Neil Burger',
            cast: `Bradley Cooper, Abbie Cornish, Robert De Niro, Anna Friel, Andrew Howard, Johnny Whitworth, Robert John Burke, Tomas Arana`,
            sinopsis: `El escritor Eddie Morra (Bradley Cooper) sufre una grave crisis de creatividad. Un día prueba una nueva droga que le permite sacar el máximo partido a sus facultades mentales. De este modo, consigue triunfar en Nueva York. Un poderoso magnate de Wall Street (Robert De Niro) siente una irreprimible curiosidad por averiguar qué se esconde detrás de tanto éxito.`
        },
        {
            id: 12,
            category: 1,
            title: 'The Little Mermaid',
            price: getRandomArbitrary(10, 30),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/OWVRhgz.jpg',
            year: 1989,
            director: 'John Musker, Ron Clements',
            cast: `Jodi Benson, Samuel E. Wright, Rene Auberjonois`,
            sinopsis: `Ariel, hija del rey Tritón, es la princesa de las sirenas. Está a punto de celebrarse su fiesta de cumpleaños y su mayor ilusión es poder conocer a los seres humanos. Con la ayuda de la bruja Úrsula, Ariel consigue subir a la superficie, donde salva de morir ahogado a un hermoso príncipe, cuyo barco acaba de naufragar, del que se enamora perdidamente.`
        },
        {
            id: 13,
            category: 1,
            title: 'Logan',
            price: getRandomArbitrary(10, 20),
            stock: getRandomArbitrary(10, 50),
            quantity: 0,
            urlCover: 'https://i.imgur.com/IHo1aHM.jpg',
            year: 2017,
            director: 'James Mangold',
            cast: `Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook, Stephen Merchant, Elizabeth Rodriguez, Richard E. Grant, Doris Morgado, Han Soto, Julia Holt, Elise Neal, Al Coronel`,
            sinopsis: `Sin sus poderes, por primera vez, Wolverine es verdaderamente vulnerable. Después de una vida de dolor y angustia, sin rumbo y perdido en el mundo donde los X-Men son leyenda, su mentor Charles Xavier lo convence para asumir una última misión: proteger a una joven que será la única esperanza para la raza mutante... Tercera y última película protagonizada por Hugh Jackman en el papel de Lobezno.`
        }
    ];
}