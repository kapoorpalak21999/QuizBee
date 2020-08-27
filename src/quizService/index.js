const qBank = [
  {
    question:
      "What does CSS stand for?  ",
    answers: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colourfull Style Sheets"],
    correct: "Cascading Style Sheets",
    questionId: "099099"
  },
  {
    question:
      'Which of the following selector matches a element based on its id?',
    answers: ["The Id Selector", "The Universal Selector", "The Descendant Selector", "The Class Selector"],
    correct: "The Id Selector",
    questionId: "183452"
  },
  {
    question:
      "Which of the following defines 1% of viewport height?",
    answers: ["px", "vh", "vw", "vmin"],
    correct: "vh",
    questionId: "267908"
  },
  {
    question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
    answers: [
      "margin",
      "clear",
      "float",
      "padding"
    ],
    correct: "clear",
    questionId: "333247"
  },
  {
    question: "Select the correct HTML for creating a hyperlink?",
    answers: ["A url='http://www.techbeamers.com'>techbeamers.com", "<A href='http://www.techbeamers.com'>techbeamers</A>", "A>http://www.techbeamers.com", " A name='http://www.techbeamers.com'>techbeamers.com"],
    correct: "<A href='http://www.techbeamers.com'>techbeamers</A>",
    questionId: "496293"
  },
  {
    question:
      "Select the property that is used to change the list style to show roman numerals instead of normal numbers?",
    answers: [
      "list-style:roman", "list-style-type:upper-roman",
      "list-type:roman","list-bullet-type:roman-numerals"
    ],
    correct: "list-style:roman",
    questionId: "588909"
  },
  {
    question:
      'Select the correct option to create an e-mail link?',
    answers: ["A href='xxx@yyy.com'", "Mail href='xxx@yyy.com'", "A href=mailto:xxx@yyy.com", "Mail>xxx@yyy.com/mail"],
    correct: "A href=mailto:xxx@yyy.com",
    questionId: "648452"
  },
  {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: ["In th <body> section", "At the end of the document", "In the <head> section", "None of these"],
    correct: "In the <head> section",
    questionId: "786649"
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    answers: ["<link rel='stylesheet' type='text/css' href='mystyle.css'>", "<style src='mystyle.css'>", "<stylesheet>mystyle.css</stylesheet"],
    correct: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
    questionId: "839754"
  },
  {
    question:
      "Which HTML tag is used to define an internal style sheet?",
    answers: [
      "<style>",
      "<script>",
      "<css>",
      "<meta>"
    ],
    correct: "<style>",
    questionId: "98390"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["class", "style", "font", "styles"],
    correct: "style",
    questionId: "1071006"
  },
  {
    question: "Which is the correct CSS syntax?",
    answers: ["{body;color:black;}", "body:color=black;", "body {color:black;}", "{body:color=black;}"],
    correct: "body {color:black;}",
    questionId: "1174154"
  },
  {
    question: "How do you display hyperlinks without an underline?",
    answers: ["a{text-decoration:no-underline;}", "a{underline:none;}", "a{decoration:no-underline;}", "a{text-decoration:none;}"],
    correct: "a{text-decoration:none;}",
    questionId: "1226535"
  },
  {
    question: "The # symbol specifies that the selector is?",
    answers: ["class", "id", "name", "first"],
    correct: "id",
    questionId: "1310938"
  },
  {
    question: "Which of the following is correct about PHP?",
    answers: ["PHP can access cookies variables and set cookies.", "Using PHP, you can restrict users to access some pages of your website.", "It can encrypt data.", "All of above"],
    correct: "All of above",
    questionId: "1436873"
  },
  {
    question: "Which of the following is correct about constants?",
    answers: [" Unlike with variables, you do not need to have a constant with a $.", "Only scalar data (boolean, integer, float and string) can be contained in constants.", "Both of the above.", "None of the above."],
    correct: "Both of the above",
    questionId: "1515110"
  },
  {
    question: "Which of the following function is used to locate a string within a string?",
    answers: ["search()", "locate()", "strpos()", "None of the above."],
    correct: "strpos()",
    questionId: "1642728"
  },
  {
    question:
      "Which of the following can be used to get information sent via get/post method in PHP? ",
    answers: ["$_REQUEST", "$REQUEST", "$REQUEST_PAGE", "None of the above."],
    correct: "$_REQUEST",
    questionId: "1747256"
  },
  {
    question:
      "Which of the following is used to access session variables in PHP?",
    answers: ["session_start() function", "$_SESSION[]", "isset() function", "session_destroy() function"],
    correct: "$_SESSION[]",
    questionId: "1822532"
  },
  {
    question: "Which of the following is used to destroy the session?",
    answers:["session_start() function", "$_SESSION[]", "isset() function", "session_destroy() function"],
    correct: "session_destroy() function",
    questionId: "195075"
  },
  {
    question: 'Which of the following method acts as a destructor function in a PHP class?',
    answers: ["class_name()", "__destruct", "destructor", "None of the above."],
    correct: "__destruct",
    questionId: "2019778"
  },
  {
    question: "PHP is _______ scripting language",
    answers: ["Server-side", "Clint-side", "Middle-side", "Out-side"],
    correct: "Server-side",
    questionId: "2134343"
  },
  {
    question:"Which of the following array represents an array with a numeric index?",
    answers: [
      "Numeric Array",
      "Associative Array",
      "Multidimentional Array",
      "None of the above"
    ],
    correct: "Numeric Array",
    questionId: "2210799"
  },
  {
    question:
      "PHP Stands for?",
    answers: ["Php Hypertext Processor", "Php Hypertext Preprocessor", "Php Hypermarkup Preprocessor", "Php Hypermarkup Processor"],
    correct: "Php Hypertext Preprocessor",
    questionId: "2379831"
  },
  {
    question: "What is the default execution time set in set_time_limit()?",
    answers: ["20 secs", "30 secs", "40 secs", "35 secs"],
    correct: "30 secs",
    questionId: "2426418"
  },
  {
    question: "In mail($param2, $param2, $param3, $param4), the $param2 contains:",
    answers: ["The message", "The recipient", "The header", "The subject"],
    correct: "The subject",
    questionId: "2510086"
  },
  {
    question: "Which of following function return 1 when output is successful?",
    answers: [
      "echo()",
      "print()",
      "both",
      "none"
    ],
    correct: "print()",
    questionId: "2685745"
  },
  {
    question:
      "Which of the following differences are valid between PHP 4 and PHP 5?",
    answers: ["Built-in native support for SQLite", "improved MySQL support", "Support for inheritance", "Both a and b"],
    correct: "Both a and b",
    questionId: "2796884"
  },
  
];

export default (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
