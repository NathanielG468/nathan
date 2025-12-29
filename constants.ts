
import { Question } from './types';

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: '1',
    text: "How many books are in the New Testament?",
    options: ["27", "39", "66", "12"],
    correctAnswer: 0,
    category: "New Testament",
    explanation: "There are 27 books in the New Testament, while the Old Testament contains 39.",
    bgKeyword: "ancient scrolls"
  },
  {
    id: '2',
    text: "Who was the first king of Israel?",
    options: ["David", "Solomon", "Saul", "Samuel"],
    correctAnswer: 2,
    category: "Kings",
    explanation: "Saul was anointed as the first king of Israel by the prophet Samuel.",
    bgKeyword: "golden crown"
  },
  {
    id: '3',
    text: "What was the first plague God sent upon Egypt?",
    options: ["Frogs", "Lice", "Boils", "Water turned to blood"],
    correctAnswer: 3,
    category: "Exodus",
    explanation: "The first plague was turning the Nile River into blood (Exodus 7:14-25).",
    bgKeyword: "red river"
  },
  {
    id: '4',
    text: "Which apostle was a tax collector before following Jesus?",
    options: ["Peter", "Matthew", "John", "Andrew"],
    correctAnswer: 1,
    category: "Apostles",
    explanation: "Matthew (also called Levi) was a tax collector in Capernaum.",
    bgKeyword: "ancient coins"
  },
  {
    id: '5',
    text: "In what city was Jesus born?",
    options: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"],
    correctAnswer: 2,
    category: "Jesus' Life",
    explanation: "Jesus was born in Bethlehem of Judea, fulfilling the prophecy in Micah 5:2.",
    bgKeyword: "bethlehem star"
  },
  {
    id: '6',
    text: "How many days and nights did it rain during the Great Flood?",
    options: ["7", "12", "40", "100"],
    correctAnswer: 2,
    category: "Genesis",
    explanation: "According to Genesis 7:12, the rain fell upon the earth forty days and forty nights.",
    bgKeyword: "stormy rain"
  },
  {
    id: '7',
    text: "Who received the Ten Commandments from God?",
    options: ["Abraham", "Moses", "Joshua", "Aaron"],
    correctAnswer: 1,
    category: "Exodus",
    explanation: "Moses received the Ten Commandments on stone tablets at Mount Sinai.",
    bgKeyword: "mountain peak"
  },
  {
    id: '8',
    text: "What was the name of the giant that David defeated?",
    options: ["Goliath", "Og", "Sihon", "Nimrod"],
    correctAnswer: 0,
    category: "Kings",
    explanation: "David, the young shepherd boy, defeated the Philistine giant Goliath with a sling and a stone.",
    bgKeyword: "stone sling"
  },
  {
    id: '9',
    text: "Which book of the Bible follows the four Gospels?",
    options: ["Romans", "Acts", "Hebrews", "Galatians"],
    correctAnswer: 1,
    category: "New Testament",
    explanation: "The Book of Acts (Acts of the Apostles) follows the Gospels of Matthew, Mark, Luke, and John.",
    bgKeyword: "ancient parchment"
  },
  {
    id: '10',
    text: "Who was the strongest man in the Bible?",
    options: ["Samson", "Goliath", "Saul", "Peter"],
    correctAnswer: 0,
    category: "Judges",
    explanation: "Samson was given supernatural strength by God to perform heroic feats.",
    bgKeyword: "strong pillars"
  },
  {
    id: '11',
    text: "How many times did Peter deny Jesus before the rooster crowed?",
    options: ["Once", "Twice", "Three times", "Seven times"],
    correctAnswer: 2,
    category: "Jesus' Life",
    explanation: "Jesus predicted, and Peter later confirmed, that he would deny knowing Him three times.",
    bgKeyword: "rooster sunrise"
  },
  {
    id: '12',
    text: "Who was swallowed by a great fish after trying to run from God?",
    options: ["Elijah", "Jonah", "Noah", "Elisha"],
    correctAnswer: 1,
    category: "Prophets",
    explanation: "Jonah was swallowed by a great fish and stayed in its belly for three days and nights.",
    bgKeyword: "ocean waves"
  },
  {
    id: '13',
    text: "What was Jesus' first miracle?",
    options: ["Healing a blind man", "Walking on water", "Turning water into wine", "Feeding the 5,000"],
    correctAnswer: 2,
    category: "Jesus' Life",
    explanation: "Jesus performed His first miracle at a wedding in Cana by turning water into wine.",
    bgKeyword: "clay jars"
  },
  {
    id: '14',
    text: "Which garden did Jesus pray in before His arrest?",
    options: ["Eden", "Gethsemane", "Babylon", "Zion"],
    correctAnswer: 1,
    category: "Jesus' Life",
    explanation: "Jesus prayed in the Garden of Gethsemane on the Mount of Olives.",
    bgKeyword: "olive grove"
  },
  {
    id: '15',
    text: "What was Joseph's gift from his father Israel?",
    options: ["A golden ring", "A silver cup", "A coat of many colors", "A shepherd's staff"],
    correctAnswer: 2,
    category: "Genesis",
    explanation: "Jacob (Israel) gave his favorite son Joseph a coat of many colors.",
    bgKeyword: "colorful fabric"
  },
  {
    id: '16',
    text: "Who was the wife of Adam?",
    options: ["Sarah", "Eve", "Ruth", "Esther"],
    correctAnswer: 1,
    category: "Genesis",
    explanation: "Eve was the first woman, created by God to be a companion for Adam.",
    bgKeyword: "lush garden"
  },
  {
    id: '17',
    text: "Which prophet was taken up to heaven in a whirlwind?",
    options: ["Elijah", "Isaiah", "Jeremiah", "Daniel"],
    correctAnswer: 0,
    category: "Prophets",
    explanation: "Elijah was taken to heaven in a whirlwind with a chariot and horses of fire.",
    bgKeyword: "fire chariot"
  },
  {
    id: '18',
    text: "How many days did it take for God to create the world?",
    options: ["1", "3", "6", "7"],
    correctAnswer: 2,
    category: "Genesis",
    explanation: "God created the world in six days and rested on the seventh day.",
    bgKeyword: "creation light"
  },
  {
    id: '19',
    text: "What is the longest book in the Bible?",
    options: ["Genesis", "Exodus", "Psalms", "Isaiah"],
    correctAnswer: 2,
    category: "Old Testament",
    explanation: "The Book of Psalms contains 150 chapters, making it the longest book by chapter count.",
    bgKeyword: "harp music"
  },
  {
    id: '20',
    text: "Who wrote the Book of Revelation?",
    options: ["Peter", "Paul", "John", "James"],
    correctAnswer: 2,
    category: "New Testament",
    explanation: "The Apostle John wrote the Book of Revelation while exiled on the island of Patmos.",
    bgKeyword: "rocky shore"
  },
  {
    id: '21',
    text: "What did God use to create Eve?",
    options: ["Dust", "A rib from Adam", "A flower", "Nothing"],
    correctAnswer: 1,
    category: "Genesis",
    explanation: "God took a rib from Adam to create Eve while he was in a deep sleep.",
    bgKeyword: "sleeping man"
  },
  {
    id: '22',
    text: "Who was the oldest man mentioned in the Bible?",
    options: ["Noah", "Methuselah", "Enoch", "Adam"],
    correctAnswer: 1,
    category: "Genesis",
    explanation: "Methuselah is recorded to have lived 969 years.",
    bgKeyword: "ancient man"
  },
  {
    id: '23',
    text: "What was the sign of God's covenant with Noah?",
    options: ["A rainbow", "A burning bush", "A stone tablet", "A dove"],
    correctAnswer: 0,
    category: "Genesis",
    explanation: "God set a rainbow in the clouds as a sign of His promise never to flood the earth again.",
    bgKeyword: "rainbow sky"
  },
  {
    id: '24',
    text: "In what language was most of the New Testament originally written?",
    options: ["Hebrew", "Latin", "Greek", "Aramaic"],
    correctAnswer: 2,
    category: "New Testament",
    explanation: "Most of the New Testament was originally written in Koine Greek.",
    bgKeyword: "greek letters"
  },
  {
    id: '25',
    text: "Who was the mother of Samuel?",
    options: ["Hannah", "Elizabeth", "Sarah", "Rebekah"],
    correctAnswer: 0,
    category: "Old Testament",
    explanation: "Hannah prayed fervently for a child and promised to dedicate him to God's service.",
    bgKeyword: "praying hands"
  },
  {
    id: '26',
    text: "Which of the 12 apostles was the first to be martyred?",
    options: ["Peter", "Andrew", "James the Great", "Stephen"],
    correctAnswer: 2,
    category: "Apostles",
    explanation: "James, the brother of John, was killed by King Herod Agrippa I.",
    bgKeyword: "ancient city"
  },
  {
    id: '27',
    text: "What was the name of the woman who hid the spies in Jericho?",
    options: ["Ruth", "Rahab", "Delilah", "Deborah"],
    correctAnswer: 1,
    category: "Old Testament",
    explanation: "Rahab hid the Israelite spies and was spared when the walls of Jericho fell.",
    bgKeyword: "city walls"
  },
  {
    id: '28',
    text: "Who walked on water with Jesus?",
    options: ["John", "Peter", "James", "None of them"],
    correctAnswer: 1,
    category: "Jesus' Life",
    explanation: "Peter stepped out of the boat and walked on water toward Jesus before becoming afraid.",
    bgKeyword: "walking on water"
  },
  {
    id: '29',
    text: "What instrument did David play for King Saul?",
    options: ["Harp", "Trumpet", "Flute", "Drum"],
    correctAnswer: 0,
    category: "Kings",
    explanation: "David played the harp to soothe King Saul's troubled spirit.",
    bgKeyword: "ancient harp"
  },
  {
    id: '30',
    text: "Who was the sister of Moses and Aaron?",
    options: ["Miriam", "Ruth", "Rachel", "Leah"],
    correctAnswer: 0,
    category: "Exodus",
    explanation: "Miriam was the older sister of Moses and Aaron and a prophetess.",
    bgKeyword: "desert landscape"
  }
];

export const THEME_COLORS = [
  'bg-blue-500 hover:bg-blue-600',
  'bg-rose-500 hover:bg-rose-600',
  'bg-amber-500 hover:bg-amber-600',
  'bg-emerald-500 hover:bg-emerald-600'
];

export const CATEGORY_ICONS: Record<string, string> = {
  'New Testament': '📖',
  'Old Testament': '📜',
  'Kings': '👑',
  'Exodus': '🌊',
  'Apostles': '🕊️',
  "Jesus' Life": '⭐',
  'Genesis': '🌱',
  'Judges': '⚖️',
  'Prophets': '🔥'
};
