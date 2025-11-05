const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

//function createNavMenu(document) {
    // loo <nav>
    const uus_nav = document.createElement("nav");

    // Lisa klass
    uus_nav.classList.add("main-navigation");

    // loo <ul>
    const uus_ul = document.createElement("ul");

    // lisa HTML sisu <ul>i
    uus_ul.innerHTML = navContent;

    // Lisa <ul> <nav>i
    uus_nav.append(uus_ul);
    
    // leia koht kuju lisada
    const nav_location = document.querySelector(".siteheader");

    // lisa nav
    nav_location.append(uus_nav);
//}
