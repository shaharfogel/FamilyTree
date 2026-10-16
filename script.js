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
                            ]
                        },
                        { type: "single", color: "c-gold", blood: { heb: "מיכאל שמואל", eng: "Michael Shmuel", gender: "male" } },
                        {
                            type: "couple", color: "c-gold", defaultExpanded: false,
                            blood: { heb: "לנה חביב", eng: "Lena Cabib", gender: "female" },
                            spouse: { heb: "דריו חביב", eng: "Dario Cabib", gender: "male" },
                            children: [
                                {
                                    type: "couple", color: "c-gold", defaultExpanded: false,
                                    blood: { heb: "עדינה חביב", eng: "Adina Cabib", gender: "female" },
                                    spouse: { heb: "מנחם שי", eng: "Menachem Shai", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-gold", blood: { heb: "תום", eng: "Tom", gender: "male" } },
                                        { type: "single", color: "c-gold", blood: { heb: "שחר", eng: "Shahar", gender: "male" } },
                                        { type: "single", color: "c-gold", blood: { heb: "רחל", eng: "Rachel", gender: "female" } },
                                        { type: "single", color: "c-gold", blood: { heb: "אייל", eng: "Eyal", gender: "male" } },
                                        { type: "single", color: "c-gold", blood: { heb: "מרים", eng: "Miriam", gender: "female" } }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-gold", defaultExpanded: false,
                                    blood: { heb: "איריס חביב", eng: "Iris Habib", gender: "female" },
                                    spouse: { heb: "מרקו חביב", eng: "Marco Habib", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-gold", blood: { heb: "נתן", eng: "Nathan", gender: "male" } },
                                        { type: "single", color: "c-gold", blood: { heb: "אמילי", eng: "Emily", gender: "female" } },
                                        { type: "single", color: "c-gold", blood: { heb: "בן", eng: "Ben", gender: "male" } }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "single", color: "c-gold", defaultExpanded: false,
                            blood: { heb: "חנה רויטבורד שפירו", eng: "Hana Roytbord Shapiro", gender: "female" },
                            children: [
                                {
                                    type: "couple", color: "c-gold", defaultExpanded: false,
                                    blood: { heb: "מילדרד שפירו", eng: "Mildrad Shapiro", gender: "female" },
                                    spouse: { heb: "פול נויברגר", eng: "Paul Neuberger", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-gold", blood: { heb: "מרסי", eng: "Mercy", gender: "female" } },
                                        { type: "single", color: "c-gold", blood: { heb: "ליאו", eng: "Leo", gender: "male" } }
                                    ]
                                },
                                { type: "single", color: "c-gold", blood: { heb: "לנה שפירו", eng: "Lana Shapiro", gender: "female" } }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            type: "single", color: "c-purple",
            blood: { heb: "הדוד ממקסיקו", eng: "The Uncle From Mexico", gender: "male", story: "אחיהם של אברהם יעקב, פרדל, טוביה ופרויים. ללא ילדים." }
        },
        {
            type: "couple", color: "c-green", defaultExpanded: true,
            bridgeId: "bridge-fredel-josef",
            blood: {
                heb: "פרדל פייגל (גלוברמן)", eng: "Fredel Fiigel Globerman", gender: "female",
                story: "בתם של דב ויוכבד ואחותו של אברהם יעקב פייגל. שתי בנותיה (מינה ואינדה לאה) התחתנו עם שני בניו של אחיה אברהם יעקב (אריה ואליהו)."
            },
            spouse: {
                heb: "יוסף חיים גלוברמן", eng: "Josef Haim Globerma", gender: "male",
                story: "בעלה של פרדל פייגל ואביהן של מינה והינדה לאה."
            },
            children: []
        },
        {
            type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "left",
            customSvgRow: true,
            bridgeId: "bridge-avraham-etel",
            spouse: {
                heb: "אטל טורק", eng: "Etel Toruk", gender: "female", death: "1942", perished: true,
                story: "אשתו של אברהם יעקב פייגל ואמם של אריה, וולפל, יוכבד ואליהו. נרצחה בסארני ב-1942."
            },
            blood: {
                heb: "אברהם יעקב פייגל", eng: "Avraham Yaakov Fiigel", gender: "male", birth: "1878", death: "1942", perished: true,
                story: "בנם של דב ויוכבד. נרצח בסארני ב-1942. ארבעת ילדיו (אריה, וולפל, יוכבד ואליהו) מחוברים אליו בקו התחתון.",
                files: [
                    { name: "דף עד ביד ושם (1137103)", path: "https://collections.yadvashem.org/en/names/1137103" },
                    { name: "רשומה נוספת לבדיקה (407755)", path: "https://collections.yadvashem.org/en/names/407755" },
                    { name: "דף הנצחה משפחת פוגל (PDF)", path: "https://drive.google.com/file/d/1LXAkkSLRvkq6YUasl10JvXQLVUBJOqZU/view?usp=drivesdk" }
                ]
            },
            children: [
                {
                    type: "couple", color: "c-green", defaultExpanded: true, spouseSide: "left",
                    spouse: {
                        heb: "מינה פייגל (גלוברמן)", eng: "Mina Fiigel (Globerman)", gender: "female", id: "box-mina", cousinWife: true,
                        tag: "בת פרדל ויוסף חיים",
                        story: "בתם של פרדל פייגל ויוסף חיים גלוברמן, ואחותה של הינדה לאה. נישאה לבן דודה אריה פייגל.",
                        files: [
                            { name: "מסמך ארולסן 104263334_0_1.jpg", path: "https://drive.google.com/file/d/1hFJ6UKiLJuwudlI48qT_zEQDuoVVAv79/view?usp=drivesdk" },
                            { name: "הסבר הספרנית למסמכי 2022", path: "https://drive.google.com/file/d/1ojHc1E3CI_KPIUA7jNxRCNx7NpWOu6w2/view?usp=drivesdk" }
                        ]
                    },
                    blood: {
                        heb: "אריה פייגל", eng: "Ariyeh Fiigel", gender: "male", id: "box-ariyeh",
                        tag: "בן אברהם יעקב ואטל",
                        story: "בנם של אברהם יעקב פייגל ואטל טורק. נישא לבת דודתו מינה גלוברמן.",
                        files: [
                            { name: "מסמך ארולסן 104263332_0_1.jpg", path: "https://drive.google.com/file/d/1PmcHYIP_BfC0plNjxeb791pl1Njq562h/view?usp=drivesdk" },
                            { name: "מסמך ארולסן 104263332_0_2.jpg", path: "https://drive.google.com/file/d/1LqKVJFSFeAYjhpEu7RK90j7K-JhdUbf4/view?usp=drivesdk" },
                            { name: "מסמך ארולסן 31798471_0_1.tif", path: "https://drive.google.com/file/d/1siLflrvlgSPoRjJYI2lMhj3On_Z00a0p/view?usp=drivesdk" },
                            { name: "רשומת יד ושם (16660797)", path: "https://collections.yadvashem.org/en/names/16660797" }
                        ]
                    },
                    children: [
                        {
                            type: "couple", color: "c-green", defaultExpanded: true, spouseSide: "left",
                            spouse: { heb: "חיה יגל", eng: "Haya Yagel", gender: "female" },
                            blood: { heb: "יוסי יגל", eng: "Yossi Yagel", gender: "male" },
                            children: [
                                {
                                    type: "couple", color: "c-green", defaultExpanded: true, spouseSide: "left",
                                    spouse: { heb: "מאיה יגל", eng: "Maya Yagel", gender: "female" },
                                    blood: { heb: "ניר יגל", eng: "Nir Yagel", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-green", blood: { heb: "רונה יגל", eng: "Rona Yagel", gender: "female" } },
                                        { type: "single", color: "c-green", blood: { heb: "אילי יגל", eng: "Ilay Yagel", gender: "male" } }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-green", defaultExpanded: true,
                                    blood: { heb: "עדי יגל", eng: "Adi Yagel", gender: "female" },
                                    spouse: { heb: "איתי", eng: "Itay", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-green", blood: { heb: "אריאל יגל", eng: "Or Yagel", gender: "male" } },
                                        { type: "single", color: "c-green", blood: { heb: "עידן יגל", eng: "Or Yagel", gender: "male" } },
                                        { type: "single", color: "c-green", blood: { heb: "אלעד יגל", eng: "Or Yagel", gender: "male" } }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-green", defaultExpanded: true, spouseSide: "left",
                                    spouse: { heb: "יפעת יגל", eng: "Yifat Yagel", gender: "female" },
                                    blood: { heb: "אריק יגל", eng: "Arik Yagel", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-green", blood: { heb: "חן יגל", eng: "Hen Yagel", gender: "female" } },
                                        { type: "single", color: "c-green", blood: { heb: "בר יגל", eng: "Bar Yagel", gender: "female" } }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "couple", color: "c-green", defaultExpanded: true, spouseSide: "left",
                            spouse: { heb: "נירה יגל", eng: "Nira Yagel", gender: "female" },
                            blood: { heb: "אבי יגל", eng: "Avi Yagel", gender: "male" },
                            children: [
                                {
                                    type: "couple", color: "c-green", defaultExpanded: true, spouseSide: "left",
                                    spouse: { heb: "ליהי יגל", eng: "Leehi Yagel", gender: "female" },
                                    blood: { heb: "אור יגל", eng: "Or Yagel", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-green", blood: { heb: "ללי יגל", eng: "Laly Yagel", gender: "female" } },
                                        { type: "single", color: "c-green", blood: { heb: "שי יגל", eng: "Shai Yagel", gender: "male" } }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-green", defaultExpanded: true, spouseSide: "left",
                                    spouse: { heb: "ענת יגל", eng: "Anat Yagel", gender: "female" },
                                    blood: { heb: "עומר יגל", eng: "Omer Yagel", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-green", blood: { heb: "עמית יגל", eng: "Amit Yagel", gender: "male" } },
                                        { type: "single", color: "c-green", blood: { heb: "ניב יגל", eng: "Niv Yagel", gender: "male" } }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-green", defaultExpanded: true,
                                    blood: { heb: "לי יגל", eng: "Lee Yagel", gender: "female" },
                                    spouse: { heb: "אודי פרסי", eng: "Udi Persi", gender: "male" },
                                    children: [
                                        { type: "single", color: "c-green", blood: { heb: "לני יגל", eng: "Leni Yagel", gender: "female" } },
                                        { type: "single", color: "c-green", blood: { heb: "דניאל יגל", eng: "Daniel Yagel", gender: "male" } },
                                        { type: "single", color: "c-green", blood: { heb: "מיקה יגל", eng: "Mika Yagel", gender: "female" } }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "couple", color: "c-peach", defaultExpanded: true, spouseSide: "left",
                    spouse: {
                        heb: "שרה פייגל", eng: "Sara Fiigel", gender: "female", birth: "1917", death: "1942", perished: true,
                        story: "אשתו של וולף זאב (וולפל) פייגל. נרצחה בסארני ב-1942.",
                        files: [{ name: "דף עד ביד ושם (1137104)", path: "https://collections.yadvashem.org/en/names/1137104" }]
                    },
                    blood: {
                        heb: "וולפל פייגל", eng: "Volfel Fiigel", gender: "male", death: "1942", perished: true, id: "box-volfel",
                        story: "וולף זאב (וולפל) פייגל, בנם של אברהם יעקב ואטל. נרצח בסארני.",
                        images: ["https://drive.google.com/file/d/1x3cp3o_V57dral-UBiI0GAloJq144-Vc/view?usp=drivesdk"],
                        files: [
                            { name: "דף עד ביד ושם (13759913)", path: "https://collections.yadvashem.org/en/names/13759913" },
                            { name: "ספר הזיכרון של סארני - עמ' 515", path: "https://jewishgen.org/Yizkor/sarny/Sar515.html" }
                        ]
                    },
                    children: [
                        {
                            type: "single", color: "c-peach",
                            blood: {
                                heb: "שמואל פייגל", eng: "Shmuel Fiigel", gender: "male", birth: "1937", death: "1942", perished: true,
                                story: "בנם של וולפל ושרה פייגל. ברשומות יד ושם מופיע כ'שמחה' יליד 1937, שנרצח בסארני ב-1942.",
                                files: [{ name: "דף עד ביד ושם (1142625)", path: "https://collections.yadvashem.org/en/names/1142625" }]
                            }
                        }
                    ]
                },
                {
                    type: "single", color: "c-olive",
                    blood: { heb: "יוכבד", eng: "Yochevet", gender: "female", id: "box-yochevet-child", story: "בתם של אברהם יעקב פייגל ואטל טורק." }
                },
                {
                    type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "left",
                    spouse: {
                        heb: "אינדה לאה פוגל", eng: "Inda Lea Fogel", gender: "female", birth: "1903", death: "1942", perished: true, id: "box-inda-lea", cousinWife: true,
                        tag: "בת פרדל ויוסף חיים",
                        story: "הינדה לאה פייגל לבית גלוברמן. נרצחה בסארני ב-27.8.1942.",
                        images: ["https://drive.google.com/file/d/1ZG_8PJWaveIt0vxkLoAYTBKmxe3xEV4b/view?usp=drivesdk", "https://drive.google.com/file/d/1ckPJ_F3spVjL40gQ1sAZoLtMAyWB5NjL/view?usp=drivesdk"],
                        files: [
                            { name: "סריקת דף עד - הינדה לאה פייגל", path: "https://drive.google.com/file/d/1_o4COoeLXCdEepjNa1XWJhqyj8oss18o/view?usp=drivesdk" },
                            { name: "דף עד ביד ושם (405581)", path: "https://collections.yadvashem.org/en/names/405581" },
                            { name: "רשומת ספר יזכור ביד ושם (14800110)", path: "https://collections.yadvashem.org/en/names/14800110" },
                            { name: "דף הנצחה משפחת פוגל (PDF)", path: "https://drive.google.com/file/d/1LXAkkSLRvkq6YUasl10JvXQLVUBJOqZU/view?usp=drivesdk" }
                        ]
                    },
                    blood: {
                        heb: "אליהו פוגל", eng: "Eliyahu Fogel", gender: "male", birth: "1901", death: "1942", perished: true, id: "box-eliyahu",
                        tag: "בן אברהם יעקב ואטל",
                        story: "אליהו פייגל (פוגל), בנם של אברהם יעקב ואיטל, נשוי לבת דודתו הינדה לאה. נרצח בסארני.",
                        images: ["https://drive.google.com/file/d/1He5wfB8oX6f2DXAXo-coViM5wariU1FP/view?usp=drivesdk", "https://drive.google.com/file/d/1ckPJ_F3spVjL40gQ1sAZoLtMAyWB5NjL/view?usp=drivesdk"],
                        files: [
                            { name: "סריקת דף עד 1 - אליהו פייגל", path: "https://drive.google.com/file/d/1aLqvo__cybXWayganEbkxgoMHLMSs7Ud/view?usp=drivesdk" },
                            { name: "סריקת דף עד 2 - אליהו פייגל (נוסף)", path: "https://drive.google.com/file/d/1DmIWqysdDYmjQEBbJSjBk6KsiuWh_WQD/view?usp=drivesdk" },
                            { name: "דף עד ביד ושם (401085)", path: "https://collections.yadvashem.org/en/names/401085" },
                            { name: "דף עד שני ביד ושם (1074258)", path: "https://collections.yadvashem.org/en/names/1074258" },
                            { name: "דף הנצחה משפחת פוגל (PDF)", path: "https://drive.google.com/file/d/1LXAkkSLRvkq6YUasl10JvXQLVUBJOqZU/view?usp=drivesdk" }
                        ]
                    },
                    children: [
                        {
                            type: "single", color: "c-pink",
                            blood: {
                                heb: "שרה פייגל", eng: "Sara Fiigel", gender: "female", birth: "1930", death: "1942", perished: true,
                                story: "בתם של אליהו והינדה לאה. נרצחה בסארני ב-1942 בגיל 12.",
                                files: [
                                    { name: "סריקת דף עד - שרה פייגל", path: "https://drive.google.com/file/d/1ifHti0XD1Ue9Z1kiysLQB3ZJ_450B9tf/view?usp=drivesdk" },
                                    { name: "דף עד ביד ושם (8714890)", path: "https://collections.yadvashem.org/en/names/8714890" },
                                    { name: "רשומה מאוחדת ביד ושם (14788014)", path: "https://collections.yadvashem.org/en/names/14788014" }
                                ]
                            }
                        },
                        {
                            type: "single", color: "c-pink",
                            blood: {
                                heb: "אסתר פייגל", eng: "Ester Fiigel", gender: "female", birth: "1933", death: "1942", perished: true,
                                story: "בתם של אליהו והינדה לאה. נרצחה בסארני ב-1942 בגיל 9.",
                                files: [
                                    { name: "סריקת דף עד - אסתר פייגל", path: "https://drive.google.com/file/d/1xOUFL7TNW99Mn3p3smAG8KIsdUiDXYSF/view?usp=drivesdk" },
                                    { name: "דף עד ביד ושם (8714891)", path: "https://collections.yadvashem.org/en/names/8714891" },
                                    { name: "רשומה נוספת ביד ושם (14970921)", path: "https://collections.yadvashem.org/en/names/14970921" }
                                ]
                            }
                        },
                        {
                            type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "left",
                            spouse: { 
                                heb: `חיה פוגל
                                <div class="person female-node" style="position: absolute; top: 50%; left: -115px; transform: translateY(-50%); min-width: 75px; max-width: 90px; padding: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border: 1.5px solid #475569; background: #fff; cursor: default; z-index: 10; direction: rtl;">
                                    <div class="heb" style="font-size: 11px; margin:0; color:#111;">אביבה סטולר</div>
                                    <div class="tag" style="font-size: 8px; margin-top:2px; background: #e2e8f0; border:1px solid #94a3b8; color: #333;">אחות</div>
                                </div>
                                <div style="position: absolute; top: 50%; left: -25px; width: 25px; height: 1.5px; background: #475569; z-index: 9;"></div>`,
                                eng: "Chaya Fogel", 
                                gender: "female" 
                            },
                            blood: {
                                heb: "יוסף (יוסקה) פוגל", eng: "Josef (Yoskeh) Fogel", gender: "male", birth: "1926",
                                story: "בנם של אליהו והינדה לאה מסארני, ששרד את השואה והגיש את דפי העד על הוריו ואחיותיו.",
                                images: ["https://drive.google.com/file/d/19R9cD6kLSXkjxsFTtB7k6BM2IASaZvMt/view?usp=drivesdk"],
                                files: [
                                    { name: "כרטיס פינוי לטשקנט פברואר 1942", path: "https://drive.google.com/file/d/19R9cD6kLSXkjxsFTtB7k6BM2IASaZvMt/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 104263320_0_1", path: "https://drive.google.com/file/d/1lNm1iETJefHiXTDCsH26Q2MHLZZyRr6w/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 104263320_0_2", path: "https://drive.google.com/file/d/1asWrXcWihxT1xDoHzKV-tYZPSRbPsDLp/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 105075493_0_1", path: "https://drive.google.com/file/d/1BSN0v9yf5pxMf6o0MYiXXdxD65zU3cKq/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 105075493_0_2", path: "https://drive.google.com/file/d/1AMm7uRc2RxEkLkEehghex-g7Yxuo-hio/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 105075495_0_1", path: "https://drive.google.com/file/d/1pKnyWmnYZxXZsRZaftDskojbVCONqIpG/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 32978273_0_1.tif", path: "https://drive.google.com/file/d/1anb3b3KJ05QE-Y5jG-lWH7yJhAV4taps/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 49950166_0_1.tif", path: "https://drive.google.com/file/d/1gbZisdH3hAhoevaNlh-ehtAuTQMlaPmT/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 78820008_0_1", path: "https://drive.google.com/file/d/1TvoZBAmCbSqoDRTldDce2Ku-DS_pl8R5/view?usp=drivesdk" },
                                    { name: "מסמך ארולסן 78820018_0_1", path: "https://drive.google.com/file/d/11DIcEXKzre8xXtBSMKfsgADjwWRdbAtx/view?usp=drivesdk" },
                                    { name: "רשומת ניצול ביד ושם (16659388)", path: "https://collections.yadvashem.org/en/names/16659388" }
                                ]
                            },
                            children: [
                                {
                                    type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "left",
                                    spouse: { 
                                        heb: `רוזי פוגל
                                        <div style="position: absolute; top: -65px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 0; z-index: 10; cursor: default; direction: rtl;">
                                            <div class="person male-node" style="min-width: 75px; max-width: 90px; padding: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border: 1.5px solid #475569; background: #fff;">
                                                <div class="heb" style="font-size: 11px; margin:0; color:#111;">משה בכר</div>
                                            </div>
                                            <div style="width: 15px; height: 1.5px; background: #475569;"></div>
                                            <div class="person female-node" style="min-width: 75px; max-width: 90px; padding: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border: 1.5px solid #475569; background: #fff;">
                                                <div class="heb" style="font-size: 11px; margin:0; color:#111;">ויקי בכר</div>
                                            </div>
                                        </div>
                                        <div style="position: absolute; top: -35px; left: 50%; width: 1.5px; height: 35px; background: #475569; transform: translateX(-50%); z-index: 9;"></div>`,
                                        eng: "Rozy Fogel", 
                                        gender: "female" 
                                    },
                                    blood: {
                                        heb: "ליאור פוגל", eng: "Lior Fogel", gender: "male",
                                        files: [{ name: "מייל והסבר למסמכים 28.01.2022", path: "https://drive.google.com/file/d/1ojHc1E3CI_KPIUA7jNxRCNx7NpWOu6w2/view?usp=drivesdk" }]
                                    },
                                    children: [
                                        {
                                            type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "left",
                                            spouse: { heb: "ספיר פוגל", eng: "Sapir Fogel", gender: "female" },
                                            blood: { heb: "אסף פוגל", eng: "Asaf Fogel", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-pink", blood: { heb: "נויה פוגל", eng: "Noya Fogel", gender: "female" } },
                                                { type: "single", color: "c-pink", blood: { heb: "מאיה פוגל", eng: "Maya Fogel", gender: "female" } }
                                            ]
                                        },
                                        { type: "single", color: "c-pink", blood: { heb: "חן פוגל", eng: "Hen Fogel", gender: "female" } }
                                    ]
                                },
                                {
                                    type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "right",
                                    blood: {
                                        heb: "אבי (אליאב) פוגל", eng: "Avi (Eliav) Fogel", gender: "male", tag: "אבא"
                                    },
                                    spouse: {
                                        heb: "נאוה פוגל (לנדוור)", eng: "Nava Fogel (Landwehr)", gender: "female", id: "box-nava", cousinWife: true,
                                        tag: "אמא (בת בוזיו וטובה)",
                                        images: ["https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"],
                                        files: [
                                            { name: "דף הנצחה משפחת פוגל (PDF)", path: "https://drive.google.com/file/d/1LXAkkSLRvkq6YUasl10JvXQLVUBJOqZU/view?usp=drivesdk" },
                                            { name: "דף הקראת שמות מעודכן עם תמונות (PDF)", path: "https://drive.google.com/file/d/1XSbmG457Ik6_CFm36Pp46rRVbjuYA6LQ/view?usp=drivesdk" },
                                            { name: "מידע משפחתי שנמסר מנאוה", path: "https://drive.google.com/file/d/1e4kr6U2pyuVMOpWcwFHx1Auci3kSIDQb/view?usp=drivesdk" }
                                        ]
                                    },
                                    children: [
                                        {
                                            type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "left",
                                            spouse: { heb: "לוטם איטח", eng: "Lotem Itach", gender: "female" },
                                            blood: { heb: "אור פוגל", eng: "Or Fogel", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-pink", blood: { heb: "נאיה פוגל", eng: "Naya Fogel", gender: "female" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-pink", defaultExpanded: true, spouseSide: "left",
                                            spouse: { heb: "יוטל פוגל", eng: "Yotal Fogel", gender: "female" },
                                            blood: {
                                                heb: "שחר פוגל", eng: "Shahar Fogel", gender: "male",
                                                files: [
                                                    { name: "אישורים ותיקונים של שחר", path: "https://drive.google.com/file/d/1CxTI6zEBYuxg385as97cmnXO0o-Refbx/view?usp=drivesdk" },
                                                    { name: "סיכום עדכני והסתייגויות", path: "https://drive.google.com/file/d/1Kr8vOSH78UWWiNiqitoNx_DuwLetc_yq/view?usp=drivesdk" }
                                                ]
                                            },
                                            children: [
                                                { type: "single", color: "c-pink", blood: { heb: "יהלי פוגל", eng: "Yaheli Fogel", gender: "male" } },
                                                { type: "single", color: "c-pink", blood: { heb: "עומר פוגל", eng: "Omer Fogel", gender: "male" } },
                                                { type: "single", color: "c-pink", blood: { heb: "גיל פוגל", eng: "Gil Fogel", gender: "male" } },
                                                { type: "single", color: "c-pink", blood: { heb: "יאיר פוגל", eng: "Yair Fogel", gender: "male" } }
                                            ]
                                        },
                                        {
                                            type: "couple", color: "c-pink", defaultExpanded: true,
                                            blood: { heb: "לירון פוגל שמעוני", eng: "Liron Fogel Shimoni", gender: "female" },
                                            spouse: { heb: "נועם פוגל שמעוני", eng: "Noam Fogel Shimoni", gender: "male" },
                                            children: [
                                                { type: "single", color: "c-pink", blood: { heb: "אלה פוגל שמעוני", eng: "Ela Fogel Shimoni", gender: "female" } },
                                                { type: "single", color: "c-pink", blood: { heb: "דניאל פוגל שמעוני", eng: "Daniel Fogel Shimoni", gender: "male" } },
                                                { type: "single", color: "c-pink", blood: { heb: "עמית פוגל שמעוני", eng: "Amit Fogel Shimoni", gender: "male" } },
                                                { type: "single", color: "c-pink", blood: { heb: "אורי פוגל שמעוני", eng: "Ori Fogel Shimoni", gender: "male" } }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

let treeDataLandwehr = [
    {
        type: "couple", color: "c-landwehr", defaultExpanded: true, spouseSide: "right",
        blood: {
            heb: "יהושוע (אוזיס) לנדוור", eng: "Yehoshua (Ozis) Landwehr", gender: "male", perished: true, tag: "דור המייסדים - לנדוור",
            images: ["https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"],
            files: [{ name: "דף הקראת שמות מעודכן עם תמונות (PDF)", path: "https://drive.google.com/file/d/1XSbmG457Ik6_CFm36Pp46rRVbjuYA6LQ/view?usp=drivesdk" }]
        },
        spouse: {
            heb: "פאני (פוליה) לנדוור", eng: "Fanny (Polia) Landwehr", gender: "female", birth: "1882", perished: true,
            images: ["https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"],
            files: [{ name: "רשומה לבדיקה ביד ושם (836368)", path: "https://collections.yadvashem.org/en/names/836368" }]
        },
        children: [
            {
                type: "couple", color: "c-landwehr", defaultExpanded: true, spouseSide: "right",
                blood: {
                    heb: "משולם לנדוור", eng: "Meschulim Landwehr", gender: "male", birth: "1885", death: "1941", perished: true, tag: "סבא של נאוה",
                    images: ["https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"],
                    files: [
                        { name: "דף עד ביד ושם (1524923)", path: "https://collections.yadvashem.org/en/names/1524923" },
                        { name: "דף הקראת שמות מעודכן עם תמונות (PDF)", path: "https://drive.google.com/file/d/1XSbmG457Ik6_CFm36Pp46rRVbjuYA6LQ/view?usp=drivesdk" }
                    ]
                },
                spouse: {
                    heb: "סבינה לנדוור (דוד)", eng: "Sabina Landwehr (Dawid)", gender: "female", id: "box-sabina", tag: "סבתא של נאוה",
                    story: "סבתה של נאוה פוגל. אחותה של גוסטה דוד. שרדה את השואה והגישה דפי עד עבור בעלה משולם ובנה גרשון.",
                    images: ["https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"],
                    files: [{ name: "דף הקראת שמות מעודכן עם תמונות (PDF)", path: "https://drive.google.com/file/d/1XSbmG457Ik6_CFm36Pp46rRVbjuYA6LQ/view?usp=drivesdk" }]
                },
                children: [
                    {
                        type: "couple", color: "c-landwehr", defaultExpanded: true, spouseSide: "left",
                        bridgeId: "bridge-landwehr-parents",
                        spouse: {
                            heb: "טובה (תאה) לנדוור (קראפט)", eng: "Tova (Thea) Landwehr (Kraft)", gender: "female", birth: "1929", death: "2018", tag: "אמא של נאוה וסימה",
                            files: [{ name: "מודעת אבל טובה לנדוור (2018)", path: "https://drive.google.com/file/d/1lqIAf_Jro8nsBK0xgc9z4mV48EkXZ0dF/view?usp=drivesdk" }]
                        },
                        blood: {
                            heb: "בוזיו (ברנרד) לנדוור", eng: "Buzio (Bernard) Landwehr", gender: "male", birth: "1918", death: "2003", tag: "אבא של נאוה וסימה",
                            images: [
                                "https://drive.google.com/file/d/17M2bJlOgcfXgW2nL2bq9WwKvw6ZDv7cD/view?usp=drivesdk",
                                "https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"
                            ],
                            files: [
                                { name: "דיוקן בוזו/ברנרד ממייל 2011", path: "https://drive.google.com/file/d/17M2bJlOgcfXgW2nL2bq9WwKvw6ZDv7cD/view?usp=drivesdk" },
                                { name: "מכתב לגרמנים - סבא ברנרד (2014)", path: "https://drive.google.com/file/d/1JtkPVkoNf9W1T_eXJAynNSZ7eICFbI7n/view?usp=drivesdk" },
                                { name: "דף הקראת שמות מעודכן עם תמונות (PDF)", path: "https://drive.google.com/file/d/1XSbmG457Ik6_CFm36Pp46rRVbjuYA6LQ/view?usp=drivesdk" }
                            ]
                        },
                        children: [
                            {
                                type: "couple", color: "c-landwehr", defaultExpanded: true, spouseSide: "right",
                                blood: { heb: "סימה זלינגר (לנדוור)", eng: "Sima Zelinger (Landwehr)", gender: "female", birth: "1961", id: "box-sima", tag: "אחות של נאוה" },
                                spouse: { heb: "דני זלינגר", eng: "Dani Zelinger", gender: "male", birth: "1961" },
                                children: [
                                    {
                                        type: "couple", color: "c-landwehr", defaultExpanded: true, spouseSide: "left",
                                        blood: { heb: "קורל זלינגר-רושינק", eng: "Koral Zelinger-Rushinek", gender: "female", birth: "1992" },
                                        spouse: { heb: "יונתן רושינק", eng: "Yonatan Rushinek", gender: "male", birth: "1988" },
                                        children: [
                                            { type: "single", color: "c-landwehr", blood: { heb: "רוני רושינק", eng: "Roni Rushinek", gender: "female", birth: "2020" } },
                                            { type: "single", color: "c-landwehr", blood: { heb: "הילי רושינק", eng: "Hili Rushinek", gender: "female", birth: "2020" } },
                                            { type: "single", color: "c-landwehr", blood: { heb: "לירי רושינק", eng: "Liri Rushinek", gender: "female", birth: "2023" } }
                                        ]
                                    },
                                    {
                                        type: "couple", color: "c-landwehr", defaultExpanded: true, spouseSide: "left",
                                        blood: { heb: "דר זלינגר-מרקוס", eng: "Dar Zelinger-Marcus", gender: "female", birth: "1993" },
                                        spouse: { heb: "אימרי מרקוס", eng: "Imri Marcus", gender: "male", birth: "1993" },
                                        children: [
                                            { type: "single", color: "c-landwehr", blood: { heb: "לילי מרקוס", eng: "Lili Marcus", gender: "female", birth: "2026" } }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "single", color: "c-landwehr",
                        blood: {
                            heb: "גרשון (בובי/גוסטב) לנדוור", eng: "Gershon (Bubi/Gustav) Landwehr", gender: "male", birth: "1921", death: "1941", perished: true, tag: "אח של בוזיו (תאום)",
                            images: ["https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"],
                            files: [
                                { name: "דף עד שהגישה אמו סבינה (8612541)", path: "https://collections.yadvashem.org/en/names/8612541" },
                                { name: "רשומה נוספת ביד ושם (14806004)", path: "https://collections.yadvashem.org/en/names/14806004" },
                                { name: "רשומה שלישית ביד ושם (879091)", path: "https://collections.yadvashem.org/en/names/879091" }
                            ]
                        }
                    },
                    {
                        type: "single", color: "c-landwehr",
                        blood: { 
                            heb: "יהושוע לנדוור", eng: "Yehoshua Landwehr", gender: "male", birth: "1921", perished: true, tag: "אח של בוזיו (תאום)",
                            images: ["https://drive.google.com/file/d/1Z3mS10WQ4WAzAmZZ65UnI9GVUbjoXBZB/view?usp=drivesdk"]
                        }
                    }
                ]
            }
        ]
    }
];
