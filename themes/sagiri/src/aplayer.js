if (!NexT.utils.isMobile()) {
  const apFixed = new APlayer({
    element: document.getElementById('aplayer-fixed'),
    autoplay: false,
    fixed: true,
    theme: '#b19cd9',
    audio: [{
      name: 'Can now, Can now',
      artist: 'Study',
      url: 'https://storage.starchaser.workers.dev/0:/songs/cannow.mp3',
      cover: 'https://storage.starchaser.workers.dev/0:/songs/cannow.jpg',
  }],
});
  $.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
    success: function (list) {
      apFixed.list.add(list);
    }
  });
}
