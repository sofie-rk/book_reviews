const bookTypes = ["Audiobook", "Book"]

const genres = ["Biography/Memoir", "Personal Success", "Comedy", "Nonfiction", "Truecrime", "Fiction"]

const books = [

    murderInLittleEgypt = {
        title: "Murder in Little Egypt",
        type: bookTypes[0],
        length: "13h, 12min",
        author: "Darcy O'Brien",
        read: "May-June 2021",
        genre: [genres[0]],
        imageloc: "images/murderInLittleEgypt.jpg",
        review: "Murder in Little Egypt is a true crime, telling the story of the unimaginable crime of a father murdering his son. \
                Dr. Cavaness was a well respected doctor living in a small, rural place called Eldorado in Southern Illinois. Despite him being a greedy, drunken, and selfish man, the townpeople of Eldorado worshiped him. He had 4 sons, Mark, Kevin, Sean and Patrick.\
                Murder in Little Egyot is a story of manipulation, hatred, coldness and inhumanity. In the beginning, the reader gets a thourghough introduction to Dr. Cavaness life, long before he murdered his son.\
                I would recommend this book for those interested in true crime. The book is written on a detective and interpersonal level, without too many gory details.\
                ",
        
    },
    
    aRipInHeaven = {
        title: "A Rip in Heaven",
        type: bookTypes[0],
        length: "10h, 18min",
        author: "Jeanine Cummins",
        read: "March-April 2021",
        genre: [genres[0]],
        imageloc: "images/aRipInHeaven.jpg",
        review: "A Rip in Heaven is Jeanine Cummins' story of a horrifying night when her cousins Julie and Robin Kerry and her brother Tom Cummins were brutally assualted. \
                April 4th 1991, Tom, Julie and Robin went for a late-night walk on the Old Chain of Rocks Bridge outside of St. Louis, Missouri. \
                On the bridge, they met Marlin Gray, Antonio Richardson, Reginald Clemsons and Daniel Winfrey, who robbed, assaulted and pushed them from the bridge. \
                A Rip in Heaven is a memoir of a shocking crime and its aftermath. It's impeccably written, and the author does an excellent job of respectfully telling a story that needed to be told. \
                I must say that I truly enjoyed reading the book, and would recommend it to anyone who likes true crime and memoirs.",
    },
    
    nextLevelBasic = {
        title: "Next Level Basic - The Definitive Basic Bitch Handbook",
        type: bookTypes[0],
        length: "4h, 36min",
        author: "Stassi Schroeder",
        read: "April-May 2021",
        genre: [genres[0], genres[1]],
        imageloc: "images/nextLevelBasic.jpg",
        review: "I was not a big Stassi fan after her first appereances on Vanderpump Rules. Although I grew to like her eventually, I did not expect to enjoy her book as much as I did. \
                As the book title implies, this book is about embracing being basic a.f. \
                A basic bitch loves all things Starbucks, selfies, social media, hot dogs, bubbly coctails, #OOTD, millenial pink... The list goes on and on. Basically, she covers every imaginable basic subject. \
                Stassi is bright, witty and authenic. It is easy entertainment, and I must shamefully admit that I enjoyed each and every part of it. \
                What I love the most about the book, though, is how empowering it is. When Stassi tells you to be basic a.f. she means that you should embrace being yourself. \
                Find your own style, learn from your mistakes, and find the people that love and support you. \
                \"Think of times you have felt your happiest, and make a list of them. And then take some time to think about why you were happy. \
                Yes, sometimes it will be because you were with loved ones or it was your 21st birthday or your son was born. \
                But a lot of them will be simply because you were yourself. And you would not having to pretend to be a foodie who despises hotdogs or a TV hater who would never watch Kardashians, even though you watch it on the reg. \
                Look to those moments and aspire to keep those moments going. And that's what makes you an enlightened next level basic bitch badass.\"\
                ",
    },
    
    giveThemLala = {
        title: "Give them Lala",
        type: bookTypes[0],
        length: "5h, 44min",
        author: "Lala Kent",
        read: "May 2021",
        genre: [genres[0], genres[1]],
        imageloc: "images/giveThemLala.jpg",
        review: "Lala Kent is known from the reality series \"Vanderpump Rules\". \
                In a collection of essays, Lala takes the readers through her journey from a suburban Utah life to Hollywood glamour. \
                Openly and vulnerable, she tells stories about her upbringing, failed relationships, Vanderpump Rules filming, sobriety, meeting her fiance Randall Emmett, and more. \
                Give Them Lala is a nice and easy read that was entertaining and funny. I'm glad I read it, but it does not reach the top of the list for me. \
                I think the book misses a quality stortyline and some important points for the reader. Maybe the book was written too early in her life and career.",
    },
    
    bornACrime = {
        title: "Born a Crime - Stories from a South African Childhood",
        type: bookTypes[0],
        length: "8h, 44min",
        author: "Trevor Noah",
        read: "April 2021",
        genre: [genres[1], genres[2]],
        imageloc: "images/bornACrime.jpg",
        review: "",
    },
    
    fiveSecondRule = {
        title: "The 5 Second Rule - Transform your Life, Work and Confidence with Everyday Courage",
        type: bookTypes[0],
        length: "7h, 35min",
        author: "Mel Robbins",
        read: "April 2021",
        genre: [genres[1]],
        imageloc: "images/fiveSecondRule.jpg",
        review: "",
    },
    
    girlStopApologizing = {
        title: "Girl, Stop Apologizing - A Shame-Free Plan for Embracing and Achieving Your Goals",
        type: bookTypes[0],
        length: "8h, 10min",
        author: "Rachel Hollis",
        read: "January 2021",
        genre: [genres[1]],
        imageloc: "images/girlStopApologizing.jpg",
        review: "",
    },
    
    theTruthsWeHold = {
        title: "The Truths We Hold - An American Journey",
        type: bookTypes[0],
        length: "9h, 26min",
        author: "Kamela Harris",
        read: "December 2020-January 2021",
        genre: [genres[0]],
        imageloc: "images/theTruthsWeHold.jpg",
        review: "Unfortunately not the top of the list for me. I will definently read anything Kamela Harris writes in 10 years or so, \
        but I did not find this book particularly interesting nor good. \
        Harris shares some stories of her personal life, from growing up to studing to getting into politics to meeting her husband etc.\
        However, most of the book is centered around her career, and for a regular non-american person like me is this part too long, too detalied and difficult to follow. \
        I also felt that this book was too long and that the chapters were poorly structured. \
        I will give Harris another chance if she writes other books in the future, because I am sure she has a very interesting and important story to tell.\
        ",
    },
    
    talkingAsFastAsICan = {
        title: "Talking as Fast as I Can - From Gilmore Girls to Gilmore Girls (and Everything in Between)",
        type: bookTypes[0],
        length: "4h, 35min",
        author: "Lauren Graham",
        read: "June 2021",
        genre: [genres[0]],
        imageloc: "images/talkingAsFastAsICan.jpg",
        review: "In \"Talking as Fast a I Can\", Lauren Graham shares stories about her life growing up, becoming an actress and living in Hollywood. \
        She plays the iconic \"Lorelai Gilmore\" in the TV-series \"Gilmore Girls\" which aired for seven seasons between 2000-2007.\
        I was late to the party and watched the show for the first time in 2017. I became obsessively in love with everything about it, and in just a few years I've rewatched the show several times.\
        I guess I was in desperate need of somthing to satisfy the big Stars-Hollow shaped hole in my life. Unfortunatley, this book wasn't enough to do so.\
        Lauren Graham seems like a wonderful woman, but I couldn't help but wanting her to be Lorelai Gilmore instead. \
        Although I enjoyed her reflections on Gilmore Girls and being Lorelai Gilmore, it was not enough to make this an amazing book.\
        I would easily listen to her for hours describing how it was to do each an every episosde, so maybe this book would never contain enough details to make me happy.\
        I'm glad I read (I even finished it in 2 days), and I really couldn't not read it given how much I love Gilmore Girls.",
    },
    
    invisibleWomen = {
        title: "Invisible Women: Exposing Data Bias in a World Designed for Men",
        type: bookTypes[1],
        length: "411 pages",
        author: "Caroline Criado Pérez",
        read: "July 2021",
        genre: [genres[3]],
        imageloc: "images/invisibleWomen.jpg",
        review: "Invisible women is a collection of statistics enlightening unconscious gender bias. It describes \
        the dangers when systems made by and for men fail at considering women's need and habits. \
        The book is eye opening, provoking, incredibly enlightening, and a must-read for EVERYONE. \
        Quotes from the book: \
        \"When we are designing a world that is meant to work for everyone we need women in the room.\" \
        \"It begings with how doctors are trained. Historically it's been assumed that there wasn't anything fundamentally different between male and female bodies other that size and reproductive function, \
        and so for years medical education has been focused on a male 'norm', with everything that falls outside that designated 'atypical' or even 'abnormal'... Anatomy, and female anatomy.\"\
        \"a Finnish study found that single women recovered better from heart attacks than married women - particulary when put alongside a University of Michigan study which found that \
        husbands create an extra seven hours of housework a week for women.\" \
        \"It is abundantly clear that the culture of paid work as a whole needs a radical overhaul. It needs to take into account that women are not the unencumbered workers the traditional workplace has been designed to suit.\"\
        ",
    },

    quiet = {
        title: "Quiet - The power of introverts in a world that can't stop talkning", 
        type: bookTypes[1],
        length: "",
        read: "August 2021",
        genre: [],
        imageloc: "images/quiet.jpg",
        review: "",
    },

    weThoughtWeKnewYou = {
        title: "We thought we knew you: A Terrifying True Story of Secrets, Betrayal, Deception and Murder", 
        type: bookTypes[0],
        length: "9h, 47min",
        author: "M. William Phelps",
        read: "August 2021",
        genre: [genres[0], genres[4]],
        imageloc: "images/weThoughtWeKnewYou.jpg",
        review: "Not impressed. \
        I read this book after recommendations from audible and goodreads based on my previous truecrime readings and after seeing the good reviews.\
        Unfortunately, this did not enter one of my favorite books.\
        \"We Througt We Knew You\" is a true story about the murder of Mary Yoder, a chiropractor operating a chiropractic center with her husband Bill.\
        One day she comes home unwell, suddendly vomiting and weak. She dies at the hospital, and it is later discovered that she had been poisoned with colchicine. \
        The story follows Adam Yoder, Bill and Mary's son, and his on-and-off girlfriend Kaitlyn Conley, who worked at the chiropractic center with Bill and Mary.\
        Spolier alert: Kaitlyn poisoned Mary. \
        Although the story is truly sad and unreal, I was never shocked by unknown twists. \
        The writing style did also not work well for me. Phelps jumps back and forth in time, and I struggled with understanding the circumstances around all of the fights between Adam and Kaitlyn.\
        It is unnessecary repetitive, and I think it could have been easily shorten to half.\
        Not a must-read from my side.\
        ",

    },

    snape = {
        title: "Snape: A Definitive Reading", 
        type: bookTypes[1],
        length: "",
        author: "Lorrie Kim",
        read: "September 2021",
        genre: [genres[3]],
        imageloc: "images/snape.jpg",
        review: "Oh well, where do I start. Even though I consider myself a hard-core potterhead, I was hesitant to go as far as reading this character analysis of Severus Snape.\
        But I loved it. Snape is a super complex character from the books of Harry Potter, and this book helped me gain even more reflections about the misunderstood man. \
        I really hope Lorrie Kim writes more in the future. Anyhow, I will start diving into more character analysis books of Harry Potter characters after this one. Next is Albus Dumbledore by Irvin Khyatman!\
        ",
    },

    thePerksOfBeingAWallflower = {
        title: "The Perks of Being a Wallflower", 
        type: bookTypes[1],
        length: "231 pages",
        author: "Stephen Chbosky",
        read: "September 2021",
        genre: [genres[5]],
        imageloc: "images/thePerksOfBeingAWallflower.jpg",
        review: "\"The Perks of Being a Wallflower\" follows Charlie, a shy, socially awkward, yet intelligent boy beyond his years. \
        The story follows him through freshman year of high school, where he tries to navigate through a wide variety of feelings, new friends and tons of books.\
        I think this can be considered a '\classic\' and a \'must-read\' within the Young Adult genre.\
        Charlie shows that being different is ok, and that you can find friends in all sort of packages.\
        ",
    },

    drinkingAndTweeting = {
        title: "Drinking and Tweeting - And Other Brandi Blunders", 
        type: bookTypes[0],
        length: "5h, 31 min",
        author: "Brandi Glanville",
        read: "September 2021",
        genre: [genres[0], genres[3]],
        imageloc: "images/drinkingAndTweeting.jpg",
        review: "Brandi Glanville offers a hilarious and easy read with this book. She spills the beans about her cheating ex-husband,\
        one-night stands, her wild ride into \"The Real Housewives of Beverly Hills\" and the plastic surgery that made her vagina seventeen years old again.\
        I recommend this one to everyone who watches RHOBH, and especially those who struggles with understanding whether they like or is annoyed by Brandi Glanville.\
        ",
    },

    leanIn = {
        title: "Lean In - Women, Work, and the Will to Lead", 
        type: bookTypes[0],
        length: "6h, 27 min",
        author: "Sheryl Sandberg",
        read: "September 2021",
        genre: [genres[0], genres[1], genres[3]],
        imageloc: "images/leanIn.jpg",
        review: "There are parts of this book that I liked, and parts that I did not like.\
        Some times I felt that Sheryl Sandberg was listing up everything that is wrong with women in work, and how we should act more like men to fit into the workplace.\
        However, she is right about a lot of things. Her arguments are backed by other successful buisness women stories and other research, and there are a lot of good tips to take out from this book.\
        I noticed myself asking more questions, \'sitting at the table\' and believing that I had something to offer after reading this books.\
        ",
    },

    theDutchHouse = {
        title: "The Dutch House", 
        type: bookTypes[0],
        length: "9h, 53 min",
        author: "Ann Patchett",
        read: "October 2021",
        genre: [genres[5]],
        imageloc: "images/theDutchHouse.jpg",
        review: "I cannot understand the hype around this book. I got it recommended everywhere, it is a New York Times best seller and with endless good reviews, but this does not fall under the category a \'must-read\' from me.\
        The story follows siblings Danny and Maeve Conroy over five decades, from living in the impressing \'Dutch House\' to being thrown into poverty by their step-mother Andrea when their father dies. \
        The story leaves a strong message about how much the decisions we make affect others.\
        I think I should listen to this book one more time to see if it was just too complicated for me for a single read. \
        ",
    },

    lookingForAlaska = {
        title: "Looking for Alaska", 
        type: bookTypes[1],
        length: "261 pages",
        author: "John Green",
        read: "October 2021",
        genre: [genres[5]],
        imageloc: "images/lookingForAlaska.jpeg",
        review: " \
        ",
    },

    applesNeverFall = {
        title: "Apples Never Fall", 
        type: bookTypes[0],
        length: "18h, 3min",
        author: "Liane Moriarty",
        read: "November 2021",
        genre: [genres[5]],
        imageloc: "images/applesNeverFall.jpg",
        review: " \
        ",
    },

    howToAvoidAClimateDisaster = {
        title: "How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need", 
        type: bookTypes[1],
        length: "",
        author: "Bill Gates",
        read: "December 2021",
        genre: [genres[3]],
        imageloc: "images/howToAvoidAClimateDisaster.jpg",
        review: " \
        ",
    },

    minSkyld = {
        title: "Min skyld - En historie om frigjøring", 
        type: bookTypes[1],
        length: "",
        author: "Abid Q. Raja",
        read: "December 2021",
        genre: [genres[0], genres[3]],
        imageloc: "images/minSkyld.jpg",
        review: " \
        ",
    },

    theHusbandsSecret = {
        title: "The Husband's Secret", 
        type: bookTypes[0],
        length: "13 h, 44 min",
        author: "Liane Moriarty",
        read: "December 2021",
        genre: [genres[5]],
        imageloc: "images/theHusbandsSecret.jpg",
        review: " \
        ",
    },

    educated = {
        title: "Educated: A Memoir", 
        type: bookTypes[0],
        length: "12 h, 0 min",
        author: "Tara Westover",
        read: "February 2021",
        genre: [genres[0], genres[3]],
        imageloc: "images/educated.jpg",
        review: "\
        ",
    }


    

]



//const books = [murderInLittleEgypt, giveThemLala, nextLevelBasic, bornACrime, fiveSecondRule, aRipInHeaven, girlStopApologizing, theTruthsWeHold, talkingAsFastAsICan, invisibleWomen]







