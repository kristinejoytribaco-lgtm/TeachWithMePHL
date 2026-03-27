// TeachWithMe 35-Session Curriculum

export const PHASES = [
  { id: 1, name: "Seed", emoji: "🌱", sessions: 12, description: "Foundational letter sounds & blending" },
  { id: 2, name: "Sprout", emoji: "🌿", sessions: 12, description: "Fluency, digraphs & sight words" },
  { id: 3, name: "Tree", emoji: "🌳", sessions: 6, description: "Story comprehension & analysis" },
];

export const TOTAL_SESSIONS = 30;
export const MASTERY_THRESHOLD = 90;

export const CURRICULUM = [
  // Phase 1: Seed (Sessions 1-12)
  {
    session: 1, phase: 1,
    title: "Meet the Letters: S, A, T",
    lesson: {
      content: "Today we learn the sounds for **S**, **A**, and **T**. These are some of the first sounds we use to build words!",
      checklist: ["Student can say the /s/ sound", "Student can say the /a/ sound", "Student can say the /t/ sound", "Student blended 'sat' together"],
      tips: "Point to each letter and make the sound slowly. Have the student repeat after you."
    },
    game: {
      questions: [
        { question: "What sound does S make?", options: ["/s/", "/m/", "/b/", "/r/"], answer: "/s/" },
        { question: "What sound does A make?", options: ["/a/", "/e/", "/o/", "/u/"], answer: "/a/" },
        { question: "What sound does T make?", options: ["/t/", "/d/", "/p/", "/k/"], answer: "/t/" },
        { question: "Blend these sounds: S-A-T", options: ["sat", "mat", "bat", "hat"], answer: "sat" },
        { question: "Which letter makes the /s/ sound?", options: ["S", "Z", "C", "X"], answer: "S" },
      ]
    }
  },
  {
    session: 2, phase: 1,
    title: "New Friends: P, I, N",
    lesson: {
      content: "Today we meet **P**, **I**, and **N**. Let's practice their sounds and blend them into words!",
      checklist: ["Student can say the /p/ sound", "Student can say the /i/ sound", "Student can say the /n/ sound", "Student blended 'pin' together"],
      tips: "Use finger tapping — tap one finger for each sound, then slide fingers together to blend."
    },
    game: {
      questions: [
        { question: "What sound does P make?", options: ["/p/", "/b/", "/d/", "/t/"], answer: "/p/" },
        { question: "What sound does I make?", options: ["/i/", "/a/", "/e/", "/o/"], answer: "/i/" },
        { question: "Blend: P-I-N", options: ["pin", "pen", "pan", "pun"], answer: "pin" },
        { question: "Which word starts with /p/?", options: ["pan", "tan", "man", "can"], answer: "pan" },
        { question: "What sound does N make?", options: ["/n/", "/m/", "/l/", "/r/"], answer: "/n/" },
      ]
    }
  },
  {
    session: 3, phase: 1,
    title: "Building Words: M, D, G",
    lesson: {
      content: "Let's learn **M**, **D**, and **G**! These sounds help us make lots of new words.",
      checklist: ["Student can say the /m/ sound", "Student can say the /d/ sound", "Student can say the /g/ sound", "Student blended 'mad' and 'dig'"],
      tips: "Have the student feel their throat vibrate for /m/ and /d/."
    },
    game: {
      questions: [
        { question: "What sound does M make?", options: ["/m/", "/n/", "/l/", "/r/"], answer: "/m/" },
        { question: "Blend: D-I-G", options: ["dig", "big", "pig", "fig"], answer: "dig" },
        { question: "Which word starts with /m/?", options: ["mat", "bat", "cat", "rat"], answer: "mat" },
        { question: "What sound does G make?", options: ["/g/", "/k/", "/j/", "/d/"], answer: "/g/" },
        { question: "Blend: M-A-D", options: ["mad", "sad", "dad", "bad"], answer: "mad" },
      ]
    }
  },
  {
    session: 4, phase: 1,
    title: "Exploring: O, C, K",
    lesson: {
      content: "New sounds today: **O**, **C**, and **K**. Notice that C and K can make similar sounds!",
      checklist: ["Student can say the /o/ sound", "Student can say the /k/ sound for C", "Student can say the /k/ sound for K", "Student blended 'cot' and 'kit'"],
      tips: "Explain that C and K both make the /k/ sound. Practice with simple words."
    },
    game: {
      questions: [
        { question: "What sound does O make?", options: ["/o/", "/a/", "/u/", "/e/"], answer: "/o/" },
        { question: "What sound does C make?", options: ["/k/", "/s/", "/t/", "/g/"], answer: "/k/" },
        { question: "Blend: C-O-T", options: ["cot", "cat", "cut", "kit"], answer: "cot" },
        { question: "Blend: K-I-T", options: ["kit", "kid", "kin", "kip"], answer: "kit" },
        { question: "C and K make the same sound. What is it?", options: ["/k/", "/s/", "/g/", "/t/"], answer: "/k/" },
      ]
    }
  },
  {
    session: 5, phase: 1,
    title: "More Sounds: E, R, H",
    lesson: {
      content: "Let's learn **E**, **R**, and **H**. These open up so many new words for us!",
      checklist: ["Student can say the /e/ sound", "Student can say the /r/ sound", "Student can say the /h/ sound", "Student blended 'red' and 'hen'"],
      tips: "For /r/, have the student curl their tongue slightly. For /h/, feel the breath on your hand."
    },
    game: {
      questions: [
        { question: "What sound does E make?", options: ["/e/", "/i/", "/a/", "/u/"], answer: "/e/" },
        { question: "What sound does R make?", options: ["/r/", "/l/", "/w/", "/y/"], answer: "/r/" },
        { question: "Blend: R-E-D", options: ["red", "rod", "rid", "rad"], answer: "red" },
        { question: "Blend: H-E-N", options: ["hen", "pen", "den", "ten"], answer: "hen" },
        { question: "Which word starts with /h/?", options: ["hat", "cat", "bat", "mat"], answer: "hat" },
      ]
    }
  },
  {
    session: 6, phase: 1,
    title: "Learning: U, B, F",
    lesson: {
      content: "Today's sounds are **U**, **B**, and **F**. Let's practice and blend!",
      checklist: ["Student can say the /u/ sound", "Student can say the /b/ sound", "Student can say the /f/ sound", "Student blended 'bun' and 'fun'"],
      tips: "For /b/ and /f/, focus on lip position. /b/ uses both lips, /f/ uses top teeth on lower lip."
    },
    game: {
      questions: [
        { question: "What sound does U make?", options: ["/u/", "/o/", "/a/", "/i/"], answer: "/u/" },
        { question: "Blend: B-U-N", options: ["bun", "ban", "bin", "ben"], answer: "bun" },
        { question: "Blend: F-U-N", options: ["fun", "fan", "fin", "run"], answer: "fun" },
        { question: "Which word starts with /f/?", options: ["fig", "big", "dig", "pig"], answer: "fig" },
        { question: "What sound does B make?", options: ["/b/", "/d/", "/p/", "/g/"], answer: "/b/" },
      ]
    }
  },
  {
    session: 7, phase: 1,
    title: "Discovering: L, J, W",
    lesson: {
      content: "New sounds: **L**, **J**, and **W**. These sounds are fun to say!",
      checklist: ["Student can say the /l/ sound", "Student can say the /j/ sound", "Student can say the /w/ sound", "Student blended 'jet' and 'wet'"],
      tips: "For /l/, tongue touches the roof of the mouth. For /w/, lips make a small circle."
    },
    game: {
      questions: [
        { question: "What sound does L make?", options: ["/l/", "/r/", "/n/", "/m/"], answer: "/l/" },
        { question: "What sound does J make?", options: ["/j/", "/g/", "/y/", "/ch/"], answer: "/j/" },
        { question: "Blend: J-E-T", options: ["jet", "pet", "set", "net"], answer: "jet" },
        { question: "Blend: W-E-T", options: ["wet", "set", "pet", "met"], answer: "wet" },
        { question: "Which word starts with /w/?", options: ["win", "bin", "tin", "fin"], answer: "win" },
      ]
    }
  },
  {
    session: 8, phase: 1,
    title: "Vowel Review & Practice",
    lesson: {
      content: "Let's review all five vowels: **A, E, I, O, U**. Vowels are the heart of every word!",
      checklist: ["Student can name all 5 vowels", "Student says each vowel sound correctly", "Student identifies vowels in simple words", "Student blends CVC words with each vowel"],
      tips: "Sing the vowel song: A-E-I-O-U! Point to each vowel and have the student make the sound."
    },
    game: {
      questions: [
        { question: "Which of these is a vowel?", options: ["A", "B", "C", "D"], answer: "A" },
        { question: "What vowel is in 'cat'?", options: ["A", "E", "I", "O"], answer: "A" },
        { question: "What vowel is in 'pig'?", options: ["I", "A", "O", "U"], answer: "I" },
        { question: "What vowel is in 'dog'?", options: ["O", "E", "A", "U"], answer: "O" },
        { question: "How many vowels are there?", options: ["5", "3", "6", "4"], answer: "5" },
      ]
    }
  },
  {
    session: 9, phase: 1,
    title: "Sounds: V, Y, Z",
    lesson: {
      content: "Today we learn **V**, **Y**, and **Z** — the last of our letter sounds!",
      checklist: ["Student can say the /v/ sound", "Student can say the /y/ sound", "Student can say the /z/ sound", "Student blended 'van' and 'zip'"],
      tips: "For /v/, feel the vibration on the lips. /z/ makes a buzzing sound like a bee."
    },
    game: {
      questions: [
        { question: "What sound does V make?", options: ["/v/", "/f/", "/b/", "/w/"], answer: "/v/" },
        { question: "What sound does Z make?", options: ["/z/", "/s/", "/x/", "/c/"], answer: "/z/" },
        { question: "Blend: V-A-N", options: ["van", "man", "can", "fan"], answer: "van" },
        { question: "Blend: Z-I-P", options: ["zip", "sip", "tip", "rip"], answer: "zip" },
        { question: "Which word starts with /y/?", options: ["yes", "mess", "less", "dress"], answer: "yes" },
      ]
    }
  },
  {
    session: 10, phase: 1,
    title: "Consonant Blends: BL, CL, FL",
    lesson: {
      content: "Now we combine consonants! **BL**, **CL**, and **FL** are consonant blends where you hear both sounds.",
      checklist: ["Student can blend /bl/ together", "Student can blend /cl/ together", "Student can blend /fl/ together", "Student reads 'black', 'clap', 'flag'"],
      tips: "Say each sound separately first, then blend them faster and faster until they flow together."
    },
    game: {
      questions: [
        { question: "What blend is in 'black'?", options: ["bl", "br", "cl", "fl"], answer: "bl" },
        { question: "What blend is in 'clap'?", options: ["cl", "bl", "fl", "gl"], answer: "cl" },
        { question: "What blend is in 'flag'?", options: ["fl", "bl", "cl", "sl"], answer: "fl" },
        { question: "Blend: FL-A-T", options: ["flat", "slat", "clat", "blat"], answer: "flat" },
        { question: "Which word starts with /bl/?", options: ["blue", "clue", "glue", "flue"], answer: "blue" },
      ]
    }
  },
  {
    session: 11, phase: 1,
    title: "Consonant Blends: ST, SP, SN",
    lesson: {
      content: "More blends: **ST**, **SP**, and **SN**. These all start with S!",
      checklist: ["Student can blend /st/ together", "Student can blend /sp/ together", "Student can blend /sn/ together", "Student reads 'stop', 'spin', 'snap'"],
      tips: "Remind students that in a blend, you hear BOTH sounds — unlike digraphs where sounds combine into one."
    },
    game: {
      questions: [
        { question: "What blend is in 'stop'?", options: ["st", "sp", "sn", "sk"], answer: "st" },
        { question: "What blend is in 'spin'?", options: ["sp", "st", "sn", "sl"], answer: "sp" },
        { question: "Blend: SN-A-P", options: ["snap", "slap", "strap", "trap"], answer: "snap" },
        { question: "Which word starts with /st/?", options: ["star", "scar", "spar", "snare"], answer: "star" },
        { question: "What blend is in 'snip'?", options: ["sn", "sp", "sl", "st"], answer: "sn" },
      ]
    }
  },
  {
    session: 12, phase: 1,
    title: "Phase 1 Review & Celebration",
    lesson: {
      content: "🎉 Amazing work! Let's review everything from Phase 1 — all letter sounds, vowels, and blends!",
      checklist: ["Student says all single letter sounds", "Student identifies all 5 vowels", "Student blends 3 CVC words correctly", "Student reads 2 words with consonant blends"],
      tips: "This is a celebration! Make it fun. Review quickly and praise progress."
    },
    game: {
      questions: [
        { question: "How many vowels are there?", options: ["5", "3", "7", "4"], answer: "5" },
        { question: "Blend: C-A-T", options: ["cat", "bat", "mat", "hat"], answer: "cat" },
        { question: "What blend is in 'flag'?", options: ["fl", "fr", "bl", "cl"], answer: "fl" },
        { question: "What sound does S make?", options: ["/s/", "/z/", "/sh/", "/ch/"], answer: "/s/" },
        { question: "Which is a consonant blend?", options: ["st", "a", "sh", "e"], answer: "st" },
      ]
    }
  },

  // Phase 2: Sprout (Sessions 13-24)
  {
    session: 13, phase: 2,
    title: "Digraph: SH",
    lesson: {
      content: "Welcome to Phase 2! 🌿 A **digraph** is two letters that make ONE new sound. **SH** says /sh/ like in 'ship'.",
      checklist: ["Student understands what a digraph is", "Student can say the /sh/ sound", "Student identifies SH in words", "Student reads 'ship', 'shop', 'shut'"],
      tips: "Put your finger to your lips — 'shhh!' That's the /sh/ sound."
    },
    game: {
      questions: [
        { question: "What sound does SH make?", options: ["/sh/", "/s/", "/ch/", "/th/"], answer: "/sh/" },
        { question: "Which word has the /sh/ sound?", options: ["ship", "sip", "tip", "lip"], answer: "ship" },
        { question: "A digraph is...", options: ["2 letters, 1 sound", "1 letter, 2 sounds", "2 letters, 2 sounds", "1 letter, 1 sound"], answer: "2 letters, 1 sound" },
        { question: "Which word starts with SH?", options: ["shell", "sell", "tell", "bell"], answer: "shell" },
        { question: "Where is SH in 'fish'?", options: ["End", "Beginning", "Middle", "Not there"], answer: "End" },
      ]
    }
  },
  {
    session: 14, phase: 2,
    title: "Digraph: CH",
    lesson: {
      content: "Today's digraph is **CH**! It says /ch/ like in 'chip'. It sounds like a train: ch-ch-ch!",
      checklist: ["Student can say the /ch/ sound", "Student identifies CH in words", "Student reads 'chip', 'chat', 'rich'", "Student distinguishes CH from SH"],
      tips: "Compare /sh/ and /ch/ — they're similar but /ch/ has a 'punch' to it."
    },
    game: {
      questions: [
        { question: "What sound does CH make?", options: ["/ch/", "/sh/", "/k/", "/th/"], answer: "/ch/" },
        { question: "Which word starts with CH?", options: ["chin", "shin", "thin", "fin"], answer: "chin" },
        { question: "Which word ends with CH?", options: ["much", "mush", "must", "mug"], answer: "much" },
        { question: "SH or CH: 'chair'?", options: ["CH", "SH", "Both", "Neither"], answer: "CH" },
        { question: "Read this word: CHOP", options: ["chop", "shop", "stop", "cop"], answer: "chop" },
      ]
    }
  },
  {
    session: 15, phase: 2,
    title: "Digraph: TH",
    lesson: {
      content: "**TH** makes two sounds! Voiced /th/ (like 'the') and unvoiced /th/ (like 'thin'). Tongue goes between teeth!",
      checklist: ["Student can say both TH sounds", "Student identifies TH in words", "Student reads 'the', 'this', 'thin'", "Student feels the difference between voiced/unvoiced"],
      tips: "Have the student put their hand on their throat — they'll feel vibration for voiced TH."
    },
    game: {
      questions: [
        { question: "Where does your tongue go for TH?", options: ["Between teeth", "On roof", "Behind teeth", "Curled back"], answer: "Between teeth" },
        { question: "Which word starts with TH?", options: ["think", "sink", "link", "drink"], answer: "think" },
        { question: "Read: THAT", options: ["that", "chat", "hat", "bat"], answer: "that" },
        { question: "Which has the TH sound?", options: ["bath", "bash", "back", "bad"], answer: "bath" },
        { question: "TH is a...", options: ["digraph", "blend", "vowel", "prefix"], answer: "digraph" },
      ]
    }
  },
  {
    session: 16, phase: 2,
    title: "Sight Words Group 1",
    lesson: {
      content: "**Sight words** are words we learn to recognize instantly. Today: **the, is, a, and, to**.",
      checklist: ["Student can read 'the' on sight", "Student can read 'is' on sight", "Student can read 'a', 'and', 'to'", "Student reads a sentence using sight words"],
      tips: "Flash cards work great here! Show each word for 3 seconds, then have the student say it."
    },
    game: {
      questions: [
        { question: "Read this sight word: THE", options: ["the", "he", "she", "we"], answer: "the" },
        { question: "Read this sight word: IS", options: ["is", "it", "in", "if"], answer: "is" },
        { question: "Fill in: ___ cat is big.", options: ["The", "Is", "To", "A"], answer: "The" },
        { question: "Read: A dog AND a cat", options: ["A dog and a cat", "A dog is a cat", "The dog to a cat", "A dog a cat"], answer: "A dog and a cat" },
        { question: "Which is a sight word?", options: ["the", "cat", "dog", "big"], answer: "the" },
      ]
    }
  },
  {
    session: 17, phase: 2,
    title: "Sight Words Group 2",
    lesson: {
      content: "More sight words: **he, she, we, they, was**. These help us talk about people!",
      checklist: ["Student can read 'he' and 'she'", "Student can read 'we' and 'they'", "Student can read 'was'", "Student uses words in sentences"],
      tips: "Make it personal — 'He is [student's name]!' 'She is [tutor's name]!'"
    },
    game: {
      questions: [
        { question: "Read: SHE", options: ["she", "he", "the", "we"], answer: "she" },
        { question: "Read: THEY", options: ["they", "the", "then", "them"], answer: "they" },
        { question: "Fill in: ___ was happy.", options: ["He", "The", "A", "To"], answer: "He" },
        { question: "Read: WE", options: ["we", "me", "he", "be"], answer: "we" },
        { question: "Read: WAS", options: ["was", "saw", "has", "as"], answer: "was" },
      ]
    }
  },
  {
    session: 18, phase: 2,
    title: "Fluency: Short Sentences",
    lesson: {
      content: "Let's put it all together! Read short sentences smoothly without stopping between words.",
      checklist: ["Student reads 3 simple sentences fluently", "Student pauses at periods", "Student uses expression", "Student self-corrects when needed"],
      tips: "Model fluent reading first. Then have the student echo you. Finally, let them read independently."
    },
    game: {
      questions: [
        { question: "Read: The cat sat.", options: ["The cat sat.", "A cat sit.", "The cat sit.", "A cat sat."], answer: "The cat sat." },
        { question: "Read: He is big.", options: ["He is big.", "She is big.", "He was big.", "He is bag."], answer: "He is big." },
        { question: "What goes at the end of a sentence?", options: ["Period (.)", "Comma (,)", "Letter", "Space"], answer: "Period (.)" },
        { question: "Read: She can run.", options: ["She can run.", "She can ran.", "He can run.", "She can fun."], answer: "She can run." },
        { question: "Read: We had fun.", options: ["We had fun.", "We has fun.", "We had fan.", "We had fin."], answer: "We had fun." },
      ]
    }
  },
  {
    session: 19, phase: 2,
    title: "Digraph: WH & CK",
    lesson: {
      content: "Two more digraphs: **WH** (like 'when') and **CK** (like 'kick'). CK always comes at the END of words!",
      checklist: ["Student can say the /wh/ sound", "Student can say the /ck/ sound", "Student identifies position of CK in words", "Student reads 'when', 'kick', 'duck'"],
      tips: "For WH, blow air — 'wh-wh-when'. CK is always at the end, right after a short vowel."
    },
    game: {
      questions: [
        { question: "Where does CK appear in words?", options: ["End", "Beginning", "Middle", "Anywhere"], answer: "End" },
        { question: "Which word has WH?", options: ["what", "that", "chat", "hat"], answer: "what" },
        { question: "Read: DUCK", options: ["duck", "dusk", "dust", "dug"], answer: "duck" },
        { question: "Read: WHEN", options: ["when", "then", "hen", "den"], answer: "when" },
        { question: "Which ends with CK?", options: ["back", "bag", "bad", "bat"], answer: "back" },
      ]
    }
  },
  {
    session: 20, phase: 2,
    title: "Sight Words Group 3",
    lesson: {
      content: "New sight words: **said, have, are, you, my**. These are super common in books!",
      checklist: ["Student reads all 5 new sight words", "Student uses them in sentences", "Student recognizes them in text", "Review previous sight words too"],
      tips: "Write the words on cards. Mix old and new sight words for review."
    },
    game: {
      questions: [
        { question: "Read: SAID", options: ["said", "sad", "sand", "seed"], answer: "said" },
        { question: "Read: HAVE", options: ["have", "gave", "save", "wave"], answer: "have" },
        { question: "Read: YOU", options: ["you", "your", "yes", "yet"], answer: "you" },
        { question: "Fill in: ___ are happy.", options: ["You", "Said", "My", "Have"], answer: "You" },
        { question: "Read: MY", options: ["my", "by", "me", "we"], answer: "my" },
      ]
    }
  },
  {
    session: 21, phase: 2,
    title: "Long Vowels: Magic E",
    lesson: {
      content: "When you add an **E** to the end, the vowel says its name! 'mat' → 'mate', 'kit' → 'kite'. This is the **Magic E** rule!",
      checklist: ["Student understands the Magic E rule", "Student changes CVC to CVCe words", "Student reads 'make', 'like', 'home'", "Student identifies long vowel sounds"],
      tips: "The E is silent and 'magic' — it makes the other vowel say its name!"
    },
    game: {
      questions: [
        { question: "Add Magic E to 'mat':", options: ["mate", "mite", "mote", "mute"], answer: "mate" },
        { question: "Add Magic E to 'kit':", options: ["kite", "kate", "kote", "kute"], answer: "kite" },
        { question: "What does Magic E do?", options: ["Makes vowel say its name", "Makes word shorter", "Adds a syllable", "Changes meaning completely"], answer: "Makes vowel say its name" },
        { question: "Read: HOME", options: ["home", "hom", "hum", "him"], answer: "home" },
        { question: "Which has a long vowel?", options: ["cake", "cat", "cap", "can"], answer: "cake" },
      ]
    }
  },
  {
    session: 22, phase: 2,
    title: "Fluency: Longer Sentences",
    lesson: {
      content: "Time to read longer sentences with all we've learned — digraphs, sight words, and Magic E!",
      checklist: ["Student reads 4-5 word sentences smoothly", "Student uses proper pacing", "Student recognizes all taught sight words", "Student decodes unfamiliar words"],
      tips: "If the student stumbles, have them tap out the sounds, then blend and re-read the sentence."
    },
    game: {
      questions: [
        { question: "Read: The ship is in the lake.", options: ["The ship is in the lake.", "The shop is in the lake.", "The chip is in the lake.", "A ship is on the lake."], answer: "The ship is in the lake." },
        { question: "Read: She can ride a bike.", options: ["She can ride a bike.", "She can rid a bike.", "He can ride a bike.", "She can ride a bake."], answer: "She can ride a bike." },
        { question: "How many words: 'He said thank you.'?", options: ["4", "3", "5", "6"], answer: "4" },
        { question: "Read: They have a big cake.", options: ["They have a big cake.", "They had a big cake.", "They have a bag cake.", "They have a big cat."], answer: "They have a big cake." },
        { question: "Read: My home is nice.", options: ["My home is nice.", "My hom is nice.", "My home is mice.", "Me home is nice."], answer: "My home is nice." },
      ]
    }
  },
  {
    session: 23, phase: 2,
    title: "Vowel Teams: AI, AY, EE",
    lesson: {
      content: "**Vowel teams** are two vowels together: **AI** (rain), **AY** (play), **EE** (tree). 'When two vowels go walking, the first one does the talking!'",
      checklist: ["Student can read AI words", "Student can read AY words", "Student can read EE words", "Student applies 'two vowels walking' rule"],
      tips: "AI usually comes in the middle, AY at the end. EE makes the long /e/ sound."
    },
    game: {
      questions: [
        { question: "What sound does EE make?", options: ["Long E", "Short E", "Long I", "Short I"], answer: "Long E" },
        { question: "Read: RAIN", options: ["rain", "ran", "run", "rein"], answer: "rain" },
        { question: "Read: PLAY", options: ["play", "plan", "ploy", "plea"], answer: "play" },
        { question: "Read: TREE", options: ["tree", "three", "free", "tee"], answer: "tree" },
        { question: "Where does AY usually appear?", options: ["End of word", "Beginning", "Middle", "Anywhere"], answer: "End of word" },
      ]
    }
  },
  {
    session: 24, phase: 2,
    title: "Phase 2 Review & Celebration",
    lesson: {
      content: "🎉 Phase 2 complete! Let's review digraphs, sight words, Magic E, and vowel teams!",
      checklist: ["Student reads all digraphs correctly", "Student knows all sight words", "Student applies Magic E rule", "Student reads vowel team words"],
      tips: "Celebrate! The student has come so far. Quick review of each concept."
    },
    game: {
      questions: [
        { question: "SH, CH, TH are...", options: ["Digraphs", "Blends", "Vowels", "Sight words"], answer: "Digraphs" },
        { question: "Read this sight word: THEY", options: ["they", "the", "then", "them"], answer: "they" },
        { question: "Add Magic E to 'hop':", options: ["hope", "hype", "hep", "hip"], answer: "hope" },
        { question: "Read: BEET", options: ["beet", "beat", "bet", "bit"], answer: "beet" },
        { question: "Read: She said they have cake.", options: ["She said they have cake.", "She sad they have cake.", "She said they had cake.", "He said they have cake."], answer: "She said they have cake." },
      ]
    }
  },

  // Phase 3: Tree (Sessions 25-30)
  {
    session: 25, phase: 3,
    title: "Story Time: Characters",
    lesson: {
      content: "Welcome to Phase 3! 🌳 Now we read **stories**! Today: who are the **characters**? Characters are the people or animals in a story.",
      checklist: ["Student understands what a character is", "Student identifies characters in a short story", "Student describes a character's traits", "Student reads the practice story aloud"],
      tips: "Read a short story together. Ask: 'Who is in this story? What are they like?'"
    },
    game: {
      questions: [
        { question: "What is a character?", options: ["A person/animal in a story", "The title", "The ending", "A type of book"], answer: "A person/animal in a story" },
        { question: "'Sam the dog ran fast.' Who is the character?", options: ["Sam the dog", "The park", "Running", "Fast"], answer: "Sam the dog" },
        { question: "Which describes a character trait?", options: ["Brave", "Running", "Yesterday", "The house"], answer: "Brave" },
        { question: "'The kind girl helped.' What trait does she have?", options: ["Kind", "Tall", "Fast", "Loud"], answer: "Kind" },
        { question: "Can animals be characters?", options: ["Yes", "No", "Only in movies", "Only if they talk"], answer: "Yes" },
      ]
    }
  },
  {
    session: 26, phase: 3,
    title: "Story Time: Setting",
    lesson: {
      content: "The **setting** is WHERE and WHEN a story takes place. Is it at a park? In a castle? At night?",
      checklist: ["Student understands what setting means", "Student identifies where a story takes place", "Student identifies when a story takes place", "Student describes the setting of a practice story"],
      tips: "Ask: 'Where are the characters? What time of day is it? What season?'"
    },
    game: {
      questions: [
        { question: "What is the setting?", options: ["Where & when the story happens", "Who is in the story", "What happens", "The ending"], answer: "Where & when the story happens" },
        { question: "'It was a cold winter night.' What's the setting?", options: ["Winter, nighttime", "Summer, morning", "A school", "A park"], answer: "Winter, nighttime" },
        { question: "Which is a setting?", options: ["A sunny beach", "A brave girl", "A happy ending", "A big problem"], answer: "A sunny beach" },
        { question: "'Sam played at the park.' Where is the setting?", options: ["The park", "Sam's house", "School", "The store"], answer: "The park" },
        { question: "Setting answers which questions?", options: ["Where and when", "Who and what", "Why and how", "Which and who"], answer: "Where and when" },
      ]
    }
  },
  {
    session: 27, phase: 3,
    title: "Story Time: Beginning, Middle, End",
    lesson: {
      content: "Every story has a **beginning** (what happens first), **middle** (the main events), and **end** (how it finishes).",
      checklist: ["Student identifies the beginning of a story", "Student identifies the middle events", "Student identifies the ending", "Student retells a story in order"],
      tips: "Use hand gestures: hold hand low for beginning, middle for middle, high for end."
    },
    game: {
      questions: [
        { question: "What comes first in a story?", options: ["Beginning", "Middle", "End", "Title"], answer: "Beginning" },
        { question: "The main events happen in the...", options: ["Middle", "Beginning", "End", "Title"], answer: "Middle" },
        { question: "'First, Sam woke up.' Is this the...", options: ["Beginning", "Middle", "End", "Setting"], answer: "Beginning" },
        { question: "'Finally, they went home.' Is this the...", options: ["End", "Beginning", "Middle", "Setting"], answer: "End" },
        { question: "How many parts does a story have?", options: ["3", "2", "4", "1"], answer: "3" },
      ]
    }
  },
  {
    session: 28, phase: 3,
    title: "Story Time: Problem & Solution",
    lesson: {
      content: "Most stories have a **problem** (something goes wrong) and a **solution** (how it gets fixed)!",
      checklist: ["Student understands what a problem in a story is", "Student understands what a solution is", "Student identifies the problem in a practice story", "Student identifies the solution"],
      tips: "Ask: 'What went wrong? How did the character fix it?'"
    },
    game: {
      questions: [
        { question: "What is a story problem?", options: ["Something that goes wrong", "The title", "The setting", "A character"], answer: "Something that goes wrong" },
        { question: "'The cat was stuck in a tree.' What's the problem?", options: ["Cat stuck in tree", "A big tree", "A nice day", "The cat is happy"], answer: "Cat stuck in tree" },
        { question: "A solution is...", options: ["How the problem is fixed", "The beginning", "The setting", "A new problem"], answer: "How the problem is fixed" },
        { question: "'Mom got a ladder.' Is this a...", options: ["Solution", "Problem", "Setting", "Character"], answer: "Solution" },
        { question: "Does every story need a problem?", options: ["Most stories do", "Never", "Only long stories", "Only funny stories"], answer: "Most stories do" },
      ]
    }
  },
  {
    session: 29, phase: 3,
    title: "Story Time: Making Predictions",
    lesson: {
      content: "**Predicting** means guessing what will happen next! Use clues from the story to make smart guesses.",
      checklist: ["Student understands what a prediction is", "Student makes predictions based on clues", "Student explains WHY they made their prediction", "Student checks if predictions were correct"],
      tips: "Pause mid-story and ask: 'What do you think will happen next? Why do you think that?'"
    },
    game: {
      questions: [
        { question: "What is a prediction?", options: ["A guess about what happens next", "The ending", "The title", "A character"], answer: "A guess about what happens next" },
        { question: "'Dark clouds filled the sky.' What might happen?", options: ["It might rain", "It will be sunny", "Snow will fall", "Nothing"], answer: "It might rain" },
        { question: "Good predictions use...", options: ["Clues from the story", "Random guessing", "The title only", "Pictures only"], answer: "Clues from the story" },
        { question: "'The dog saw a squirrel.' What might happen?", options: ["Dog chases squirrel", "Dog falls asleep", "Squirrel disappears", "Dog reads a book"], answer: "Dog chases squirrel" },
        { question: "Is it okay if a prediction is wrong?", options: ["Yes, that's fine!", "No, never", "Only sometimes", "Only for adults"], answer: "Yes, that's fine!" },
      ]
    }
  },
  {
    session: 30, phase: 3,
    title: "🎓 Graduation Day!",
    lesson: {
      content: "🎓🎉 **CONGRATULATIONS!** You've completed all 30 sessions! Today we celebrate everything you've learned on your reading journey!",
      checklist: ["Review favorite lessons together", "Student reads a paragraph independently", "Celebrate all achievements", "Discuss the reading journey"],
      tips: "Make this special! Review highlights, celebrate growth, and talk about what comes next in their reading journey."
    },
    game: {
      questions: [
        { question: "What is a digraph?", options: ["2 letters, 1 sound", "2 letters, 2 sounds", "1 letter, 1 sound", "3 letters, 1 sound"], answer: "2 letters, 1 sound" },
        { question: "What does Magic E do?", options: ["Makes the vowel say its name", "Makes words shorter", "Adds a sound", "Nothing"], answer: "Makes the vowel say its name" },
        { question: "Characters are...", options: ["People/animals in a story", "Where the story happens", "The end of a story", "A type of word"], answer: "People/animals in a story" },
        { question: "What are the 3 parts of a story?", options: ["Beginning, middle, end", "Title, author, date", "Who, what, where", "Big, medium, small"], answer: "Beginning, middle, end" },
        { question: "You completed all 30 sessions! How do you feel?", options: ["Amazing! 🎉", "Proud! 🌟", "Happy! 😊", "All of the above! 🎓"], answer: "All of the above! 🎓" },
      ]
    }
  },
];

