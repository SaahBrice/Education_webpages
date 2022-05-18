
$(window).on('scroll', function(ev){
    let top = $(window).scrollTop(),
        bottom = $('#header').offset().top + $('#header').outerHeight();
    
    if(bottom < top)jQuery('#navbar').addClass('shadow-xl fixed top-0 right-0 left-0 bg-main')
    else{
        jQuery('#navbar').removeClass('fixed shadow-xl bg-main')
    }
} 
)
tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'Raleway'],
          primary: 'Poppins',
          secondary: 'Raleway',
        },
        colors:{
          main: 'rgba(59, 130, 246, 0.9)',
          complimentary: 'rgba(255, 255, 255, .9)',
          accent: 'rgba(0, 0, 0, 0.9)',
        },

      }
    }
  }


  // <!-- Chart bar -->

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