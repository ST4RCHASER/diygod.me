if (!NexT.utils.isMobile()) {
  const apFixed = new APlayer({
    element: document.getElementById('aplayer-fixed'),
    autoplay: false,
    fixed: true,
    mutex: true,
    theme: '#b19cd9',
});
  $.ajax({
    url: 'https://storage.yue.sh/0:/songs/playlist.json',
    success: function (list) {
      apFixed.list.add(list);
    }
  });
}
