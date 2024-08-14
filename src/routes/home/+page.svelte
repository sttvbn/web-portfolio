<body>
    <div class = "nav">
        <ul>
            <li><a href = "home"> Home </a></li>
            <li><a href = "#about-me"> About </a></li>
            <li><a href = "#contact-me"> Contact </a></li>
        </ul>
    </div>
    

    <div class = "content">
        <h1> Hello there, My name is Steven! Welcome to my Portfolio!  </h1>
    </div>

    <div class = "resume">
            Download Resume
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
</body>


<style>
    ul {
        list-style-type: none; /*not make the buttons into a list*/
        padding: 0;
        margin: 0;
        display: flex; /*put into rows instead of a list*/
        justify-content: flex-end; /*this will align buttons/items to the right side*/
    }

    .nav { 
        overflow: hidden;
        position: fixed; /*set to the top*/
        background-color: black;
        width: 100%;
        left: 0; /*this pushes the bar to the left to fully fill the screen*/
        top: 0; /*set to the very top*/
        padding: 30px; /*helps with adjusting the height so it's not too far up*/
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
    }

    .contact{
        text-align: center;
        font-weight: bold; 
        text-transform: uppercase;
        list-style: none;
        text-decoration: none;
    }

</style>