export const PLACEMENT_QUESTIONS = [
  { question: "What sound does the letter S make?", options: ["/s/", "/m/", "/b/", "/r/"], answer: "/s/", phase: 1 },
  { question: "Blend these sounds: C-A-T", options: ["cat", "bat", "mat", "hat"], answer: "cat", phase: 1 },
  { question: "Which is a vowel?", options: ["A", "B", "C", "D"], answer: "A", phase: 1 },
  { question: "What blend is in 'stop'?", options: ["st", "sp", "sn", "sk"], answer: "st", phase: 1 },
  { question: "What sound does SH make?", options: ["/sh/", "/s/", "/ch/", "/th/"], answer: "/sh/", phase: 2 },
  { question: "Read this sight word: THE", options: ["the", "he", "she", "we"], answer: "the", phase: 2 },
  { question: "Add Magic E to 'hop':", options: ["hope", "hype", "hip", "hep"], answer: "hope", phase: 2 },
  { question: "What is a character?", options: ["A person in a story", "The title", "The ending", "A word"], answer: "A person in a story", phase: 3 },
  { question: "What is the setting?", options: ["Where & when", "Who & what", "How & why", "Start & end"], answer: "Where & when", phase: 3 },
  { question: "What comes first in a story?", options: ["Beginning", "Middle", "End", "Title"], answer: "Beginning", phase: 3 },
];

export function getSessionByNumber(num) {
  return CURRICULUM.find(s => s.session === num);
}

export function getPhaseForSession(sessionNum) {
  if (sessionNum <= 12) return 1;
  if (sessionNum <= 24) return 2;
  return 3;
}

export function getPhaseInfo(phaseId) {
  return PHASES.find(p => p.id === phaseId);
}