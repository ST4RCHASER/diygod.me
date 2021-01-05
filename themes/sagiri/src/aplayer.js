if (!NexT.utils.isMobile()) {
  const apFixed = new APlayer({
    element: document.getElementById('aplayer-fixed'),
    autoplay: false,
    fixed: true,
    mutex: true,
    theme: '#b19cd9',
});
  $.ajax({
    url: 'https://storage.starchaser.workers.dev/0:/songs/lists.json',
    success: function (list) {
      apFixed.list.add(list);
    }
  });
}
