<body>
    <div class = "wrapper">
        <div class = "nav">
            <ul>
                <li><a href = "home"> Home </a></li>
                <li><a href = "#about-me"> About </a></li>
                <li><a href = "#contact-me"> Contact </a></li>
            </ul>
        </div>
    </div>
    

    <div class = "content">
        <h1> Hello there, My name is Steven! Welcome to my Portfolio!  </h1>
    </div>

    <div class = "resume">
        <a class = "download" href = "./Resume.pdf" download = "Resume.pdf"> Download Resume</a>
    </div>

    <div class = "about">
        <div id = "about-me">
            <h1> About Me </h1>
        </div>
    </div>

    <div class = "contact">
        <div id = "contact-me">
            <h1> Contact </h1>

            <li> Email: stevenlaoliu@gmail.com</li>
            <li> Phone: 626-404-3359</li>
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

    .nav { 
        position: flex; /*properly set the nav bar at the top*/
        background-color: black;
        width: 100%;
        height: 3rem;
    }

    .nav a{
        color: white;
        text-decoration: none;
        padding: 40px; /*this helps with spacing the buttons*/
    }

    .nav a:hover{
        color: rgb(98, 98, 247);
        border-radius: 50px;
    }

    .resume{
        display: flex;
        margin-left: 10%;
    }

    .resume a{
        text-decoration: none;
        color: green;
        
    }

    .resume a:hover{
         color: pink;
         border-radius: 50px;
         background-color: red;
    }

    .content {
        padding: 100px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
    }

    .about{
        text-align: center;
        font-weight: bold; 
        text-transform: uppercase;
        padding-top: 500px;/*testing out spaces for the page*/
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

    footer {
        background-color: black;
        color: white;
        width: 100%;
        position: flex; /*proper way to position the footer at the very bottom*/
        height: 2.5rem;
        text-align: center;
        margin: 0;
    }

    /*this part of the code targets div, p, h1, ul, li, etc.*/
    * {
        margin:0; /*this helped properly fix the footer spacing */
        box-sizing: border-box;
        padding: 0;
        text-decoration: none;
    }

</style>