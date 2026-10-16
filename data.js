// Version: v3.2 Smart
let treeDataFogel = {
    type: "couple", color: "c-root", defaultExpanded: true,
    blood: { heb: "יוכבד", eng: "Yochevet", gender: "female", tag: "שורש המשפחה", story: "אם המשפחה בראש העץ יחד עם דב. חמשת ילדיהם הם: פרויים גולדין, טוביה פייגל, הדוד ממקסיקו, פרדל פייגל (גלוברמן), ואברהם יעקב פייגל." },
    spouse: { heb: "דב", eng: "Dov", gender: "male", tag: "שורש המשפחה", story: "אב המשפחה בראש העץ יחד עם יוכבד." },
    spouseSide: "right",
    children: [
        {
            type: "couple", color: "c-blue", defaultExpanded: false,
            blood: { heb: "פרויים גולדין", eng: "Froim Goldin", gender: "male" },
            spouse: { heb: "חנן גולדין", eng: "Chanan Goldin", gender: "female" },
            children: [
                { type: "single", color: "c-blue", blood: { heb: "שלמה גולדין", eng: "Shloimah Goldin", gender: "male" } },
                { type: "single", color: "c-blue", blood: { heb: "אדל גולדין", eng: "Edel Goldin", gender: "female" } },
                { type: "single", color: "c-blue", blood: { heb: "נלימן גולדין", eng: "Nleiman Goldin", gender: "male" } },
                { type: "single", color: "c-blue", blood: { heb: "טולבה גולדין", eng: "Tolba Goldin", gender: "female" } },
                { type: "single", color: "c-blue", blood: { heb: "אידה גולדין", eng: "Ida Goldin", gender: "female" } },
                { type: "single", color: "c-blue", blood: { heb: "שינה גולדין", eng: "Shina Goldin", gender: "female" } },
                {
                    type: "couple", color: "c-blue", defaultExpanded: false,
                    blood: { heb: "גדליה גולדין", eng: "Gedaliya Goldin", gender: "male" },
                    spouse: { heb: "גולדי פוגל", eng: "Goldie Fogel", gender: "female" },
                    children: [
                        {
                            type: "couple", color: "c-blue", defaultExpanded: false, spouseSide: "left",
                            spouse: { heb: "הלן בורמיינסקי", eng: "Helen Bormeinski", gender: "female" },
                            blood: { heb: "סטיבן גולדין", eng: "Steven Goldin", gender: "male" },
                            children: [
                                {
                                    type: "multi", color: "c-sage", defaultExpanded: false,
                                    nodes: [
                                        { role: "spouse", heb: "רוברט אסיק", eng: "Robert Essick", gender: "male" },
                                        { role: "blood", heb: "אליס גולדין פולטין", eng: "Elyse Goldin Foltyn", gender: "female" },
                                        { role: "spouse", heb: "דיוויד פולטין", eng: "David Foltyn", gender: "male" },
                                        { role: "spouse", heb: "אן רוסמן", eng: "Ann Rosman", gender: "female" }
                                    ],
                                    children: [
                                        { type: "single", color: "c-sage", blood: { heb: "מארה אסיק", eng: "Mara Essick", gender: "female" } },
                                        { type: "single", color: "c-sage", blood: { heb: "לילי פולטין", eng: "Lily Foltyn", gender: "female" } },
                                        { type: "single", color: "c-sage", blood: { heb: "אבי פולטין", eng: "Abby Foltyn", gender: "female" } },
                                        { type: "single", color: "c-sage", blood: { heb: "אוון פולטין", eng: "Evan Foltyn", gender: "male" } },
                                        { type: "single", color: "c-sage", blood: { heb: "אלי פולטין", eng: "Eli Foltyn", gender: "male" } },
                                        {
                                            type: "couple", color: "c-sage", defaultExpanded: false,
                                            blood: { heb: "לינדסי לירי", eng: "Leandsay Leary", gender: "female" },
                                            spouse: { heb: "דיוויד לירי", eng: "David Leary", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-sage", blood: { heb: "אלה", eng: "Elle", gender: "female" } },
                                                { type: "single", color: "c-sage", blood: { heb: "טדי", eng: "Teddy", gender: "male" } },
                                                { type: "single", color: "c-sage", blood: { heb: "דייזי", eng: "Daisy", gender: "female" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-sage", defaultExpanded: false,
                                            blood: { heb: "מולי הנרי", eng: "Molly Henry", gender: "female" },
                                            spouse: { heb: "דן הנרי", eng: "Dan Henry", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-sage", blood: { heb: "הייזל", eng: "Hazel", gender: "female" } }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-violet", defaultExpanded: false, spouseSide: "left",
                                    spouse: { heb: "שלי שטיין", eng: "Shelley Stein", gender: "female" },
                                    blood: { heb: "גרי גולדין", eng: "Gary Goldin", gender: "male" },
                                    children: [
                                        {
                                            type: "couple", color: "c-violet", defaultExpanded: false,
                                            blood: { heb: "אליסון גולדין", eng: "Alison Goldin", gender: "female" },
                                            spouse: { heb: "ברט קורץ", eng: "Bret Kurtz", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-violet", blood: { heb: "מיילס קורץ", eng: "Miles Kurtz", gender: "male" } },
                                                { type: "single", color: "c-violet", blood: { heb: "רורי קורץ", eng: "Rory Kurtz", gender: "male" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-violet", defaultExpanded: false,
                                            blood: { heb: "הילארי גולדין", eng: "Hilary Goldin", gender: "female" },
                                            spouse: { heb: "בריאן פארקר", eng: "Brian Parker", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-violet", blood: { heb: "פין", eng: "Finn", gender: "male" } }
                                            ]
                                        },
                                        { type: "single", color: "c-violet", blood: { heb: "סקוט גולדין", eng: "Scott Goldin", gender: "male" } }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-peach", defaultExpanded: false, spouseSide: "left",
                                    spouse: { heb: "מרסי גרינברט", eng: "Marcy Greenbert", gender: "female" },
                                    blood: { heb: "קרייג גולדין", eng: "Craig Goldin", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-peach", blood: { heb: "דניאל גולדין", eng: "Daniel Goldin", gender: "male" } },
                                        {
                                            type: "couple", color: "c-peach", defaultExpanded: false,
                                            blood: { heb: "אמנדה גולדין", eng: "Amanda Goldin", gender: "female" },
                                            spouse: { heb: "מיקי סינדוני", eng: "Mikey Sindoni", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-peach", blood: { heb: "הרפר גולדין סינדוני", eng: "Harper Goldin Sindoni", gender: "female" } }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-root", defaultExpanded: false,
                                    blood: { heb: "גייל גולדין וונסץ'", eng: "Gail Goldin Wunsch", gender: "female" },
                                    spouse: { heb: "פול וונסץ'", eng: "Paul Wunsch", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-root", blood: { heb: "ג'וליה וונסץ'", eng: "Julia Wunsch", gender: "female" } }
                                    ]
                                }
                            ]
                        },
                        { type: "single", color: "c-blue", blood: { heb: "פרדים גולדין", eng: "Frdim Goldin", gender: "male" } },
                        {
                            type: "couple", color: "c-grey", defaultExpanded: false,
                            blood: { heb: "חנה צוקר", eng: "Hanna Zucker", gender: "female" },
                            spouse: { heb: "נתן צוקר", eng: "Nathan Zucker", gender: "male" },
                            children: [
                                {
                                    type: "couple", color: "c-grey", defaultExpanded: false,
                                    blood: { heb: "גולדי צוקר וייצמן", eng: "Goldie Zucker Weizman", gender: "female" },
                                    spouse: { heb: "חנן וייצמן", eng: "Chanan Weizman", gender: "male" },
                                    children: [
                                        {
                                            type: "couple", color: "c-grey", defaultExpanded: false,
                                            blood: { heb: "שרון וייצמן", eng: "Sharone Weizman", gender: "female" },
                                            spouse: { heb: "דיוויד מיירס", eng: "David Meyers", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-grey", blood: { heb: "איתן מאיירס", eng: "Ethan Meyers", gender: "male" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-grey", defaultExpanded: false, spouseSide: "left",
                                            spouse: { heb: "דלה סיימון וייצמן", eng: "Della Simon Weizman", gender: "female" },
                                            blood: { heb: "מייקל וייצמן", eng: "Michael Weizman", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-grey", blood: { heb: "טליה", eng: "Talia", gender: "female" } },
                                                { type: "single", color: "c-grey", blood: { heb: "עדינה", eng: "Adina", gender: "female" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-grey", defaultExpanded: false,
                                            blood: { heb: "אילנית וייצמן", eng: "Elanit Weizman", gender: "female" },
                                            spouse: { heb: "ג'ורג דה לה טורה", eng: "George De La Torre", gender: "male" }
                                        }
                                    ]
                                },
                                {
                                    type: "multi", color: "c-grey", defaultExpanded: false,
                                    nodes: [
                                        { role: "spouse", heb: "סינתיה רומן", eng: "Cynthia Zucker", gender: "female" },
                                        { role: "blood", heb: "מרווין צוקר", eng: "Marvin Zucker", gender: "male" },
                                        { role: "spouse", heb: "רנה ברוסלוף", eng: "Renee Bruseloff", gender: "female" }
                                    ],
                                    children: [
                                        {
                                            type: "couple", color: "c-grey", defaultExpanded: false,
                                            blood: { heb: "זאק צוקר", eng: "Zack Zucker", gender: "male" },
                                            spouse: { heb: "איילין וייס צוקר", eng: "Aileen Weiss Zucker", gender: "female" },
                                            children: [
                                                { type: "single", color: "c-grey", blood: { heb: "נעמי צוקר", eng: "Naomi Zucker", gender: "female" } },
                                                { type: "single", color: "c-grey", blood: { heb: "קלואי צוקר", eng: "Chloe Zucker", gender: "female" } }
                                            ]
                                        },
                                        { type: "single", color: "c-grey", blood: { heb: "גרי צוקר", eng: "Gary Zucker", gender: "male" } }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "couple", color: "c-blue", defaultExpanded: false, spouseSide: "left",
            spouse: { heb: "בלה פייגל", eng: "Bella Fiigel", gender: "female" },
            blood: { heb: "טוביה פייגל", eng: "Tuvia Fiigel", gender: "male" },
            children: [
                { type: "single", color: "c-blue", blood: { heb: "ליבי פוגל", eng: "Libby Fogel", gender: "female" } },
                {
                    type: "single", color: "c-blue", defaultExpanded: false,
                    blood: { heb: "ננה (גננדל) פוגל", eng: "Nana Genendel Fogel", gender: "female" },
                    children: [
                        {
                            type: "couple", color: "c-blue", defaultExpanded: false,
                            blood: { heb: "יונה בלושטיין", eng: "Yona Blushtein", gender: "female" },
                            spouse: { heb: "מאיר בלושטיין", eng: "Meir Blushtein", gender: "male" },
                            children: [
                                { type: "single", color: "c-blue", blood: { heb: "גילה בלושטיין", eng: "Gila Blushtein", gender: "female" } },
                                { type: "single", color: "c-blue", blood: { heb: "אבישי בלושטיין", eng: "Avishai Blushtein", gender: "male" } }
                            ]
                        }
                    ]
                },
                { type: "single", color: "c-blue", blood: { heb: "פיליפ פוגל", eng: "Philip Fogel", gender: "male" } },
                { type: "single", color: "c-blue", blood: { heb: "שלום וולפ פוגל", eng: "Shalom Volf Fogel", gender: "male" } },
                { type: "single", color: "c-blue", blood: { heb: "אייב פוגל אברהם", eng: "Aib Fogel Avraham", gender: "male" } },
                {
                    type: "couple", color: "c-gold", defaultExpanded: false,
                    blood: { heb: "לנה פוגל", eng: "Lena Fogel", gender: "female" },
                    spouse: { heb: "יצחק רויטבורד (רייברג)", eng: "Craig Rayberg", gender: "male" },
                    children: [
                        {
                            type: "couple", color: "c-gold", defaultExpanded: false, spouseSide: "left",
                            spouse: { heb: "מרים בלייכר", eng: "Mickey Bleicher", gender: "female" },
                            blood: { heb: "חיים רויטבורד רייברג", eng: "Haim Reyberg", gender: "male" },
                            children: [
                                { type: "single", color: "c-gold", blood: { heb: "גילה רייברג", eng: "Gila Rayberg", gender: "female" } },
                                { type: "single", color: "c-gold", blood: { heb: "ראובן רייברג ענף-שלום", eng: "Reuven Rayberg Anaf-Shalom", gender: "male" } },
                                { type: "single", color: "c-gold", blood: { heb: "שולי רייברג", eng: "Shuli Rayberg", gender: "female" } },
                                {
                                    type: "couple", color: "c-gold", defaultExpanded: false,
                                    blood: { heb: "ג'ולי באר", eng: "Julie Barr", gender: "female" },
                                    spouse: { heb: "פיליפ באר", eng: "Philip Barr", gender: "male" },
                                    children: [
                                        {
                                            type: "couple", color: "c-gold", defaultExpanded: false, spouseSide: "left",
                                            spouse: { heb: "מליסא מילר בארר", eng: "MelisA Miller Barr", gender: "female" },
                                            blood: { heb: "דיוויד מילר א בארר", eng: "David A Millar Barr", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-gold", blood: { heb: "זאב", eng: "Zeev", gender: "male" } },
                                                { type: "single", color: "c-gold", blood: { heb: "סילביה", eng: "Silvia", gender: "female" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-gold", defaultExpanded: false,
                                            blood: { heb: "מאיה קוליק", eng: "Maya Kulick", gender: "female" },
                                            spouse: { heb: "כריס קוליק", eng: "Chris Kulick", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-gold", blood: { heb: "מרגוט", eng: "Margot", gender: "female" } },
                                                { type: "single", color: "c-gold", blood: { heb: "איבי", eng: "Evie", gender: "female" } }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-gold", defaultExpanded: false,
                                    blood: { heb: "אליזבת' רייבי", eng: "Elizabeth Raybee", gender: "female" },
                                    spouse: { heb: "צ'ארלי רייבי", eng: "Charlie Raybee", gender: "male" },
                                    children: [
                                        {
                                            type: "couple", color: "c-gold", defaultExpanded: false,
                                            blood: { heb: "אמת'יסט פרץ'", eng: "Amethyst Frech", gender: "female" },
                                            spouse: { heb: "ג'ון פרץ'", eng: "Jon Frech", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-gold", blood: { heb: "פליקס", eng: "Felix", gender: "male" } },
                                                { type: "single", color: "c-gold", blood: { heb: "יהודה", eng: "Judah", gender: "male" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-gold", defaultExpanded: false,
                                            blood: { heb: "דלילה גוטרייד", eng: "Delilah Gutride", gender: "female" },
                                            spouse: { heb: "אדם גוטרייד", eng: "Adam Gutride", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-gold", blood: { heb: "שלמה", eng: "Solomon", gender: "male" } }
                                            ]
                                        }
                                    ]
                                }
