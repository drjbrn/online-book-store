/* eslint-disable max-len */
interface BooksList {
  title: string;
  authors: string;
  description?: string;
  categories: string;
  genres: string;
  isbn13?: number;
  publishedDate?: string;
  price: number;
  image: string;
  image2?: string;
  rating: number;
  stock?: number;
}

const books: BooksList[] = [
  {
    title: 'What Moves the Dead',
    authors: 'T. Kingfisher',
    description: `When Alex Easton, a retired soldier, receives word that their childhood friend Madeline Usher is dying, they race to the ancestral home of the Ushers in the remote countryside of Ruritania.
                  What they find there is a nightmare of fungal growths and possessed wildlife, surrounding a dark, pulsing lake. Madeline sleepwalks and speaks in strange voices at night, and her brother Roderick is consumed with a mysterious malady of the nerves.
                  Aided by a redoubtable British mycologist and a baffled American doctor, Alex must unravel the secret of the House of Usher before it consumes them all.`,
    categories: 'Bestsellers',
    genres: 'Horror',
    isbn13: 9781250830753,
    publishedDate: '2022-07-12',
    price: 19.99,
    image: 'https://tornightfire.com/wp-content/uploads/2021/09/What-Moves-The-Dead.jpeg',
    image2:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/cfb39ab2-cae1-4018-8eab-9a3672cfd185.__CR0,0,300,300_PT0_SX300_V1___.jpg',
    rating: 4.4,
    stock: 5
  },
  {
    title: 'Malice House',
    authors: 'M. Shepherd',
    description: `Of all the things aspiring artist Haven Marbury expected to find while clearing out her late father’s remote seaside house, Bedtime Stories for Monsters was not on the list. This secret   handwritten manuscript is disturbingly different from his Pulitzer-winning works: its interweaving short stories crawl with horrific monsters and enigmatic humans that exist somewhere between this world and the next. The stories unsettle but also entice Haven, practically compelling her to illustrate them while she stays in the house that her father warned her was haunted. Clearly just dementia whispering in his ear . . . right?`,
    categories: 'Bestsellers',
    genres: 'Horror',
    isbn13: 9781368089289,
    publishedDate: '2022-04-10',
    price: 26.99,
    image:
      'https://static.wixstatic.com/media/f48a5e_becad43d6275483f86780d3c800cdaac~mv2.jpg/v1/fill/w_536,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Malice%20House.jpg',
    image2:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/45596795-c89e-4c2f-98eb-a8cc49823db4.__CR0,0,300,300_PT0_SX300_V1___.jpeg',
    rating: 4.0,
    stock: 4
  },
  {
    title: 'It: A Novel',
    authors: 'S. King',
    description: `Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.
                They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.
                Readers of Stephen King know that Derry, Maine, is a place with a deep, dark hold on the author. It reappears in many of his books, including Bag of Bones, Hearts in Atlantis, and 11/22/63. But it all starts with It.`,
    categories: 'Bestsellers',
    genres: 'Horror',
    isbn13: 9781501142970,
    publishedDate: '2016-05-01',
    price: 21.99,
    image: 'https://i2.wp.com/thenerddaily.com/wp-content/uploads/2019/10/It-by-Stephen-King.jpg',
    image2: 'https://media.newyorker.com/photos/59b3f875e899d754c57f4c35/master/w_2560%2Cc_limit/Rothman-IT.JPG',
    rating: 4.4,
    stock: 10
  },
  {
    title: 'A Dowry of Blood',
    authors: 'S. T. Gibson',
    description: `This is my last love letter to you, though some would call it a confession. . .
                  Saved from the brink of death by a mysterious stranger, Constanta is transformed from a medieval peasant into a bride fit for an undying king. But when Dracula draws a cunning aristocrat and a starving artist into his web of passion and deceit, Constanta realizes that her beloved is capable of terrible things.
                  Finding comfort in the arms of her rival consorts, she begins to unravel their husband's dark secrets. With the lives of everyone she loves on the line, Constanta will have to choose between her own freedom and her love for her husband. But bonds forged by blood can only be broken by death.`,
    categories: 'New Releases',
    genres: 'Horror',
    isbn13: 9780316521277,
    publishedDate: '2022-11-25',
    price: 27.0,
    image:
      'https://images.thalia.media/-/BF2000-2000/44c4a6a45f264e7f8c9a85c4004bb44c/a-dowry-of-blood-gebundene-ausgabe-s-t-gibson-englisch.jpeg',
    image2:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/b50a6da0-f451-4876-b2ac-9a22cb537cc3.__CR0,0,800,800_PT0_SX300_V1___.png',
    rating: 4.6,
    stock: 7
  },
  {
    title: 'The Last House on Needless Street',
    authors: 'C. Ward',
    description: `In a boarded-up house on a dead-end street at the edge of the wild Washington woods lives a family of three.
                  A young girl who isn’t allowed outside, not after last time.
                  A man who drinks alone in front of his TV, trying to ignore the gaps in his memory.
                  And a house cat who loves napping and reading the Bible.
                  An unspeakable secret binds them together, but when a new neighbor moves in next door, what is buried out among the birch trees may come back to haunt them all.`,
    categories: 'new releases',
    genres: 'Horror',
    isbn13: 9781250812643,
    publishedDate: '2022-09-20',
    price: 17.99,
    image: 'https://m.media-amazon.com/images/I/915ZEVEob-L.jpg',
    image2: 'https://m.media-amazon.com/images/I/91DpLVAx3YL.jpg',
    rating: 4.2,
    stock: 6
  },
  {
    title: 'Beyond Good and Evil',
    authors: 'F. Nietzsche',
    description: `Expanding on his ideas from Thus Spoke Zarathustra, this influential text undermines the assumptions of traditional morality and encourages us to think more critically about the world in which we live. Nietzsche considers past philosophers and religious leaders from Socrates to Descartes to Schopenhauer with a critical and pessimistic eye. Questioning the blind following of religious faith, he examines the deeper question of who is truly good or evil.
    Beyond Good and Evil presents a unique perspective of the human mind offered through the words of one of history's most controversial philosophers.`,
    categories: 'New Releases',
    genres: 'Psychology',
    isbn13: 9781398820579,
    publishedDate: '2022-11-01',
    price: 12.99,
    image: 'https://m.media-amazon.com/images/I/61ajgqdPSYL.jpg',
    image2: 'https://media.s-bol.com/5Wm6Rw9ErXgR/RO1Y21O/550x825.jpg',
    rating: 4.5,
    stock: 12
  },
  {
    title: 'Sentient: How Animals Illuminate the Wonder of Our Human Senses',
    authors: 'J. Higgins',
    description: `There is a scientific revolution stirring in the field of human perception. Research has shown that the extraordinary sensory powers of our animal friends can help us better understand the same powers that lie dormant within us.
                  From the harlequin mantis shrimp with its ability to see a vast range of colors, to the bloodhound and its hundreds of millions of scent receptors; from the orb-weaving spider whose eyes recognize not only space but time, to the cheetah whose ears are responsible for its perfect agility, these astonishing animals hold the key to better understanding how we make sense of the world around us.`,
    categories: 'New Releases',
    genres: 'Psychology',
    isbn13: 9781982156565,
    publishedDate: '2022-11-01',
    price: 18.99,
    image: 'https://m.media-amazon.com/images/I/81klcSWQdoL.jpg',
    image2: 'https://m.media-amazon.com/images/I/71GOVXc1jOL.jpg',
    rating: 4.3,
    stock: 25
  },
  {
    title: 'Hell Bent',
    authors: 'L. Bardugo',
    description: `Find a gateway to the underworld. Steal a soul out of hell. A simple plan, except people who make this particular journey rarely come back. But Galaxy “Alex” Stern is determined to break Darlington out of purgatory—even if it costs her a future at Lethe and at Yale.
                  Forbidden from attempting a rescue, Alex and Dawes can’t call on the Ninth House for help, so they assemble a team of dubious allies to save the gentleman of Lethe. Together, they will have to navigate a maze of arcane texts and bizarre artifacts to uncover the societies’ most closely guarded secrets, and break every rule doing it. But when faculty members begin to die off, Alex knows these aren’t just accidents. Something deadly is at work in New Haven, and if she is going to survive, she’ll have to reckon with the monsters of her past and a darkness built into the university’s very walls.`,
    categories: 'Comming Soon',
    genres: 'Mystery',
    isbn13: 9781250889256,
    publishedDate: '2023-01-25',
    price: 26.99,
    image: 'https://m.media-amazon.com/images/I/71sm8UroasL.jpg',
    image2: 'https://pbs.twimg.com/media/FdQPeRMWQAAhsYR?format=jpg&name=medium',
    rating: 5.0,
    stock: 23
  },
  {
    title: 'The Butcher and The Wren',
    authors: 'A. Urquhart',
    description: `Something dark is lurking in the Louisiana bayou: a methodical killer with a penchant for medical experimentation is hard at work completing his most harrowing crime yet, taunting the authorities who desperately try to catch up.
                  But forensic pathologist Dr. Wren Muller is the best there is. Armed with an encyclopedic knowledge of historical crimes, and years of experience working in the Medical Examiner's office, she's never encountered a case she couldn't solve. Until now. Case after case is piling up on Wren's examination table, and soon she is sucked into an all-consuming cat-and-mouse chase with a brutal murderer getting more brazen by the day.`,
    categories: 'Signed Books',
    genres: 'Thriller & Suspense',
    isbn13: 9781638930761,
    publishedDate: '2022-11-25',
    price: 27.0,
    image: 'https://m.media-amazon.com/images/I/819g3sNOjXL.jpg',
    image2:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/6e4aa4fe-0a92-4d3b-a866-0299d583fb67.__CR0,0,300,300_PT0_SX300_V1___.jpg',
    rating: 4.1,
    stock: 4
  },
  {
    title: 'Lassiter',
    authors: 'J. R. Ward',
    description: `In the next epic installment in J. R. Ward’s #1 New York Times bestselling Black Dagger Brotherhood series, a fallen angel finds love with a mysterious female—who could be his destiny...or the embodiment of his utter destruction.`,
    categories: 'Comming Soon',
    genres: 'Romance',
    isbn13: 9781982180027,
    publishedDate: '2023-04-11',
    price: 28.99,
    image: 'https://m.media-amazon.com/images/I/71izvplqhVL.jpg',
    image2: 'https://m.media-amazon.com/images/I/71rN54gFgqL.jpg',
    rating: 4.4,
    stock: 15
  },
  {
    title: 'Twisted',
    authors: 'E. McIntire',
    description: `She's his diamond in the rough. He's her worst nightmare.
                  Yasmin Karam, daughter to one of the richest men in the world, has never known strife. So, when her beloved father falls ill, she's determined to make his final days his happiest. His last wish? To see her married to a man of his choosing. Except Yasmin's heart already belongs to someone else. A servant. A street rat. A man her father would never consider worthy. Stuck between a rock and a hard place, Yasmin strikes a desperate deal with her father's right-hand man, Julian, not realizing he has his own twisted agenda.
                  Julian Faraci has one goal: become the most powerful man in the world. He's built a future from broken bones and faded bruises, never caring who he hurt along the way. But when his mentor falls ill, he finds himself on the verge of losing everything, and he'll stop at nothing to inherit what is rightfully his. Even if it means forcing a woman he can't stand into marriage.
                  Yasmin is a brat who speaks out of turn, and he's the villain of her story. But he decides she'll be his—no matter what it takes to convince her.`,
    categories: 'Comming Soon',
    genres: 'Romance',
    isbn13: 9781728275840,
    publishedDate: '2023-02-07',
    price: 17.99,
    image: 'https://m.media-amazon.com/images/I/91oPXqapffL.jpg',
    image2: 'https://images.gr-assets.com/authors/1657807699p8/20245445.jpg',
    rating: 4.5,
    stock: 14
  },
  {
    title: 'Queen of Myth and Monsters',
    authors: 'S. St. Clair',
    description: `Isolde, newly coronated queen, has finally found a king worthy of her in the vampire Adrian. But their love for each other has cost Isolde her father and her homeland. With two opposing goddesses playing mortals and vampires like chess pieces against one another, Isolde is uncertain who her allies are in the vampire stronghold of Revekka.
                  Now, as politics in the Red Palace grow more underhanded and a deadly blood mist threatens all of Cordova, Isolde must trust in the bond she's formed with Adrian, even as she learns troubling information about his complicated past.`,
    categories: 'New Releases',
    genres: 'Romance',
    isbn13: 9781728267500,
    publishedDate: '2022-12-20',
    price: 14.99,
    image: 'https://m.media-amazon.com/images/I/81bYdicZy6L.jpg',
    image2: 'https://m.media-amazon.com/images/I/814sJ-inWDL.jpg',
    rating: 4.2,
    stock: 10
  },
  {
    title: "New Castle's Kadunce Murders: Mystery And The Devil in Northwest Pennsylvania",
    authors: 'D. R. Perelman',
    description: `In the summer of 1978, a mother and her four-year-old were stabbed to death in the quiet town of New Castle. Police suspected the husband, Lou Kadunce, but were unable to find either a weapon or a motive. Sitting in a Lawrence County jail in 1981, convicted serial killer Michael Atkinson accused Frank Costal - a carny, petty thief and Satanist - of having an affair with the Kadunce husband and participating in the murder. A series of intense trials ensued as Costal was convicted of the homicides and a jury found the husband not guilty. Questions surrounding the case gripped the region and grabbed headlines in the Pittsburgh Press.`,
    categories: 'Bestsellers',
    genres: 'True Crime',
    isbn13: 9781467144025,
    publishedDate: '2019-11-18',
    price: 23.99,
    image: 'https://m.media-amazon.com/images/I/716DvhuVJRL.jpg',
    image2: 'https://m.media-amazon.com/images/I/71nq+am+5AL.jpg',
    rating: 4.2,
    stock: 20
  },
  {
    title: 'Mortal Danger: And Other True Cases',
    authors: 'A. Rule',
    description: `The author of The Stranger Beside Me brings her brilliantly informed understanding of the sociopath to this riveting true crime collection. Featured here is the case of a Southern California family man who lured a beautiful flight attendant into a passionate and dangerous relationship. Other cases include that of the woman who masterminded her husband’s murder to gain his inheritance...the monstrous sadist whose prison release damaged a presidential candidate’s campaign and ended in a bitter double tragedy in a quiet neighborhood three thousand miles away...the shocking DNA link between a cold-blooded crime and a cold case...and inside the horrific case of the man who crossed an ocean and several countries to stalk the Eurasian beauty who had fled from him in desperation.`,
    categories: 'Signed Books',
    genres: 'True Crime',
    isbn13: 9781416542209,
    publishedDate: '2008-11-25',
    price: 7.99,
    image: 'https://m.media-amazon.com/images/I/81JsncKLCUL.jpg',
    image2: 'https://m.media-amazon.com/images/I/81UL9LIs68L.jpg',
    rating: 3.8,
    stock: 19
  },
  {
    title: 'The Ultimate Serial Killer Trivia Book',
    authors: 'J. Rosewood',
    description: `Have you ever wanted to know everything there is to know about serial killers?
                  Ever pondered the differences between psychopaths and sociopaths?
                  Want to know exactly why cannibals eat human flesh?
                  Want to read about the most downright bizarre serial killer motivations of all time?
                  What jobs attract the most serial killers? How many uncaptured murderers are walking our streets right this second? How do female killers differ from males? What deluded maniac killed people because he thought it would stop earthquakes? What movie franchise has inspired the most copycat murders?
                  The Ultimate Serial Killer Trivia Book answers all these questions and much, much more!`,
    categories: 'New Releases',
    genres: 'True Crime',
    isbn13: 9781648450891,
    publishedDate: '2022-11-10',
    price: 14.9,
    image: 'https://m.media-amazon.com/images/I/71YI8Au3UbL.jpg',
    image2: 'https://m.media-amazon.com/images/I/71zlIi4NstL.jpg',
    rating: 4.5,
    stock: 10
  },
  {
    title: 'Bloodmarked',
    authors: 'T. Deonn',
    description: `The powerful sequel to the instant New York Times bestselling and award-winning Legendborn—perfect for fans of Cassandra Clare and Margaret Rogerson!
                  The shadows have risen, and the line is law.
                  All Bree wanted was to uncover the truth behind her mother’s death. So she infiltrated the Legendborn Order, a secret society descended from King Arthur’s knights—only to discover her own ancestral power. Now, Bree has become someone new:
                  A Medium. A Bloodcrafter. A Scion.`,
    categories: 'New Releases',
    genres: 'Romance',
    isbn13: 9781665934695,
    publishedDate: '2022-11-08',
    price: 19.99,
    image:
      'https://www.gannett-cdn.com/presto/2022/11/07/USAT/0a0b2354-cc14-4b9e-b9bf-1a576ed9eaa6-bloodmarked-9781534441637_xlg.jpeg?width=1588',
    image2: 'https://rivetedlit.com/wp-content/uploads/2022/08/MicrosoftTeams-image-17-scaled.jpeg',
    rating: 4.9,
    stock: 10
  },
  {
    title: 'Mystery In Rocky Mountain National Park',
    authors: 'Aaron Johnson',
    description: `Before Jake’s grandfather died, he was on the trail of a centuries-old mystery. And he has entrusted that mystery to Jake, leaving behind a set of hidden codes, riddles, maps, and other clues that lead Jake and his friends on a scavenger hunt into the heart of Colorado’s wild and rugged Rocky Mountain National Park.
                  Through twists and turns, the mystery unfolds while Jake, Amber, and Wes learn about survival skills, natural history, integrity, character, and friendship.
                  Along the way, they discover they are not the only ones on this quest. An elusive shadow group is close on their heels.
                  Illustrated by the author, this page-turning adventure is designed to capture the imagination of even the most reluctant of young readers. Parents looking for a delightful read-aloud adventure will find it hard to put down. (Word of Caution: readers frequently note that this is a “Please read just one more chapter” book).
                  If your family loves the enchanted lands of our national parks, this series will take you to hidden places and into breathtaking landscapes. If you enjoy movies like National Treasure and Uncharted or mystery adventures like the Hardy Boys and Gary Paulsen’s survival story, Hatchet, you’ll love this first installment of the National Park Mystery Series.
                  Start this epic adventure on your Kindle app, or begin the journey with a paperback copy.`,
    categories: 'Travel',
    genres: 'Travel',
    isbn13: 9780989711654,
    publishedDate: '2022-05-22',
    price: 2.99,
    image: 'https://m.media-amazon.com/images/I/71RZapPW7pL.jpg',
    image2: 'https://m.media-amazon.com/images/I/61XE88yWXIL.jpg',
    rating: 5,
    stock: 7
  },
  {
    title: "King Solomon's Mines: (illustrated by A. C. Michael)",
    authors: 'H. Rider Haggard',
    description: `Before Jake’s grandfather died, he was on the trail of a centuries-old mystery. And he has entrusted that mystery to Jake, leaving behind a set of hidden codes, riddles, maps, and other clues that lead Jake and his friends on a scavenger hunt into the heart of Colorado’s wild and rugged Rocky Mountain National Park.
    Through twists and turns, the mystery unfolds while Jake, Amber, and Wes learn about survival skills, natural history, integrity, character, and friendship.
    Along the way, they discover they are not the only ones on this quest. An elusive shadow group is close on their heels.
    Illustrated by the author, this page-turning adventure is designed to capture the imagination of even the most reluctant of young readers. Parents looking for a delightful read-aloud adventure will find it hard to put down. (Word of Caution: readers frequently note that this is a “Please read just one more chapter” book).
    If your family loves the enchanted lands of our national parks, this series will take you to hidden places and into breathtaking landscapes. If you enjoy movies like National Treasure and Uncharted or mystery adventures like the Hardy Boys and Gary Paulsen’s survival story, Hatchet, you’ll love this first installment of the National Park Mystery Series.
    Start this epic adventure on your Kindle app, or begin the journey with a paperback copy.`,
    categories: 'Classics',
    genres: 'Adventures',
    isbn13: 9781420957976,
    publishedDate: '2018-07-18',
    price: 2.2,
    image: 'https://m.media-amazon.com/images/I/51hfmWA4lwL.jpg',
    image2: 'https://m.media-amazon.com/images/I/51A-meJ-OlL.jpg',
    rating: 4,
    stock: 13
  },
  {
    title: 'Treasure Island (Signet Classics)',
    authors: 'R.L. Stevenson',
    description: `For sheer storytelling delight and pure adventure, Treasure Island has never been surpassed. From young Jim Hawkins's first encounter with the sinister beggar Pew to the climactic battle with the most memorable villain in literature, Long John Silver, this novel has fired readers' imaginations for generations. A rousing tale of treachery, greed and daring, Treasure Island continues to enthrall readers of all ages.`,
    categories: 'Classics',
    genres: 'Adventures',
    isbn13: 9781101990322,
    publishedDate: '2016-05-05',
    price: 2.91,
    image: 'https://m.media-amazon.com/images/I/711MBvrOJ8L.jpg',
    image2: 'https://i.etsystatic.com/12303878/r/il/ff49ad/3143602405/il_794xN.3143602405_spqq.jpg',
    rating: 4,
    stock: 10
  },
  {
    title: 'The Three Musketeers (Wordsworth Classics)',
    authors: 'Alexandre Dumas',
    description: `One of the most celebrated and popular historical romances ever written, The Three Musketeers tells the story of the early adventures of the young Gascon gentleman, D'Artagnan and his three friends from the regiment of the King's Musketeers - Athos, Porthos and Aramis.
                    Under the watchful eye of their patron M. de Treville, the four defend the honour of the regiment against the guards of Cardinal Richelieu, and the honour of the queen against the machinations of the Cardinal himself as the power struggles of seventeenth century France are vividly played out in the background.
                    But their most dangerous encounter is with the Cardinal's spy, Milady, one of literature's most memorable female villains, and Alexandre Dumas employs all his fast-paced narrative skills to bring this enthralling novel to a breathtakingly gripping and dramatic conclusion.
                    Our edition uses the William Barrow translation first published by Bruce and Wylde (London,1846)`,
    categories: 'Classics',
    genres: 'Adventures',
    isbn13: 9781853260407,
    publishedDate: '1992-05-05',
    price: 1.19,
    image: 'https://m.media-amazon.com/images/I/81lD4bQ1PnL.jpg',
    image2: 'https://m.media-amazon.com/images/I/51OQ7lLnTpL.jpg',
    rating: 5,
    stock: 5
  },
  {
    title: 'The Jungle Book: The Original Illustrated',
    authors: 'Rudyard Kipling',
    description: `Rudyard Kipling's "The Jungle Book" is a childhood classic that has seen many adaptations since it was first published.  This is the original 1894 edition that started it all.  It includes the original illustrations which introduced the imagination of Kipling to a generation of readers.  While many know Mowgli and Baloo and other beloved favorites from the movies, many parents will enjoy presenting the original tale to their children almost exactly the way young people enjoyed it from the beginning.  In fact, this original edition also includes illustrations that were drawn by Rudyard Kipling's own father.  This 1894 reprint edition will be a family heirloom for generations to come.`,
    categories: 'Classics',
    genres: 'Adventures',
    isbn13: 9781947844674,
    publishedDate: '2018-05-28',
    price: 1.19,
    image: 'https://m.media-amazon.com/images/I/717ZKE8Z3iL.jpg',
    image2: 'https://m.media-amazon.com/images/I/71fEB+PPXEL.jpg',
    rating: 5,
    stock: 20
  },
  {
    title: 'The Lost World',
    authors: 'Sir Arthur Conan Doyle',
    description: `Originally published serially in 1912, “The Lost World” is Sir Arthur Conan Doyle’s classic tale of discovery and adventure. The story begins with the narrator, the curious and intrepid reporter Edward Malone, meeting Professor Challenger, a strange and brilliant paleontologist who insists that he has found dinosaurs still alive deep in the Amazon. Malone agrees to accompany Challenger, as well as Challenger’s unconvinced colleague Professor Summerlee, and the adventurer Lord John Roxton, into the wilds of South America and the Amazon in search of Challenger’s fantastical beasts. There, cut off from the rest of civilization and high atop an isolated plateau, the explorers find themselves in an amazing land of extinct dinosaurs, a native tribe, and a group of ape-like creatures. The party is drawn into a violent battle when they are taken captive by the ape men and must use their cunning and resourcefulness to escape and save the lives of their party and the other captured native tribesmen. Immensely popular and influential, “The Lost World” is a classic tale of science-fiction adventure that continues to inspire and captivate to this day. This edition is printed on premium acid-free paper.`,
    categories: 'Classics',
    genres: 'Adventures',
    isbn13: 9781420960891,
    publishedDate: '2019-02-16',
    price: 2.95,
    image: 'https://m.media-amazon.com/images/I/71IodSjKUEL.jpg',
    image2: 'https://m.media-amazon.com/images/I/61u7odQRtwL.jpg',
    rating: 5,
    stock: 15
  },
  {
    title: 'Sword in the Stone',
    authors: 'T. H. White',
    description: `The extraordinary story of a boy called Wart - ignored by everyone except his tutor, Merlyn - who goes on to become King Arthur. When Merlyn the magician comes to tutor Sir Ector's sons Kay and the Wart, schoolwork suddenly becomes much more fun. After all, who wouldn't enjoy being turned into a fish, or a badger, or a snake? But Merlyn has very particular plans for the Wart. This new edition of T.H White's classic story includes a special "Why You'll Love This Book" introduction by bestselling-author, Garth Nix.`,
    categories: 'Literature & Fiction',
    genres: 'Fantasy',
    isbn13: 9780007263493,
    publishedDate: '2008-04-03',
    price: 2.99,
    image: 'https://m.media-amazon.com/images/P/000726349X.01._SCLZZZZZZZ_SX500_.jpg',
    image2: 'https://m.media-amazon.com/images/I/81xnxNNMaLL.jpg',
    rating: 4,
    stock: 14
  },
  {
    title: 'The Forgotten Beasts of Eld',
    authors: 'Patricia A. McKillip',
    description: `Young Sybel, the heiress of powerful wizards, needs the company of no-one outside her gates. In her exquisite stone mansion, she is attended by exotic, magical beasts: Riddle-master Cyrin the boar; the treasure-starved dragon Gyld; Gules the Lyon, tawny master of the Southern Deserts; Ter, the fiercely vengeful falcon; Moriah, feline Lady of the Night. Sybel only lacks the exquisite and mysterious Liralen, which continues to elude her most powerful enchantments.
                  But when a soldier bearing an infant arrives, Sybel discovers that the world of man and magic is full of both love and deceit, and the possibility of more power than she can possibly imagine.`,
    categories: 'Literature & Fiction',
    genres: 'Fantasy',
    isbn13: 9781616962777,
    publishedDate: '2017-10-05',
    price: 3.99,
    image: 'https://m.media-amazon.com/images/P/1616962771.01._SCLZZZZZZZ_SX500_.jpg',
    image2: 'https://m.media-amazon.com/images/I/61Nn60HBtYL.jpg',
    rating: 5,
    stock: 2
  },
  {
    title: 'TensorFlow 2.0 in Action: Covers Tensorflow Version 2.9',
    authors: 'Thushan Ganegedara',
    description: `TensorFlow is a one-stop solution for building, monitoring, optimizing,and deploying your models. This practical guide to building deep learning models with the new features of TensorFlow 2.0is filled with engaging projects, simple language, and coverage of the latest algorithms.
                  TensorFlow 2.0 in Action teaches you to use the new features of TensorFlow 2.0 to create advanced deep learning models. You’ll learn by building hands-on projects including an image classifier that can recognize objects, a French-to-English machine translator, and even a neural network that can write fiction. You’ll dive into the details of modern deep learning techniques including both transformer and attention models, and learn how pretrained models can solve your tricky data science- problems.
                  TensorFlow is the go-to framework for putting deep learning into production. Created by Google, this ground breaking tool handles repetitive low-level operations and frees you up to focus on innovating your AIs.TensorFlow encompasses almost every element of a deep learning pipeline―aone-stop solution for building, monitoring, optimizing, and deploying your models.`,
    categories: 'Computers & Technology',
    genres: 'Architecture & Microprocessors',
    isbn13: 9781617298349,
    publishedDate: '2022-10-03',
    price: 37.99,
    image: 'https://m.media-amazon.com/images/I/61Oxx0S5F6L.jpg',
    image2:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef59c53f-7292-4760-b60a-42acdf1da55b.__CR109,0,1455,900_PT0_SX970_V1___.png',
    rating: 3,
    stock: 1
  },
  {
    title: 'Programming Quantum Computers: Essential Algorithms and Code Samples',
    authors: 'Eric Johnston, Nic Harrigan',
    description: `Quantum computers are poised to kick-start a new computing revolution—and you can join in right away. If you're in software engineering, computer graphics, data science, or just an intrigued computerphile, this book provides a hands-on programmer's guide to understanding quantum computing. Rather than labor through math and theory, you'll work directly with examples that demonstrate this technology's unique capabilities.
                  Quantum computing specialists Eric Johnston, Nic Harrigan, and Mercedes Gimeno-Segovia show you how to build the skills, tools, and intuition required to write quantum programs at the center of applications. You'll understand what quantum computers can do and learn how to identify the types of problems they can solve.`,
    categories: 'Computers & Technology',
    genres: 'Architecture & Microprocessors',
    isbn13: 9781492039686,
    publishedDate: '2019-07-16',
    price: 34.99,
    image: 'https://m.media-amazon.com/images/I/710xqcSg2BL.jpg',
    image2: 'https://m.media-amazon.com/images/I/71YjY9nhHdL.jpg',
    rating: 5,
    stock: 9
  },
  {
    title: "The Nostalgia Nerd's Retro Tech: Computer, Consoles & Games",
    authors: 'Peter Leigh',
    description: `Remember what a wild frontier the early days of home gaming were? Manufacturers releasing new consoles at a breakneck pace; developers creating games that kept us up all night, then going bankrupt the next day; and what self-respecting kid didn't beg their parents for an Atari or a Nintendo? This explosion of computers, consoles, and games was genuinely unlike anything the tech world has seen before or since.
                  This thoroughly researched and geeky trip down memory lane pulls together the most entertaining stories from this dynamic era, and brings you the classic tech that should never be forgotten.`,
    categories: 'Computers & Technology',
    genres: 'Architecture & Microprocessors',
    isbn13: 9781781575703,
    publishedDate: '2018-11-01',
    price: 2.99,
    image: 'https://m.media-amazon.com/images/I/51ZWwUZqw1S.jpg',
    image2: 'https://m.media-amazon.com/images/I/81Uc6nxqPVL.jpg',
    rating: 4,
    stock: 25
  },
  {
    title: 'Grokking Algorithms',
    authors: 'Aditya Bhargava',
    description: `Grokking Algorithms is a fully illustrated, friendly guide that teaches you how to apply common algorithms to the practical problems you face every day as a programmer. You'll start with sorting and searching and, as you build up your skills in thinking algorithmically, you'll tackle more complex concerns such as data compression and artificial intelligence. Each carefully presented example includes helpful diagrams and fully annotated code samples in Python.
                  Learning about algorithms doesn't have to be boring! Get a sneak peek at the fun, illustrated, and friendly examples you'll find in Grokking Algorithms on Manning Publications' YouTube channel.
                  Continue your journey into the world of algorithms with Algorithms in Motion, a practical, hands-on video course available exclusively at Manning.com.
                  Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.`,
    categories: 'Computers & Technology',
    genres: 'Architecture & Microprocessors',
    isbn13: 9781617292231,
    publishedDate: '2014-12-31',
    price: 27.99,
    image: 'https://m.media-amazon.com/images/I/91p7WLtvCAL.jpg',
    image2: 'https://m.media-amazon.com/images/I/816rnJwrvgL.jpg',
    rating: 5,
    stock: 2
  },
  {
    title: 'Unity Game Development in 24 Hours, Sams Teach Yourself',
    authors: 'Mike Geig',
    description: `In just 24 lessons of one hour or less, Sams Teach Yourself Unity Game Development in 24 Hours will help you master the Unity 2021 game engine at the heart of Inside, Kerbal Space Program, Subnautica, and many other sizzling-hot games! This book's straightforward, step-by-step approach teaches you everything from the absolute basics through sophisticated game physics, animation, and mobile device deployment techniques. Every lesson builds on what you've already learned, giving you a rock-solid foundation for real-world success.`,
    categories: 'Programming',
    genres: 'Games',
    isbn13: 9780137445080,
    publishedDate: '2022-01-31',
    price: 18.19,
    image: 'https://m.media-amazon.com/images/I/41BMc-bIjsL._SX380_BO1,204,203,200_.jpg',
    image2: 'https://i.libcats.org/covers/58000/1bd673dfb006f8102e259a5d9b404881-d.jpg',
    rating: 5,
    stock: 6
  },
  {
    title: 'Destiny: Grimoire Anthology - Dark Mirror',
    authors: 'Bungie',
    description: `Bungie presents the Destiny Grimoire Anthology, a must-have collectible lore compendium designed and assembled for Destiny’s devoted and enlightened scholars and lore lovers, as well as fans of fantasy and science fiction storytelling. Until now, the myths, mysteries, and machinations of the Destiny universe were found hidden throughout the worlds—enticing threads that hinted at a greater tapestry. The Destiny Grimoire Anthology weaves tales from multiple sources together for the first time, casting new light on Destiny’s most legendary heroes, infamous villains, and their greatest moments of triumph and tragedy.
                  This volume illuminates a facet of the world of Destiny, and challenges players’ thoughts and assumptions on what it means to be a Guardian, offering new and differing perspectives on the cosmic war that rages between the Traveler and its ancient enemies.`,
    categories: 'Programming',
    genres: 'Games',
    isbn13: 9781789091373,
    publishedDate: '2018-12-11',
    price: 16.14,
    image: 'https://m.media-amazon.com/images/I/718pXzWVPxL.jpg',
    image2: 'https://m.media-amazon.com/images/I/91sLqZnrVEL.jpg',
    rating: 5,
    stock: 8
  },
  {
    title: 'Retro Gaming: A Byte-sized History of Video Games – From Atari to Zelda',
    authors: 'Mike Diver',
    description: `Take a trip down memory lane with Retro Gaming, and relive the glory days (and not so glory days) of your old retro tech favourites.
                  Published in paperback to tie-in with 50 years of console gaming, Retro Gaming is packed with all the characters, games, consoles and franchises you used to love - and probably still do. This is a compact, conversational compendium of all-time highs - alongside just a handful of humorous (in hindsight) lows - from decades of arcade, computer, console and handheld hits.
                  From Atari's early arcade classics and home games consoles of the 1970s, through to classics that keep on giving, such as Halo and Tomb Raider, this book summarizes the significant releases, research and revolutions that have made video games a £100 billion (and rising) industry.
                  Evergreen favourites from Nintendo, SEGA and Sony are present and correct - no collection would be complete without entries for Mario and Sonic, Tetris and Crash Bandicoot. But we also give credit to the less-celebrated but utterly vital titles, characters, controllers and systems that have helped the world of gaming expand and evolve.
                  A guide, a companion and a window onto a joyous past, Retro Gaming is a perfect book to dip in and out of, as mood and your current gaming habits dictate.`,
    categories: 'Programming',
    genres: 'Games',
    isbn13: 9781912785865,
    publishedDate: '2022-09-15',
    price: 6.78,
    image: 'https://m.media-amazon.com/images/I/715dv8jH1iL.jpg',
    image2: 'https://m.media-amazon.com/images/I/61TNax94X+L.jpg',
    rating: 4,
    stock: 10
  }
];

export { BooksList, books };
