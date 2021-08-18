

//   scrolling code here               
$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

//     Show/hide menu on scroll
//     if (scrollDistance >= 850) {
//     		$('nav').fadeIn("fast");
//     } else {
//     		$('nav').fadeOut("fast");
//     }

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navigation .awesome-tooltip.active').removeClass('active');
                    $('.navigation .awesome-tooltip').eq(i).addClass('active');
            }
    });
}).scroll();



// full nav bar code ///
(function () {
        //*** PATH
        const PATH = {
          closeToggler: ".toggler-close",
          expandableNav: ".main-nav__expandable",
          navItem: ".main-nav__item",
          openToggler: ".toggler-open"
        };
      
        // *** HELPERS
        const editDataAttr = (elem, dataAttr, newVal) => {
          elem.dataset[dataAttr] = newVal;
        };
      
        const setDataAtrsToNavElems = () => {
          const navElems = Array.from(document.querySelectorAll(PATH.navItem));
      
          navElems.forEach((elem, index) => {
            editDataAttr(elem, "addText", `0${index + 1}`);
          });
        };
      
        setDataAtrsToNavElems();
      
        // *** EVENT LISTENERS
        document.body.addEventListener("click", (e) => {
          const target = e.target;
      
          if (target.closest(PATH.openToggler)) {
            const nav = document.querySelector(PATH.expandableNav);
            nav.classList.add("js-open");
          }
      
          if (target.closest(PATH.closeToggler)) {
            const nav = document.querySelector(PATH.expandableNav);
            nav.classList.remove("js-open");
          }
        });
      })();



//       SEARCH box animation code ///
function searchToggle(obj, evt){
        var container = $(obj).closest('.search-wrapper');
            if(!container.hasClass('active')){
                container.addClass('active');
                evt.preventDefault();
            }
            else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
                container.removeClass('active');
                // clear input
                container.find('.search-input').val('');
            }
    }



    // accordion animation code here //
class Details {
  constructor(el, settings) {
    this.group    = el;
    this.details  = this.group.getElementsByClassName("details");
    this.toggles  = this.group.getElementsByClassName("details__summary");
    this.contents = this.group.getElementsByClassName("details__content");    
    
    // Set default settings if necessary
    this.settings = Object.assign({
      speed: 300,
      one_visible: false
    }, settings);
    
    // Setup inital positions
    for (let i = 0; i < this.details.length; i++) {
      const detail  = this.details[i];
      const toggle  = this.toggles[i];
      const content = this.contents[i];
      
      // Set transition-duration to match JS setting
      detail.style.transitionDuration = this.settings.speed + "ms";
      
      // Set initial height to transition from
      if (!detail.hasAttribute("open")) {
        detail.style.height = toggle.clientHeight + "px";
      } else {
        detail.style.height = toggle.clientHeight + content.clientHeight + "px";
      }
    }
    
    // Setup click handler
    this.group.addEventListener("click", (e) => {      
      if (e.target.classList.contains("details__summary")) {
        e.preventDefault();
        
        let num = 0;
        for (let i = 0; i < this.toggles.length; i++) {
          if (this.toggles[i] === e.target) {
            num = i;
            break;
          }
        }
        
        if (!e.target.parentNode.hasAttribute("open")) {
          this.open(num);
        } else {
          this.close(num);
        }
      }
    });
  }
  
  open(i) {
    const detail = this.details[i];
    const toggle = this.toggles[i];
    const content = this.contents[i];
    
    // If applicable, hide all the other details first
    if (this.settings.one_visible) {
      for (let a = 0; a < this.toggles.length; a++) {
        if (i !== a) this.close(a);
      }
    }
    
    // Update class
    detail.classList.remove("is-closing");
    
    // Get height of toggle
    const toggle_height = toggle.clientHeight;
    
    // Momentarily show the contents just to get the height
    detail.setAttribute("open", true);
    const content_height = content.clientHeight;
    detail.removeAttribute("open");
    
    // Set the correct height and let CSS transition it
    detail.style.height = toggle_height + content_height + "px";
    
    // Finally set the open attr
    detail.setAttribute("open", true);
  }
  
  close(i) {
    const detail = this.details[i];
    const toggle = this.toggles[i];
    
    // Update class
    detail.classList.add("is-closing");
    
    // Get height of toggle
    const toggle_height = toggle.clientHeight;
    
    // Set the height so only the toggle is visible
    detail.style.height = toggle_height + "px";
    
    setTimeout(() => {
      // Check if still closing
      if (detail.classList.contains("is-closing"))
        detail.removeAttribute("open");
        detail.classList.remove("is-closing");
    }, this.settings.speed);
  }
}

(() => {
  const els = document.getElementsByClassName("details-group");
  
  for (let i = 0; i < els.length; i++) {
    const details = new Details(els[i], {
      speed: 500,
      one_visible: true
    });
  }
})();    
      






