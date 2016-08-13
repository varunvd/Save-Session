window.onload = function() {
  document.getElementById('save').onclick = function()
  {
      save_all()
  }
  document.getElementById('savei').onclick = function()
  {
    reload_it()
  }

  function save_all()
  {
    var hold_data = []
    chrome.windows.getAll({populate:true},function(windows){
      windows.forEach(function(window){
        window.tabs.forEach(function(tab){
            hold_data.push(tab.url);
            console.log(hold_data)
          });
        });
      chrome.storage.sync.set({'myLine' : hold_data.toString()})
      });
  }
  function reload_it()
  {
    chrome.storage.sync.get('myLine', function(data) {
      console.log('muL')
      console.log(data)
      value = data.myLine
      var array = value.split(',')
      for(i in array)
      {
        chrome.tabs.create({"url" : array[i]})
      }

    });
  }
}
