$(function() {
              $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html, body').animate({
                      scrollTop: target.offset().top
                    }, 1000);
                    return false;
                  }
                }
              });
            });
            
            
            jQuery(document).ready(function($){
                var timelineBlocks = $('.project'),
                    offset = 0.8;

                //hide timeline blocks which are outside the viewport
                hideBlocks(timelineBlocks, offset);

                //on scolling, show/animate timeline blocks when enter the viewport
               

                $(window).on('scroll', function(){
                    $(".project").each(function(){
                        
                        if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.8 && $(this).hasClass('is-hidden') ) {
                        
                            $(this).removeClass('is-hidden').addClass('animated bounceIn');
                        }
                    });
                });

                function hideBlocks(blocks, offset) {
                    
                    blocks.each(function(){
                        $(this).addClass('is-hidden');
                    });
                }

            });

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


$(function(){
  $("#1").on({
   mouseover: function(){
    $(this).attr('src','assets/img/instagram_in.png');
  },
  mouseleave: function(){
    $(this).attr('src','assets/img/instagram_out.png');
  }
  });
  
});

$(function(){
  $("#2").on({
   mouseover: function(){
    $(this).attr('src','assets/img/linkedin_ub.png');
  },
  mouseleave: function(){
    $(this).attr('src','assets/img/linkedin.png');
  }
  });
  
});

$(function(){
  $("#3").on({
   mouseover: function(){
    $(this).attr('src','assets/img/gmail_in.png');
  },
  mouseleave: function(){
    $(this).attr('src','assets/img/gmail_out.png');
  }
  });
  
});

$(function(){
  $("#4").on({
   mouseover: function(){
    $(this).attr('src','assets/img/github_in.png');
  },
  mouseleave: function(){
    $(this).attr('src','assets/img/github_out.png');
  }
  });
  
});