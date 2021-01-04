if (!NexT.utils.isMobile()) {
  const apFixed = new APlayer({
    element: document.getElementById('aplayer-fixed'),
    mini: false,
    autoplay: false,
    mutex: true,
    lrcType: 3,
    fixed: true,
    theme: '#b19cd9',
    preload: 'metadata',
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        theme: '#ebd0c2'
    }]
});
  $.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
    success: function (list) {
      apFixed.list.add(list);
    }
  });
}
