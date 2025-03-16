function renderNavbar() {
    // Hint: "renderNavbar" is mostly complete, however only 1 button has a tab order
    let nav = document.querySelector('#navbar');
    let title;
    let btn;
    
    // Hint: To create a "Hamburger Menu" icon, create a btn like below, then
    // create a toggleHamburger function, and then use the following code:
    /*
    btn.innerHTML = 'MENU <span role="img" aria-label="Menu icon">&equiv;</span>';
    btn.addEventListener('click', toggleHamburger);
    */
    

    /* btn = document.createElement('div');
    btn.setAttribute('role', 'button');
    btn.setAttribute('class', 'Navbar-button');
    btn.setAttribute('id', 'burger')
    btn.setAttribute('tabindex', '0');
    btn.innerHTML = 'MENU <span role="img" aria-label="Menu icon">&equiv;</span>';
    btn.addEventListener('click', toggleHamburger);
    nav.append(btn); */

    title = document.createElement('div');
    title.setAttribute('class', 'Nav-item--left');
    title.setAttribute('tabindex', '0');
    title.innerHTML = '<h1>Book Club</h1>';
    nav.append(title);

    btn = document.createElement('div');
    btn.setAttribute('role', 'button');
    btn.setAttribute('class', 'Navbar-button'); // add id to indicate it should match username
    btn.setAttribute('tabindex', '0'); // set all to "0" will follow order on page
    btn.innerHTML = 'You';
    btn.addEventListener("click", ()=>{
         window.location.replace("./account.html");
      });
    nav.append(btn);
    
    // Make sure all the navbar buttons have "role" 'button' and "tabindex" "0"
    btn = document.createElement('div');
    btn.setAttribute('role', 'button');
    btn.setAttribute('class', 'Navbar-button');
    btn.setAttribute('tabindex', '0');
    btn.innerHTML = 'Bookshelf';
    btn.addEventListener("click", ()=>{
         window.location.replace("./bookshelf.html");
      });
    nav.append(btn);


    btn = document.createElement('div');
    btn.setAttribute('role', 'button');
    btn.setAttribute('class', 'Navbar-button');
    btn.setAttribute('tabindex', '0');
    btn.innerHTML = 'Explore';
    btn.addEventListener("click", ()=>{
         window.location.replace("./explore.html");
      });
    nav.append(btn);


}
renderNavbar();