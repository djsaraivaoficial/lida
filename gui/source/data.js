/************************************************************************************************
********************************
* DATA
********************************
************************************************************************************************/

/*****************************************
* DEFINES THE CURRENTLY VALID ANNOTATIONS
*****************************************/
var validAnnotations = ["data","string","multilabel_classification", "multilabel_classification_string"]

var currentTurnId = 1;


/*****************************************
* TEST DATA
*****************************************/

var annotationTestStructure =
[
    "sys-info",
    "bye-bye",
    "take-over-world",
    "ask-again",
    "marvel-at-these-colours",
    "play-a-game-of-chess",
    "drink-a-cup-of-coffee",
    "drink-a-cup-of-tea",
    "stare-at-the-wall",
    "write-some-more-useless-system-acts",
    "pretend-you-are-superman"
]


/***********************
* API_DEFINITION
***********************/
var annotationStyle = {
        user1: ["string",""],
        systemResponse: ["string",""],
        systemAct: ["multilabel_classification",annotationTestStructure]
};

var turns =
[
    {
        user1: "Hi, this is the very first instance!",
        systemResponse: "Hello, welcome to the system!",
        systemAct: ["sys-info","bye-bye"],
    },
    {
        user1: "How can I help you?",
        systemResponse: "In no particular way. Thank you.",
        systemAct: ["pretend-you-are-superman","bye-bye"],
    },
    {
        user1: "How can you help me then?",
        systemResponse: "In many many ways!",
        systemAct: ["sys-info","marvel-at-these-colours"],
    }
];

// var finalDataFormatForTurn = {
//     string:
//     [
//         {name: "user1", data:"Hi, this is the very first instance!", params:""},
//         {name: "systemResponse", data:"Hello, welcome to the system!", params:""}
//     ],
//     classification: [
//         {name: "systemAct", data:["sys-info","bye-bye"], params: annotationTestStructure}
//     ]
// };

/***********************
* END OF API_DEFINITION
***********************/





/***********************
* EXPORTING
***********************/

data = {
    turns : turns,
    annotationStyle : annotationStyle,
    annotationTestStructure : annotationTestStructure,
    currentTurnId : currentTurnId,
    validAnnotations : validAnnotations
}
