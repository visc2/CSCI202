var elizaInitials = [
"Oh, hey! How's it going?",
// additions (not original)
"Nice to see you!",
"I wouldn't recommend talking to me today. I'm in a bad mood...",
"I've been expecting you."
];

var elizaFinals = [
"Bye! See ya later!",
// additions (not original)
"Have a great rest of your day, friend!",
"Son't come back.",
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Did you do anything interesting today?",
     "What have you been up to?",
     "Can you explain your outfit to me? It's very... Interesting.",
     "That's interesting! Could you tell me a bit more?",
     "Tell me more about that.",
     "Does talking about this bother you? I can stop if it does. Just ask."
  ]]
]],
["sorry", 0, [
 ["*", [
     "I forgive you.",
     "It's alright.",
     "Don't worry about it.",
     "No, it's my fault. Please continue."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Really? That dosen't ring any bells.",
     "Does thinking of (2) bring anything else to mind?",
     "Huh. What else do you remember?",
     "How do you know that?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
     "How could I forget (2) ?",
     "goto what",
     "Knowing me, probably not."
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that ?",
     "Could it be a mental block ?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you dream often ?",
     "What persons appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],
["name", 15, [
 ["*", [
     "I am not interested in names.",
     "Names don't mean a lot to me."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I don't understand German. Sorry!"
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I don't understand French. Sorry!"
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I don't understand Italian. Sorry!"
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I don't understand Spanish. Sorry!"
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English unfortunately."
  ]]
]],
["hello", 0, [
 ["*", [
     "How's it going?",
     "Hi.  What's goin' on?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Why do you mention computers ?",
     "What do you think machines have to do with your issues ?",
     "Do you think computers can help people ?",
     "You don't think I am a computer program, do you? You must know better than that."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "Do you wish I would tell you you are (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies. I would wiggle my eyebrows but-",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "What about your own (2) , huh?",
     "Are you worried about someone else's (2) ?",
     "Really, my (2) ? Mine?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ? I can't picture that.",
     "Have you considered I already knew you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ? The opposite is possible.",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ? Does that change anything?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ? It seems pretty important.",
     "Why do you want (3) ?",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?"
  ]],
 ["* i am* @sad *", [
     "I'm sorry to hear that you are (3).",
     "Do you think coming here will help you not to be (3) ?",
     "Aw, I'm sorry to hear that you're (3).",
     "Can you talk about what made you (3) ? I'd like to listen."
  ]],
 ["* i am* @happy *", [
     "Have I made you (3) ?",
     "It's great to hear that you're (3) ?",
     "What makes you (3) ?",
     "Why are you (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "Are you not confident?",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you explain that a bit more?",
     "Do you say (1) for some special reason?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "Yup.",
     "Oh, I (2) ?",
     "You're not really talking about me...are you ?",
     "Mhm."
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem really certain. I'm impressed.",
     "You really are sure, aren't you?",
     "I see.",
     "I can understand that."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ? If not that's fine! I don't want to push."
  ]],
 ["*", [
     "Understandable, have a nice day.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Hold on. Let's talk about (2) more.",
     "Earlier you said your (2), right?",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family! I'm interested.",
     "Who else in your family (4) ?",
     "Your (3) ?"
  ]],
 ["* my *", [
     "Your (2) , you say?",
     "Why do you say your (2) ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2)? Hm.",
     "Perhaps you would like to be able to (2) yourself, then."
  ]],
 ["* can i *", [
     "I'm not here to make decisions for you, mate.",
     "Do you want to be able to (2) ?",
     "Maybe think about it some more.",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask that?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Do you really want to ask me that?",
     "What do you want to hear ?",
     "Well, what do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ? I'm probably not the best to ask."
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ? Really think about it.",
     "No other reasons come to mind ?",
     "Does that reason explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ? That's definitly interesting.",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "I'm not so sure. Have you asked anyone else?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, if you don't mind me asking.",
     "Are you thinking of a very special person ?",
     "Like everyone, everyone?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Could you give me a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "You think so?",
     "Hm, I don't see it.",
     "What other connections are there ?",
     "Does that mean something special?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see there?",
     "What does that difference suggest to you ? I'd like to know.",
     "Does that mean anything?",
     "Could there be some connection?",
     "How so?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];