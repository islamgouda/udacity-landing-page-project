/**
 * creating sections dynamically
 * by using createSection function and add them to the main tag
 * ES6
 */
// counter to specify attributes and number of section
///creating navebare dynamicly
let sectionCount = 0;
const navBar = document.getElementById("navbar__list");
const createSection = () => {
  sectionCount++;
  const content = `<section id="section${sectionCount}" data-nav="Section ${sectionCount}">
    <div class="landing__container">
    <h2>Section ${sectionCount}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};




/**
 *  function to observe the section to specify which section on the viewport and its link
 *  loop over entries (sections)
 *  get active link by using the id of the section on viewport
 *  add active class to the section on viewport
 *  add active class to the section's link
 *  edit the hash of location manual cause i prevent default behavior
 *  remove active classes
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////


///////// using Element.getBoundingClientRect() instead of Intersection Observer API ///////////////////
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * when you click on nav links will go smoothly to the correct section
 * i can shortcut this code just using CSS (html{ scroll-behavior: "smooth"})
 * but I think it better to use what I learn
 * I use setTimeout to earn some time to scroll smoothly
 */

/**
 * create 3-section dynamically by javascript instead of HTML
 * create them links
 * ability to observe sections
 */
 createSection();
 createSection();
 createSection();


// creating more sections by click on the button
document.getElementById("btn").addEventListener("click", () => {
  createSection();
  
});

// save the icon used to go to the top and the header in variables
const toTop = document.getElementById("to-top");


// Clicking on the icon the document will scroll to the top smoothly
toTop.addEventListener("click", myScroll);
function myScroll(){
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}
///islam gouda




