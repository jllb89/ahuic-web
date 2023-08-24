$(document).ready(function() {
    var navbar = $('.navbar');
    var navbarHeight = navbar.outerHeight();
    var lastScrollTop = 0;
  
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
  
      if (scrollTop === 0) {
        navbar.removeClass('scrolled-down scrolled-up').addClass('scrolled-top');
      } else if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        navbar.removeClass('scrolled-up scrolled-top').addClass('scrolled-down');
      } else {
        navbar.removeClass('scrolled-down scrolled-top').addClass('scrolled-up');
      }
  
      lastScrollTop = scrollTop;
    });
  });
  
  
  $(document).ready(function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var playPauseButton = document.getElementById('playPauseButton');
    var icon = playPauseButton.querySelector('i');
  
    playPauseButton.addEventListener('click', function() {
      if (videoPlayer.paused) {
        videoPlayer.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause', 'animate__animated', 'animate__heartBeat');
      } else {
        videoPlayer.pause();
        icon.classList.remove('fa-pause', 'animate__heartBeat');
        icon.classList.add('fa-play');
      }
    });
  
    videoPlayer.addEventListener('play', function() {
      icon.classList.remove('fa-play', 'animate__heartBeat');
      icon.classList.add('fa-pause', 'animate__animated', 'animate__heartBeat');
    });
  
    videoPlayer.addEventListener('pause', function() {
      icon.classList.remove('fa-pause', 'animate__heartBeat');
      icon.classList.add('fa-play');
    });
  });
  


  document.querySelectorAll('.video-carousel-card').forEach(card => {
    card.addEventListener('click', function() {
      var videoLink = this.getAttribute('data-video');
      document.getElementById('popupVideo').src = videoLink;
      document.getElementById('videoPopup').classList.remove('hidden');
    });
  });
  
  document.getElementById('videoPopup').addEventListener('click', function() {
    this.classList.add('hidden');
    var videoPlayer = document.getElementById('popupVideo');
    videoPlayer.pause(); // Pause the video
    videoPlayer.currentTime = 0; // Reset the video to the beginning
  });
  
  let carousel = document.querySelector('.video-carousel-wrapper');
  
  document.getElementById('scrollLeft').addEventListener('click', function() {
    carousel.scrollBy({
      left: -carousel.clientWidth / 2, // Adjust this value to control the scroll distance
      behavior: 'smooth'
    });
  });
  
  document.getElementById('scrollRight').addEventListener('click', function() {
    carousel.scrollBy({
      left: carousel.clientWidth / 2, // Adjust this value to control the scroll distance
      behavior: 'smooth'
    });
  });
  



  window.onload = function () {
    const videoIds = [
      '7123236182632172843',
      '7123236182632172843',
      '7123236182632172843',
      '7123236182632172843'
    ];
  
    videoIds.forEach((videoId, index) => {
      const containerId = `tiktok-embed-container${index + 1}`;
      const container = document.getElementById(containerId);
      if (container) {
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'tiktok-embed';
        blockquote.setAttribute('cite', `https://www.tiktok.com/@maccheesebykraft/video/${videoId}`);
        blockquote.setAttribute('data-video-id', videoId);
        blockquote.setAttribute('style', 'max-width: 480px;');
        container.appendChild(blockquote);
  
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        blockquote.appendChild(script);
      }
    });
  };
  