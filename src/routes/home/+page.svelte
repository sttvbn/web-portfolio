<body>
    <div class = "wrapper">
        <div class = "nav">
            <ul>
                <div class = "left-logo">
                    <h1><a href = "#about-me" > Steven Liu </a></h1>
                </div>
                <li><a href = "home"> Home </a></li>
                <li><a href = "#about-me"> About </a></li>
                <li><a href = "#myprojects"> Projects </a></li>
                <li><a href = "#contact-me"> Contact </a></li>
            </ul>
        </div>
    </div>
    

    <div class = "content">
        <h1> Welcome to my Portfolio!  </h1>
        <h2> Steven Liu </h2>
        <p1> |Software Engineer| |Web Developer|</p1>
    </div>

    <div class = "image">
        <img src = "src/routes/images/self.jpg" alt="self" class = "self-image">
    </div>

    <div class = "resume">
        <a class = "download" href = "src/routes/resume/Resume.pdf" download = "Resume.pdf"> Download Resume</a>
    </div>

    <div class = "about">
        <h1> About Me </h1>
        <img src = "src/routes/images/IMG_5644.jpg" alt = "self" class = "about-pic">
        <div id = "about-me">
            <div class = "about-container">
                <div class = "aboutme">
                    <h2> Hi there, I'm Steven Liu! </h2>
                    <p1>I'm a recent graduate from California State Univeristy of Fullerton (CSUF) with a bachelor's degree in Computer Science, and I'm focused on becoming a Software Engineer and Web developer, with a passion for working on both frontend and backend development.</p1>
                </div>
            </div>
        </div>
    </div>


    <div class = "projects">
        <div id = "myprojects">
            <h1> Projects </h1>
            <p1> All projects are stored in Github.</p1> <a href = "https://github.com/sttvbn">Github</a>
        </div>
    </div>

    <div class = "contact">
        <div id = "contact-me">
            <h1> Contact </h1>
            <p1>Email: stevenlaoliu@gmail.com</p1>
            <li><a href = "https://github.com/sttvbn">Github</a></li> 
            <li><a href = "https://www.linkedin.com/in/steven-liu-4068b326a/">LinkedIn</a></li> 
        </div>
    </div>

    <footer>
        <p1>Copy Right 2024</p1>
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
    }

    body{
        background-color: rgb(167, 160, 160);
    }

    .image{
        display: flex;
        justify-content: flex-end;
        padding-right: 10%;
    }

    .self-image{
        width: 500px;
        height: auto;
        border-radius: 50px;
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
        color: black;
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
        margin-left: 10%;
        text-transform: uppercase;
        font-weight: bold;
    }

    .resume .download{
        background-color: white;
        border-radius: 50px;
        height: 50px;
    }

    .resume a{
        text-decoration: none;
        color: blue;
        align-items: center;
        display: flex; /*center the text in the middle*/

    }

    .resume a:hover{
        border-radius: 50px;
        background-color: red;
        height: 50px;
        color: black;
    }

    .content {
        padding-top: 100px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        width: 50%;
    }

    .about{
        text-align: center;
        font-weight: bold; 
        padding-top: 500px;/*testing out spaces for the page*/
    }

    .aboutme{
        background-color: rgb(158, 154, 154);
        width: 30%;   
        padding: 2rem; /*add padding around the content (this made the text stay in the middle and it looks nice)*/
        border-radius: 25px;
        text-align: center;
        line-height: 1.6;
    }

    .about-container{
        display: flex;
        justify-content: center;
    }

    .about-pic{
        width: 500px;
        height: auto;
        border-radius: 50%;
    }

    .contact{
        text-align: center;
        font-weight: bold; 
        text-transform: uppercase;
        list-style: none;
        text-decoration: none;
        padding-bottom: 10rem;
        padding-top: 500px;/*testing out spaces for the page*/
    }

    .contact li{
        padding-top: 20px;
    }

    .contact a{
        background-color: yellow;
        border-radius: 50px;
    }

    .contact a:hover{
        color: grey;
        background-color: green;
        border-radius: 50px;
    }

    footer {
        background-color: transparent;
        color: white;
        width: 100%;
        position: flex; /*proper way to position the footer at the very bottom*/
        height: 2.5rem;
        text-align: center;
        margin: 0;
    }

    .projects {
        text-align: center; 
        font-weight: bold; 
        text-transform: uppercase;
        padding-top: 20%;
    }

    /*this part of the code targets div, p, h1, ul, li, etc.*/
    * {
        margin:0; /*this helped properly fix the footer spacing */
        box-sizing: border-box;
        padding: 0;
        text-decoration: none;
    }

</style>