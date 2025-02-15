<body>
    <div class = "wrapper">
        <div class = "nav">
            <ul>
                <div class = "left-logo">
                    <h1><a href = "#about-me" > Steven Liu </a></h1>
                </div>
                <li><a href = "home-content"> Home </a></li>
                <li><a href = "#about-me"> About </a></li>
                <li><a href = "#myprojects"> Projects </a></li>
                <li><a href = "#contact-me"> Contact </a></li>
            </ul>
        </div>
    </div>

    <div class = "content">
        <div id = "home-content">
            <div class = "main-content">
                <div class = "text-container">
                    <h1> Welcome to my Portfolio!  </h1>
                    <h1> Steven Liu </h1>
                    <p1> |Software Engineer| |Web Developer|</p1>
                    <div class = "resume">
                        <a class = "download" href = "src/routes/resume/Resume.pdf" download = "Resume.pdf"> Download Resume</a>
                    </div>
                </div>
                <img src = "images/self.jpg" alt="self" class = "self-image">
            </div>
        </div>
    </div>

    <div class = "about">
        <div id = "about-me">
            <h1> About Me </h1>
            <div class = "about-container">
                <div class = "aboutme">
                    <img src = "images/IMG_5644.jpg" alt = "self" class = "about-pic">
                    <h2> Hi there, I'm Steven Liu! </h2>
                    <p1>I'm a recent graduate from California State Univeristy of Fullerton (CSUF) with a bachelor's degree in Computer Science, and I'm focused on becoming a Software Engineer and Web developer, with a passion for working on both frontend and backend development.</p1>
                    <div class = "Tech-skill">
                        <strong>Skills: </strong>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C++</li>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class = "projects">
        <div id = "myprojects">
            <h1> Projects </h1>
            <p1> All projects are stored in Github. </p1> <a href = "https://github.com/sttvbn"> Click here</a>
        </div>

        <div class = "display-wrapper">
            <div class = "display">
                <div class = "project-info">
                    <h1>SymptoQuest</h1>
                    <p class = "description">
                        <strong>Description:</strong> Symptom checker web application using AI to help assist users.
                    </p>

                    <div class = "tech-title">
                        <p1>Technology:</p1>
                    </div>
                    <div class = "Tech">
                        <li>Google API</li>
                        <li>OpenAI API</li>
                        <li>Realtime Firebase</li>
                        <li>Sveltekit Framework</li>
                    </div>
                </div>
                <div class = "display-link">
                    <li><p1>Github Repo: </p1><a href = "https://github.com/sttvbn/SymptoQuest"> Click Here</a></li>
                    <li><p1>Want to check it out? </p1><a href = "https://sympto-quest-phi.vercel.app/" > Click Here</a></li>
                    
                </div>
            </div>
        </div>
    </div>

    <div class = "contact">
        <div id = "contact-me">
            <h1> Contact </h1>
            <p1>Email: stevenlaoliu@gmail.com</p1>
        </div>
        <div class = "links">
            <a href = "https://github.com/sttvbn"><img src = "images/github-black.png" alt = "git"></a>
            <a href = "https://www.linkedin.com/in/steven-liu-4068b326a/"><img src = "images/linkedin.png" alt = "linked"></a>
            <a href = "https://www.instagram.com/stv.nliu/profilecard/?igsh=MzRlODBiNWFlZA%3D%3D"><img src = "images/instagram.png" alt = "insta"></a>
        </div>
    </div>

    <footer>
        <p1>Developed by Steven Liu 2025</p1>
    </footer>
</body>


