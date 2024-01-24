import OS_img_1 from '../assets/OS_img_1.png'

const modalContent = {
    AV: [
        { 
            subHeading: "Context", 
            body: [
                "Pictured above is the trial taking interface I designed for the Reed Laboratory to enable an ongoing study." 
                + "This application provides the lab a way to perform distanced and in person trials, collect data on trials,"
                + " retrieve trial data, and define future trials. Originally the project team consisted of four members."
                + " two technical developers including myself and two lab members as contact points but after unforeseen circumstances"
                + " I became the sole technical contributor.",
                "The base goals of this project were to enable at least one PhD study, (non-reconfigurable) and to enable data collections."
                + " These goals were exceeded by the end of the project."
                ]
        },
        {
            subHeading: "Architecture & Technologies",
            body: [
                "I completed this project with a *SERN* stack (SQL, Express, React, Node.js) and designed using a *Model-View-Controller*"
                + " pattern. I built a *REST API* for communication between the server and client. I prototyped a custom button box using"
                + " C which communicated over *USB* to the Backend. The Backend then used *WebSocket* to deliver input to the Front End. "
            ]
        }, 
        {
            subHeading: "Backend",
            body: [
                "The Backend for this project consisted of *Sequelize* models for Tap, Screen, Test, and Participant. The models are "
                + "defined in their own model folder, then *controllers* defined in their own folder provide *CRUD* (create, read,"
                + " update, delete) methods. Accompanying the controllers are tests written in *Jest* to assure accuracy of methods."
                +" The *API* then provides routes for accessing these functions in accordance with *REST* principals."
            ]
        }, 
        {
            subHeading: "Front End",
            body: [
                "Notably, the Front End for this project contains *controllers*, *data*, *redux*, and *views*. Starting in *controllers*,"
                + " *axios* allows the application to make HTTP requests with *async/await* functions relating to each controller "
                + "function found on the Backend. The *Data* file is the key to making this project reconfigurable for future trials."
                +" It contains *GeneralData* and *TrialData*,  each being json arrays containing general information that each trial should"
                + " contain and information about available trials the program can run respectively. *Redux* defines the code for *actions* "
                + "and *reducers*. *Actions* define possible interactions within the application. Namely,  the *CRUD* operations used to "
                + "interact with the Backend models and *state-management* interactions for updating the Front End during runtime. The "
                + "*reducers* receive *actions*  and update the *application-wide* state.  Finally, views contains code used to generate all "
                + "visuals for this project. Within this file there are *screens* and *components*. *Screens* define pages within the application"
                + " that users can be routed to while *components* define smaller portions of code used to build *screens* and their functionality."
                + " Visual elements make use ot *Styled Components* to *improve code maintainability* for future contributors. "
            ]
        }, 
        {
            subHeading: "Areas for improvment",
            body: [
                "Git  commit messages. As I completed this project I did my best to improve my Git habits by committing more frequently"
                + " and having meaningful messages attached; however, I worked on this project alone and never received feedback on "
                + "how well my pushes could be understood and still look to improve in this area. Furthermore, I struggled with the "
                + "Front End design aspect of this project. I received unstructured Figma design files with a rough idea of what a "
                + "proposed end goal would look like then I re-created those designs in code. In retrospect I would have been better "
                + "served to learn Figma, structure the design files, then port those into code with a plugin. Finally, I struggled with"
                + " knowing the right questions to ask clients to understand their needs fully. I learned I should rely on my better judgment "
                +"and ask fewer, more broadly scoped questions as to avoid getting lost in the weeds trying to discuss technicalities with "
                + "non-technical stakeholders. "
            ]
        }
    ],
    OS: [
        {
            subHeading: "Editing the Linux O.S.",
            body: [
                "The exercise pictured above helped me learn how to navigate/understand the Linux O.S.. To add my name I had to search the O.S."
                + " using *grep* and *cli* traversal until I found the *boot loader* section where I could edit the starting screen. ",
                "For another assignment (pictured below) I edited the Linux O.S. by adding a *kernel-wide* message variable. This required me "
                + "to create and add new *system calls* to the O.S.. Through this, I learned about the *task scheduler* of the O.S. and how *system calls* function. "
            ],
            image: OS_img_1
        }, 
    ],
    PP: [
        {
            subHeading: "Editing the Linux O.S.",
            body: [
                "The exercise pictured above helped me learn how to navigate/understand the Linux O.S.. To add my name I had to search the O.S."
                + " using *grep* and *cli* traversal until I found the *boot loader* section where I could edit the starting screen. ",
                "For another assignment (pictured below) I edited the Linux O.S. by adding a *kernel-wide* message variable. This required me "
                + "to create and add new *system calls* to the O.S.. Through this, I learned about the *task scheduler* of the O.S. and how *system calls* function. "
            ],
            image: OS_img_1
        }, 
    ],
};

export default modalContent;