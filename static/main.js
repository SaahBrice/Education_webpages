
const mobileMenu = jQuery('#mobile-menu');
const navBarItems = jQuery('#navbar-items');
const closeMenu = jQuery('#close-menu');
const navBar = jQuery('#navbar');
const header =  jQuery('#header');
const isSmallScreen = () => window.innerWidth < 720;

console.log(isSmallScreen(), window.innerWidth)

$(window).on('scroll', function(ev){
    let top = $(window).scrollTop(),
        bottom = header.offset().top + header.outerHeight();
    if(bottom < top){//out of view
      navBar.removeClass('hidden')
      navBar.addClass(`flex shadow-xl fixed top-0 right-0 left-0 bg-main`);
    }
    else{
      navBar.addClass('hidden');
      navBar.removeClass(`flex fixed shadow-xl bg-main`);
    }
} 
);

$(window).on('resize', (ev)=>{
  if(isSmallScreen()){
    //navBarItems.removeClass(`fixed top-0 bottom-0 left-0 right-0 block bg-main z-10 p-12`);
    navBarItems.addClass('hidden');
    closeMenu.addClass('hidden');
  }
  else{
    navBarItems.removeClass('hidden');
    navBarItems.removeClass(`fixed top-0 bottom-0 left-0 right-0 block bg-main z-10 p-12`);
    closeMenu.addClass('hidden');
  }
});

//mobile menu
if(isSmallScreen()) {
  closeMenu.removeClass('hidden');
  closeMenu.addClass('block');
}


if(closeMenu) closeMenu.on('click',  (ev)=>{closeMenu.addClass('hidden'); navBarItems.addClass('hidden');});
if(mobileMenu){
  mobileMenu.on('click', (ev) => {
    if(navBarItems.hasClass('hidden')){//currentl not showing
      navBarItems.removeClass('hidden');
      navBarItems.addClass(`fixed top-0 bottom-0 left-0 right-0 block bg-main z-10 p-12`);
      closeMenu.removeClass('hidden');
      closeMenu.addClass('block');
    }
    else{
      closeMenu.addClass('hidden');
      closeMenu.removeClass('block');
      navBarItems.addClass('hidden');
    }
  }

  )
}


// tailwind configurations

tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          primary: 'Roboto',
          secondary: 'Roboto',
        },
        colors:{
          main: '#3B82F6',
          complimentary: '#FFFFFF',
          accent: '#000000',
        },
        screens:{
          std: '720px',
        }

      }
    }
  }



//success rates chart bar
const labelsBarChart = [
  "2021", "2020", "2019", "2018", "2017"
];
const dataBarChart = {
  labels: labelsBarChart,
  datasets: [
    {
      label: "A Level",
      backgroundColor: "rgba(137, 12, 148, 0.6)",
      borderColor: "rgba(137, 12, 148, 0.6)",
      data: [100, 100, 90, 100, 95],
    },
    {
      label: "O Level",
      backgroundColor: "rgba(12, 128, 148, 0.9)",
      borderColor: "rgba(12, 128, 148, 0.9)",
      data: [100, 98, 95, 100, 90],
    },
    {
      label: "FSLC",
      backgroundColor: "rgba(12, 148, 80, 0.9)",
      borderColor: "rgba(12, 148, 80, 0.9)",
      data: [90, 80, 85, 70, 90],
    },
  ],
};

const configBarChart = {
  type: "bar",
  data: dataBarChart,
  options: {},
};

var chartBar = new Chart(
  document.getElementById("chartBar"),
  configBarChart
);


// aos config

AOS.init(
  {duration: 1200}
);