<style>
    ul {
        overflow: hidden;
        list-style-type: none; /*not make the buttons into a list*/
        padding: 0;
        margin: 0;
        display: flex; /*put into rows instead of a list*/
        justify-content: flex-end; /*this will align buttons/items to the right side*/
        text-transform: uppercase;
        font-weight: bold;
    }

    /*using the global function to fix background color*/
    :global(body){
        /* background-color: rgb(155, 155, 167); */
        background-color: rgb(26, 25, 25);
    }

    .main-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        word-break: break-word;
        flex-wrap: wrap;
        gap: 20px;
    }

    .content {
        font-weight: bold;
        text-transform: uppercase;
        background-color: rgb(78, 72, 72);
        border-radius: 50px;
        width: 50%;
        height: 50%;
        margin: auto;
        margin-top: 50px;
        border: 2px solid white;


        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem;
        gap: 20px;
    }

    .text-container{
        flex: 2; 
        text-align: left;
    }

    .self-image{
        display: flex; 
        justify-content: right;
        width: 100%;
        max-width: 350px;
        height: auto;
        border-radius: 50px;
        object-fit: cover;
    }

    .nav { 
        position: flex; /*properly set the nav bar at the top*/
        background-color: transparent;
        width: 100%;
    }

    .left-logo{
        margin-right: auto; /*adjust the logo to the left side of the nav bar*/
    }

    .left-logo a{
        text-transform: uppercase;
        font-weight: bold;
    }

    .nav a{
        color: white;
        text-decoration: none;
        padding: 20px; /*this helps with spacing the buttons*/
        align-items: center;
        display: flex;
        float: right;
    }

    .nav a:hover{
        color: rgb(98, 98, 247);
        border-radius: 50px;
    }

    .resume{
        display: flex;
        padding-top: 20px;
        text-transform: uppercase;
        font-weight: bold;
        align-items: center;
    }

    .resume .download{
        background-color: rgb(155, 155, 167);
        border-radius: 20px;
        border: solid transparent;
        height: 50px;
        letter-spacing: .9px;
        padding: 13px 16px;
        border-color: rgb(226, 226, 226);
    }

    .resume a{
        text-decoration: none;
        color: black;
        align-items: center;
        display: flex; /*center the text in the middle*/

    }

    .resume a:hover{
        border-radius: 20px;
        background-color: grey;
        height: 50px;
        box-shadow: 0 0 15px 5px rgb(226, 226, 226);
        transform: scale(1.05);
    }

    .about{
        text-align: center;
        font-weight: bold; 
        padding-top: 20%;/*testing out spaces for the page*/
        color: white;
    }

    .aboutme{
        /* background-color: rgb(158, 154, 154); */
        background-color: rgb(78, 72, 72); 
        width: 50%;   
        padding: 2rem; /*add padding around the content (this made the text stay in the middle and it looks nice)*/
        border-radius: 50px;
        text-align: center;
        line-height: 1.6;
        color: black;
        border: 2px solid white;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Tech-skill{
        list-style-type: none;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        gap: 20px;
        padding-top: 20px;
    }

    .Tech-skill li{
        background-color: rgb(155, 155, 167);
        border-radius: 20px;
        width: 20%;
        text-align: center;
        min-width: 120px;
        flex: 1;
        max-width: 120px;
        border: 2px solid black;
        word-break: break-word;
    }

    .about-container{
        display: flex;
        justify-content: center;
    }

    .about-pic{
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ccc;
    }

    .contact{
        text-align: center;
        font-weight: bold; 
        text-transform: uppercase;
        padding-bottom: 10rem;
        padding-top: 20%;/*testing out spaces for the page*/
        color: white
    }

    .contact h1{
        padding-bottom: 10px;
    }

    .links{
        margin-bottom: 50px;
        margin-top: 50px;
        display: flex;
        gap: 50px;
        justify-content: center;
    }

    .links a:hover{
        border-radius: 20px;
        background-color:grey;
        height: 100px;
        box-shadow: 0 0 15px 5px rgb(226, 226, 226);
        transform: scale(1.05);
    }

    .contact img{
        width: 100px;
        height: auto;
        color: none;
    }

    .projects {
        text-align: center; 
        font-weight: bold; 
        text-transform: uppercase;
        padding-top: 20%;
        color: white;
    }

    .projects h1{
        padding-bottom: 10px;
    }

    .projects a{
        color: rgb(98, 98, 247);
        /* color: rgb(153, 4, 153); */
        /* text-shadow: 0 0 5px rgb(198, 199, 202); */
    }

    .projects a:hover{
        text-shadow: 0 0 15px rgb(198, 199, 202);
    }

    .project-info h1{
        color: black;
    }

    .tech-title{
        font-size:medium;
        color: black;
        padding-top: 20px;
    }

    .Tech{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        padding-top: 20px;
        font-size:medium;
        color: black;
        list-style-type: none;
        overflow: hidden;
    }

    .Tech li{
        background-color: grey;
        border-radius: 50px;
        min-width: 120px;
        text-align: center;
        word-break: break-word;
        max-width: 120px;
        width: 20%;
    }


    .description{
        padding-bottom: 10px;
        font-size: medium;
        color: black;
    }


    .display-wrapper{
        padding-bottom: 5%;
        background-color:rgb(78, 72, 72);
        border-radius: 50px;
        width: 50%;
        max-width: 700px;
        height: auto;
        margin-top: 50px;
        margin-left: 100px;
        border: 3px solid white;
        word-break: break-word;
        padding: 5rem;
    }

    .display-link{
        margin-top: 10%;
        display:flex;
        gap: 20px;
        align-items: center;
        list-style-type: none;
        flex-direction: column;
    }



    footer {
        background-color: transparent;
        color: white;
        width: 100%;
        position: flex; /*proper way to position the footer at the very bottom*/
        height: 2rem;
        text-align: center;
        margin: 0;
        font-weight: bold;
    }

    /*this part of the code targets div, p, h1, ul, li, etc.*/
    * {
        margin:0; /*this helped properly fix the footer spacing */
        box-sizing: border-box;
        padding: 0;
        text-decoration: none;
    }

</style>